import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/header-filter`;
const PAGE_TITLE = "Header & Filter Global";
const PAGE_DESCRIPTION = "Elemen navigasi global yang tampil di semua halaman aplikasi.";

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

export default function PanduanHeaderFilterPage() {
  const { prev, next } = getPanduanPageNav("/panduan/header-filter");

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

      <div className={styles.crumb}>Navigasi &amp; Akun &middot; 1</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Filter Tanggal Global
      </h2>
      <p className={styles.paragraph}>
        Klik kolom tanggal di pojok kiri atas untuk membuka date range picker. Tersedia preset cepat (Hari Ini,
        Minggu Ini, Bulan Ini, Bulan Lalu, Tahun Ini, Tahun Lalu) atau pilih tanggal custom lewat kalender ganda.
        Filter ini berlaku di semua halaman monitoring.
      </p>
      <PanduanShot
        src="02-date-picker.jpg"
        alt="Date range picker dengan preset cepat dan kalender dua bulan"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Filter Karyawan Global
      </h2>
      <p className={styles.paragraph}>
        Dropdown pencarian untuk memilih satu karyawan tertentu, atau membiarkannya pada &ldquo;Semua
        karyawan&rdquo; untuk melihat data tim secara keseluruhan.
      </p>
      <PanduanShot
        src="03-employee-filter.jpg"
        alt="Dropdown filter karyawan dengan daftar pencarian per individu"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>3</span>Employee-Switcher pada Detail Aktivitas
      </h2>
      <p className={styles.paragraph}>
        Saat berada di halaman Detail Aktivitas per Karyawan, filter karyawan di header otomatis berubah menjadi{" "}
        <em>employee-switcher</em> &mdash; memungkinkan berpindah ke karyawan lain tanpa perlu kembali ke daftar.
      </p>
      <PanduanShot
        src="04-employee-switcher.jpg"
        alt="Employee-switcher di header saat berada pada halaman Detail Aktivitas per Karyawan"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>4</span>Kondisi Data Kosong
      </h2>
      <p className={styles.paragraph}>
        Jika tanggal yang dipilih belum memiliki data aktivitas, halaman akan menampilkan pesan &ldquo;Belum ada
        aktivitas pada periode ini.&rdquo;
      </p>
      <PanduanShot
        src="05-empty-state.jpg"
        alt="Kondisi data kosong ketika periode terpilih belum memiliki aktivitas"
      />

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
