import type { Metadata } from "next";
import {
  Scale,
  EyeOff,
  ShieldOff,
  FileWarning,
  PenLine,
  Keyboard,
  Camera,
  ListChecks,
  UserCog,
  Lock,
  Database,
  ShieldCheck,
  FileSearch,
  Clock,
  Eye,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import KeamananConsentFlow from "@/components/KeamananConsentFlow";
import KeamananFaqAccordion from "@/components/KeamananFaqAccordion";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/keamanan-kepatuhan`;

const PAGE_TITLE = "Keamanan Data Karyawan & Kepatuhan UU PDP";
const PAGE_DESCRIPTION =
  "Timebase memantau aktivitas kerja secara transparan dan bisa diaudit — setiap klien kami wajibkan menjalankan consent tertulis karyawan, sesuai UU PDP No. 27/2022.";

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

const HERO_STATS = [
  { value: "UU PDP No. 27/2022", label: "Regulasi Rujukan" },
  { value: "Tercatat Penuh", label: "Jejak Audit" },
  { value: "100+ Perusahaan", label: "Dipercaya" },
];

const WORRIES = [
  {
    icon: Scale,
    title: "Takut Melanggar UU PDP",
    desc: "Memantau karyawan tanpa consent tertulis berisiko kena sanksi UU PDP No. 27/2022.",
  },
  {
    icon: EyeOff,
    title: "Dicap Alat Mata-Mata",
    desc: "Karyawan merasa diawasi diam-diam, memicu ketidakpercayaan dan niat resign.",
  },
  {
    icon: ShieldOff,
    title: "Data Karyawan Rentan Bocor",
    desc: "Tanpa enkripsi jelas, data aktivitas kerja berisiko disalahgunakan atau bocor.",
  },
  {
    icon: FileWarning,
    title: "Sengketa Jam Kerja Tanpa Bukti",
    desc: "Tidak ada catatan objektif saat terjadi perselisihan lembur atau jam kerja karyawan.",
  },
];

const CONSENT_FLOW_STEPS = [
  {
    icon: <PenLine size={26} aria-hidden="true" />,
    title: "Consent Tertulis",
    desc: "Persetujuan tertulis karyawan sebelum tracking aktif, sesuai UU PDP No. 27/2022.",
  },
  {
    icon: <Lock size={26} aria-hidden="true" />,
    title: "Enkripsi",
    desc: "Data aktivitas kerja dienkripsi saat dikirim dan disimpan di server terlindungi.",
  },
  {
    icon: <UserCog size={26} aria-hidden="true" />,
    title: "Akses Terbatas",
    desc: "Hanya akun HR/manajer berwenang yang bisa melihat data tim.",
  },
];

const SECURED_FLOW_STEPS = [
  {
    icon: <PenLine size={26} aria-hidden="true" />,
    title: "Consent Tertulis Karyawan",
    desc: "Formulir persetujuan tertulis dijalankan sebelum tracking aktif.",
  },
  {
    icon: <Lock size={26} aria-hidden="true" />,
    title: "Enkripsi Data",
    desc: "Aktivitas kerja dienkripsi sepanjang perjalanan dan saat tersimpan.",
  },
  {
    icon: <UserCog size={26} aria-hidden="true" />,
    title: "Akses Terbatas HR/Manajer",
    desc: "Hanya akun berwenang yang bisa membuka dashboard data tim.",
  },
];

const POLICY_POINTS = [
  {
    icon: PenLine,
    title: "Kebijakan Consent Tertulis",
    desc: "Kami mewajibkan setiap klien menjalankan persetujuan tertulis karyawan sebelum tracking aktif, sesuai UU PDP No. 27/2022.",
  },
  {
    icon: Keyboard,
    title: "Bukan Perekam Ketikan",
    desc: "Sistem mendeteksi aktivitas keyboard/mouse untuk status kerja (Active/Idle), BUKAN merekam isi yang diketik karyawan.",
  },
  {
    icon: Camera,
    title: "Screenshot Berkala, Bukan Live Stream",
    desc: "Screenshot diambil otomatis tiap ±10 menit selama sesi aktif — bukan rekaman layar terus-menerus, dan bisa ditinjau kapan saja oleh HR.",
  },
  {
    icon: ListChecks,
    title: "Distraction Rules Transparan",
    desc: "Perusahaan Anda sendiri yang menentukan daftar aplikasi/situs yang dianggap distraksi, bukan penilaian sepihak dari Timebase.",
  },
  {
    icon: UserCog,
    title: "Akses Data Berbasis Peran",
    desc: "Hanya akun HR/manajer berwenang yang bisa melihat data tim, mengikuti hierarki role & akses perusahaan Anda.",
  },
  {
    icon: Lock,
    title: "Data Terenkripsi",
    desc: "Aktivitas kerja dienkripsi saat dikirim dan disimpan di server terlindungi.",
  },
];

const SECURITY_STANDARDS = [
  {
    icon: Lock,
    title: "Enkripsi Saat Transit",
    desc: "Data yang dikirim dari perangkat karyawan ke server dienkripsi sepanjang perjalanan (TLS).",
  },
  {
    icon: Database,
    title: "Enkripsi Saat Tersimpan",
    desc: "Data yang tersimpan di server ikut dienkripsi, bukan disimpan dalam bentuk teks polos.",
  },
  {
    icon: ShieldCheck,
    title: "Kontrol Akses Berbasis Peran",
    desc: "Hanya akun HR/manajer yang diberi izin oleh perusahaan Anda yang bisa membuka dashboard.",
  },
  {
    icon: FileSearch,
    title: "Jejak Audit Akses",
    desc: "Setiap akses ke data aktivitas karyawan tercatat dan dapat ditelusuri.",
  },
  {
    icon: Clock,
    title: "Kebijakan Retensi Data",
    desc: "Data disimpan sesuai jangka waktu yang disepakati, lalu dihapus terjadwal.",
  },
  {
    icon: Eye,
    title: "Cakupan Data Terbatas Kerja",
    desc: "Sistem hanya merekam jam kerja dan aktivitas terkait pekerjaan yang disepakati bersama karyawan.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Apakah Timebase mengambil screenshot layar karyawan?",
    answer:
      "Ya. Timebase mengambil screenshot otomatis secara berkala (sekitar tiap 10 menit) selama sesi kerja aktif — bukan rekaman layar terus-menerus — sebagai bukti aktivitas kerja yang bisa ditinjau HR kapan saja. Ini bagian dari transparansi accountability tool, bukan pengawasan tersembunyi.",
  },
  {
    question: "Apakah Timebase merekam isi yang diketik karyawan (keystroke logging)?",
    answer:
      "Tidak. Sistem hanya mendeteksi ADA-TIDAKNYA aktivitas keyboard/mouse untuk menentukan status Active/Idle, bukan merekam teks atau isi yang diketik.",
  },
  {
    question: "Apakah Timebase melanggar privasi karyawan yang dipantau?",
    answer:
      "Kami mewajibkan setiap klien menjalankan persetujuan tertulis karyawan sebelum tracking aktif, dan data yang direkam (aktivitas kerja, screenshot berkala, aplikasi & situs terkait pekerjaan) dibatasi pada konteks kerja, bukan kehidupan pribadi karyawan.",
  },
  {
    question: "Apakah data yang dikumpulkan Timebase aman dan sesuai UU Perlindungan Data Pribadi No. 27/2022?",
    answer:
      "UU PDP No. 27/2022 mewajibkan consent tertulis sebelum memantau karyawan — inilah prinsip yang dipegang Timebase. Data dikelola dengan enkripsi dan akses terbatas sesuai prinsip perlindungan data pribadi yang berlaku di Indonesia.",
  },
  {
    question: "Bagaimana proses persetujuan (consent) karyawan dijalankan?",
    answer:
      "Perusahaan memberikan formulir consent tertulis kepada karyawan sebelum instalasi aktif, menjelaskan data apa yang direkam (aktivitas, screenshot berkala, aplikasi & situs kerja) dan untuk tujuan apa, sebelum tracking dimulai.",
  },
  {
    question: "Siapa saja yang bisa mengakses data aktivitas karyawan?",
    answer:
      "Hanya akun HR atau manajer yang diberi izin oleh perusahaan Anda, melalui kontrol akses berbasis peran yang mengikuti hierarki organisasi — bukan pihak luar atau publik.",
  },
  {
    question: "Apakah Timebase merekam aktivitas karyawan di luar jam kerja?",
    answer:
      "Tracking dirancang untuk aktif hanya selama sesi kerja berlangsung, sesuai kebijakan jam kerja yang disepakati dengan karyawan — sejalan dengan positioning Timebase sebagai accountability tool, bukan surveillance tool.",
  },
];

export default function KeamananKepatuhanPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Employee Monitoring Compliance & Data Security",
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
        { "@type": "ListItem", position: 2, name: "Keamanan & Kepatuhan", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 1: HERO (single column, center-aligned — tanpa heroImage) */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>Kepatuhan yang Bisa Dibuktikan</h1>
            <p className={styles.subheadline}>{PAGE_DESCRIPTION}</p>

            <div className={styles.heroCtas}>
              <a
                href={CONTACT_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                title="Konsultasi Compliance Gratis dengan Timebase via WhatsApp"
              >
                Konsultasi Compliance Gratis
              </a>
            </div>

            <ul className={styles.statStrip} aria-label="Statistik kepatuhan Timebase">
              {HERO_STATS.map((stat) => (
                <li className={`${styles.statItem} stagger-item`} key={stat.label}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: Kekhawatiran yang Sering Muncul */}
      <section className={styles.worry}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Kekhawatiran yang Sering Muncul</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Kekhawatiran yang sering muncul soal monitoring karyawan">
              {WORRIES.map((item) => {
                const Icon = item.icon;
                return (
                  <div className={`${styles.worryCard} stagger-item`} key={item.title} tabIndex={0}>
                    <span className={styles.worryIconWrap}>
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: Cara Timebase Menjawabnya */}
      <section className={styles.answer}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Cara Timebase Menjawabnya</h2>
            <p className={styles.valueProp}>
              Timebase adalah accountability tool, bukan surveillance tool — setiap data yang direkam (aktivitas
              kerja, screenshot berkala, aplikasi &amp; situs terkait pekerjaan) bisa diaudit dan sepenuhnya
              transparan bagi HR maupun karyawan, di atas consent tertulis sesuai UU PDP No. 27/2022.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.flowBlock}>
            <p className={styles.flowLabel}>Consent Tertulis &rarr; Enkripsi &rarr; Akses Terbatas</p>
            <KeamananConsentFlow
              steps={CONSENT_FLOW_STEPS}
              ariaLabel="Alur Consent Tertulis, Enkripsi, hingga Akses Terbatas"
            />
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Lima kebijakan keamanan dan privasi Timebase">
              {POLICY_POINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div className={`${styles.policyCard} stagger-item`} key={item.title} tabIndex={0}>
                    <span className={styles.policyIconWrap}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: Standar Keamanan Data */}
      <section className={styles.standards}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Standar Keamanan Data</h2>
            <p className={styles.valueProp}>
              Fokus pada praktik keamanan teknis riil dan kepatuhan UU PDP No. 27/2022 — bukan daftar badge
              sertifikasi yang belum kami miliki.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Enam standar keamanan data Timebase">
              {SECURITY_STANDARDS.map((item) => {
                const Icon = item.icon;
                return (
                  <div className={`${styles.standardCard} stagger-item`} key={item.title} tabIndex={0}>
                    <span className={styles.standardIconWrap}>
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDesc}>{item.desc}</p>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pertanyaan Seputar Kepatuhan</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <KeamananFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: Bagaimana Data Anda Diamankan (motion signature "Dynamic Pulse") */}
      <section className={styles.secured}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Bagaimana Data Anda Diamankan</h2>
            <p className={styles.valueProp}>
              Belum ada video profil resmi Timebase. Animasi interaktif berikut memvisualisasikan alur: consent
              tertulis karyawan, enkripsi data, hingga akses terbatas HR/manajer — motion signature Dynamic Pulse,
              berkelanjutan selama Anda memutar.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <KeamananConsentFlow
              steps={SECURED_FLOW_STEPS}
              ariaLabel="Animasi alur keamanan data: consent tertulis karyawan, enkripsi data, akses terbatas HR/manajer"
              pulse
            />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7: CTA penutup */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Kepatuhan Tak Bisa Ditunda</h2>
            <p className={styles.ctaSubheadline}>
              Setiap hari tanpa consent tertulis adalah risiko hukum yang terus berjalan. Mulai tracking yang patuh
              UU PDP sekarang.
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
              title="Konsultasi Compliance Sekarang dengan Timebase via WhatsApp"
            >
              Konsultasi Compliance Sekarang
            </a>
            <p className={styles.guarantee}>
              Tim Timebase membantu menyusun formulir consent karyawan Anda sesuai UU PDP No. 27/2022 — konsultasi
              awal tanpa biaya.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
