"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./DashboardMock.module.css";

const EMPLOYEES = [
  { initials: "AR", name: "Andi R.", time: "08:02:00", status: "Sedang Bekerja" },
  { initials: "DP", name: "Dewi P.", time: "07:45:00", status: "Sedang Bekerja" },
] as const;

/**
 * DashboardMock — "Dashboard Real-Time Timebase" widget.
 * Fallback visual for the unavailable company profile video: illustrates
 * the live activity dashboard (motion signature "Dynamic Pulse") reused
 * across Beranda, Fitur, Keamanan & Kepatuhan, and Panduan.
 */
export default function DashboardMock() {
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = rowsRef.current?.querySelectorAll<HTMLElement>("[data-row]");
    if (!rows || rows.length === 0) return;

    const animation = anime({
      targets: rows,
      opacity: [0.6, 1],
      translateX: [-4, 0],
      duration: 1400,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(300),
    });

    return () => {
      animation.pause();
      anime.remove(rows);
    };
  }, []);

  return (
    <div
      className={styles.panel}
      role="group"
      aria-label="Mock dashboard Timebase - status aktivitas karyawan real-time"
    >
      <div className={styles.panelHeader}>
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelTitle}>Dashboard Real-Time Timebase</span>
        <span className={styles.liveTag}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
      </div>

      <div className={styles.employeeRows} ref={rowsRef}>
        {EMPLOYEES.map((employee) => (
          <div key={employee.name} data-row className={styles.employeeRow}>
            <span className={styles.avatar} aria-hidden="true">
              {employee.initials}
            </span>
            <div className={styles.employeeInfo}>
              <p className={styles.employeeName}>{employee.name}</p>
              <p className={styles.employeeStatus}>
                {employee.time} — {employee.status}
              </p>
            </div>
            <span className={styles.statusDot} aria-hidden="true" />
          </div>
        ))}
      </div>

      <div className={styles.panelFooter}>
        <span>Aktif sekarang</span>
        <span>{EMPLOYEES.length}/{EMPLOYEES.length} anggota</span>
      </div>
    </div>
  );
}
