import {
  LuArrowRight,
  LuArrowUpRight,
  LuDownload,
  LuGithub,
  LuLinkedin,
  LuPaperclip,
} from "react-icons/lu";

import styles from "@/components/sections/Contact.module.css";
import { contactSectionContent } from "@/content/portfolio";

const contactHeadingId = "contact-heading";
const socialIcons = {
  GitHub: LuGithub,
  LinkedIn: LuLinkedin,
} as const;

export function Contact() {
  const {
    eyebrow,
    heading,
    supportingText,
    conversationLabel,
    email,
    availability,
    links,
    resumeCallout,
  } = contactSectionContent;
  const socialLinks = links.filter((link) => link.kind === "external");
  const resumeLink = links.find((link) => link.kind === "download");

  return (
    <section
      id="contact"
      aria-labelledby={contactHeadingId}
      className="scroll-mt-18 bg-transparent px-page-gutter"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.introduction}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" className={styles.eyebrowRule} />
              {eyebrow}
            </p>

            <h2 id={contactHeadingId} className={styles.heading}>
              {heading}
            </h2>

            <p className={styles.supportingText}>{supportingText}</p>

            <svg
              viewBox="0 0 190 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className={styles.conversationArrow}
            >
              <path d="M4 10c15 42 78 50 142 25" />
              <path d="m135 25 13 9-8 14" />
            </svg>
          </div>

          <div className={styles.actions}>
            <p className={styles.conversationLabel}>{conversationLabel}</p>

            <a href={`mailto:${email}`} className={styles.emailLink}>
              <span>{email}</span>
              <LuArrowRight aria-hidden="true" focusable="false" />
            </a>

            <p className={styles.availability}>
              <span aria-hidden="true" className={styles.availabilityDot} />
              {availability}
            </p>

            <ul className={styles.links}>
              {socialLinks.map((link) => {
                const SocialIcon = socialIcons[link.label];

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.linkLabel}>
                        {SocialIcon ? (
                          <SocialIcon aria-hidden="true" focusable="false" />
                        ) : null}
                        <span>
                          {link.label}
                          <span className="sr-only">
                            {" "}(opens in a new tab)
                          </span>
                        </span>
                      </span>
                      <LuArrowUpRight aria-hidden="true" focusable="false" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {resumeLink ? (
              <a
                href={resumeLink.href}
                download
                aria-label={resumeCallout.accessibleLabel}
                className={styles.resumeCallout}
              >
                <span aria-hidden="true" className={styles.resumeAccent} />

                <span className={styles.resumeContent}>
                  <span className={styles.resumeEyebrow}>
                    <LuPaperclip
                      aria-hidden="true"
                      focusable="false"
                      strokeWidth={1.25}
                      className={styles.resumePaperclip}
                    />
                    <span>{resumeCallout.eyebrow}</span>
                  </span>

                  <span className={styles.resumeTitle}>
                    {resumeCallout.title}
                  </span>

                  <span className={styles.resumeMeta}>
                    {resumeCallout.metadata}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className={styles.resumeDownloadIcon}
                >
                  <LuDownload aria-hidden="true" focusable="false" />
                </span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
