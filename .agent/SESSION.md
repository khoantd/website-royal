# Agent session

> Cross-tool handoff state for Cursor, Claude Code, and Kiro. Update at session end (`/handoff`) or phase changes; read at session start (`/resume`).

## Meta

| Field | Value |
|-------|-------|
| **Updated** | 2026-09-16 |
| **Phase** | build |
| **Tool** | cursor |
| **Persona** | frontend |

## Goal

Add marketing-site i18n (VI / EN) with cookie + Accept-Language locale switching (no URL prefixes).

## Done

- Mobile hero / header / section responsive polish (prior session)
- `next-intl` without locale routing: cookie `locale` + `Accept-Language` fallback (default `vi`)
- Message catalogs: `messages/vi.json`, `messages/en.json`
- `LanguageSwitcher` in SiteHeader (desktop + mobile) and SiteFooter
- Marketing copy/pages/sections wired to translations; data files keep structure only
- Contact logo panel: full `bg-zinc-950` plate + `plate={false}` + larger mark (no nested black box)
- BrandLogo: vector inline SVG (Syne + brand gradients) + hi-res PNG/SVG assets; unique gradient ids via `useId`
- Removed homepage BlogPreview (“Insights & trends”); `/blog` routes kept

## In progress

- _(none)_

## Next

1. Optional: localize contact-form Zod validation messages / internal email labels
2. Smoke-test Resend contact form when env keys are set
3. Optional: tablet polish for dashboard tables
4. Optional: refresh `logo-royal-solution-mark.png` to match new wordmark icon

## Decisions

- Marketing only (dashboard/guest unchanged for copy)
- Keep current URLs; locale via cookie (`locale`) and Accept-Language when unset
- Default locale: Vietnamese (`vi`)

## Gotchas

- Dev server: port **3001**; sandbox can fail `uv_interface_addresses` — restart with full permissions if needed
- Contact selects need explicit `w-full` because shadcn `SelectTrigger` defaults to `w-fit`
- After locale switch, `router.refresh()` reloads RSC tree — no URL change

## Pointers

| Item | Location |
|------|----------|
| Spec | _(adhoc)_ marketing i18n |
| Tasks | _(inline)_ |
| Branch | _(current)_ |
| Key files | `i18n/request.ts`, `messages/*.json`, `components/marketing/LanguageSwitcher.tsx`, `app/actions/locale.ts`, `components/marketing/layout/SiteHeader.tsx` |
