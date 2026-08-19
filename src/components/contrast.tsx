import { FAILURE, SUCCESS } from "@/data/site";

export function Contrast() {
  return (
    <div className="grid overflow-hidden rounded-xl border border-border md:grid-cols-2">
      <article className="bg-surface p-6 transition-colors duration-200 hover:bg-elevated sm:p-8">
        <p className="text-xs font-medium tracking-[0.16em] text-subtle uppercase">
          If you miss
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-muted">
          Theater
        </h3>
        <ul className="mt-6 space-y-3 text-[0.975rem] leading-relaxed text-muted">
          {FAILURE.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-subtle" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="border-t border-border bg-elevated p-6 transition-colors duration-200 hover:bg-surface sm:p-8 md:border-t-0 md:border-l">
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          If you hit
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-fg">
          Delivery
        </h3>
        <ul className="mt-6 space-y-3 text-[0.975rem] leading-relaxed text-fg">
          {SUCCESS.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
