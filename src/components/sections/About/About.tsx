"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutContent } from "@/data/siteConfig";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.about} ${inView ? styles.inView : ""}`}
    >
      <div className="container">
        <div className={`${styles.sectionHead} ${styles.reveal}`}>
          <span className={styles.eyebrow}>
            <span className={styles.diamond} aria-hidden="true" />
            {aboutContent.eyebrow}
          </span>
          <h2 className={styles.heading}>{aboutContent.heading}</h2>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.photoWrap} ${styles.reveal}`}>
            <Image
              src="/images/yodh.png"
              alt="Yodh Dhillon, freelance web developer"
              width={420}
              height={520}
              className={styles.photo}
              priority={false}
            />
            <span className={styles.photoFrame} aria-hidden="true" />
          </div>

          <div className={styles.body}>
            <p className={`${styles.intro} ${styles.reveal}`}>
              {aboutContent.intro}
            </p>

            {aboutContent.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`${styles.paragraph} ${styles.reveal}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                {para}
              </p>
            ))}

            <dl className={`${styles.factGrid} ${styles.reveal}`}>
              {aboutContent.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={styles.fact}
                  style={{ transitionDelay: `${0.15 + i * 0.08}s` }}
                >
                  <dt className={styles.factValue}>{fact.value}</dt>
                  <dd className={styles.factLabel}>{fact.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}