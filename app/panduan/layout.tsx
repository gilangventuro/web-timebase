import PanduanSidebar from "@/components/PanduanSidebar";
import styles from "./docs.module.css";

export default function PanduanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.panduanRoot}>
      {/* Decorative brand-gradient wash, same recipe as every other page's
          hero — fixed-height band behind the top of the sidebar/content so
          long docs pages don't tint the whole scroll, just the top. */}
      <div className={styles.heroGradient} aria-hidden="true" />

      {/* Reuses the site-wide .container (same max-width/padding as the navbar and
          footer) so the sidebar's left edge and the content's right edge line up
          with the logo and Request Demo button instead of running edge-to-edge. */}
      <div className={`container ${styles.layout}`}>
        <PanduanSidebar />
        {/* Not a <main> — the root layout already provides the page's single <main> landmark. */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
