import type { Metadata } from "next";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/harga`;

const PAGE_TITLE = "Harga Berlangganan Timebase — Paket Silver, Platinum, Gold";
const PAGE_DESCRIPTION =
  "Bandingkan paket berlangganan Timebase — Silver, Platinum, dan Gold — dengan harga per karyawan/bulan yang makin hemat seiring pertumbuhan tim Anda.";

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
    tier: "< 50 Karyawan",
    note: null,
    prices: { silver: "17.500", platinum: "22.000", gold: { price: "30.000", was: "35.000" } },
  },
  {
    tier: "< 200 Karyawan",
    note: null,
    prices: { silver: "15.000", platinum: "19.000", gold: { price: "25.000", was: "30.000" } },
  },
  {
    tier: "< 400 Karyawan",
    note: "28% lebih murah",
    prices: { silver: "12.500", platinum: "15.500", gold: { price: "20.000", was: "25.000" } },
  },
  {
    tier: "> 400 Karyawan",
    note: "43% lebih murah",
    prices: { silver: "10.000", platinum: "12.500", gold: { price: "15.000", was: "20.000" } },
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
              Mulai pantau kinerja tim Anda hari ini — pilih paket yang sesuai jumlah karyawan, tanpa kontrak
              mengikat, dan upgrade kapan saja seiring pertumbuhan bisnis Anda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: Tabel Harga */}
      <section className={styles.pricing}>
        <div className="container">
          <AnimatedSection as="div">
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.tierHeadCell} scope="col">
                      <span className={styles.tierHeadTitle}>Paket Kami</span>
                      <span className={styles.tierHeadSub}>bulan/karyawan</span>
                    </th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.id}
                        scope="col"
                        className={`${styles.planHeadCell} ${styles[`planHead_${plan.id}`]}`}
                      >
                        {plan.id === "gold" && <span className={styles.ribbon}>Best Seller</span>}
                        <span className={styles.planName}>{plan.name}</span>
                        <span className={styles.planTagline}>{plan.tagline}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICE_ROWS.map((row) => (
                    <tr key={row.tier}>
                      <th scope="row" className={styles.tierCell}>
                        {row.tier}
                        {row.note && <span className={styles.tierNote}>{row.note}</span>}
                      </th>
                      <td className={styles.priceCell}>
                        <span className={styles.price}>Rp {row.prices.silver}</span>
                      </td>
                      <td className={styles.priceCell}>
                        <span className={styles.price}>Rp {row.prices.platinum}</span>
                      </td>
                      <td className={`${styles.priceCell} ${styles.priceCellGold}`}>
                        <span className={styles.priceWas}>Rp {row.prices.gold.was}</span>
                        <span className={styles.price}>Rp {row.prices.gold.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.scrollHint}>Geser ke samping untuk membandingkan paket &rarr;</p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.ctaBlock}>
            <p className={styles.ctaNote}>
              <Check size={18} aria-hidden="true" />
              Butuh paket khusus untuk tim di atas 400 karyawan atau kebutuhan enterprise?
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
