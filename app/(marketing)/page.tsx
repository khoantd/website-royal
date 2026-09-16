import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/marketing/sections/Hero";
import { PortfolioPreview } from "@/components/marketing/sections/PortfolioPreview";
import { MarketingServices } from "@/components/marketing/sections/MarketingServices";
import { Process } from "@/components/marketing/sections/Process";
import { Stats } from "@/components/marketing/sections/Stats";
import { Pricing } from "@/components/marketing/sections/Pricing";
import { CTABanner } from "@/components/marketing/sections/CTABanner";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function MarketingHomePage() {
  return (
    <>
      <Hero />
      <PortfolioPreview />
      <MarketingServices />
      <Process />
      <Stats />
      <Pricing />
      <CTABanner />
    </>
  );
}
