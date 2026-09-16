"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { STATS_META } from "@/lib/data/marketing-misc";
import { AnimatedCounter } from "@/components/marketing/common/AnimatedCounter";

export function Stats() {
  const t = useTranslations("Stats");
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-zinc-200/80 bg-white py-14 sm:py-20 lg:py-24">
      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8"
      >
        {STATS_META.map((s) => {
          const label = t(`items.${s.key}`);
          return (
            <div key={s.key} className="text-center lg:text-left">
              <div className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} duration={reduceMotion ? 0 : 2} />
              </div>
              <p className="mt-3 text-sm text-zinc-500">{label}</p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
