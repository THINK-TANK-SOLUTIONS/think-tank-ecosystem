import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaybookBlock } from "@/components/playbook-block";
import { niches } from "@/data/niches";
import { dripDays } from "@/data/drip";

export const Route = createFileRoute("/finn/")({ component: FinnLanding });

const DELIVERABLES = [
  "Executive summary with local market size",
  "Named competitors, pricing gaps, demographics",
  "Three-tier pricing calibrated to local income",
  "Customer profile: groups, blocks, rooms you can walk into",
  "10X channels — each with one action to do today",
  "Names, taglines, colors, logo direction",
  "14-day launch with minutes, place, ticks, and done-when",
  "Free / freemium stack with the first three setup clicks",
  "AI playbook: prompts and a 30-minute day",
  "State-specific legal steps plus the official URL",
  "Six click-by-click implementation playbooks",
];

function FinnLanding() {
  const sample = dripDays[0];

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
        <Badge variant="outline">Foundry Finn</Badge>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          The Super Agent that writes the plan they charge five thousand for.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Three questions. Live web research for your zip. An eleven-section
          blueprint with click-by-click implementation — not slogans. Then an
          eleven-day launch sequence so the plan does not die in a tab.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/finn/app">
              Generate your plan <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link to="/plans/sample">Read the 19148 sample</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border lg:grid-cols-2">
          <div className="bg-bg px-6 py-12 sm:px-10">
            <p className="text-xs tracking-widest text-subtle uppercase">Intake</p>
            <ol className="mt-6 space-y-5">
              {[
                { n: "01", q: "What are you good at / interested in?" },
                { n: "02", q: "What’s your zip code?" },
                { n: "03", q: "What’s your startup budget?" },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-display text-accent">{s.n}</span>
                  <span className="font-display text-xl text-fg sm:text-2xl">{s.q}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-surface px-6 py-12 sm:px-10">
            <p className="text-xs tracking-widest text-subtle uppercase">What you get</p>
            <ul className="mt-6 space-y-2.5">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {sample ? (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs tracking-widest text-subtle uppercase">Sample playbook</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Day 1, written as commands.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Tick a step when it is true. Open the page. Click the thing. Say the
            sentence. Stop when the done-when line is true.
          </p>
          <div className="mt-8">
            <PlaybookBlock
              storageKey="finn-sample-day-1"
              kicker={`Day ${sample.day}`}
              title={sample.subject}
              minutes={sample.minutes}
              physical={sample.physical}
              where={sample.where}
              steps={sample.steps}
              script={sample.script}
              doneWhen={sample.doneWhen}
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link to="/launch">All 11 days</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/plans/sample">Full sample blueprint</Link>
            </Button>
          </div>
        </section>
      ) : null}

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs tracking-widest text-subtle uppercase">2026 niches</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Validated demand. Localized by Finn.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Cross-referenced from LeadHall, Google Trends, Chamber outlooks, and
            franchise growth. Finn still researches YOUR zip — this is the map, not the territory.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {([1, 2, 3] as const).map((tier) => (
              <div key={tier}>
                <p className="text-xs tracking-widest text-subtle uppercase">
                  {tier === 1 ? "Explosive" : tier === 2 ? "Strong" : "Reliable"}
                </p>
                <ul className="mt-4 space-y-2">
                  {niches
                    .filter((n) => n.tier === tier)
                    .map((n) => (
                      <li key={n.name} className="flex justify-between gap-3 text-sm">
                        <span className="text-fg">{n.name}</span>
                        <span className="shrink-0 text-subtle">{n.signal}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold">Ready when you are.</h2>
              <p className="mt-2 text-sm text-muted">
                Sign in, answer three questions, keep the plan — with the clicks included.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/finn/app">Open Foundry Finn</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
