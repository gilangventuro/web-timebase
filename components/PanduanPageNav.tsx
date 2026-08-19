import Link from "next/link";
import styles from "./PanduanPageNav.module.css";

interface PageLink {
  href: string;
  label: string;
}

interface PanduanPageNavProps {
  prev?: PageLink;
  next?: PageLink;
}

export default function PanduanPageNav({ prev, next }: PanduanPageNavProps) {
  return (
    <div className={styles.pageNav}>
      {prev ? (
        <Link href={prev.href} className={styles.navBtn} title={prev.label}>
          &larr; Sebelumnya
          <span>{prev.label}</span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.href} className={`${styles.navBtn} ${styles.navBtnNext}`} title={next.label}>
          Selanjutnya &rarr;
          <span>{next.label}</span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
