import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { accentDot, type Venture } from "@/data/ventures";
import { cn } from "@/lib/utils";

export function VentureCard({
  venture,
  featured = false,
}: {
  venture: Venture;
  featured?: boolean;
}) {
  return (
    <Link
      to="/ventures/$slug"
      params={{ slug: venture.slug }}
      className={cn(
        "group flex flex-col rounded-2xl bg-surface p-5 shadow-hairline transition-[box-shadow,transform] duration-200 ease-out",
        "hover:shadow-hairline-hover",
        featured && "md:col-span-2 md:p-7",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("mt-1 size-2.5 shrink-0 rounded-full", accentDot[venture.accent])} />
        <ArrowUpRight className="size-4 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
      </div>
      <p className="mt-5 font-display text-lg font-semibold tracking-tight">
        {venture.name}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{venture.oneLiner}</p>
      <p className="mt-4 text-xs tracking-wide text-subtle uppercase">
        {venture.category}
      </p>
    </Link>
  );
}
