import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Between } from "@/components/between";
import { Contrast } from "@/components/contrast";
import { CtaBand } from "@/components/cta-band";
import { Process } from "@/components/process";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { PROBLEMS, SITE, STATS } from "@/data/site";
import { featuredWork } from "@/data/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = featuredWork();
  const lead = featured[0];
  const rest = featured.slice(1, 4);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
              {SITE.person} · {SITE.title}
            </p>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-[4.4rem]">
              I sit between the problem and the system.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {SITE.lede}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Start a conversation</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#work">
                  See the work <ArrowDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>
          <Reveal>
            <Between />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-bg px-6 py-8">
              <p className="font-display text-4xl font-semibold tracking-tight text-primary tabular-nums sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-fg">{stat.label}</p>
              <p className="text-sm text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
              The problem
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Teams have to deliver under real constraints. Most hires only cover one side of the table.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.kind} delay={i * 80}>
                <article className="h-full rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-muted">
                  <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                    {item.kind}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-paper text-ink">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
              The plan
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Understand. Design the smallest honest system. Ship and harden.
            </h2>
            <p className="mt-4 max-w-2xl text-[1.05rem] text-ink/70">
              Marketing and teaching trained the translation. DevOps is where it runs. Click a step.
            </p>
          </Reveal>
          <div className="mt-10">
            <Process />
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
                Proof
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-fg"
            >
              All work <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5">
            {lead ? <ProjectCard item={lead} featured /> : null}
            <div className="grid gap-5 md:grid-cols-3">
              {rest.map((item) => (
                <ProjectCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
              The stakes
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Miss the middle and you get theater. Hit it and you get delivery.
            </h2>
          </Reveal>
          <div className="mt-10">
            <Contrast />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
