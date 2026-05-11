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

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "CRM tùy chỉnh giúp đội sales của chúng tôi theo dõi deal rõ ràng — báo cáo cuối tuần giờ chỉ mất vài phút.",
    name: "Minh Anh",
    role: "Giám đốc kinh doanh",
    company: "Công ty BĐS Phố Đông",
    industry: "Bất động sản",
  },
  {
    id: "2",
    quote:
      "Website mới và CMS headless giúp team marketing publish nội dung nhanh gấp đôi, SEO cải thiện rõ.",
    name: "Thu Hà",
    role: "Marketing Lead",
    company: "F&B Urban Taste",
    industry: "F&B",
  },
  {
    id: "3",
    quote:
      "ERP kế toán — kho giảm sai lệch hàng tháng; dashboard ban lãnh đạo nhìn một nơi.",
    name: "Quốc Tuấn",
    role: "COO",
    company: "Nhựa Phương Nam",
    industry: "Sản xuất",
  },
  {
    id: "4",
    quote:
      "Chatbot AI giảm tải call center ~40% trong quý đầu, vẫn giữ được độ chính xác nhờ RAG.",
    name: "Lan Chi",
    role: "Head of CX",
    company: "PayNeo",
    industry: "Fintech",
  },
  {
    id: "5",
    quote:
      "Đội triển khai am hiểu SME Việt Nam — không impose quy trình nước ngoài khó áp dụng.",
    name: "Đức Thịnh",
    role: "CEO",
    company: "Retail Chain North",
    industry: "Bán lẻ",
  },
];

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

export const LEADERSHIP_TEAM = [
  {
    role: "CEO",
    roleVi: "Giám đốc điều hành",
    name: "Nguyễn văn A",
    initials: "NA",
    bio: "Định hướng chiến lược sản phẩm và hợp tác khách hàng doanh nghiệp; hơn 12 năm kinh nghiệm triển khai chuyển đổi số và quản lý dự án công nghệ.",
    accent: "from-[#161E54] to-[#F16D34]",
  },
  
] as const;
