import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanCallout from "@/components/PanduanCallout";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/pemakaian-situs`;
const PAGE_TITLE = "Pemakaian Situs (URL)";
const PAGE_DESCRIPTION = "Tinjau situs web apa saja yang paling banyak dikunjungi tim.";

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

export default function PanduanPemakaianSitusPage() {
  const { prev, next } = getPanduanPageNav("/panduan/pemakaian-situs");

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

      <div className={styles.crumb}>Monitoring &middot; 4</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Ringkasan Pemakaian Situs
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>URL</code>. Sama seperti menu Aplikasi, halaman ini menampilkan
        ringkasan total situs, total karyawan, dan total durasi, diikuti daftar situs dengan jumlah halaman yang
        dikunjungi dan total durasi.
      </p>
      <PanduanShot
        src="23-ringkasan-situs.jpg"
        alt="Ringkasan Pemakaian Situs dengan daftar situs terpopuler"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Melihat Siapa yang Mengakses
      </h2>
      <p className={styles.paragraph}>
        Expand salah satu situs untuk melihat karyawan yang mengaksesnya, lengkap dengan jumlah halaman diakses dan
        durasi per karyawan. Klik nama karyawan pada daftar tersebut untuk melihat rincian link/halaman yang dibuka.
      </p>
      <PanduanShot
        src="24-expand-situs.jpg"
        alt="Expand salah satu situs menampilkan daftar karyawan pengakses beserta durasi"
      />

      <PanduanCallout variant="tip">
        💡 Kolom pencarian dan filter status (Semua/Active/Distraction) tersedia sama seperti pada menu Aplikasi.
      </PanduanCallout>

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
