"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative -mt-16 flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:items-center sm:pb-24 lg:pb-28">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/95 via-[#0A1931]/82 to-[#0A1931]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/75 via-transparent to-[#0A1931]/45" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#1A3C8E]/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-[320px] w-[320px] rounded-full bg-[#132A52]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-2xl border-l border-[#C5A059]/70 pl-5 sm:pl-6"
        >
          <motion.div variants={fadeUp}>
            <BrandLogo height={44} plate className="shadow-lg shadow-black/30" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Chuyển đổi số doanh nghiệp
            <span className="mt-1 block text-white/90">với AI &amp; Automation</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Website, CRM, ERP và Chatbot AI — quy trình rõ ràng, đo lường được, đồng hành dài hạn.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 min-h-11 cursor-pointer rounded-xl bg-cta px-8 text-base font-semibold text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931]"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden />
                Đặt lịch demo
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 min-h-11 cursor-pointer rounded-xl border-[#C5A059]/60 bg-transparent px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931]"
            >
              <Link href="/services" className="inline-flex items-center gap-2">
                Xem dịch vụ <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
