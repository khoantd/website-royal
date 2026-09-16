/** Token màu Royal Solution — dùng chung cho gradient / SVG / comment trong code. */
export const brand = {
  navy: "#0A1931",
  royal: "#1A3C8E",
  gold: "#C5A059",
  goldBright: "#D4AF37",
  mist: "#E8EEF5",
  /** @deprecated alias → mist */
  sky: "#E8EEF5",
  /** @deprecated alias → gold */
  orange: "#C5A059",
  /** @deprecated alias → goldBright */
  peach: "#D4AF37",
} as const;

/** CTA chính: navy → gold (ổn định trên nền sáng/tối). */
export const brandCtaGradient = `linear-gradient(135deg, ${brand.navy} 0%, ${brand.gold} 55%, ${brand.goldBright} 100%)`;
