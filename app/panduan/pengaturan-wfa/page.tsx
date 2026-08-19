import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanCallout from "@/components/PanduanCallout";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/pengaturan-wfa`;
const PAGE_TITLE = "Pengaturan";
const PAGE_DESCRIPTION = "Konfigurasi monitoring, klasifikasi aktivitas, dan informasi keamanan.";

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

export default function PengaturanWfaPage() {
  const { prev, next } = getPanduanPageNav("/panduan/pengaturan-wfa");

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

      <div className={styles.crumb}>Manajemen &middot; 3</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Konfigurasi Tracking
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>Pengaturan</code> &rarr; tab{" "}
        <code className={styles.code}>Konfigurasi Tracking</code>. Aktifkan atau nonaktifkan tiga parameter
        pelacakan pada aplikasi agen desktop karyawan: Screenshot Otomatis (interval sekitar 10 menit selama sesi
        aktif), Pelacakan Aplikasi, dan Pelacakan URL. Klik <code className={styles.code}>Simpan Setelan WFA</code>{" "}
        untuk menerapkan perubahan.
      </p>
      <PanduanShot
        src="34-konfigurasi-tracking.jpg"
        alt="Tab Konfigurasi Tracking dengan toggle Screenshot Otomatis, Pelacakan Aplikasi, dan Pelacakan URL"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Aturan Distraction
      </h2>
      <p className={styles.paragraph}>
        Beralih ke tab <code className={styles.code}>Aturan Distraction</code> untuk mengelola daftar tag
        Distraction Aplikasi (mis. steam, epic games, game, mobile legends) dan Distraction Situs (mis.
        facebook.com, netflix.com, twitter.com, x.com, tiktok.com, store.steampowered.com). Tambah tag baru lewat
        kolom input, hapus dengan klik ikon &times; pada tiap tag.
      </p>
      <PanduanShot
        src="35-aturan-distraction.jpg"
        alt="Tab Aturan Distraction dengan daftar tag Distraction Aplikasi dan Distraction Situs"
      />

      <PanduanCallout variant="warn">
        ⚠ Perubahan klasifikasi hanya berlaku untuk blok aktivitas <strong>baru</strong>. Blok yang sudah tersimpan
        tidak dihitung ulang otomatis.
      </PanduanCallout>

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
