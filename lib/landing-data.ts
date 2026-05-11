import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Globe,
  MessageSquareText,
  Users,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  coverSrc: string;
  coverAlt: string;
}

export interface SolutionHighlight {
  id: string;
  title: string;
  outcome: string;
  description: string;
  coverSrc: string;
  coverAlt: string;
}

export interface ShowcaseTile {
  id: string;
  src: string;
  alt: string;
  /** Tailwind grid placement on lg screens */
  gridClass: string;
}

/** Hero — 4 ô hình tương ứng trụ cột dịch vụ */
export interface HeroServiceTile {
  id: string;
  label: string;
  src: string;
  alt: string;
}

/** Ảnh hero: cùng phong cách ảnh chụp enterprise — Web/CMS (sản xuất nội dung), CRM (dashboard), ERP (chuỗi cung ứng), AI+Chatbot (tự động hóa / AI ứng dụng) */
export const HERO_SERVICE_TILES: HeroServiceTile[] = [
  {
    id: "web-cms",
    label: "Website + CMS",
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85&auto=format&fit=crop",
    alt: "Người dùng làm việc trên laptop — biên tập nội dung và quản trị website CMS",
  },
  {
    id: "crm",
    label: "CRM",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop",
    alt: "Màn hình dashboard phân tích kinh doanh, chỉ số và pipeline phù hợp CRM",
  },
  {
    id: "erp",
    label: "ERP",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&auto=format&fit=crop",
    alt: "Nhà máy và kỹ sư vận hành — ERP sản xuất, quản trị chuỗi cung ứng và shop floor",
  },
  {
    id: "ai-chat",
    label: "ML/AI + Chatbot",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=85&auto=format&fit=crop",
    alt: "Rô-bốt và hệ thống tự động trong phòng lab — ML, AI và chatbot thông minh",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "web",
    title: "Website & nền tảng số",
    description:
      "Thiết kế và phát triển website doanh nghiệp, landing page và cổng thông tin hiệu năng cao, chuẩn SEO.",
    icon: Globe,
    coverSrc:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Laptop và không gian làm việc — phát triển web và quản trị CMS",
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Quản lý khách hàng, pipeline bán hàng và báo cáo — tích hợp quy trình của đội ngũ kinh doanh & CSKH.",
    icon: Users,
    coverSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Dashboard phân tích và biểu đồ kinh doanh trên màn hình",
  },
  {
    id: "erp",
    title: "ERP",
    description:
      "Kết nối tài chính, kho, mua hàng và vận hành trên một nền tảng thống nhất, dữ liệu real-time.",
    icon: Boxes,
    coverSrc:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Dây chuyền sản xuất và nhân sự vận hành — minh họa ERP trong nhà máy",
  },
  {
    id: "ai",
    title: "ML / AI",
    description:
      "Mô hình dự báo, phân loại và xử lý ngôn ngữ tự nhiên phục vụ vận hành và ra quyết định.",
    icon: BrainCircuit,
    coverSrc:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Rô-bốt và hệ thống AI trong môi trường lab công nghệ",
  },
  {
    id: "chatbot",
    title: "Chatbot",
    description:
      "Trợ lý ảo đa kênh (web, app, messenger) với luồng hội thoại tùy chỉnh và bàn giao nhân viên khi cần.",
    icon: MessageSquareText,
    coverSrc:
      "https://images.unsplash.com/photo-1531746797558-3f07f40aa17e?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Điện thoại thông minh hiển thị giao diện tin nhắn và chat",
  },
];

export const SOLUTION_HIGHLIGHTS: SolutionHighlight[] = [
  {
    id: "1",
    title: "Tích hợp end-to-end",
    outcome: "Một luồng dữ liệu",
    description:
      "CRM, ERP và kênh digital được kết nối để tránh phân mảnh và nhập liệu trùng lặp.",
    coverSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Máy chủ và hệ thống mạng trong trung tâm dữ liệu",
  },
  {
    id: "2",
    title: "AI có kiểm soát",
    outcome: "Minh bạch & đo lường được",
    description:
      "Triển khai ML/AI kèm giám sát chất lượng, phiên bản mô hình và nhật ký audit phù hợp doanh nghiệp.",
    coverSrc:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Chip vi xử lý và bo mạch — biểu tượng phần cứng tính toán",
  },
  {
    id: "3",
    title: "Đồng hành sau go-live",
    outcome: "SLA rõ ràng",
    description:
      "Hỗ trợ vận hành, đào tạo và mở rộng tính năng theo lộ trình sản phẩm của bạn.",
    coverSrc:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop",
    coverAlt: "Nhóm chuyên gia làm việc nhóm quanh bàn trong dự án công nghệ",
  },
];

/** Bento gallery — thêm chiều sâu thị giác cho landing */
export const SHOWCASE_TILES: ShowcaseTile[] = [
  {
    id: "s1",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=85&auto=format&fit=crop",
    alt: "Nhóm kỹ sư làm việc cùng laptop trong văn phòng startup",
    gridClass: "col-span-2 row-span-1 min-h-[220px] sm:min-h-[260px] lg:col-span-2 lg:row-span-2 lg:min-h-0",
  },
  {
    id: "s2",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop",
    alt: "Trái đất và dữ liệu — minh họa kết nối toàn cầu",
    gridClass: "min-h-[140px] lg:min-h-0",
  },
  {
    id: "s3",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85&auto=format&fit=crop",
    alt: "Bo mạch và linh kiện điện tử cận cảnh",
    gridClass: "min-h-[140px] lg:min-h-0",
  },
  {
    id: "s4",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=85&auto=format&fit=crop",
    alt: "Màn hình máy tính với dòng mã nguồn",
    gridClass: "min-h-[140px] lg:min-h-0",
  },
  {
    id: "s5",
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=85&auto=format&fit=crop",
    alt: "MacBook trong không gian làm việc tối — phát triển phần mềm",
    gridClass: "min-h-[140px] lg:min-h-0",
  },
];
