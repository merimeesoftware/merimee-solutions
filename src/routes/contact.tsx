import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: `Start a conversation — ${SITE.name}` },
      {
        name: "description",
        content:
          "Write about a role, a partnership, or a constraint. LinkedIn and GitHub if you want the paper trail first.",
      },
    ],
  }),
});

function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div>
        <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Start a conversation.
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">
          Roles, partnerships, hard problems. Not a storefront for website packages.
          If you want the paper trail first, the public work is on GitHub and LinkedIn.
        </p>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg hover:text-primary"
            >
              LinkedIn — michael-merimee <ArrowUpRight className="size-3.5" />
            </a>
          </li>
          <li>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg hover:text-primary"
            >
              GitHub — merimeesoftware <ArrowUpRight className="size-3.5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-border bg-surface p-5 sm:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
