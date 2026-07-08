import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Skills from "@/components/sections/Skills/Skills";
import Projects from "@/components/sections/Projects/Projects";
import Contact from "@/components/sections/Contact/Contact";
import SectionDivider from "@/components/ui/SectionDivider";
import { siteConfig } from "@/data/siteConfig";
import styles from "./page.module.css";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Freelance Web Developer",
    url: "https://yodhdhillon.in",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ludhiana",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    knowsAbout: ["React", "Next.js", "JavaScript", "Web Development", "SEO"],
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </main>
  );
}