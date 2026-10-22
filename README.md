# Vynquora website

Next.js 16 · React 19 · Tailwind CSS 4.

## Edit the content
Almost everything (company details, emails, socials, services, projects, FAQ) lives in **`lib/site.ts`**.

- **Logo:** put your file at `public/vynquora_logo.png` (transparent PNG, 512×512 or larger).
  It is used in the header, footer, browser tab and link-share image.
  If the logo image already contains the word "Vynquora", set `logoHasName: true` in `lib/site.ts`.
- **Legal name:** set `legalName` in `lib/site.ts` once the registered name is confirmed (footer, About, Privacy, Terms).
- **Socials:** `socials` in `lib/site.ts` (LinkedIn and X are set).
- **Google Search Console:** paste the verification code into `googleVerification`.

## Human-in-the-loop PDF
The "Read more (PDF)" button on the homepage opens `public/docs/human-in-the-loop.pdf`.
Put your PDF there with exactly that name. The text of the section is `hitl` and `otherPrinciples` in `lib/site.ts`.

## Pages
`/` home (overview) · `/services` · `/work` and `/work/<slug>` · `/how-we-work` · `/about` · `/contact` (form + FAQ) · `/privacy` · `/terms` · custom 404.
Header and footer are in `app/layout.tsx`, so every page shares them. Menu links are `navLinks` in `lib/site.ts`.
SEO files are generated automatically: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`.

## Add a project
1. Screenshots in `public/work/` (1600×1000 `.webp` works best).
2. Copy the commented example at the end of `projects` in `lib/site.ts`.
3. `featured: true` shows it on the homepage (first 3 only).

## Contact form (Web3Forms)
1. Go to https://web3forms.com → enter `info@vynquora.com` → you get an access key by email.
2. Vercel → Project → Settings → Environment Variables → add `NEXT_PUBLIC_WEB3FORMS_KEY` = the key.
3. Redeploy (the key is read at build time, so a new deploy is needed after adding or changing it). Until the key is set, the form asks visitors to email or WhatsApp instead.

## Run locally
```bash
npm install
npm run dev     # http://localhost:3000
```
For local testing of the form, copy `.env.example` to `.env.local` and add the key.

## Deploy (Vercel)
Push to GitHub → Vercel → import the repo → Deploy. Settings → Domains → add `vynquora.com`.
