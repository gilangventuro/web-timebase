"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import anime from "animejs";
import styles from "./KeamananConsentFlow.module.css";

export interface ConsentFlowStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface KeamananConsentFlowProps {
  steps: ConsentFlowStep[];
  ariaLabel: string;
  /** Motion signature "Dynamic Pulse" — continuous ambient loop, dipakai di section "Bagaimana Data Anda Diamankan". */
  pulse?: boolean;
}

/**
 * KeamananConsentFlow — visual 3-step "Consent Tertulis -> Enkripsi -> Akses
 * Terbatas" untuk halaman Keamanan & Kepatuhan. Dipakai dua kali:
 * 1) intro section "Cara Timebase Menjawabnya" (statis, direveal via
 *    AnimatedSection stagger).
 * 2) section "Bagaimana Data Anda Diamankan" dengan `pulse` aktif — motion
 *    signature Dynamic Pulse: denyut berkelanjutan pada tiap node alur
 *    selama komponen ditampilkan (bukan video profil, karena belum ada).
 */
export default function KeamananConsentFlow({ steps, ariaLabel, pulse = false }: KeamananConsentFlowProps) {
  const nodesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pulse) return;
    const nodes = nodesRef.current?.querySelectorAll<HTMLElement>("[data-flow-node]");
    if (!nodes || nodes.length === 0) return;

    const animation = anime({
      targets: nodes,
      scale: [1, 1.08],
      boxShadow: [
        "0 0 0 0 rgba(124, 58, 237, 0.35)",
        "0 0 0 12px rgba(124, 58, 237, 0)",
      ],
      duration: 1600,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
      delay: anime.stagger(400),
    });

    return () => {
      animation.pause();
      anime.remove(nodes);
    };
  }, [pulse]);

  return (
    <div
      className={`${styles.flow} ${pulse ? styles.flowPulse : ""}`}
      ref={nodesRef}
      role="list"
      aria-label={ariaLabel}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div className={styles.stepWrap} key={step.title}>
            <div className={`${styles.step} stagger-item`} role="listitem" tabIndex={0}>
              <span className={styles.iconWrap} data-flow-node aria-hidden="true">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
            {index < steps.length - 1 && (
              <span className={styles.arrow} aria-hidden="true">
                <ArrowRight size={22} aria-hidden="true" />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
