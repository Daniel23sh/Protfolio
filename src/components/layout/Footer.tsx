import styles from "@/components/layout/Footer.module.css";
import { siteConfig } from "@/content/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          {siteConfig.name}
          <span aria-hidden="true"> · </span>
          {siteConfig.role}
        </p>
        <p className={styles.care}>Built with care, iteration, and a lot of coffee.</p>
        <p className={styles.year}>© {currentYear}</p>
      </div>
    </footer>
  );
}
