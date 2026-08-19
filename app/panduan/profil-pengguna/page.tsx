import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanCallout from "@/components/PanduanCallout";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/profil-pengguna`;
const PAGE_TITLE = "Profil Pengguna";
const PAGE_DESCRIPTION = "Informasi akun dan pengelolaan password lewat panel profil.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function PanduanProfilPenggunaPage() {
  const { prev, next } = getPanduanPageNav("/panduan/profil-pengguna");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    author: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.crumb}>Navigasi &amp; Akun &middot; 3</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Panel Profil
      </h2>
      <p className={styles.paragraph}>
        Klik foto/nama akun di pojok kanan atas untuk membuka panel profil. Panel ini menampilkan nama, akses
        (role), tenant, departemen, dan NIK milik akun yang sedang login.
      </p>
      <PanduanShot
        src="08-panel-profil.jpg"
        alt="Panel profil menampilkan nama, akses, tenant, departemen, dan NIK"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Form Ganti Password
      </h2>
      <p className={styles.paragraph}>
        Di bagian bawah panel profil terdapat form untuk mengganti password &mdash; membutuhkan password saat ini,
        password baru (minimal 8 karakter), dan pengulangan password baru.
      </p>
      <PanduanShot
        src="09-ganti-password.jpg"
        alt="Form Ganti Password dengan tiga kolom: password saat ini, password baru, dan ulangi password baru"
      />

      <PanduanCallout variant="lock">
        🔒 Data pribadi (email, NIK) pada tangkapan layar ini telah disamarkan sesuai kebijakan privasi dokumentasi.
      </PanduanCallout>

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
