import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckableSteps({
  storageKey,
  steps,
  className,
}: {
  storageKey: string;
  steps: string[];
  className?: string;
}) {
  const [done, setDone] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setDone(JSON.parse(raw) as Record<number, boolean>);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  function toggle(i: number) {
    setDone((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  if (steps.length === 0) return null;

  return (
    <ol className={cn("space-y-2", className)}>
      {steps.map((step, i) => {
        const on = Boolean(done[i]);
        return (
          <li key={`${i}-${step.slice(0, 24)}`}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className={cn(
                "flex min-h-11 w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                on ? "bg-elevated text-muted" : "bg-elevated/70 text-fg hover:bg-elevated",
              )}
            >
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                  on ? "bg-accent text-accent-fg" : "shadow-hairline",
                )}
              >
                {on ? (
                  <Check className="size-3" />
                ) : (
                  <span className="font-display text-[0.65rem] text-subtle">{i + 1}</span>
                )}
              </span>
              <span
                className={cn(
                  "leading-relaxed",
                  on ? "line-through decoration-subtle" : undefined,
                )}
              >
                {step}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
