"use client";

import Image from "next/image";
import { SHOWCASE_TILES } from "@/lib/landing-data";

export function LandingShowcase() {
  return (
    <section className="border-y border-border/80 bg-muted/20 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center lg:mb-12">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-cta">Hình ảnh dự án</p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Công nghệ trong từng chi tiết
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Đội ngũ sản phẩm, hạ tầng và trải nghiệm người dùng — minh họa qua các môi trường triển khai thực tế.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4 lg:[grid-template-rows:1fr_1fr]">
          {SHOWCASE_TILES.map((tile, index) => (
            <figure
              key={tile.id}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm ${tile.gridClass}`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                priority={index === 0}
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-3 pb-3 pt-12 text-left text-xs font-medium text-white sm:text-sm">
                <span className="line-clamp-2">{tile.alt}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
