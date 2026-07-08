export const siteConfig = {
  name: "Yodh Dhillon",
  shortName: "YD",
  tagline: "Freelance Web Developer",
  location: "Ludhiana, Punjab, India",
  email: "yodhdhillon31@gmail.com",
  socials: {
    github: "https://github.com/YodhDhillon21",
    linkedin: "https://linkedin.com/in/yodhdhillon",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "Available for freelance work",
  headline: "I write code the way a craftsman ties a thread —",
  headlineAccent: "line by line, until it holds.",
  subhead:
    "Freelance web developer based in Punjab, India. I design and build fast, responsive, SEO-ready websites with React and Next.js for businesses, startups, and personal brands.",
  stats: [
    { value: "2+", label: "years building" },
    { value: "React", label: "Next.js" },
    { value: "100%", label: "built to ship" },
  ],
} as const;

export const aboutContent = {
  eyebrow: "About",
  heading: "Built through projects, not just a classroom",
  intro:
    "I'm Yodh Dhillon, a freelance web developer based in Punjab, India. I build modern, fast, and SEO-friendly websites for businesses, startups, and personal brands.",
  paragraphs: [
    "After finishing high school in 2020 and completing an ITI Diploma, I taught myself web development the way most of this trade actually gets learned — through real projects, documentation, and a lot of trial and error.",
    "Two years on, I specialize in building high-performance sites with React and Next.js that look sharp and help businesses grow online.",
    "Right now I'm deepening my TypeScript, MongoDB, and Three.js skills, so every new project ships a little more capable than the last.",
  ],
  facts: [
    { value: "2020", label: "Started learning web dev" },
    { value: "India", label: "Clients served, remote-first" },
    { value: "React / Next.js", label: "Primary stack" },
    { value: "Mobile-first", label: "Every layout, every time" },
  ],
} as const;

export const contactContent = {
  eyebrow: "Contact",
  heading: "Let's build something that holds together",
  description:
    "Tell me what you're building and I'll reply within a day with next steps — or reach out directly below.",
} as const;

export const formspreeEndpoint = "https://formspree.io/f/xqepggjn";