"use client";

import { Download, LayoutDashboard, UserCheck, UsersRound, type LucideIcon } from "lucide-react";
import styles from "./FiturSetupTimeline.module.css";

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const STEPS: TimelineStep[] = [
  {
    icon: Download,
    title: "Instalasi Agent Ringan",
    desc: "Agent monitoring dipasang di perangkat karyawan tanpa mengganggu kinerja komputer sehari-hari.",
  },
  {
    icon: UsersRound,
    title: "Aktivasi Tim dalam Hitungan Hari",
    desc: "Seluruh tim dapat diaktifkan dan siap dipantau tanpa memerlukan staf IT khusus.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Langsung Siap Pantau",
    desc: "Setelah aktivasi, dashboard Command Center langsung menampilkan status kerja tim secara real-time.",
  },
  {
    icon: UserCheck,
    title: "Tanpa Tim IT Khusus",
    desc: "Seluruh proses setup dirancang agar bisa dijalankan sendiri oleh HR atau pemilik bisnis.",
  },
];

/**
 * FiturSetupTimeline — step-timeline bernomor untuk section "Setup Tanpa Tim IT".
 * Horizontal connector di desktop, vertical connector di mobile.
 * Setiap step memakai class `.stagger-item` agar dianimasikan berurutan oleh
 * AnimatedSection (Anime.js stagger) pembungkusnya di app/fitur/page.tsx.
 */
export default function FiturSetupTimeline() {
  return (
    <ol className={styles.timeline} aria-label="Alur setup dan aktivasi Time Base tanpa tim IT khusus">
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
