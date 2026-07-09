# Yodh Dhillon — Portfolio

**Personal portfolio of Yodh Dhillon — freelance web developer building fast, responsive, SEO-optimized websites with React & Next.js.**

🔗 **Live:** [yodhdhillon.in](https://yodhdhillon.in)

---

## About

This is my personal portfolio, built entirely from scratch around a custom design system I call **"Woven Code"** — inspired by Phulkari, the traditional Punjabi hand-embroidery craft. Instead of a generic dark-mode dev portfolio template, the color palette, typography, and a signature stitched "thread-line" divider between sections are all drawn from that craft, translated into a clean, modern interface.

The goal was to build something that:

- Loads fast and scores well on Core Web Vitals
- Is fully accessible and responsive across desktop, tablet, and mobile
- Reflects my actual identity and roots, not a template with my name swapped in
- Is maintainable — typed content, scoped styles, no framework bloat

---

## Features

- 🎨 **Custom design system** — "Woven Code": wine-charcoal base, turmeric gold & peacock teal accents, Fraunces/Inter/JetBrains Mono type system
- 🧵 **Signature scroll thread-line** — a stitched divider that animates in between every section
- 📊 **Weave-grid skills display** — proficiency shown as filled diamond cells instead of generic progress bars
- 🖼️ **Browser-chrome project cards** — mockup-framed project showcases
- ✉️ **Working contact form** — Formspree integration with inline success/error states and honeypot spam protection
- 🎬 **Scroll-triggered animations** — every section reveals via `IntersectionObserver`, staggered for a layered feel
- 🔍 **Full SEO setup** — dynamic sitemap, robots.txt, JSON-LD structured data, optimized metadata
- ⚡ **90+ Lighthouse scores** — mobile and desktop, Performance/Accessibility/Best Practices/SEO
- ♿ **Accessible** — semantic HTML, proper alt text, keyboard navigation, respects `prefers-reduced-motion`

---

## Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router) — React framework
- **TypeScript** — typed content and component props throughout
- **CSS Modules** — scoped, framework-free styling (no Tailwind)
- **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** — self-hosted, non-blocking font loading
- **[next/image](https://nextjs.org/docs/app/building-your-application/optimizing/images)** — automatic image optimization
- **Formspree** — contact form backend, no custom server needed

---

## Getting Started

```bash
# clone the repo
git clone https://github.com/Yodh-Dhillon/Yodh-Portfolio.git
cd Yodh-Portfolio

# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # root layout, fonts, metadata
│   ├── page.tsx              # assembles all sections + JSON-LD
│   ├── globals.css           # design tokens, base styles
│   ├── sitemap.ts            # dynamic sitemap generation
│   ├── robots.ts             # robots.txt generation
│   ├── icon.tsx               # generated favicon
│   └── apple-icon.tsx         # generated Apple touch icon
├── components/
│   ├── layout/                # Header, Footer
│   ├── sections/               # Hero, About, Skills, Projects, Contact
│   └── ui/                     # SectionDivider (thread-line signature)
└── data/
    ├── siteConfig.ts           # site identity, nav, hero/about/contact copy
    ├── skills.ts                 # skill groups and proficiency levels
    └── projects.ts                # project showcase data
```

---

## Design System — "Woven Code"

| Token | Value | Role |
|---|---|---|
| Background | `#160D0E` | Deep wine-charcoal base |
| Gold accent | `#D9A441` | Primary accent, CTAs |
| Teal accent | `#2A8C7A` | Secondary accent |
| Display font | Fraunces | Headlines |
| Body font | Inter | Body copy |
| Mono font | JetBrains Mono | Labels, stats, technical details |

Every section is separated by a `SectionDivider` — a dashed stitch-line that draws inward from both edges and "clasps" shut with a diamond marker on scroll, echoing Phulkari's running-stitch technique.

---

## Featured Projects

- **[Tana Bana](https://tana-bana-beta.vercel.app)** — a generative pattern studio producing seamless, print-ready designs rooted in Phulkari embroidery
- **[SteamVibe](https://steamvibe-yodhdhillon-project-1.vercel.app)** — a modern streaming-style website UI built with Next.js and TypeScript

---

## Author

Built by **Yodh Dhillon** — freelance web developer based in Ludhiana, Punjab, India.

- Email: yodhdhillon31@gmail.com
- GitHub: [@Yodh-Dhillon](https://github.com/Yodh-Dhillon)

---

## License

This project is open source and available for learning purposes. If you'd like to use it commercially or build on it, please reach out first.
