export interface PortfolioProject {
  id: string;
  title: string;
  tags: string[];
  industry: string;
  location?: string;
  metric: string;
  excerpt: string;
  imageSrc?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "1",
    title: "E-commerce Website + CMS",
    tags: ["Website", "CMS"],
    industry: "Thời trang",
    location: "Hà Nội",
    metric: "⬆ 180% lead sau 3 tháng",
    excerpt: "Headless storefront và CMS cho đội marketing tự vận hành.",
    imageSrc: "/images/website-and-cms.png",
  },
  {
    id: "2",
    title: "CRM tùy chỉnh cho môi giới",
    tags: ["CRM"],
    industry: "Bất động sản",
    metric: "700+ môi giới trên một nền tảng",
    excerpt: "Pipeline và báo cáo realtime theo từng khu vực.",
    imageSrc: "/images/crm-app.png",
  },
  {
    id: "3",
    title: "ERP sản xuất thực phẩm",
    tags: ["ERP"],
    industry: "Sản xuất",
    location: "Bình Dương",
    metric: "−32% lệch tồn kho",
    excerpt: "Kế hoạch sản xuất, QC và kho tích hợp.",
    imageSrc: "/images/erp-app.png",
  },
  {
    id: "4",
    title: "Chatbot AI CSKH ngân hàng",
    tags: ["AI"],
    industry: "Ngân hàng",
    metric: "50k+ user/tháng",
    excerpt: "RAG trên quy định nội bộ, bàn giao agent khi cần.",
    imageSrc: "/images/ai-chatbox.png",
  },
  {
    id: "5",
    title: "Headless CMS — truyền thông",
    tags: ["Website", "CMS"],
    industry: "Media",
    metric: "Publish < 5 phút/bài",
    excerpt: "Đồng bộ đa site, đa ngôn ngữ.",
    imageSrc: "/images/report.png",
  },
  {
    id: "6",
    title: "AI Data Analytics Dashboard",
    tags: ["AI"],
    industry: "Fintech",
    metric: "SLA báo cáo < 60s",
    excerpt: "Pipeline dữ liệu và cảnh báo gian lận.",
    imageSrc: "/images/ml-ai.png",
  },
];
