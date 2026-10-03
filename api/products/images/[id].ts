import { MongoClient, ObjectId } from 'mongodb';

interface ApiRequest {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  send: (body: Buffer | string) => void;
  json: (body: unknown) => void;
}

interface ProductImage {
  bytes?: unknown;
  mime?: string;
}

let mongoClientPromise: Promise<MongoClient> | undefined;

const connectMongo = (uri: string): Promise<MongoClient> => {
  if (!mongoClientPromise) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });
    mongoClientPromise = client.connect().catch((error: unknown) => {
      mongoClientPromise = undefined;
      throw error;
    });
  }
  return mongoClientPromise;
};

const imageBuffer = (value: unknown): Buffer | undefined => {
  if (Buffer.isBuffer(value)) return value;
  if (value instanceof Uint8Array) {
    return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  }
  if (typeof value === 'string') return Buffer.from(value, 'base64');
  if (
    typeof value === 'object' &&
    value !== null &&
    'buffer' in value &&
    value.buffer instanceof Uint8Array &&
    'position' in value &&
    typeof value.position === 'number'
  ) {
    return Buffer.from(value.buffer.subarray(0, value.position));
  }
  return undefined;
};

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const id = req.query?.id;
  if (typeof id !== 'string' || !/^[a-f\d]{24}$/i.test(id)) {
    res.status(400).json({ error: 'A valid product image ID is required.' });
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    res.status(503).json({ error: 'MongoDB image storage is not configured.' });
    return;
  }

  try {
    const client = await connectMongo(uri);
    const image = await client
      .db(process.env.MONGODB_DB || 'playbeat')
      .collection<ProductImage>('product_images')
      .findOne({ _id: new ObjectId(id) });
    if (!image) {
      res.status(404).json({ error: 'Product image not found.' });
      return;
    }

    const bytes = imageBuffer(image.bytes);
    if (!bytes?.length || bytes.length > 10 * 1024 * 1024) {
      res.status(502).json({ error: 'Product image data is missing or exceeds the 10 MB limit.' });
      return;
    }
    const mime =
      image.mime === 'image/png' ||
      image.mime === 'image/webp' ||
      image.mime === 'image/gif'
        ? image.mime
        : 'image/jpeg';
    res.setHeader('Content-Type', mime);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(bytes);
  } catch {
    console.error('MongoDB product image query failed.');
    res.status(503).json({ error: 'MongoDB product images are temporarily unavailable.' });
  }
}
