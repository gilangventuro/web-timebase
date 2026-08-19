"use client";

import { useEffect, useRef } from "react";
import { PenLine, Lock, UserCog, ArrowRight } from "lucide-react";
import anime from "animejs";
import styles from "./BlogIllustrationCompliance.module.css";

const FLOW_NODES = [
  { icon: PenLine, label: "Consent Tertulis" },
  { icon: Lock, label: "Enkripsi" },
  { icon: UserCog, label: "Akses Terbatas" },
] as const;

/**
 * BlogIllustrationCompliance — mini ilustrasi flow "Consent Tertulis ->
 * Enkripsi -> Akses Terbatas" untuk kartu index Blog & hero Artikel 2.
 * Dipakai persis sama di kedua tempat (import komponen yang sama). Bukan
 * foto — badge CSS/SVG dengan denyut halus berkelanjutan via anime.js pada
 * tiap node (motion signature ringan, terpisah dari KeamananConsentFlow).
 */
export default function BlogIllustrationCompliance() {
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = nodesRef.current?.querySelectorAll<HTMLElement>("[data-compliance-node]");
    if (!nodes || nodes.length === 0) return;

    const animation = anime({
      targets: nodes,
      scale: [1, 1.06],
      boxShadow: ["0 0 0 0 rgba(124, 58, 237, 0.3)", "0 0 0 8px rgba(124, 58, 237, 0)"],
      duration: 1500,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(350),
    });

    return () => {
      animation.pause();
      anime.remove(nodes);
    };
  }, []);

  return (
    <div
      className={styles.wrap}
      ref={nodesRef}
      role="group"
      aria-label="Consent Tertulis dan Keamanan Data Karyawan — Timebase"
    >
      {FLOW_NODES.map((node, index) => {
        const Icon = node.icon;
        return (
          <div className={styles.nodeWrap} key={node.label}>
            <div className={`${styles.node} stagger-item`} data-compliance-node tabIndex={0}>
              <span className={styles.nodeIconWrap} aria-hidden="true">
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className={styles.nodeLabel}>{node.label}</span>
            </div>
            {index < FLOW_NODES.length - 1 && (
              <span className={styles.arrow} aria-hidden="true">
                <ArrowRight size={16} aria-hidden="true" />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
