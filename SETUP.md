# PlayBeat storefront setup

The storefront ships with the 69-product PKR catalog snapshot from [`uzzirulzz-cyber/izoko` commit `466a52a`](https://github.com/uzzirulzz-cyber/izoko/tree/466a52a18a22d93f7a0f8fcedd273368c40357fc), with its exact prices, 134 purchase variants, and real bundled WebP product images. The catalog snapshot works without credentials. Live MongoDB refresh and Google sign-in are opt-in and require deployment environment variables.

## Google sign-in

1. In [Google Cloud Console](https://console.cloud.google.com/), create or select a project and configure the OAuth consent screen. Add test users while the app is in testing.
2. Create an OAuth client ID with application type **Web application**. Add the deployed storefront origin (for example, `https://your-store.vercel.app`) and `http://localhost:3000` to **Authorized JavaScript origins**.
3. Configure these Vercel environment variables for every environment where sign-in should work:

   | Variable | Value |
   | --- | --- |
   | `VITE_GOOGLE_CLIENT_ID` | The Web application client ID; available to the browser |
   | `GOOGLE_CLIENT_ID` | The same client ID; server-side ID-token audience validation |
   | `AUTH_SESSION_SECRET` | A unique random secret, at least 32 characters |

   Generate a session secret with `node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"`. Do not commit the secret or put it in a `VITE_` variable.

Google sign-in verifies the returned ID token on the server and creates a signed, seven-day, HttpOnly cookie. The localStorage profile is not used to restore Google sessions.

## Administrator access

Configure these server-only Vercel environment variables before using `/admin`:

| Variable | Value |
| --- | --- |
| `ADMIN_EMAIL` | The administrator email address |
| `ADMIN_PASSWORD` | A unique password of at least 16 characters |
| `AUTH_SESSION_SECRET` | The same private, random secret used for Google sessions |

Do not prefix administrator credentials with `VITE_` or commit their values. Administrator login is verified by `/api/auth/admin`; successful sign-in creates an eight-hour, signed, HttpOnly cookie. The browser does not persist administrator authentication in localStorage. Sign-in remains disabled until all server-side values are configured.

## Optional live MongoDB catalog

1. In MongoDB Atlas, create an application database user with read-only access to the `playbeat` database, and allow network access from the deployment environment using your hosting provider's supported private networking or static egress configuration.
2. Configure these Vercel environment variables:

   | Variable | Value |
   | --- | --- |
   | `VITE_MONGODB_PRODUCTS_API` | `true` |
   | `MONGODB_URI` | The private MongoDB connection string |
   | `MONGODB_DB` | `playbeat` |

   The connection string and database credentials must remain server-only. Never set `MONGODB_URI` as a `VITE_` variable. The API reads the `products` and `product_images` collections. Product-image database references are served through `/api/products/images/:id`.

When live refresh is enabled, the storefront refreshes product names, prices, variants, stock, and images on load; existing MongoDB products continue to use their bundled local image when available. If the API is not enabled, the full bundled catalog remains available offline.

## Deploy

Connect the repository to Vercel using the repository root as the project root. Use the Vite framework preset, `npm run build` as the build command, and `dist` as the output directory. Add the environment variables above in Vercel **Project Settings → Environment Variables**, then redeploy after changing them.

To run locally, install the dependencies and use `npx vercel dev` so the `/api/*` functions run alongside the app. Plain `npm run dev` serves the storefront and bundled catalog, but Vite alone does not run the Vercel API functions.
