"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CONTACT_WA_LINK, NAV_LINKS, SITE_NAME } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
          title="Timebase — Monitoring Aktivitas dan Produktivitas Karyawan"
        >
          <Image
            src="/assets/logo-timebase-wordmark-tagline.png"
            alt="Logo Timebase — accountability tool monitoring aktivitas karyawan real-time"
            title="Timebase — Monitoring Aktivitas dan Produktivitas Karyawan"
            width={220}
            height={48}
            priority
            loading="eager"
            className={styles.logo}
          />
        </Link>

        <nav className={styles.navDesktop} aria-label="Navigasi utama">
          <ul>
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    title={`${SITE_NAME} - ${link.label}`}
                    className={isActive ? styles.navLinkActive : undefined}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a
            href={CONTACT_WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            title="Request Demo Gratis Timebase via WhatsApp"
          >
            Request Demo
          </a>
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
          {NAV_LINKS.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  title={`${SITE_NAME} - ${link.label}`}
                  className={isActive ? styles.navLinkActive : undefined}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className={styles.ctaButtonMobile}
              title="Request Demo Gratis Timebase via WhatsApp"
            >
              Request Demo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
