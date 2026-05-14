import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Zetus AI" },
      {
        name: "description",
        content: "Selected work from Zetus AI — case studies coming soon.",
      },
      { property: "og:title", content: "Case Studies — Zetus AI" },
      {
        property: "og:description",
        content: "Selected work from Zetus AI — case studies coming soon.",
      },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center">
          <h1 className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Case studies, <span className="text-primary">coming soon.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-subtle md:text-lg">
            We are preparing detailed write-ups of our most impactful agent
            deployments. In the meantime, the best way to see what's possible
            for your business is a short conversation.
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
