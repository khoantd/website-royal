import { SiteHeader } from "@/components/marketing/layout/SiteHeader";
import { SiteFooter } from "@/components/marketing/layout/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Royal Solution — Chuyển đổi số, Website, CRM, ERP & AI",
    template: "%s | Royal Solution",
  },
  description:
    "Công ty công nghệ: thiết kế website & CMS, CRM, ERP, chatbot AI và tư vấn chuyển đổi số cho doanh nghiệp Việt Nam.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="marketing-canvas text-zinc-900 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Royal Solution",
            url: "https://royalsolution.vn",
            description: "Giải pháp website, CRM, ERP, AI & chatbot cho doanh nghiệp",
            address: { "@type": "PostalAddress", addressLocality: "Hà Nội", addressCountry: "VN" },
          }),
        }}
      />
      <SiteHeader />
      <main className="pt-16">{children}</main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
