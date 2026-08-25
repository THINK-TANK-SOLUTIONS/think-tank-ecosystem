import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Radio, Shield, PenLine } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { VentureCard } from "@/components/venture-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ventures } from "@/data/ventures";

export const Route = createFileRoute("/")({ component: Home });

const PILLARS = [
  {
    icon: MapPin,
    title: "Local first",
    body: "Dominate a zip code before competing with the internet. Research is live and localized — not a stale niche list.",
  },
  {
    icon: Radio,
    title: "Organic 10X",
    body: "Ten channels. One thirty-minute daily routine. AI drafts, you show up in person. Zero ad spend.",
  },
  {
    icon: Shield,
    title: "Freemium everything",
    body: "If a preteen can run it, everyone else can. Tools stay under $50/mo. The plan itself is free.",
  },
];

function Home() {
  const featured = ventures[0];
  const rest = ventures.slice(1);

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-wash" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28">
          <Badge variant="outline">Think Tank Solutions AI</Badge>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            A complete business plan.
            <span className="text-muted"> Localized to your zip. Free.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Everyone else charges five thousand dollars for a stale niche list and
            five training videos. Foundry Finn asks three questions and hands you
            an eleven-section blueprint — live data, your city, no gurus.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/finn/app">
                Generate your plan
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/plans/sample">Read a sample blueprint</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-subtle">
            Three questions. Eleven sections. For The People. Not The Gurus.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-bg px-6 py-10 sm:px-8">
              <p.icon className="size-5 text-accent" />
              <h2 className="mt-4 font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">The offer</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Foundry Finn
            </h2>
          </div>
          <Link
            to="/finn"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg"
          >
            Read the brief <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-2xl bg-surface p-6 shadow-hairline lg:col-span-7 lg:p-8">
            <PenLine className="size-5 text-accent" />
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight">
              From “I have an idea” to a local blueprint in one sitting.
            </p>
            <ol className="mt-6 space-y-4 text-sm">
              {[
                "What are you good at?",
                "What’s your zip code?",
                "What’s your startup budget?",
              ].map((q, i) => (
                <li key={q} className="flex gap-3">
                  <span className="font-display w-6 text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-fg">{q}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted">
              Finn returns market size, named competitors, three-tier pricing,
              ten organic channels, a 14-day launch with click-by-click steps,
              six implementation playbooks, and a legal checklist for your state.
            </p>
            <Button asChild className="mt-8">
              <Link to="/finn/app">Start the three questions</Link>
            </Button>
          </div>
          <aside className="flex flex-col justify-between rounded-2xl bg-elevated p-6 shadow-hairline lg:col-span-5">
            <div>
              <p className="text-xs tracking-widest text-subtle uppercase">
                Versus the $5k course
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li className="text-fg">Live web data — not a 2024 PDF.</li>
                <li className="text-fg">Your zip — not “worldwide TAM.”</li>
                <li className="text-fg">Organic only — no ads required.</li>
                <li className="text-fg">Unlimited runs — no upsell gate.</li>
              </ul>
            </div>
            <p className="mt-8 text-xs text-subtle">
              They reset every month. We compound. The plan is the gift. The
              eleven ventures are there when a tool would actually help.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs tracking-widest text-subtle uppercase">Ecosystem</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Eleven ventures. One house.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            After Finn, an eleven-day launch sequence. Each day a physical
            action — and a quiet introduction to one company in the house.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured ? <VentureCard venture={featured} featured /> : null}
            {rest.map((v) => (
              <VentureCard key={v.slug} venture={v} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl bg-accent px-6 py-12 text-accent-fg sm:px-12">
          <p className="text-xs tracking-widest uppercase opacity-70">
            For The People. Not The Gurus.
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            The person who shows up physically wins.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed opacity-80">
            Register the name. Walk into three businesses. Ask for the review.
            Finn will draft the rest. You still have to leave the house.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="mt-8 bg-accent-fg text-accent hover:opacity-90"
          >
            <Link to="/finn/app">Get the free plan</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
