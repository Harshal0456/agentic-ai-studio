import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Zetus AI" },
      {
        name: "description",
        content:
          "Terms of Service for Zetus AI (DSH Innovations Private Limited). Read our service agreement terms.",
      },
      { property: "og:title", content: "Terms of Service — Zetus AI" },
      {
        property: "og:description",
        content:
          "Terms of Service for Zetus AI (DSH Innovations Private Limited).",
      },
    ],
  }),
  component: TermsOfService,
});

const sections = [
  {
    num: "1",
    title: "Agreement",
    content: [
      "By engaging Zetus AI services provided by DSH Innovations Private Limited you agree to these terms. These terms govern all service agreements between DSH Innovations Private Limited and its clients.",
    ],
  },
  {
    num: "2",
    title: "Services",
    content: [
      "Zetus AI provides agentic AI automation services including but not limited to:",
      "Custom automation workflow development.",
      "AI agent deployment and configuration.",
      "Server provisioning and management.",
      "Ongoing monitoring and maintenance.",
      "Specific deliverables are defined in individual service agreements.",
    ],
  },
  {
    num: "3",
    title: "Payment Terms",
    content: [
      "50 percent of setup fee is due before work commences.",
      "Remaining 50 percent is due on delivery.",
      "Monthly retainer is due on the 1st of each month.",
      "Payments not received within 14 days of due date may result in service suspension.",
      "All fees are exclusive of GST at 18 percent.",
      "SAC code 998314 applies to all services.",
    ],
  },
  {
    num: "4",
    title: "Client Responsibilities",
    content: [
      "Client must provide access to required systems and data sources.",
      "Client must maintain payment for their own infrastructure including VPS hosting and API subscriptions.",
      "Client must designate a point of contact for project communication.",
      "Client is responsible for reviewing and approving all automation workflows before going live.",
    ],
  },
  {
    num: "5",
    title: "Intellectual Property",
    content: [
      "All custom automation workflows developed for the client are owned by the client upon full payment.",
      "Zetus AI retains rights to its proprietary deployment infrastructure and methodologies.",
      "Standard workflow templates remain the property of DSH Innovations Private Limited.",
    ],
  },
  {
    num: "6",
    title: "Data and Privacy",
    content: [
      "Client data is processed in accordance with our Privacy Policy.",
      "Client data is stored exclusively on client owned infrastructure in India.",
      "Zetus AI operates on a zero retention policy for client operational data.",
    ],
  },
  {
    num: "7",
    title: "Uptime and Support",
    content: [
      "Zetus AI provides automated monitoring and self healing infrastructure for all deployed systems.",
      "We target 99.9 percent uptime for all client deployments.",
      "Support is available via WhatsApp and email at hello@zetusai.com.",
      "Response time for critical issues: 4 hours.",
    ],
  },
  {
    num: "8",
    title: "Limitation of Liability",
    content: [
      "Zetus AI is not liable for losses arising from third party service outages including hosting providers API services or internet service providers.",
      "Our total liability is limited to fees paid in the preceding month.",
    ],
  },
  {
    num: "9",
    title: "Termination",
    content: [
      "Either party may terminate with 30 days written notice.",
      "Client data will be returned or deleted within 14 days of termination.",
      "Outstanding payments remain due upon termination.",
    ],
  },
  {
    num: "10",
    title: "Governing Law",
    content: [
      "These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of courts in India.",
    ],
  },
  {
    num: "11",
    title: "Contact",
    content: [
      "DSH Innovations Private Limited",
      "hello@zetusai.com",
      "zetusai.com",
      "CIN: U62099PN2026PTC255228",
      "GSTIN: 27AAMCD6800G1ZN",
    ],
  },
];

function TermsOfService() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-20 md:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            DSH Innovations Private Limited (Zetus AI)
          </p>
          <h1 className="mt-3 animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-subtle">Last updated: May 2026</p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-24">
          <div className="space-y-16">
            {sections.map(({ num, title, content }) => (
              <div key={num}>
                <h2 className="text-xl font-semibold text-foreground">
                  {num}. {title}
                </h2>
                <div className="mt-4 space-y-2 text-base leading-relaxed text-subtle">
                  {content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
