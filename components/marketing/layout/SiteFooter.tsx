"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";

const social = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Github, label: "GitHub" },
  { href: "#", icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex" aria-label="Royal Solution — trang chủ">
              <BrandLogo height={40} />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">Đối tác công nghệ đáng tin cậy cho chuyển đổi số.</p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-brand-sky hover:text-zinc-900"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Dịch vụ
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/services/website-cms" className="hover:text-zinc-900">
                  Website & CMS
                </Link>
              </li>
              <li>
                <Link href="/services/crm" className="hover:text-zinc-900">
                  CRM
                </Link>
              </li>
              <li>
                <Link href="/services/erp" className="hover:text-zinc-900">
                  ERP
                </Link>
              </li>
              <li>
                <Link href="/services/ai-chatbot" className="hover:text-zinc-900">
                  AI & Chatbot
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-zinc-900">
                  Tư vấn công nghệ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Công ty
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/about" className="hover:text-zinc-900">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-zinc-900">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wider text-zinc-900">
              Liên hệ
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li>📍 TP. Hồ Chí Minh, Việt Nam</li>
              <li>
                <a href="tel:+84901234567" className="hover:text-zinc-900">
                  📞 +84 901 234 567
                </a>
              </li>
              <li>
                <a href="mailto:hello@royalsolution.vn" className="hover:text-zinc-900">
                  ✉️ hello@royalsolution.vn
                </a>
              </li>
            </ul>
            <form className="mt-6 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Email nhận tin"
                className="border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400"
              />
              <Button
                type="submit"
                variant="secondary"
                className="w-full cursor-pointer bg-cta text-cta-foreground transition-colors duration-200 hover:bg-[#C5A059] focus-visible:ring-2 focus-visible:ring-[#C5A059] focus-visible:ring-offset-2"
              >
                Đăng ký
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Royal Solution. All rights reserved.</p>
          <div className="flex gap-4">
            <button type="button" className="text-zinc-600 hover:text-zinc-900">
              VI
            </button>
            <span className="text-zinc-300">|</span>
            <button type="button" className="hover:text-zinc-900">
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
