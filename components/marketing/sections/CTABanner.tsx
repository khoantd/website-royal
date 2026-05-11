"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-brand-sky bg-gradient-to-br from-brand-sky/30 via-white to-brand-sky/25 px-8 py-14 text-center shadow-sm md:px-16"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#161E54]/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#FF986A]/20 blur-3xl" />

          <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 md:text-4xl">
            Sẵn sàng chuyển đổi số doanh nghiệp của bạn?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-zinc-600">
            Nhận tư vấn miễn phí từ đội ngũ chuyên gia — không cam kết, không phí ẩn.
          </p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="rounded-xl bg-gradient-to-r from-[#161E54] to-[#FF986A] p-[1px] shadow-md shadow-brand-orange/20">
              <Button asChild size="lg" className="rounded-[11px] border-0 bg-white px-8 text-zinc-900 hover:bg-zinc-50">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Đặt lịch tư vấn miễn phí <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-xl border-zinc-300 bg-white/80 text-zinc-900 hover:bg-white">
              <Link href="/portfolio">Xem portfolio</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
