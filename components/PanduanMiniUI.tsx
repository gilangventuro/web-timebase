import { CalendarRange, LayoutPanelTop, Users, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./PanduanMiniUI.module.css";

export type PanduanMiniUIVariant = "filter" | "settings" | "profile";

interface PanduanMiniUIProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  variant: PanduanMiniUIVariant;
}

/**
 * Mini mockups murni UI (bukan foto/screenshot) yang meniru tiga elemen
 * dashboard Timebase yang selalu terlihat: filter global, pengaturan
 * tampilan, dan profil pengguna. Setiap variant dibangun sebagai komponen
 * React/CSS asli, konsisten dengan prinsip Anti-Slop (bukan placeholder).
 */
function FilterMockup() {
  return (
    <div
      className={styles.mockup}
      role="img"
      title="Header & Filter Global Timebase"
      aria-label="Mockup filter tanggal dan tim di header Timebase, berlaku ke seluruh halaman"
    >
      <div className={styles.mockupHeader}>
        <CalendarRange size={16} aria-hidden="true" />
        Filter Global
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Rentang Tanggal</span>
        <div className={styles.fieldInput}>18 Agu 2026</div>
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Tim</span>
        <div className={styles.fieldInput}>Semua Tim</div>
      </div>
      <div className={styles.badgeRow}>
        <span className={styles.badge}>Berlaku di Aktivitas</span>
        <span className={styles.badge}>Berlaku di Screenshot</span>
      </div>
    </div>
  );
}

function SettingsMockup() {
  return (
    <div
      className={styles.mockup}
      role="img"
      title="Pengaturan Tampilan Dashboard Timebase"
      aria-label="Mockup kustomisasi tampilan dashboard Timebase"
    >
      <div className={styles.mockupHeader}>
        <LayoutPanelTop size={16} aria-hidden="true" />
        Pengaturan Tampilan
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Mode Tampilan Aktivitas</span>
        <div className={styles.fieldInput}>Kartu Karyawan</div>
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Mode Galeri Screenshot</span>
        <div className={styles.fieldInput}>Timeline / Grid</div>
      </div>
      <div className={styles.progressLabel}>
        <span>Kepadatan tampilan</span>
        <span>Nyaman</span>
      </div>
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} />
      </div>
    </div>
  );
}

function ProfileMockup() {
  return (
    <div
      className={styles.mockup}
      role="img"
      title="Profil Pengguna Timebase"
      aria-label="Mockup halaman profil pengguna yang sedang login di Timebase"
    >
      <div className={styles.mockupHeader}>
        <Users size={16} aria-hidden="true" />
        Profil Pengguna
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Nama</span>
        <div className={styles.fieldInput}>Nama Pengguna</div>
      </div>
      <div className={styles.fieldGroup}>
        <span className={styles.fieldLabel}>Email Login</span>
        <div className={styles.fieldInput}>pengguna@perusahaan.com</div>
      </div>
      <div className={styles.consentRow}>
        <span className={styles.consentCheck}>
          <Check size={14} aria-hidden="true" />
        </span>
        <span className={styles.consentLabel}>Sesi masuk aktif &amp; terverifikasi</span>
      </div>
    </div>
  );
}

export default function PanduanMiniUI({ icon: Icon, title, desc, variant }: PanduanMiniUIProps) {
  return (
    <div className={`${styles.card} stagger-item`} tabIndex={0}>
      <div className={styles.cardTop}>
        <span className={styles.iconWrap}>
          <Icon size={20} aria-hidden="true" />
        </span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
      <div className={styles.mockupSlot}>
        {variant === "filter" && <FilterMockup />}
        {variant === "settings" && <SettingsMockup />}
        {variant === "profile" && <ProfileMockup />}
      </div>
    </div>
  );
}
