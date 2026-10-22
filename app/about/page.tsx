import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Icon, Social } from "@/components/Icons";
import { site } from "@/lib/site";
import { container, h2 } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About us",
  description: `${site.name} is a software development company in ${site.address.locality}, ${site.address.city}. We design, build and support web apps, mobile apps, AI features and cloud systems for businesses in India and abroad.`,
  alternates: { canonical: "/about" },
};

const differences = [
  {
    title: "Talk to the engineers",
    body: "You speak directly to the people writing your code, with no account managers in between.",
  },
  {
    title: "See progress every week",
    body: "Working software on a real link, every week, so you can change direction while it's still cheap.",
  },
  {
    title: "Everything is yours",
    body: "Your code, designs, accounts and data are yours from day one, in your own GitHub and cloud.",
  },
  {
    title: "Confidential and upfront",
    body: "We sign an NDA before the first detailed conversation, and we tell you early when something is late or hard.",
  },
];

export default function AboutPage() {
  const row = "flex flex-col gap-1 sm:flex-row sm:gap-6";
  const label = "w-36 shrink-0 text-muted";

  return (
    <main>
      <PageHero
        eyebrow={`About ${site.name}`}
        title="We build software, and we keep our word about it."
        intro={`${site.name} is a small, senior software team based in ${site.address.city}. We design, build and support web apps, mobile apps, AI features and the cloud systems behind them, for growing businesses and as a delivery partner for larger teams.`}
      >
        <Link
          href="/contact"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-medium text-brand-ink hover:bg-brand-hover transition-colors"
        >
          Start a conversation
          <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 font-medium text-ink hover:border-silver hover:bg-bg-alt transition-colors"
        >
          See our work
        </Link>
      </PageHero>

      {/* Our story */}
      <section className="py-24 sm:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-2 lg:gap-16`}>
          <h2 className={`${h2} max-w-md`}>Why {site.name} exists</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Most software projects don&apos;t fail because the code is bad. They fail because the promises were vague: a scope
              that drifted, a deadline that slid, and a team you never really got to talk to. {site.name} was started to fix
              that. We agree on what gets built, what it costs and when it ships, and then we deliver exactly that.
            </p>
            <p>
              We&apos;re a small, senior team based in {site.address.city}. Some of our clients are growing businesses replacing
              spreadsheets and WhatsApp groups with real systems. Others are larger companies that bring us in as a delivery
              partner when they need more engineering capacity.
            </p>
          </div>
        </div>
      </section>

      {/* How we're different */}
      <section className="bg-ink text-bg py-24 sm:py-28 dark:bg-bg-alt dark:text-ink">
        <div className={container}>
          <h2 className={`${h2} max-w-2xl`}>How we&apos;re different</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 dark:bg-line sm:grid-cols-2 lg:grid-cols-4">
            {differences.map((d, i) => (
              <div key={d.title} className="bg-ink p-8 lg:p-9 dark:bg-card">
                <span className="text-sm font-medium opacity-50">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">{d.title}</h3>
                <p className="mt-3 text-base leading-relaxed opacity-70">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we've built */}
      <section className="py-24 sm:py-28">
        <div className={container}>
          <div className="max-w-3xl">
            <h2 className={h2}>What we&apos;ve built</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We&apos;ve shipped multiple products, from a property management platform and a large-scale data verification
              system to Kriti, our own AI assistant. Building our own product keeps us honest. We know what it&apos;s like to
              maintain software after launch, so we build client projects to be maintained.
            </p>
          </div>

          {/*
            TODO (proof): add real evidence here before publishing. Options:
            - an anonymised result, e.g. "Month-end reconciliation went from three days to three hours"
            - a client quote with name/role (or "Finance client, anonymised")
            - a delivery stat, e.g. "X of Y projects delivered on the agreed date" (only if true)
            - founding year ("Building software since 20XX")

            Product cards (re-enable later): define
              const builds = [{ title: "Kriti", body: "Our own AI assistant." }, ...];
            above the component, then render:
              <div className="mt-12 grid gap-5 sm:grid-cols-3">
                {builds.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-line bg-bg-alt p-7">
                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{b.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-muted">{b.body}</p>
                  </div>
                ))}
              </div>
          */}
        </div>
      </section>

      {/* Company details */}
      <section className="border-t border-line py-24 sm:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:items-start`}>
          <div>
            <h2 className={h2}>Based in Bengaluru, working worldwide</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              Our team works with clients in India and abroad, from first idea to long-term support.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Looking for a delivery partner for your own team? Read how we{" "}
              <Link href="/how-we-work" className="font-medium text-ink underline underline-offset-4 hover:text-brand">
                work with larger companies
              </Link>
              .
            </p>
          </div>

          <div className="rounded-3xl border border-line bg-bg-alt p-7 sm:p-9">
            <h3 className="text-xl font-semibold tracking-[-0.02em]">Company details</h3>
            <dl className="mt-6 space-y-4 text-[15px]">
              <div className={row}>
                <dt className={label}>Company</dt>
                <dd>{site.legalName || site.name}</dd>
              </div>
              <div className={row}>
                <dt className={label}>Location</dt>
                <dd>{site.address.locality}, {site.address.city}, {site.address.countryName}</dd>
              </div>
              <div className={row}>
                <dt className={label}>Enquiries</dt>
                <dd><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></dd>
              </div>
              <div className={row}>
                <dt className={label}>Partnerships</dt>
                <dd><a href={`mailto:${site.partnerEmail}`} className="hover:text-brand">{site.partnerEmail}</a></dd>
              </div>
              <div className={row}>
                <dt className={label}>Phone</dt>
                <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">{site.phone}</a></dd>
              </div>
              <div className={row}>
                <dt className={label}>Hours</dt>
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

      <div className="border-t border-line">
        <CtaBand />
      </div>
    </main>
  );
}