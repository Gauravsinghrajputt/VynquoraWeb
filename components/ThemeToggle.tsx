"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title={dark ? "Light theme" : "Dark theme"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted hover:text-ink hover:bg-bg-alt transition-colors cursor-pointer"
    >
      {dark ? <Icon.sun className="h-[18px] w-[18px]" /> : <Icon.moon className="h-[18px] w-[18px]" />}
    </button>
  );
}
