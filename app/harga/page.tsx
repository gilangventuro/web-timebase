import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import HargaPaketCard from "@/components/HargaPaketCard";
import HargaFaqAccordion from "@/components/HargaFaqAccordion";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Harga Software Monitoring Karyawan Rupiah",
  description:
    "Cek paket harga Time Base disesuaikan skala tim Anda. Biaya aplikasi monitoring karyawan transparan dalam Rupiah, tanpa biaya tersembunyi—hubungi kami.",
  alternates: { canonical: `${SITE_URL}/harga` },
};

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Hubungi Kami",
    features: [
      "Real-time Activity Monitoring (status Active/Idle/Distraction)",
      "Automatic Screenshot Capture selama sesi kerja aktif",
      "App & Website Usage Tracking dasar",
      "Akses admin tunggal (single admin dashboard)",
      "Cocok untuk tim kecil yang baru menerapkan WFA",
    ],
    ctaText: "Request Penawaran",
    ctaTarget: CONTACT_WA_LINK,
  },
  {
    name: "Business",
    price: "Hubungi Kami",
    features: [
      "Seluruh fitur paket Starter",
      "User & Access Management penuh (role admin, team lead, HR)",
      "Kontrol kebijakan monitoring yang bisa disesuaikan (frekuensi screenshot, cakupan jam kerja aktif)",
      "Dashboard multi-tim untuk struktur organisasi yang berkembang",
      "Direkomendasikan untuk tim menengah lintas divisi",
    ],
    ctaText: "Request Penawaran",
    ctaTarget: CONTACT_WA_LINK,
    badge: "Direkomendasikan untuk Tim Berkembang",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Hubungi Kami",
    features: [
      "Seluruh fitur paket Business",
      "Struktur akses berlapis lintas divisi (admin pusat, team lead per divisi, HR korporat)",
      "Kebijakan monitoring kustom per divisi/role",
      "Onboarding dan dukungan khusus untuk implementasi skala besar",
      "Cocok untuk perusahaan dengan tim WFA tersebar di banyak kota",
    ],
    ctaText: "Konsultasi Enterprise",
    ctaTarget: CONTACT_WA_LINK,
  },
];

const FAQ_ITEMS = [
  {
    question: "Berapa biaya berlangganan Time Base per bulan?",
    answer:
      "Biaya dihitung berdasarkan skema per-user per bulan dengan pilihan paket sesuai skala tim, sehingga perusahaan kecil dengan beberapa karyawan tetap bisa mulai tanpa komitmen biaya besar di awal. Hubungi tim kami untuk mendapatkan rincian penawaran sesuai kebutuhan Anda.",
  },
  {
    question: "Apakah harga ditampilkan dalam Rupiah atau Dolar?",
    answer:
      "Seluruh skema harga Time Base dihitung dalam Rupiah (IDR), transparan tanpa konversi kurs asing dan tanpa biaya tersembunyi — berbeda dari sebagian kompetitor global yang umumnya hanya menyediakan harga dalam USD.",
  },
  {
    question: "Apakah biaya langganan ini sepadan dengan manfaatnya?",
    answer:
      "Pertimbangkan biaya langganan bulanan terhadap jam kerja produktif yang berhasil diselamatkan dari kebocoran waktu non-produktif dan risiko keterlambatan deliverable — semakin besar tim yang dipantau, semakin terasa nilai akuntabilitas yang didapat dibanding biaya langganannya.",
  },
  {
    question: "Apakah ada paket khusus untuk tim kecil atau startup?",
    answer:
      "Ada. Paket Starter dirancang untuk tim kecil yang baru menerapkan WFA, mencakup monitoring real-time dan screenshot otomatis dengan struktur akses sederhana, sehingga perusahaan tidak perlu langsung berkomitmen pada paket besar.",
  },
  {
    question: "Bagaimana cara mendapatkan penawaran harga Time Base?",
    answer:
      "Hubungi tim kami melalui WhatsApp di 082142781080 untuk konsultasi kebutuhan tim Anda, dan dapatkan penawaran paket yang sesuai skala tim serta struktur akses yang dibutuhkan.",
  },
];

export default function HargaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${SITE_NAME} — Software Monitoring Karyawan WFA`,
      description:
        "Software monitoring karyawan real-time untuk tim Work From Anywhere (WFA), tersedia dalam paket Starter, Business, dan Enterprise.",
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/harga`,
      },
      url: `${SITE_URL}/harga`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Harga",
          item: `${SITE_URL}/harga`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO (inner page — teks murni, tanpa heroImage) */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>Harga Jelas, Tanpa Biaya Tersembunyi</h1>
            <p className={styles.subheadline}>
              Skema harga software monitoring karyawan dalam Rupiah, disesuaikan skala tim Anda — hubungi kami untuk
              penawaran.
            </p>
            <Link
              href={CONTACT_WA_LINK}
              className={styles.ctaPrimary}
              title="Hubungi Time Base via WhatsApp untuk penawaran harga"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: PRICING */}
      <section className={styles.pricing}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pilih Paket Sesuai Skala Tim</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Daftar paket harga Time Base">
              {PRICING_TIERS.map((tier) => (
                <HargaPaketCard
                  key={tier.name}
                  name={tier.name}
                  price={tier.price}
                  features={tier.features}
                  ctaText={tier.ctaText}
                  ctaTarget={tier.ctaTarget}
                  badge={tier.badge}
                  highlighted={tier.highlighted}
                />
              ))}
            </SwipeableCards>
          </AnimatedSection>

          <AnimatedSection as="p" className={styles.transparencyNote}>
            Seluruh harga dihitung dalam Rupiah (IDR) berdasarkan skema per-user/bulan, tanpa biaya tersembunyi.
            Nominal disesuaikan jumlah user dan kebutuhan fitur tim Anda — tim sales kami akan memberikan rincian
            lengkap saat konsultasi.
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pertanyaan Seputar Harga</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <HargaFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Dapatkan Penawaran Sebelum Tim Kehilangan Kendali</h2>
            <p className={styles.ctaSubheadline}>
              Setiap hari tanpa visibilitas real-time adalah risiko produktivitas yang terus bertambah —
              konsultasikan kebutuhan tim WFA Anda sekarang.
            </p>
            <Link
              href={CONTACT_WA_LINK}
              className={styles.ctaButtonLarge}
              title="Hubungi Time Base sekarang via WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi Kami Sekarang
            </Link>
            <p className={styles.guarantee}>Konsultasi awal via WhatsApp, tanpa komitmen di muka.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
