import { createFileRoute, Link } from "@tanstack/react-router";
import { AiArc } from "@/components/ai-arc";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CLOSE, ORIGIN, SITE } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: `About — ${SITE.person}` },
      {
        name: "description",
        content:
          "Origin in a seven-person company, teaching in between, DevOps now. The scarce skill is translation under constraints.",
      },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 pb-8 sm:px-6 sm:pt-20 lg:grid-cols-[minmax(0,1.2fr)_240px] lg:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            About
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Empathy from the rooms I sat in. Authority from the systems I run.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            {SITE.title} at {SITE.employer}. Before that: marketing, teaching, and
            client delivery. The through-line is making an abstract constraint
            tangible enough that someone can act.
          </p>
        </div>
        <img
          src="/michael.jpg"
          alt={SITE.person}
          className="size-44 rounded-xl border-2 border-primary/40 object-cover sm:size-56"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {ORIGIN.map((ch, i) => (
            <Reveal key={ch.chapter} delay={i * 80}>
              <article className="h-full rounded-xl border border-border bg-surface p-6">
                <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                  {ch.chapter}
                </p>
                <p className="mt-2 text-xs text-subtle">{ch.years}</p>
                <h2 className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {ch.title}
                </h2>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{ch.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            How I use AI
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Plow horse to tractor. The implements are still being built.
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] text-ink/70">
            Not a product pitch. A practice. Click a chapter.
          </p>
          <div className="mt-10 text-fg">
            <div className="rounded-xl bg-bg p-5 sm:p-8">
              <AiArc />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {CLOSE}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
