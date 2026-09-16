"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { PortfolioBento } from "@/components/marketing/common/PortfolioBento";
import { localizePortfolio } from "@/lib/i18n/marketing";

export function PortfolioPreview() {
  const t = useTranslations("PortfolioPreview");
  const tPortfolio = useTranslations("Portfolio");
  const projects = localizePortfolio(tPortfolio).slice(0, 6);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow={t("eyebrow")}
            title={t("title")}
            highlight={t("highlight")}
            subtitle={t("subtitle")}
          />
          <Link
            href="/portfolio"
            className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange"
          >
            {t("viewAll")} <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <PortfolioBento projects={projects} href="/portfolio" className="mt-14" />
      </div>
    </section>
  );
}
