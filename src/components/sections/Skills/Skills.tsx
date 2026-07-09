"use client";

import { useEffect, useRef, useState } from "react";
import { skillGroups, learningNow, type Skill } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className={`${styles.skills} ${inView ? styles.inView : ""}`}
    >
      <div className="container">
        <div className={`${styles.sectionHead} ${styles.reveal}`}>
          <span className={styles.eyebrow}>
            <span className={styles.diamond} aria-hidden="true" />
            Skills
          </span>
          <h2 className={styles.heading}>The stack behind every build</h2>
          <p className={styles.description}>
            Frontend-first, with enough backend and tooling to ship a full
            product — not just a page. Each cell woven in shows depth of
            experience.
          </p>
        </div>

        <div className={`${styles.groups} ${styles.reveal}`}>
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={styles.group}
              style={{ transitionDelay: `${0.1 + gi * 0.12}s` }}
            >
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill, si) => (
                  <SkillRow
                    key={skill.name}
                    skill={skill}
                    delay={0.2 + gi * 0.12 + si * 0.05}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`${styles.learning} ${styles.reveal}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <span className={styles.learningLabel}>Currently weaving in →</span>
          <div className={styles.chipRow}>
            {learningNow.map((item) => (
              <span key={item} className={styles.chip}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillRow({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <li className={styles.skillRow}>
      <span className={styles.skillName}>{skill.name}</span>
      <span className={styles.cells} aria-label={`Level ${skill.level} of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`${styles.cell} ${
              i < skill.level ? styles.cellFilled : ""
            }`}
            style={
              i < skill.level
                ? { transitionDelay: `${delay + i * 0.04}s` }
                : undefined
            }
          />
        ))}
      </span>
    </li>
  );
}