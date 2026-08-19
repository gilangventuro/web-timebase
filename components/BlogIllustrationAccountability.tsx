import { EyeOff, Keyboard, ScanEye, Eye, FileSignature, ClipboardCheck } from "lucide-react";
import styles from "./BlogIllustrationAccountability.module.css";

const SURVEILLANCE_POINTS = [
  { icon: EyeOff, label: "Diam-diam, Tanpa Consent" },
  { icon: Keyboard, label: "Keystroke Logging" },
  { icon: ScanEye, label: "Micromanage Berlebihan" },
] as const;

const ACCOUNTABILITY_POINTS = [
  { icon: Eye, label: "Transparan & Berbasis Consent" },
  { icon: FileSignature, label: "Consent Tertulis Karyawan" },
  { icon: ClipboardCheck, label: "Data Relevan Pekerjaan" },
] as const;

/**
 * BlogIllustrationAccountability — mini ilustrasi VS-split "Surveillance vs
 * Accountability" untuk kartu index Blog & hero Artikel 1. Dipakai persis
 * sama di kedua tempat (import komponen yang sama), bukan foto — murni
 * CSS/SVG (lucide-react) sesuai larangan placeholder gambar.
 */
export default function BlogIllustrationAccountability() {
  return (
    <div
      className={styles.wrap}
      role="group"
      aria-label="Perbandingan Surveillance Tool dan Accountability Tool"
    >
      <div className={`${styles.side} ${styles.surveillance}`}>
        <span className={styles.sideIconWrap} aria-hidden="true">
          <EyeOff size={18} aria-hidden="true" />
        </span>
        <p className={styles.sideLabel}>Surveillance</p>
        <ul className={styles.pointList}>
          {SURVEILLANCE_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <li className={`${styles.point} stagger-item`} key={point.label}>
                <Icon size={14} aria-hidden="true" />
                <span>{point.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <span className={styles.vsBadge} aria-hidden="true">
        VS
      </span>

      <div className={`${styles.side} ${styles.accountability}`}>
        <span className={styles.sideIconWrap} aria-hidden="true">
          <FileSignature size={18} aria-hidden="true" />
        </span>
        <p className={styles.sideLabel}>Accountability</p>
        <ul className={styles.pointList}>
          {ACCOUNTABILITY_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <li className={`${styles.point} stagger-item`} key={point.label}>
                <Icon size={14} aria-hidden="true" />
                <span>{point.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
