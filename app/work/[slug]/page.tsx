import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrowserFrame from "@/components/BrowserFrame";
import { Icon } from "@/components/Icons";
import { projects } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} case study`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { images: [{ url: p.image }] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = projects.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 sm:pt-16">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
            <Icon.arrow className="h-4 w-4 rotate-180" /> All projects
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand">{p.category}</p>
              <h1 className="mt-5 text-[2.75rem] leading-[1.02] sm:text-6xl font-semibold tracking-[-0.045em]">{p.name}</h1>
              <p className="mt-4 text-xl text-muted">{p.kind}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-medium text-brand-ink hover:bg-brand-hover transition-colors">
                  Open live product <Icon.external className="h-4 w-4" />
                </a>
              )}
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-medium hover:border-silver hover:bg-bg-alt transition-colors">
                Build something similar
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <BrowserFrame src={p.image} alt={p.imageAlt} url={p.name} priority />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">The brief</h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">{p.summary}</p>
              <h2 className="mt-12 text-3xl font-semibold tracking-[-0.03em]">What we built</h2>
              <ul className="mt-6 space-y-4">
                {p.built.map((b) => (
                  <li key={b} className="flex gap-3 text-lg">
                    <Icon.check className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="h-fit rounded-3xl border border-line bg-bg-alt p-7">
              <h2 className="font-semibold">Built with</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm">{t}</li>
                ))}
              </ul>
              <h2 className="mt-8 font-semibold">Status</h2>
              <p className="mt-2 text-muted">{p.liveUrl ? "Live in production" : "Private demo available on request"}</p>
            </aside>
          </div>

          {p.gallery && p.gallery.length > 0 && (
            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {p.gallery.map((g) => (
                <BrowserFrame key={g.src} src={g.src} alt={g.alt} url={p.name} />
              ))}
            </div>
          )}
        </section>

        {projects.length > 1 && next.slug !== p.slug && (
          <section className="border-t border-line">
            <Link href={`/work/${next.slug}`} className="group mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 py-14">
              <span>
                <span className="block text-sm text-muted">Next project</span>
                <span className="mt-1 block text-3xl sm:text-4xl font-semibold tracking-[-0.035em]">{next.name}</span>
              </span>
              <Icon.arrow className="h-8 w-8 text-brand transition-transform group-hover:translate-x-1.5" />
            </Link>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
