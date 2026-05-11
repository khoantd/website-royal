"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { LOGO_NAMES } from "@/lib/data/marketing-misc";

export function TrustedBy() {
  const row = [...LOGO_NAMES, ...LOGO_NAMES];

  return (
    <section className="border-y border-zinc-200 bg-white py-12">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-zinc-500">Được tin dùng</p>
        <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-600">
          Được tin dùng bởi <span className="text-zinc-900">200+</span> doanh nghiệp
        </p>
      </motion.div>

      <div className="relative mt-8 overflow-hidden">
        <div className="marketing-marquee flex w-max gap-16 py-4">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-[family-name:var(--font-display)] text-xl font-bold text-zinc-400 opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
