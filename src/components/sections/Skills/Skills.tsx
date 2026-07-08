import { skillGroups, learningNow, type Skill } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.sectionHead}>
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

        <div className={styles.groups}>
          {skillGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.learning}>
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

function SkillRow({ skill }: { skill: Skill }) {
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
          />
        ))}
      </span>
    </li>
  );
}