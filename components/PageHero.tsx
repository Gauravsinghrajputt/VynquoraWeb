import { container } from "@/lib/ui";

// The title block at the top of every inner page, so all pages feel like one site.
export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_-30%,var(--brand-soft),transparent)]"
      />
      <div className={`${container} relative pt-16 pb-14 sm:pt-24 sm:pb-20`}>
        <p className="text-sm font-medium text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[2.5rem] leading-[1.03] sm:text-6xl font-semibold tracking-[-0.045em]">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">{intro}</p>}
        {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
