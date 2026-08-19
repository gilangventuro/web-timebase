import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PerbandinganTable from "@/components/PerbandinganTable";
import PerbandinganFAQ from "@/components/PerbandinganFAQ";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_TITLE = "Time Base vs Hubstaff & Time Doctor: Monitoring WFA";
const PAGE_DESCRIPTION =
  "Bandingkan aplikasi monitoring karyawan terbaik Indonesia: Time Base vs Time Doctor, Hubstaff, Insightful, Dokodemo-Kerja. Harga IDR transparan.";
const PAGE_URL = `${SITE_URL}/perbandingan`;

export const metadata: Metadata = {
  // `title.absolute` bypasses the root layout's `%s | Time Base` template —
  // the PRD title tag already spells out "Time Base" itself, so appending
  // the template suffix would duplicate the brand name in the tab title.
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function PerbandinganPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ComparisonPage",
      name: PAGE_TITLE,
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        name: "Perbandingan Time Base vs Kompetitor Software Monitoring Karyawan",
        itemListElement: [
          { "@type": "SoftwareApplication", position: 1, name: "Time Base", url: SITE_URL },
          { "@type": "SoftwareApplication", position: 2, name: "Time Doctor", url: "https://www.timedoctor.com/" },
          { "@type": "SoftwareApplication", position: 3, name: "Hubstaff", url: "https://hubstaff.com/" },
          { "@type": "SoftwareApplication", position: 4, name: "Insightful", url: "https://www.insightful.io/" },
          {
            "@type": "SoftwareApplication",
            position: 5,
            name: "Dokodemo-Kerja",
            url: "https://dokodemo-kerja.com/",
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Perbandingan", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO — inner page, tanpa heroImage, single column terpusat */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>Kenapa Perusahaan WFA Pilih Time Base</h1>
            <p className={styles.subheadline}>
              Kompetitor global pakai istilah remote/hybrid generik dan harga USD. Time Base fokus WFA, harga
              Rupiah, transparan.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="#tabel-perbandingan"
                className={styles.ctaPrimary}
                title="Lihat tabel perbandingan Time Base vs Time Doctor, Hubstaff, Insightful, Dokodemo-Kerja"
              >
                Lihat Tabel Perbandingan
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: SOLUTION — Tabel Perbandingan Eksplisit (comparisonTable) */}
      <section className={styles.comparison} id="tabel-perbandingan">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Time Base vs Kompetitor Utama</h2>
            <p className={styles.valueProp}>
              Kedalaman fitur monitoring real-time (Active/Idle/Distraction) setara pemain global, dengan harga
              dalam Rupiah dan support lokal — mengisi celah antara kompetitor global (mahal, USD-only) dan
              kompetitor lokal (murah tapi dangkal).
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <PerbandinganTable />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pertanyaan Seputar Perbandingan</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <PerbandinganFAQ />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: CTA (FOMO) */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Saatnya Beralih ke Time Base</h2>
            <p className={styles.ctaSubheadline}>
              Rasakan visibilitas tim real-time tanpa biaya tersembunyi. Respons cepat lewat WhatsApp, bukan sistem
              tiket impersonal.
            </p>
            <Link
              href="/kontak"
              className={styles.ctaButtonLarge}
              title="Jadwalkan demo gratis software monitoring karyawan Time Base"
            >
              Jadwalkan Demo Gratis
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
