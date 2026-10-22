import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { process, values, partnerPoints } from "@/lib/site";
import { container, h2 } from "@/lib/ui";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "A free discovery call, a fixed-scope proposal, weekly working software and 30 days of free support after launch. How a Vynquora project runs.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="How we work"
        title="Four clear steps. No hourly surprises."
        intro="A fixed price, and working software you can see every week."
      />

      {/* Process */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((s, i) => (
              <li key={s.title} className="relative">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-semibold text-brand">
                    {i + 1}
                  </span>
                  {i < process.length - 1 && <span className="hidden lg:block h-px flex-1 bg-line" aria-hidden="true" />}
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{s.title}</h2>
                <p className="mt-3 text-muted leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Working style */}
      <section className="border-t border-line bg-bg-alt py-20 sm:py-24">
        <div className={container}>
          <h2 className={`${h2} max-w-2xl`}>How it feels to work with us</h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-2.5 text-muted leading-relaxed">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Larger teams */}
      <section className="py-20 sm:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-2 lg:items-start`}>
          <div>
            <h2 className={h2}>Working with larger teams</h2>
            <p className="mt-5 text-lg text-muted leading-relaxed">
              We work as a delivery partner and vendor for companies that need extra engineering capacity: a module, an internal tool,
              an AI feature or a full product, delivered under your NDA, security rules and review process.
            </p>
          </div>
          <ul className="space-y-4 rounded-3xl border border-line bg-card p-7 sm:p-9">
            {partnerPoints.map((t) => (
              <li key={t} className="flex gap-3">
                <Icon.check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-line">
        <CtaBand />
      </div>
    </main>
  );
}
