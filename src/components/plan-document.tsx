import type { ReactNode } from "react";
import { Clock, MapPin } from "lucide-react";
import type { BusinessPlan } from "@/lib/plan-types";
import { Badge } from "@/components/ui/badge";
import { CheckableSteps } from "@/components/checkable-steps";
import { DoneWhen } from "@/components/step-list";
import { cn } from "@/lib/utils";

const SECTIONS = [
  "01 Executive summary",
  "02 Local market",
  "03 Business model",
  "04 Target customer",
  "05 Organic growth",
  "06 Brand",
  "07 14-day launch",
  "08 Tech stack",
  "09 AI playbook",
  "10 Legal",
  "11 Next steps",
  "12 Implementation",
];

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="scroll-mt-24 border-t border-border py-10">
      <p className="text-xs tracking-widest text-subtle uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

function safeHref(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.protocol === "https:" || u.protocol === "http:") return u.href;
    return null;
  } catch {
    return null;
  }
}

export function PlanDocument({
  plan,
  storageKey = "plan",
}: {
  plan: BusinessPlan;
  storageKey?: string;
}) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="pb-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{plan.niche}</Badge>
          <Badge>
            <MapPin className="mr-1 size-3" />
            {plan.city}
            {plan.state ? `, ${plan.state}` : ""} {plan.zip}
          </Badge>
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {plan.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{plan.executiveSummary.headline}</p>
      </header>

      <nav className="mb-4 flex gap-2 overflow-x-auto pb-2 text-xs text-subtle">
        {SECTIONS.map((s) => (
          <span key={s} className="shrink-0 rounded-full bg-elevated px-3 py-1">
            {s}
          </span>
        ))}
      </nav>

      <Section kicker="01" title="Executive summary">
        <p className="text-fg">{plan.executiveSummary.opportunity}</p>
        <p>{plan.executiveSummary.localMarketSize}</p>
      </Section>

      <Section kicker="02" title="Local market validation">
        <p>{plan.marketValidation.demographics}</p>
        <p className="text-fg">{plan.marketValidation.pricingGaps}</p>
        <ul className="mt-4 grid gap-3">
          {plan.marketValidation.competitors.map((c) => (
            <li key={c.name} className="rounded-xl bg-surface p-4 shadow-hairline">
              <p className="font-medium text-fg">{c.name}</p>
              <p className="mt-1">{c.weakness}</p>
              <p className="mt-2 text-xs tracking-wide text-subtle uppercase">{c.pricing}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="03" title="Business model & revenue">
        <p>{plan.businessModel.rationale}</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {plan.businessModel.tiers.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                "rounded-xl p-4 shadow-hairline",
                i === 1 ? "bg-accent text-accent-fg" : "bg-surface text-fg",
              )}
            >
              <p className="text-xs tracking-widest uppercase opacity-70">{t.name}</p>
              <p className="mt-2 font-display text-2xl font-semibold">{t.price}</p>
              <p className={cn("mt-2 text-sm", i === 1 ? "opacity-80" : "text-muted")}>
                {t.includes}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="04" title="Target customer">
        <p className="text-fg">{plan.targetCustomer.persona}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Communities</p>
            <ul className="mt-2 space-y-1">
              {plan.targetCustomer.communities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Physical places</p>
            <ul className="mt-2 space-y-1">
              {plan.targetCustomer.locations.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section kicker="05" title="Organic growth — 10X channels">
        <p>{plan.growthStrategy.overview}</p>
        <ol className="mt-2 space-y-4">
          {plan.growthStrategy.channels.map((ch, i) => (
            <li key={ch.name} className="flex gap-3">
              <span className="font-display w-6 shrink-0 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="font-medium text-fg">{ch.name}</p>
                <p>{ch.tactic}</p>
                <p className="text-xs text-subtle">{ch.cadence}</p>
                {ch.firstAction ? (
                  <p className="mt-2 rounded-lg bg-elevated px-3 py-2 text-sm text-fg">
                    <span className="text-subtle">Do today. </span>
                    {ch.firstAction}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="06" title="Brand direction">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Names</p>
            <ul className="mt-2 space-y-1 text-fg">
              {plan.brand.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest text-subtle uppercase">Taglines</p>
            <ul className="mt-2 space-y-1">
              {plan.brand.taglines.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
        <p>{plan.brand.logoDirection}</p>
        <div className="flex flex-wrap gap-3">
          {plan.brand.colors.map((c) => (
            <div key={c.hex} className="flex items-center gap-2">
              <span
                className="size-8 rounded-md shadow-hairline"
                style={{ backgroundColor: c.hex }}
                title={c.hex}
              />
              <div>
                <p className="text-xs text-fg">{c.name}</p>
                <p className="font-mono text-xs text-subtle">{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="07" title="14-day launch">
        <ol className="space-y-3">
          {plan.launchTimeline.map((d) => (
            <li key={d.day} className="rounded-xl bg-surface p-4 shadow-hairline">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xs text-subtle">Day {d.day}</span>
                {d.minutes ? (
                  <span className="inline-flex items-center gap-1 text-xs text-subtle">
                    <Clock className="size-3" />
                    {d.minutes} min
                  </span>
                ) : null}
                {d.physical ? (
                  <Badge variant="outline">In person</Badge>
                ) : (
                  <Badge>Digital</Badge>
                )}
              </div>
              <p className="mt-2 font-medium text-fg">{d.action}</p>
              {d.where ? <p className="mt-1 text-xs text-subtle">{d.where}</p> : null}
              <CheckableSteps
                storageKey={`${storageKey}-launch-${d.day}`}
                steps={d.steps}
                className="mt-3"
              />
              <div className="mt-3">
                <DoneWhen>{d.doneWhen}</DoneWhen>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section kicker="08" title="Tech stack — free / freemium">
        <ul className="space-y-3">
          {plan.techStack.map((t) => (
            <li key={t.tool} className="rounded-xl bg-surface p-4 shadow-hairline">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium text-fg">{t.tool}</p>
                <p className="text-xs text-subtle">{t.cost}</p>
              </div>
              <p className="mt-1">{t.purpose}</p>
              {t.steps.length ? (
                <CheckableSteps
                  storageKey={`${storageKey}-tech-${t.tool}`}
                  steps={t.steps}
                  className="mt-3"
                />
              ) : t.setup ? (
                <p className="mt-2 text-sm text-fg">
                  <span className="text-subtle">First setup. </span>
                  {t.setup}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="09" title="AI automation playbook">
        <p className="text-fg">{plan.aiPlaybook.dailyRoutine}</p>
        <ul className="space-y-3">
          {plan.aiPlaybook.prompts.map((p) => (
            <li key={p.title} className="rounded-xl bg-elevated p-4">
              <p className="text-xs tracking-widest text-subtle uppercase">{p.title}</p>
              <pre className="mt-2 font-sans text-sm whitespace-pre-wrap text-fg">
                {p.prompt}
              </pre>
            </li>
          ))}
        </ul>
      </Section>

      <Section kicker="10" title={`Legal & compliance — ${plan.legal.state || "your state"}`}>
        <ul className="space-y-4">
          {plan.legal.items.map((i) => {
            const href = i.url ? safeHref(i.url) : null;
            return (
              <li key={i.item} className="rounded-xl bg-surface p-4 shadow-hairline">
                <p className="font-medium text-fg">{i.item}</p>
                <p className="mt-1">{i.notes}</p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-sm text-fg underline-offset-4 hover:underline"
                  >
                    Open the official page
                  </a>
                ) : null}
                <CheckableSteps
                  storageKey={`${storageKey}-legal-${i.item}`}
                  steps={i.steps}
                  className="mt-3"
                />
              </li>
            );
          })}
        </ul>
      </Section>

      <Section kicker="11" title="Next steps">
        <ul className="space-y-3">
          {plan.nextSteps.map((s) => (
            <li key={s.task} className="rounded-xl bg-surface p-4 shadow-hairline">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="font-medium text-fg">{s.task}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-subtle">{s.due}</span>
                  {s.physical ? <Badge variant="outline">In person</Badge> : null}
                </div>
              </div>
              <CheckableSteps
                storageKey={`${storageKey}-next-${s.task}`}
                steps={s.steps}
                className="mt-3"
              />
              <div className="mt-3">
                <DoneWhen>{s.doneWhen}</DoneWhen>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {plan.implementation.length ? (
        <Section kicker="12" title="Implementation playbooks">
          <p>
            Click-by-click. Tick a step when it is true. Say the script out loud. Stop when
            the done-when line is true.
          </p>
          <ol className="space-y-4">
            {plan.implementation.map((book, i) => (
              <li key={book.title} className="rounded-2xl bg-surface p-5 shadow-hairline sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {book.phase ? (
                    <span className="text-xs tracking-widest text-subtle uppercase">
                      {book.phase}
                    </span>
                  ) : null}
                  {book.minutes ? (
                    <span className="inline-flex items-center gap-1 text-xs text-subtle">
                      <Clock className="size-3" />
                      {book.minutes} min
                    </span>
                  ) : null}
                  {book.physical ? <Badge variant="outline">In person</Badge> : <Badge>Digital</Badge>}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-fg">{book.title}</h3>
                {book.why ? <p className="mt-2">{book.why}</p> : null}
                <CheckableSteps
                  storageKey={`${storageKey}-impl-${i}`}
                  steps={book.steps}
                  className="mt-4"
                />
                {book.script ? (
                  <blockquote className="mt-4 rounded-lg bg-elevated px-4 py-3 text-sm text-fg">
                    {book.script}
                  </blockquote>
                ) : null}
                {book.tools.length ? (
                  <p className="mt-3 text-xs text-subtle">Tools: {book.tools.join(" · ")}</p>
                ) : null}
                <div className="mt-3">
                  <DoneWhen>{book.doneWhen}</DoneWhen>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}
    </article>
  );
}
