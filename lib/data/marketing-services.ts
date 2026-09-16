import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Brain, Building2, Globe, LayoutDashboard } from "lucide-react";

export interface ServiceOfferingMeta {
  slug: string;
  icon: LucideIcon;
  gradient: string;
  iconGlow: string;
  imageSrc?: string;
  imageCoverPosition?: string;
}

export const SERVICE_OFFERINGS: ServiceOfferingMeta[] = [
  {
    slug: "website-cms",
    icon: Globe,
    gradient: "from-[#0A1931] to-[#C5A059]",
    iconGlow: "shadow-brand-navy/25",
    imageSrc: "/images/website-and-cms.png",
    imageCoverPosition: "object-right",
  },
  {
    slug: "crm",
    icon: BarChart3,
    gradient: "from-[#C5A059] to-[#D4AF37]",
    iconGlow: "shadow-brand-orange/30",
    imageSrc: "/images/crm-app.png",
  },
  {
    slug: "erp",
    icon: Building2,
    gradient: "from-[#0A1931] to-[#D4AF37]",
    iconGlow: "shadow-brand-peach/25",
    imageSrc: "/images/erp-app.png",
  },
  {
    slug: "ai-chatbot",
    icon: Bot,
    gradient: "from-[#E8EEF5] via-[#C5A059] to-[#0A1931]",
    iconGlow: "shadow-brand-orange/25",
    imageSrc: "/images/ai-chatbox.png",
  },
  {
    slug: "reporting-dashboard",
    icon: LayoutDashboard,
    gradient: "from-[#C5A059] to-[#D4AF37]",
    iconGlow: "shadow-brand-orange/30",
    imageSrc: "/images/report.png",
  },
  {
    slug: "ml-ai",
    icon: Brain,
    gradient: "from-[#0A1931] via-[#E8EEF5] to-[#C5A059]",
    iconGlow: "shadow-brand-navy/20",
    imageSrc: "/images/ml-ai.png",
  },
];

/** @deprecated Use ServiceOfferingMeta + translations */
export type ServiceOffering = ServiceOfferingMeta & {
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
};
