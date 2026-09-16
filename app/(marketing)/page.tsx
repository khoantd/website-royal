import type { Metadata } from "next";
import { Hero } from "@/components/marketing/sections/Hero";
import { PortfolioPreview } from "@/components/marketing/sections/PortfolioPreview";
import { MarketingServices } from "@/components/marketing/sections/MarketingServices";
import { Process } from "@/components/marketing/sections/Process";
import { Stats } from "@/components/marketing/sections/Stats";
import { Pricing } from "@/components/marketing/sections/Pricing";
import { BlogPreview } from "@/components/marketing/sections/BlogPreview";
import { CTABanner } from "@/components/marketing/sections/CTABanner";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Royal Solution — đối tác chuyển đổi số: Website & CMS, CRM, ERP, ML/AI & chatbot đa kênh. Quy trình rõ ràng, đo lường được.",
};

export default function MarketingHomePage() {
  return (
    <>
      <Hero />
      <PortfolioPreview />
      <MarketingServices />
      <Process />
      <Stats />
      <Pricing />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
