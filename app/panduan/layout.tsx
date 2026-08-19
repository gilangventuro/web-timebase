import PanduanSidebar from "@/components/PanduanSidebar";
import styles from "./docs.module.css";

export default function PanduanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.panduanRoot}>
      <div className={styles.layout}>
        <PanduanSidebar />
        {/* Not a <main> — the root layout already provides the page's single <main> landmark. */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
