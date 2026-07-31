# Sathuragiri Decoration — Website

A premium, mobile-first website for **Sathuragiri Decoration**, a wedding & event
decoration business in Rajasingamangalam, Ramanathapuram, Tamil Nadu.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

## Features

- Animated hero with floating petals, gradient blobs and WhatsApp/Call/Packages CTAs
- Sticky header + **mobile bottom navigation bar** (SPA-style, glassmorphism)
- Floating WhatsApp / Call / Scroll-to-top buttons
- Animated stats counter (React CountUp)
- Filterable services grid (12+ services) with per-service WhatsApp booking
- 4-tier pricing packages (Silver / Gold / Diamond / Royal)
- Masonry gallery with category filter + lightbox
- Testimonials slider, FAQ accordion, About/timeline section
- Contact form (React Hook Form) with toast confirmation that redirects to WhatsApp
  with the enquiry pre-filled
- Embedded Google Map, JSON-LD local business schema, Open Graph/Twitter metadata,
  `sitemap.xml`, `robots.txt`, PWA `manifest.json`
- Fully responsive, keyboard-focus visible, respects reduced-motion

## Business info used

- **Name:** Sathuragiri Decoration
- **Address:** Near SMA Mahal, D.D Main Road, R.S. Mangalam, Rajasingamangalam,
  Ramanathapuram, Tamil Nadu – 623525
- **WhatsApp / Phone:** +91 73739 99916

All of this (plus services, prices, testimonials, FAQ copy) lives in one file —
**`src/data/site.ts`** — so you can edit the whole site's content without touching
any component.

> Images for services/gallery currently use free Unsplash stock photos as
> placeholders (per the brief). Swap them for your own event photos in
> `src/data/site.ts` and `public/images/` whenever you're ready.

## Project structure

```
src/
  app/
    layout.tsx        Fonts, SEO metadata, JSON-LD, wraps every page
    page.tsx           Assembles all homepage sections
    globals.css        Brand colors / design tokens (Tailwind v4 @theme)
    robots.ts           /robots.txt
    sitemap.ts           /sitemap.xml
  components/
    Header.tsx, MobileBottomNav.tsx, FloatingButtons.tsx, Footer.tsx
    Hero.tsx, Stats.tsx, Services.tsx, WhyChooseUs.tsx, Packages.tsx,
    Gallery.tsx, Testimonials.tsx, About.tsx, FAQ.tsx, Contact.tsx
  data/
    site.ts            All business info, services, packages, gallery, FAQ, testimonials
public/
  images/logo.png       Your uploaded RS Sathuragiri Decoration logo
  manifest.json          PWA manifest
```

---

## 1. Run on your local PC (localhost)

Requires [Node.js 20+](https://nodejs.org) installed.

```bash
# 1. Unzip the project and open the folder
cd sathuragiri-decoration

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser. Edit any file in `src/` and the
page auto-refreshes.

To test the optimized production build locally:

```bash
npm run build
npm start
```

---

## 2. Push the project to GitHub

```bash
cd sathuragiri-decoration
git init
git add .
git commit -m "Initial commit — Sathuragiri Decoration website"

# Create a new empty repo on github.com first (no README/license), then:
git branch -M main
git remote add origin https://github.com/<your-username>/sathuragiri-decoration.git
git push -u origin main
```

(`node_modules` and `.next` are already excluded via `.gitignore`, so the push
stays small.)

---

## 3. Deploy to Vercel (step by step)

**Option A — Vercel website (easiest, no CLI needed)**

1. Go to **https://vercel.com** and sign in (you can sign in directly with your
   GitHub account).
2. Click **"Add New..." → "Project"**.
3. Select the **`sathuragiri-decoration`** GitHub repo you just pushed and click
   **Import**.
4. Vercel auto-detects Next.js — leave all build settings as default
   (Build Command: `next build`, Output: `.next`).
5. Click **Deploy**. In about a minute you'll get a live URL like
   `sathuragiri-decoration.vercel.app`.
6. To use your own domain (e.g. `sathuragiridecoration.in`): open the project →
   **Settings → Domains** → add your domain → update the DNS records it shows you
   at your domain registrar.

**Option B — Vercel CLI**

```bash
npm i -g vercel
cd sathuragiri-decoration
vercel login
vercel          # first deploy, follow the prompts
vercel --prod   # promote to production URL
```

Every future `git push` to `main` will auto-deploy a new version once the
GitHub repo is connected to the Vercel project.

---

## Editing content

- **Phone / WhatsApp / address / tagline** → `src/data/site.ts` → `business` object
- **Services & prices** → `src/data/site.ts` → `services` array
- **Packages** → `src/data/site.ts` → `packages` array
- **Gallery photos** → `src/data/site.ts` → `gallery` array (swap Unsplash URLs
  for your own images placed in `public/images/`)
- **Testimonials / FAQ** → same file, `testimonials` and `faqs` arrays
- **Brand colors** → `src/app/globals.css` → the `:root` custom properties
  (`--color-rose`, `--color-amber`, `--color-leaf`, `--color-royal`, `--color-gold`)

## Next steps (optional, not included yet)

- Wire the contact form to a real backend (EmailJS, a serverless API route, or a
  webhook) — it currently redirects the enquiry straight to WhatsApp
- Replace Unsplash placeholder photos with your own event photography
- Add individual pages per service (this build is a single, fast landing page
  with anchor sections, matching the "SPA" requirement)
- Hook up an admin panel / CMS for services, gallery and packages
