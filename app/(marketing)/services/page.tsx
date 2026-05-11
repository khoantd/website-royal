import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Website & CMS, CRM, ERP, AI & Chatbot, Dashboard & báo cáo, ML / AI — xem chi tiết từng giải pháp.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-900">Dịch vụ</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">Chọn giải pháp phù hợp giai đoạn — có thể kết hợp nhiều module.</p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_OFFERINGS.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:border-brand-sky hover:shadow-md"
          >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white ${s.gradient}`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] mt-6 text-2xl font-bold text-zinc-900">{s.title}</h2>
            <p className="mt-3 text-zinc-600">{s.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
              Chi tiết <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
