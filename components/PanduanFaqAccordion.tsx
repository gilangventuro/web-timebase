"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./PanduanFaqAccordion.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

interface PanduanFaqAccordionProps {
  items: FaqItem[];
}

/**
 * PanduanFaqAccordion — accordion FAQ untuk halaman Panduan.
 * Setiap trigger adalah elemen <button> asli (fokus & aktivasi keyboard
 * native via Enter/Space) dan mendukung navigasi ArrowUp/ArrowDown antar
 * pertanyaan, mengikuti pola FiturFaqAccordion.tsx / KeamananFaqAccordion.tsx.
 */
export default function PanduanFaqAccordion({ items }: PanduanFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = document.getElementById(`panduan-faq-trigger-${index + 1}`);
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = document.getElementById(`panduan-faq-trigger-${index - 1}`);
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
                id={`panduan-faq-trigger-${index}`}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={`panduan-faq-panel-${index}`}
                tabIndex={0}
                onClick={() => toggle(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span>{item.question}</span>
                <ChevronDown size={20} className={isOpen ? styles.chevronOpen : styles.chevron} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`panduan-faq-panel-${index}`}
              role="region"
              aria-labelledby={`panduan-faq-trigger-${index}`}
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
