"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PANDUAN_NAV_GROUPS } from "@/lib/panduan-nav";
import styles from "./PanduanSidebar.module.css";

export default function PanduanSidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandMark} aria-hidden="true">
          T
        </span>
        <div>
          <div className={styles.brandTitle}>Panduan TimeBase</div>
          <div className={styles.brandSub}>Timebase &middot; WFA Monitoring</div>
        </div>
      </div>

      <nav aria-label="Navigasi panduan">
        {PANDUAN_NAV_GROUPS.map((group) => (
          <div className={styles.navGroup} key={group.label}>
            <div className={styles.navLabel}>{group.label}</div>
            <ul>
              {group.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={isActive ? styles.navLinkActive : styles.navLink}
                      aria-current={isActive ? "page" : undefined}
                      title={link.label}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
