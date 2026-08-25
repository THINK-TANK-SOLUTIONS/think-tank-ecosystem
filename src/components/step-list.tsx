import { cn } from "@/lib/utils";

export function StepList({
  steps,
  className,
}: {
  steps: string[];
  className?: string;
}) {
  if (!steps.length) return null;
  return (
    <ol className={cn("space-y-2.5", className)}>
      {steps.map((step, i) => (
        <li key={`${i}-${step.slice(0, 24)}`} className="flex gap-3">
          <span className="font-display mt-0.5 w-5 shrink-0 text-accent tabular-nums">
            {i + 1}
          </span>
          <span className="text-sm leading-relaxed text-fg">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function DoneWhen({ children }: { children: string }) {
  if (!children) return null;
  return (
    <p className="text-sm text-muted">
      <span className="font-medium text-fg">Done when </span>
      {children}
    </p>
  );
}
