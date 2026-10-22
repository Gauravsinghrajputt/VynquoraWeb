"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./Icons";
import { navLinks } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8 2xl:max-w-7xl">
        <Link href="/" aria-label="Vynquora home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {navLinks.map((n) => {
            const active = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={`px-3.5 py-2 rounded-full text-[15px] transition-colors ${
                  active ? "bg-brand-soft font-medium text-brand" : "text-muted hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
  href="/contact"
  className="group hidden sm:inline-flex items-center justify-center w-[160px] rounded-full bg-ink py-2.5 text-[15px] font-medium text-bg hover:opacity-90 transition-all text-center"
>
  <span className="group-hover:hidden">
    Book a free call
  </span>
  <span className="hidden group-hover:inline">
    Contact us
  </span>
</Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-bg-alt cursor-pointer"
          >
            {open ? <Icon.close /> : <Icon.menu />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-line px-5 pb-6 pt-2" aria-label="Mobile">
          {navLinks.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`block py-3 text-lg border-b border-line ${isActive(n.href) ? "font-medium text-brand" : "text-ink"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-5 flex justify-center rounded-full bg-brand px-5 py-3 font-medium text-brand-ink">
            Book a free call
          </Link>
        </nav>
      )}
    </header>
  );
}
