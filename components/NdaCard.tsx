import Link from "next/link";
import { Icon } from "./Icons";

export default function NdaCard() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[22px] border border-dashed border-silver bg-bg-alt p-7">
      <div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-card text-brand border border-line">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
          </svg>
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">More work under NDA</h3>
        <p className="mt-3 text-muted leading-relaxed">
          Dashboards, booking and billing systems, and internal tools for businesses in real estate, services and retail.
        </p>
      </div>
      <Link href="/contact" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 font-medium text-bg hover:opacity-90">
        Ask for a private walkthrough <Icon.arrow className="h-4 w-4" />
      </Link>
    </div>
  );
}
