import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-md place-items-center px-4 py-16">
      <div className="w-full space-y-5">
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Inbox
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-muted">
          This is the private inbox for conversations from the contact form. The rest of
          the site is public.
        </p>
        {authEnabled ? (
          <div className="space-y-3">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/inquiries" })}
              >
                Continue with {p.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
        <Link to="/" className="block text-sm text-muted hover:text-fg">
          Back to the site
        </Link>
      </div>
    </section>
  );
}
