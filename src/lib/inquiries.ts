import { createServerFn } from "@tanstack/react-start";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";

export type Inquiry = {
  id: number;
  name: string;
  email: string;
  context: string;
  message: string;
  created_at: string;
  read_at: string | null;
};

const CONTEXTS = new Set(["hiring", "partnership", "other"]);

export type InquiryInput = {
  name: string;
  email: string;
  context: string;
  message: string;
  company?: string;
};

export const submitInquiry = createServerFn({ method: "POST" })
  .validator((raw: InquiryInput) => {
    const name = String(raw.name ?? "").trim();
    const email = String(raw.email ?? "").trim();
    const context = String(raw.context ?? "").trim();
    const message = String(raw.message ?? "").trim();
    const company = String(raw.company ?? "").trim();
    if (company) return { honeypot: true as const };
    if (name.length < 2 || name.length > 120) throw new Error("Name looks off.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Need a real email.");
    if (!CONTEXTS.has(context)) throw new Error("Pick a context.");
    if (message.length < 20) throw new Error("Give me a little more to go on — twenty characters at least.");
    if (message.length > 4000) throw new Error("That's a novel. Trim it a bit.");
    return { honeypot: false as const, name, email, context, message };
  })
  .handler(async ({ data }) => {
    if (data.honeypot) return { ok: true as const };
    const sql = await getSql();
    await sql`
      insert into inquiries (name, email, context, message)
      values (${data.name}, ${data.email}, ${data.context}, ${data.message})
    `;
    return { ok: true as const };
  });

export const listInquiries = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async () => {
    const sql = await getSql();
    return sql<Inquiry>`
      select id, name, email, context, message, created_at, read_at
      from inquiries
      order by created_at desc
    `;
  });

export const markInquiryRead = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((id: number) => Number(id))
  .handler(async ({ data: id }) => {
    const sql = await getSql();
    await sql`update inquiries set read_at = now() where id = ${id} and read_at is null`;
    return { ok: true as const };
  });
