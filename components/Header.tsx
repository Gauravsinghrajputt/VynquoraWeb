"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Icon } from "./Icons";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-line" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="Vynquora home"
          onClick={() => {
            setOpen(false);
            // Already on the homepage: go back to the top.
            if (window.location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="px-3.5 py-2 rounded-full text-[15px] text-muted hover:text-ink transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-bg hover:opacity-90 transition-opacity"
          >
            Book a free call
          </a>
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
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-ink border-b border-line">
              {n.label}
            </a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} className="mt-5 flex justify-center rounded-full bg-brand px-5 py-3 font-medium text-brand-ink">
            Book a free call
          </a>
        </nav>
      )}
    </header>
  );
}