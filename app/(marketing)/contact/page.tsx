import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <div className="min-w-0">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-zinc-600">{t("subtitle")}</p>
        <ContactForm />
      </div>
      <div className="mt-12 space-y-8 lg:mt-0">
        <Badge className="border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100">{t("badge")}</Badge>
        <div className="flex aspect-video max-h-56 items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 sm:max-h-none sm:p-10">
          <BrandLogo height={112} plate={false} className="sm:hidden" />
          <BrandLogo height={180} plate={false} className="hidden sm:inline-flex" />
        </div>
      </div>
    </div>
  );
}
