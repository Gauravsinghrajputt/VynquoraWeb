import Link from "next/link";
import BrowserFrame from "@/components/BrowserFrame";
import ProjectCard from "@/components/ProjectCard";
import NdaCard from "@/components/NdaCard";
import Principles from "@/components/Principles";
import CtaBand from "@/components/CtaBand";
import { Icon, Social } from "@/components/Icons";
import { site, stats, services, projects } from "@/lib/site";
import { container, h2 } from "@/lib/ui";

// The homepage is an overview. Every section links to its own page for the detail.
export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;

  return (
    <main>
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
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 font-medium text-brand-ink hover:bg-brand-hover transition-colors"
              >
                Book a free 30-minute call
                <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line px-7 py-4 font-medium text-ink hover:border-silver hover:bg-bg-alt transition-colors"
              >
                <span className="text-[#1DA851]">
                  <Social.whatsapp className="h-5 w-5" />
                </span>
                Chat on WhatsApp
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

      {/* ───────────── Principles ───────────── */}
      <Principles />

      {/* ───────────── Where we help (overview, detail is on /services) ───────────── */}
      <section className="border-t border-line bg-bg-alt py-24 sm:py-32">
        <div className={container}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <h2 className={`${h2} text-balance`}>Pick the problem. We build the fix.</h2>
        <p className="mt-5 text-lg text-muted leading-relaxed text-balance">
          From the first screen to the server it runs on, one team takes responsibility for all of it.
        </p>
            </div>
            <Link href="/services" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-card px-6 py-3 font-medium hover:border-silver transition-colors">
              All services <Icon.arrow className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const I = Icon[s.icon as keyof typeof Icon];
              return (
                <li key={s.title}>
                  <Link
                    href="/services"
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-silver"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <I className="h-5 w-5" />
                    </span>
                    <p className="mt-5 text-sm text-muted">{s.problem}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em]">{s.title}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-brand">
                      Learn more <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ───────────── Selected work ───────────── */}
      <section className="py-24 sm:py-32">
        <div className={container}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className={h2}>Real products, live and in use.</h2>
              <p className="mt-5 text-lg text-muted leading-relaxed">
                Most of our client work is under NDA, so we&apos;re happy to walk you through more of it on a call.
              </p>
            </div>
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

      <div className="border-t border-line">
        <CtaBand />
      </div>
    </main>
  );
}
