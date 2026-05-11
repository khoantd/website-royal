import type { LucideIcon } from "lucide-react";
import { BarChart3, Bot, Brain, Building2, Globe, LayoutDashboard } from "lucide-react";

export interface ServiceOffering {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  gradient: string;
  iconGlow: string;
  /** Ảnh minh họa trên trang chủ (public path), ví dụ `/images/foo.png` */
  imageSrc?: string;
  /** Với object-cover: căn điểm crop (Tailwind), ví dụ `object-right`, `object-[88%_center]` */
  imageCoverPosition?: string;
}

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    slug: "website-cms",
    title: "Website & CMS",
    shortTitle: "Website & CMS",
    description:
      "Thiết kế và phát triển website chuyên nghiệp, tối ưu SEO, tích hợp CMS linh hoạt (WordPress, Strapi, Sanity, headless custom).",
    features: ["Headless CMS", "SEO-ready", "Core Web Vitals", "Responsive 100%"],
    icon: Globe,
    gradient: "from-[#161E54] to-[#F16D34]",
    iconGlow: "shadow-brand-navy/25",
    imageSrc: "/images/website-and-cms.png",
    imageCoverPosition: "object-right",
  },
  {
    slug: "crm",
    title: "CRM — Quản lý khách hàng",
    shortTitle: "CRM",
    description:
      "Hệ thống CRM tùy chỉnh theo quy trình kinh doanh, tự động hóa sales pipeline, theo dõi khách hàng 360°.",
    features: ["Pipeline rõ ràng", "Email automation", "Báo cáo realtime", "Tích hợp Zalo/Email"],
    icon: BarChart3,
    gradient: "from-[#F16D34] to-[#FF986A]",
    iconGlow: "shadow-brand-orange/30",
    imageSrc: "/images/crm-app.png",
  },
  {
    slug: "erp",
    title: "ERP — Quản trị doanh nghiệp",
    shortTitle: "ERP",
    description:
      "Triển khai ERP toàn diện: kế toán, kho hàng, nhân sự, mua hàng — một nền tảng duy nhất.",
    features: ["Kế toán & tài chính", "Quản lý kho", "HRM & chấm công", "Multi-branch"],
    icon: Building2,
    gradient: "from-[#161E54] to-[#FF986A]",
    iconGlow: "shadow-brand-peach/25",
    imageSrc: "/images/erp-app.png",
  },
  {
    slug: "ai-chatbot",
    title: "AI & Chatbot",
    shortTitle: "AI & Chatbot",
    description:
      "Chatbot AI thế hệ mới (GPT-powered), hoạt động 24/7, đa kênh: web, Zalo, Messenger, Telegram.",
    features: ["LLM tùy chỉnh", "RAG knowledge base", "Omnichannel", "Analytics & training"],
    icon: Bot,
    gradient: "from-[#BBE0EF] via-[#F16D34] to-[#161E54]",
    iconGlow: "shadow-brand-orange/25",
    imageSrc: "/images/ai-chatbox.png",
  },
  {
    slug: "reporting-dashboard",
    title: "Dashboard & Báo cáo",
    shortTitle: "Dashboard",
    description:
      "Dashboard tùy chỉnh theo KPI: tổng hợp dữ liệu đa nguồn, cảnh báo, xuất báo cáo — giúp lãnh đạo ra quyết định nhanh và minh bạch.",
    features: ["Trực quan hóa dữ liệu", "Báo cáo tự động", "Tích hợp đa nguồn", "Xuất dữ liệu linh hoạt"],
    icon: LayoutDashboard,
    gradient: "from-[#F16D34] to-[#FF986A]",
    iconGlow: "shadow-brand-orange/30",
    imageSrc: "/images/report.png",
  },
  {
    slug: "ml-ai",
    title: "ML / AI",
    shortTitle: "ML / AI",
    description:
      "Xây dựng và triển khai mô hình học máy phù hợp dữ liệu nội bộ: dự báo, phân loại, phát hiện bất thường, gợi ý — tích hợp API/MLOps và giám sát hiệu năng.",
    features: ["Dự báo & phân loại theo domain", "MLOps & versioning mô hình", "Tích hợp API / batch pipeline", "On-prem hoặc cloud tuỳ chính sách"],
    icon: Brain,
    gradient: "from-[#161E54] via-[#BBE0EF] to-[#F16D34]",
    iconGlow: "shadow-brand-navy/20",
    imageSrc: "/images/ml-ai.png",
  },
];
