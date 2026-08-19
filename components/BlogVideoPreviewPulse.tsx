"use client";

import { useEffect, useRef } from "react";
import { Radio } from "lucide-react";
import anime from "animejs";
import styles from "./BlogVideoPreviewPulse.module.css";

/**
 * BlogVideoPreviewPulse — "Pratinjau Video Insight Monitoring Karyawan".
 * Belum ada video edukasi resmi Timebase untuk konteks blog (bukan
 * dashboard karyawan, sehingga sengaja TIDAK memakai DashboardMock).
 * Motion signature "Dynamic Pulse": garis real-time tracking dan pulse dot
 * yang bergerak berkelanjutan di sepanjang garis, digerakkan via anime.js.
 */
export default function BlogVideoPreviewPulse() {
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const animation = anime({
      targets: dot,
      left: ["2%", "98%"],
      scale: [1, 1.3, 1],
      duration: 3200,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });

    return () => {
      animation.pause();
      anime.remove(dot);
    };
  }, []);

  return (
    <div
      className={styles.panel}
      role="group"
      aria-label="Pratinjau animasi Dynamic Pulse — garis real-time tracking dan pulse dot bergerak berkelanjutan"
    >
      <div className={styles.panelHeader}>
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelTitle}>Video Insight Monitoring Karyawan</span>
        <span className={styles.liveTag}>
          <Radio size={12} aria-hidden="true" />
          Segera Hadir
        </span>
      </div>

      <div className={styles.trackWrap}>
        <div className={styles.ticks} aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={styles.tick} style={{ height: `${20 + ((i * 37) % 60)}%` }} />
          ))}
        </div>
        <span className={styles.trackLine} aria-hidden="true" />
        <span className={styles.pulseDot} ref={dotRef} aria-hidden="true">
          <span className={styles.pulseRing} />
        </span>
      </div>

      <p className={styles.caption}>Motion signature Dynamic Pulse — Timebase</p>
    </div>
  );
}
