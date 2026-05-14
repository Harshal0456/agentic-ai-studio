import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Layout } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zetus AI" },
      {
        name: "description",
        content:
          "Book a free 30 minute discovery call with Zetus AI or send us a message.",
      },
      { property: "og:title", content: "Contact — Zetus AI" },
      {
        property: "og:description",
        content: "Book a free discovery call with Zetus AI.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

type Status = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("https://api.zetusai.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setError("Could not send your message. Please email hello@zetusai.com.");
    }
  }

  return (
    <Layout>
      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-20 md:pt-28">
          <h1 className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Let's talk about
            <br />
            <span className="text-primary">your business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-subtle md:text-lg">
            Book a free 30 minute discovery call. We will understand your
            operations and tell you honestly what is possible.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          {/* Calendly */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Book a discovery call
            </h2>
            <p className="mt-3 text-sm text-subtle">
              Choose a time that works for you directly.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-card">
              <iframe
                src="https://calendly.com/zetusai/discovery"
                className="h-[640px] w-full"
                title="Book a discovery call"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Prefer to write to us?
            </h2>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <Field label="Your name" name="name" required />
              <Field label="Your company" name="company" required />
              <Field label="Your email" name="email" type="email" required />
              <Field label="Your phone" name="phone" type="tel" />
              <div>
                <label className="mb-1.5 block text-sm text-subtle">
                  Tell us about your business
                </label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              {status === "success" && (
                <p className="text-sm text-primary">
                  Thanks — we'll get back to you shortly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover disabled:opacity-60 sm:w-auto"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
              </button>
            </form>

            <div className="mt-8 space-y-1 text-sm">
              <a
                href="mailto:hello@zetusai.com"
                className="text-foreground hover:text-primary"
              >
                hello@zetusai.com
              </a>
              <p className="text-subtle">
                We respond within 4 hours on business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-subtle">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-md border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
