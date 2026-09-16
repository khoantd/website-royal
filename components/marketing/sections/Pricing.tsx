"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { Button } from "@/components/ui/button";

const PLAN_KEYS = ["starter", "professional", "enterprise"] as const;

export function Pricing() {
  const t = useTranslations("Pricing");
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlight={t("highlight")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {PLAN_KEYS.map((key) => {
            const popular = key === "professional";
            const features = t.raw(`plans.${key}.features`) as string[];
            const missing = t.raw(`plans.${key}.missing`) as string[];

            return (
              <motion.div key={key} variants={fadeUp} className={popular ? "md:col-span-2 lg:col-span-1" : undefined}>
                <div
                  className={`relative flex h-full flex-col border p-6 sm:p-8 ${
                    popular ? "border-[#0A1931] bg-[#F7F9FC]" : "border-zinc-200 bg-white"
                  }`}
                >
                  {popular ? (
                    <p className="font-[family-name:var(--font-mono)] mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-orange">
                      {t("popular")}
                    </p>
                  ) : (
                    <div className="mb-4 h-4" aria-hidden />
                  )}
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">
                    {t(`plans.${key}.name`)}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{t(`plans.${key}.audience`)}</p>
                  <p className="mt-4 text-zinc-600">{t(`plans.${key}.desc`)}</p>
                  <ul className="mt-8 flex-1 space-y-3 text-sm">
                    {features.map((f) => (
                      <li key={f} className="flex gap-2 text-zinc-700">
                        <Check className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden /> {f}
                      </li>
                    ))}
                    {missing.map((m) => (
                      <li key={m} className="flex gap-2 text-zinc-400 line-through">
                        <span className="w-4 text-center" aria-hidden>
                          —
                        </span>{" "}
                        {m}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 w-full cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                  >
                    <Link href="/contact">{t("cta")}</Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
