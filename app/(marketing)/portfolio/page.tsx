import type { Metadata } from "next";
import Link from "next/link";
import { PORTFOLIO_PROJECTS } from "@/lib/data/marketing-portfolio";
import { PortfolioBento } from "@/components/marketing/common/PortfolioBento";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Dự án website, CRM, ERP và AI — case study Royal Solution.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-900">Portfolio</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">
        Một phần dự án đã công bố — chi tiết có thể chia sẻ khi trao đổi NDA.
      </p>

      <PortfolioBento projects={PORTFOLIO_PROJECTS} href="/contact" className="mt-14" />

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_PROJECTS.map((p) => (
          <li key={p.id} className="border-t border-zinc-200 pt-5">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              {p.tags.join(" · ")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] mt-2 text-lg font-semibold text-zinc-900">
              {p.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              {p.industry}
              {p.location ? ` · ${p.location}` : ""}
            </p>
            <p className="mt-2 text-sm font-medium text-[#C5A059]">{p.metric}</p>
            <p className="mt-2 text-sm text-zinc-600">{p.excerpt}</p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-brand-navy hover:underline"
            >
              Trao đổi tương tự →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
