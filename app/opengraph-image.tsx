import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// The preview image shown when the site link is shared on LinkedIn, X, WhatsApp, Slack etc.
export const alt = `${site.name}: we build the software your business runs on`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function logoDataUrl() {
  try {
    const file = await readFile(join(process.cwd(), "public", site.logo.replace(/^\//, "")));
    return `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    return null; // logo not added yet: show the name only
  }
}

export default async function OG() {
  const logo = await logoDataUrl();
  const showName = !logo || !site.logoHasName;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#ffffff", color: "#141820" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 44, fontWeight: 700 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {logo && <img src={logo} height={80} style={{ height: 80, objectFit: "contain" }} alt="" />}
          {showName && site.name}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, maxWidth: 950 }}>
          We build the software your business runs on.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#5b6472" }}>
          <span>Web apps · Mobile apps · AI features · Cloud</span>
          <span>{site.domain}</span>
        </div>
      </div>
    ),
    size
  );
}
