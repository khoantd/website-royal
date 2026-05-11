import type { Metadata } from "next";
import { ContactForm } from "@/components/marketing/ContactForm";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ Royal Tech — tư vấn website, CRM, ERP và AI. Phản hồi trong 2 giờ làm việc.",
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
        <div className="aspect-video rounded-2xl border border-zinc-200 bg-zinc-100" aria-hidden>
          <div className="flex h-full items-center justify-center text-sm text-zinc-500">Bản đồ · Hà Nội</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-zinc-900">Văn phòng</h2>
          <p className="mt-2 text-sm text-zinc-600">📍 Hà Nội, Việt Nam</p>
          <p className="mt-2 text-sm">
            <a href="tel:+84901234567" className="text-brand-navy hover:underline">
              +84 901 234 567
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href="mailto:hello@royaltech.vn" className="text-brand-navy hover:underline">
              hello@royaltech.vn
            </a>
          </p>
          <p className="mt-4 text-xs text-zinc-500">Giờ làm việc: 9:00 – 18:00 (T2 – T6)</p>
        </div>
      </div>
    </div>
  );
}
