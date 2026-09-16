import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ eyebrow, title, highlight, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow ? (
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.25em] text-brand-navy">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-[family-name:var(--font-display)] mt-3 font-bold tracking-tight text-zinc-900",
          align === "left" ? "text-3xl sm:text-4xl md:text-5xl" : "text-3xl md:text-4xl"
        )}
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <GradientText>{highlight}</GradientText>
          </>
        ) : null}
      </h2>
      {subtitle && subtitle.trim() ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-zinc-600",
            align === "center" && "md:mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
