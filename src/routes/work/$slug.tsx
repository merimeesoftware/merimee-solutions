import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { getWork } from "@/data/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = getWork(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: WorkDetail,
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Merimee` : "Work — Merimee" },
      { name: "description", content: loaderData?.summary ?? "" },
    ],
  }),
});

function WorkDetail() {
  const item = Route.useLoaderData();

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <Link
          to="/work"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" /> All work
        </Link>
        <p className="mt-8 text-xs font-medium tracking-[0.16em] text-primary uppercase">
          {item.kicker}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {item.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{item.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {item.liveUrl ? (
            <Button asChild>
              <a href={item.liveUrl} target="_blank" rel="noreferrer">
                Visit site <ArrowUpRight className="size-4" />
              </a>
            </Button>
          ) : null}
          {item.repoUrl ? (
            <Button asChild variant="ghost">
              <a href={item.repoUrl} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight className="size-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </article>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl border border-border">
          <img src={item.image} alt="" className="aspect-[16/8] w-full object-cover" />
        </div>
      </div>

      <div className="mx-auto grid max-w-3xl gap-12 px-4 py-16 sm:px-6">
        <Section kicker="The constraint" body={item.problem} />
        <Section kicker="What I did" body={item.approach} />
        <Section kicker="What shipped" body={item.outcome} />
        {item.honest ? <Section kicker="Being honest" body={item.honest} /> : null}
        <ul className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <CtaBand title="If this is the kind of work you need in the room." />
    </>
  );
}

function Section({ kicker, body }: { kicker: string; body: string }) {
  return (
    <section>
      <h2 className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
        {kicker}
      </h2>
      <p className="mt-3 text-[1.075rem] leading-relaxed text-fg">{body}</p>
    </section>
  );
}
