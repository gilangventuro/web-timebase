"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import anime from "animejs";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  /** Enables an infinite ambient Framer Motion float + hover lift, on top of the scroll reveal. */
  ambient?: boolean;
}

/**
 * AnimatedSection — Anime.js + IntersectionObserver HOC.
 *
 * Scroll-direction aware reveal (Trilogi Animasi AAA — AGENTS.md Pasal III.3):
 * animation fires ONLY when the element enters the viewport while the user is
 * scrolling DOWN. It resets to hidden whenever the element exits the viewport,
 * so it is ready to fire again on the next downward pass. `once: true` is
 * intentionally never used.
 */
export default function AnimatedSection({
  children,
  className = "",
  as = "div",
  delay = 0,
  ambient = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const scrollingDown = window.scrollY >= lastScrollY.current;

          const staggerItems = el.querySelectorAll<HTMLElement>(".stagger-item");

          if (entry.isIntersecting && scrollingDown) {
            anime.remove(el);
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              delay,
              easing: "easeOutCubic",
            });

            if (staggerItems.length > 0) {
              anime.remove(staggerItems);
              anime({
                targets: staggerItems,
                opacity: [0, 1],
                translateY: [24, 0],
                duration: 700,
                delay: anime.stagger(100, { start: delay + 150 }),
                easing: "easeOutCubic",
              });
            }
          } else if (!entry.isIntersecting) {
            anime.remove(el);
            anime.set(el, { opacity: 0, translateY: 30 });

            if (staggerItems.length > 0) {
              anime.remove(staggerItems);
              anime.set(staggerItems, { opacity: 0, translateY: 24 });
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      anime.remove(el);
      observer.disconnect();
    };
  }, [delay]);

  const Tag = as as ElementType;

  const content = (
    <Tag
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(30px)", willChange: "opacity, transform" }}
    >
      {children}
    </Tag>
  );

  if (!ambient) return content;

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: "easeOut" as const } }}
    >
      {content}
    </motion.div>
  );
}
