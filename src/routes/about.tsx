import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Compass, CheckCircle2, Lock, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About us — Zetus AI" },
      {
        name: "description",
        content:
          "Built on engineering. Driven by results. Why Zetus AI exists and how we partner with Indian businesses.",
      },
      { property: "og:title", content: "About us — Zetus AI" },
      {
        property: "og:description",
        content: "Engineer first. Verified always. Long term partners.",
      },
    ],
  }),
  component: About,
});

const approach = [
  {
    icon: Compass,
    title: "Engineer first",
    body: "We plan before we build. Every agent is designed with precision.",
  },
  {
    icon: CheckCircle2,
    title: "Verified always",
    body: "Every output is checked against source data before it reaches you.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    body:
      "We only read what we need. Your original files are never modified. You can revoke access any time.",
  },
  {
    icon: Heart,
    title: "Long term partner",
    body: "We measure our success by yours. Monthly reviews. Always improving.",
  },
];

function About() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-20 md:pt-28">
          <h1 className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Built on engineering.
            <br />
            <span className="text-primary">Driven by results.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-subtle md:text-lg">
            We deploy secure, agentic AI automations designed to eliminate
            operational friction and scale your enterprise efficiency.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Zetus
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built for Scale. Engineered for Trust.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-subtle md:text-lg">
            <p>
              Most AI solutions are "black boxes" that pose a risk to your
              data. Zetus AI provides dedicated, hardened infrastructure for
              every client, ensuring your business intelligence remains yours
              alone.
            </p>
          </div>
          <div className="mt-10 space-y-5">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Zero-Retention Privacy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                Your customer data is processed, not stored. We implement strict
                72-hour data pruning to stay in compliance with data privacy
                regulations.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Self-Healing Architecture
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                Our systems monitor themselves 24/7. If a service lags or a
                connection drops, the infrastructure repairs itself before you
                even notice.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                Bespoke Intelligence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                We don't use generic templates. We build custom logic flows
                tailored to the specific unit economics of your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Our approach
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {approach.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/60"
              >
                <Icon className="text-primary" size={22} />
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-hero">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <p className="text-xl leading-relaxed text-foreground md:text-2xl">
            We only take on clients we can genuinely help. If agentic AI is not
            right for your business —{" "}
            <span className="text-primary">we will tell you honestly.</span>
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover"
            >
              Book a Free Discovery Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
