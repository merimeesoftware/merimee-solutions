import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ProjectCard } from "@/components/project-card";
import { workByKind } from "@/data/work";

export const Route = createFileRoute("/work/")({ component: WorkIndex });

function WorkIndex() {
  const engineering = workByKind("engineering");
  const delivery = workByKind("delivery");

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20">
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Work
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineering first. Selective delivery second.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Platform results, live systems, and a few client sites that still answer.
          Live links only where the host did.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Engineering</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {engineering.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Delivery for real stakeholders
        </h2>
        <p className="mt-2 max-w-2xl text-muted">
          Honest about modest scope. These trained sitting with an owner who has to
          live with the result.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {delivery.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <CtaBand title="Want the longer version of a piece of work?" />
    </>
  );
}
