import { BETWEEN } from "@/data/site";

export function Between() {
  return (
    <div className="grid overflow-hidden rounded-xl border border-border bg-surface md:grid-cols-[1fr_auto_1fr]">
      <Column side="left" label={BETWEEN.left.label} items={BETWEEN.left.items} />
      <div className="relative flex items-center justify-center bg-primary px-4 py-3 md:px-3 md:py-0">
        <span className="font-display text-sm font-semibold tracking-wide text-primary-fg uppercase md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:-rotate-90 md:whitespace-nowrap">
          I sit here
        </span>
      </div>
      <Column side="right" label={BETWEEN.right.label} items={BETWEEN.right.items} />
    </div>
  );
}

function Column({
  label,
  items,
  side,
}: {
  label: string;
  items: readonly string[];
  side: "left" | "right";
}) {
  return (
    <div className={side === "left" ? "p-6 sm:p-8" : "p-6 sm:p-8"}>
      <p className="text-xs font-medium tracking-[0.16em] text-muted uppercase">{label}</p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-start gap-3 rounded-md px-1 py-1.5 transition-colors duration-150 hover:bg-elevated"
          >
            <span
              className={
                side === "left"
                  ? "mt-2 size-1.5 shrink-0 rounded-full bg-muted"
                  : "mt-2 size-1.5 shrink-0 rounded-full bg-primary"
              }
            />
            <span className="font-display text-lg font-medium tracking-tight text-fg sm:text-xl">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
