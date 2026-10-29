# Think Tank Solutions AI

**For The People. Not The Gurus.**

The Think Tank ecosystem site: Foundry Finn writes a complete localized business plan for free, then an 11-day launch sequence turns the plan into work. Eleven ventures sit in the house when a tool would actually help.

## What it is

- **Foundry Finn** — three questions (skill, zip, budget). Live web research. An 11-section blueprint with click-by-click implementation playbooks.
- **11-day launch** — where to go, what to click, what to say, done-when. Tracking after you generate a plan.
- **11 ventures** — Solutions, Digital, TerraForm Sovereign, TerraForm Oasis, Genesis, ClientFlow, Ancestry, TerraForm EduTainment, SimuTrade, Privacy-Pod, SiteForge.
- **25 tool swaps** — leave Kajabi, ClickFunnels, HubSpot, and the rest in four steps.

Organic only. $0 ad spend. Local / zip-first. Freemium.

## Stack

- TanStack Start + Router + Query (React 19, Vite, Tailwind v4)
- Better Auth (Google, X, email/password)
- Postgres (Neon in production, PGLite locally)
- xAI `grok-4.5` for Finn (web search + JSON plan)

## Run it

```bash
npm install
npm run dev
```

Dev server: `http://localhost:8080`.

```bash
npm run typecheck
npm run build
npm run preview
```

Set `DATABASE_URL` for Neon. Without it, the app uses embedded PGLite. Set `XAI_API_KEY` so Finn can generate plans. Do not commit secrets.

## Pages

| Path | What |
| --- | --- |
| `/` | Ecosystem hub |
| `/finn` | Foundry Finn brief |
| `/finn/app` | Three-question intake |
| `/plans/sample` | Sample 19148 pressure-washing blueprint |
| `/launch` | 11-day playbooks |
| `/tools` | 25 swaps with leave-steps |
| `/ventures` | The house |
| `/dashboard` | Plans, today’s playbook, venture lists |

## License

Private product of Think Tank Solutions AI. All rights reserved unless a license file is added.
