import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Ecosystem" },
  { to: "/finn", label: "Finn" },
  { to: "/launch", label: "Launch" },
  { to: "/tools", label: "Tools" },
  { to: "/ventures", label: "Ventures" },
] as const;

function Mark() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-sm bg-fg">
        <span className="font-display text-xs font-semibold tracking-tight text-bg">
          TT
        </span>
      </span>
      <span className="font-display text-sm font-semibold tracking-tight">
        Think Tank
      </span>
    </span>
  );
}

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="size-11 shrink-0 animate-pulse rounded-full bg-elevated" />;
  }
  if (!user) {
    return (
      <Button asChild variant="secondary" size="sm">
        <Link to="/login">Sign in</Link>
      </Button>
    );
  }
  const label = user.displayName ?? user.primaryEmail ?? "Account";
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/dashboard"
        className="hidden items-center gap-2 rounded-full py-1 pr-2 pl-1 text-sm text-muted transition-colors hover:text-fg sm:flex"
      >
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt=""
            className="size-8 rounded-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
          />
        ) : (
          <span className="grid size-8 place-items-center rounded-full bg-elevated text-xs font-medium">
            {label.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="max-w-28 truncate">{label}</span>
      </Link>
      <button
        type="button"
        onClick={() => void signOut("/")}
        className="text-xs text-subtle underline-offset-4 hover:text-fg hover:underline"
      >
        Sign out
      </button>
    </div>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Mark />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const base = item.to.replace(/\/$/, "") || "/";
            const active =
              base === "/"
                ? pathname === "/"
                : pathname === base ||
                  pathname === `${base}/` ||
                  pathname.startsWith(`${base}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button asChild size="sm">
              <Link to="/finn/app">Get the plan</Link>
            </Button>
          </div>
          <AuthSlot />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-fg"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-sm text-muted"
            >
              Dashboard
            </Link>
            <Link
              to="/finn/app"
              onClick={() => setOpen(false)}
              className="rounded-md bg-accent px-3 py-3 text-center text-sm font-medium text-accent-fg"
            >
              Get the plan
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
