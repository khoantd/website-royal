"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { cn } from "@/lib/utils";

export function MarketingServices() {
  return (
    <section className="relative border-t border-[#BBE0EF]/70 bg-gradient-to-b from-[#f7fbff] via-white to-[#f2f8fb] py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dịch vụ"
          title="Giải pháp toàn diện cho"
          highlight="doanh nghiệp"
          subtitle="Từ website đến AI — một đối tác, mọi giải pháp số."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 flex flex-col gap-16 lg:gap-24"
        >
          {SERVICE_OFFERINGS.map((s, i) => {
            const imageLeft = i % 2 === 1;
            const Icon = s.icon;

            const textBlock = (
              <div
                className={cn(
                  "service-text relative z-10 w-full",
                  "lg:w-[calc(50%-1.75rem)] lg:max-w-[calc(50%-1.75rem)]",
                  imageLeft ? "lg:ml-auto" : ""
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg sm:h-14 sm:w-14",
                      s.gradient,
                      s.iconGlow
                    )}
                  >
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-zinc-900 sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{s.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-zinc-600 sm:text-[0.9375rem]">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-orange"
                >
                  Xem chi tiết <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );

            const mediaInner = s.imageSrc ? (
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={s.imageSrc}
                  alt={s.title}
                  className={cn(
                    "absolute inset-0 block h-full w-full object-cover select-none",
                    s.imageCoverPosition ?? "object-center"
                  )}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </div>
            ) : (
              <div className="flex h-full min-h-full w-full items-center justify-center bg-gradient-to-br from-white via-zinc-50 to-brand-sky/20">
                <div
                  className={cn(
                    "flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-xl sm:h-36 sm:w-36",
                    s.gradient,
                    s.iconGlow
                  )}
                >
                  <Icon className="h-14 w-14 sm:h-16 sm:w-16" aria-hidden />
                </div>
              </div>
            );

            const mediaBlock = (
              <div
                className={cn(
                  "image-host relative z-20 h-[220px] w-full sm:h-[300px]",
                  "lg:absolute lg:top-0 lg:bottom-0 lg:h-auto lg:min-h-[400px] lg:w-[calc(50%-1.75rem)]",
                  imageLeft ? "lg:left-0 lg:right-auto" : "lg:right-0 lg:left-auto"
                )}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md">
                  {mediaInner}
                </div>
              </div>
            );

            return (
              <motion.article
                key={s.slug}
                variants={fadeUp}
                className={cn(
                  "relative flex flex-col gap-10 rounded-3xl px-4 py-6 sm:px-6 sm:py-8 lg:block lg:min-h-[400px] lg:px-8 lg:py-10",
                  i % 2 === 0
                    ? "border border-zinc-200/70 bg-white/75"
                    : "border border-[#BBE0EF]/70 bg-gradient-to-br from-[#f7fbff]/90 via-[#f3faff]/85 to-[#f2f8fb]/80"
                )}
              >
                {imageLeft ? (
                  <>
                    {mediaBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {mediaBlock}
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
