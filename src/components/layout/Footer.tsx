import { siteConfig, navLinks } from "@/data/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <a href="#home" className={styles.logo}>
            <span className={styles.mark}>{siteConfig.shortName}</span>
            {siteConfig.name}
          </a>

          <nav aria-label="Footer">
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.socials}>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialIcon}
            >
              ⌥
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialIcon}
            >
              in
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className={styles.socialIcon}
            >
              ✉
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {siteConfig.name} — {siteConfig.tagline},{" "}
            {siteConfig.location}.
          </span>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}