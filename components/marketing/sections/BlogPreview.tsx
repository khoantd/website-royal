"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { BLOG_POSTS } from "@/lib/data/marketing-misc";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";

export function BlogPreview() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <section className="border-t border-zinc-200/80 bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Blog"
          title="Kiến thức &"
          highlight="xu hướng"
          subtitle="Cập nhật công nghệ và chiến lược chuyển đổi số."
        />

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2"
        >
          <motion.article variants={fadeUp} className="group min-w-0">
            <p className="font-[family-name:var(--font-mono)] text-xs text-zinc-400">{featured.date}</p>
            <h3 className="font-[family-name:var(--font-display)] mt-3 text-xl font-bold text-zinc-900 transition-colors duration-200 group-hover:text-brand-navy sm:text-3xl">
              <Link href={`/blog/${featured.slug}`} className="cursor-pointer">
                {featured.title}
              </Link>
            </h3>
            <p className="mt-4 text-zinc-600">{featured.excerpt}</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-6 inline-block cursor-pointer text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange"
            >
              Đọc bài →
            </Link>
          </motion.article>

          <div className="flex flex-col divide-y divide-zinc-200">
            {rest.slice(0, 3).map((post) => (
              <motion.article key={post.slug} variants={fadeUp} className="py-5 first:pt-0 last:pb-0">
                <p className="font-[family-name:var(--font-mono)] text-[10px] text-zinc-400">{post.date}</p>
                <h4 className="font-[family-name:var(--font-display)] mt-2 text-lg font-semibold text-zinc-900">
                  <Link href={`/blog/${post.slug}`} className="cursor-pointer transition-colors duration-200 hover:text-brand-navy">
                    {post.title}
                  </Link>
                </h4>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="mt-12">
          <Link
            href="/blog"
            className="cursor-pointer text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange"
          >
            Xem tất cả bài viết →
          </Link>
        </div>
      </div>
    </section>
  );
}
