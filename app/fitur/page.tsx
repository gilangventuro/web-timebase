import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Camera, Globe, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import FiturSetupTimeline from "@/components/FiturSetupTimeline";
import FiturFaqAccordion from "@/components/FiturFaqAccordion";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/fitur`;

export const metadata: Metadata = {
  title: "Monitoring Aktivitas Karyawan Active Idle Distraction",
  description:
    "Real-time activity monitoring, screenshot otomatis karyawan, dan app & website usage tracking untuk tim WFA — semua dalam dashboard Time Base.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `Monitoring Aktivitas Karyawan Active Idle Distraction | ${SITE_NAME}`,
    description:
      "Real-time activity monitoring, screenshot otomatis karyawan, dan app & website usage tracking untuk tim WFA — semua dalam dashboard Time Base.",
  },
};

const FEATURE_STRIP = [
  { icon: Activity, label: "Real-time Monitoring" },
  { icon: Camera, label: "Screenshot Otomatis" },
  { icon: Globe, label: "App & Website Tracking" },
  { icon: Users, label: "User & Access Management" },
];

const SOLUTION_MODULES = [
  {
    icon: Activity,
    title: "Real-time Activity Monitoring",
    desc: "Status Active/Idle/Distraction secara real-time.",
    detail:
      "Setiap anggota tim ditampilkan dengan badge status berwarna langsung di dashboard, sehingga manajer tahu siapa yang sedang aktif bekerja tanpa bertanya satu per satu.",
  },
  {
    icon: Camera,
    title: "Automatic Screenshot Capture",
    desc: "Screenshot otomatis selama sesi kerja aktif.",
    detail:
      "Pengambilan gambar layar hanya berjalan saat karyawan clock-in dan bekerja, bukan sepanjang hari atau di luar jam kerja yang ditetapkan.",
  },
  {
    icon: Globe,
    title: "App & Website Usage Tracking",
    desc: "Pencatatan pemakaian aplikasi & situs web selama jam kerja.",
    detail:
      "Kategori aplikasi dan situs dapat disesuaikan admin per divisi, sehingga aktivitas kerja yang sah seperti riset daring tidak otomatis dicap sebagai distraksi.",
  },
  {
    icon: Users,
    title: "User & Access Management",
    desc: "Manajemen user, role, dan hak akses.",
    detail:
      "Setiap role — admin, team lead, atau HR — hanya bisa melihat data monitoring sesuai kewenangannya, menjaga struktur pengawasan tetap rapi saat tim berkembang cepat.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Apakah screenshot diambil terus-menerus, termasuk saat istirahat atau di luar jam kerja?",
    answer:
      "Tidak. Screenshot otomatis hanya diambil selama sesi kerja aktif berlangsung (saat karyawan clock-in/bekerja), bukan sepanjang hari atau di luar jam kerja yang ditetapkan.",
  },
  {
    question:
      'Bagaimana Time Base membedakan waktu kerja normal (misalnya riset di internet) dari waktu "Distraction"?',
    answer:
      "Klasifikasi aktivitas berbasis kategori aplikasi dan situs web yang dapat disesuaikan oleh admin sesuai kebutuhan masing-masing peran/divisi, sehingga aktivitas kerja yang sah tidak otomatis dicap sebagai distraksi.",
  },
  {
    question: "Berapa lama proses setup dan apakah perusahaan saya butuh tim IT khusus untuk memasangnya?",
    answer:
      "Proses setup terdiri dari instalasi agent ringan di perangkat karyawan, aktivasi tim, hingga dashboard siap digunakan, dan umumnya dapat diselesaikan dalam hitungan hari tanpa memerlukan staf IT khusus.",
  },
  {
    question:
      "Siapa saja yang bisa melihat data monitoring dalam perusahaan saya — apakah semua karyawan bisa saling melihat data satu sama lain?",
    answer:
      "Tidak. Melalui fitur User & Access Management, akses terhadap data monitoring diatur berdasarkan role (misalnya admin, team lead, HR) sehingga setiap pihak hanya bisa melihat data sesuai kewenangannya.",
  },
  {
    question:
      "Apakah keempat fitur ini — activity monitoring, screenshot, app/website tracking, dan access management — tersedia dalam satu dashboard yang sama?",
    answer:
      "Ya. Real-time Activity Monitoring, Automatic Screenshot Capture, App & Website Usage Tracking, dan User & Access Management terintegrasi dalam satu dashboard Time Base, tanpa perlu berpindah antar tools tambahan.",
  },
];

export default function FiturPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Employee Activity Monitoring Software",
      name: "Monitoring Aktivitas Karyawan Active Idle Distraction",
      description:
        "Real-time activity monitoring, screenshot otomatis karyawan, dan app & website usage tracking untuk tim WFA — semua dalam dashboard Time Base.",
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
      "@type": "ItemList",
      name: "Empat Modul Monitoring Inti Time Base",
      itemListElement: SOLUTION_MODULES.map((mod, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: mod.title,
        description: mod.desc,
      })),
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
        { "@type": "ListItem", position: 2, name: "Fitur", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: HERO (teks murni, tanpa heroImage — inner page) */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>Empat Fitur, Satu Kendali Penuh</h1>
            <p className={styles.subheadline}>
              Real-time Activity Monitoring, Automatic Screenshot, App Website Usage Tracking, hingga User Access
              Management — untuk tim WFA Anda.
            </p>

            <ul className={styles.featureStrip} aria-label="Ringkasan empat fitur inti Time Base">
              {FEATURE_STRIP.map((item) => {
                const Icon = item.icon;
                return (
                  <li className={`${styles.featurePill} stagger-item`} key={item.label}>
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>

            <div className={styles.heroCtas}>
              <Link
                href="/kontak"
                className={styles.ctaPrimary}
                title="Jadwalkan demo gratis fitur monitoring aktivitas karyawan Time Base"
              >
                Jadwalkan Demo Gratis
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: SOLUTION — Empat Modul Monitoring Inti */}
      <section className={styles.solution}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Empat Modul Monitoring Inti</h2>
            <p className={styles.valueProp}>
              Time Base menghimpun empat pilar monitoring aktivitas karyawan Active Idle Distraction dalam satu
              dashboard Command Center — dirancang untuk memberi visibilitas dan akuntabilitas kerja tim Work From
              Anywhere tanpa kehilangan kendali operasional.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Empat modul monitoring inti Time Base">
              {SOLUTION_MODULES.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div className={`${styles.solutionCard} stagger-item`} key={mod.title} tabIndex={0}>
                    <span className={styles.solutionIconWrap}>
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{mod.title}</h3>
                    <p className={styles.cardDesc}>{mod.desc}</p>
                    <p className={styles.cardDetail}>{mod.detail}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: PROBLEM (repurposed) — Setup Tanpa Tim IT */}
      <section className={styles.setup}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Setup Tanpa Tim IT</h2>
            <p className={styles.valueProp}>
              Keraguan paling sering muncul dari HR dan pemilik bisnis tanpa staf IT khusus: apakah instalasi agent
              monitoring ini rumit? Jawabannya tidak.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <FiturSetupTimeline />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pertanyaan Seputar Fitur</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <FiturFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: CTA (FOMO) */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Jangan Tunggu Tim Anda Lepas Kendali</h2>
            <p className={styles.ctaSubheadline}>
              Setiap hari tanpa visibilitas real-time adalah risiko produktivitas yang tak terukur. Aktifkan
              monitoring aktivitas karyawan WFA Anda sekarang.
            </p>
            <Link
              href="/kontak"
              className={styles.ctaButtonLarge}
              title="Jadwalkan demo gratis monitoring aktivitas karyawan WFA sekarang"
            >
              Jadwalkan Demo Gratis
            </Link>
            <p className={styles.guarantee}>
              Konsultasi kebutuhan monitoring tim Anda bersama Time Base, gratis tanpa biaya tersembunyi.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
