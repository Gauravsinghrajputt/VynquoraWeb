import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { services, stack } from "@/lib/site";
import { container } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web apps and dashboards, AI features and chatbots, mobile apps, business websites, cloud and DevOps, and code audits, built by one dedicated team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Pick the problem. We build the fix."
        intro="From the first screen to the server it runs on, one team takes responsibility for all of it, so nothing falls between vendors."
      />

      <section className="py-20 sm:py-24">
        <div className={container}>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const I = Icon[s.icon as keyof typeof Icon];
              return (
                <li key={s.title} className="flex flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-silver">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <I className="h-6 w-6" />
                  </span>
                  <p className="mt-6 text-sm text-muted">{s.problem}</p>
                  <h2 className="mt-1 text-xl font-semibold tracking-[-0.02em]">{s.title}</h2>
                  <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-bg-alt px-2.5 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt py-20">
        <div className={container}>
          <p className="text-sm text-muted">Tools we use every day</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {stack.map((t) => (
              <li key={t} className="rounded-full border border-line bg-card px-4 py-2 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Not sure which one you need?" body="Describe the problem on a free 30-minute call. We'll tell you honestly what to build, and what not to." />
    </main>
  );
}
