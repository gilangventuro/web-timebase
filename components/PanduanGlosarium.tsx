import styles from "./PanduanGlosarium.module.css";

interface GlossaryItem {
  term: string;
  definition: string;
}

interface PanduanGlosariumProps {
  items: GlossaryItem[];
}

/**
 * PanduanGlosarium — definition-list rapi untuk istilah dashboard Timebase.
 * Sengaja BUKAN kartu besar (bukan SwipeableCards) — 2 kolom di desktop,
 * 1 kolom di mobile, agar sembilan istilah bisa dipindai cepat sebagai
 * referensi, bukan dijelajah satu per satu.
 */
export default function PanduanGlosarium({ items }: PanduanGlosariumProps) {
  return (
    <dl className={styles.grid}>
      {items.map((item) => (
        <div className={`${styles.row} stagger-item`} key={item.term} tabIndex={0}>
          <dt className={styles.term}>
            <code>{item.term}</code>
          </dt>
          <dd className={styles.definition}>{item.definition}</dd>
        </div>
      ))}
    </dl>
  );
}
