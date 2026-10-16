// ─────────────────────────────────────────────────────────────
//  All website text and links live here. Edit this file to update
//  the site — no need to touch the page code.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Vynquora",
  // Registered company name (footer copyright, About, Privacy, Terms).
  legalName: "Vynquora Global Services",
  domain: "vynquora.com",
  url: "https://vynquora.com",
  tagline: "Software development company in Bengaluru",
  description:
    "Vynquora is a software development company in Bengaluru that designs, builds and supports web apps, mobile apps, AI features and cloud infrastructure for businesses.",

  // Logo file in /public. Put your logo there with exactly this name.
  logo: "/vynquora_logo.png",
  // true = the logo image already contains the word "Vynquora",
  // so the text next to it is hidden.
  logoHasName: false,

  email: "info@vynquora.com",          // enquiries, proposals, contact form
  partnerEmail: "team@vynquora.com",   // partnerships & vendor onboarding
  phone: "+91 97416 99033",
  // WhatsApp number: country code + number, digits only
  whatsapp: "919741699033",
  hours: "Mon to Sat, 10am to 7pm IST",

  address: {
    locality: "Koramangala 5th Block",
    city: "Bengaluru",
    region: "Karnataka",
    country: "IN",
    countryName: "India",
  },
  location: "Working with clients in India and worldwide",

  // Social profiles. Leave "" to hide an icon.
  socials: {
    linkedin: "https://www.linkedin.com/company/vynquora",
    x: "https://x.com/vynquora",
  },
  xHandle: "@vynquora",

  // Paste the code from Google Search Console → HTML tag method
  // (only the content="..." value). Leave "" if not using it.
  googleVerification: "",
};

// Keep these honest — every one should hold up if a client asks.
export const stats = [
  { value: "10+", label: "Products shipped for clients and ourselves" },
  { value: "24h", label: "Reply to every enquiry" },
  { value: "1 week", label: "From first call to a fixed-scope proposal" },
  { value: "30 days", label: "Free support after every launch" },
];

export const services = [
  {
    icon: "app",
    title: "Web apps & dashboards",
    body: "Admin panels, customer portals, billing and booking systems that replace spreadsheets and WhatsApp groups.",
    tags: ["React", "Next.js", "Node.js", "Python"],
  },
  {
    icon: "ai",
    title: "AI features & chatbots",
    body: "Assistants that answer your customers, search your documents, or write and design content, built into your product.",
    tags: ["OpenAI", "Gemini", "RAG", "Agents"],
  },
  {
    icon: "phone",
    title: "Mobile apps",
    body: "iOS and Android from one codebase, so you launch on both stores without paying for two apps.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: "globe",
    title: "Business websites",
    body: "Fast, search-friendly websites and landing pages that turn visitors into enquiries.",
    tags: ["Next.js", "SEO", "CMS"],
  },
  {
    icon: "cloud",
    title: "Cloud, DevOps & hosting",
    body: "Automated deployments, monitoring, backups and security on AWS, Vercel or your own servers.",
    tags: ["AWS", "Docker", "CI/CD", "Terraform"],
  },
  {
    icon: "search",
    title: "Code audits & tech guidance",
    body: "A clear second opinion on your codebase, architecture or a vendor's quote, written in plain language.",
    tags: ["Reviews", "Architecture", "Planning"],
  },
];

export type Project = {
  slug: string;            // used in the URL: /work/<slug>
  name: string;
  category: string;        // shown as a filter on the Work page
  kind: string;            // one-line description
  summary: string;         // the problem and what we did
  built: string[];         // key features
  stack: string[];
  image: string;           // main screenshot (1600x1000 works best) in /public/work
  imageAlt: string;
  gallery?: { src: string; alt: string }[]; // extra screenshots for the detail page
  liveUrl?: string;        // leave "" if the project isn't public
  featured?: boolean;      // true = also shown on the homepage (first 3)
};

// ─── HOW TO ADD A PROJECT ───────────────────────────────────
// 1. Put screenshots in /public/work (e.g. /public/work/shopkart-home.webp)
// 2. Copy one block below, paste it at the end, and change the text.
// 3. Give it a unique slug (lowercase, no spaces). The page /work/<slug>
//    is created automatically.
// ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    slug: "societyos",
    name: "SocietyOS",
    category: "Web platform",
    kind: "Property management platform for a real-estate client",
    summary:
      "Housing societies were collecting maintenance over WhatsApp and tracking visitors in paper registers. We built one platform for the committee, the residents and the security gate.",
    built: [
      "Automatic monthly invoices with direct UPI payment and PDF receipts",
      "Gate console for guards with QR visitor passes and delivery logs",
      "Notices, complaints, staff records and an SOS alert button",
      "Separate apps for admins, residents, tenants and guards",
    ],
    stack: ["React", "FastAPI", "MongoDB", "Cloudflare R2", "Vercel", "Render"],
    image: "/work/societyos-admin.webp",
    imageAlt: "SocietyOS admin dashboard showing maintenance collected, outstanding dues and collection status",
    gallery: [
      { src: "/work/societyos-guard.webp", alt: "SocietyOS gate console where guards check visitors in and out" },
    ],
    liveUrl: "https://society-os-fronted.vercel.app",
    featured: true,
  },
  {
    slug: "kriti",
    name: "Kriti",
    category: "AI product",
    kind: "AI studio, our in-house product",
    summary:
      "A ChatGPT-style assistant that writes, explains and creates images, with saved chats, a community gallery and paid credits.",
    built: [
      "AI chat that remembers the conversation, powered by Google Gemini",
      "Text-to-image generation with cloud storage",
      "Credit plans and online checkout with Stripe",
      "Light and dark themes, works on any screen size",
    ],
    stack: ["React", "Node.js", "MongoDB", "Gemini", "Stripe", "Vercel"],
    image: "/work/kriti-chat.webp",
    imageAlt: "Kriti AI chat screen with a drafted payment reminder",
    gallery: [
      { src: "/work/kriti-home.webp", alt: "Kriti home screen with ready-made prompts" },
      { src: "/work/kriti-credits.webp", alt: "Kriti credit plans page" },
    ],
    liveUrl: "https://kriti-ai-web-kappa.vercel.app",
    featured: true,
  },
  {
    slug: "data-verification",
    name: "Large-scale Data Verification System",
    category: "Automation",
    kind: "Automation platform that checks thousands of records a day",
    summary:
      "A research team was checking thousands of records a day by hand against strict quality rules. We built a system that runs the checks automatically and clears the clear-cut cases on its own. Only borderline cases reach a person, on a simple one-click review screen.",
    built: [
      "Automatic rule checks that handle most records with no human effort",
      "Fast review screen with the quality checklist built in",
      "Live admin dashboard: who is online, idle or working, and today's output",
      "Pause and assign controls, activity logs and daily Excel reports",
    ],
    stack: ["React", "Supabase", "Browser automation", "Vercel"],
    image: "/work/verify-admin.webp",
    imageAlt: "Admin dashboard showing reviewers, queue size and records approved today",
    gallery: [
      { src: "/work/verify-review.webp", alt: "One-click review screen with the quality checklist" },
    ],
    liveUrl: "", // internal tool: demo on request
    featured: true,
  },
  {
    slug: "depms",
    name: "DEPMS",
    category: "Business software",
    kind: "Performance management system that replaced Excel tracking",
    summary:
      "Daily targets, hourly output and attendance for a whole operations team were tracked in heavy Excel sheets full of formulas. DEPMS moves all of it into one app: employees log their work hour by hour, and every total, target and ranking updates by itself.",
    built: [
      "Separate dashboards for admins, team leaders and employees",
      "Hourly work entry with live progress against the daily target",
      "Automatic monthly totals, achievement % and top-performer rankings",
      "Teams, targets, attendance, reports and a full audit log",
      "Installs on the phone like an app, straight from the browser",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    image: "/work/depms-entry.webp",
    imageAlt: "DEPMS daily entry screen with hourly output and progress against the daily target",
    gallery: [
      { src: "/work/depms-admin.webp", alt: "DEPMS organisation dashboard for admins" },
    ],
    liveUrl: "https://depms.vercel.app",
    featured: false,
  },
  {
    slug: "mini-store",
    name: "Mini Store",
    category: "E-commerce",
    kind: "Online store with catalogue, cart and checkout",
    summary:
      "A fast, clean storefront we use as the starting point for e-commerce builds. It covers the full shopping journey, from browsing categories to checkout, and can be branded for any shop.",
    built: [
      "Product catalogue with categories, search and price sorting",
      "Product pages with stock labels like \"Only 4 left\"",
      "Cart and guest checkout, with free-delivery threshold and returns info",
      "Prices in rupees, mobile-friendly and accessible",
    ],
    stack: ["React", "Vercel"],
    image: "/work/ministore-home.webp",
    imageAlt: "Mini Store home page with featured products",
    liveUrl: "https://ecommerce-platform-nu-dun.vercel.app",
    featured: false,
  },
  // {
  //   slug: "new-project",
  //   name: "Project name",
  //   category: "Web platform",          // or "AI product", "Mobile app", "Website", "Dashboard"
  //   kind: "What it is, in one line",
  //   summary: "The problem the client had, and what we built.",
  //   built: ["Feature one", "Feature two", "Feature three"],
  //   stack: ["React", "Node.js"],
  //   image: "/work/new-project.webp",
  //   imageAlt: "Describe the screenshot",
  //   gallery: [],
  //   liveUrl: "",
  //   featured: false,
  // },
];

export const process = [
  {
    title: "Free discovery call",
    body: "30 minutes to understand your business and what you need. We sign an NDA first if you want one.",
  },
  {
    title: "Fixed-scope proposal",
    body: "Within a week: what we'll build, the timeline, and a fixed price. No hourly surprises.",
  },
  {
    title: "Design & build",
    body: "You see working software every week and can change direction early, not after launch.",
  },
  {
    title: "Launch & support",
    body: "We deploy, train your team and fix anything that comes up for 30 days, free.",
  },
];

export const promises = [
  {
    title: "Talk to the engineers",
    body: "No account managers in between. The people on your calls are the people writing your code.",
  },
  {
    title: "You own everything",
    body: "Code, designs, accounts and data are yours from day one, in your own GitHub and cloud.",
  },
  {
    title: "Fixed scope, fixed price",
    body: "We agree on what gets built before we start. Changes are quoted up front.",
  },
  {
    title: "NDA by default",
    body: "Your idea stays yours. We sign before the first detailed conversation.",
  },
];

export const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
  "React Native", "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker",
  "Vercel", "OpenAI", "Gemini", "Stripe", "Razorpay",
];

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope. A business website usually takes a few weeks; a custom web app or dashboard takes one to three months. After a free call we send a fixed price, so you know the full cost before any work starts.",
  },
  {
    q: "How long until we can launch?",
    a: "Websites in two to four weeks. Most apps launch a first version in six to ten weeks, and we keep improving it with you after that.",
  },
  {
    q: "Will we own the code?",
    a: "Yes. Everything is built in your own GitHub and cloud accounts, and full ownership is written into the contract.",
  },
  {
    q: "Can you work on our existing app?",
    a: "Yes. We start with a short code review, tell you honestly what's working and what isn't, and then fix or extend it.",
  },
  {
    q: "Do you work as a vendor or partner for larger companies?",
    a: "Yes. We sign NDAs and vendor agreements, work within your security and access rules, and give you one point of contact who is also an engineer on the project. Write to us at team@vynquora.com for partnership or vendor onboarding.",
  },
  {
    q: "What happens after launch?",
    a: "You get 30 days of free support. After that, you can choose a monthly maintenance plan or call us only when you need something.",
  },
];

export const projectTypes = [
  "Web app or dashboard",
  "AI feature or chatbot",
  "Mobile app",
  "Website",
  "Cloud / DevOps",
  "Something else",
];

// Optional field on the contact form. Kept neutral on purpose.
export const timelines = [
  "As soon as possible",
  "In 1–3 months",
  "Just exploring",
];