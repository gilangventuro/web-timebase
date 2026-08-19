"use client";

import { Activity, Check, Download, FileChartColumnIncreasing, ShieldCheck, UserPlus, type LucideIcon } from "lucide-react";
import DashboardMock from "./DashboardMock";
import SwipeableCards from "./SwipeableCards";
import styles from "./FiturSetupTimeline.module.css";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    icon: UserPlus,
    title: "Konsultasi & Pendaftaran",
    desc: "Tim Timebase memetakan kebutuhan tracking berdasarkan jumlah dan sebaran tim kerja perusahaan Anda.",
  },
  {
    icon: Download,
    title: "Instalasi & Consent Karyawan",
    desc: "Agen tracking ringan dipasang di perangkat karyawan setelah persetujuan tertulis, sesuai UU PDP.",
  },
  {
    icon: Activity,
    title: "Monitoring Dashboard Real-Time",
    desc: "Aktivitas dan jam kerja tim tampil langsung di dashboard terpusat, dari kota mana pun bekerja.",
  },
  {
    icon: FileChartColumnIncreasing,
    title: "Laporan Berkala Otomatis",
    desc: "Sistem merangkum data mingguan/bulanan sebagai bukti akuntabilitas siap dibawa ke rapat evaluasi direksi.",
  },
];

/**
 * FiturSetupTimeline — "Cara Kerja Timebase" 4-step alur bernomor 01-04.
 * Setiap step adalah kartu berisi ikon+judul+deskripsi, dilengkapi mockup
 * ilustratif non-fungsional yang menggambarkan tampilan nyata tiap tahap
 * (form pendaftaran, prompt consent, DashboardMock asli, kartu laporan).
 * Dibungkus SwipeableCards (grid di desktop, swipe di mobile) sesuai
 * standar mobile UX proyek.
 */
export default function FiturSetupTimeline() {
  return (
    <SwipeableCards ariaLabel="Alur cara kerja sistem tracking karyawan Timebase, 4 langkah">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        return (
          <div className={`${styles.card} stagger-item`} key={step.title} tabIndex={0}>
            <div className={styles.cardTop}>
              <span className={styles.stepNumber} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.iconWrap}>
                <Icon size={20} aria-hidden="true" />
              </span>
            </div>
            <h3 className={styles.cardTitle}>{step.title}</h3>
            <p className={styles.cardDesc}>{step.desc}</p>

            <div className={styles.mockupSlot}>
              {index === 0 && (
                <div className={styles.mockup} role="img" aria-label="Mockup form pendaftaran Timebase step 1">
                  <p className={styles.mockupHeader}>Form Konsultasi &amp; Pendaftaran</p>
                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>Nama Perusahaan</span>
                    <div className={styles.fieldInput}>PT Contoh Sejahtera</div>
                  </div>
                  <div className={styles.fieldGroup}>
                    <span className={styles.fieldLabel}>Jumlah Karyawan</span>
                    <div className={styles.fieldInput}>25 orang</div>
                  </div>
                  <span className={styles.mockupButton}>Ajukan Konsultasi</span>
                </div>
              )}

              {index === 1 && (
                <div
                  className={styles.mockup}
                  role="img"
                  aria-label="Mockup prompt consent instalasi agen tracking Timebase step 2"
                >
                  <p className={styles.mockupHeader}>
                    <ShieldCheck size={16} aria-hidden="true" />
                    Persetujuan Instalasi Agen Tracking
                  </p>
                  <p className={styles.consentText}>
                    Saya menyetujui pemasangan agen tracking ringan pada perangkat kerja sesuai UU PDP No. 27/2022.
                  </p>
                  <div className={styles.consentCheckRow}>
                    <span className={styles.consentCheckbox} aria-hidden="true">
                      <Check size={14} aria-hidden="true" />
                    </span>
                    <span>Saya menyetujui pemasangan agen tracking</span>
                  </div>
                  <span className={styles.mockupButton}>Setuju &amp; Lanjutkan</span>
                </div>
              )}

              {index === 2 && (
                <div className={styles.dashboardWrap}>
                  <DashboardMock />
                </div>
              )}

              {index === 3 && (
                <div
                  className={styles.mockup}
                  role="img"
                  aria-label="Mockup laporan berkala otomatis Timebase step 4"
                >
                  <p className={styles.mockupHeader}>Laporan Mingguan Otomatis</p>
                  <div className={styles.reportChart} aria-hidden="true">
                    <span className={styles.reportBar} style={{ height: "42%" }} />
                    <span className={styles.reportBarAlt} style={{ height: "78%" }} />
                    <span className={styles.reportBar} style={{ height: "58%" }} />
                    <span className={styles.reportBarAlt} style={{ height: "92%" }} />
                    <span className={styles.reportBar} style={{ height: "64%" }} />
                  </div>
                  <button
                    type="button"
                    className={styles.reportButton}
                    disabled
                    aria-disabled="true"
                    title="Ilustrasi tombol unduh laporan (non-fungsional)"
                  >
                    <Download size={16} aria-hidden="true" />
                    <span>Unduh Laporan (PDF)</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </SwipeableCards>
  );
}
