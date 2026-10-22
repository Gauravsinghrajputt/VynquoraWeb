import { Icon } from "./Icons";
import { hitl, hitlPdf, otherPrinciples } from "@/lib/site";

import { container } from "@/lib/ui";

export default function Principles() {
  return (
    <section id="principles" className="py-24 sm:py-32">
      <div className={container}>
        <div className="max-w-2xl">
          <h2 className="text-[2.1rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]">
            Three principles behind everything we ship.
          </h2>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            We also use AI, but we never ship what it produces on faith.
          </p>
        </div>

        {/* Principle 1: Human in the loop */}
        <div className="mt-14 grid gap-8 rounded-[22px] border-2 border-brand bg-card p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="flex flex-col">
            <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">Principle 1</span>
            <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-[-0.03em] leading-tight">{hitl.title}</h3>
            <p className="mt-4 text-muted leading-relaxed">{hitl.body}</p>

            <ol className="mt-7 flex flex-wrap items-center gap-2 text-sm">
              {hitl.flow.map((step, i) => (
                <li key={step} className="inline-flex items-center gap-2">
                  <span className="rounded-full border border-line bg-bg-alt px-3 py-1.5 text-muted">{step}</span>
                  {i < hitl.flow.length - 1 && <Icon.arrow className="h-3.5 w-3.5 text-silver" />}
                </li>
              ))}
            </ol>

            <a
              href={hitlPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-6 py-3 font-medium text-brand-ink hover:bg-brand-hover transition-colors"
            >
              Read more (PDF)
              <Icon.external className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {hitl.checks.map((c) => (
              <li key={c.q} className="rounded-2xl border border-line bg-bg-alt p-5">
                <p className="font-semibold">{c.q}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{c.a}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Principles 2 and 3 */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherPrinciples.map((p, i) => (
            <div key={p.title} className="rounded-[22px] border border-line bg-card p-6 sm:p-8">
              <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">Principle {i + 2}</span>
              <h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-[-0.025em]">{p.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{p.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-bg-alt px-3 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
