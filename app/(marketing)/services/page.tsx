import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");
  const tServices = await getTranslations("Services");

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600">{t("subtitle")}</p>
      <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {SERVICE_OFFERINGS.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-brand-sky hover:shadow-md sm:p-8"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1931] shadow-[#C5A059]/25 shadow-lg">
              <s.icon className="h-6 w-6 text-[#D4AF37]" aria-hidden />
            </div>
            <h2 className="font-[family-name:var(--font-display)] mt-6 text-2xl font-bold text-zinc-900">
              {tServices(`${s.slug}.title`)}
            </h2>
            <p className="mt-3 text-zinc-600">{tServices(`${s.slug}.description`)}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy">
              {t("detail")} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
