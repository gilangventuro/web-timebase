import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/pengaturan-tampilan`;
const PAGE_TITLE = "Pengaturan Tampilan";
const PAGE_DESCRIPTION = "Personalisasi tampilan antarmuka lewat ikon gerigi di header.";

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

export default function PengaturanTampilanPage() {
  const { prev, next } = getPanduanPageNav("/panduan/pengaturan-tampilan");

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

      <div className={styles.crumb}>Navigasi &amp; Akun &middot; 2</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Membuka Panel Pengaturan Tampilan
      </h2>
      <p className={styles.paragraph}>
        Klik ikon gerigi di header untuk membuka panel pengaturan tampilan. Panel ini mengatur preferensi visual
        secara personal, tidak memengaruhi data monitoring.
      </p>

      <PanduanShot
        src="06-panel-tampilan.jpg"
        alt="Panel Pengaturan Tampilan: Mode gelap/terang, Kontras, Kanan ke kiri, Ringkas, dan Tata letak navigasi"
      />

      <ul className={styles.list}>
        <li>
          <strong>Mode</strong> &mdash; beralih antara tampilan terang dan gelap
        </li>
        <li>
          <strong>Kontras</strong> &mdash; meningkatkan kontras visual elemen antarmuka
        </li>
        <li>
          <strong>Kanan ke kiri</strong> &mdash; mode tata letak RTL
        </li>
        <li>
          <strong>Ringkas</strong> &mdash; tampilan lebih padat
        </li>
        <li>
          <strong>Navigasi &amp; Warna</strong> &mdash; pilihan tata letak sidebar dan skema warna
        </li>
      </ul>

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Preset Tema &amp; Font
      </h2>
      <p className={styles.paragraph}>
        Gulir ke bawah untuk memilih preset warna cepat, jenis font (Public Sans, Inter, DM Sans, Nunito Sans), serta
        ukuran font.
      </p>

      <PanduanShot src="07-preset-tema-font.jpg" alt="Preset warna tema dan pilihan jenis/ukuran font" />

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
