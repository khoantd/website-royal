import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{post.date}</p>
      <h1 className="font-[family-name:var(--font-display)] mt-4 text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">{post.title}</h1>
      <p className="mt-6 text-lg text-zinc-600">{post.excerpt}</p>
      <div className="prose prose-zinc mt-12 max-w-none prose-p:leading-relaxed">
        <p>
          (Nội dung demo.) Bài viết đầy đủ có thể kết nối CMS hoặc MDX sau. Royal Tech đồng hành triển khai headless CMS và SEO cho blog doanh
          nghiệp.
        </p>
        <p className="mt-6">
          <Link href="/contact" className="font-medium text-brand-navy hover:underline">
            Trao đổi triển khai blog & SEO →
          </Link>
        </p>
      </div>
      <Link href="/blog" className="mt-16 inline-block text-sm text-brand-navy hover:underline">
        ← Quay lại danh sách
      </Link>
    </article>
  );
}
