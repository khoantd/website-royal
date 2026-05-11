"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  }

  function onMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const blobTransform = useMotionTemplate`translate(${mx}px, ${my}px)`;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#eef6fa] via-white to-white pt-28 pb-20 lg:pb-28"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(22,30,84,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_90%_60%,rgba(255,152,106,0.035),transparent)]" />
      <motion.div
        style={{ transform: blobTransform }}
        className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#161E54]/18 to-[#FF986A]/8 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center lg:self-start lg:text-left">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-sky bg-white px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-wider text-brand-navy shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
              Giải pháp công nghệ 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.25rem]"
          >
            Chuyển đổi số
            <br />
            <span className="bg-gradient-to-r from-zinc-800 to-zinc-500 bg-clip-text text-transparent">doanh nghiệp của bạn</span>
            <br />
            với AI &amp; Automation
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 lg:mx-0 mx-auto">
            Chúng tôi xây dựng Website, CRM, ERP và Chatbot AI giúp doanh nghiệp tăng trưởng nhanh hơn với quy trình rõ ràng và đo lường được.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-gradient-to-r from-[#161E54] to-[#F16D34] px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(241,109,52,0.45)] transition-all hover:scale-[1.02] hover:shadow-[0_0_48px_-6px_rgba(241,109,52,0.55)]"
            >
              <Link href="/services" className="inline-flex items-center gap-2">
                Xem dịch vụ <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-zinc-300 bg-white text-zinc-900 shadow-sm backdrop-blur-sm hover:bg-zinc-50"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Đặt lịch demo
              </Link>
            </Button>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-12 grid grid-cols-3 gap-4 border-t border-zinc-200 pt-10 text-center sm:gap-8 lg:text-left">
            <div>
              <dt className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">200+</dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">Dự án</dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">98%</dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">Hài lòng</dd>
            </div>
            <div>
              <dt className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">5+</dt>
              <dd className="mt-1 text-xs text-zinc-500 sm:text-sm">Năm KN</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-[280px] flex-col sm:min-h-[320px] lg:h-full lg:min-h-0"
        >
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-inner lg:min-h-[420px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <video
                className="max-h-full max-w-full object-contain"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Giới thiệu RoyalTech"
              >
                <source src="/video/video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
