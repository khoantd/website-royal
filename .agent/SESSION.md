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

Improve marketing site responsiveness; polish mobile hero based on screenshot review.

## Done

- Mobile hero: tighter type/spacing, full-width CTAs, `min-h-dvh`, face-biased video crop
- SiteHeader: controlled mobile sheet (closes on nav), larger touch target, smaller logo on xs
- Sections: reduced mobile vertical padding; stats 2-col; pricing md 2-col; process snap scroll
- Contact form selects `w-full`; contact logo scales down on mobile
- Page titles / paddings on services, portfolio, blog, about, service detail
- `marketing-canvas` overflow-x clip + dvh; BrandLogo `max-w-full`
- Hero polish: hide plate logo on mobile, vertical center + safe-area bottom, stronger left scrim, slightly wider px

## In progress

- _(none)_

## Next

1. Optional: tablet polish for dashboard tables (separate from marketing)
2. Smoke-test Resend contact form when env keys are set (prior session)

## Decisions

- Preserve existing brand language; mobile-first spacing/type only — no redesign
- Mobile nav closes on route change via controlled Sheet `open` state

## Gotchas

- Dev server: port **3001**; sandbox can fail `uv_interface_addresses` — restart with full permissions if needed
- Contact selects need explicit `w-full` because shadcn `SelectTrigger` defaults to `w-fit`

## Pointers

| Item | Location |
|------|----------|
| Spec | _(adhoc)_ responsive marketing |
| Tasks | _(inline)_ |
| Branch | _(current)_ |
| Key files | `components/marketing/layout/SiteHeader.tsx`, `components/marketing/sections/Hero.tsx`, `components/marketing/ContactForm.tsx`, `app/globals.css` |
