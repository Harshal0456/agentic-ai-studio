import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { AuroraGraphic } from "@/components/site/AuroraGraphic";
import { ArrowRight, ShieldCheck, Lock, RefreshCw, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zetus AI — Your business. Powered by agents." },
      {
        name: "description",
        content:
          "Zetus AI deploys intelligent AI agents that perceive your operations, decide and act on your behalf — 24 hours a day.",
      },
      { property: "og:title", content: "Zetus AI — Your business. Powered by agents." },
      {
        property: "og:description",
        content:
          "Agentic AI for Indian businesses. Reliable, always on, engineered to last.",
      },
    ],
  }),
  component: Home,
});

const problems = [
  "Reports compiled manually every morning",
  "Problems discovered after they become crises",
  "Decisions made on yesterday's data",
  "Follow-ups missed — leads going cold",
  "Manual work stopping you from scaling",
];

const cards = [
  {
    icon: ShieldCheck,
    title: "Always Reliable",
    body:
      "Every output verified before delivery. Industrial-grade accuracy. Every time.",
  },
  {
    icon: Lock,
    title: "Your Data — Your Control",
    body:
      "Agents run on your own private server. Data stays in India. Always.",
  },
  {
    icon: RefreshCw,
    title: "Self-Healing",
    body:
      "Agents detect and fix issues automatically — before you even notice something went wrong.",
  },
  {
    icon: Zap,
    title: "Zero Disruption",
    body:
      "Works around your existing operations. No migration. No retraining. No downtime.",
  },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-24 pt-20 md:grid-cols-2 md:pt-28">
          <div className="animate-fade-up">
            <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Your business.
              <br />
              <span className="text-subtle">Powered by agents.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-subtle md:text-lg">
              Zetus AI deploys intelligent AI agents that perceive your
              operations, make decisions, and act on your behalf — 24 hours a
              day.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover"
              >
                Book a Free Discovery Call <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="relative mx-auto h-80 w-80 animate-fade-in md:h-[520px] md:w-[520px]">
            <AuroraGraphic />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Sound familiar?
          </h2>
          <ul className="mt-10 space-y-4">
            {problems.map((p) => (
              <li
                key={p}
                className="flex items-center gap-4 rounded-lg border border-border bg-card/40 px-5 py-4 text-base text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xl font-semibold text-primary md:text-2xl">
            This is what Zetus AI eliminates.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            How we work
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "Understand", d: "We map your operations and identify every manual task costing you time." },
              { n: "02", t: "Deploy", d: "We build intelligent AI agents on your own private server — secured and monitored." },
              { n: "03", t: "Evolve", d: "Your agents improve continuously — your business runs even when you don't." },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="text-sm font-mono text-primary">{s.n}</div>
                <div className="mt-3 text-lg font-semibold text-foreground">
                  {s.t}
                </div>
                <p className="mt-2 text-sm text-subtle">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-2xl space-y-4 text-base text-subtle">
            <p>You wake up informed.</p>
            <p>Your team focuses on what matters.</p>
            <p>Your business runs — even when you don't.</p>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Why Zetus AI
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {cards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/60"
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

      {/* Testimonial */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <div className="relative overflow-hidden rounded-2xl bg-card p-10 md:p-14">
            <div className="absolute -left-2 -top-6 select-none font-serif text-[10rem] leading-none text-primary/30">
              “
            </div>
            <blockquote className="relative text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              Our morning operations review used to take 2 hours. Now the report
              arrives on my phone automatically before I leave home. My team
              focuses on actual work instead of compiling data.
            </blockquote>
            <div className="relative mt-8 text-sm text-subtle">
              — Business owner, Pune manufacturing company
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-hero">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Ready to see what's possible?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-subtle md:text-lg">
            Every business is different. Your automation should be too.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
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
