import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_WA_LINK, CONTACT_WA_NUMBER, NAV_LINKS, OPERATIONAL_AREA, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <div className={styles.logoBox}>
            <Image
              src="/assets/logo-timebase-wordmark-tagline.png"
              alt="Logo Timebase — accountability tool monitoring aktivitas karyawan real-time"
              title="Timebase — Monitoring Aktivitas dan Produktivitas Karyawan"
              width={180}
              height={28}
              className={styles.logo}
            />
          </div>
          <p className={styles.tagline}>{SITE_TAGLINE}.</p>
          <p className={styles.desc}>
            {SITE_NAME} membantu perusahaan memantau aktivitas dan produktivitas karyawan secara real-time dan
            transparan — accountability tool, bukan surveillance tool.
          </p>
        </div>

        <nav className={styles.navCol} aria-label="Navigasi footer">
          <h2 className={styles.colTitle}>Halaman</h2>
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

        <div className={styles.contactCol}>
          <h2 className={styles.colTitle}>Kontak</h2>
          <ul>
            <li>
              <a
                href={CONTACT_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                title={`Hubungi ${SITE_NAME} via WhatsApp`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>{CONTACT_WA_NUMBER} (WhatsApp)</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} title={`Kirim email ke ${SITE_NAME}`}>
                <Mail size={16} aria-hidden="true" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </li>
            <li className={styles.address}>
              <MapPin size={16} aria-hidden="true" />
              <span>{OPERATIONAL_AREA}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>
          © {year} {SITE_NAME}. Seluruh hak cipta dilindungi.
        </p>
        <p>Berbasis Consent Tertulis, sesuai UU PDP No. 27/2022</p>
      </div>
    </footer>
  );
}
