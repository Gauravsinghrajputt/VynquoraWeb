import Link from "next/link";
import { Logo } from "./Logo";
import { Icon, Social } from "./Icons";
import { site } from "@/lib/site";

const container = "mx-auto max-w-6xl px-5 sm:px-8";

const socialLabels: Record<keyof typeof site.socials, string> = {
  linkedin: "Vynquora on LinkedIn",
  x: "Vynquora on X (Twitter)",
};

const companyLinks = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

const heading = "text-xs font-semibold uppercase tracking-[0.12em] text-ink";
const link = "text-muted hover:text-ink transition-colors";

export default function Footer() {
  const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hi ${site.name}, I'd like to discuss a project.`)}`;
  const owner = site.legalName || site.name;
  const year = new Date().getFullYear();
  const socials = (Object.keys(site.socials) as (keyof typeof site.socials)[]).filter((k) => site.socials[k]);

  return (
    <footer className="border-t border-line bg-bg-alt">
      <div className={`${container} pt-16 pb-10`}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.5fr_0.8fr_1.1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 max-w-sm lg:col-span-1">
            <Link href="/" aria-label={`${site.name} home`}>
              <Logo />
            </Link>
            <p className="mt-5 text-[15px] text-muted leading-relaxed">{site.description}</p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-2">
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
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted hover:text-ink hover:border-silver transition-colors"
                      >
                        <S className="h-[18px] w-[18px]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Company */}
          <nav aria-label="Footer">
            <p className={heading}>Company</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="order-last col-span-2 lg:order-none lg:col-span-1">
            <p className={heading}>Contact</p>
            <ul className="mt-5 space-y-3.5 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className={`inline-flex items-center gap-2.5 ${link}`}>
                  <Icon.mail className="h-4 w-4 shrink-0" /> {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={`inline-flex items-center gap-2.5 ${link}`}>
                  <Icon.call className="h-4 w-4 shrink-0" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2.5 ${link}`}>
                  <Social.whatsapp className="h-4 w-4 shrink-0" /> Chat on WhatsApp
                </a>
              </li>
              <li className="pt-1 text-sm text-muted">{site.hours}</li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <p className={heading}>Office</p>
            <address className="mt-5 not-italic text-[15px] leading-relaxed text-muted">
              <span className="block font-medium text-ink">{owner}</span>
              {site.address.locality}
              <br />
              {site.address.city}, {site.address.region}
              <br />
              {site.address.countryName}
            </address>
            <p className="mt-4 text-sm text-muted">{site.location}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {owner}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className={link}>Privacy Policy</Link></li>
            <li><Link href="/terms" className={link}>Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}