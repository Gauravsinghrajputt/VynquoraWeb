"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

// Company logo. The image is read from /public (see `site.logo` in lib/site.ts).
// Put your file at public/vynquora_logo.png and it shows up everywhere.
// If the file is missing, only the company name is shown, so nothing looks broken.
export function Logo({ className = "", size = "h-10" }: { className?: string; size?: string }) {
  const [failed, setFailed] = useState(false);
  const img = useRef<HTMLImageElement>(null);

  // Catches an image that already failed before the page became interactive.
  useEffect(() => {
    const el = img.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  const showName = !site.logoHasName || failed;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={img}
          src={site.logo}
          alt={site.logoHasName ? site.name : ""}
          className={`${size} w-auto object-contain`}
          onError={() => setFailed(true)}
        />
      )}
      {showName && (
        <span className="text-[1.35rem] font-semibold tracking-[-0.03em] text-ink">{site.name}</span>
      )}
    </span>
  );
}
