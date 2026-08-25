import { createFileRoute, Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { GROK_PROVIDERS, authClient, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  if (!isPending && user) {
    return <Navigate to="/dashboard" />;
  }

  async function onEmail(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "up") {
        const { error } = await authClient.signUp.email({
          email,
          password,
          name: name || email.split("@")[0] || "Operator",
        });
        if (error) throw new Error(error.message ?? "Could not create the account.");
      } else {
        const { error } = await authClient.signIn.email({ email, password });
        if (error) throw new Error(error.message ?? "Could not sign in.");
      }
      toast.success(mode === "up" ? "Welcome in." : "Signed in.");
      await navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign-in failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell>
      <div className="mx-auto grid min-h-[70vh] max-w-6xl place-items-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-md rounded-2xl bg-surface p-6 shadow-hairline sm:p-8">
          <p className="text-xs tracking-widest text-subtle uppercase">Think Tank</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            {mode === "up" ? "Create an account" : "Sign in"}
          </h1>
          <p className="mt-2 text-sm text-muted">
            Save plans, run the 11-day launch, and join ventures. Finn is free.
          </p>

          {authEnabled ? (
            <div className="mt-6 grid gap-2">
              {GROK_PROVIDERS.map((p) => (
                <Button
                  key={p.providerId}
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    void signIn(p.providerId, {
                      callbackURL: "/dashboard",
                      errorCallbackURL: "/login",
                    })
                  }
                >
                  Continue with {p.label}
                </Button>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-muted">Sign-in is disabled.</p>
          )}

          <div className="my-6 flex items-center gap-3 text-xs text-subtle">
            <span className="h-px flex-1 bg-border" />
            or email
            <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={(e) => void onEmail(e)} className="space-y-3">
            {mode === "up" ? (
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </div>
            ) : null}
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === "up" ? "new-password" : "current-password"}
              />
            </div>
            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? "Working…" : mode === "up" ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="mt-5 text-center text-sm text-muted">
            {mode === "up" ? "Already here?" : "New?"}{" "}
            <button
              type="button"
              className="text-fg underline-offset-4 hover:underline"
              onClick={() => setMode(mode === "up" ? "in" : "up")}
            >
              {mode === "up" ? "Sign in" : "Create an account"}
            </button>
          </p>
          <p className="mt-4 text-center text-xs text-subtle">
            <Link to="/" className="hover:text-fg">
              Back to the ecosystem
            </Link>
          </p>
        </div>
      </div>
    </PageShell>
  );
}
