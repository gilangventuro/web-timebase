"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, CircleUserRound, Quote } from "lucide-react";
import styles from "./TestimonialCarousel.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialCarouselProps {
  items: readonly Testimonial[];
  ariaLabel: string;
}

/**
 * TestimonialCarousel — shows 3 cards at a time (2 on tablet, 1 on mobile)
 * inside a fixed-width viewport; prev/next buttons page through the rest.
 * Card width is set responsively in CSS, so the JS side only needs to
 * measure the actual rendered card width to know how far to scroll.
 */
export default function TestimonialCarousel({ items, ariaLabel }: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateEdges = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft >= maxScroll - 4);
    };

    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      track.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild as HTMLElement | null;
    if (!firstCard) return;
    const gap = parseFloat(window.getComputedStyle(track).columnGap || "0");
    const step = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.navBtn}
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        aria-label="Lihat testimoni sebelumnya"
      >
        <ChevronLeft size={20} aria-hidden="true" />
      </button>

      <div className={styles.track} ref={trackRef} role="list" aria-label={ariaLabel}>
        {items.map((item) => (
          <div className={`${styles.card} stagger-item`} role="listitem" key={item.name} tabIndex={0}>
            <Quote size={22} className={styles.quoteMark} aria-hidden="true" />
            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.person}>
              <CircleUserRound size={26} className={styles.avatar} aria-hidden="true" />
              <div className={styles.personInfo}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.navBtn}
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        aria-label="Lihat testimoni berikutnya"
      >
        <ChevronRight size={20} aria-hidden="true" />
      </button>
    </div>
  );
}
