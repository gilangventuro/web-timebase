"use client";

import { useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./PerbandinganFAQ.module.css";

interface FAQItem {
  q: string;
  a: string;
}

// Konten verbatim dari planning/PLAN-perbandingan.md Section 4 (Section 3: faq).
const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Apa bedanya Time Base dibanding Time Doctor dan Hubstaff?",
    a: "Time Doctor dan Hubstaff memposisikan diri untuk tim remote/hybrid secara umum dan mematok harga dalam USD tanpa lokalisasi. Time Base secara eksplisit dirancang untuk skema Work From Anywhere (WFA) dengan harga dalam Rupiah dan dukungan lokal.",
  },
  {
    q: "Apakah Time Base alternatif Time Doctor yang lebih transparan?",
    a: "Review G2 dan Trustpilot mencatat keluhan berulang soal billing yang membingungkan dan kesan monitoring invasif pada Time Doctor. Time Base menerapkan kebijakan monitoring yang disosialisasikan terbuka ke tim, dengan harga IDR tanpa biaya tersembunyi.",
  },
  {
    q: "Lebih unggul mana, Time Base atau Dokodemo-Kerja, untuk monitoring real-time?",
    a: "Dokodemo-Kerja mengambil screenshot secara acak satu kali setiap 10 menit tanpa status real-time. Time Base menampilkan status Active/Idle/Distraction secara real-time sepanjang sesi kerja aktif, memberi visibilitas yang jauh lebih granular untuk software monitoring karyawan lokal setara standar global.",
  },
];

/**
 * PerbandinganFAQ — accordion FAQ 3 item khusus halaman /perbandingan.
 * Nama komponen sengaja unik (mengandung "Perbandingan") agar tidak
 * bentrok dengan komponen FAQ halaman lain yang dibangun paralel.
 */
export default function PerbandinganFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = document.getElementById(`perbandingan-faq-trigger-${(index + 1) % FAQ_ITEMS.length}`);
      next?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = document.getElementById(
        `perbandingan-faq-trigger-${(index - 1 + FAQ_ITEMS.length) % FAQ_ITEMS.length}`
      );
      prev?.focus();
    }
  };

  return (
    <div className={styles.list}>
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `perbandingan-faq-panel-${index}`;
        const triggerId = `perbandingan-faq-trigger-${index}`;
        return (
          <div className={`${styles.item} stagger-item`} key={item.q}>
            <h3 className={styles.question}>
              <button
                type="button"
                id={triggerId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                title={item.q}
                tabIndex={0}
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={isOpen ? styles.iconOpen : styles.icon}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={isOpen ? styles.panelOpen : styles.panel}
            >
              <p className={styles.answer}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
