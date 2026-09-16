"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MarketingServices() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-[#0A1931] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-[380px] w-[380px] rounded-full bg-[#1A3C8E]/40 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-[-80px] h-[280px] w-[280px] rounded-full bg-[#132A52]/60 blur-3xl" />

        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-6 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl border-l border-[#C5A059] pl-4 sm:pl-6"
          >
            <p className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.25em] text-[#C5A059]">
              Dịch vụ
            </p>
            <h2 className="font-[family-name:var(--font-display)] mt-3 text-[1.75rem] font-bold leading-tight tracking-tight sm:mt-4 sm:text-4xl lg:text-5xl">
              Trải nghiệm số rõ ràng, bền vững — từ website đến AI.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
              Một đối tác cho chuyển đổi số: thiết kế, xây dựng và vận hành giải pháp đo được kết quả.
            </p>
          </motion.div>
          <Button
            asChild
            size="lg"
            className="h-12 min-h-11 w-full shrink-0 cursor-pointer rounded-full bg-cta px-8 font-semibold text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931] sm:w-fit"
          >
            <Link href="/services" className="inline-flex items-center justify-center gap-2">
              Xem dịch vụ <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-[#F7F9FC] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto flex max-w-[1280px] flex-col gap-14 sm:gap-20 lg:gap-28"
        >
          {SERVICE_OFFERINGS.map((s, i) => {
            const imageLeft = i % 2 === 1;
            const Icon = s.icon;

            return (
              <motion.article
                key={s.slug}
                variants={fadeUp}
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
                  imageLeft && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="min-w-0">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0A1931] text-[#D4AF37]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] min-w-0 text-xl font-bold text-zinc-900 sm:text-3xl">
                      {s.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-zinc-600">{s.description}</p>
                  <ul className="mt-6 grid gap-2.5 text-sm text-zinc-700 sm:text-[0.9375rem]">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group/link mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                  >
                    Xem chi tiết{" "}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden />
                  </Link>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200 lg:aspect-auto lg:min-h-[380px]">
                  {s.imageSrc ? (
                    <img
                      src={s.imageSrc}
                      alt={s.title}
                      className={cn(
                        "absolute inset-0 h-full w-full object-cover select-none",
                        s.imageCoverPosition ?? "object-center"
                      )}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full min-h-[280px] w-full items-center justify-center bg-gradient-to-br from-[#0A1931] to-[#1A3C8E]">
                      <Icon className="h-16 w-16 text-[#D4AF37]" aria-hidden />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
