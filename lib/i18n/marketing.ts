import type { useTranslations } from "next-intl";
import { SERVICE_OFFERINGS, type ServiceOffering } from "@/lib/data/marketing-services";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "@/lib/data/marketing-portfolio";
import { BLOG_POSTS, type BlogPost } from "@/lib/data/marketing-misc";

type ServicesT = ReturnType<typeof useTranslations<"Services">>;
type PortfolioT = ReturnType<typeof useTranslations<"Portfolio">>;
type BlogT = ReturnType<typeof useTranslations<"Blog">>;

export function localizeServices(t: ServicesT): ServiceOffering[] {
  return SERVICE_OFFERINGS.map((s) => ({
    ...s,
    title: t(`${s.slug}.title`),
    shortTitle: t(`${s.slug}.shortTitle`),
    description: t(`${s.slug}.description`),
    features: t.raw(`${s.slug}.features`) as string[],
  }));
}

export function localizePortfolio(t: PortfolioT): PortfolioProject[] {
  return PORTFOLIO_PROJECTS.map((p) => {
    const location = t(`${p.id}.location`);
    return {
      ...p,
      title: t(`${p.id}.title`),
      tags: t.raw(`${p.id}.tags`) as string[],
      industry: t(`${p.id}.industry`),
      location: location.trim() ? location : undefined,
      metric: t(`${p.id}.metric`),
      excerpt: t(`${p.id}.excerpt`),
    };
  });
}

export function localizeBlogPosts(t: BlogT): BlogPost[] {
  return BLOG_POSTS.map((p) => ({
    ...p,
    title: t(`${p.slug}.title`),
    excerpt: t(`${p.slug}.excerpt`),
  }));
}
