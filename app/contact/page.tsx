import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Icon, Social } from "@/components/Icons";
import { site, faqs } from "@/lib/site";
import { container, h2 } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute call. Tell us what you're building and get a fixed-scope proposal within a week.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const card = "group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 hover:border-silver transition-colors";

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        intro="Share a few details and we'll set up a free 30-minute call. You'll get a fixed-scope proposal within a week."
      />

      <section className="py-16 sm:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
          <div>
            <ul className="space-y-3">
              <li>
                <a href={waLink} target="_blank" rel="noreferrer" className={card}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/12 text-[#1DA851]">
                    <Social.whatsapp />
                  </span>
                  <span>
                    <span className="block font-medium">Chat on WhatsApp</span>
                    <span className="block text-sm text-muted">Fastest way to reach us</span>
                  </span>
                  <Icon.arrow className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={card}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon.mail />
                  </span>
                  <span>
                    <span className="block font-medium">{site.email}</span>
                    <span className="block text-sm text-muted">Project enquiries and proposals</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={card}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon.call />
                  </span>
                  <span>
                    <span className="block font-medium">{site.phone}</span>
                    <span className="block text-sm text-muted">{site.hours}</span>
                  </span>
                </a>
              </li>
            </ul>
            {site.socials.linkedin && (
              <p className="mt-6 text-sm text-muted">
                Follow our work on{" "}
                <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline">
                  LinkedIn
                </a>
                {site.socials.x && (
                  <>
                    {" "}and{" "}
                    <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline">
                      X
                    </a>
                  </>
                )}
                .
              </p>
            )}
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-line bg-bg-alt py-20 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr]`}>
          <div className="max-w-2xl">
            <h2 className={h2}>Questions clients ask us</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Anything else? Message us on WhatsApp and you&apos;ll get a straight answer.
            </p>
            <p className="mt-4 text-sm text-muted">
              Partnerships and vendor onboarding:{" "}
              <a href={`mailto:${site.partnerEmail}`} className="font-medium text-ink underline-offset-4 hover:underline">
                {site.partnerEmail}
              </a>
            </p>
          </div>
          <div className="border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-lg font-medium">
                  {f.q}
                  <Icon.plus className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-45" />
                </summary>
                <p className="-mt-1 pb-6 pr-10 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
