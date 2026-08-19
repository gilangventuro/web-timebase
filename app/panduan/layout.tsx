import PanduanSidebar from "@/components/PanduanSidebar";
import styles from "./docs.module.css";

export default function PanduanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.panduanRoot}>
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
