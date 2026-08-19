import { Check } from "lucide-react";
import Link from "next/link";
import styles from "./HargaPaketCard.module.css";

interface HargaPaketCardProps {
  name: string;
  price: string;
  features: string[];
  ctaText: string;
  ctaTarget: string;
  badge?: string;
  highlighted?: boolean;
}

/**
 * HargaPaketCard — kartu tier paket harga untuk halaman /harga.
 * `price` WAJIB selalu berisi teks "Hubungi Kami" (bukan nominal Rupiah),
 * sesuai kebijakan Zero Fabrikasi Harga (PLAN-harga.md Section 5).
 */
export default function HargaPaketCard({
  name,
  price,
  features,
  ctaText,
  ctaTarget,
  badge,
  highlighted = false,
}: HargaPaketCardProps) {
  return (
    <div
      className={`${styles.card} ${highlighted ? styles.cardHighlighted : ""} stagger-item`}
      tabIndex={0}
      aria-label={`Paket ${name}, harga: ${price}`}
    >
      {badge && <span className={styles.badge}>{badge}</span>}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}</p>
      <ul className={styles.featureList}>
        {features.map((feature) => (
          <li className={styles.featureItem} key={feature}>
            <Check size={18} className={styles.featureIcon} aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={ctaTarget}
        className={highlighted ? styles.ctaPrimary : styles.ctaSecondary}
        title={`${ctaText} untuk paket ${name} Time Base`}
        target={ctaTarget.startsWith("http") ? "_blank" : undefined}
        rel={ctaTarget.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {ctaText}
      </Link>
    </div>
  );
}
