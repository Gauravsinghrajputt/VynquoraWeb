# Vynquora website

Company website built with Next.js 16, React 19, Tailwind CSS 4 and the Geist font.

## Edit the content

Almost everything (company details, services, projects, FAQ, stats, social links)
lives in **`lib/site.ts`**. Change the text there and redeploy.

- Social links: replace `"#"` with your profile URLs (or `""` to hide an icon).
- Kriti live link: set `liveUrl` in the Kriti project entry.
- Project screenshots: `public/work/`.
- Logo: `components/Logo.tsx` (site) and `app/icon.svg` (browser tab).

## Add a project

1. Save screenshots in `public/work/` (1600×1000 `.webp` or `.png` works best).
2. In `lib/site.ts`, copy the commented example at the end of `projects` and fill it in.
3. `featured: true` shows it on the homepage (first 3 only). Every project appears on `/work`
   and gets its own page at `/work/<slug>` automatically.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

## Contact form

1. Get a free access key at https://web3forms.com (enter the company email).
2. Add it as `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel → Project → Settings → Environment Variables, then redeploy.

Without the key the form opens the visitor's email app instead, so it still works.

## Deploy (Vercel)

Push to GitHub → Vercel → Add New Project → import the repo → Deploy.
Then Settings → Domains → add `vynquora.com` and follow the DNS steps shown.
