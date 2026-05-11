"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data/marketing-portfolio";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { Badge } from "@/components/ui/badge";

export function PortfolioPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading align="left" eyebrow="Portfolio" title="Dự án" highlight="nổi bật" subtitle="Một phần case study — xem thêm chi tiết trên trang portfolio." />
          <Link href="/portfolio" className="text-sm font-semibold text-brand-navy hover:text-brand-navy">
            Xem tất cả →
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PORTFOLIO_PROJECTS.slice(0, 6).map((p) => (
            <motion.article key={p.id} variants={fadeUp} className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-sm transition-all hover:border-brand-sky hover:shadow-[0_0_40px_-12px_rgba(241,109,52,0.22)]">
              <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-[#161E54]/20 to-[#FF986A]/10">
                {p.imageSrc ? (
                  <img
                    src={p.imageSrc}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="border-zinc-200 bg-zinc-100 text-zinc-600">
                    {t}
                  </Badge>
                ))}
              </div>
              <h3 className="font-[family-name:var(--font-display)] mt-3 text-lg font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">
                {p.industry}
                {p.location ? ` · ${p.location}` : ""}
              </p>
              <p className="mt-3 text-sm font-medium text-emerald-700">{p.metric}</p>
              <Link href="/portfolio" className="mt-4 inline-block text-sm font-medium text-brand-navy group-hover:underline">
                Xem case study →
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
