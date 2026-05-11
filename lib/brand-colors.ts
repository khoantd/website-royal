/** Token màu RoyalTech — dùng chung cho gradient / SVG / comment trong code. */
export const brand = {
  sky: "#BBE0EF",
  navy: "#161E54",
  orange: "#F16D34",
  peach: "#FF986A",
} as const;

/** CTA chính: navy → cam (ổn định trên nền sáng). */
export const brandCtaGradient = `linear-gradient(135deg, ${brand.navy} 0%, ${brand.orange} 55%, ${brand.peach} 100%)`;
