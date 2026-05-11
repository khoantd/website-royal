"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/landing-data";

export function ProductCategories() {
  return (
    <section id="services" className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">Dịch vụ cốt lõi</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Trọn bộ năng lực từ phát triển website đến hệ thống quản trị và AI — linh hoạt theo giai đoạn triển khai của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-200 hover:border-cta/40 hover:shadow-md"
              >
                <div className="relative aspect-[5/3] w-full overflow-hidden">
                  <Image
                    src={service.coverSrc}
                    alt={service.coverAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" aria-hidden />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/90 shadow-sm backdrop-blur-sm transition-colors duration-200 group-hover:border-cta/40 group-hover:bg-background">
                    <Icon className="h-5 w-5 text-cta" aria-hidden />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
