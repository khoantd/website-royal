import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Image height in px (width follows intrinsic 244×94 ratio). */
  height?: number;
  /** Dark plate behind white/gold wordmark (needed on light backgrounds). */
  plate?: boolean;
};

/**
 * Royal Solution wordmark — transparent PNG with white + gold artwork.
 * Use `plate` on light surfaces so the mark stays visible.
 */
export function BrandLogo({ className, height = 40, plate = true }: BrandLogoProps) {
  const width = Math.round(height * (244 / 94));

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center",
        plate && "rounded-md bg-black px-2 py-1",
        className
      )}
    >
      <img
        src="/images/logo-royal-solution.png"
        alt="Royal Solution"
        width={width}
        height={height}
        className="block h-auto max-w-full w-auto"
        style={{ height }}
        loading="eager"
        decoding="async"
        draggable={false}
      />
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
