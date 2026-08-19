# Merimee

Native rebuild of [the old Wix Studio site](https://merimeesolutions.wixstudio.com/my-site-2).

**Michael Merimee** — DevOps engineer, formerly Merimee Solutions (web design & marketing).

> I sit between the problem and the system.

This repo is the source of truth for the site. Do **not** put the app in [`merimeesoftware/merimeesoftware`](https://github.com/merimeesoftware/merimeesoftware) — that repo is the GitHub **profile README** (`<username>/<username>`).

It is a **personal portfolio**, not a freelance storefront. Hiring managers and technical leaders are the audience.

---

## What this is

Two chapters, one practice:

1. **Engineering** after going back to school — platform work, production TypeScript, Cloudflare Workers, and disciplined AI assistance.
2. **Client delivery** from the Wix years — schools, a painting company, a musician. Built when a page builder was the honest tool for a non-technical owner.

Elyra lives here as a chapter in how I learned to use AI, not as a product to buy.

---

## Stack

TanStack Start + React + Vite + Tailwind. Postgres (Neon in production, PGLite in preview) for the contact form and signed-in inquiry inbox. Auth via Google / X.

**Cloudflare** is the correct long-term home on this account (same shape as [True Rankings](https://github.com/merimeesoftware/cfb-ranking-algorithm)). Keep this app as the source of truth, then add a Workers static-assets + handler when it should live on the zone.

---

## Site map

- `/` — hero, selected results, featured work, plan
- `/work` — engineering first, then client delivery
- `/work/:slug` — case notes; live link only if the host answered
- `/about` — origin story + AI practice arc
- `/contact` — conversational form, stored in Postgres
- `/login` + `/inquiries` — signed-in inbox for those messages

---

## Live-link audit (August 2026)

Only live URLs are offered as “Visit site.” Offline hosts are listed without a dead link.

### Client sites

| Site | URL | Status | Notes |
| --- | --- | --- | --- |
| Holy Rollers | https://www.holyrollers.us/ | **Live** (Wix) | Website design, messaging |
| Chesterton Academy of Akron | https://akronchestertonacademy.org/ | **Live** (Squarespace) | Teaching context; not featured work |
| Saint Joseph the Worker Academy | https://www.saintjosephtheworkeracademy.org/ | **Live** (Wix / Cloudflare) | Designed and built from the ground up |
| Parker Eidle | https://www.parkereidle.com/ | **Live** (Google Sites) | Thin musician page; still reachable |
| Alena Carter | http://www.alenacarter.art/ | **Offline** | Design + messaging; link withheld |
| Bonfire Media | https://www.bonfiremedia.art/ | **Offline** | Design, messaging; link withheld |

### Engineering

| Project | URL | Status |
| --- | --- | --- |
| Senior Schools Network | https://seniorschoolnetwork.com/ · [repo](https://github.com/merimeesoftware/Senior-Schools-Network) | **Live** (TypeScript / Netlify) |
| True Rankings (CFB) | [repo](https://github.com/merimeesoftware/cfb-ranking-algorithm) | Source — Cloudflare Worker deploy |
| Elyra | [repo](https://github.com/merimeesoftware/elyra) | Source — AI practice, not a product |

Private repos (`michaels-mind`, `life-ops`, family reunion, etc.) are not listed on the public site.

---

## Related

- Profile README: [merimeesoftware/merimeesoftware](https://github.com/merimeesoftware/merimeesoftware)
- Old Wix: https://merimeesolutions.wixstudio.com/my-site-2
- LinkedIn: https://www.linkedin.com/in/michael-merimee/
- X: https://x.com/MichaelMerimee
