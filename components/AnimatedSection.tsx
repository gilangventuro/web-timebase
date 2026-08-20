"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
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

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const TRANSITION = "opacity 0.4s ease-out, transform 0.4s ease-out";

/**
 * AnimatedSection — Anime.js + IntersectionObserver HOC.
 *
 * Bug fix (QA iteration 2): two separate root causes were found and fixed.
 *
 * 1. Above-the-fold content (hero) was still gated behind the same
 *    timer/observer-driven opacity path as scroll-revealed content. Fixed:
 *    an element already inside the initial viewport at mount is decided
 *    synchronously in `useLayoutEffect` (runs before the browser's next
 *    paint) and marked permanently revealed — it never enters the
 *    scroll-hide/reveal cycle and never depends on any async callback or
 *    timer to become solid.
 *
 * 2. Below-the-fold reveals used `anime({ opacity: [0,1], ... })` tweens,
 *    which are driven by Anime.js's own `requestAnimationFrame` ticker.
 *    Direct instrumentation showed that ticker's first callback firing
 *    well outside normal interactive-browsing timing in this render
 *    pipeline — anything depending on it (the opacity tween, and
 *    separately the dashboard's data-viz loop) sat frozen at whatever
 *    partial/incorrect state it captured before that first tick, which is
 *    what read as "stuck at low opacity" or "not rendered at all"
 *    depending on exactly when a screenshot landed. Fixed: reveal/hide now
 *    apply their target opacity/transform *instantly* via `anime.set()`
 *    (a synchronous DOM mutation, not a tween), and the visible fade is
 *    produced by a native CSS `transition` on the element instead — this
 *    runs on the compositor and is not subject to the same JS-timing
 *    delay. `anime.stagger()` is still used, per the Trilogi Animasi AAA
 *    mandate, to compute each item's delay — just applied via
 *    `setTimeout` rather than inside an Anime.js tween.
 *
 * When the section contains `.stagger-item` children, ONLY those children
 * are revealed/hidden — the wrapper itself stays neutral (opacity 1).
 * Animating both would compound their effective rendered opacity (CSS
 * opacity multiplies down the tree).
 *
 * Scroll-direction aware (AGENTS.md Pasal III.3): once the user performs a
 * real scroll gesture, a below-the-fold section only reveals while
 * scrolling DOWN.
 *
 * Bug fix: an earlier version also re-hid a section the moment it exited
 * the viewport (in either direction), so scrolling down past a section and
 * then back up to re-read it found it permanently blank — the hide-on-exit
 * fired correctly, but re-entering while scrolling *up* never satisfied the
 * "scrolling down" reveal gate, so it never came back without a full page
 * reload. A reveal is now sticky: once a section has been shown, it stays
 * shown, and its observer is disconnected. The "no `once: true`" mandate
 * governs the *entrance* animation (it must be driven by real scroll
 * position, not fire unconditionally on mount) — it was never meant to make
 * already-read content vanish again.
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
  const revealedOnMount = useRef(false);

  // Runs synchronously before paint. Above-the-fold content is made solid
  // immediately here and is never touched by the scroll-reveal effect below.
  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isAboveFold = rect.top < viewportHeight && rect.bottom > 0;

    if (isAboveFold) {
      revealedOnMount.current = true;
      hasRevealed.current = true;
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.querySelectorAll<HTMLElement>(".stagger-item").forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
      return;
    }

    // Below the fold: apply the hidden starting state here (not baked into
    // the server-rendered markup) so there is never a window where content
    // is invisible before JS has had a chance to decide whether it should
    // be. The scroll-reveal effect below takes it from here.
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.querySelectorAll<HTMLElement>(".stagger-item").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
    });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealedOnMount.current) return; // already permanently visible — nothing to observe

    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      hasUserScrolled.current = true;
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const staggerItems = Array.from(el.querySelectorAll<HTMLElement>(".stagger-item"));
    const hasStaggerItems = staggerItems.length > 0;
    const pendingTimers: number[] = [];

    const clearPendingTimers = () => {
      pendingTimers.forEach((id) => window.clearTimeout(id));
      pendingTimers.length = 0;
    };

    const reveal = () => {
      hasRevealed.current = true;
      clearPendingTimers();

      if (hasStaggerItems) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        const staggerDelay = anime.stagger(100);
        staggerItems.forEach((item, i) => {
          const itemDelay = delay + staggerDelay(item, i, staggerItems.length);
          const id = window.setTimeout(() => {
            anime.set(item, { opacity: 1, translateY: 0 });
          }, itemDelay);
          pendingTimers.push(id);
        });
      } else {
        const id = window.setTimeout(() => {
          anime.set(el, { opacity: 1, translateY: 0 });
        }, delay);
        pendingTimers.push(id);
      }

      // Sticky reveal: once shown, this section is done being observed —
      // it must never be hidden again just because it scrolls out of view.
      observer.disconnect();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Before the user's first real scroll gesture, direction is
          // meaningless — treat as eligible so near-the-fold content
          // reveals as soon as it genuinely intersects instead of waiting
          // indefinitely for a "downward" scroll that may never register.
          const scrollingDown = !hasUserScrolled.current || window.scrollY >= lastScrollY.current;

          if (entry.isIntersecting && scrollingDown && !hasRevealed.current) {
            reveal();
          }
        });
      },
      // Moderate bottom margin: sections approaching the viewport start
      // revealing a little early, which keeps the choreography readable
      // instead of popping in exactly at the viewport edge.
      { threshold: 0.15, rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(el);

    // Safety net: guarantee content is never permanently invisible even if
    // the IntersectionObserver callback is skipped/delayed/never qualifies
    // under an unusual render/capture pipeline.
    const fallback = window.setTimeout(() => {
      if (!hasRevealed.current) reveal();
    }, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(fallback);
      clearPendingTimers();
      observer.disconnect();
    };
  }, [delay]);

  const Tag = as as ElementType;

  const content = (
    <Tag ref={ref} className={className} style={{ transition: TRANSITION, willChange: "opacity, transform" }}>
      {children}
    </Tag>
  );

  if (!ambient) return content;

  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: "easeOut" as const } }}
    >
      {content}
    </motion.div>
  );
}
