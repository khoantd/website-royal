"use server";

import {
  COMPANY_SIZE_LABELS,
  contactFormSchema,
  SERVICE_LABELS,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { getContactEmailConfig, getResend } from "@/lib/resend";

export type SubmitContactResult =
  | { success: true }
  | { success: false; error: string };

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildNotificationHtml(data: ContactFormValues): string {
  const rows: [string, string][] = [
    ["Họ tên", data.name],
    ["Email", data.email],
    ["Điện thoại", data.phone?.trim() || "—"],
    ["Dịch vụ", SERVICE_LABELS[data.service]],
    ["Quy mô", COMPANY_SIZE_LABELS[data.companySize]],
  ];

  const detailRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;color:#52525b;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#18181b">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:560px;margin:0 auto;color:#18181b">
      <h1 style="font-size:20px;margin:0 0 16px">Yêu cầu liên hệ mới</h1>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e4e4e7;border-radius:8px">
        ${detailRows}
      </table>
      <h2 style="font-size:16px;margin:24px 0 8px">Nội dung</h2>
      <p style="white-space:pre-wrap;line-height:1.6;margin:0;padding:12px;background:#fafafa;border-radius:8px;border:1px solid #e4e4e7">${escapeHtml(data.message)}</p>
    </div>
  `;
}

function buildConfirmationHtml(name: string): string {
  return `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;max-width:560px;margin:0 auto;color:#18181b">
      <h1 style="font-size:20px;margin:0 0 16px">Đã nhận yêu cầu của bạn</h1>
      <p style="line-height:1.6;margin:0 0 12px">Xin chào ${escapeHtml(name)},</p>
      <p style="line-height:1.6;margin:0 0 12px">Cảm ơn bạn đã liên hệ Royal Solution. Đội ngũ sẽ phản hồi trong vòng <strong>2 giờ làm việc</strong>.</p>
      <p style="line-height:1.6;margin:0;color:#52525b">— Royal Solution</p>
    </div>
  `;
}

export async function submitContactForm(
  input: ContactFormValues,
): Promise<SubmitContactResult> {
  const parsed = contactFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ",
    };
  }

  const data = parsed.data;

  try {
    const resend = getResend();
    const { from, to } = getContactEmailConfig();

    const { error } = await resend.batch.send([
      {
        from,
        to: [to],
        replyTo: data.email,
        subject: `[Liên hệ] ${data.name} — ${SERVICE_LABELS[data.service]}`,
        html: buildNotificationHtml(data),
      },
      {
        from,
        to: [data.email],
        subject: "Royal Solution đã nhận yêu cầu của bạn",
        html: buildConfirmationHtml(data.name),
      },
    ]);

    if (error) {
      console.error("[contact] Resend error:", error.name);
      return {
        success: false,
        error: "Không gửi được email. Vui lòng thử lại sau.",
      };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown";
    if (message.includes("RESEND_API_KEY")) {
      console.error("[contact] Missing RESEND_API_KEY");
    } else {
      console.error("[contact] Unexpected error");
    }
    return {
      success: false,
      error: "Không gửi được email. Vui lòng thử lại sau.",
    };
  }
}
