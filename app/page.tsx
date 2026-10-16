import Header from "@/components/Header";
import BrowserFrame from "@/components/BrowserFrame";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import NdaCard from "@/components/NdaCard";
import ServiceCard from "@/components/ServiceCard";
import { Icon, Social } from "@/components/Icons";
import { site, stats, services, projects, process, promises, stack, faqs } from "@/lib/site";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

function SectionHead({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted leading-relaxed">{intro}</p>}
    </div>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main id="top">
        {/* ───────────── Hero ───────────── */}
        <section className="relative overflow-hidden">
          <div className={`${container} grid items-center gap-14 pt-12 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-28`}>
            <div className="rise">
              <p className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Taking on new projects this month
              </p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] font-semibold tracking-[-0.045em]">
                We build the software your business runs on.
              </h1>
              <p className="mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
                Web apps, mobile apps, AI features and the cloud behind them, designed, built and supported by one dedicated team.
                You talk directly to the engineers writing your code.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-medium text-brand-ink hover:bg-brand-hover transition-colors">
                  Book a free 30-minute call
                  <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#work" className="inline-flex items-center justify-center rounded-full border border-line px-7 py-4 font-medium text-ink hover:border-silver hover:bg-bg-alt transition-colors">
                  See our work
                </a>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                {["NDA before we talk", "You own the code", "Fixed-price proposals"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-2">
                    <Icon.check className="h-4 w-4 text-brand" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product stack: real screens from shipped products */}
            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none" aria-label="Screens from products we built">
              {/* Orbit ring echoing the logo swoosh */}
              <svg viewBox="0 0 700 560" className="pointer-events-none absolute left-1/2 top-1/2 w-[125%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" fill="none">
                <ellipse
                  className="orbit-draw"
                  pathLength={1}
                  cx="350" cy="280" rx="330" ry="165"
                  transform="rotate(-16 350 280)"
                  stroke="var(--brand)"
                  strokeWidth="3"
                  opacity=".55"
                />
                <ellipse cx="350" cy="280" rx="300" ry="140" transform="rotate(-16 350 280)" stroke="var(--silver)" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" opacity=".7" />
                <circle cx="628" cy="132" r="15" fill="var(--brand)" />
                <circle cx="628" cy="132" r="15" fill="none" stroke="var(--bg)" strokeWidth="5" />
              </svg>
              <div className="relative">
                <div className="rise rise-2 w-[82%]" style={{ ["--r" as string]: "-2deg" }}>
                  <BrowserFrame src="/work/kriti-chat.webp" alt="Kriti AI assistant, a product we built" url="Kriti, AI studio" />
                </div>
                <div className="rise rise-3 relative -mt-[38%] ml-auto w-[86%]" style={{ ["--r" as string]: "1.5deg" }}>
                  <BrowserFrame src="/work/societyos-admin.webp" alt="SocietyOS admin dashboard, a platform we built" url="SocietyOS, admin dashboard" priority />
                  <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live in production
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Commitments strip */}
          <div className="border-y border-line bg-bg-alt">
            <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
              {stats.map((s, i) => (
                <div key={s.label} className={`py-8 pr-4 ${i % 2 === 1 ? "pl-6 border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:pl-6 lg:border-l" : ""}`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">{s.value}</dd>
                  <dd className="mt-1.5 text-sm text-muted leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────────── Services ───────────── */}
        <section id="services" className="py-24 sm:py-32">
          <div className={container}>
            <SectionHead
              title="What we build"
              intro="From the first screen to the server it runs on. One team takes responsibility for all of it, so nothing falls between vendors."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <ServiceCard key={s.title} service={s} />
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Work ───────────── */}
        <section id="work" className="border-t border-line bg-bg-alt py-24 sm:py-32">
          <div className={container}>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHead
                title="Selected work"
                intro="Real products, live and in use. Most of our client work is under NDA, so we're happy to walk you through more of it on a call."
              />
              <Link href="/work" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-medium hover:border-silver transition-colors">
                See all projects <Icon.arrow className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((p, i) => (
                <ProjectCard key={p.slug} project={p} priority={i === 0} />
              ))}
              {featured.length < 3 && <NdaCard />}
            </div>
          </div>
        </section>

        {/* ───────────── Process ───────────── */}
        <section id="process" className="py-24 sm:py-32">
          <div className={container}>
            <SectionHead title="How a project runs" intro="Clear steps, a fixed price, and working software you can see every week." />
            <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((s, i) => (
                <li key={s.title} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-semibold text-brand">
                      {i + 1}
                    </span>
                    {i < process.length - 1 && <span className="hidden lg:block h-px flex-1 bg-line" aria-hidden="true" />}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── Why us + stack ───────────── */}
        <section className="border-t border-line bg-ink text-bg py-24 sm:py-32 dark:bg-bg-alt dark:text-ink">
          <div className={container}>
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h2 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]">
                  A focused team that owns your project end to end.
                </h2>
                <p className="mt-6 text-lg leading-relaxed opacity-75">
                  No hand-offs after the sales call. The people who plan your product are the people who build, ship and support it, and we bring in specialists when a project needs them.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 dark:bg-line sm:grid-cols-2">
                {promises.map((p) => (
                  <div key={p.title} className="bg-ink p-7 dark:bg-card">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2.5 leading-relaxed opacity-70">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <p className="text-sm opacity-60">Tools we use every day</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {stack.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 dark:border-line px-4 py-2 text-sm opacity-85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────── FAQ ───────────── */}
        <section id="faq" className="py-24 sm:py-32">
          <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr]`}>
            <SectionHead title="Questions clients ask us" intro="Anything else? Message us on WhatsApp and you'll get a straight answer." />
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

        {/* ───────────── Contact ───────────── */}
        <section id="contact" className="border-t border-line bg-bg-alt py-24 sm:py-32">
          <div className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16`}>
            <div>
              <h2 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]">Tell us what you&apos;re building.</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Share a few details and we&apos;ll set up a free 30-minute call. You&apos;ll get a fixed-scope proposal within a week.
              </p>
              <ul className="mt-10 space-y-3">
                <li>
                  <a href={waLink} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 hover:border-silver transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/12 text-[#1DA851]"><Social.whatsapp /></span>
                    <span>
                      <span className="block font-medium">Chat on WhatsApp</span>
                      <span className="block text-sm text-muted">Fastest way to reach us</span>
                    </span>
                    <Icon.arrow className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 hover:border-silver transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon.mail /></span>
                    <span>
                      <span className="block font-medium">{site.email}</span>
                      <span className="block text-sm text-muted">Project enquiries and proposals</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.partnerEmail}`} className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 hover:border-silver transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon.mail /></span>
                    <span>
                      <span className="block font-medium">{site.partnerEmail}</span>
                      <span className="block text-sm text-muted">Partnerships and vendor onboarding</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-4 hover:border-silver transition-colors">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon.call /></span>
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
                  <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline">LinkedIn</a>
                  {site.socials.x && (
                    <>
                      {" "}and{" "}
                      <a href={site.socials.x} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline-offset-4 hover:underline">X</a>
                    </>
                  )}
                  .
                </p>
              )}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
