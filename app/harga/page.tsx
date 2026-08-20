import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/harga`;

const PAGE_TITLE = "Harga Berlangganan Timebase — Bulanan & Tahunan";
const PAGE_DESCRIPTION =
  "Harga berlangganan Timebase disesuaikan dengan jumlah user tim Anda — pilih bayar bulanan atau tahunan untuk potongan harga lebih besar.";

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

const PRICE_PER_USER_MONTHLY = 5_000;
// Annual billing runs at a genuinely cheaper effective rate per user/month
// than paying month-to-month, rather than the same rate with a cosmetic
// "Hemat" label — this is what actually gets multiplied into the total.
const PRICE_PER_USER_ANNUAL_MONTHLY_EQUIVALENT = 3_000;
const MONTHLY_DISCOUNT_RATE = 0.03;
// Bracket boundaries: rows 1-3 read "< N User" (priced at N), the last row
// is the open-ended "> " bracket, priced at the next step in the sequence.
const USER_TIERS = [10, 30, 50, 70];
// The first two brackets (< 10, < 30) don't carry a monthly "Hemat" note.
const TIERS_WITHOUT_SAVINGS = 2;

const formatRupiah = (value: number) => value.toLocaleString("id-ID");

// The per-user rate is flat regardless of tier — the "Hemat" note is a
// separate savings callout, it doesn't reduce the billed total — so this is
// the same for every row rather than computed per tier.
const MONTHLY_PER_USER_LABEL = `≈ Rp ${formatRupiah(PRICE_PER_USER_MONTHLY)}/user`;
// Tahun shows the flat per-user rate itself (not a bracket total), since it's
// the same regardless of team size.
const ANNUAL_PRICE_LABEL = `Rp ${formatRupiah(PRICE_PER_USER_ANNUAL_MONTHLY_EQUIVALENT)}`;
const ANNUAL_SAVINGS_LABEL = `Hemat Rp ${formatRupiah(
  PRICE_PER_USER_MONTHLY - PRICE_PER_USER_ANNUAL_MONTHLY_EQUIVALENT
)}/user dari harga bulanan`;

const PRICE_ROWS = USER_TIERS.map((users, index) => {
  const monthly = users * PRICE_PER_USER_MONTHLY;
  const showMonthlySavings = index >= TIERS_WITHOUT_SAVINGS;
  const monthlySavings = Math.round(monthly * MONTHLY_DISCOUNT_RATE);
  const isLast = index === USER_TIERS.length - 1;
  const tier = isLast ? `> ${USER_TIERS[index - 1]} User` : `< ${users} User`;

  return {
    tier,
    monthly: formatRupiah(monthly),
    monthlyNote: showMonthlySavings ? `Hemat Rp ${formatRupiah(monthlySavings)}` : null,
  };
});

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
              Mulai pantau kinerja tim Anda hari ini — pilih paket sesuai jumlah user tim Anda, dengan potongan
              ekstra jika Anda berlangganan tahunan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: Tabel Harga */}
      <section className={styles.pricing}>
        <div className="container">
          <AnimatedSection as="div">
            <div className={styles.priceGridScroll}>
              <div className={styles.priceGrid} role="group" aria-label="Harga berlangganan per jumlah user, bulanan dan tahunan">
                <div className={styles.priceCol}>
                  <div className={`${styles.colHead} ${styles.colHeadUser}`}>
                    <span className={styles.tierHeadTitle}>Jumlah User</span>
                  </div>
                  {PRICE_ROWS.map((row) => (
                    <div className={styles.colRow} key={row.tier}>
                      <span className={styles.tierCellText}>{row.tier}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.priceCol}>
                  <div className={`${styles.colHead} ${styles.colHeadBulan}`}>
                    <span className={styles.planName}>Bulan</span>
                    <span className={styles.planTagline}>Bayar tiap bulan</span>
                  </div>
                  {PRICE_ROWS.map((row) => (
                    <div className={styles.colRow} key={row.tier}>
                      <span className={styles.price}>Rp {row.monthly}</span>
                      <span className={styles.perUserNote}>{MONTHLY_PER_USER_LABEL}</span>
                      {row.monthlyNote && <span className={styles.tierNote}>{row.monthlyNote}</span>}
                    </div>
                  ))}
                </div>

                <div className={`${styles.priceCol} ${styles.priceColTahun}`}>
                  <Image
                    src="/assets/badge-best-seller.png"
                    alt="Best Seller"
                    title="Paket Tahunan — Best Seller"
                    width={243}
                    height={259}
                    className={styles.bestSellerBadge}
                  />
                  <div className={`${styles.colHead} ${styles.colHeadTahun}`}>
                    <span className={styles.mobileBadge} aria-hidden="true">
                      Best Seller
                    </span>
                    <span className={styles.planName}>Tahun</span>
                    <span className={styles.planTagline}>Bayar sekali untuk 12 bulan</span>
                  </div>
                  {PRICE_ROWS.map((row) => (
                    <div className={styles.colRow} key={row.tier}>
                      <span className={styles.price}>
                        {ANNUAL_PRICE_LABEL}
                        <span className={styles.priceUnit}>/user/bulan</span>
                      </span>
                      <span className={styles.tierNote}>{ANNUAL_SAVINGS_LABEL}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.scrollHint}>Geser ke samping untuk membandingkan &rarr;</p>

            <p className={styles.annualNote}>
              Berlangganan tahunan lebih hemat — bayar sekali untuk 12 bulan dan dapatkan harga per bulan yang lebih
              murah dibanding langganan bulanan.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.ctaBlock}>
            <p className={styles.ctaNote}>
              <Check size={18} aria-hidden="true" />
              Butuh estimasi harga untuk jumlah user lain atau kebutuhan khusus?
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
