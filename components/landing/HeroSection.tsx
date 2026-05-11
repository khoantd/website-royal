"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { HERO_SERVICE_TILES } from "@/lib/landing-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f1419] pt-24 pb-16 text-white lg:pt-28 lg:pb-24">
      {/* Grid + ambient accents */}
      <div
        className="hero-grid-bg-animate pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212,175,55,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212,175,55,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#141b24] to-[#1a2332]" aria-hidden />
      <div
        className="hero-glow-animate pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-cta/15 blur-[100px]"
        aria-hidden
      />
      <div
        className="hero-glow-animate pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-sky-500/10 blur-[90px]"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="mx-auto max-w-3xl text-center lg:col-span-6 lg:mx-0 lg:max-w-none lg:text-left">
            <p className="hero-enter-1 mb-4 font-heading text-xs font-medium uppercase tracking-[0.2em] text-cta sm:text-sm">
              Đối tác công nghệ cho doanh nghiệp
            </p>
            <h1 className="hero-enter-2 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[2.75rem] lg:leading-tight xl:text-5xl">
              Kiến tạo hệ thống số — từ website đến CRM, ERP & AI
            </h1>
            <p className="hero-enter-3 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 lg:mx-0">
              Chúng tôi thiết kế và triển khai giải pháp phần mềm bền vững: nền tảng web, quản trị khách hàng & vận hành,
              cùng chatbot và mô hình ML/AI phù hợp quy mô của bạn.
            </p>

            <div className="hero-enter-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 min-h-[44px] cursor-pointer rounded-lg bg-cta px-8 text-base font-semibold text-cta-foreground shadow-lg shadow-cta/25 transition-all duration-300 hover:bg-cta/90 hover:shadow-xl hover:shadow-cta/30 active:scale-[0.98]"
              >
                <Link href="/#contact">Tư vấn giải pháp</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 min-h-[44px] cursor-pointer rounded-lg border-white/25 bg-white/5 text-base text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 active:scale-[0.98]"
              >
                <Link href="/#services">Xem dịch vụ</Link>
              </Button>
            </div>

           
          </div>

          <div className="relative lg:col-span-6">
            <div
              className="hero-glow-animate absolute -inset-3 rounded-3xl bg-gradient-to-br from-cta/25 via-cta/5 to-slate-600/20 blur-2xl sm:-inset-4"
              aria-hidden
            />
            <div className="hero-panel-float relative">
              <div className="hero-shimmer-layer relative overflow-hidden rounded-2xl border border-white/15 bg-[#0f1419]/85 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/15 backdrop-blur-md sm:p-3">
                <div className="relative z-10 grid grid-cols-2 gap-2 sm:gap-3">
                  {HERO_SERVICE_TILES.map((tile, index) => (
                    <Link
                      key={tile.id}
                      href="/#services"
                      style={{ animationDelay: `${index * 95}ms` }}
                      className="hero-tile-enter group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 outline-none ring-offset-2 ring-offset-[#0f1419] transition-all duration-300 hover:-translate-y-1 hover:border-cta/55 hover:shadow-xl hover:shadow-cta/15 focus-visible:ring-2 focus-visible:ring-cta"
                    >
                      <Image
                        src={tile.src}
                        alt={tile.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        priority={index < 2}
                      />
                      <span
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1419]/95 via-[#0f1419]/35 to-transparent transition-opacity duration-300 group-hover:via-[#0f1419]/50"
                        aria-hidden
                      />
                      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[inset_0_0_50px_rgba(212,175,55,0.12)] transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 px-2 pb-2 pt-10 text-center sm:px-3 sm:pb-3 sm:pt-12">
                        <span className="font-heading text-[11px] font-semibold leading-tight text-white drop-shadow-md transition-transform duration-300 group-hover:translate-y-[-2px] sm:text-sm">
                          {tile.label}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
