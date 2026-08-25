import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaybookBlock } from "@/components/playbook-block";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { getDrip, listPlans, listVentureSignups } from "@/lib/plans.functions";
import type { DripState } from "@/lib/plans.functions";
import type { SavedPlan } from "@/lib/plan-types";
import { getVenture } from "@/data/ventures";
import { dripDays } from "@/data/drip";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const { user, isPending } = useCurrentUserState();
  const [plans, setPlans] = useState<SavedPlan[] | null>(null);
  const [drip, setDrip] = useState<DripState | null>(null);
  const [signups, setSignups] = useState<string[]>([]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    void Promise.all([listPlans(), getDrip(), listVentureSignups()])
      .then(([p, d, s]) => {
        if (cancelled) return;
        setPlans(p);
        setDrip(d);
        setSignups(s);
      })
      .catch(() => {
        if (!cancelled) setPlans([]);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  if (isPending) {
    return (
      <PageShell>
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="h-8 w-48 animate-pulse rounded-md bg-elevated" />
        </div>
      </PageShell>
    );
  }
  if (!user) return <RedirectToSignIn />;

  const day = dripDays.find((d) => d.day === (drip?.currentDay ?? 1));

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-xs tracking-widest text-subtle uppercase">Operator desk</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {user.displayName ?? "Your shop"}
        </h1>
        <p className="mt-2 text-sm text-muted">
          Today’s playbook, the plans, and ventures you asked to hear about.
        </p>

        {drip && day ? (
          <div className="mt-10">
            <PlaybookBlock
              storageKey={`drip-day-${day.day}`}
              kicker={`Day ${drip.currentDay}`}
              title={day.subject}
              minutes={day.minutes}
              physical={day.physical}
              where={day.where}
              why={day.reminder}
              steps={day.steps}
              script={day.script}
              doneWhen={day.doneWhen}
            />
            <div className="mt-4">
              <Button asChild size="sm">
                <Link to="/launch">Open the full sequence</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-elevated p-6 shadow-hairline">
            <p className="text-sm text-muted">
              Generate a plan and the 11-day sequence starts automatically. Or read the
              sample blueprint first.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link to="/finn/app">Generate</Link>
              </Button>
              <Button asChild size="sm" variant="secondary">
                <Link to="/plans/sample">Read the sample</Link>
              </Button>
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <section className="rounded-2xl bg-surface p-6 shadow-hairline lg:col-span-7">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold">Blueprints</h2>
              <Button asChild size="sm">
                <Link to="/finn/app">New plan</Link>
              </Button>
            </div>
            <ul className="mt-5 divide-y divide-border">
              {plans === null ? (
                <li className="py-6 text-sm text-muted">Loading…</li>
              ) : plans.length === 0 ? (
                <li className="py-6 text-sm text-muted">
                  No plans yet. Three questions. That’s the whole intake.
                </li>
              ) : (
                plans.map((p) => (
                  <li key={p.id} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <Link
                        to="/plans/$planId"
                        params={{ planId: String(p.id) }}
                        className="font-medium text-fg hover:underline"
                      >
                        {p.title}
                      </Link>
                      <p className="text-xs text-subtle">
                        {p.city ? `${p.city} · ` : ""}
                        {p.zip} · {p.niche ?? p.skill}
                      </p>
                    </div>
                    <Badge variant="outline">{p.budget}</Badge>
                  </li>
                ))
              )}
            </ul>
          </section>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl bg-surface p-6 shadow-hairline">
              <p className="text-xs tracking-widest text-subtle uppercase">
                Venture lists
              </p>
              {signups.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  You haven’t joined a venture list yet.
                </p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {signups.map((slug) => {
                    const v = getVenture(slug);
                    return (
                      <li key={slug}>
                        <Link
                          to="/ventures/$slug"
                          params={{ slug }}
                          className="text-sm text-fg hover:underline"
                        >
                          {v?.name ?? slug}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
