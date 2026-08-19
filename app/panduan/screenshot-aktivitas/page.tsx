import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/screenshot-aktivitas`;
const PAGE_TITLE = "Screenshot Aktivitas";
const PAGE_DESCRIPTION = "Tinjau dokumentasi visual aktivitas kerja karyawan.";

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

export default function PanduanScreenshotAktivitasPage() {
  const { prev, next } = getPanduanPageNav("/panduan/screenshot-aktivitas");

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

      <div className={styles.crumb}>Monitoring &middot; 2</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Galeri Screenshot per Karyawan
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>Screenshot</code>. Gunakan kolom pencarian karyawan atau project
        untuk menyaring. Tiap kartu karyawan menampilkan project terkait, jumlah screenshot, persentase keaktifan,
        dan rentang jam aktivitas.
      </p>
      <PanduanShot
        src="16-galeri-timeline.jpg"
        alt="Galeri screenshot per karyawan dalam mode Timeline"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Mode Tampilan: Timeline vs Grid
      </h2>
      <p className={styles.paragraph}>
        Beralih antara mode Timeline (urut waktu) dan Grid (susunan kotak) lewat toggle di bawah info karyawan.
      </p>
      <PanduanShot src="17-galeri-grid.jpg" alt="Mode tampilan Grid pada galeri screenshot" />

      <h2 className={styles.h2}>
        <span className={styles.num}>3</span>Badge &amp; Pratinjau
      </h2>
      <p className={styles.paragraph}>
        Badge <strong>&ldquo;Slightly Unusual&rdquo;</strong> muncul pada screenshot tertentu yang polanya berbeda
        dari biasanya. Klik thumbnail mana pun untuk membuka pratinjau ukuran penuh (lightbox) lengkap dengan info
        karyawan, project, waktu pengambilan, dan status aktif.
      </p>
      <PanduanShot
        src="18-badge-lightbox.jpg"
        alt="Lightbox pratinjau screenshot ukuran penuh lengkap dengan info karyawan dan waktu pengambilan"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>4</span>Pencarian &amp; Muat Lebih Banyak
      </h2>
      <p className={styles.paragraph}>
        Ketik nama karyawan pada kolom pencarian di pojok kanan atas untuk langsung menyaring galeri. Gunakan
        tombol &ldquo;Muat lebih banyak&rdquo; untuk memuat screenshot tambahan pada satu kartu karyawan.
      </p>
      <PanduanShot
        src="19-pencarian-galeri.jpg"
        alt="Hasil pencarian karyawan pada galeri Screenshot Aktivitas"
      />

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
