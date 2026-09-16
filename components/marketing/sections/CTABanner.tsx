"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1931] via-[#132A52] to-[#0A1931] py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#1A3C8E]/45 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#C5A059]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-[-40px] h-48 w-48 rounded-full bg-[#132A52]/80 blur-2xl" />

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8"
      >
        <div className="mx-auto mb-6 h-px w-16 bg-[#C5A059]" aria-hidden />
        <h2 className="font-[family-name:var(--font-display)] text-[1.75rem] font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Sẵn sàng chuyển đổi số doanh nghiệp của bạn?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:mt-5 sm:text-lg">
          Nhận tư vấn miễn phí từ đội ngũ chuyên gia — không cam kết, không phí ẩn.
        </p>
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <Button
            asChild
            size="lg"
            className="h-12 min-h-11 w-full cursor-pointer rounded-xl bg-cta px-8 text-base font-semibold text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931] sm:w-auto"
          >
            <Link href="/contact" className="inline-flex items-center justify-center gap-2">
              Đặt lịch tư vấn miễn phí <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 min-h-11 w-full cursor-pointer rounded-xl border-[#C5A059]/55 bg-transparent px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931] sm:w-auto"
          >
            <Link href="/portfolio">Xem portfolio</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
