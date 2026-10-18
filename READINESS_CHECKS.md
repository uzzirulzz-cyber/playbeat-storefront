# Isolated storefront release checks

This is a non-production readiness checklist. The source repository contains a Vite application and npm lockfile.

## Build and type-check

Use Node.js 24 in a disposable workspace:

```sh
npm ci --ignore-scripts --no-audit --no-fund
npm run lint
npm run build
test -f dist/index.html
```

Do not supply production database or OAuth credentials to build validation. This procedure does not deploy or migrate databases.

## Functional validation

- Check catalog browsing, search, variants, cart, pricing, and mobile layouts.
- Check sign-in and checkout in a staging environment using test credentials only.
- Confirm that private API endpoints do not expose secrets or permit unauthorized writes.
- Confirm screenshots and the demo are from the actual current build.
- Record third-party assets, package licenses, product branding rights, and whether the code is licensed non-exclusively or transferred.

**Sale-ready requires** a recorded passing build, authenticated critical-flow tests, a functioning demo, and legal rights approval. Repository presence and a Vercel READY status are not sufficient.
