import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const t = await getTranslations("Blog");
  return {
    title: t(`${slug}.title`),
    description: t(`${slug}.excerpt`),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations("BlogPage");
  const tBlog = await getTranslations("Blog");

  return (
    <article className="mx-auto max-w-[720px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{post.date}</p>
      <h1 className="font-[family-name:var(--font-display)] mt-4 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl md:text-4xl">
        {tBlog(`${slug}.title`)}
      </h1>
      <p className="mt-6 text-lg text-zinc-600">{tBlog(`${slug}.excerpt`)}</p>
      <div className="prose prose-zinc mt-12 max-w-none prose-p:leading-relaxed">
        <p>{t("demoBody")}</p>
        <p className="mt-6">
          <Link href="/contact" className="font-medium text-brand-navy hover:underline">
            {t("discussCta")}
          </Link>
        </p>
      </div>
      <Link href="/blog" className="mt-16 inline-block text-sm text-brand-navy hover:underline">
        {t("back")}
      </Link>
    </article>
  );
}
