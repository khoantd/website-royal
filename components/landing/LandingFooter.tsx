"use client";

import Link from "next/link";

export function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-[#0f1419] py-12 text-slate-300 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-xl font-semibold text-white">
              <span className="text-cta">Royal</span> Tech
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Công ty công nghệ chuyên website, CRM, ERP, ML/AI và chatbot — đồng hành chuyển đổi số có lộ trình rõ ràng,
              đo lường được và bảo trì lâu dài.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white">Điều hướng</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#services" className="cursor-pointer transition-colors hover:text-white">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="cursor-pointer transition-colors hover:text-white">
                  Giải pháp
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="cursor-pointer transition-colors hover:text-white">
                  CMS Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white">Liên hệ</h4>
            <p className="mt-4 text-sm">
              <a href="tel:+84901234567" className="cursor-pointer transition-colors hover:text-white">
                0901 234 567
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href="mailto:hello@royaltech.vn" className="cursor-pointer transition-colors hover:text-white">
                hello@royaltech.vn
              </a>
            </p>
            <p className="mt-3 text-xs text-slate-500">TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Royal Tech. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}
