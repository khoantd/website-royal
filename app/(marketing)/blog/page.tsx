import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";

export const metadata: Metadata = {
  title: "Blog",
  description: "Kiến thức về CRM, ERP, AI, chatbot và chuyển đổi số.",
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl">Blog</h1>
      <p className="mt-4 text-zinc-600">Insight và best practices — cập nhật định kỳ.</p>
      <ul className="mt-12 space-y-10">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{post.date}</p>
              <h2 className="font-[family-name:var(--font-display)] mt-2 text-2xl font-semibold text-zinc-900 group-hover:text-brand-navy">
                {post.title}
              </h2>
              <p className="mt-2 text-zinc-600">{post.excerpt}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-navy">Đọc bài →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
