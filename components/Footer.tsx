import Link from "next/link";
import { Logo } from "./Logo";
import { Social } from "./Icons";
import { site } from "@/lib/site";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

const socialLabels: Record<keyof typeof site.socials, string> = {
  linkedin: "Vynquora on LinkedIn",
  x: "Vynquora on X (Twitter)",
};

export default function Footer() {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;
  const owner = site.legalName || site.name;
  const socials = (Object.keys(site.socials) as (keyof typeof site.socials)[]).filter((k) => site.socials[k]);

  return (
    <footer className="border-t border-line">
      <div className={`${container} py-14`}>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label={`${site.name} home`}>
              <Logo />
            </Link>
            <p className="mt-4 text-muted leading-relaxed">{site.description}</p>
            <p className="mt-3 text-sm text-muted">{site.location}</p>
          </div>

          <div>
            <p className="text-sm font-semibold">Company</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><Link href="/#services" className="text-muted hover:text-ink">Services</Link></li>
              <li><Link href="/work" className="text-muted hover:text-ink">Work</Link></li>
              <li><Link href="/about" className="text-muted hover:text-ink">About</Link></li>
              <li><Link href="/#process" className="text-muted hover:text-ink">Process</Link></li>
              <li><Link href="/#faq" className="text-muted hover:text-ink">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li><a href={`mailto:${site.email}`} className="text-muted hover:text-ink">{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-muted hover:text-ink">{site.phone}</a></li>
              <li><a href={waLink} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-5">
            <p>© {new Date().getFullYear()} {owner}. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-ink">Privacy</Link>
              <Link href="/terms" className="hover:text-ink">Terms</Link>
            </div>
          </div>
          <ul className="flex gap-2">
            {socials.map((k) => {
              const S = Social[k];
              return (
                <li key={k}>
                  <a
                    href={site.socials[k]}
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label={socialLabels[k]}
                    title={socialLabels[k]}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:text-ink hover:border-silver transition-colors"
                  >
                    <S className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}