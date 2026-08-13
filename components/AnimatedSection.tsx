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
 * once the user has performed a real scroll gesture, animation only (re)fires
 * when the element enters the viewport while scrolling DOWN, and resets to
 * hidden whenever the element exits — so it's ready to fire again on the next
 * downward pass. `once: true` is intentionally never used.
 *
 * Bug fix (QA iteration 1): the directional gate must NOT block the very
 * first reveal. Before any real "scroll" event has fired (fresh page load,
 * or a full-page/CDP screenshot that resizes the viewport instead of
 * scrolling it — `window.scrollY` never changes in that case), there is no
 * meaningful "direction" yet, so content that is already intersecting must
 * reveal immediately rather than wait for a scroll delta that may never
 * come. A bounded safety-net timer additionally force-reveals any element
 * that, for whatever timing reason, never received a qualifying
 * IntersectionObserver callback — content must never be permanently stuck
 * at opacity:0.
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
  const hasUserScrolled = useRef(false);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      hasUserScrolled.current = true;
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const reveal = () => {
      const staggerItems = el.querySelectorAll<HTMLElement>(".stagger-item");
      hasRevealed.current = true;

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
    };

    const hide = () => {
      const staggerItems = el.querySelectorAll<HTMLElement>(".stagger-item");
      hasRevealed.current = false;

      anime.remove(el);
      anime.set(el, { opacity: 0, translateY: 30 });

      if (staggerItems.length > 0) {
        anime.remove(staggerItems);
        anime.set(staggerItems, { opacity: 0, translateY: 24 });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Before the user's first real scroll gesture, direction is
          // meaningless (no delta exists yet) — treat as eligible so
          // above/near-the-fold content reveals on initial paint instead of
          // waiting indefinitely for a "downward" scroll that may never
          // register (e.g. automated full-page screenshot tools that resize
          // the viewport rather than dispatching scroll events).
          const scrollingDown = !hasUserScrolled.current || window.scrollY >= lastScrollY.current;

          // Idempotent: only actually (re)start a tween on a genuine
          // hidden->visible or visible->hidden transition. Without this
          // guard, a redundant `isIntersecting: true` callback (which can
          // legitimately fire more than once for the same visible state —
          // e.g. after a layout shift, or racing the safety-net fallback
          // below) would restart the opacity tween from 0 and visibly snap
          // already-revealed content back out.
          if (entry.isIntersecting && scrollingDown && !hasRevealed.current) {
            reveal();
          } else if (!entry.isIntersecting && hasRevealed.current) {
            hide();
          }
        });
      },
      // Generous bottom margin: sections well below the fold are treated as
      // "approaching" and reveal proactively instead of waiting for the user
      // to physically scroll them into the strict viewport box. This keeps
      // the scroll-reveal choreography for genuinely long pages while making
      // sure a normal one-page layout is fully visible without depending on
      // a real scroll gesture ever occurring.
      { threshold: 0.15, rootMargin: "0px 0px 2000px 0px" }
    );

    observer.observe(el);

    // Safety net: guarantee content is never permanently invisible even if
    // the IntersectionObserver callback is skipped/delayed/never qualifies
    // (e.g. a page taller than the rootMargin above, or an unusually late
    // first callback under a particular browser/render pipeline — observed
    // to happen well outside typical interactive-browsing timing in some
    // automated/headless environments). Snaps directly to the final visible
    // state — no further tween/race window once it fires. The idempotent
    // guard above means a subsequent real observer callback is a safe no-op
    // once this has already revealed the element.
    const fallback = window.setTimeout(() => {
      if (!hasRevealed.current) {
        hasRevealed.current = true;
        const staggerItems = el.querySelectorAll<HTMLElement>(".stagger-item");
        anime.remove(el);
        anime.set(el, { opacity: 1, translateY: 0 });
        if (staggerItems.length > 0) {
          anime.remove(staggerItems);
          anime.set(staggerItems, { opacity: 1, translateY: 0 });
        }
      }
    }, 600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(fallback);
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
