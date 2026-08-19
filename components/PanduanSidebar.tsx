"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { PANDUAN_NAV_GROUPS } from "@/lib/panduan-nav";
import styles from "./PanduanSidebar.module.css";

export default function PanduanSidebar() {
  const pathname = usePathname();

  // Collapsed by default; the group containing the active page starts open.
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const activeGroup = PANDUAN_NAV_GROUPS.find((group) => group.links.some((link) => link.href === pathname));
    return activeGroup ? { [activeGroup.label]: true } : {};
  });

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Navigasi panduan">
        {PANDUAN_NAV_GROUPS.map((group) => {
          const isOpen = Boolean(openGroups[group.label]);
          const panelId = `panduan-nav-${group.label.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <div className={styles.navGroup} key={group.label}>
              <button
                type="button"
                className={styles.navLabel}
                onClick={() => toggleGroup(group.label)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                tabIndex={0}
              >
                <span>{group.label}</span>
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={isOpen ? styles.chevronOpen : styles.chevron}
                />
              </button>
              <ul id={panelId} className={isOpen ? styles.navListOpen : styles.navList}>
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
          );
        })}
      </nav>
    </aside>
  );
}
