import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Zetus AI" },
      {
        name: "description",
        content:
          "Privacy Policy for Zetus AI (DSH Innovations Private Limited). Learn how we collect, use, and protect your data.",
      },
      { property: "og:title", content: "Privacy Policy — Zetus AI" },
      {
        property: "og:description",
        content:
          "Privacy Policy for Zetus AI (DSH Innovations Private Limited).",
      },
    ],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    num: "1",
    title: "Who We Are",
    content: [
      "DSH Innovations Private Limited operating under the brand Zetus AI is registered in India with CIN U62099PN2026PTC255228.",
      "Registered address: SN 167 168P Flat No 601 Hadapsar Pune Maharashtra India.",
      "Contact: hello@zetusai.com",
    ],
  },
  {
    num: "2",
    title: "Information We Collect",
    content: [
      "We collect information you provide directly: Name, company name, email address, phone number, and business details when you contact us or book a discovery call.",
      "We collect information automatically: Basic website analytics including pages visited and time spent. No personal identification from analytics.",
    ],
  },
  {
    num: "3",
    title: "How We Use Your Information",
    content: [
      "To respond to your enquiries within 4 hours.",
      "To schedule and conduct discovery calls.",
      "To send proposals and service agreements.",
      "To deliver automation services you have contracted us for.",
      "To send service related communications.",
      "We do not use your information for unsolicited marketing.",
    ],
  },
  {
    num: "4",
    title: "Data Storage and Residency",
    content: [
      "All client data is stored on dedicated servers located in Mumbai India.",
      "Your data never leaves India.",
      "We are fully compliant with the Digital Personal Data Protection Act 2023.",
    ],
  },
  {
    num: "5",
    title: "Data Retention",
    content: [
      "Contact form data: retained for 12 months.",
      "Client operational data: deleted immediately after processing per our zero retention policy.",
      "Contract and billing records: retained for 7 years as required by Indian law.",
    ],
  },
  {
    num: "6",
    title: "Data Sharing",
    content: [
      "We do not sell your data to any third party.",
      "We do not share your data with advertisers.",
      "Limited sharing only with:",
      "Anthropic Claude API for AI processing with anonymised data only.",
      "Zoho for CRM and invoicing.",
      "Razorpay for payment processing.",
      "Twilio for WhatsApp communications.",
      "All third party processors are contractually bound to data protection standards.",
    ],
  },
  {
    num: "7",
    title: "Your Rights Under DPDP Act 2023",
    content: [
      "You have the right to:",
      "Access the personal data we hold about you.",
      "Correct inaccurate personal data.",
      "Request deletion of your personal data.",
      "Withdraw consent at any time.",
      "Lodge a complaint with the Data Protection Board of India.",
      "To exercise these rights contact: hello@zetusai.com",
    ],
  },
  {
    num: "8",
    title: "WhatsApp Communications",
    content: [
      "We only send WhatsApp messages to numbers that have explicitly opted in to receive communications from Zetus AI.",
      "To opt out at any time reply STOP to any message and we will immediately add you to our do not contact list.",
    ],
  },
  {
    num: "9",
    title: "Cookies",
    content: [
      "Our website uses minimal cookies for basic functionality only.",
      "We do not use tracking or advertising cookies.",
    ],
  },
  {
    num: "10",
    title: "Changes to This Policy",
    content: [
      "We may update this policy periodically.",
      "We will notify existing clients of material changes via email.",
    ],
  },
  {
    num: "11",
    title: "Contact Us",
    content: [
      "DSH Innovations Private Limited",
      "hello@zetusai.com",
      "zetusai.com",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-20 md:pt-28">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            DSH Innovations Private Limited (Zetus AI)
          </p>
          <h1 className="mt-3 animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Privacy Policy
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
