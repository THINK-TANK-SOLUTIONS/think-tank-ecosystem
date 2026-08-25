import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { VentureCard } from "@/components/venture-card";
import { Badge } from "@/components/ui/badge";
import { ventures } from "@/data/ventures";

export const Route = createFileRoute("/ventures/")({ component: VenturesIndex });

function VenturesIndex() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Badge variant="outline">Eleven companies</Badge>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          The house.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          One ecosystem. After Finn writes the plan, the 11-day sequence
          introduces one venture a day — never a hard sell.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((v) => (
            <VentureCard key={v.slug} venture={v} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
