import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export function CtaBand({
  title = "Start a conversation.",
  body = "Hiring, partnership, or a problem that needs someone in the room. LinkedIn and GitHub if you want the paper trail first.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-muted">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Start a conversation</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
