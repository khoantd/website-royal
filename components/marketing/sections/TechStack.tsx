"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { TECH_STACK } from "@/lib/data/marketing-misc";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";

export function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <section className="border-y border-zinc-200 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          highlight={t("highlight")}
          subtitle={t("subtitle")}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {TECH_STACK.map((cat) => (
            <motion.div key={cat.category} variants={fadeUp}>
              <h3 className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wider text-brand-navy">
                {cat.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    title={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-zinc-700 transition-colors hover:border-brand-sky hover:text-zinc-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
