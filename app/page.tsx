import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CirclePlay,
  CircleUserRound,
  ClipboardList,
  FileSearch,
  Quote,
  UsersRound,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import BerandaMultiCityHub from "@/components/BerandaMultiCityHub";
import BerandaCaraKerjaSteps from "@/components/BerandaCaraKerjaSteps";
import BerandaFaqAccordion from "@/components/BerandaFaqAccordion";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, CONTACT_WA_LINK, CONTACT_EMAIL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  // Note: `title.template` on the root layout does NOT apply to a `title`
  // defined in a page.tsx of the SAME route segment (root layout + root
  // page here) — see Next.js metadata docs. The full title must be spelled
  // out explicitly on this page only; child route segments (e.g. /fitur)
  // can rely on the layout's template as usual.
  title: `${SITE_NAME} — Monitoring Aktivitas Karyawan Real-Time`,
  description:
    "Solusi monitoring aktivitas dan produktivitas karyawan real-time, transparan & berbasis consent. Timebase: accountability tool, bukan alat pengintaian.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} — Monitoring Aktivitas Karyawan Real-Time`,
    description:
      "Solusi monitoring aktivitas dan produktivitas karyawan real-time, transparan & berbasis consent. Timebase: accountability tool, bukan alat pengintaian.",
  },
};

const PROBLEM_ITEMS = [
  {
    icon: FileSearch,
    title: "Tanpa Bukti ke Direksi",
    desc: "Kesulitan memantau kinerja dan aktivitas karyawan secara objektif — evaluasi kebijakan masih berbasis kesan, bukan data.",
  },
  {
    icon: ClipboardList,
    title: "Micromanagement Manual Menyita Waktu",
    desc: "Check-in WhatsApp dan laporan Excel harian menghabiskan jam kerja HR tanpa hasil akurat.",
  },
  {
    icon: UsersRound,
    title: "Trust Gap Antar Tim",
    desc: "Hanya 24% karyawan percaya rekan remote-nya benar-benar produktif setiap hari (survei Envoy).",
  },
  {
    icon: Building2,
    title: "Tim Tersebar Lintas Kota",
    desc: "Pengawasan manual oleh satu manajer tidak lagi mungkin dilakukan secara fisik.",
  },
];

const TESTIMONIAL_SLOTS = [1, 2, 3];

const FAQ_ITEMS = [
  {
    question: "Apakah monitoring aktivitas karyawan Timebase melanggar privasi?",
    answer:
      "Tidak. Tracking berjalan atas persetujuan tertulis karyawan dan hanya mencakup data aktivitas kerja, bukan konten pribadi di luar konteks pekerjaan.",
  },
  {
    question: "Apakah data karyawan aman sesuai UU PDP No. 27/2022?",
    answer: (
      <>
        Ya, data dikelola dengan prinsip perlindungan data pribadi yang berlaku di Indonesia. Detail lengkap di{" "}
        <Link href="/keamanan-kepatuhan" title={`${SITE_NAME} - Keamanan & Kepatuhan`}>
          halaman Keamanan &amp; Kepatuhan
        </Link>
        .
      </>
    ),
  },
  {
    question: "Berapa harga aplikasi monitoring karyawan enterprise Timebase?",
    answer:
      "Skema harga disesuaikan jumlah karyawan dan kebutuhan tim kerja perusahaan Anda — hubungi tim kami untuk penawaran langsung via WhatsApp.",
  },
  {
    question: "Apakah Timebase bisa memantau karyawan di luar Kota Malang?",
    answer:
      "Ya. Meski berbasis di Malang, dashboard real-time Timebase dirancang memantau karyawan lintas kota dari satu titik kontrol terpusat.",
  },
  {
    question: "Apa beda Timebase dengan HRIS lain yang punya fitur monitoring?",
    answer:
      "Timebase fokus khusus pada akuntabilitas kinerja real-time karyawan, bukan sistem HRIS serba-guna dengan payroll dan modul administratif lain.",
  },
];

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo-timebase-wordmark-tagline.png`,
      description:
        "Timebase membantu perusahaan memantau aktivitas dan produktivitas karyawan secara real-time, baik yang bekerja jarak jauh maupun di kantor, memberikan visibilitas dan akuntabilitas kerja yang transparan.",
      slogan: SITE_TAGLINE,
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kota Malang",
        addressRegion: "Jawa Timur",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+62-82142781080",
        email: CONTACT_EMAIL,
        areaServed: "ID",
        availableLanguage: ["id"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Sistem monitoring aktivitas dan produktivitas karyawan real-time — accountability tool, bukan surveillance tool, berbasis consent tertulis sesuai UU PDP No. 27/2022.",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        description: "Hubungi tim Timebase untuk skema harga sesuai kebutuhan tim perusahaan Anda.",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "id-ID",
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
      <section className={styles.hero} aria-labelledby="hero-headline">
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <span className={styles.badge}>{SITE_TAGLINE}</span>
            <h1 id="hero-headline" className={styles.headline}>
              Solusi Monitoring Aktivitas dan Produktivitas Karyawan
            </h1>
            <p className={styles.subheadline}>
              Pantau kinerja dan aktivitas karyawan secara real-time dan transparan, baik yang bekerja jarak jauh
              maupun di kantor. Bukan alat pengintaian, melainkan bukti akuntabilitas kerja.
            </p>
            <div className={styles.heroCtas}>
              <a
                href={CONTACT_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                title="Request Demo Gratis Timebase via WhatsApp"
              >
                Request Demo Gratis
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#cara-kerja"
                className={styles.ctaSecondary}
                title="Lihat Cara Kerja Timebase Real-Time"
              >
                <CirclePlay size={18} aria-hidden="true" />
                Lihat Cara Kerja
              </a>
            </div>
            <ul className={styles.statsRow} aria-label="Statistik kepercayaan Timebase">
              <li className={`${styles.statItem} stagger-item`}>
                <span className={styles.statValue}>100+</span>
                <span className={styles.statLabel}>Klien/Pengguna Aktif</span>
              </li>
              <li className={`${styles.statItem} stagger-item`}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Monitoring Real-Time</span>
              </li>
              <li className={`${styles.statItem} stagger-item`}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Consent Tertulis</span>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.heroVisual} delay={150} ambient>
            <Image
              src="/assets/dashboard-laptop-mockup.png"
              alt="Dashboard Timebase menampilkan aktivitas karyawan real-time di laptop"
              title="Dashboard Real-Time Timebase — Monitoring Aktivitas Karyawan"
              width={1448}
              height={1086}
              priority
              className={styles.heroImage}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: PROBLEM — Kerja Tanpa Kepastian */}
      <section className={styles.problem} aria-labelledby="problem-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="problem-title" className={styles.sectionTitle}>
              Kerja Tanpa Kepastian
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Daftar masalah monitoring aktivitas karyawan">
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

      {/* SECTION 3: SOLUTION — Akuntabilitas, Bukan Pengintaian */}
      <section className={styles.solution} aria-labelledby="solution-title">
        <div className="container">
          <AnimatedSection as="div" className={`${styles.sectionHead} ${styles.sectionHeadWide}`}>
            <h2 id="solution-title" className={styles.sectionTitle}>
              Akuntabilitas, Bukan Pengintaian
            </h2>
            <p className={styles.valueProp}>
              Timebase membantu perusahaan memantau aktivitas dan produktivitas karyawan melalui sistem tracking
              real-time, memberikan visibilitas dan akuntabilitas kerja yang transparan — baik untuk tim remote
              maupun yang bekerja di kantor.
            </p>
          </AnimatedSection>

          <div className={styles.solutionGrid}>
            <AnimatedSection as="div" className={styles.solutionVisual} delay={100}>
              <BerandaMultiCityHub />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4: CARA KERJA — Cara Kerja Timebase Real-Time */}
      <section id="cara-kerja" className={styles.caraKerja} aria-labelledby="cara-kerja-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="cara-kerja-title" className={styles.sectionTitle}>
              Cara Kerja Timebase Real-Time
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.caraKerjaNote}>
            <p>
              Belum ada video profil resmi Timebase. Animasi interaktif berikut memvisualisasikan alur real-time:
              konsultasi &amp; pendaftaran, instalasi ringan, hingga dashboard aktif — motion signature Dynamic
              Pulse, berkelanjutan selama Anda memutar.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <BerandaCaraKerjaSteps />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF — Dipercaya 100+ Klien Aktif */}
      <section className={styles.socialProof} aria-labelledby="social-proof-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="social-proof-title" className={styles.sectionTitle}>
              Dipercaya 100+ Klien Aktif
            </h2>
            <p className={styles.leadStat}>
              <strong>100+</strong> Klien/Pengguna Aktif Timebase
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Slot testimonial klien Timebase">
              {TESTIMONIAL_SLOTS.map((slot) => (
                <div className={`${styles.testimonialCard} stagger-item`} key={slot} tabIndex={0}>
                  <Quote size={22} className={styles.quoteMark} aria-hidden="true" />
                  <p className={styles.testimonialQuote}>[Slot Testimonial — Menunggu Kutipan Klien Resmi]</p>
                  <div className={styles.testimonialPerson}>
                    <CircleUserRound size={26} className={styles.testimonialAvatar} aria-hidden="true" />
                    <div className={styles.testimonialPersonInfo}>
                      <span className={styles.testimonialName}>[Menunggu Data Klien]</span>
                      <span className={styles.testimonialRole}>[Menunggu Data Klien]</span>
                    </div>
                  </div>
                </div>
              ))}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: FAQ — Pertanyaan Umum Seputar Timebase */}
      <section className={styles.faq} aria-labelledby="faq-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="faq-title" className={styles.sectionTitle}>
              Pertanyaan Umum Seputar Timebase
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <BerandaFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7: CTA (penutup) — Jangan Tunggu Krisis Kepercayaan Tim */}
      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 id="cta-title" className={styles.ctaHeadline}>
              Jangan Tunggu Krisis Kepercayaan Tim
            </h2>
            <p className={styles.ctaSubheadline}>
              Setiap hari tanpa data objektif adalah risiko sengketa kerja dan kepercayaan tim yang goyah. Mulai
              request demo dan dapatkan visibilitas real-time hari ini.
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
              title="Request Demo Sekarang bersama Timebase via WhatsApp"
            >
              Request Demo Sekarang
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className={styles.guarantee}>Konsultasi kebutuhan via WhatsApp, tanpa proses berbelit.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
