import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/data/site";
import { submitContact } from "@/lib/contact";
import { ArrowUpRight } from "lucide-react";

const CONTEXTS = [
  { value: "hiring", label: "A role or a search" },
  { value: "partnership", label: "A partnership or a problem worth sitting with" },
  { value: "other", label: "Something else" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      await submitContact({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          context: String(fd.get("context") ?? ""),
          message: String(fd.get("message") ?? ""),
          company: String(fd.get("company") ?? ""),
        },
      });
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Couldn’t send that. Try LinkedIn.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-border bg-surface p-8">
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Got it
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          I’ll read it.
        </h2>
        <p className="mt-4 max-w-prose text-muted">
          If it’s urgent, LinkedIn is the faster tap. Otherwise I’ll come back through
          email.
        </p>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          LinkedIn <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="What should I call you?" htmlFor="name">
          <Input id="name" name="name" autoComplete="name" required minLength={2} />
        </Field>
        <Field label="How do I reach you?" htmlFor="email">
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </Field>
      </div>
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-muted">
          What’s the shape of this?
        </legend>
        <div className="grid gap-2">
          {CONTEXTS.map((c) => (
            <label
              key={c.value}
              className="flex cursor-pointer items-center gap-3 rounded-md border border-border bg-elevated px-4 py-3 has-[:checked]:border-primary"
            >
              <input
                type="radio"
                name="context"
                value={c.value}
                required
                className="size-4 accent-primary"
              />
              <span className="text-sm text-fg">{c.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Tell me about the constraint." htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          minLength={20}
          placeholder="What’s stuck, who’s in the room, and what ‘done’ would look like."
        />
      </Field>
      {/* Honeypot — bots fill it; humans never see it */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {error ? <p className="text-sm text-primary">{error}</p> : null}
      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a conversation"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
