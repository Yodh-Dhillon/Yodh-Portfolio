import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <>
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.sectionHead}>
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
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
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
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
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

        <div className={styles.moreSoon}>
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
    </>
  );
}