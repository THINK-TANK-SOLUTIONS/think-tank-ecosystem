import { Clock, Footprints, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CheckableSteps } from "@/components/checkable-steps";
import { DoneWhen } from "@/components/step-list";
import { cn } from "@/lib/utils";

export function PlaybookBlock({
  storageKey,
  kicker,
  title,
  minutes,
  physical,
  where,
  why,
  steps,
  script,
  doneWhen,
  className,
}: {
  storageKey: string;
  kicker?: string;
  title: string;
  minutes?: number;
  physical?: boolean;
  where?: string;
  why?: string;
  steps: string[];
  script?: string;
  doneWhen?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-2xl bg-surface p-6 shadow-hairline sm:p-8", className)}>
      <div className="flex flex-wrap items-center gap-2">
        {kicker ? <Badge variant="accent">{kicker}</Badge> : null}
        {minutes ? (
          <span className="inline-flex items-center gap-1 text-xs text-subtle">
            <Clock className="size-3" />
            {minutes} min
          </span>
        ) : null}
        {physical === true ? (
          <Badge variant="outline">
            <Footprints className="mr-1 size-3" /> In person
          </Badge>
        ) : physical === false ? (
          <Badge variant="outline">
            <Monitor className="mr-1 size-3" /> Digital
          </Badge>
        ) : null}
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{title}</h3>
      {where ? <p className="mt-2 text-xs text-subtle">{where}</p> : null}
      {why ? <p className="mt-3 text-sm leading-relaxed text-muted">{why}</p> : null}

      <p className="mt-8 text-xs tracking-widest text-subtle uppercase">Implementation</p>
      <CheckableSteps storageKey={storageKey} steps={steps} className="mt-3" />

      {script ? (
        <blockquote className="mt-6 rounded-lg bg-elevated px-4 py-3 text-sm text-fg">
          <p className="text-xs tracking-widest text-subtle uppercase">Say this</p>
          <p className="mt-2">{script}</p>
        </blockquote>
      ) : null}

      {doneWhen ? (
        <div className="mt-5">
          <DoneWhen>{doneWhen}</DoneWhen>
        </div>
      ) : null}
    </div>
  );
}
