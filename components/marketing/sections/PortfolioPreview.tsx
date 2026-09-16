"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/data/marketing-portfolio";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { PortfolioBento } from "@/components/marketing/common/PortfolioBento";

export function PortfolioPreview() {
  const projects = PORTFOLIO_PROJECTS.slice(0, 6);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Portfolio"
            title="Dự án"
            highlight="nổi bật"
            subtitle="Case study chọn lọc — hình ảnh dẫn dắt, kết quả đo được."
          />
          <Link
            href="/portfolio"
            className="inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange"
          >
            Xem tất cả <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <PortfolioBento projects={projects} href="/portfolio" className="mt-14" />
      </div>
    </section>
  );
}
