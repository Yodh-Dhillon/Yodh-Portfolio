"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { siteConfig, contactContent, formspreeEndpoint } from "@/data/siteConfig";
import styles from "./Contact.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = form.elements.namedItem("company") as HTMLInputElement;
    if (honeypot && honeypot.value !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("loading");
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.contact} ${inView ? styles.inView : ""}`}
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.side} ${styles.reveal}`}>
            <span className={styles.eyebrow}>
              <span className={styles.diamond} aria-hidden="true" />
              {contactContent.eyebrow}
            </span>
            <h2 className={styles.heading}>{contactContent.heading}</h2>
            <p className={styles.description}>{contactContent.description}</p>

            <a
              href={`mailto:${siteConfig.email}`}
              className={`${styles.contactLink} ${styles.reveal}`}
              style={{ transitionDelay: "0.15s" }}
            >
              <span className={styles.icon} aria-hidden="true">✉</span>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactLink} ${styles.reveal}`}
              style={{ transitionDelay: "0.25s" }}
            >
              <span className={styles.icon} aria-hidden="true">⌥</span>
              GitHub — Yodh-Dhillon
            </a>
          </div>

          {status === "success" ? (
            <div className={styles.successCard} role="status">
              <span className={styles.successIcon} aria-hidden="true">✦</span>
              <h3>Message sent</h3>
              <p>
                Thanks for reaching out — I&apos;ll get back to you within a
                day. The thread&apos;s in my hands now.
              </p>
              <button
                type="button"
                className={styles.resetLink}
                onClick={() => setStatus("idle")}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className={`${styles.form} ${styles.reveal}`}
              style={{ transitionDelay: "0.2s" }}
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className={styles.honeypot}
                aria-hidden="true"
              />

              <div className={styles.field}>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="details">Project details</label>
                <textarea id="details" name="details" required />
              </div>

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send Project Inquiry →"}
              </button>

              {status === "error" && (
                <p className={styles.errorText} role="alert">
                  Something went wrong — please try again, or email me
                  directly at {siteConfig.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}