"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Pause, Play, Square } from "lucide-react";
import styles from "./DashboardMock.module.css";

const STATUS_CARDS = [
  { key: "active", label: "Active", value: "68%", colorVar: "--color-success" },
  { key: "idle", label: "Idle", value: "22%", colorVar: "--color-warning" },
  { key: "distraction", label: "Distraction", value: "10%", colorVar: "--color-error" },
] as const;

const BAR_COUNT = 12;

/**
 * DashboardMock — "Command Center" interactive dashboard mock.
 * Replaces the (unavailable) company profile video for the Beranda hero.
 * Ref: PLAN-beranda.md Section 4 (heroImage) & PLAN-DESIGN-SYSTEM.md 6.5.
 */
export default function DashboardMock() {
  const barsWrapRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const [playState, setPlayState] = useState<"playing" | "paused" | "stopped">("playing");

  useEffect(() => {
    const bars = barsWrapRef.current?.querySelectorAll<HTMLElement>("[data-bar]");
    if (!bars || bars.length === 0) return;

    const animation = anime({
      targets: bars,
      height: () => `${anime.random(18, 92)}%`,
      duration: () => anime.random(900, 1700),
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(90),
    });
    animationRef.current = animation;

    return () => {
      animation.pause();
      anime.remove(bars);
      animationRef.current = null;
    };
  }, []);

  const handlePlay = () => {
    animationRef.current?.play();
    setPlayState("playing");
  };

  const handlePause = () => {
    animationRef.current?.pause();
    setPlayState("paused");
  };

  const handleStop = () => {
    animationRef.current?.pause();
    const bars = barsWrapRef.current?.querySelectorAll<HTMLElement>("[data-bar]");
    if (bars) {
      anime.set(bars, { height: "12%" });
    }
    setPlayState("stopped");
  };

  return (
    <div className={styles.panel} role="group" aria-label="Mock dashboard Command Center Time Base - status monitoring karyawan real-time">
      <div className={styles.panelHeader}>
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelDot} aria-hidden="true" />
        <span className={styles.panelTitle}>Command Center — Live Status Tim</span>
      </div>

      <div className={styles.statusGrid}>
        {STATUS_CARDS.map((card) => (
          <div key={card.key} className={styles.statusCard}>
            <span
              className={styles.statusBadge}
              style={{ background: `var(${card.colorVar})` }}
              aria-hidden="true"
            />
            <div>
              <p className={styles.statusLabel}>{card.label}</p>
              <p className={styles.statusValue}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.chart} ref={barsWrapRef} aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <span key={i} data-bar className={styles.bar} />
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={playState === "playing" ? styles.controlActive : styles.control}
          onClick={handlePlay}
          aria-label="Putar animasi data-viz dashboard"
          title="Putar"
          tabIndex={0}
        >
          <Play size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={playState === "paused" ? styles.controlActive : styles.control}
          onClick={handlePause}
          aria-label="Jeda animasi data-viz dashboard"
          title="Jeda"
          tabIndex={0}
        >
          <Pause size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          className={playState === "stopped" ? styles.controlActive : styles.control}
          onClick={handleStop}
          aria-label="Hentikan animasi data-viz dashboard"
          title="Berhenti"
          tabIndex={0}
        >
          <Square size={18} aria-hidden="true" />
        </button>
        <span className={styles.liveTag}>
          <span className={styles.liveDot} aria-hidden="true" />
          Live
        </span>
      </div>
    </div>
  );
}
