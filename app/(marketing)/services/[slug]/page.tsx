import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SERVICE_OFFERINGS } from "@/lib/data/marketing-services";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICE_OFFERINGS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_OFFERINGS.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = SERVICE_OFFERINGS.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <article className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A1931] shadow-xl shadow-[#C5A059]/25">
        <s.icon className="h-8 w-8 text-[#D4AF37]" aria-hidden />
      </div>
      <h1 className="font-[family-name:var(--font-display)] mt-8 text-4xl font-bold text-zinc-900">{s.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-zinc-600">{s.description}</p>
      <h2 className="font-[family-name:var(--font-display)] mt-12 text-xl font-semibold text-zinc-900">Điểm nổi bật</h2>
      <ul className="mt-4 space-y-3 text-zinc-700">
        {s.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-emerald-600">✓</span> {f}
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-wrap gap-4">
        <Button
          asChild
          className="cursor-pointer rounded-xl bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
        >
          <Link href="/contact">Nhận tư vấn</Link>
        </Button>
        <Button asChild variant="outline" className="rounded-xl border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50">
          <Link href="/services">Tất cả dịch vụ</Link>
        </Button>
      </div>
    </article>
  );
}
