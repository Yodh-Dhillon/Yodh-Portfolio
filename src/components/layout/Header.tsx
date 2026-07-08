"use client";

import { useEffect, useState } from "react";
import { siteConfig, navLinks } from "@/data/siteConfig";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu whenever a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.row}`}>
        <a href="/" className={styles.logo} onClick={handleLinkClick}>
          <span className={styles.mark}>{siteConfig.shortName}</span>
          {siteConfig.name}
        </a>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary"
        >
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleLinkClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.cta}>
          Hire Me
        </a>

        <button
          className={styles.burger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? styles.burgerOpen : ""} />
        </button>
      </div>
    </header>
  );
}