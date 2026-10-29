import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaybookBlock } from "@/components/playbook-block";
import { accentClass, getVenture, legacyVentureSlugs, ventures } from "@/data/ventures";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { listVentureSignups, toggleVentureSignup } from "@/lib/plans.functions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ventures/$slug")({
  beforeLoad: ({ params }) => {
    const renamed = legacyVentureSlugs[params.slug];
    if (renamed) {
      throw redirect({ to: "/ventures/$slug", params: { slug: renamed }, statusCode: 301 });
    }
  },
  component: VenturePage,
});

function VenturePage() {
  const { slug } = Route.useParams();
  const venture = getVenture(slug);
  const { user, isPending } = useCurrentUserState();
  const [joined, setJoined] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!user) {
      setJoined(false);
      return;
    }
    let cancelled = false;
    void listVentureSignups()
      .then((slugs) => {
        if (!cancelled) setJoined(slugs.includes(slug));
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [user, slug]);

  if (!venture) throw notFound();

  async function onJoin() {
    if (!user) {
      toast.message("Sign in to join the list.");
      return;
    }
    setBusy(true);
    try {
      const res = await toggleVentureSignup({ data: slug });
      setJoined(res.joined);
      toast.success(res.joined ? "You’re on the list." : "Removed from the list.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Could not update.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" /> Back to ecosystem
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span
              className={cn(
                "inline-flex rounded-full px-3 py-1 text-xs font-medium",
                accentClass[venture.accent],
              )}
            >
              {venture.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {venture.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{venture.oneLiner}</p>
            <p className="mt-6 text-sm leading-relaxed text-fg">{venture.manifesto}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button onClick={() => void onJoin()} disabled={busy || isPending}>
                {joined ? venture.cta.joinedLabel : venture.cta.label}
              </Button>
              <Button asChild variant="secondary">
                <Link to="/finn/app">Start with Finn instead</Link>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted">{venture.cta.note}</p>
            <p className="mt-3 text-xs text-subtle">{venture.audience}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl bg-surface p-6 shadow-hairline">
              <p className="text-xs tracking-widest text-subtle uppercase">
                {venture.pricing.some((p) => p.price) ? "Pricing" : "The offer"}
              </p>
              <ul className="mt-4 space-y-4">
                {venture.pricing.map((p) => (
                  <li key={p.name} className="flex items-baseline justify-between gap-4">
                    <div>
                      <p className="text-sm text-fg">{p.name}</p>
                      <p className="text-xs text-muted">{p.note}</p>
                    </div>
                    {p.price ? (
                      <p className="font-display text-lg font-semibold">{p.price}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-subtle">{venture.revenueModel}</p>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <p className="text-xs tracking-widest text-subtle uppercase">This week</p>
          <h2 className="mt-2 font-display text-2xl font-semibold">
            Do these steps even before we open.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            The list is a waitlist. The work is not. Tick the steps. Join when you want the tool.
          </p>
          <div className="mt-8">
            <PlaybookBlock
              storageKey={`venture-${venture.slug}-week`}
              kicker="First week"
              title={venture.shortName}
              minutes={venture.firstWeek.minutes}
              physical={venture.firstWeek.physical}
              where={venture.firstWeek.where}
              steps={venture.firstWeek.steps}
              script={venture.firstWeek.script}
              doneWhen={venture.firstWeek.doneWhen}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold">How it works</h2>
            <ol className="mt-6 space-y-5">
              {venture.howItWorks.map((s, i) => (
                <li key={s.step} className="flex gap-4">
                  <span className="font-display text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-medium text-fg">{s.step}</p>
                    <p className="mt-1 text-sm text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">What you get</h2>
            <ul className="mt-6 space-y-4">
              {venture.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-fg">{f.title}</p>
                    <p className="mt-1 text-sm text-muted">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-xs tracking-widest text-subtle uppercase">Also in the house</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {ventures
              .filter((v) => v.slug !== venture.slug)
              .map((v) => (
                <Link key={v.slug} to="/ventures/$slug" params={{ slug: v.slug }}>
                  <Badge variant="outline">{v.shortName}</Badge>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
