import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Rendered height in px (width follows 540×188 aspect). */
  height?: number;
  /** Dark plate behind white/gold wordmark (needed on light backgrounds). */
  plate?: boolean;
};

/** Intrinsic wordmark aspect (540×188) — wide enough for Syne “SOLUTION”. */
const LOGO_ASPECT = 540 / 188;

/**
 * Royal Solution wordmark — inline SVG (vector-crisp at any size).
 * Artwork uses site display font + brand gold/sky. Use `plate` on light surfaces.
 */
export function BrandLogo({ className, height = 40, plate = true }: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const orb = `rs-orb-${uid}`;
  const orbCore = `rs-orb-core-${uid}`;
  const gold = `rs-gold-${uid}`;
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center",
        plate && "rounded-md bg-black px-2 py-1",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 580 188"
        width={width}
        height={height}
        className="block h-auto max-w-full w-auto"
        style={{ height }}
        role="img"
        aria-label="Royal Solution"
      >
        <title>Royal Solution</title>
        <defs>
          <linearGradient id={orb} x1="30%" y1="15%" x2="75%" y2="90%">
            <stop offset="0%" stopColor="#8eb8ff" />
            <stop offset="45%" stopColor="#4d8ef0" />
            <stop offset="100%" stopColor="#1a5fd4" />
          </linearGradient>
          <linearGradient id={orbCore} x1="35%" y1="25%" x2="70%" y2="85%">
            <stop offset="0%" stopColor="#e8f1ff" />
            <stop offset="100%" stopColor="#6aa0f5" />
          </linearGradient>
          <linearGradient id={gold} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e0c878" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#a8863a" />
          </linearGradient>
        </defs>

        <g fill="none" strokeLinecap="round">
          <path d="M58 128 L92 92 L126 56" stroke="#5a9aef" strokeWidth="3" opacity="0.55" />

          <circle cx="58" cy="128" r="18" fill={`url(#${orb})`} />
          <circle cx="58" cy="128" r="9" fill={`url(#${orbCore})`} />
          <circle cx="58" cy="128" r="18" stroke="#9ec4ff" strokeWidth="1.5" opacity="0.45" />

          <circle cx="92" cy="92" r="24" fill={`url(#${orb})`} />
          <circle cx="92" cy="92" r="12" fill={`url(#${orbCore})`} />
          <circle cx="92" cy="92" r="24" stroke="#9ec4ff" strokeWidth="1.75" opacity="0.5" />

          <circle cx="126" cy="56" r="30" fill={`url(#${orb})`} />
          <circle cx="126" cy="56" r="15" fill={`url(#${orbCore})`} />
          <circle cx="126" cy="56" r="30" stroke="#b6d4ff" strokeWidth="2" opacity="0.55" />

          <path
            d="M112 28 L118 38 L126 24 L134 38 L140 28 L138 42 L114 42 Z"
            fill={`url(#${gold})`}
            stroke="#e8d49a"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <circle cx="112" cy="27" r="2.2" fill="#e8d49a" />
          <circle cx="126" cy="22" r="2.4" fill="#f0e0a8" />
          <circle cx="140" cy="27" r="2.2" fill="#e8d49a" />
        </g>

        <g
          className="font-[family-name:var(--font-display)]"
          fontWeight="800"
          letterSpacing="0.04em"
        >
          <text x="176" y="72" fill="#ffffff" fontSize="42">
            ROYAL
          </text>
          <text x="176" y="118" fill={`url(#${gold})`} fontSize="42">
            SOLUTION
          </text>
        </g>
        <rect x="176" y="128" width="220" height="2.5" rx="1" fill={`url(#${gold})`} />
        <text
          x="176"
          y="152"
          fill="#d4d4d8"
          className="font-[family-name:var(--font-display)]"
          fontSize="13"
          fontWeight="600"
          letterSpacing="0.22em"
        >
          TECHNOLOGY SOLUTIONS
        </text>
      </svg>
    </span>
  );
}

/** Square mark (black plate baked in) for sidebar icon / compact slots. */
export function BrandLogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-royal-solution-mark.png"
      alt="Royal Solution"
      width={40}
      height={40}
      className={cn("block size-8 rounded-sm object-cover group-data-[collapsible=icon]:size-6", className)}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}
