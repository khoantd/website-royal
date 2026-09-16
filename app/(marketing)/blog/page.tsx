import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("blogTitle"),
    description: t("blogDescription"),
  };
}

export default async function BlogIndexPage() {
  const t = await getTranslations("BlogPage");
  const tBlog = await getTranslations("Blog");

  return (
    <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 text-zinc-600">{t("subtitle")}</p>
      <ul className="mt-12 space-y-10">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{post.date}</p>
              <h2 className="font-[family-name:var(--font-display)] mt-2 text-2xl font-semibold text-zinc-900 group-hover:text-brand-navy">
                {tBlog(`${post.slug}.title`)}
              </h2>
              <p className="mt-2 text-zinc-600">{tBlog(`${post.slug}.excerpt`)}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-navy">{t("readMore")}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
