import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LEADERSHIP_TEAM } from "@/lib/data/marketing-misc";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Royal Tech — đội ngũ kỹ sư và consultant chuyên website, CRM, ERP và AI cho doanh nghiệp Việt Nam.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-900 md:text-5xl">Về Royal Tech</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600">
        Chúng tôi không chỉ là nhà cung cấp — là đối tác công nghệ lâu dài. Giải pháp tùy chỉnh theo quy trình doanh nghiệp Việt Nam,
        minh bạch milestone và đo lường KPI sau triển khai.
      </p>
      <ul className="mt-10 max-w-2xl list-disc space-y-3 pl-6 text-zinc-700">
        <li>Đội product và engineering làm việc sát với khách hàng.</li>
        <li>Ưu tiên bảo mật dữ liệu và khả năng mở rộng.</li>
        <li>Hỗ trợ sau go-live — SLA rõ ràng.</li>
      </ul>
      <Button asChild className="mt-12 rounded-xl bg-[#161E54] hover:bg-[#F16D34]">
        <Link href="/contact">Trao đổi dự án</Link>
      </Button>

      <section className="mt-20 border-t border-zinc-200 pt-16 lg:mt-24 lg:pt-20" aria-labelledby="leadership-heading">
        <p className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-[0.2em] text-brand-navy">Đội ngũ</p>
        <h2 id="leadership-heading" className="font-[family-name:var(--font-display)] mt-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          Ban lãnh đạo
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600">
          Người định hướng chiến lược và kỹ thuật — đồng hành cùng khách hàng trong từng giai đoạn triển khai.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {LEADERSHIP_TEAM.map((member) => (
            <li
              key={member.role}
              className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={cn(
                  "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-[family-name:var(--font-display)] text-xl font-bold text-white shadow-inner",
                  member.accent
                )}
                aria-hidden
              >
                {member.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-zinc-900">{member.name}</h3>
                  <Badge variant="secondary" className="border-brand-sky bg-brand-sky/25 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wider text-brand-navy">
                    {member.role}
                  </Badge>
                </div>
                <p className="mt-0.5 text-sm font-medium text-zinc-500">{member.roleVi}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{member.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
