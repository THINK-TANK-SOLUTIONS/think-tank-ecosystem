import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-display text-lg font-semibold">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {error.message || "An unexpected error occurred. Try reloading the page."}
      </p>
    </main>
  );
}

export function AppNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg">
      <p className="text-xs tracking-widest text-subtle uppercase">404</p>
      <h1 className="font-display text-2xl font-semibold">This page isn’t in the house.</h1>
      <p className="max-w-md text-sm text-muted">
        The ecosystem lives at the hub. Finn is still free.
      </p>
      <Link to="/" className="mt-2 text-sm text-accent hover:underline">
        Back to Think Tank
      </Link>
    </main>
  );
}
