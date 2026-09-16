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
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-900">Liên hệ</h1>
        <p className="mt-4 text-zinc-600">Điền form — chúng tôi phản hồi trong vòng 2 giờ làm việc.</p>
        <ContactForm />
      </div>
      <div className="mt-12 space-y-8 lg:mt-0">
        <Badge className="border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100">Phản hồi trong vòng 2 giờ</Badge>
        <div className="flex aspect-video items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 p-8 sm:p-12">
          <BrandLogo height={160} />
        </div>
      </div>
    </div>
  );
}
