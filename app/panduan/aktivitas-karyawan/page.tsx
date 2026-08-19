import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanCallout from "@/components/PanduanCallout";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/aktivitas-karyawan`;
const PAGE_TITLE = "Aktivitas Karyawan";
const PAGE_DESCRIPTION = "Pantau aktivitas kerja harian tiap karyawan secara real-time.";

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

export default function AktivitasKaryawanPage() {
  const { prev, next } = getPanduanPageNav("/panduan/aktivitas-karyawan");

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

      <div className={styles.crumb}>Monitoring &middot; 1</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Dashboard Aktivitas Karyawan
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>Aktivitas</code>. Setiap karyawan ditampilkan sebagai kartu ringkasan
        berisi foto, badge ikon platform/OS perangkat (Windows/Mac), nama, jabatan, total jam kerja (tracked time),
        dan progress bar warna aktivitas (Active/Idle/Distraction/Cek sendiri).
      </p>
      <PanduanShot
        src="01-sidebar-dashboard.jpg"
        alt="Dashboard Aktivitas Karyawan menampilkan kartu ringkasan tiap karyawan"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Membuka Detail Aktivitas per Karyawan
      </h2>
      <p className={styles.paragraph}>
        Klik salah satu kartu karyawan untuk membuka detailnya. Panel kiri menampilkan foto, nama, jabatan, progress
        bar Tracked Time, serta ringkasan Active, Distraction, Idle, dan Tak Terekam (waktu yang tidak terlacak
        agen). Panel kanan menampilkan Timeline Aktivitas berupa grafik warna per jam.
      </p>
      <PanduanShot
        src="10-detail-aktivitas.jpg"
        alt="Detail Aktivitas per Karyawan: ringkasan waktu dan timeline aktivitas per jam"
      />

      <h3 className={styles.h3}>Tab Screenshots</h3>
      <p className={styles.paragraph}>
        Galeri screenshot pada rentang waktu terpilih. Klik thumbnail untuk membuka pratinjau ukuran penuh (lightbox)
        dengan tombol <code className={styles.code}>Buka Asli</code>.
      </p>
      <PanduanShot
        src="11-lightbox-screenshot.jpg"
        alt="Lightbox pratinjau screenshot ukuran penuh dengan tombol Buka Asli"
      />

      <h3 className={styles.h3}>Tab Per Jam</h3>
      <p className={styles.paragraph}>
        Breakdown durasi per blok jam. Klik salah satu blok untuk expand melihat rincian aplikasi/situs yang dipakai
        pada jam tersebut. Tersedia opsi &ldquo;Pilih jam untuk dihapus&rdquo;.
      </p>
      <PanduanShot src="12-tab-per-jam.jpg" alt="Tab Per Jam: daftar blok jam beserta durasi" />
      <PanduanShot
        src="13-tab-per-jam-expand.jpg"
        alt="Blok jam di-expand menampilkan rincian aplikasi yang dipakai"
      />

      <h3 className={styles.h3}>Tab Aplikasi &amp; Tab URL</h3>
      <p className={styles.paragraph}>
        Tab Aplikasi menampilkan daftar aplikasi yang dipakai beserta durasi dan jumlah kali dibuka. Tab URL
        menampilkan daftar situs yang dikunjungi beserta jumlah halaman dan durasi.
      </p>
      <PanduanShot src="14-tab-aplikasi.jpg" alt="Tab Aplikasi: daftar aplikasi dengan durasi pemakaian" />
      <PanduanShot
        src="15-tab-url.jpg"
        alt="Tab URL: daftar situs yang dikunjungi dengan jumlah halaman dan durasi"
      />

      <PanduanCallout variant="tip">
        ↩ Gunakan tombol <strong>Kembali ke daftar</strong> atau employee-switcher di header untuk berpindah karyawan.
      </PanduanCallout>

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
