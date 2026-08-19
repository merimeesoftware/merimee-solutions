import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { WorkItem } from "@/data/work";
import { cn } from "@/lib/utils";

export function ProjectCard({
  item,
  featured = false,
}: {
  item: WorkItem;
  featured?: boolean;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: item.slug }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-muted",
        featured && "md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-elevated",
          featured ? "aspect-[16/10] md:aspect-auto md:w-[46%] md:min-h-[280px]" : "aspect-[16/10]",
        )}
      >
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg/50 to-transparent" />
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-5 sm:p-6", featured && "md:p-8")}>
        <p className="text-xs font-medium tracking-[0.14em] text-primary uppercase">
          {item.kicker}
        </p>
        <h3
          className={cn(
            "font-display font-semibold tracking-tight text-fg",
            featured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {item.title}
        </h3>
        <p className="text-[0.975rem] leading-relaxed text-muted">{item.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-xs text-subtle">{item.year}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-fg">
            Case notes
            <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
