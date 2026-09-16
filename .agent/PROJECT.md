# Project structure map

> Persistent overview for AI agents. Generated on first run by `/understand` (see `.cursor/commands/understand-project.md`). Update when architecture changes significantly.

## Meta

| Field | Value |
|-------|-------|
| **Updated** | 2026-09-16 |
| **Tool** | cursor |

## Stack

- **Language:** TypeScript
- **Framework:** Next.js 16 (App Router), React 19
- **UI:** Tailwind CSS 4, shadcn/ui (Radix), Framer Motion, Recharts
- **Data:** Axios + TanStack Query; JWT in `localStorage` (`access_token`)
- **Forms:** react-hook-form + Zod
- **Fonts:** Syne (display), DM Sans, JetBrains Mono
- **Brand:** Royal Solution (`lib/brand-colors.ts` — navy `#161E54`, orange `#F16D34`)
- **Package manager:** pnpm
- **E2E:** Playwright
- **Locale:** Vietnamese (`lang="vi"`)

Forked from Shadcn UI Kit free; customized as **Royal Solution** marketing site + admin CMS dashboard talking to an external API (`http://localhost:3000` by default).

## Layout

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router — marketing, guest auth, dashboard |
| `app/(marketing)/` | Public marketing site (home, about, services, portfolio, blog, contact) |
| `app/(guest)/` | Login, register, 404/500 |
| `app/dashboard/` | Protected admin (users, blogs, products, events, payments, settings) |
| `components/` | App shells, nav, landing/marketing sections, `ui/` (shadcn) |
| `api/` | Axios client + token helpers |
| `services/` | Auth, user, file API services |
| `lib/api/` | Domain API modules (blog, product, event, payment, category) |
| `hooks/` | TanStack Query hooks per domain |
| `types/` | Shared TS types for CMS entities |
| `routes/` | Route path constants |
| `lib/` | Brand, motion, landing data, utils, routes-config |
| `public/` | Static assets (`/images/logo-royal.png`, portfolio shots) |
| `tasks/` | Agent task checklist |
| `.cursor/` / `.claude/` / `.kiro/` / `.agents/` | AI agent hubs (synced) |

## Entry points

- **Root layout:** `app/layout.tsx` — fonts, Providers (React Query + next-themes)
- **Marketing home:** `app/(marketing)/page.tsx` — Royal Solution landing
- **Dashboard shell:** `app/dashboard/layout.tsx` — `ProtectedRoute` + `DashboardShell`
- **Auth:** `services/auth.service.ts` → `POST /auth/login`; token via `api/axiosClient.ts`
- **HTTP client:** `api/axiosClient.ts` — Bearer token, 401 → `/login`
- **Route constants:** `routes/paths.ts`
- **Proxy (Next):** `proxy.ts` — `/` stays on marketing (no redirect to dashboard)

## Key files

- `components/ProtectedRoute.tsx` — client-side token gate for `/dashboard/*`
- `components/LoginForm.tsx`, `components/DashboardShell.tsx`, `components/app-sidebar.tsx`
- `components/marketing/sections/*` — Hero, Services, Portfolio, Pricing, etc.
- `services/auth.service.ts`, `services/user.service.ts`
- `hooks/useUsers.ts`, `hooks/useBlog.ts`, `hooks/useProduct.ts`, …
- `lib/brand-colors.ts`, `lib/landing-data.ts`
- `playwright.config.ts`, `verify-banner-color.spec.ts`
- `Dockerfile`

## Commands

| Action | Command |
|--------|---------|
| Install | `pnpm install` |
| Dev | `pnpm dev` (port **3001**) |
| Build | `pnpm build` |
| Start | `pnpm start` |
| Lint | `pnpm lint` |
| E2E | `npx playwright test` |

## Code intelligence

| Item | Status |
|------|--------|
| CodeGraph index | present — 207 files, 2375 nodes, 5391 edges |
| Workspace root | `/Volumes/Data/Software Development/TypeScript/website-royal` |
| OntoSight | `npx royalsolution-ontosight@0.2.1 "/Volumes/Data/Software Development/TypeScript/website-royal"` |

## Notes

- README still says Shadcn UI Kit; product copy/branding is **Royal Solution** (VN).
- No `.env.example` in repo; README expects `.env.local` with `NEXT_PUBLIC_API_URL` — axios baseURL is currently hardcoded to `http://localhost:3000` in `api/axiosClient.ts`.
- API is external (CMS backend); this repo is frontend-only.
- Dashboard CRUD: users, blogs, products, category-products, events, payments, settings.
- Agent continuity: `.agent/SESSION.md` (template state as of onboarding).
