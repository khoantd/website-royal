"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative -mt-14 flex min-h-dvh items-center overflow-hidden pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 sm:-mt-16 sm:pb-24 sm:pt-28 lg:pb-28">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-[68%_center] sm:object-center"
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/video/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931] via-[#0A1931]/92 to-[#0A1931]/45 sm:via-[#0A1931]/82 sm:to-[#0A1931]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/35 to-[#0A1931]/55" />
        <div className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#1A3C8E]/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-[320px] w-[320px] rounded-full bg-[#132A52]/50 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          className="max-w-2xl border-l border-[#C5A059]/70 pl-4 sm:pl-6"
        >
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] text-[1.625rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] lg:text-6xl"
          >
            {t("titleLine1")}
            <span className="mt-1 block text-white/90">{t("titleLine2")}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg sm:text-white/80">
            {t("subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-12 min-h-11 w-full cursor-pointer rounded-xl bg-cta px-8 text-base font-semibold text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931] sm:w-auto"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden />
                {t("ctaDemo")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 min-h-11 w-full cursor-pointer rounded-xl border-[#C5A059]/60 bg-transparent px-8 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1931] sm:w-auto"
            >
              <Link href="/services" className="inline-flex items-center justify-center gap-2">
                {t("ctaServices")} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
