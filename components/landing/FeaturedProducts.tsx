"use client";

import Image from "next/image";
import Link from "next/link";
import { SOLUTION_HIGHLIGHTS } from "@/lib/landing-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  return (
    <section id="solutions" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight">Vì sao chọn Royal Tech</h2>
            <p className="mt-2 text-muted-foreground">
              Ưu tiên an toàn dữ liệu, khả năng mở rộng và trải nghiệm người dùng — không chỉ “lên sóng” nhanh.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="cursor-pointer border-cta/50 text-foreground transition-colors duration-200 hover:bg-cta/10"
          >
            <Link href="/#contact" className="inline-flex items-center gap-2">
              Trao đổi dự án
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SOLUTION_HIGHLIGHTS.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden border-border/80 transition-all duration-200 hover:border-cta/35 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.coverSrc}
                  alt={item.coverAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" aria-hidden />
              </div>
              <CardContent className="flex h-full flex-col pt-6">
                <Badge variant="secondary" className="mb-4 w-fit bg-cta/15 text-cta-foreground">
                  {item.outcome}
                </Badge>
                <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
