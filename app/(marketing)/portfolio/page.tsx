import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/data/marketing-portfolio";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dự án website, CRM, ERP và AI — case study Royal Tech.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-900">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">Một phần dự án đã công bố — chi tiết có thể chia sẻ khi trao đổi NDA.</p>
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_PROJECTS.map((p) => (
          <article key={p.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-[#161E54]/25 to-[#FF986A]/15">
              {p.imageSrc ? (
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              ) : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary" className="border-zinc-200 bg-zinc-100 text-zinc-600">
                  {t}
                </Badge>
              ))}
            </div>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-lg font-semibold text-zinc-900">{p.title}</h2>
            <p className="mt-1 text-sm text-zinc-600">
              {p.industry}
              {p.location ? ` · ${p.location}` : ""}
            </p>
            <p className="mt-3 text-sm font-medium text-emerald-700">{p.metric}</p>
            <p className="mt-3 text-sm text-zinc-600">{p.excerpt}</p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-medium text-brand-navy hover:underline">
              Trao đổi tương tự →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
