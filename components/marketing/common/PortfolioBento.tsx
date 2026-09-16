"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { PortfolioProject } from "@/lib/data/marketing-portfolio";
import { cn } from "@/lib/utils";

/** Collage map: featured 2×2, CRM/ERP stack, mid pair, full-width footer. */
const GRID_SPAN = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2 lg:col-span-3",
] as const;

/** Prefer UI chrome at top of dashboard screenshots; ecom/ML slightly lower. */
const OBJECT_POSITION = [
  "object-[center_15%]",
  "object-top",
  "object-top",
  "object-top",
  "object-top",
  "object-[center_25%]",
] as const;

export interface PortfolioBentoProps {
  projects: PortfolioProject[];
  /** Destination for each tile (home preview → /portfolio; listing → /contact). */
  href?: string;
  className?: string;
}

export function PortfolioBento({ projects, href = "/portfolio", className }: PortfolioBentoProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn(
        "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[240px]",
        className
      )}
    >
      {projects.map((p, i) => {
        const featured = i === 0;
        const fullBleed = i === 5;
        return (
          <motion.article
            key={p.id}
            variants={fadeUp}
            className={cn(
              "group relative min-h-[220px] overflow-hidden bg-zinc-900",
              GRID_SPAN[i] ?? "sm:col-span-1",
              featured && "sm:min-h-[480px] lg:min-h-0",
              fullBleed && "min-h-[200px] sm:min-h-[220px] lg:min-h-0"
            )}
          >
            <Link
              href={href}
              className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#D4AF37]"
              aria-label={`${p.title} — xem chi tiết`}
            >
              <span className="sr-only">{p.title}</span>
            </Link>
            {p.imageSrc ? (
              <img
                src={p.imageSrc}
                alt=""
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out",
                  OBJECT_POSITION[i] ?? "object-top",
                  !reduceMotion && "group-hover:scale-[1.03]"
                )}
                loading={featured ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1931] to-[#C5A059]/80" />
            )}
            {/* Light bottom scrim — UI stays readable at rest */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/70 via-black/35 to-transparent"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] p-3 sm:p-5">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-white/75">
                {p.tags.join(" · ")}
              </p>
              <h3
                className={cn(
                  "font-[family-name:var(--font-display)] mt-1.5 break-words font-semibold text-white drop-shadow-sm",
                  featured ? "text-lg sm:text-2xl lg:text-3xl" : fullBleed ? "text-base sm:text-xl" : "text-base sm:text-lg"
                )}
              >
                {p.title}
              </h3>
              <p
                className={cn(
                  "mt-1.5 text-sm font-medium text-[#D4AF37] transition-opacity duration-200",
                  reduceMotion ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
                )}
              >
                {p.metric}
              </p>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
