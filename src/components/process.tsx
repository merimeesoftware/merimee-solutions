import { useState } from "react";
import { PLAN } from "@/data/site";
import { cn } from "@/lib/utils";

export function Process() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {PLAN.map((step, i) => {
        const active = open === i;
        return (
          <button
            key={step.n}
            type="button"
            onClick={() => setOpen(i)}
            className={cn(
              "rounded-xl border p-6 text-left transition-[border-color,background-color,color] duration-200 ease-out",
              active
                ? "border-primary bg-ink text-paper"
                : "border-ink/15 bg-paper text-ink hover:border-ink/35",
            )}
          >
            <p className="font-display text-sm font-semibold tracking-[0.14em] text-primary">
              {step.n}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight md:text-[1.35rem]">
              {step.title}
            </h3>
            <p
              className={cn(
                "mt-3 text-[0.95rem] leading-relaxed",
                active ? "text-paper/75" : "text-ink/70",
              )}
            >
              {step.body}
            </p>
          </button>
        );
      })}
    </div>
  );
}
