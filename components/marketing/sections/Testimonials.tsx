"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/data/marketing-misc";
import { SectionHeading } from "@/components/marketing/common/SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { GlassCard } from "@/components/marketing/common/GlassCard";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Khách hàng" title="Khách hàng nói gì về" highlight="chúng tôi" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-14">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <GlassCard className="h-full p-6">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#161E54] to-[#FF986A] opacity-90" />
                      <div>
                        <p className="font-semibold text-zinc-900">{t.name}</p>
                        <p className="text-xs text-zinc-600">
                          {t.role} · {t.company}
                        </p>
                        <span className="mt-1 inline-block rounded-full border border-zinc-200 px-2 py-0.5 text-[10px] text-zinc-500">{t.industry}</span>
                      </div>
                    </div>
                  </GlassCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden border-zinc-200 bg-white text-zinc-900 shadow-sm md:flex" />
            <CarouselNext className="hidden border-zinc-200 bg-white text-zinc-900 shadow-sm md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
