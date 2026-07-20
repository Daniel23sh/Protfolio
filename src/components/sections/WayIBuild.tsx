import type { ReactNode } from "react";

import styles from "@/components/sections/WayIBuild.module.css";
import { wayIBuildContent } from "@/content/portfolio";
import type { ProcessIcon } from "@/types/portfolio";

const wayIBuildHeadingId = "way-i-build-heading";

const processIcons = {
  understand: (
    <>
      <path d="M27.5 15.3C27.5 21.4 22.4 26 15.9 26c-1.8 0-3.5-.4-5.1-1.1L4.5 27l1.7-5.3A10.3 10.3 0 0 1 4.5 16C4.5 9.7 9.6 5 16 5s11.5 4.2 11.5 10.3Z" />
      <circle cx="11" cy="16" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="21" cy="16" r="0.65" fill="currentColor" stroke="none" />
    </>
  ),
  architect: (
    <>
      <rect x="5" y="4" width="22" height="7" rx="0.75" />
      <rect x="5" y="15" width="9" height="13" rx="0.75" />
      <rect x="18" y="15" width="9" height="5" rx="0.75" />
      <rect x="18" y="23" width="9" height="5" rx="0.75" />
    </>
  ),
  plan: (
    <>
      <rect x="7" y="6" width="18" height="22" rx="1.5" />
      <path d="M12 6V5.25C12 4 13 3 14.25 3h3.5C19 3 20 4 20 5.25V6" />
      <path d="m10.5 13 1.25 1.25 2.25-2.5" />
      <path d="M16.5 13h5" />
      <path d="m10.5 20 1.25 1.25 2.25-2.5" />
      <path d="M16.5 20h5" />
    </>
  ),
  build: (
    <>
      <path d="m11 8-7 8 7 8" />
      <path d="m21 8 7 8-7 8" />
      <path d="m18.5 4-5 24" />
    </>
  ),
  validate: (
    <>
      <path d="M16 3.5 26 8v7.25c0 6.6-4.2 10.6-10 13.25C10.2 25.85 6 21.85 6 15.25V8l10-4.5Z" />
      <path d="m11.5 16 3 3 6-7" />
    </>
  ),
  improve: (
    <>
      <path d="m3 24 8-8 5.5 5.5L28 9" />
      <path d="M21 9h7v7" />
    </>
  ),
} satisfies Record<ProcessIcon, ReactNode>;

function ProcessStepIcon({ icon }: { icon: ProcessIcon }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={styles.iconGraphic}
    >
      {processIcons[icon]}
    </svg>
  );
}

export function WayIBuild() {
  return (
    <section
      id="way-i-build"
      aria-labelledby={wayIBuildHeadingId}
      className="scroll-mt-20 border-b border-border bg-transparent px-page-gutter py-section"
    >
      <div className="mx-auto w-full max-w-content">
        <header className="max-w-[49rem]">
          <h2
            id={wayIBuildHeadingId}
            className="font-display text-[clamp(2.75rem,7vw,4.25rem)] leading-[0.96] font-semibold tracking-[-0.025em] text-ink"
          >
            {wayIBuildContent.heading}
          </h2>
          <p className="mt-4 text-base leading-7 font-medium text-accent-warm-text sm:text-lg">
            {wayIBuildContent.supportingText}
          </p>
          <p className="mt-5 max-w-[46rem] text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {wayIBuildContent.introduction}
          </p>
        </header>

        <ol className={styles.timeline}>
          {wayIBuildContent.steps.map((step) => {
            return (
              <li key={step.number} className={styles.step}>
                <div className={styles.marker} aria-hidden="true">
                  <span>{step.number}</span>
                </div>
                <div className={styles.body}>
                  <span className={styles.icon} aria-hidden="true">
                    <ProcessStepIcon icon={step.icon} />
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-tight font-semibold text-ink min-[75rem]:text-[1.375rem]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[34rem] text-base leading-7 text-muted min-[75rem]:mx-auto min-[75rem]:text-[0.9375rem] min-[75rem]:leading-6">
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
