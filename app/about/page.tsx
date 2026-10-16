import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Icon, Social } from "@/components/Icons";
import { site, services, promises, stats, stack } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} is a software development company in ${site.address.locality}, ${site.address.city}. We design, build and support web apps, mobile apps, AI features and cloud systems for businesses in India and abroad.`,
  alternates: { canonical: "/about" },
};

const container = "mx-auto max-w-6xl px-5 sm:px-8";

const values = [
  {
    title: "Plain language",
    body: "Proposals, updates and invoices you can read without a technical dictionary. If something is late or hard, we say so early.",
  },
  {
    title: "Working software every week",
    body: "You see progress on a real link, not slides. Feedback goes in while it is still cheap to change direction.",
  },
  {
    title: "Built to be handed over",
    body: "Clean code, documented setup and your own accounts, so your team or any future vendor can pick it up.",
  },
  {
    title: "On time, as agreed",
    body: "Scope, timeline and price are written down before we start. Changes are quoted up front, never added later.",
  },
];

export default function AboutPage() {
  const sectionHead = "text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]";

  return (
    <>
      <Header />
      <main>
        {/* Intro */}
        <section className="border-b border-line">
          <div className={`${container} pt-16 pb-16 sm:pt-24 sm:pb-20`}>
            <p className="text-sm font-medium text-brand">About {site.name}</p>
            <h1 className="mt-4 max-w-4xl text-[2.75rem] leading-[1.02] sm:text-6xl font-semibold tracking-[-0.045em]">
              A software company built around one promise: deliver what we agreed, when we agreed.
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
              {site.name} is a software development company based in {site.address.locality}, {site.address.city}. We design, build and
              support web apps, mobile apps, AI features and the cloud systems behind them, for growing businesses and as a delivery
              partner for larger teams.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-medium text-brand-ink hover:bg-brand-hover transition-colors">
                Start a conversation
                <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 font-medium text-ink hover:border-silver hover:bg-bg-alt transition-colors">
                See our work
              </Link>
            </div>
          </div>
        </section>

        {/* Facts */}
        <section className="bg-bg-alt border-b border-line">
          <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
            {stats.map((s, i) => (
              <div key={s.label} className={`py-8 pr-4 ${i % 2 === 1 ? "pl-6 border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:pl-6 lg:border-l" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">{s.value}</dd>
                <dd className="mt-1.5 text-sm text-muted leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* What we do */}
        <section className="py-24 sm:py-28">
          <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr]`}>
            <div>
              <h2 className={sectionHead}>What we do</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                One team takes responsibility from the first screen to the server it runs on, so nothing falls between vendors.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {services.map((s) => {
                const I = Icon[s.icon as keyof typeof Icon];
                return (
                  <li key={s.title} className="bg-card p-6">
                    <I className="h-5 w-5 text-brand" />
                    <h3 className="mt-4 font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* How we work */}
        <section className="border-t border-line bg-ink text-bg py-24 sm:py-28 dark:bg-bg-alt dark:text-ink">
          <div className={container}>
            <h2 className={`${sectionHead} max-w-2xl`}>How we work with clients and partners</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 dark:bg-line sm:grid-cols-2 lg:grid-cols-4">
              {[...promises, ...values].slice(0, 8).map((p) => (
                <div key={p.title} className="bg-ink p-7 dark:bg-card">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2.5 leading-relaxed opacity-70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner with us */}
        <section className="py-24 sm:py-28">
          <div className={`${container} grid gap-12 lg:grid-cols-2 lg:items-start`}>
            <div>
              <h2 className={sectionHead}>Working with larger teams</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                We work as a delivery partner and vendor for companies that need extra engineering capacity: a module, an internal tool,
                an AI feature or a full product, delivered under your NDA, security rules and review process.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "NDA and vendor agreements signed before detailed discussions",
                  "Work in your repositories, cloud and project tools",
                  "One accountable point of contact who is also on the build",
                  "Written scope, weekly demos and documented hand-over",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Icon.check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-line bg-bg-alt p-7 sm:p-9">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">Company details</h3>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Company</dt>
                  <dd>{site.legalName || site.name}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Location</dt>
                  <dd>{site.address.locality}, {site.address.city}, {site.address.countryName}</dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Enquiries</dt>
                  <dd><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Partnerships</dt>
                  <dd><a href={`mailto:${site.partnerEmail}`} className="hover:text-brand">{site.partnerEmail}</a></dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Phone</dt>
                  <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">{site.phone}</a></dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                  <dt className="w-36 shrink-0 text-muted">Hours</dt>
                  <dd>{site.hours}</dd>
                </div>
              </dl>
              <div className="mt-7 flex gap-2 border-t border-line pt-6">
                {site.socials.linkedin && (
                  <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium hover:border-silver">
                    <Social.linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
                {site.socials.x && (
                  <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium hover:border-silver">
                    <Social.x className="h-4 w-4" /> X
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="border-t border-line bg-bg-alt py-20">
          <div className={container}>
            <p className="text-sm text-muted">Tools we use every day</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {stack.map((t) => (
                <li key={t} className="rounded-full border border-line bg-card px-4 py-2 text-sm">{t}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
