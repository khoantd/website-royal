import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

const LAYER_KEYS = ["crmErp", "training", "clearai", "architect", "automation"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default async function AboutPage() {
  const t = await getTranslations("About");

  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <header className="max-w-3xl">
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.2em] text-brand-navy">
          {t("eyebrow")}
        </p>
        <h1 className="font-[family-name:var(--font-display)] mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl">{t("lead")}</p>
      </header>

      <section className="mt-16 max-w-3xl lg:mt-20" aria-labelledby="intro-heading">
        <h2
          id="intro-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          {t("introTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{t("introBody")}</p>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="mission-heading">
        <h2
          id="mission-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          {t("missionTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{t("missionBody")}</p>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="origin-heading">
        <h2
          id="origin-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          {t("originTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{t("originBody")}</p>
      </section>

      <section className="mt-14 border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="products-heading">
        <div className="max-w-3xl">
          <h2
            id="products-heading"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
          >
            {t("productsTitle")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{t("productsLead")}</p>
        </div>

        <ul className="mt-10 max-w-3xl space-y-8">
          {LAYER_KEYS.map((key) => (
            <li key={key} className="border-l border-[#C5A059] pl-5 sm:pl-6">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-900 md:text-xl">
                {t(`layers.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-zinc-600">{t(`layers.${key}.body`)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 max-w-3xl border-t border-zinc-200 pt-14 lg:mt-16 lg:pt-16" aria-labelledby="difference-heading">
        <h2
          id="difference-heading"
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl"
        >
          {t("differenceTitle")}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">{t("differenceBody")}</p>
      </section>

      <Button
        asChild
        className="mt-12 cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
      >
        <Link href="/contact">{t("cta")}</Link>
      </Button>
    </div>
  );
}
