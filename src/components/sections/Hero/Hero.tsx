import { heroContent } from "@/data/siteConfig";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span
            className={`${styles.eyebrow} ${styles.animate}`}
            style={{ animationDelay: "0.05s" }}
          >
            <span className={styles.diamond} aria-hidden="true" />
            {heroContent.eyebrow}
          </span>

          <h1
            className={`${styles.headline} ${styles.animate}`}
            style={{ animationDelay: "0.15s" }}
          >
            {heroContent.headline}{" "}
            <em className={styles.accent}>{heroContent.headlineAccent}</em>
          </h1>

          <p
            className={`${styles.subhead} ${styles.animate}`}
            style={{ animationDelay: "0.28s" }}
          >
            {heroContent.subhead}
          </p>

          <div
            className={`${styles.actions} ${styles.animate}`}
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#projects" className={styles.btnPrimary}>
              View My Work
            </a>
            <a href="#contact" className={styles.btnGhost}>
              Start a Project
            </a>
          </div>

          <dl
            className={`${styles.statRow} ${styles.animate}`}
            style={{ animationDelay: "0.52s" }}
          >
            {heroContent.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statValue}>{stat.value}</dt>
                <dd className={styles.statLabel}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <WeavePattern />
        </div>
      </div>
    </section>
  );
}

function WeavePattern() {
  // Decorative diamond weave — echoes the Phulkari-inspired
  // pattern logic used later in the Skills section.
  const rows = 5;
  const cols = 5;
  const cells = [];
  let seed = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      seed = (seed * 9301 + 49297) % 233280;
      const filled = seed / 233280 > 0.45;
      cells.push({ r, c, filled });
    }
  }

  return (
    <svg viewBox="0 0 300 300" className={styles.weaveSvg} aria-hidden="true">
      {cells.map(({ r, c, filled }, i) => {
        const cx = 30 + c * 60;
        const cy = 30 + r * 60;
        const size = 18;
        const color =
          (r + c) % 3 === 0 ? "var(--color-teal)" : "var(--color-gold)";

        return (
          <rect
            key={`${r}-${c}`}
            x={cx - size / 2}
            y={cy - size / 2}
            width={size}
            height={size}
            transform={`rotate(45 ${cx} ${cy})`}
            fill={filled ? color : "transparent"}
            stroke={filled ? "transparent" : "var(--color-border-strong)"}
            strokeWidth="1"
            opacity={filled ? 0.85 : 0.5}
            className={filled ? styles.cellFilled : undefined}
            style={filled ? { animationDelay: `${(i % 6) * 0.3}s` } : undefined}
          />
        );
      })}
    </svg>
  );
}