import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 sm:px-8 py-24">
        <p className="text-sm font-medium text-brand">404</p>
        <h1 className="mt-3 text-[2.5rem] leading-[1.05] sm:text-5xl font-semibold tracking-[-0.04em]">This page doesn&apos;t exist.</h1>
        <p className="mt-4 text-lg text-muted">The link may be old or mistyped.</p>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="rounded-full bg-brand px-6 py-3 font-medium text-brand-ink hover:bg-brand-hover">Go to homepage</Link>
          <Link href="/work" className="rounded-full border border-line px-6 py-3 font-medium hover:border-silver">See our work</Link>
        </div>
      </main>
    </>
  );
}
