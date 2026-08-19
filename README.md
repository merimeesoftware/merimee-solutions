# Merimee

Native rebuild of [the old Wix Studio site](https://merimeesolutions.wixstudio.com/my-site-2).

**Michael Merimee** — DevOps engineer, formerly Merimee Solutions (web design & marketing).

> Sites and systems that serve a purpose.

The live preview of this rebuild is the Grok app this repo documents. Do **not** put the site in [`merimeesoftware/merimeesoftware`](https://github.com/merimeesoftware/merimeesoftware) — that repo is the GitHub **profile README** (`<username>/<username>`). A full app there would break the profile convention.

---

## What this is

Two chapters, one practice:

1. **Client delivery** from the Wix years — schools, a painting company, an artist, a musician, a media studio. Built when a page builder was the honest tool for a non-technical owner.
2. **Engineering** after going back to school — production TypeScript, Cloudflare Workers, and an agent that migrates the rest.

The new site keeps the Wix copy that still earns its place (*Showcase your mission*, the conversational contact form, the Wyoming Catholic / Catholic-publisher origin) and adds the GitHub work: Senior Schools Network, True Rankings, Elyra.

---

## Stack decision

| Option | Verdict |
| --- | --- |
| **TanStack Start + React + Vite + Tailwind** | **Chosen for this rebuild.** Server for the contact form and inquiry inbox, real routing, matches the Grok App Builder deploy path. |
| Astro | Strong for a fully static brochure. You have used it (family reunion). Weaker once the form and a signed-in inbox exist. |
| Cloudflare Workers / static assets | **Correct long-term home on your account.** Workers is now the standard (Pages is folding into Workers). Same shape as [True Rankings](https://github.com/merimeesoftware/cfb-ranking-algorithm). |
| Stay on Wix | The thing we are leaving. |

**Cloudflare next step:** keep this app as the source of truth, then add a Workers static-assets + Worker handler for `POST /api/inquiry` (or a Nitro `cloudflare-module` preset) when you want it on your zone. Do not dump the site into the profile README repo.

---

## Live-link audit (August 2026)

Only live URLs are offered as “Visit site.” Offline hosts are listed without a dead link.

### Client sites (from the Wix portfolio + profile README)

| Site | URL | Status | Notes |
| --- | --- | --- | --- |
| Holy Rollers | https://www.holyrollers.us/ | **Live** (Wix) | Website design, messaging |
| Chesterton Academy of Akron | https://akronchestertonacademy.org/ | **Live** (Squarespace) | Web redesign, building interest |
| Saint Joseph the Worker Academy | https://www.saintjosephtheworkeracademy.org/ | **Live** (Wix / Cloudflare) | Designed and built from the ground up |
| Parker Eidle | https://www.parkereidle.com/ | **Live** (Google Sites) | Thin musician page; still reachable |
| Alena Carter | http://www.alenacarter.art/ | **Offline** (no response / 503) | Design + messaging; link withheld |
| Bonfire Media | https://www.bonfiremedia.art/ | **Offline** (no response / 503) | Design, messaging, interest; link withheld |

### Engineering (from GitHub)

| Project | URL | Status |
| --- | --- | --- |
| Senior Schools Network | https://seniorschoolnetwork.com/ · [repo](https://github.com/merimeesoftware/Senior-Schools-Network) | **Live** (TypeScript / Netlify) |
| True Rankings (CFB) | [repo](https://github.com/merimeesoftware/cfb-ranking-algorithm) | Source — Cloudflare Worker deploy |
| Elyra | [repo](https://github.com/merimeesoftware/elyra) | Source — AI Wix→native migration engine |

Private repos (`michaels-mind`, `life-ops`, family reunion, etc.) are not listed on the public site.

---

## Site map

- `/` — hero, selected results, featured work, services, process
- `/work` — client + engineering
- `/work/:slug` — case notes; live link only if the host answered
- `/about` — origin story + current engineering work
- `/contact` — the old conversational form, now stored in Postgres
- `/login` + `/inquiries` — signed-in inbox for those messages

---

## Related

- Profile README: [merimeesoftware/merimeesoftware](https://github.com/merimeesoftware/merimeesoftware)
- Old Wix: https://merimeesolutions.wixstudio.com/my-site-2
- LinkedIn: https://www.linkedin.com/in/michael-merimee/
- X: https://x.com/MichaelMerimee
