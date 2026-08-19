"use client";

import { MessageCircleMore, ShieldCheck, LayoutDashboard, type LucideIcon } from "lucide-react";
import styles from "./BerandaCaraKerjaSteps.module.css";

interface Step {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    icon: MessageCircleMore,
    title: "Konsultasi & Pendaftaran",
    desc: "Diskusikan kebutuhan tim Anda dan daftarkan akun Timebase — konsultasi via WhatsApp, tanpa proses berbelit.",
  },
  {
    icon: ShieldCheck,
    title: "Instalasi Ringan & Consent",
    desc: "Pemasangan ringan di perangkat karyawan berjalan setelah persetujuan tertulis diberikan, selaras UU PDP No. 27/2022.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Aktif Real-Time",
    desc: "Begitu instalasi selesai, dashboard terpusat langsung menampilkan status kerja tim secara real-time.",
  },
];

/**
 * BerandaCaraKerjaSteps — step-timeline 3 langkah untuk section
 * "Cara Kerja Timebase Real-Time" di Beranda. Bernomor, dengan connector
 * vertikal di mobile dan horizontal di desktop. Setiap step memakai class
 * `.stagger-item` agar dianimasikan berurutan oleh AnimatedSection
 * (Anime.js stagger) pembungkusnya di app/page.tsx.
 */
export default function BerandaCaraKerjaSteps() {
  return (
    <ol className={styles.timeline} aria-label="Alur cara kerja Timebase real-time: konsultasi, instalasi, dashboard aktif">
      {STEPS.map((step, index) => {
        const Icon = step.icon;
        return (
          <li className={`${styles.step} stagger-item`} key={step.title} tabIndex={0}>
            <span className={styles.stepNumber} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={styles.stepIconWrap}>
              <Icon size={22} aria-hidden="true" />
            </span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
            {index < STEPS.length - 1 && <span className={styles.connector} aria-hidden="true" />}
          </li>
        );
      })}
    </ol>
  );
}
