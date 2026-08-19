import { useState } from "react";
import { AI_ARC } from "@/data/site";
import { cn } from "@/lib/utils";

export function AiArc() {
  const [active, setActive] = useState(0);
  const chapter = AI_ARC[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <ol className="relative space-y-1">
        <span
          className="absolute top-3 bottom-3 left-[11px] w-px bg-border"
          aria-hidden="true"
        />
        {AI_ARC.map((item, i) => (
          <li key={item.era}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative flex w-full items-center gap-4 rounded-md px-1 py-3 text-left transition-colors duration-150",
                i === active ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              <span
                className={cn(
                  "relative z-10 size-2.5 shrink-0 rounded-full ring-4 ring-bg",
                  i === active ? "bg-primary" : "bg-muted",
                )}
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                {item.era}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          {chapter.era}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          {chapter.title}
        </h3>
        <p className="mt-4 max-w-prose text-[1.05rem] leading-relaxed text-muted">
          {chapter.body}
        </p>
      </div>
    </div>
  );
}
