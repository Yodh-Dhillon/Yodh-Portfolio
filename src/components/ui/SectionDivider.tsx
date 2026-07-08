"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SectionDivider.module.css";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.divider} aria-hidden="true">
      <svg
        className={styles.line}
        viewBox="0 0 200 24"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="12"
          x2="86"
          y2="12"
          className={`${styles.stitch} ${inView ? styles.drawn : ""}`}
        />
        <line
          x1="114"
          y1="12"
          x2="200"
          y2="12"
          className={`${styles.stitch} ${styles.stitchRight} ${
            inView ? styles.drawn : ""
          }`}
        />
      </svg>
      <span
        className={`${styles.diamond} ${inView ? styles.diamondPop : ""}`}
      />
    </div>
  );
}