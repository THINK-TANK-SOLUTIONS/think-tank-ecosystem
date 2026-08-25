import { Link } from "@tanstack/react-router";
import { ventures } from "@/data/ventures";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-lg font-semibold tracking-tight">Think Tank</p>
          <p className="mt-2 max-w-xs text-sm text-muted">
            For The People. Not The Gurus. Free plans, organic growth, local first.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium tracking-widest text-subtle uppercase">
            Product
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/finn" className="text-muted hover:text-fg">
                Foundry Finn
              </Link>
            </li>
            <li>
              <Link to="/finn/app" className="text-muted hover:text-fg">
                Generate a plan
              </Link>
            </li>
            <li>
              <Link to="/tools" className="text-muted hover:text-fg">
                Tool replacements
              </Link>
            </li>
            <li>
              <Link to="/plans/sample" className="text-muted hover:text-fg">
                Sample blueprint
              </Link>
            </li>
            <li>
              <Link to="/launch" className="text-muted hover:text-fg">
                11-day launch
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-5">
          <p className="text-xs font-medium tracking-widest text-subtle uppercase">
            Ventures
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {ventures.map((v) => (
              <li key={v.slug}>
                <Link
                  to="/ventures/$slug"
                  params={{ slug: v.slug }}
                  className="text-muted hover:text-fg"
                >
                  {v.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Think Tank Solutions AI. Organic only. $0 ad spend.</p>
          <p>For The People. Not The Gurus.</p>
        </div>
      </div>
    </footer>
  );
}
