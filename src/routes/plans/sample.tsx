import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PlanDocument } from "@/components/plan-document";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { samplePlan, SAMPLE_PLAN_META } from "@/data/sample-plan";

export const Route = createFileRoute("/plans/sample")({ component: SamplePlanPage });

function SamplePlanPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge variant="outline">Sample blueprint</Badge>
            <p className="mt-3 text-sm text-muted">
              {SAMPLE_PLAN_META.skill} · {SAMPLE_PLAN_META.zip} · {SAMPLE_PLAN_META.budget}.
              Tick the steps. This is the grain Finn writes for your zip.
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <Link to="/finn/app">Generate yours</Link>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <Link to="/launch">11-day launch</Link>
            </Button>
          </div>
        </div>
        <PlanDocument plan={samplePlan} storageKey="sample-plan" />
      </div>
    </PageShell>
  );
}
