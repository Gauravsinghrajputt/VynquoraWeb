import Link from "next/link";
import { Logo } from "./Logo";
import { Social } from "./Icons";
import { site } from "@/lib/site";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

export default function Footer() {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;
  return (
      <footer className="border-t border-line">
        <div className={`${container} py-14`}>
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <Logo />
              <p className="mt-4 text-muted leading-relaxed">{site.description}</p>
              <p className="mt-3 text-sm text-muted">{site.location}</p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-[15px]">
              <Link href="/#services" className="text-muted hover:text-ink">Services</Link>
              <Link href="/#contact" className="text-muted hover:text-ink">Contact</Link>
              <Link href="/work" className="text-muted hover:text-ink">Work</Link>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-ink">Email</a>
              <Link href="/#process" className="text-muted hover:text-ink">Process</Link>
              <a href={waLink} target="_blank" rel="noreferrer" className="text-muted hover:text-ink">WhatsApp</a>
            </div>
          </div>
          <div className="mt-12 flex flex-col-reverse gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <ul className="flex gap-2">
              {(Object.keys(site.socials) as (keyof typeof site.socials)[])
                .filter((k) => site.socials[k])
                .map((k) => {
                  const S = Social[k];
                  return (
                    <li key={k}>
                      <a href={site.socials[k]} target="_blank" rel="noreferrer" aria-label={k} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:text-ink hover:border-silver transition-colors">
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
