import { MongoClient } from 'mongodb';
import { MONGODB_PRODUCTS } from '../../src/data/dbNormalizedProducts.ts';
import { Product, ProductCategory } from '../../src/types.ts';

interface RawProduct {
  _id?: { toString: () => string };
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  originalPrice?: number;
  compareAtPrice?: number;
  duration?: string;
  tags?: unknown[];
  region?: string;
  rating?: number;
  reviewCount?: number;
  salesCount?: number;
  stock?: number;
  status?: string;
  active?: boolean;
  badge?: string;
  discountPercent?: number;
  description?: string;
  shortDescription?: string;
  features?: unknown[];
  variants?: unknown[];
  image?: string;
  images?: unknown[];
  licenseType?: string;
  [key: string]: unknown;
}

interface ApiRequest {
  method?: string;
}

interface ApiResponse {
  setHeader: (name: string, value: string) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
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

const categoryFor = (category: string): { category: ProductCategory; categoryLabel: string } => {
  const value = category.toLowerCase();
  if (value.includes('iptv')) return { category: 'iptv', categoryLabel: 'IPTV & Services' };
  if (
    value.includes('software') ||
    value.includes('ai') ||
    value.includes('office') ||
    value.includes('edit')
  ) {
    return { category: 'software', categoryLabel: 'Software & AI Tools' };
  }
  if (
    value.includes('game') ||
    value.includes('gift') ||
    value.includes('card') ||
    value.includes('psn') ||
    value.includes('steam')
  ) {
    return { category: 'gaming_vpn', categoryLabel: 'Gift Cards & Gaming' };
  }
  if (value.includes('projector') || value.includes('hardware')) {
    return { category: 'hardware', categoryLabel: 'Smart Projectors' };
  }
  if (value.includes('stream') || value.includes('music') || value.includes('entertainment')) {
    return { category: 'entertainment', categoryLabel: 'Streaming Subscriptions' };
  }
  return { category: 'entertainment', categoryLabel: 'Digital Subscriptions' };
};

const asPrice = (value: unknown): number | undefined =>
  typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : undefined;

const mapProduct = (record: RawProduct, existingProducts: Map<string, Product>): Product | undefined => {
  const id = record.id || record._id?.toString();
  const price = asPrice(record.price);
  const name = typeof record.name === 'string' ? record.name.trim() : '';
  if (!id || !name || price === undefined) return undefined;

  const existing = existingProducts.get(id);
  const { category, categoryLabel } = categoryFor(
    typeof record.category === 'string' ? record.category : existing?.categoryLabel || ''
  );
  const rawVariants = Array.isArray(record.variants)
    ? record.variants.flatMap((value, index) => {
        if (typeof value !== 'object' || value === null) return [];
        const variantPrice = 'price' in value ? asPrice(value.price) : undefined;
        if (variantPrice === undefined) return [];
        const variantName =
          'name' in value && typeof value.name === 'string'
            ? value.name
            : `Option ${index + 1}`;
        return [{
          id:
            'id' in value && typeof value.id === 'string'
              ? value.id
              : `${id}-variant-${index}`,
          name: variantName,
          duration: variantName,
          price: variantPrice
        }];
      })
    : [];
  const duration =
    (Array.isArray(record.tags) && typeof record.tags[2] === 'string' && record.tags[2]) ||
    record.duration ||
    (record.region ? `${record.region} · Digital` : 'Instant Access');
  const variants =
    rawVariants.length > 0
      ? rawVariants
      : [{ id: `${id}-default`, name: `${duration} Plan`, duration, price }];
  const stockCount =
    typeof record.stock === 'number' && Number.isFinite(record.stock)
      ? Math.max(0, record.stock)
      : existing?.stockCount ?? 0;
  const imageReferences = [
    record.image,
    ...(Array.isArray(record.images) ? record.images : [])
  ].filter((image): image is string => typeof image === 'string');
  const remoteImage = imageReferences.find((image) => image.startsWith('https://'));
  const databaseImage = imageReferences.find((image) =>
    /^\/api\/products\/images\/[a-f\d]{24}$/i.test(image)
  );
  const originalPrice = asPrice(record.originalPrice) ?? asPrice(record.compareAtPrice);
  const discountPercent = asPrice(record.discountPercent);
  const features = Array.isArray(record.features)
    ? record.features.filter((feature): feature is string => typeof feature === 'string')
    : existing?.features ?? ['Instant digital delivery', 'Customer support'];

  return {
    id,
    name,
    category,
    categoryLabel,
    price,
    ...(originalPrice !== undefined ? { originalPrice } : {}),
    duration,
    rating: asPrice(record.rating) ?? existing?.rating ?? 4.8,
    reviewCount: asPrice(record.reviewCount) ?? existing?.reviewCount ?? 0,
    salesCount: asPrice(record.salesCount) ?? existing?.salesCount ?? 0,
    inStock: stockCount > 0 && record.status !== 'inactive' && record.active !== false,
    stockCount,
    status:
      record.status === 'inactive' || record.status === 'draft' || record.active === false
        ? 'draft'
        : 'published',
    ...(typeof record.badge === 'string'
      ? { badge: record.badge }
      : record.bestSeller
        ? { badge: 'BEST SELLER' }
        : record.isHot || record.trending
          ? { badge: 'HOT' }
          : discountPercent !== undefined && discountPercent > 15
            ? { badge: `${discountPercent}% OFF` }
          : {}),
    description:
      (typeof record.description === 'string' && record.description) ||
      (typeof record.shortDescription === 'string' && record.shortDescription) ||
      existing?.description ||
      'Verified digital product with customer support.',
    features,
    variants,
    imageUrl:
      remoteImage || databaseImage || existing?.imageUrl || MONGODB_PRODUCTS[0].imageUrl,
    licenseType:
      record.licenseType === 'code' ||
      (typeof record.name === 'string' && record.name.toLowerCase().includes('key'))
        ? 'code'
        : existing?.licenseType ?? 'account_invite'
  };
};

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<void> {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    res.status(503).json({ error: 'MongoDB product sync is not configured on the server.' });
    return;
  }

  try {
    const client = await connectMongo(uri);
    const db = client.db(process.env.MONGODB_DB || 'playbeat');
    const records = await db.collection<RawProduct>('products').find({}).toArray();
    if (records.length === 0) {
      res.status(502).json({ error: 'The MongoDB products collection is empty.' });
      return;
    }

    const existingProducts = new Map(MONGODB_PRODUCTS.map((product) => [product.id, product]));
    const products = records
      .map((record) => mapProduct(record, existingProducts))
      .filter((product): product is Product => product !== undefined);
    if (products.length !== records.length) {
      res.status(502).json({ error: 'MongoDB contains products without a valid name or price.' });
      return;
    }

    res.status(200).json(products);
  } catch {
    console.error('MongoDB product catalog query failed.');
    res.status(503).json({ error: 'The MongoDB product catalog is temporarily unavailable.' });
  }
}
