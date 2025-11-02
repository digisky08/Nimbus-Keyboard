# Nimbus Keyboard

Nimbus Keyboard is a small Next.js storefront demo for a mechanical keyboard product. It demonstrates a modern React/Next.js app structure with server and client components, slices (Prismic-like content), and a simple checkout flow. The Stripe payment gateway has been removed from this fork; the checkout and success pages now show a "payment system unavailable" message.

## Tech stack

- Next.js (app router)
- React
- TypeScript
- Tailwind CSS (utility-first styling)
- React Icons
- Prismic-like slice structure (slices and `slicemachine.config.json`)

Notes:
- Project files live under `src/` with the Next.js `app/` directory.
- Stripe integration was previously present but removed; checkout endpoints now return a placeholder message.

## Quick start (development)

These commands assume you have Node.js and npm installed.

Windows (PowerShell) example:

```pwsh
# install
npm install

# run the dev server
npm run dev
```

Common scripts (if present in `package.json`):

- `dev` — start Next.js in development mode
- `build` — production build
- `start` — start the production server
- `lint` — run linter

If your `package.json` uses `pnpm` or `yarn`, use the corresponding package manager.

## Build & deploy

1. Install dependencies: `npm install` (or `pnpm install` / `yarn install`).
2. Build: `npm run build`.
3. Start production server: `npm run start`.

This repository is suitable to deploy on Vercel (recommended for Next.js). On Vercel:
- Link the repository.
- Set the environment to use the correct Node version if required.
- No Stripe keys are needed for this fork because the payment gateway was removed.

## Project layout (important files)

- `src/app/` — Next.js app router pages and API routes
  - `src/app/page.tsx`, `src/app/layout.tsx`, etc.
  - `src/app/success/page.tsx` — order success / placeholder page
  - `src/app/api/checkout/[uid]/route.ts` — checkout API (now placeholder)
- `src/components/` — UI components (Keyboard, Keycap, Navbar, Loader, etc.)
- `src/slices/` — reusable content slices (BentoBox, Hero, SwitchPlayground, etc.)
- `src/checkout.ts` — simplified checkout helper after Stripe removal
- `public/` — static assets (sounds, hdr images)
- `customtypes/` — content model JSONs
- `package.json`, `tsconfig.json`, `next.config.ts` — standard project config

## Troubleshooting

- If you get build errors after pulling changes: run `npm install` to refresh installed packages.
- If the app complains about missing environment variables, check `.env.local` or your Vercel environment settings. For this fork, no Stripe keys are required.
- If TypeScript complains about missing types for Prismic or slice models, add the appropriate `prismicio-types.d.ts` file or adjust `tsconfig.json` include paths.

## Contributing

Small improvements are welcome:
- Add unit tests for small UI components.
- Add types for the existing slices and content models.
- Restore payment integrations behind feature flags or environment variables, if desired.
