"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { Button } from "@/components/ui/button";

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
    missing: [] as string[],
    popular: true,
  },
  {
    name: "Enterprise",
    audience: "Tập đoàn",
    desc: "Full suite + AI",
    features: ["Multi-product rollout", "CRM + ERP + AI", "Dedicated team", "On-prem / hybrid"],
    missing: [] as string[],
    popular: false,
  },
];

export function Pricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Pricing"
          title="Gói phù hợp"
          highlight="mọi quy mô"
          subtitle="Liên hệ để nhận báo giá chi tiết theo phạm vi."
        />

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8"
        >
          {PLANS.map((plan) => (
            <motion.div key={plan.name} variants={fadeUp}>
              <div
                className={`relative flex h-full flex-col border p-8 ${
                  plan.popular ? "border-[#0A1931] bg-[#F7F9FC]" : "border-zinc-200 bg-white"
                }`}
              >
                {plan.popular ? (
                  <p className="font-[family-name:var(--font-mono)] mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-orange">
                    Phổ biến nhất
                  </p>
                ) : (
                  <div className="mb-4 h-4" aria-hidden />
                )}
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{plan.audience}</p>
                <p className="mt-4 text-zinc-600">{plan.desc}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-zinc-700">
                      <Check className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden /> {f}
                    </li>
                  ))}
                  {plan.missing.map((m) => (
                    <li key={m} className="flex gap-2 text-zinc-400 line-through">
                      <span className="w-4 text-center" aria-hidden>
                        —
                      </span>{" "}
                      {m}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="mt-8 w-full cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
                >
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
