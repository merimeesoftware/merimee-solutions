# Deploy to Cloudflare (Resend contact form)

The portfolio is a TanStack Start app. Contact submissions run as a **server function** on the Cloudflare Worker host and are delivered by **Resend** to your Gmail. There is no database and no auth.

## 1. Resend setup (once)

1. Create a free account at [resend.com](https://resend.com).
2. **API Keys** → create a key. Copy it (`re_…`).
3. Under emails / audience, make sure the address you want to receive mail is allowed.
   - On the free tier with no custom domain, Resend sends **from** `onboarding@resend.dev` **to** the email on your Resend account (verify that address if asked).
4. Optional later: add and verify your own domain, then set `CONTACT_FROM_EMAIL` to something like `Merimee <hello@yourdomain.com>`.

Target inbox for this project: **michaeltmerimee@gmail.com** (set via env below).

## 2. Environment variables (Cloudflare)

In the Pages / Workers project → **Settings → Variables and Secrets**:

| Name | Secret? | Example | Purpose |
|------|---------|---------|---------|
| `RESEND_API_KEY` | **Yes** | `re_xxxx` | Resend API key |
| `CONTACT_TO_EMAIL` | No | `michaeltmerimee@gmail.com` | Where inquiries land |
| `CONTACT_FROM_EMAIL` | No | `Merimee <onboarding@resend.dev>` | Optional; defaults to onboarding@resend.dev |
| `VITE_PUBLIC_HOSTNAME` | No | `merimee.example.com` | Used for OG image absolute URL |

Do **not** prefix the Resend key with `VITE_` — it must stay server-only.

## 3. Deploy paths

### Option A — Cloudflare Pages (simplest)

1. Connect `merimeesoftware/merimee-solutions` in the Cloudflare dashboard.
2. Build command: `npm run build`
3. Output directory: whatever Nitro / TanStack Start emits (inspect after a local build; commonly `.output/public` or the Workers Assets root).
4. Add the env vars above.
5. Deploy. Attach a custom domain when ready.

### Option B — Workers + Assets (True Rankings shape)

1. Prefer the Cloudflare Vite plugin / `wrangler deploy` flow for TanStack Start when you want the same operational model as the CFB ranking worker.
2. Set the same secrets via `wrangler secret put RESEND_API_KEY` and vars in the dashboard.
3. Mirror account, zone, and habit with True Rankings.

Exact Wrangler asset mapping can be tightened after the first successful Pages or Workers deploy when the build output layout is confirmed.

## 4. What the form does

- Client posts through a TanStack **server function** (`submitContact` in `src/lib/contact.ts`).
- Server validates fields + honeypot, then `POST https://api.resend.com/emails`.
- `reply_to` is the visitor’s address so you can hit Reply in Gmail.
- No Postgres, no inbox UI, no auth.

## 5. Free-tier headroom

- Resend free: **3,000 emails/month**, **100/day** — more than enough for a personal portfolio.
- Cloudflare Pages free: unlimited static bandwidth, 500 builds/month.

## 6. Smoke check after deploy

- `/` renders forest + copper palette
- `/work` and `/work/:slug` only offer live external links
- `/contact` submits and shows the success state when env vars are set
- Submission appears in **michaeltmerimee@gmail.com** (check spam once)
- OG image and favicon resolve
- No `/login` or `/inquiries` routes
