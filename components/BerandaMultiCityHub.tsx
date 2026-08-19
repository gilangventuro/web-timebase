"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import anime from "animejs";
import styles from "./BerandaMultiCityHub.module.css";

const NODES = [
  { city: "Malang", top: "8%", left: "12%", tone: "primary" },
  { city: "Surabaya", top: "8%", left: "88%", tone: "secondary" },
  { city: "Jakarta", top: "92%", left: "12%", tone: "primaryLight" },
  { city: "Bandung", top: "92%", left: "88%", tone: "secondaryLight" },
] as const;

const LINE_ENDPOINTS = [
  { x: 12, y: 8 },
  { x: 88, y: 8 },
  { x: 12, y: 92 },
  { x: 88, y: 92 },
];

/**
 * BerandaMultiCityHub — radial network diagram: "Dashboard Timebase" hub
 * node connected to 4 city nodes (Malang, Surabaya, Jakarta, Bandung).
 * Replaces the dashboard-widget + city-pill treatment with a lighter,
 * more illustrative visual for the multi-city monitoring claim.
 */
export default function BerandaMultiCityHub() {
  const dashRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const dashes = dashRefs.current.filter(Boolean) as SVGPathElement[];
    const nodes = nodeRefs.current.filter(Boolean) as HTMLDivElement[];
    if (dashes.length === 0) return;

    const dashAnimation = anime({
      targets: dashes,
      strokeDashoffset: [0, -24],
      duration: 1600,
      easing: "linear",
      loop: true,
    });

    const nodeAnimation = anime({
      targets: nodes,
      scale: [1, 1.06],
      duration: 1800,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(250),
    });

    return () => {
      dashAnimation.pause();
      nodeAnimation.pause();
      anime.remove(dashes);
      anime.remove(nodes);
    };
  }, []);

  return (
    <div className={styles.hub} role="img" aria-label="Diagram jaringan Dashboard Timebase terhubung ke tim di Malang, Surabaya, Jakarta, dan Bandung">
      <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {LINE_ENDPOINTS.map((point, i) => (
          <path
            key={point.x + "-" + point.y}
            ref={(el) => {
              dashRefs.current[i] = el;
            }}
            d={`M50,50 L${point.x},${point.y}`}
            className={styles.dashLine}
          />
        ))}
      </svg>

      <div className={styles.center}>
        <span className={styles.centerIcon}>
          <Image
            src="/assets/logo-timebase-icon-gradient.png"
            alt="Logo ikon Timebase"
            title="Timebase"
            width={64}
            height={64}
          />
        </span>
        <span className={styles.centerLabel}>Dashboard Timebase</span>
      </div>

      {NODES.map((node, i) => (
        <div
          key={node.city}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          className={styles.node}
          style={{ top: node.top, left: node.left }}
        >
          <span className={`${styles.nodeIcon} ${styles[node.tone]}`} aria-hidden="true">
            <User size={18} aria-hidden="true" />
          </span>
          <span className={styles.nodeLabel}>{node.city}</span>
        </div>
      ))}
    </div>
  );
}
