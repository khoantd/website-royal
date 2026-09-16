"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Cog, FlaskConical, PenLine, Rocket, Search, type LucideIcon } from "lucide-react";
import { PROCESS_STEP_IDS } from "@/lib/data/marketing-misc";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { cn } from "@/lib/utils";

const STEP_ICONS: LucideIcon[] = [Search, PenLine, Cog, FlaskConical, Rocket];

export function Process() {
  const t = useTranslations("Process");
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const panelId = `${baseId}-panel`;
  const [active, setActive] = useState(0);
  const last = PROCESS_STEP_IDS.length - 1;

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => Math.min(last, Math.max(0, i + dir)));
    },
    [last]
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      if (el?.closest?.("input, textarea, select, [contenteditable=true]")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const stepId = PROCESS_STEP_IDS[active];
  const Icon = STEP_ICONS[active] ?? Search;
  const deliverables = t.raw(`steps.${stepId}.deliverables`) as string[];

  const panelTransition = reduceMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 380, damping: 34 };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlight={t("highlight")}
          subtitle={t("subtitle")}
        />

        <div className="mt-10 space-y-6 sm:mt-14 lg:mt-16">
          <div
            role="tablist"
            aria-label={t("tablistAria")}
            className="relative -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0 sm:snap-none [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="pointer-events-none absolute bottom-1 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent sm:block"
              aria-hidden
            />
            {PROCESS_STEP_IDS.map((id, i) => {
              const StepIcon = STEP_ICONS[i] ?? Search;
              const selected = i === active;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={selected}
                  aria-controls={panelId}
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative z-10 flex min-w-[7.5rem] shrink-0 snap-center flex-col items-center gap-1.5 rounded-2xl border px-3 py-3 text-center transition-all duration-200 sm:min-w-0 sm:flex-1 sm:max-w-[140px]",
                    selected
                      ? "border-brand-sky bg-white shadow-[0_12px_40px_-20px_rgba(241,109,52,0.28)] ring-2 ring-brand-orange/20"
                      : "border-transparent bg-white/40 text-zinc-600 hover:border-zinc-200 hover:bg-white/80"
                  )}
                >
                  {selected ? (
                    <motion.span
                      layoutId={`${baseId}-process-pill`}
                      className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#0A1931]/[0.07] to-[#C5A059]/[0.05]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  ) : null}
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-md",
                      selected
                        ? "bg-gradient-to-br from-[#0A1931] to-[#C5A059]"
                        : "bg-gradient-to-br from-zinc-400 to-zinc-500"
                    )}
                  >
                    {id}
                  </span>
                  <StepIcon className={cn("h-4 w-4", selected ? "text-brand-navy" : "text-zinc-400")} strokeWidth={1.75} aria-hidden />
                  <span
                    className={cn(
                      "font-[family-name:var(--font-display)] text-xs font-semibold leading-tight",
                      selected ? "text-zinc-900" : "text-zinc-600"
                    )}
                  >
                    {t(`steps.${id}.title`)}
                  </span>
                </button>
              );
            })}
          </div>

          <div id={panelId} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="relative">
            <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-brand-orange/35 via-transparent to-brand-peach/25 opacity-80 blur-sm" />
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/75 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl" />

              <div className="relative px-4 py-6 sm:px-10 sm:py-10">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={active}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                    transition={panelTransition}
                    className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-10"
                  >
                    <div className="flex flex-col items-start gap-4 lg:items-center">
                      <div className="relative">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-sky/80 bg-gradient-to-br from-brand-sky/30 to-brand-sky/25 text-brand-navy shadow-inner sm:h-20 sm:w-20">
                          <Icon className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.5} aria-hidden />
                        </div>
                        <span className="absolute -right-1 -top-1 rounded-full bg-zinc-900 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] font-medium uppercase tracking-wider text-white">
                          {t(`steps.${stepId}.tag`)}
                        </span>
                      </div>
                      <div className="hidden w-px flex-1 min-h-[4rem] bg-gradient-to-b from-brand-sky/70 to-transparent lg:block" aria-hidden />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-[family-name:var(--font-mono)] text-[11px] font-medium uppercase tracking-[0.2em] text-brand-navy">
                          {t("stepOf", { step: stepId, total: PROCESS_STEP_IDS.length })}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-zinc-300" aria-hidden />
                        <span className="text-xs text-zinc-500">
                          {t("durationLabel", { duration: t(`steps.${stepId}.duration`) })}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                        {t(`steps.${stepId}.title`)}
                      </h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                        {t(`steps.${stepId}.desc`)}
                      </p>

                      <p className="mt-8 font-[family-name:var(--font-mono)] text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
                        {t("deliverablesHeading")}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label={t("deliverablesAria")}>
                        {deliverables.map((d) => (
                          <li
                            key={d}
                            className="rounded-full border border-brand-sky bg-brand-sky/30 px-3 py-1.5 text-xs font-medium text-brand-navy/90"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex h-1.5 gap-1 border-t border-zinc-100/80 bg-zinc-50/50 px-4 pb-4 pt-0 sm:px-10">
                {PROCESS_STEP_IDS.map((id, i) => (
                  <div key={id} className="h-full flex-1 overflow-hidden rounded-full bg-zinc-200/80">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#0A1931] to-[#D4AF37]"
                      initial={false}
                      animate={{
                        scaleX: i <= active ? 1 : 0.12,
                        opacity: i === active ? 1 : i < active ? 0.85 : 0.35,
                      }}
                      transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
