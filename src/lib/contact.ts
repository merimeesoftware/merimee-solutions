import { createServerFn } from "@tanstack/react-start";

export type ContactPayload = {
  name: string;
  email: string;
  context: string;
  message: string;
  /** Honeypot — must stay empty for humans. */
  company?: string;
};

function env(name: string): string | undefined {
  // Works in Node, Vite SSR, and Cloudflare Workers bindings that surface as process.env.
  const v =
    typeof process !== "undefined" ? process.env[name] : undefined;
  return v && v.trim() ? v.trim() : undefined;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Server function: validate the contact form and send via Resend.
 * Runs on the Cloudflare Worker / SSR host — API key never reaches the browser.
 *
 * Required env (Cloudflare → Settings → Variables):
 *   RESEND_API_KEY      — from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL    — e.g. michaeltmerimee@gmail.com
 *
 * Optional:
 *   CONTACT_FROM_EMAIL  — defaults to "Merimee <onboarding@resend.dev>"
 *                         (use a verified domain address once you add one in Resend)
 */
export const submitContact = createServerFn({ method: "POST" }).handler(
  async (ctx: { data: ContactPayload }) => {
    const data = ctx.data;

    // Honeypot: bots fill hidden fields; humans never see this.
    if (String(data.company ?? "").trim()) {
      return { ok: true as const };
    }

    const name = String(data.name ?? "").trim();
    const email = String(data.email ?? "").trim();
    const context = String(data.context ?? "").trim();
    const message = String(data.message ?? "").trim();

    if (name.length < 2) throw new Error("Name is too short.");
    if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      throw new Error("That email doesn’t look right.");
    }
    if (!context) throw new Error("Pick a context.");
    if (message.length < 20) {
      throw new Error("Say a little more about the constraint (20+ characters).");
    }

    const apiKey = env("RESEND_API_KEY");
    const to = env("CONTACT_TO_EMAIL");
    if (!apiKey || !to) {
      throw new Error(
        "Contact form isn’t configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL, or use LinkedIn.",
      );
    }

    const from =
      env("CONTACT_FROM_EMAIL") || "Merimee <onboarding@resend.dev>";
    const subject = `Merimee inquiry — ${context}`;

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Context: ${context}`,
      "",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#1c1914">
        <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin:0 0 8px"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin:0 0 16px"><strong>Context:</strong> ${escapeHtml(context)}</p>
        <hr style="border:none;border-top:1px solid #e5e2dc;margin:16px 0" />
        <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
      </div>
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("[contact] Resend failed", res.status, body);
      throw new Error("Couldn’t send that. Try LinkedIn.");
    }

    return { ok: true as const };
  },
);
