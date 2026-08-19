"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import anime from "animejs";
import styles from "./BerandaMultiCityHub.module.css";

// Coordinates live in a 100x75 viewBox (matching the container's 4/3 aspect
// ratio exactly) so the stroke isn't stretched unevenly per axis — that
// distortion made the dashes render unevenly/messily.
const CENTER = { x: 50, y: 37.5 };

const NODES = [
  { city: "Malang", top: "8%", left: "12%", x: 12, y: 6, tone: "primary", side: "left" },
  { city: "Surabaya", top: "8%", left: "88%", x: 88, y: 6, tone: "secondary", side: "right" },
  { city: "Jakarta", top: "92%", left: "12%", x: 12, y: 69, tone: "primaryLight", side: "left" },
  { city: "Bandung", top: "92%", left: "88%", x: 88, y: 69, tone: "secondaryLight", side: "right" },
] as const;

/**
 * BerandaMultiCityHub — radial network diagram: "Dashboard Timebase" hub
 * node connected to 4 city nodes (Malang, Surabaya, Jakarta, Bandung).
 * Dashed lines and city labels are colored per side (purple for
 * Malang/Jakarta, orange for Surabaya/Bandung) to match the reference
 * layout; center hub uses the dark gauge-mark icon in a circular frame.
 */
export default function BerandaMultiCityHub() {
  const dashRefs = useRef<(SVGPathElement | null)[]>([]);
  const nodeIconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const dashes = dashRefs.current.filter(Boolean) as SVGPathElement[];
    // Animate the icon span, NOT the positioned .node wrapper: anime.js
    // writes a fresh inline `transform` for `scale`, which would silently
    // replace (not combine with) the wrapper's CSS `translate(-50%,-50%)`
    // positioning and knock every node visibly off the line endpoints.
    const nodes = nodeIconRefs.current.filter(Boolean) as HTMLSpanElement[];
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
      <svg className={styles.lines} viewBox="0 0 100 75" aria-hidden="true">
        {NODES.map((node, i) => (
          <path
            key={node.city}
            ref={(el) => {
              dashRefs.current[i] = el;
            }}
            d={`M${CENTER.x},${CENTER.y} L${node.x},${node.y}`}
            className={`${styles.dashLine} ${styles[`line-${node.side}`]}`}
          />
        ))}
      </svg>

      <div className={styles.center}>
        <span className={styles.centerIconRing}>
          <span className={styles.centerIconCrop}>
            <Image
              src="/assets/logo-timebase-icon-gauge.png"
              alt="Logo ikon Timebase"
              title="Timebase"
              width={70}
              height={70}
            />
          </span>
        </span>
        <span className={styles.centerLabel}>Dashboard Timebase</span>
      </div>

      {NODES.map((node, i) => (
        <div key={node.city} className={styles.node} style={{ top: node.top, left: node.left }}>
          <span
            ref={(el) => {
              nodeIconRefs.current[i] = el;
            }}
            className={`${styles.nodeIcon} ${styles[node.tone]}`}
            aria-hidden="true"
          >
            <User size={18} aria-hidden="true" />
          </span>
          <span className={`${styles.nodeLabel} ${styles[`label-${node.side}`]}`}>{node.city}</span>
        </div>
      ))}
    </div>
  );
}
