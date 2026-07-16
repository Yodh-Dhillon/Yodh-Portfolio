export interface Project {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  url: string; // shown in the mock browser bar
}

export const projects: Project[] = [
  {
    title: "Maison Dhillon — Fashion E-Commerce Platform",
    description:
      "A full-stack fashion e-commerce platform blending ethnic and western style under one brand. Custom design system with light/dark theming, a mobile coverflow product carousel with proximity-based blur effects, URL-driven filtering/sorting/pagination for SEO, and a complete page suite from shop to checkout-ready auth flows.",
    image: "/images/maison-dhillon-project.png",
    imageAlt: "Maison Dhillon fashion e-commerce homepage interface",
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDB", "E-Commerce"],
    liveUrl: "https://maison-dhillon.vercel.app/",
    repoUrl: "https://github.com/Yodh-Dhillon/Maison-Dhillon",
    url: "maison-dhillon.vercel.app",
  },
  {
    title: "Tana Bana — Generative Pattern Studio",
    description:
      "A generative pattern engine that weaves seamless, print-ready designs rooted in traditional Punjabi Phulkari embroidery. Deterministic seed-based generation, live symmetry and palette controls, and dual SVG/high-res PNG export built entirely from scratch.",
    image: "/images/tana-bana-project.png",
    imageAlt: "Tana Bana generative Phulkari pattern studio interface",
    tags: ["Next.js", "TypeScript", "Generative Design", "SVG"],
    liveUrl: "https://tana-bana-beta.vercel.app/",
    repoUrl: "https://github.com/Yodh-Dhillon/Tana-Bana",
    url: "tana-bana-beta.vercel.app",
  },
  {
    title: "SteamVibe — Website UI",
    description:
      "A modern streaming-style website built with Next.js and TypeScript — responsive layouts, interactive UI components, and a frontend architecture built around performance from the first commit.",
    image: "/images/streamvide-project-1.png",
    imageAlt: "SteamVibe streaming website interface built with Next.js",
    tags: ["Next.js", "TypeScript", "Frontend Development"],
    liveUrl: "https://steamvibe-yodhdhillon-project-1.vercel.app/",
    repoUrl: "https://github.com/YodhDhillon21/SteamVibe",
    url: "steamvibe-yodhdhillon-project-1.vercel.app",
  },
];