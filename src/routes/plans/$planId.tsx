import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { PlanDocument } from "@/components/plan-document";
import { Button } from "@/components/ui/button";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getPlan } from "@/lib/plans.functions";
import type { SavedPlan } from "@/lib/plan-types";

export const Route = createFileRoute("/plans/$planId")({ component: PlanPage });

function PlanPage() {
  const { planId } = Route.useParams();
  const id = Number(planId);
  const { user, isPending } = useCurrentUserState();
  const [plan, setPlan] = useState<SavedPlan | null | undefined>(undefined);

  useEffect(() => {
    if (!user || !Number.isFinite(id)) return;
    void getPlan({ data: id })
      .then(setPlan)
      .catch(() => setPlan(null));
  }, [user, id]);

  if (isPending || plan === undefined) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <div className="h-10 w-2/3 animate-pulse rounded-md bg-elevated" />
          <div className="mt-8 h-64 animate-pulse rounded-2xl bg-surface" />
        </div>
      </PageShell>
    );
  }
  if (!user) return <RedirectToSignIn />;
  if (!plan) throw notFound();

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/dashboard">Back to desk</Link>
          </Button>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <Link to="/launch">11-day launch</Link>
            </Button>
            <Button asChild size="sm" variant="secondary">
              <Link to="/finn/app">Run Finn again</Link>
            </Button>
          </div>
        </div>
        <PlanDocument plan={plan.plan} storageKey={`plan-${plan.id}`} />
      </div>
    </PageShell>
  );
}
