"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";

export function BlogPreview() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Blog" title="Kiến thức &" highlight="xu hướng" subtitle="Cập nhật công nghệ và chiến lược chuyển đổi số." />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.article variants={fadeUp} className="group rounded-2xl border border-brand-sky bg-gradient-to-br from-brand-sky/30 to-white p-8 shadow-sm transition-colors hover:border-brand-sky">
            <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-500">{featured.date}</p>
            <h3 className="font-[family-name:var(--font-display)] mt-3 text-2xl font-bold text-zinc-900 group-hover:text-brand-navy">{featured.title}</h3>
            <p className="mt-3 text-zinc-600">{featured.excerpt}</p>
            <Link href={`/blog/${featured.slug}`} className="mt-6 inline-block text-sm font-semibold text-brand-navy hover:text-brand-navy">
              Đọc bài →
            </Link>
          </motion.article>

          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:border-zinc-300">
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-zinc-500">{post.date}</p>
                <h4 className="font-[family-name:var(--font-display)] mt-2 font-semibold text-zinc-900">{post.title}</h4>
                <Link href={`/blog/${post.slug}`} className="mt-2 inline-block text-xs font-medium text-brand-navy hover:text-brand-navy">
                  Đọc tiếp →
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm font-semibold text-brand-navy hover:underline">
            Xem tất cả bài viết →
          </Link>
        </div>
      </div>
    </section>
  );
}
