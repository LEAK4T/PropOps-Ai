# PropOps AI — Live Demo

An interactive demo of PropOps AI: an executive analytics dashboard, unit ledger,
tenant communications log, one-click payment/delinquency tracking, an AI tenant
message assistant, maintenance triage, automated reminders, and a reputation
manager — with mock data for three sample properties (residential and commercial).

The full pitch one-pager is in [`docs/PropOps_AI_Pitch.docx`](docs/PropOps_AI_Pitch.docx).

This repo contains only the front-end demo. It does not include the production
database schema, backend, or any real client data.

## Fastest way to try it — no local setup required

**Option A — Connect the repo in the Cloudflare dashboard (no CLI, works like a "one-click deploy"):**

1. Push this repo to GitHub (see the Publishing section below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Connect to Git**, pick this repo.
3. Build command: `npm run build` — Build output directory: `out`.
4. Deploy. Cloudflare gives you a real `https://propops-ai-demo.<your-subdomain>.workers.dev` link.

That link is the one to actually send people — anyone who opens it can click through every tab, switch properties, log payments, and try the AI scenario buttons immediately, with nothing to install. Every future push to the repo redeploys automatically.

**Option B — Deploy from your machine with Wrangler (Cloudflare's CLI):**

```bash
npm install
npm install -g wrangler
wrangler login
npm run deploy
```

`npm run deploy` builds the static export and pushes it live via `wrangler deploy`, printing the live URL when it finishes.

*Why a static export instead of a full Next.js server on Cloudflare:* this demo has no backend calls — every interaction (payment logging, AI scenario buttons, property switching) is local React state. Cloudflare's tooling for running full server-side Next.js is genuinely still evolving, so for a demo that doesn't need a server at all, exporting to static files and serving them as Worker assets is simpler and more stable than pulling in that adapter layer for no reason. Your real production app (with actual Supabase data and API routes) is a different situation and will need that server-side setup — this demo intentionally doesn't.

## Option C — GitHub Codespaces (browser-only, no local setup)

1. On the repo's GitHub page, click the green **Code** button → **Codespaces** tab → **Create codespace on main**.
2. Wait for it to load (about a minute), then in the terminal that opens, run:
   ```bash
   npm install
   npm run dev
   ```
3. A popup will offer to open the running app in your browser — click it.

## Option D — Run it locally

```bash
git clone <your-repo-url>
cd propops-ai-demo
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What to click on during a demo

- Switch the **property dropdown** (top left) — every tab's data changes with it, including a commercial property with different terminology (Suites, Businesses).
- **Unit Ledger & Expenses** — try the four payment action icons on any unit row (Log Payment, Missed, Partial, Extension) and watch the status pill and activity feed update live.
- **Tenant Communications** — click "+ Log Communication" to add an entry, or resolve an existing one.
- **Tenant Message AI** and **Maintenance Triage** — click through the scenario buttons; each produces a genuinely different AI-drafted response.
- **Executive Analytics** — the "Live Automated Activity" feed is meant to show what the agents do autonomously once this is fully wired to a live backend.

## Publishing this repo to GitHub

If you haven't pushed this yet:

```bash
cd propops-ai-demo
git init
git add .
git commit -m "Initial demo"
git branch -M main
git remote add origin <your-empty-github-repo-url>
git push -u origin main
```

Then push it to GitHub and follow Option A above to connect it in the Cloudflare dashboard — or run `npm run deploy` (Option B) straight from your machine. Set the repo's visibility to **Public** if you want Codespaces to work for people you send the link to who don't have collaborator access.
