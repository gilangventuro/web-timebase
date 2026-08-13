"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.logoLink}
          aria-label={`${SITE_NAME} - kembali ke Beranda`}
          title={`${SITE_NAME} - Software Monitoring Karyawan WFA`}
        >
          <Image
            src="/assets/logo-timebase-wordmark-gradient-tagline.png"
            alt="Logo Time Base - software monitoring karyawan WFA dengan tagline Accountability in Every Hour"
            title="Time Base - Accountability in Every Hour"
            width={220}
            height={48}
            priority
            className={styles.logoDesktop}
          />
          <Image
            src="/assets/logo-timebase-icon-gradient.png"
            alt="Logo ikon Time Base - platform monitoring karyawan WFA"
            title="Time Base"
            width={40}
            height={40}
            priority
            className={styles.logoMobile}
          />
        </Link>

        <nav className={styles.navDesktop} aria-label="Navigasi utama">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} title={`${SITE_NAME} - ${link.label}`}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/kontak" className={styles.ctaButton} title="Jadwalkan demo software monitoring karyawan WFA">
            Jadwalkan Demo
          </Link>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={menuOpen}
            tabIndex={0}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`${styles.navMobile} ${menuOpen ? styles.navMobileOpen : ""}`}
        aria-label="Navigasi mobile"
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)} title={`${SITE_NAME} - ${link.label}`}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/kontak"
              onClick={() => setMenuOpen(false)}
              className={styles.ctaButtonMobile}
              title="Jadwalkan demo software monitoring karyawan WFA"
            >
              Jadwalkan Demo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
