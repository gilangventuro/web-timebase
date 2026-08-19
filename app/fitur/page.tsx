import type { Metadata } from "next";
import {
  Activity,
  ArrowRight,
  CirclePlay,
  Clock,
  Cloud,
  Cpu,
  Download,
  FileChartColumnIncreasing,
  FileText,
  FileWarning,
  Gavel,
  ListFilter,
  Lock,
  MapPin,
  MapPinOff,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import FiturSetupTimeline from "@/components/FiturSetupTimeline";
import FiturFaqAccordion from "@/components/FiturFaqAccordion";
import FiturRealtimeMockup from "@/components/FiturRealtimeMockup";
import DashboardMock from "@/components/DashboardMock";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/fitur`;

const PAGE_TITLE = "Fitur & Cara Kerja Tracking Real-Time Karyawan";
const PAGE_DESCRIPTION =
  "Aplikasi tracking karyawan real-time Indonesia: instalasi, dashboard monitoring aktivitas kerja, hingga laporan otomatis untuk kebutuhan enterprise.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "monitoring aktivitas karyawan",
    "software monitoring produktivitas karyawan",
    "tracking karyawan real-time",
    "akuntabilitas kerja karyawan",
    "aplikasi monitoring karyawan Indonesia",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

interface IconCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const PROBLEM_CARDS: IconCard[] = [
  {
    icon: FileWarning,
    title: "Laporan Self-Report yang Rawan Bias",
    desc: "Grup WA check-in dan Excel manual menyita waktu HR, namun datanya tetap sulit dipercaya penuh.",
  },
  {
    icon: Gavel,
    title: "Direksi Menagih Bukti, Bukan Kesan",
    desc: "Evaluasi kinerja tim butuh data objektif, bukan asumsi kinerja karyawan yang bekerja jarak jauh maupun di kantor.",
  },
  {
    icon: MapPinOff,
    title: "Tim Tersebar, Pengawasan Tak Feasible",
    desc: "Karyawan lintas kota membuat satu manajer tidak mungkin mengawasi langsung secara fisik.",
  },
];

const REALTIME_BENEFITS: IconCard[] = [
  {
    icon: MapPin,
    title: "Dashboard Terpusat Multi-Kota",
    desc: "Pantau seluruh tim kerja lintas kota dari satu layar, tanpa perlu berkunjung fisik ke lokasi.",
  },
  {
    icon: Clock,
    title: "Log Waktu Kerja Teraudit",
    desc: "Setiap jam kerja tercatat dan dapat ditelusuri, jadi bukti objektif saat ada sengketa lembur.",
  },
  {
    icon: ShieldCheck,
    title: "Bukan Sekadar Absensi GPS",
    desc: "Fokus pada aktivitas kerja berkelanjutan, bukan hanya titik clock-in dan clock-out seperti absensi biasa.",
  },
  {
    icon: FileText,
    title: "Laporan Siap Pakai untuk Direksi",
    desc: "Ringkasan kinerja otomatis, tanpa HR perlu menyusun ulang data dari catatan manual tiap minggu.",
  },
];

interface TechCard {
  icon: LucideIcon;
  techName: string;
  title: string;
  desc: string;
}

const ARCHITECTURE_CARDS: TechCard[] = [
  {
    icon: Cloud,
    techName: "cloud-infrastructure",
    title: "Cloud Infrastructure Terdistribusi",
    desc: "Data tersimpan di server cloud dengan redundansi, menjaga dashboard tetap dapat diakses kapan pun dibutuhkan.",
  },
  {
    icon: RefreshCw,
    techName: "realtime-sync",
    title: "Sinkronisasi Mendekati Real-Time",
    desc: "Interval update singkat memastikan aktivitas yang tampil di dashboard selalu mencerminkan kondisi kerja terkini.",
  },
  {
    icon: Lock,
    techName: "end-to-end-encryption",
    title: "Enkripsi Data End-to-End",
    desc: "Data aktivitas kerja dienkripsi saat dikirim maupun disimpan, meminimalkan risiko kebocoran informasi karyawan.",
  },
  {
    icon: Cpu,
    techName: "lightweight-agent",
    title: "Agen Tracking Ringan",
    desc: "Aplikasi terpasang di perangkat karyawan dirancang minim beban, tidak mengganggu performa kerja perangkat sehari-hari.",
  },
];

const ANIMATION_STEPS: { icon: LucideIcon; label: string }[] = [
  { icon: UserPlus, label: "Onboarding & Pendaftaran" },
  { icon: Download, label: "Instalasi & Consent" },
  { icon: Activity, label: "Dashboard Real-Time Aktif" },
  { icon: FileChartColumnIncreasing, label: "Laporan Berkala" },
];

const FAQ_ITEMS = [
  {
    question: "Bagaimana proses instalasi sistem tracking karyawan di perusahaan kami?",
    answer:
      "Dimulai dari konsultasi kebutuhan, dilanjutkan instalasi agen ringan di perangkat karyawan dengan persetujuan tertulis, hingga dashboard aktif dan siap dipantau tim HR.",
  },
  {
    question: "Berapa lama waktu implementasi sampai dashboard monitoring aktif?",
    answer:
      "Proses onboarding dirancang singkat — begitu instalasi dan consent karyawan selesai, dashboard real-time langsung dapat digunakan tim manajemen.",
  },
  {
    question: "Apakah dashboard bisa memantau tim yang tersebar di banyak kota sekaligus?",
    answer:
      "Ya. Dashboard Timebase terpusat sehingga tim yang bekerja dari kota mana pun tetap terpantau dalam satu layar yang sama.",
  },
  {
    question: "Apa bedanya fitur tracking real-time Timebase dengan aplikasi absensi GPS atau screenshot biasa?",
    answer:
      "Timebase fokus pada aktivitas kerja berkelanjutan sepanjang jam kerja sebagai satu use case utama, bukan sekadar mencatat titik hadir seperti aplikasi absensi umum.",
  },
  {
    question: "Apakah karyawan harus memberi izin sebelum aktivitasnya dipantau?",
    answer:
      "Ya, tracking hanya berjalan setelah persetujuan tertulis karyawan sesuai UU PDP No. 27/2022 — detail lengkap kebijakan ini dijelaskan di halaman Keamanan & Kepatuhan.",
  },
];

export default function FiturPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Aplikasi Tracking Karyawan Real-Time",
      name: "Fitur & Cara Kerja Timebase",
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kota Malang",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
      },
      areaServed: "ID",
      description:
        "Cara kerja sistem tracking karyawan Timebase: dari konsultasi kebutuhan, instalasi agen ringan dengan consent tertulis, dashboard monitoring aktivitas kerja real-time, hingga laporan berkala otomatis.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Fitur & Cara Kerja", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 1: HERO — single column, center-aligned (inner page tanpa heroImage) */}
      <section className={styles.hero} aria-labelledby="hero-fitur-headline">
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <span className={`${styles.eyebrow} stagger-item`}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Fitur &amp; Cara Kerja
            </span>
            <h1 id="hero-fitur-headline" className={`${styles.headline} stagger-item`}>
              Visibilitas Real-Time, Bukan Tebakan
            </h1>
            <p className={`${styles.subheadline} stagger-item`}>
              Satu dashboard menampilkan aktivitas kerja karyawan Anda secara real-time. Transparan bagi HR, adil
              bagi karyawan. Membantu perusahaan memantau kinerja dan aktivitas karyawan secara real-time — baik
              yang kerja jarak jauh maupun di kantor — menjawab tantangan minimnya visibilitas dan akuntabilitas
              kerja.
            </p>

            <div className={`${styles.heroCtaRow} stagger-item`}>
              <a
                href={CONTACT_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                title="Request Demo aplikasi tracking karyawan real-time Timebase via WhatsApp"
              >
                Request Demo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#cara-kerja-fitur"
                className={styles.ctaSecondary}
                title="Lihat Cara Kerja Sistem Tracking Karyawan Timebase"
              >
                <CirclePlay size={18} aria-hidden="true" />
                Lihat Cara Kerja
              </a>
            </div>

            <div className={`${styles.statsRow} stagger-item`}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100+</span>
                <span className={styles.statLabel}>klien/pengguna mempercayai Timebase</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: MASALAH MONITORING MANUAL */}
      <section className={styles.problem} aria-labelledby="problem-fitur-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="problem-fitur-title" className={styles.sectionTitle}>
              Masalah Monitoring Manual
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Daftar masalah monitoring manual karyawan">
              {PROBLEM_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div className={`${styles.problemCard} stagger-item`} key={card.title} tabIndex={0}>
                    <span className={styles.problemIconWrap}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: CARA KERJA TIMEBASE */}
      <section id="cara-kerja-fitur" className={styles.caraKerja} aria-labelledby="cara-kerja-fitur-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="cara-kerja-fitur-title" className={styles.sectionTitle}>
              Cara Kerja Timebase
            </h2>
            <p className={styles.valueProp}>
              Timebase membantu perusahaan memantau karyawan, baik yang bekerja jarak jauh maupun di kantor, melalui
              sistem tracking real-time yang memberikan visibilitas dan akuntabilitas kerja secara transparan.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <FiturSetupTimeline />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: FITUR REAL-TIME MENDALAM */}
      <section className={styles.realtime} aria-labelledby="fitur-realtime-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="fitur-realtime-title" className={styles.sectionTitle}>
              Fitur Real-Time Mendalam
            </h2>
            <p className={styles.valueProp}>
              Bukan cuma absensi GPS sesaat — Timebase merekam pola kerja nyata sepanjang jam kerja: status
              aktivitas, screenshot berkala, dan pemakaian aplikasi/situs kerja, secara transparan dan bisa diaudit.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.realtimeMockupWrap}>
            <FiturRealtimeMockup />
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.realtimeBenefits}>
            <SwipeableCards ariaLabel="Daftar fitur tracking karyawan enterprise real-time Timebase">
              {REALTIME_BENEFITS.map((card) => {
                const Icon = card.icon;
                return (
                  <div className={`${styles.benefitCard} stagger-item`} key={card.title} tabIndex={0}>
                    <span className={styles.benefitIconWrap}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardDesc}>{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.highlightCard}>
            <span className={styles.benefitIconWrap}>
              <UserCheck size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className={styles.cardTitle}>Dibangun untuk Akuntabilitas, Bukan Pengintaian</h3>
              <p className={styles.cardDesc}>
                Tracking berfokus pada data terkait pekerjaan, bukan konten pribadi karyawan di luar konteks kerja.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.statusBlock}>
            <span className={styles.benefitIconWrap}>
              <ListFilter size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className={styles.cardTitle}>Status Active/Idle/Distraction Real-Time</h3>
              <p className={styles.cardDesc}>
                Sistem otomatis mengklasifikasi status kerja karyawan, dengan daftar aturan distraksi yang bisa
                dikustomisasi HR sesuai kebijakan perusahaan.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: ARSITEKTUR DI BALIK TIMEBASE */}
      <section className={styles.architecture} aria-labelledby="techstack-fitur-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="techstack-fitur-title" className={styles.sectionTitle}>
              Arsitektur di Balik Timebase
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Daftar arsitektur teknis di balik sistem tracking Timebase">
              {ARCHITECTURE_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    className={`${styles.archCard} stagger-item`}
                    key={card.techName}
                    tabIndex={0}
                    aria-label={`${card.title} — ${card.desc}`}
                  >
                    <div className={styles.archCardTop}>
                      <span className={styles.archIconWrap}>
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className={styles.terminalDot} aria-hidden="true" />
                    </div>
                    <code className={styles.techName}>{card.techName}</code>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: ANIMASI CARA KERJA (Lihat Cara Kerja Timebase) */}
      <section className={styles.animation} aria-labelledby="video-fitur-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="video-fitur-title" className={styles.sectionTitle}>
              Lihat Cara Kerja Timebase
            </h2>
            <p className={styles.valueProp}>
              Belum ada video profil resmi. Area ini menampilkan animasi interaktif berkelanjutan yang
              memvisualisasikan alur onboarding → instalasi → dashboard real-time → laporan berkala.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.animationGrid}>
            <div className={styles.animationDashboard}>
              <DashboardMock />
              <p className={styles.animationCaption}>
                Animasi Alur Kerja Real-Time Timebase — motion signature &ldquo;Dynamic Pulse&rdquo; (Anime.js +
                Framer Motion) memvisualisasikan bagaimana perusahaan Anda berpindah dari pendaftaran hingga laporan
                siap dibawa ke rapat evaluasi.
              </p>
            </div>

            <ul className={styles.stepsList} aria-label="Ringkasan alur cara kerja Timebase">
              {ANIMATION_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <li className={`${styles.stepIndicator} stagger-item`} key={step.label} tabIndex={0}>
                    <span className={styles.stepIndicatorIcon}>
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className={styles.stepIndicatorLabel}>{step.label}</span>
                  </li>
                );
              })}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className={styles.faq} aria-labelledby="faq-fitur-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="faq-fitur-title" className={styles.sectionTitle}>
              Pertanyaan Seputar Fitur
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <FiturFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8: CTA PENUTUP */}
      <section className={styles.cta} aria-labelledby="cta-fitur-title">
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 id="cta-fitur-title" className={styles.ctaHeadline}>
              Buktikan Kinerja Tim Anda
            </h2>
            <p className={styles.ctaSubheadline}>
              Sebelum direksi kembali mempertanyakan produktivitas tim, punya data yang bisa dipertanggungjawabkan.
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
              title="Request Demo aplikasi tracking karyawan real-time Timebase via WhatsApp"
            >
              Request Demo
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className={styles.guarantee}>
              Konsultasi kebutuhan tanpa komitmen kontrak wajib, langsung dengan tim Timebase berbasis Malang.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
