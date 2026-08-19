# Deploy to Cloudflare

This site is a TanStack Start app. The long-term home is Cloudflare (Workers + static assets), matching the pattern used on [True Rankings](https://github.com/merimeesoftware/cfb-ranking-algorithm).

There is **no application database** and **no auth**. The contact form is a client-side POST to Formspree (or any compatible endpoint). You only need to supply the form id as a build-time env var.

## 1. Formspree (or equivalent)

1. Create a form at [formspree.io](https://formspree.io) (or use Web3Forms / your own endpoint).
2. Note the form id (e.g. `xyzabcde`).
3. Set it at build time:

```bash
# Local
export VITE_FORMSPREE_ID=xyzabcde

# Cloudflare Pages / Workers build settings
# Environment variable: VITE_FORMSPREE_ID = xyzabcde
```

Optional overrides:

- `VITE_FORM_ENDPOINT` — full URL if you are not using Formspree’s `/f/<id>` shape
- `VITE_PUBLIC_HOSTNAME` — e.g. `merimee.example.com` so OG tags use absolute image URLs

Without these the form still renders and falls back to “use LinkedIn.”

## 2. Build

```bash
npm ci
npm run build
```

Output lives under the Nitro / TanStack Start build directory (typically `.output` or `dist` depending on the current preset). The current Vite config uses the Vercel Nitro preset for local/CI convenience; for a pure Cloudflare target you can later switch the Nitro preset or move to Workers Assets + a thin handler.

## 3. Cloudflare options

### Option A — Cloudflare Pages (fastest path)

1. Connect the `merimeesoftware/merimee-solutions` repo in the Cloudflare dashboard (or via Wrangler).
2. Build command: `npm run build`
3. Output directory: whatever Nitro / TanStack Start emits for the static + SSR assets (inspect after a local build; commonly `.output/public` + server entry).
4. Add the env vars above under **Settings → Environment variables**.
5. Deploy. Point a custom domain when ready.

### Option B — Workers + Assets (closer to True Rankings)

1. Produce a static-friendly build (or keep the SSR worker entry).
2. Use Wrangler to publish assets + a Worker that serves the TanStack Start handler.
3. Mirror the deploy shape already used for the CFB ranking worker so both projects share the same Cloudflare account, zones, and operational habits.

Exact Wrangler config and asset mapping can be added once the first Pages deploy is live and the output layout is confirmed.

## 4. What we deliberately removed

- Better Auth (Google / X)
- Postgres / Neon / PGLite
- Signed-in `/inquiries` inbox
- All server-side inquiry persistence

Inquiries now arrive as email. That keeps the surface area small enough for a static-first or thin-Worker Cloudflare deploy and matches the original request: “Any inquiry could just be an email form.”

## 5. Smoke check after deploy

- `/` renders with the forest + copper palette and grain
- `/work` and `/work/:slug` only show live external links
- `/contact` submits when `VITE_FORMSPREE_ID` is set and shows the success state
- OG image (`/og.jpg`) and favicon resolve
- No references to `/login` or `/inquiries`
