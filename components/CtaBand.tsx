import Link from "next/link";
import { Icon, Social } from "./Icons";
import { site } from "@/lib/site";
import { container } from "@/lib/ui";

// The one closing call-to-action used at the bottom of pages.
export default function CtaBand({
  title = "Have something in mind? Let's talk.",
  body = "Tell us what you're building. We reply within one working day and send a fixed-scope proposal within a week.",
}: {
  title?: string;
  body?: string;
}) {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;

  return (
    <section className="py-24 sm:py-28">
      <div className={container}>
        <div className="rounded-[28px] bg-ink px-6 py-14 text-center text-bg sm:px-12 sm:py-20 dark:border dark:border-line dark:bg-card dark:text-ink">
          <h2 className="mx-auto max-w-2xl text-[2rem] sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.05]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg opacity-75 leading-relaxed">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-bg px-7 py-4 font-medium text-ink hover:opacity-90 transition-opacity"
            >
              Book a free 30-minute call
              <Icon.arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-current/30 px-7 py-4 font-medium hover:border-current/60 transition-colors"
            >
              <Social.whatsapp className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
