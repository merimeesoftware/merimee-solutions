import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { listInquiries, markInquiryRead, type Inquiry } from "@/lib/inquiries";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/inquiries")({ component: InquiriesPage });

function InquiriesPage() {
  const { user, isPending } = useCurrentUserState();
  const [rows, setRows] = useState<Inquiry[] | null>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (!user) return;
    listInquiries()
      .then((data) => {
        setRows(data);
        setActive(data[0]?.id ?? null);
      })
      .catch(() => setRows([]));
  }, [user]);

  if (isPending) {
    return <div className="mx-auto max-w-6xl px-4 py-24 text-muted">Loading…</div>;
  }
  if (!user) return <RedirectToSignIn />;

  const current = rows?.find((r) => r.id === active) ?? null;

  async function openRow(row: Inquiry) {
    setActive(row.id);
    if (row.read_at) return;
    try {
      await markInquiryRead({ data: row.id });
      setRows((prev) =>
        prev
          ? prev.map((r) =>
              r.id === row.id ? { ...r, read_at: new Date().toISOString() } : r,
            )
          : prev,
      );
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
        Inbox
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
        Conversations
      </h1>
      <p className="mt-2 text-sm text-muted">
        Public form submissions. Only visible when you're signed in.
      </p>

      {!rows ? (
        <p className="mt-10 text-muted">Loading…</p>
      ) : rows.length === 0 ? (
        <p className="mt-10 rounded-xl border border-border bg-surface p-8 text-muted">
          Nothing yet. The contact form writes here.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {rows.map((row) => (
              <li key={row.id}>
                <button
                  type="button"
                  onClick={() => openRow(row)}
                  className={cn(
                    "flex w-full flex-col items-start gap-1 px-4 py-4 text-left transition-colors",
                    row.id === active ? "bg-elevated" : "hover:bg-elevated/60",
                  )}
                >
                  <span className="flex w-full items-center justify-between gap-3">
                    <span className="font-medium text-fg">{row.name}</span>
                    {!row.read_at ? (
                      <span className="size-2 rounded-full bg-primary" />
                    ) : null}
                  </span>
                  <span className="text-xs text-muted">
                    {row.context} · {formatDate(row.created_at)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {current ? (
            <article className="rounded-xl border border-border bg-surface p-6">
              <p className="text-xs tracking-[0.14em] text-primary uppercase">
                {current.context}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {current.name}
              </h2>
              <a
                href={`mailto:${current.email}`}
                className="mt-1 block text-sm text-muted hover:text-fg"
              >
                {current.email}
              </a>
              <p className="mt-1 text-xs text-subtle">{formatDate(current.created_at)}</p>
              <p className="mt-6 whitespace-pre-wrap text-[1.02rem] leading-relaxed">
                {current.message}
              </p>
            </article>
          ) : null}
        </div>
      )}
    </section>
  );
}

function formatDate(value: string) {
  try {
    return format(new Date(value), "MMM d, yyyy · h:mm a");
  } catch {
    return value;
  }
}
