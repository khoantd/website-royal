export const PROCESS_STEP_IDS = [1, 2, 3, 4, 5] as const;

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

export const STATS_META = [
  { key: "projects", value: 200, suffix: "+" },
  { key: "satisfaction", value: 98, suffix: "%" },
  { key: "years", value: 5, suffix: "+" },
  { key: "chatbotUsers", value: 50, suffix: "k+" },
] as const;

export type BlogPostMeta = {
  slug: string;
  date: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  { slug: "ai-chatbot-2025", date: "2025-04-12" },
  { slug: "erp-odoo-sap-custom", date: "2025-03-28" },
  { slug: "headless-cms-la-gi", date: "2025-03-01" },
  { slug: "crm-sme-vietnam", date: "2025-02-15" },
  { slug: "rag-vs-finetuning", date: "2025-02-02" },
];

export type BlogPost = BlogPostMeta & {
  title: string;
  excerpt: string;
};

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
