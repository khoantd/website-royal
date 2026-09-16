import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { PortfolioBento } from "@/components/marketing/common/PortfolioBento";
import { PORTFOLIO_PROJECTS } from "@/lib/data/marketing-portfolio";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
  };
}

export default async function PortfolioPage() {
  const t = await getTranslations("PortfolioPage");
  const tPortfolio = await getTranslations("Portfolio");

  const projects = PORTFOLIO_PROJECTS.map((p) => {
    const location = tPortfolio(`${p.id}.location`);
    return {
      ...p,
      title: tPortfolio(`${p.id}.title`),
      tags: tPortfolio.raw(`${p.id}.tags`) as string[],
      industry: tPortfolio(`${p.id}.industry`),
      location: location.trim() ? location : undefined,
      metric: tPortfolio(`${p.id}.metric`),
      excerpt: tPortfolio(`${p.id}.excerpt`),
    };
  });

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600">{t("subtitle")}</p>

      <PortfolioBento projects={projects} href="/contact" className="mt-14" />

      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
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
            <Link href="/contact" className="mt-3 inline-block text-sm font-medium text-brand-navy hover:underline">
              {t("discuss")}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
