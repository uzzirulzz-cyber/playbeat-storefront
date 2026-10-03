# PlayBeat Digital Storefront

PlayBeat is a React and Vite storefront for digital subscriptions, gift cards, software, gaming products, and smart projectors.

## Product catalog

The bundled product catalog contains **69 products**, current catalog-snapshot PKR prices, **134 product variants**, and 63 real product images. Product cards, category browsing, product details, and cart use the same catalog. Prices and images are available offline. See [SETUP.md](./SETUP.md) to opt into fetching current catalog data from MongoDB.

## Run locally

Requirements: Node.js 24 LTS and npm.

```sh
npm install
npm run lint
npm run build
npx vercel dev
```

The Vercel development server is needed for `/api/*` functions. For a static storefront preview, run `npm run preview` after building.

## Deploy to Vercel

Connect the repository as a Vite project with build command `npm run build` and output directory `dist`. Add the private environment variables described in [SETUP.md](./SETUP.md) in Vercel Project Settings. The bundled product catalog works without database credentials. Google OAuth and live MongoDB synchronization stay disabled until explicitly configured.

Never commit `.env.local`, MongoDB connection strings, OAuth secrets, or session-signing keys.
