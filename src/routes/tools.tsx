import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment, useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckableSteps } from "@/components/checkable-steps";
import { toolSwaps } from "@/data/tools";

export const Route = createFileRoute("/tools")({ component: ToolsPage });

function SwapSteps({ incumbent, steps }: { incumbent: string; steps: string[] }) {
  return (
    <details className="mt-3">
      <summary className="flex min-h-11 cursor-pointer list-none items-center text-sm text-fg underline-offset-4 hover:underline">
        Leave in {steps.length} steps
      </summary>
      <CheckableSteps storageKey={`swap-${incumbent}`} steps={steps} className="mt-3" />
    </details>
  );
}

function ToolsPage() {
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return toolSwaps;
    return toolSwaps.filter((t) =>
      [t.incumbent, t.category, t.replacement, t.problem].some((s) =>
        s.toLowerCase().includes(needle),
      ),
    );
  }, [q]);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Badge variant="outline">25 swaps</Badge>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Stop renting your stack.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          The guru stack is a pile of $97/mo tools. Here is what we run instead —
          and the clicks to leave. Mapped to a Think Tank venture you can join.
        </p>
        <Input
          className="mt-8 max-w-md"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search Kajabi, CRM, ads…"
          aria-label="Search tools"
        />

        <div className="mt-10 hidden overflow-x-auto md:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs tracking-widest text-subtle uppercase">
                <th className="py-3 pr-4 font-medium">They sell</th>
                <th className="py-3 pr-4 font-medium">The catch</th>
                <th className="py-3 pr-4 font-medium">Think Tank</th>
                <th className="py-3 font-medium">Money</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((t) => (
                <Fragment key={t.incumbent}>
                  <tr className="border-b border-border/40">
                    <td className="pt-4 pr-4 align-top">
                      <p className="font-medium text-fg">{t.incumbent}</p>
                      <p className="text-xs text-subtle">{t.category}</p>
                    </td>
                    <td className="pt-4 pr-4 align-top text-muted">{t.problem}</td>
                    <td className="pt-4 pr-4 align-top">
                      <Link
                        to="/ventures/$slug"
                        params={{ slug: t.ventureSlug }}
                        className="text-fg underline-offset-4 hover:underline"
                      >
                        {t.replacement}
                      </Link>
                    </td>
                    <td className="pt-4 align-top text-muted">{t.priceShift}</td>
                  </tr>
                  <tr className="border-b border-border/80">
                    <td colSpan={4} className="pb-5">
                      <SwapSteps incumbent={t.incumbent} steps={t.leaveSteps} />
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 grid gap-3 md:hidden">
          {rows.map((t) => (
            <li key={t.incumbent} className="rounded-2xl bg-surface p-4 shadow-hairline">
              <p className="text-xs text-subtle">{t.category}</p>
              <p className="mt-1 font-medium text-fg">{t.incumbent}</p>
              <p className="mt-2 text-sm text-muted">{t.problem}</p>
              <Link
                to="/ventures/$slug"
                params={{ slug: t.ventureSlug }}
                className="mt-3 inline-block text-sm text-fg underline-offset-4 hover:underline"
              >
                {t.replacement}
              </Link>
              <p className="mt-2 text-xs text-subtle">{t.priceShift}</p>
              <SwapSteps incumbent={t.incumbent} steps={t.leaveSteps} />
            </li>
          ))}
        </ul>

        {rows.length === 0 ? (
          <p className="py-10 text-sm text-muted">Nothing matches that search.</p>
        ) : null}
      </div>
    </PageShell>
  );
}
