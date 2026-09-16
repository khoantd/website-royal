"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { setLocaleAction } from "@/app/actions/locale";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "vi", label: "VI" },
  { value: "en", label: "EN" },
];

type LanguageSwitcherProps = {
  className?: string;
  /** `header` = light-on-navy; `footer` = dark-on-white */
  variant?: "header" | "footer";
};

export function LanguageSwitcher({ className, variant = "header" }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function select(next: Locale) {
    if (next === locale) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  }

  const isHeader = variant === "header";

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold tracking-wide",
        isPending && "opacity-70",
        className
      )}
    >
      {OPTIONS.map((opt, i) => {
        const active = locale === opt.value;
        return (
          <span key={opt.value} className="inline-flex items-center gap-1">
            {i > 0 ? (
              <span
                className={cn("select-none", isHeader ? "text-white/30" : "text-zinc-300")}
                aria-hidden
              >
                |
              </span>
            ) : null}
            <button
              type="button"
              disabled={isPending}
              aria-pressed={active}
              onClick={() => select(opt.value)}
              className={cn(
                "min-h-9 min-w-9 cursor-pointer rounded-md px-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
                isHeader
                  ? cn(
                      "focus-visible:ring-[#C5A059] focus-visible:ring-offset-[#0A1931]",
                      active ? "text-white" : "text-white/50 hover:text-white"
                    )
                  : cn(
                      "focus-visible:ring-[#C5A059] focus-visible:ring-offset-white",
                      active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                    )
              )}
            >
              {opt.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
