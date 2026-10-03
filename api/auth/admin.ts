import { createHmac, timingSafeEqual } from 'node:crypto';

interface ApiRequest {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
}

interface AdminSession {
  role: 'admin';
  expiresAt: number;
}

const COOKIE_NAME = 'pb_admin_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 8;

const getSessionSecret = (): string | undefined => {
  const secret = process.env.AUTH_SESSION_SECRET;
  return secret &&
    Buffer.byteLength(secret, 'utf8') >= 32 &&
    !/^(YOUR_|CHANGE_ME|GENERATE_)/i.test(secret)
    ? secret
    : undefined;
};

const hmac = (value: string, secret: string) =>
  createHmac('sha256', secret).update(value).digest();

const securelyMatches = (candidate: string, expected: string, secret: string) =>
  timingSafeEqual(hmac(candidate, secret), hmac(expected, secret));

const isConfigured = (value: string | undefined): value is string =>
  typeof value === 'string' &&
  value.trim().length > 0 &&
  !/^(YOUR_|CHANGE_ME|GENERATE_|USE_A_)/i.test(value.trim());

const readCookie = (request: ApiRequest): string | undefined => {
  const header = request.headers?.cookie;
  const cookieHeader = Array.isArray(header) ? header.join('; ') : header;
  const cookie = cookieHeader?.split(';').find((part) => part.trim().startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return undefined;

  try {
    return decodeURIComponent(cookie.trim().slice(COOKIE_NAME.length + 1));
  } catch {
    return undefined;
  }
};

const createSession = (secret: string) => {
  const payload: AdminSession = {
    role: 'admin',
    expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = hmac(encodedPayload, secret).toString('base64url');
  return `${encodedPayload}.${signature}`;
};

const hasValidSession = (token: string | undefined, secret: string): boolean => {
  if (!token) return false;

  try {
    const [encodedPayload, encodedSignature, extraPart] = token.split('.');
    if (!encodedPayload || !encodedSignature || extraPart !== undefined) return false;

    const expectedSignature = hmac(encodedPayload, secret);
    const suppliedSignature = Buffer.from(encodedSignature, 'base64url');
    if (
      suppliedSignature.length !== expectedSignature.length ||
      !timingSafeEqual(suppliedSignature, expectedSignature)
    ) {
      return false;
    }

    const payload: unknown = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
    return (
      typeof payload === 'object' &&
      payload !== null &&
      'role' in payload &&
      payload.role === 'admin' &&
      'expiresAt' in payload &&
      typeof payload.expiresAt === 'number' &&
      payload.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
};

const sessionCookie = (token: string, maxAge: number): string => {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${maxAge}${secure}`;
};

const readCredentials = (body: unknown): { email: string; password: string } | undefined => {
  if (
    typeof body !== 'object' ||
    body === null ||
    !('email' in body) ||
    typeof body.email !== 'string' ||
    body.email.length > 320 ||
    !('password' in body) ||
    typeof body.password !== 'string' ||
    body.password.length > 1024
  ) {
    return undefined;
  }
  return { email: body.email.trim().toLowerCase(), password: body.password };
};

export default function handler(req: ApiRequest, res: ApiResponse): void {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', sessionCookie('', 0));
    res.status(200).json({ success: true });
    return;
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, DELETE');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const secret = getSessionSecret();
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!secret || !isConfigured(email) || !isConfigured(password) || password.length < 16) {
    res.status(503).json({
      error: 'Administrator sign-in is not configured. Set ADMIN_EMAIL, an ADMIN_PASSWORD of at least 16 characters, and a 32-character AUTH_SESSION_SECRET.'
    });
    return;
  }

  if (req.method === 'GET') {
    if (!hasValidSession(readCookie(req), secret)) {
      res.status(401).json({ error: 'No active administrator session.' });
      return;
    }
    res.status(200).json({ authenticated: true });
    return;
  }

  const credentials = readCredentials(req.body);
  if (
    !credentials ||
    !securelyMatches(credentials.email, email, secret) ||
    !securelyMatches(credentials.password, password, secret)
  ) {
    res.status(401).json({ error: 'Invalid administrator credentials.' });
    return;
  }

  res.setHeader('Set-Cookie', sessionCookie(createSession(secret), SESSION_DURATION_SECONDS));
  res.status(200).json({ authenticated: true });
}
