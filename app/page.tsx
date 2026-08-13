import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Camera,
  EyeOff,
  Globe,
  HelpCircle,
  Users,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import DashboardMock from "@/components/DashboardMock";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Software Monitoring Karyawan WFA",
  description:
    "Software monitoring karyawan WFA dari Time Base: platform monitoring karyawan real-time, harga IDR transparan untuk tim WFA Indonesia.",
  alternates: { canonical: SITE_URL },
};

const PROBLEM_ITEMS = [
  {
    icon: EyeOff,
    title: "Kehilangan Visibilitas Tim",
    desc: "Manajer kehilangan visibilitas ritme kerja tim sejak kebijakan WFA diberlakukan.",
  },
  {
    icon: HelpCircle,
    title: "Productivity Paranoia",
    desc: "Keraguan terus-menerus apakah karyawan remote benar-benar bekerja tanpa bukti objektif selain klaim verbal.",
  },
  {
    icon: AlertTriangle,
    title: "Penyalahgunaan Jam Kerja",
    desc: "Aktivitas non-produktif di jam kerja tidak terdeteksi karena tak ada catatan pemakaian aplikasi dan situs.",
  },
];

const SOLUTION_BENEFITS = [
  {
    icon: Activity,
    title: "Real-time Activity Monitoring",
    desc: "Status Active/Idle/Distraction secara real-time.",
  },
  {
    icon: Camera,
    title: "Automatic Screenshot Capture",
    desc: "Screenshot otomatis selama sesi kerja aktif.",
  },
  {
    icon: Globe,
    title: "App & Website Usage Tracking",
    desc: "Pencatatan pemakaian aplikasi & situs web selama jam kerja.",
  },
  {
    icon: Users,
    title: "User & Access Management",
    desc: "Manajemen user, role, dan hak akses.",
  },
];

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Software monitoring karyawan WFA: platform monitoring aktivitas kerja real-time untuk tim Work From Anywhere.",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-timebase-wordmark-gradient-tagline.png`,
      slogan: "Accountability in Every Hour",
      email: "timebase@gmail.com",
      areaServed: "ID",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
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
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <span className={styles.badge}>Accountability in Every Hour</span>
            <h1 className={styles.headline}>Monitoring Kerja Real-Time untuk Tim WFA</h1>
            <p className={styles.subheadline}>
              Platform monitoring aktivitas kerja untuk karyawan, dirancang agar perusahaan yang menerapkan skema
              Work From Anywhere (WFA) bisa memantau kinerja timnya secara real-time.
            </p>
            <div className={styles.heroCtas}>
              <Link
                href="/kontak"
                className={styles.ctaPrimary}
                title="Jadwalkan demo gratis software monitoring karyawan WFA"
              >
                Jadwalkan Demo Gratis
              </Link>
              <Link
                href="/fitur"
                className={styles.ctaSecondary}
                title="Lihat fitur monitoring aktivitas karyawan Active Idle Distraction"
              >
                Lihat Fitur
              </Link>
            </div>
            <p className={styles.stats}>
              <strong>100+</strong> Dipercaya 100+ Klien
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.heroVisual} delay={150} ambient>
            <DashboardMock />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: PROBLEM */}
      <section className={styles.problem}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Visibilitas Hilang Sejak WFA Diberlakukan</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Daftar masalah visibilitas tim WFA">
              {PROBLEM_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div className={`${styles.problemCard} stagger-item`} key={item.title} tabIndex={0}>
                    <Icon size={28} className={styles.problemIcon} aria-hidden="true" />
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: SOLUTION */}
      <section className={styles.solution}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Empat Fitur Inti Time Base</h2>
            <p className={styles.valueProp}>
              Mampu monitoring aktivitas kerja karyawan secara efektif untuk skema WFA — memberi visibilitas dan
              akuntabilitas kerja meski tim tersebar di mana saja.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Empat fitur inti Time Base">
              {SOLUTION_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div className={`${styles.solutionCard} stagger-item`} key={benefit.title} tabIndex={0}>
                    <span className={styles.solutionIconWrap}>
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{benefit.title}</h3>
                    <p className={styles.cardDesc}>{benefit.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: CTA (FOMO) */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Jangan Tunggu Sampai Kendali Hilang</h2>
            <p className={styles.ctaSubheadline}>
              Bergabung dengan 100+ perusahaan yang sudah mengembalikan akuntabilitas kerja tim WFA mereka.
            </p>
            <Link
              href="/kontak"
              className={styles.ctaButtonLarge}
              title="Jadwalkan demo software monitoring karyawan WFA sekarang"
            >
              Jadwalkan Demo Sekarang
            </Link>
            <p className={styles.guarantee}>
              Setup dalam hitungan hari, tanpa tim IT khusus, dan harga transparan tanpa biaya tersembunyi.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
