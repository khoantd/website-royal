import type { Metadata } from "next";
import { BrandLogo } from "@/components/brand-logo";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Royal Solution — tư vấn website, CRM, ERP và AI. Phản hồi trong 2 giờ làm việc.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <div className="min-w-0">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">Liên hệ</h1>
        <p className="mt-4 text-zinc-600">Điền form — chúng tôi phản hồi trong vòng 2 giờ làm việc.</p>
        <ContactForm />
      </div>
      <div className="mt-12 space-y-8 lg:mt-0">
        <Badge className="border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100">Phản hồi trong vòng 2 giờ</Badge>
        <div className="flex aspect-video max-h-56 items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 p-6 sm:max-h-none sm:p-12">
          <BrandLogo height={96} className="sm:hidden" />
          <BrandLogo height={160} className="hidden sm:inline-flex" />
        </div>
      </div>
    </div>
  );
}
