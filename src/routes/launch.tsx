import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlaybookBlock } from "@/components/playbook-block";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { completeDripDay, getDrip, type DripState } from "@/lib/plans.functions";
import { dripDays, dripVenture, type DripDay } from "@/data/drip";
import { accentDot } from "@/data/ventures";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/launch")({ component: LaunchPage });

function Playbook({
  current,
  drip,
  isSequenceDay,
  busy,
  onDone,
}: {
  current: DripDay;
  drip: DripState | null;
  isSequenceDay: boolean;
  busy: boolean;
  onDone: (day: number) => void;
}) {
  const venture = dripVenture(current);
  const already = drip?.doneDays.includes(current.day) ?? false;

  return (
    <div>
      <PlaybookBlock
        storageKey={`drip-day-${current.day}`}
        kicker={`Day ${current.day}`}
        title={current.subject}
        minutes={current.minutes}
        physical={current.physical}
        where={current.where}
        why={current.body}
        steps={current.steps}
        script={current.script}
        doneWhen={current.doneWhen}
      />

      <ul className="mt-4 space-y-2 px-1">
        {current.checklist.map((c) => (
          <li key={c} className="flex gap-2 text-sm text-muted">
            <Check className="mt-0.5 size-4 shrink-0 text-accent" />
            {c}
          </li>
        ))}
      </ul>

      {venture ? (
        <Link
          to="/ventures/$slug"
          params={{ slug: venture.slug }}
          className="mt-6 flex items-start gap-3 rounded-xl bg-elevated p-4"
        >
          <span
            className={cn("mt-1 size-2.5 shrink-0 rounded-full", accentDot[venture.accent])}
          />
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Today’s venture</p>
            <p className="mt-1 font-medium text-fg">{venture.name}</p>
            <p className="mt-1 text-sm text-muted">{venture.oneLiner}</p>
          </div>
        </Link>
      ) : null}

      {drip ? (
        <Button
          className="mt-6"
          disabled={busy || !isSequenceDay || already}
          onClick={() => onDone(current.day)}
        >
          {already
            ? "Already done"
            : !isSequenceDay
              ? "Read-ahead — mark from the current day"
              : current.day === 11
                ? "Mark live"
                : "Mark day complete"}
        </Button>
      ) : (
        <Button asChild className="mt-6">
          <Link to="/finn/app">Generate a plan to track this</Link>
        </Button>
      )}
    </div>
  );
}

function LaunchPage() {
  const { user, isPending } = useCurrentUserState();
  const [drip, setDrip] = useState<DripState | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const [viewDay, setViewDay] = useState<number>(1);

  useEffect(() => {
    if (isPending) return;
    if (!user) {
      setDrip(null);
      return;
    }
    void getDrip()
      .then((d) => {
        setDrip(d);
        if (d) setViewDay(d.currentDay);
      })
      .catch(() => setDrip(null));
  }, [user, isPending]);

  const current = dripDays.find((d) => d.day === viewDay) ?? dripDays[0];
  const doneCount = drip?.doneDays.length ?? 0;
  const pct = (doneCount / 11) * 100;
  const isSequenceDay = Boolean(drip && current && current.day === drip.currentDay);

  async function markDone(day: number) {
    setBusy(true);
    try {
      const next = await completeDripDay({ data: day });
      if (next) {
        setDrip(next);
        setViewDay(next.currentDay);
      }
      toast.success(day >= 11 ? "You’re live." : `Day ${day} done.`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not update.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="text-xs tracking-widest text-subtle uppercase">11-day launch</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
          Tick the step. Then mark the day.
        </h1>
        <p className="mt-3 text-sm text-muted">
          Each day is a playbook: where to go, what to click, what to say, and
          the line that means you’re finished. Open any day to read ahead.
        </p>

        {drip ? (
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs text-subtle">
              <span>{doneCount} of 11 complete</span>
              <span className="tabular-nums">{Math.round(pct)}%</span>
            </div>
            <Progress value={pct} />
          </div>
        ) : isPending ? null : (
          <p className="mt-6 text-sm text-subtle">
            Tracking unlocks after you generate a plan. The steps are free to read now.
          </p>
        )}

        <div className="mt-10">
          {current ? (
            <Playbook
              current={current}
              drip={drip ?? null}
              isSequenceDay={isSequenceDay}
              busy={busy}
              onDone={(day) => void markDone(day)}
            />
          ) : null}
        </div>

        <ol className="mt-10 space-y-2">
          {dripDays.map((d) => {
            const done = drip?.doneDays.includes(d.day) ?? false;
            const active = d.day === viewDay;
            return (
              <li key={d.day}>
                <button
                  type="button"
                  onClick={() => setViewDay(d.day)}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-3 rounded-xl px-4 py-3 text-left",
                    active ? "bg-elevated shadow-hairline" : "hover:bg-surface",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-7 place-items-center rounded-full text-xs",
                      done
                        ? "bg-accent text-accent-fg"
                        : "bg-surface text-subtle shadow-hairline",
                    )}
                  >
                    {done ? <Check className="size-3.5" /> : d.day}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("block text-sm", done ? "text-muted" : "text-fg")}>
                      {d.subject}
                    </span>
                    <span className="block text-xs text-subtle">
                      {d.minutes} min · {d.physical ? "In person" : "Digital"}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </PageShell>
  );
}
