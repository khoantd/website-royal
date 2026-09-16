export interface PortfolioProjectMeta {
  id: string;
  imageSrc?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProjectMeta[] = [
  { id: "1", imageSrc: "/images/website-and-cms.png" },
  { id: "2", imageSrc: "/images/crm-app.png" },
  { id: "3", imageSrc: "/images/erp-app.png" },
  { id: "4", imageSrc: "/images/ai-chatbox.png" },
  { id: "5", imageSrc: "/images/report.png" },
  { id: "6", imageSrc: "/images/ml-ai.png" },
];

/** Localized portfolio tile used by UI */
export type PortfolioProject = PortfolioProjectMeta & {
  title: string;
  tags: string[];
  industry: string;
  location?: string;
  metric: string;
  excerpt: string;
};
