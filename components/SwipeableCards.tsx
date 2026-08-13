"use client";

import { Children, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./SwipeableCards.module.css";

interface SwipeableCardsProps {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}

/**
 * SwipeableCards — Native CSS horizontal scroll (no JS transform manipulation).
 * Desktop (>=768px): renders as a regular responsive CSS Grid.
 * Mobile (<768px): becomes a flex-row scroll-snap carousel with pagination dots.
 * Ref: SKILL.md GATE 3 poin 7.
 */
export default function SwipeableCards({ children, ariaLabel, className = "" }: SwipeableCardsProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
      setActiveIndex(clamped);
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    let closest = 0;
    let minDistance = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - track.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closest = i;
      }
    });
    setActiveIndex(closest);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div
        ref={trackRef}
        className={styles.track}
        role="list"
        aria-label={ariaLabel}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
      >
        {items.map((child, i) => (
          <div className={styles.item} role="listitem" key={i}>
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label={`Navigasi ${ariaLabel}`}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Ke item ${i + 1} dari ${items.length}`}
              className={i === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => scrollToIndex(i)}
              tabIndex={0}
            />
          ))}
        </div>
      )}
    </div>
  );
}
