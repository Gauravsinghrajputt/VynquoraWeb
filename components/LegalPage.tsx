
export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto max-w-3xl px-5 sm:px-8 pt-16 pb-24 sm:pt-24">
        <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl font-semibold tracking-[-0.04em]">{title}</h1>
        <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-[17px] leading-relaxed text-muted [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline [&_strong]:text-ink">
          {children}
        </div>
      </main>
    </>
  );
}
