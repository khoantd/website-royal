# Royal Solution — Design System (Master)

> Brand board: midnight navy + muted gold + soft royal orbs.
> Pattern: Trust & Authority + Conversion (ui-ux-pro-max).

## Brand colors

| Token | Hex | Usage |
|-------|-----|--------|
| Navy | `#0A1931` | Dark chapters, text on light, on-gold CTA text |
| Soft navy | `#132A52` | Gradient mid-stops |
| Royal | `#1A3C8E` | Soft circular glows |
| Gold | `#C5A059` | Accents, hovers, thin rules |
| Gold bright / CTA | `#D4AF37` | Primary CTA fill (`bg-cta`) |
| Mist | `#E8EEF5` | Light tint / borders (`brand-sky`) |

CSS aliases (Tailwind): `brand-navy`, `brand-orange` (=gold), `brand-peach` (=goldBright), `brand-sky` (=mist).

## Typography

- Display: Syne (`--font-display`)
- Body: DM Sans
- Labels: JetBrains Mono

## Pattern (home)

1. Hero (full-bleed, brand-first, gold CTA)
2. Portfolio
3. Services (navy manifesto + rows)
4. Process
5. Stats + Testimonials
6. Pricing
7. Blog
8. Full-bleed CTA

## CTA rules

- Primary: `bg-cta text-cta-foreground` (gold + navy text)
- Secondary on dark: gold/white outline
- Secondary on light: navy outline
- Hover 150–300ms; focus ring 2px gold/navy with offset
- Min height 44px on primary CTAs

## Motifs

- Soft overlapping royal/navy orbs on dark chapters (right-weighted)
- Thin gold vertical rules on manifesto / hero copy
- No purple/pink AI gradients; no orange/peach leftovers

## Avoid

- White text on gold CTAs (use navy)
- Pill badges / stats in first viewport
- Excessive glow or multi-layer shadows
- Emoji as icons

## Pre-delivery checklist

- [ ] No emojis as icons (Lucide)
- [ ] cursor-pointer on clickable elements
- [ ] Hover 150–300ms
- [ ] Contrast ≥ 4.5:1
- [ ] Visible focus states
- [ ] prefers-reduced-motion respected
- [ ] Responsive: 375 / 768 / 1024 / 1440
