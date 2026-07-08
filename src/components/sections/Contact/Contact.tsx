"use client";

import { useState, FormEvent } from "react";
import { siteConfig, contactContent, formspreeEndpoint } from "@/data/siteConfig";
import styles from "./Contact.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot check — bots fill every field, real users never see this one.
    const honeypot = form.elements.namedItem("company") as HTMLInputElement;
    if (honeypot && honeypot.value !== "") {
      // Silently drop the submission without hitting Formspree at all.
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
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.side}>
            <span className={styles.eyebrow}>
              <span className={styles.diamond} aria-hidden="true" />
              {contactContent.eyebrow}
            </span>
            <h2 className={styles.heading}>{contactContent.heading}</h2>
            <p className={styles.description}>{contactContent.description}</p>

            <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
              <span className={styles.icon} aria-hidden="true">✉</span>
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.icon} aria-hidden="true">⌥</span>
              GitHub — YodhDhillon21
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.icon} aria-hidden="true">in</span>
              LinkedIn
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
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Honeypot field — hidden from real users via CSS, bots fill it anyway */}
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