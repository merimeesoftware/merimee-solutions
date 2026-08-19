import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-36 w-full rounded-lg border border-border bg-elevated px-3.5 py-3 text-[0.9375rem] text-fg",
        "placeholder:text-subtle",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
