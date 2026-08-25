import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PlanDocument } from "@/components/plan-document";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { RedirectToSignIn } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { generatePlan } from "@/lib/plans.functions";
import type { SavedPlan } from "@/lib/plan-types";
import { toast } from "sonner";

export const Route = createFileRoute("/finn/app")({ component: FinnApp });

const BUDGETS = [
  "Under $500",
  "$500–$2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000+",
];

const RESEARCH = [
  "Reading the zip code",
  "Mapping the city and county",
  "Scanning live competitors",
  "Checking local income and pricing",
  "Finding groups and rooms you can walk into",
  "Building the 10X channel model",
  "Drafting brand direction",
  "Sequencing the 14-day launch",
  "Assembling the eleven sections",
];

function FinnApp() {
  const { user, isPending } = useCurrentUserState();
  const [step, setStep] = useState(0);
  const [skill, setSkill] = useState("");
  const [zip, setZip] = useState("");
  const [budget, setBudget] = useState("");
  const [phase, setPhase] = useState<"intake" | "running" | "done">("intake");
  const [tick, setTick] = useState(0);
  const [saved, setSaved] = useState<SavedPlan | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (phase !== "running") return;
    const id = window.setInterval(() => setTick((t) => t + 1), 2200);
    return () => window.clearInterval(id);
  }, [phase]);

  if (isPending) {
    return (
      <PageShell>
        <div className="mx-auto max-w-lg px-4 py-24">
          <div className="h-8 w-48 animate-pulse rounded-md bg-elevated" />
          <div className="mt-6 h-40 animate-pulse rounded-2xl bg-surface" />
        </div>
      </PageShell>
    );
  }
  if (!user) return <RedirectToSignIn />;

  async function run() {
    setError(null);
    setPhase("running");
    setTick(0);
    try {
      const result = await generatePlan({
        data: { skill, zip, budget },
      });
      setSaved(result);
      setPhase("done");
      toast.success("Blueprint ready.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Finn could not finish the plan.";
      if (message === "Unauthorized") {
        setError("Sign in to generate a plan.");
      } else {
        setError(message);
      }
      setPhase("intake");
      toast.error(message);
    }
  }

  const progress = ((step + (phase === "running" ? 1 : 0)) / 3) * 100;

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {phase !== "done" ? (
          <>
            <p className="text-xs tracking-widest text-subtle uppercase">
              Foundry Finn
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Three questions. A local blueprint.
            </h1>
            <Progress value={phase === "running" ? 92 : progress} className="mt-6" />
          </>
        ) : null}

        {phase === "running" ? (
          <div className="mt-12 rounded-2xl bg-surface p-8 shadow-hairline">
            <Loader2 className="size-5 animate-spin text-accent" />
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight">
              {RESEARCH[tick % RESEARCH.length]}
            </p>
            <p className="mt-3 text-sm text-muted">
              Live web research for {zip}. This usually takes under a minute.
              Stay on the page.
            </p>
          </div>
        ) : null}

        {phase === "intake" ? (
          <form
            className="mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              if (step === 0 && skill.trim().length < 3) return;
              if (step === 1 && !/^\d{5}$/.test(zip.trim())) return;
              if (step === 2 && !budget) return;
              if (step < 2) setStep(step + 1);
              else void run();
            }}
          >
            {error ? (
              <p className="mb-6 rounded-lg border border-danger/40 bg-elevated px-4 py-3 text-sm text-fg">
                {error}
              </p>
            ) : null}

            {step === 0 ? (
              <div>
                <Label htmlFor="skill" className="text-base">
                  What are you good at — or interested in?
                </Label>
                <p className="mt-1 text-sm text-muted">
                  A trade, a craft, a service, a thing neighbors already ask you for.
                </p>
                <Textarea
                  id="skill"
                  className="mt-4"
                  autoFocus
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Mobile pet grooming, pressure washing, bookkeeping for trades…"
                />
              </div>
            ) : null}

            {step === 1 ? (
              <div>
                <Label htmlFor="zip" className="text-base">
                  What’s your zip code?
                </Label>
                <p className="mt-1 text-sm text-muted">
                  All research is local. Five digits. United States.
                </p>
                <Input
                  id="zip"
                  className="mt-4 max-w-40 font-display text-lg tracking-widest"
                  inputMode="numeric"
                  pattern="\d{5}"
                  maxLength={5}
                  autoFocus
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
                  placeholder="19103"
                />
              </div>
            ) : null}

            {step === 2 ? (
              <div>
                <Label className="text-base">What’s your startup budget?</Label>
                <p className="mt-1 text-sm text-muted">
                  Finn will only recommend tools and moves that fit this number.
                </p>
                <div className="mt-4 grid gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={
                        budget === b
                          ? "rounded-xl bg-accent px-4 py-3 text-left text-sm font-medium text-accent-fg"
                          : "rounded-xl bg-elevated px-4 py-3 text-left text-sm text-fg shadow-hairline hover:shadow-hairline-hover"
                      }
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                <ArrowLeft className="size-4" /> Back
              </Button>
              <Button type="submit">
                {step < 2 ? (
                  <>
                    Continue <ArrowRight className="size-4" />
                  </>
                ) : (
                  "Build the plan"
                )}
              </Button>
            </div>
          </form>
        ) : null}

        {phase === "done" && saved ? (
          <div>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs tracking-widest text-subtle uppercase">
                  Blueprint · {saved.zip}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Saved to your account. The 11-day launch starts now.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link to="/launch">Open the launch sequence</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/plans/$planId" params={{ planId: String(saved.id) }}>
                    Keep this page
                  </Link>
                </Button>
              </div>
            </div>
            <PlanDocument plan={saved.plan} storageKey={`plan-${saved.id}`} />
          </div>
        ) : null}
      </div>
    </PageShell>
  );
}
