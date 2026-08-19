import { MapPin, Clock } from "lucide-react";
import styles from "./BlogIllustrationMalang.module.css";

/**
 * BlogIllustrationMalang — mini badge kota "Kota Malang — Basis Operasional
 * Timebase — Zona WIB" untuk kartu index Blog & hero Artikel 3. Dipakai
 * persis sama di kedua tempat (import komponen yang sama). Bukan foto —
 * badge lokasi CSS/SVG dengan radar ring berdenyut halus di sekitar pin.
 */
export default function BlogIllustrationMalang() {
  return (
    <div
      className={styles.badge}
      role="group"
      aria-label="Dukungan Lokal Tim Timebase dari Kota Malang, Jawa Timur"
    >
      <span className={styles.radarWrap} aria-hidden="true">
        <span className={styles.radarRing} />
        <span className={styles.radarRingAlt} />
        <span className={styles.pinIconWrap}>
          <MapPin size={20} aria-hidden="true" />
        </span>
      </span>

      <div className={styles.badgeText}>
        <p className={styles.cityName}>Kota Malang</p>
        <p className={styles.cityCaption}>Basis Operasional Timebase — Zona WIB</p>
      </div>

      <span className={styles.wibTag}>
        <Clock size={13} aria-hidden="true" />
        WIB
      </span>
    </div>
  );
}
