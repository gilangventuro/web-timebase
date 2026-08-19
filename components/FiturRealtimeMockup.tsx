import { Clock, MapPin } from "lucide-react";
import styles from "./FiturRealtimeMockup.module.css";

const WORK_LOGS = [
  { name: "Andi R.", in: "08:02", out: "17:10", duration: "08j 32m" },
  { name: "Dewi P.", in: "07:45", out: "16:58", duration: "08j 46m" },
  { name: "Budi S.", in: "08:15", out: "17:22", duration: "08j 40m" },
] as const;

const CITIES = ["Malang", "Surabaya", "Jakarta", "Bandung"] as const;

/**
 * FiturRealtimeMockup — ilustrasi "Log Waktu Kerja Teraudit" (mini tabel) +
 * "Peta Tim Multi-Kota" (badge kota) untuk section "Fitur Real-Time
 * Mendalam". Murni CSS/React, bukan foto, tidak butuh interaktivitas
 * sehingga aman dirender di server component.
 */
export default function FiturRealtimeMockup() {
  return (
    <div className={styles.card} role="img" aria-label="Log waktu kerja teraudit dan peta tim multi-kota Timebase">
      <div className={styles.cardHeader}>
        <span className={styles.cardHeaderIcon}>
          <Clock size={16} aria-hidden="true" />
        </span>
        <span>Log Waktu Kerja Teraudit</span>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Masuk</th>
            <th>Keluar</th>
            <th>Durasi</th>
          </tr>
        </thead>
        <tbody>
          {WORK_LOGS.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.in}</td>
              <td>{row.out}</td>
              <td className={styles.durationCell}>{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.mapWrap}>
        <span className={styles.mapLabel}>
          <MapPin size={14} aria-hidden="true" />
          Peta Tim Multi-Kota
        </span>
        <ul className={styles.cityBadges} aria-label="Kota yang terpantau">
          {CITIES.map((city) => (
            <li className={styles.cityBadge} key={city}>
              {city}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerBar}>
        <span>Ringkasan siap pakai</span>
        <span className={styles.footerValue}>4 kota terpantau</span>
      </div>
    </div>
  );
}
