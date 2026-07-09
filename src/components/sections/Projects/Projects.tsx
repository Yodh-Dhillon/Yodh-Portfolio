"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className={`${styles.projects} ${inView ? styles.inView : ""}`}
    >
      <div className="container">
        <div className={`${styles.sectionHead} ${styles.reveal}`}>
          <span className={styles.eyebrow}>
            <span className={styles.diamond} aria-hidden="true" />
            Projects
          </span>
          <h2 className={styles.heading}>Recent builds & case studies</h2>
          <p className={styles.description}>
            Real interfaces, built with production-grade tooling — not
            templates with the logo swapped out.
          </p>
        </div>

        <div className={styles.list}>
          {projects.map((project, pi) => (
            <article
              key={project.title}
              className={`${styles.card} ${styles.reveal}`}
              style={{ transitionDelay: `${0.1 + pi * 0.15}s` }}
            >
              <div className={styles.frame}>
                <div className={styles.chrome}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.urlPill}>{project.url}</span>
                </div>
                <div className={styles.imageWrap}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 860px) 100vw, 55vw"
                  />
                </div>
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.text}>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`${styles.tag} ${styles.tagReveal}`}
                      style={{ transitionDelay: `${0.35 + pi * 0.15 + ti * 0.06}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryLink}
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryLink}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`${styles.moreSoon} ${styles.reveal}`}
          style={{ transitionDelay: `${0.2 + projects.length * 0.15}s` }}
        >
          <span>
            More case studies are in progress — next up is a full client
            build with a before/after performance breakdown.
          </span>
          <a href="#contact" className={styles.moreSoonLink}>
            Have a project first?
          </a>
        </div>
      </div>
    </section>
  );
}