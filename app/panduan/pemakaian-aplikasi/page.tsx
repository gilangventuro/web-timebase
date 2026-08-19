import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/pemakaian-aplikasi`;
const PAGE_TITLE = "Pemakaian Aplikasi";
const PAGE_DESCRIPTION = "Tinjau aplikasi apa saja yang paling banyak dipakai tim.";

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

export default function PemakaianAplikasiPage() {
  const { prev, next } = getPanduanPageNav("/panduan/pemakaian-aplikasi");

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

      <div className={styles.crumb}>Monitoring &middot; 3</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Ringkasan Pemakaian Aplikasi
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>Aplikasi</code>. Halaman ini menampilkan ringkasan total aplikasi,
        total karyawan, dan total durasi untuk periode terpilih &mdash; diikuti daftar aplikasi terpopuler lengkap
        dengan total durasi dan jumlah karyawan pengguna.
      </p>
      <PanduanShot
        src="20-ringkasan-aplikasi.jpg"
        alt="Ringkasan Pemakaian Aplikasi: daftar aplikasi terpopuler dengan total durasi"
        caption="Ringkasan Pemakaian Aplikasi: daftar aplikasi terpopuler dengan total durasi"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Melihat Siapa yang Mengakses
      </h2>
      <p className={styles.paragraph}>
        Klik ikon panah pada salah satu aplikasi untuk expand daftar &ldquo;Diakses oleh&rdquo; beserta durasi
        pemakaian per karyawan.
      </p>
      <PanduanShot
        src="21-expand-aplikasi.jpg"
        alt="Expand salah satu aplikasi menampilkan daftar karyawan yang mengaksesnya beserta durasi"
        caption="Expand salah satu aplikasi menampilkan daftar karyawan yang mengaksesnya beserta durasi"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>3</span>Filter &amp; Pencarian
      </h2>
      <p className={styles.paragraph}>
        Gunakan kolom pencarian nama karyawan/aplikasi, dan filter status (Semua / Active / Distraction) untuk
        menyaring daftar.
      </p>
      <PanduanShot
        src="22-filter-status-aplikasi.jpg"
        alt="Filter status pemakaian aplikasi: Semua, Active, Distraction"
        caption="Filter status pemakaian aplikasi: Semua, Active, Distraction"
      />

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
