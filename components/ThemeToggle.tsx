"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // Read the theme resolved by the blocking inline script (app/layout.tsx) that
  // already stamped `data-theme` on <html> before hydration. This is a one-time
  // read of external/browser state (localStorage + matchMedia via the DOM
  // attribute) on mount, not a value derivable from props/state during render,
  // so it must live in an effect rather than a render-time computation.
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing React state from a DOM attribute set by a pre-hydration script; unavoidable for SSR-safe theme detection.
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("timebase-theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      title="Ganti mode tampilan Time Base"
      tabIndex={0}
    >
      <span suppressHydrationWarning>
        {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
      </span>
    </button>
  );
}
