import type { Metadata } from "next";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HargaPricingTable from "@/components/HargaPricingTable";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/harga`;

const PAGE_TITLE = "Harga Berlangganan Timebase — Paket Silver, Platinum, Gold";
const PAGE_DESCRIPTION =
  "Bandingkan paket berlangganan Timebase — Silver, Platinum, dan Gold — dengan harga per user yang makin hemat seiring pertumbuhan tim Anda, plus potongan tambahan untuk pembayaran tahunan.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

const PLANS = [
  {
    id: "silver",
    name: "Silver",
    tagline: "Monitoring dasar aktivitas kerja real-time",
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "+ Screenshot berkala & distraction rules",
  },
  {
    id: "gold",
    name: "Gold",
    tagline: "Paket terlengkap, semua fitur & pelaporan lanjutan",
    bestSeller: true,
  },
] as const;

const PRICE_ROWS = [
  {
    tier: "< 50 User",
    note: null,
    prices: {
      silver: { monthly: "17.500", annualMonthly: "14.000", annualTotal: "168.000" },
      platinum: { monthly: "22.000", annualMonthly: "17.500", annualTotal: "210.000" },
      gold: { monthly: "30.000", monthlyWas: "35.000", annualMonthly: "24.000", annualTotal: "288.000" },
    },
  },
  {
    tier: "< 200 User",
    note: null,
    prices: {
      silver: { monthly: "15.000", annualMonthly: "12.000", annualTotal: "144.000" },
      platinum: { monthly: "19.000", annualMonthly: "15.000", annualTotal: "180.000" },
      gold: { monthly: "25.000", monthlyWas: "30.000", annualMonthly: "20.000", annualTotal: "240.000" },
    },
  },
  {
    tier: "< 400 User",
    note: "28% lebih murah",
    prices: {
      silver: { monthly: "12.500", annualMonthly: "10.000", annualTotal: "120.000" },
      platinum: { monthly: "15.500", annualMonthly: "12.500", annualTotal: "150.000" },
      gold: { monthly: "20.000", monthlyWas: "25.000", annualMonthly: "16.000", annualTotal: "192.000" },
    },
  },
  {
    tier: "> 400 User",
    note: "43% lebih murah",
    prices: {
      silver: { monthly: "10.000", annualMonthly: "8.000", annualTotal: "96.000" },
      platinum: { monthly: "12.500", annualMonthly: "10.000", annualTotal: "120.000" },
      gold: { monthly: "15.000", monthlyWas: "20.000", annualMonthly: "12.000", annualTotal: "144.000" },
    },
  },
] as const;

export default function HargaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Employee Monitoring Subscription",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: "ID",
      url: PAGE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Harga", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 1: HERO */}
      <section className={styles.hero}>
        <div className="container">
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>Subscription Price</h1>
            <p className={styles.subheadline}>
              Mulai pantau kinerja tim Anda hari ini — harga dihitung per user dan makin hemat seiring bertambahnya
              jumlah user, dengan potongan ekstra jika Anda berlangganan tahunan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: Tabel Harga */}
      <section className={styles.pricing}>
        <div className="container">
          <AnimatedSection as="div">
            <HargaPricingTable plans={PLANS} rows={PRICE_ROWS} />
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.ctaBlock}>
            <p className={styles.ctaNote}>
              <Check size={18} aria-hidden="true" />
              Butuh paket khusus untuk tim di atas 400 user atau kebutuhan enterprise?
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
              title="Konsultasi Paket Berlangganan Timebase via WhatsApp"
            >
              Konsultasi Paket via WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
