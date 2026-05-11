"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PLANS = [
  {
    name: "Starter",
    audience: "SME, startup",
    desc: "Website cơ bản + CMS",
    features: ["Landing / corporate site", "CMS chỉnh sửa nội dung", "Hosting guidance", "SEO nền tảng"],
    missing: ["CRM tùy chỉnh", "ERP"],
    popular: false,
  },
  {
    name: "Professional",
    audience: "Doanh nghiệp vừa",
    desc: "Website + CRM hoặc ERP",
    features: ["Full website / headless", "CRM hoặc ERP module", "Tích hợp API", "SLA phản hồi 24h"],
    missing: [],
    popular: true,
  },
  {
    name: "Enterprise",
    audience: "Tập đoàn",
    desc: "Full suite + AI",
    features: ["Multi-product rollout", "CRM + ERP + AI", "Dedicated team", "On-prem / hybrid"],
    missing: [],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing" title="Gói phù hợp" highlight="mọi quy mô" subtitle="Liên hệ để nhận báo giá chi tiết theo phạm vi." />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-8 lg:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur-sm ${
                  plan.popular
                    ? "border-brand-sky bg-gradient-to-b from-brand-sky/30 to-white shadow-[0_0_60px_-20px_rgba(241,109,52,0.28)]"
                    : "border-zinc-200 bg-white shadow-sm"
                }`}
              >
                {plan.popular ? (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#161E54] to-[#FF986A] text-white">Phổ biến nhất</Badge>
                ) : null}
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-600">{plan.audience}</p>
                <p className="mt-4 text-zinc-600">{plan.desc}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-zinc-700">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600" /> {f}
                    </li>
                  ))}
                  {plan.missing.map((m) => (
                    <li key={m} className="flex gap-2 text-zinc-400 line-through">
                      <span className="w-4 text-center">✗</span> {m}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full rounded-xl bg-[#161E54] hover:bg-[#F16D34]">
                  <Link href="/contact">Nhận báo giá</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
