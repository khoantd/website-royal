import { Resend } from "resend";

let resendClient: Resend | null = null;

/** Lazy Resend client — avoids constructing with a missing key at import time. */
export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export function getContactEmailConfig() {
  const from =
    process.env.EMAIL_FROM?.trim() || "Royal Solution <onboarding@resend.dev>";
  const to =
    process.env.CONTACT_EMAIL?.trim() || "hello@royalsolution.vn";
  return { from, to };
}
