"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { STATS } from "@/lib/data/marketing-misc";
import { AnimatedCounter } from "@/components/marketing/common/AnimatedCounter";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(22,30,84,0.05),transparent)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.08) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto grid max-w-[1280px] gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-[family-name:var(--font-display)] text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-[#F16D34] to-[#FF986A] bg-clip-text text-transparent">
                <AnimatedCounter value={s.value} suffix={s.suffix} duration={2} />
              </span>
            </div>
            <p className="mt-3 text-sm text-zinc-600">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
