import { createHmac, timingSafeEqual } from 'node:crypto';

interface GoogleTokenInfo {
  aud?: string;
  azp?: string;
  email?: string;
  email_verified?: boolean | string;
  name?: string;
  picture?: string;
  sub?: string;
  iss?: string;
}

const isGoogleTokenInfo = (value: unknown): value is GoogleTokenInfo =>
  typeof value === 'object' &&
  value !== null &&
  (!('aud' in value) || typeof value.aud === 'string') &&
  (!('azp' in value) || typeof value.azp === 'string') &&
  (!('email' in value) || typeof value.email === 'string') &&
  (!('email_verified' in value) ||
    typeof value.email_verified === 'boolean' ||
    typeof value.email_verified === 'string') &&
  (!('name' in value) || typeof value.name === 'string') &&
  (!('picture' in value) || typeof value.picture === 'string') &&
  (!('sub' in value) || typeof value.sub === 'string') &&
  (!('iss' in value) || typeof value.iss === 'string');

interface SessionUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
}

interface SessionPayload {
  user: SessionUser;
  expiresAt: number;
}

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

const SESSION_COOKIE = 'pb_google_session';
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7;

const getSessionSecret = (): string | undefined => {
  const secret = process.env.AUTH_SESSION_SECRET;
  return secret &&
    Buffer.byteLength(secret, 'utf8') >= 32 &&
    !secret.includes('GENERATE_A_UNIQUE_SECRET')
    ? secret
    : undefined;
};

const createSessionToken = (user: SessionUser, secret: string): string => {
  const payload: SessionPayload = {
    user,
    expiresAt: Date.now() + SESSION_DURATION_SECONDS * 1000
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = createHmac('sha256', secret).update(encodedPayload).digest('base64url');
  return `${encodedPayload}.${signature}`;
};

const readSessionUser = (token: string | undefined, secret: string): SessionUser | undefined => {
  if (!token) return undefined;

  try {
    const [encodedPayload, encodedSignature, extraPart] = token.split('.');
    if (!encodedPayload || !encodedSignature || extraPart !== undefined) return undefined;

    const expectedSignature = createHmac('sha256', secret)
      .update(encodedPayload)
      .digest();
    const suppliedSignature = Buffer.from(encodedSignature, 'base64url');
    if (
      suppliedSignature.length !== expectedSignature.length ||
      !timingSafeEqual(suppliedSignature, expectedSignature)
    ) {
      return undefined;
    }

    const payload: unknown = JSON.parse(
      Buffer.from(encodedPayload, 'base64url').toString('utf8')
    );
    if (
      typeof payload !== 'object' ||
      payload === null ||
      !('expiresAt' in payload) ||
      typeof payload.expiresAt !== 'number' ||
      payload.expiresAt <= Date.now() ||
      !('user' in payload) ||
      typeof payload.user !== 'object' ||
      payload.user === null ||
      !('id' in payload.user) ||
      typeof payload.user.id !== 'string' ||
      !('name' in payload.user) ||
      typeof payload.user.name !== 'string' ||
      !('email' in payload.user) ||
      typeof payload.user.email !== 'string' ||
      ('picture' in payload.user && typeof payload.user.picture !== 'string')
    ) {
      return undefined;
    }

    const picture =
      'picture' in payload.user && typeof payload.user.picture === 'string'
        ? payload.user.picture
        : undefined;
    return {
      id: payload.user.id,
      name: payload.user.name,
      email: payload.user.email,
      ...(picture ? { picture } : {})
    };
  } catch {
    return undefined;
  }
};

const readCookie = (request: ApiRequest, name: string): string | undefined => {
  const header = request.headers?.cookie;
  const cookieHeader = Array.isArray(header) ? header.join('; ') : header;
  const cookie = cookieHeader?.split(';').find((part) => part.trim().startsWith(`${name}=`));
  if (!cookie) return undefined;

  try {
    return decodeURIComponent(cookie.trim().slice(name.length + 1));
  } catch {
    return undefined;
  }
};

const sessionCookie = (token: string, maxAge: number): string => {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  return `${SESSION_COOKIE}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}${secure}`;
};

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    const secret = getSessionSecret();
    const user = secret
      ? readSessionUser(readCookie(req, SESSION_COOKIE), secret)
      : undefined;
    if (!user) {
      res.status(401).json({ error: 'No active Google customer session.' });
      return;
    }

    res.status(200).json({ user });
    return;
  }

  if (req.method === 'DELETE') {
    res.setHeader('Set-Cookie', sessionCookie('', 0));
    res.status(200).json({ success: true });
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST, DELETE');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const sessionSecret = getSessionSecret();
  if (
    !clientId ||
    clientId.includes('YOUR_GOOGLE_WEB_CLIENT_ID') ||
    !sessionSecret
  ) {
    res.status(503).json({
      error: 'Google sign-in is not configured. Set GOOGLE_CLIENT_ID and a 32-character AUTH_SESSION_SECRET.'
    });
    return;
  }

  const body = req.body;
  const credential =
    typeof body === 'object' && body !== null && 'credential' in body
      ? body.credential
      : undefined;
  if (typeof credential !== 'string' || credential.length === 0 || credential.length > 8192) {
    res.status(400).json({ error: 'A valid Google credential is required.' });
    return;
  }

  let googleResponse: Response;
  try {
    const tokenInfoUrl = new URL('https://oauth2.googleapis.com/tokeninfo');
    tokenInfoUrl.searchParams.set('id_token', credential);
    googleResponse = await fetch(tokenInfoUrl, {
      method: 'GET',
      signal: AbortSignal.timeout(5000)
    });
  } catch {
    res.status(502).json({ error: 'Google identity verification is temporarily unavailable.' });
    return;
  }

  if (!googleResponse.ok) {
    res.status(401).json({ error: 'Google could not verify this sign-in. Please try again.' });
    return;
  }

  let tokenInfo: unknown;
  try {
    tokenInfo = await googleResponse.json();
  } catch {
    res.status(502).json({ error: 'Google returned an invalid verification response.' });
    return;
  }
  if (!isGoogleTokenInfo(tokenInfo)) {
    res.status(502).json({ error: 'Google returned an invalid verification response.' });
    return;
  }

  const validIssuer =
    tokenInfo.iss === 'accounts.google.com' || tokenInfo.iss === 'https://accounts.google.com';
  const verifiedEmail =
    tokenInfo.email_verified === true || tokenInfo.email_verified === 'true';
  if (
    !validIssuer ||
    tokenInfo.aud !== clientId ||
    (tokenInfo.azp !== undefined && tokenInfo.azp !== clientId) ||
    !verifiedEmail ||
    !tokenInfo.sub ||
    !tokenInfo.email
  ) {
    res.status(401).json({ error: 'Google returned an invalid or unverified account.' });
    return;
  }

  const user: SessionUser = {
    id: tokenInfo.sub,
    name: tokenInfo.name || tokenInfo.email,
    email: tokenInfo.email,
    ...(tokenInfo.picture ? { picture: tokenInfo.picture } : {})
  };
  const token = createSessionToken(user, sessionSecret);

  res.setHeader('Set-Cookie', sessionCookie(token, SESSION_DURATION_SECONDS));
  res.status(200).json({ user });
}
