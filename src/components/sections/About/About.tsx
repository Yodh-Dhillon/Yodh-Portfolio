import Image from "next/image";
import { aboutContent } from "@/data/siteConfig";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>
            <span className={styles.diamond} aria-hidden="true" />
            {aboutContent.eyebrow}
          </span>
          <h2 className={styles.heading}>{aboutContent.heading}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.photoWrap}>
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
            <p className={styles.intro}>{aboutContent.intro}</p>

            {aboutContent.paragraphs.map((para, i) => (
              <p key={i} className={styles.paragraph}>
                {para}
              </p>
            ))}

            <dl className={styles.factGrid}>
              {aboutContent.facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
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