import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Nhập họ tên").max(100),
  email: z.string().trim().email("Email không hợp lệ").max(255),
  phone: z.string().trim().max(30).optional(),
  service: z.enum(["website", "crm", "erp", "ai", "dashboard", "ml", "other"]),
  companySize: z.enum(["lt10", "10-50", "50-200", "200p"]),
  message: z.string().trim().min(10, "Mô tả ít nhất 10 ký tự").max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const SERVICE_LABELS: Record<ContactFormValues["service"], string> = {
  website: "Website / CMS",
  crm: "CRM",
  erp: "ERP",
  ai: "AI / Chatbot",
  dashboard: "Dashboard & Báo cáo",
  ml: "ML / AI",
  other: "Khác",
};

export const COMPANY_SIZE_LABELS: Record<ContactFormValues["companySize"], string> = {
  lt10: "< 10 nhân sự",
  "10-50": "10 – 50",
  "50-200": "50 – 200",
  "200p": "200+",
};
