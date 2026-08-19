"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./KeamananFaqAccordion.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface KeamananFaqAccordionProps {
  items: FaqItem[];
}

/**
 * KeamananFaqAccordion — accordion FAQ untuk halaman Keamanan & Kepatuhan.
 * Setiap trigger adalah elemen <button> asli (fokus & aktivasi keyboard
 * native via Enter/Space) dan mendukung navigasi ArrowUp/ArrowDown antar
 * pertanyaan, mengikuti pola FiturFaqAccordion.tsx.
 */
export default function KeamananFaqAccordion({ items }: KeamananFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = document.getElementById(`keamanan-faq-trigger-${index + 1}`);
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = document.getElementById(`keamanan-faq-trigger-${index - 1}`);
      prev?.focus();
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={`${styles.item} stagger-item`} key={item.question}>
            <h3 className={styles.questionRow}>
              <button
                type="button"
                id={`keamanan-faq-trigger-${index}`}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={`keamanan-faq-panel-${index}`}
                tabIndex={0}
                onClick={() => toggle(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} className={isOpen ? styles.chevronOpen : styles.chevron} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`keamanan-faq-panel-${index}`}
              role="region"
              aria-labelledby={`keamanan-faq-trigger-${index}`}
              className={isOpen ? styles.panelOpen : styles.panel}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
