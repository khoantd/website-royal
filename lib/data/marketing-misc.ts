export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Khám phá",
    desc: "Tư vấn & phân tích nhu cầu (miễn phí)",
    emoji: "🔍",
  },
  {
    step: 2,
    title: "Thiết kế",
    desc: "UI/UX wireframe & prototype",
    emoji: "📐",
  },
  {
    step: 3,
    title: "Phát triển",
    desc: "Agile sprint, báo cáo hàng tuần",
    emoji: "⚙️",
  },
  {
    step: 4,
    title: "Kiểm thử",
    desc: "QA, UAT, performance testing",
    emoji: "🧪",
  },
  {
    step: 5,
    title: "Ra mắt & hỗ trợ",
    desc: "Go-live + bảo trì & training",
    emoji: "🚀",
  },
] as const;

export const TECH_STACK = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "Vue", "TypeScript", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Laravel", "NestJS"],
  },
  {
    category: "CMS",
    items: ["Strapi", "Sanity", "WordPress", "Directus"],
  },
  {
    category: "AI/ML",
    items: ["OpenAI GPT-4", "LangChain", "Pinecone", "HuggingFace"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "Vercel", "CI/CD", "Nginx"],
  },
] as const;

export const STATS = [
  { value: 200, suffix: "+", label: "Dự án hoàn thành" },
  { value: 98, suffix: "%", label: "Khách hàng hài lòng" },
  { value: 5, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 50, suffix: "k+", label: "Users chatbot / tháng" },
] as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-chatbot-2025",
    title: "AI Chatbot 2025: Tại sao 80% doanh nghiệp cần triển khai ngay",
    excerpt: "Chi phí vận hành CSKH, RAG và kỳ vọng khách hàng đang thay đổi.",
    date: "2025-04-12",
  },
  {
    slug: "erp-odoo-sap-custom",
    title: "So sánh ERP: Odoo vs SAP vs Custom — Cái nào phù hợp với bạn?",
    excerpt: "Ma trận quyết định theo quy mô, ngành và độ tùy chỉnh.",
    date: "2025-03-28",
  },
  {
    slug: "headless-cms-la-gi",
    title: "Headless CMS là gì? Tại sao nên dùng thay WordPress monolith?",
    excerpt: "Tách content khỏi presentation — lợi ích cho đội marketing và dev.",
    date: "2025-03-01",
  },
  {
    slug: "crm-sme-vietnam",
    title: "CRM và bài toán quản lý khách hàng của SME Việt Nam",
    excerpt: "Pipeline đơn giản nhưng đủ đo — tránh phần mềm quá nặng.",
    date: "2025-02-15",
  },
  {
    slug: "rag-vs-finetuning",
    title: "RAG vs Fine-tuning: Chọn chiến lược AI nào cho doanh nghiệp?",
    excerpt: "Khi nào cần huấn luyện lại mô hình, khi nào chỉ cần knowledge base.",
    date: "2025-02-02",
  },
];

export const LOGO_NAMES = [
  "NovaRetail",
  "GreenFood",
  "MetroProp",
  "PayLite",
  "VinaManufacturing",
  "SkyMedia",
  "UrbanBrew",
  "TechNorth",
];
