import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight,
  Shield,
  Server,
  Rocket,
  Activity,
  KeyRound,
  Brain,
} from "lucide-react";

export const Route = createFileRoute("/why-choose-zetus-ai")({
  head: () => ({
    meta: [
      { title: "Why Choose Zetus AI — Enterprise-Grade AI Infrastructure" },
      {
        name: "description",
        content:
          "Dedicated, secured, self-healing agentic AI infrastructure built for businesses. Zero attack surface, per-client isolation, and 24hr deployment.",
      },
      { property: "og:title", content: "Why Choose Zetus AI" },
      {
        property: "og:description",
        content:
          "Enterprise-grade agentic AI infrastructure — secured, monitored, and self-healing.",
      },
    ],
  }),
  component: WhyChooseZetusAI,
});

const features = [
  {
    icon: Shield,
    tag: "Security",
    title: "Zero Attack Surface",
    items: [
      "All traffic via secure Tunnels — zero open ports",
      "SSH hardened on non-standard port, cryptographic keys only",
      "Security Firewall — block-all by default",
      "Brute-force protection",
      "2FA on every client instance",
    ],
  },
  {
    icon: Server,
    tag: "Isolation",
    title: "Dedicated Per-Client VPS",
    items: [
      "Every client gets their own server — never shared",
      "Docker isolation per client environment",
      "Unique encryption key per client",
      "Zero data retention — your data stays yours",
      "Data security compliant architecture",
    ],
  },
  {
    icon: Rocket,
    tag: "Deployment",
    title: "15-Agent Auto-Onboarding",
    items: [
      "Client server ready in 24hrs",
      "Fully automated — zero human touch",
      "Git-Sync fleet management across all clients",
      "One push updates all clients simultaneously",
      "Coolify for deployment management",
    ],
  },
  {
    icon: Activity,
    tag: "Reliability",
    title: "Self-Healing Infrastructure",
    items: [
      "24/7 monitoring, 60-second fault detection",
      "Self-healing watchdog systems",
      "Daily encrypted backups to Google Drive",
      "30-day backup retention",
      "Instant alerts on failure",
    ],
  },
  {
    icon: KeyRound,
    tag: "Secrets",
    title: "Vault-Based Credential Management",
    items: [
      "All API keys stored securely in digital vaults",
      "Per-client secret environment — never mixed",
      "Secrets injected at runtime — never hardcoded",
      "Full audit trail on every access",
    ],
  },
  {
    icon: Brain,
    tag: "Intelligence",
    title: "Agentic AI Layer",
    items: [
      "Anti-hallucination protocols in every automation",
      "Intelligent Model routing",
      "One agent one job architecture",
      "Verified output before passing to next agent",
      "Client data — read only, never retained",
    ],
  },
];

const stats = [
  { number: "24hrs", label: "to deploy client server" },
  { number: "15", label: "Agents in onboarding pipeline" },
  { number: "0", label: "Open ports exposed" },
  { number: "1000+", label: "Client scale designed for" },
];

const comparisons = [
  {
    title: "vs Generic Automation Tools",
    body: "Zapier and Make are shared platforms. We deploy dedicated infrastructure — your client's data never touches another company's server.",
  },
  {
    title: "vs Freelance Developers",
    body: "Freelancers build and leave. We deploy with monitoring, backups, self-healing, and ongoing support — not just a workflow.",
  },
  {
    title: "vs Enterprise AI Vendors",
    body: "Enterprise pricing for SMB problems. We deliver the same security and reliability at a fraction of the cost.",
  },
  {
    title: "vs In-House Automation",
    body: "Building in-house takes months and a technical team. We deploy in 24hrs. You start saving from day one.",
  },
];

function WhyChooseZetusAI() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-20 md:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Zetus AI
          </p>
          <h1 className="mt-4 animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Enterprise-grade AI infrastructure
            <br />
            built for{" "}
            <span className="text-primary italic">businesses.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-subtle md:text-lg">
            We don't build generic automations. We deploy fully autonomous
            business systems — secured, monitored, and self-healing — so your
            operations run without human intervention.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Core Infrastructure
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Everything you need, engineered in.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {features.map(({ icon: Icon, tag, title, items }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/60"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-primary" size={22} />
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-subtle"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            By the Numbers
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card p-7 text-center"
              >
                <div className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {s.number}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-subtle">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How We Compare
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Built differently. On purpose.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {comparisons.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border bg-card p-7"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-subtle">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-hero">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ready to deploy your own AI infrastructure?
          </h2>
          <p className="mt-4 text-base text-subtle md:text-lg">
            Book a free discovery call. We will tell you honestly if agentic AI
            is right for your business.
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
