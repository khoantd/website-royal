import type { Metadata } from "next";
import { Hero } from "@/components/marketing/sections/Hero";
import { TrustedBy } from "@/components/marketing/sections/TrustedBy";
import { MarketingServices } from "@/components/marketing/sections/MarketingServices";
import { Process } from "@/components/marketing/sections/Process";
import { PortfolioPreview } from "@/components/marketing/sections/PortfolioPreview";
import { TechStack } from "@/components/marketing/sections/TechStack";
import { Stats } from "@/components/marketing/sections/Stats";
import { Testimonials } from "@/components/marketing/sections/Testimonials";
import { Pricing } from "@/components/marketing/sections/Pricing";
import { BlogPreview } from "@/components/marketing/sections/BlogPreview";
import { CTABanner } from "@/components/marketing/sections/CTABanner";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Royal Tech — đối tác chuyển đổi số: Website & CMS, CRM, ERP, ML/AI & chatbot đa kênh. Quy trình rõ ràng, đo lường được.",
};

export default function MarketingHomePage() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <MarketingServices />
      <Process />
      <PortfolioPreview />
      {/* <TechStack /> */}
      <Stats />
      <Testimonials />
      <Pricing />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
