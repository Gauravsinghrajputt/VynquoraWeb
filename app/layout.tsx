import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { site, services } from "@/lib/site";

const ogTitle = `${site.name} | We build the software your business runs on`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} | Software development company in Bengaluru | Web, mobile & AI`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Vynquora",
    "software development company Bengaluru",
    "software development company India",
    "web app development",
    "mobile app development",
    "AI chatbot development",
    "custom software development",
    "Next.js development",
    "IT services vendor India",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  icons: {
    icon: [{ url: site.logo, type: "image/png" }],
    apple: [{ url: site.logo }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: ogTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    site: site.xHandle,
    creator: site.xHandle,
    title: ogTitle,
    description: site.description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  ...(site.googleVerification ? { verification: { google: site.googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1016" },
  ],
};

// Applies the saved theme before the page paints. Default is light.
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`;

const sameAs = Object.values(site.socials).filter(Boolean);

// Structured data so Google understands who Vynquora is (name, logo, location, socials).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      ...(site.legalName ? { legalName: site.legalName } : {}),
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}${site.logo}` },
      email: site.email,
      telephone: site.phone,
      description: site.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: `${site.address.locality}, ${site.address.city}`,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      areaServed: "Worldwide",
      sameAs,
      contactPoint: [
        { "@type": "ContactPoint", contactType: "sales", email: site.email, telephone: site.phone, availableLanguage: ["English", "Hindi"] },
        { "@type": "ContactPoint", contactType: "partnerships", email: site.partnerEmail },
      ],
      knowsAbout: services.map((s) => s.title),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.name,
      url: site.url,
      image: `${site.url}${site.logo}`,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: `${site.address.locality}, ${site.address.city}`,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      openingHours: "Mo-Sa 10:00-19:00",
      parentOrganization: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
