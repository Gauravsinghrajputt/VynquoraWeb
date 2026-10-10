import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: we build the software your business runs on`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#ffffff", color: "#141820" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 700 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <path d="M7 10h12.5l15 38.5L31 57Z" fill="#8E98A6" />
            <path d="M31 57l-4.2-10.6L42.5 22H55Z" fill="#1F5FD1" />
            <path d="M5 41.5c2 9.5 24 10 52-20.5 1.6-1.7 3.4-1.2 1.6.9C34 53 9.5 54.5 5 41.5Z" fill="#2F7BF0" />
            <circle cx="49.5" cy="12" r="6.5" fill="#1546A8" />
          </svg>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 950 }}>
          We build the software your business runs on.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#5b6472" }}>Web apps · Mobile apps · AI features · Cloud</div>
      </div>
    ),
    size
  );
}
