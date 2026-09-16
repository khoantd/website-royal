import { SiteHeader } from "@/components/marketing/layout/SiteHeader";
import { SiteFooter } from "@/components/marketing/layout/SiteFooter";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  const locale = await getLocale();

  return {
    title: {
      default: t("siteTitle"),
      template: `%s | Royal Solution`,
    },
    description: t("siteDescription"),
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "vi_VN",
    },
  };
}

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  const t = await getTranslations("Meta");

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
            description: t("orgDescription"),
            address: { "@type": "PostalAddress", addressLocality: "Hà Nội", addressCountry: "VN" },
          }),
        }}
      />
      <SiteHeader />
      <main className="pt-14 sm:pt-16">{children}</main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
