import type { Metadata } from "next";
import { Check, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/harga`;

const PAGE_TITLE = "Harga Berlangganan Timebase — Per User, Bulanan & Tahunan";
const PAGE_DESCRIPTION =
  "Harga berlangganan Timebase dihitung per user dan makin hemat seiring pertumbuhan tim Anda — pilih bayar bulanan atau tahunan untuk potongan harga lebih besar.";

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

const PRICE_ROWS = [
  {
    tier: "< 50 User",
    note: null,
    monthly: "17.500",
    annualMonthly: "14.000",
    annualTotal: "168.000",
  },
  {
    tier: "< 200 User",
    note: null,
    monthly: "15.000",
    annualMonthly: "12.000",
    annualTotal: "144.000",
  },
  {
    tier: "< 400 User",
    note: "28% lebih murah",
    monthly: "12.500",
    annualMonthly: "10.000",
    annualTotal: "120.000",
  },
  {
    tier: "> 400 User",
    note: "43% lebih murah",
    monthly: "10.000",
    annualMonthly: "8.000",
    annualTotal: "96.000",
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
            <div className={styles.tableScroll}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.tierHeadCell} scope="col">
                      <span className={styles.tierHeadTitle}>Jumlah User</span>
                    </th>
                    <th className={`${styles.planHeadCell} ${styles.planHeadBulan}`} scope="col">
                      <span className={styles.planName}>Bulan</span>
                      <span className={styles.planTagline}>Bayar tiap bulan</span>
                    </th>
                    <th className={`${styles.planHeadCell} ${styles.planHeadTahun}`} scope="col">
                      <span className={styles.ribbon}>Best Seller</span>
                      <span className={styles.planName}>Tahun</span>
                      <span className={styles.planTagline}>Bayar sekali untuk 12 bulan</span>
                    </th>
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
                        <span className={styles.price}>
                          Rp {row.monthly}
                          <span className={styles.priceUnit}>/bulan</span>
                        </span>
                      </td>
                      <td className={`${styles.priceCell} ${styles.priceCellTahun}`}>
                        <span className={styles.price}>
                          Rp {row.annualTotal}
                          <span className={styles.priceUnit}>/tahun</span>
                        </span>
                        <span className={styles.priceAnnualNote}>&asymp; Rp {row.annualMonthly}/bulan</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className={styles.scrollHint}>Geser ke samping untuk membandingkan &rarr;</p>

            <p className={styles.annualNote}>
              <Sparkles size={16} aria-hidden="true" />
              Berlangganan tahunan lebih hemat — bayar sekali untuk 12 bulan dan dapatkan harga per bulan yang lebih
              murah dibanding langganan bulanan.
            </p>
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
