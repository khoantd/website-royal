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

Modernize marketing home (agency editorial) and apply Royal Solution navy–gold brand board with professional CTA/a11y polish.

## Done

- Persisted brand-adapted `design-system/royal-solution/MASTER.md` + `pages/home.md`
- Rebuilt Hero: full-bleed video, brand-first, no badge/stats in fold
- Reordered home: Portfolio → Services → Process → Stats → Testimonials → Pricing → Blog → CTA
- Instrument-style MarketingServices navy chapter
- Quieter Stats/Testimonials/Pricing/Blog + full-bleed CTABanner
- Process heading align left; AnimatedCounter handles duration ≤ 0
- Applied navy–gold brand board (`#0A1931` / `#C5A059` / `#D4AF37` / `#1A3C8E`); remapped tokens; gold CTAs with navy text; royal orbs on dark chapters
- Fixed service mega-menu / services page icons: navy wells + gold glyphs (bypass NavigationMenuLink muted SVG rule)
- Aligned portfolio collage layout: shared `PortfolioBento` (full-width AI tile, light scrim, title-first captions, crop positions); home + `/portfolio` reuse it
- Modern navy glass SiteHeader: `#0A1931` blur bar, white/gold nav, gold active underline, logo without plate, scroll opacity bump
- About page: full company story (intro, mission, origin, product layers, differentiation) + contact CTA; removed placeholder leadership block / `LEADERSHIP_TEAM`
- Removed Blog from header + footer nav (routes/home preview unchanged)

## In progress

- _(none)_
- **Blockers:** none

## Next

1. Visual QA at `pnpm dev` (3001) — header over hero + light pages; About editorial sections
2. Extend polish to remaining marketing pages if needed

## Decisions

- Scope: home only agency modernize (1A + 2B); then full brand token remap to navy–gold board
- Primary CTA = gold (`bg-cta`) + navy label; aliases keep `brand-orange` → gold
- Keep Syne/DM Sans/JetBrains; ignore generic pink/purple design-system output
- Portfolio collage: project 6 `lg:col-span-3`; metric on hover (always visible when reduced-motion); `/portfolio` keeps text details under bento
- Header: always navy glass (no light flip); mega-menu + mobile sheet stay light for readability

## Gotchas

- Hero uses `-mt-16` to sit under fixed header for full-bleed
- Video autoplay disabled when `prefers-reduced-motion`
- PortfolioBento is client (framer-motion); portfolio page is RSC wrapping the client grid
- BrandLogo on header uses `plate={false}` (wordmark is white/gold)

## Pointers

| Item | Location |
|------|----------|
| Spec | plan: Modern navy header |
| Tasks | _(inline todos)_ |
| Branch | _(current)_ |
| Key files | `components/marketing/layout/SiteHeader.tsx`, `components/marketing/common/PortfolioBento.tsx` |
