import type { Metadata } from "next";
import {
  MessageCircle,
  ArrowRight,
  SlidersHorizontal,
  LayoutPanelTop,
  CircleUser,
  Users,
  Camera,
  AppWindow,
  Globe,
  UserCog,
  ShieldCheck,
  Settings2,
  Clock,
  type LucideIcon,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import PanduanMiniUI, { type PanduanMiniUIVariant } from "@/components/PanduanMiniUI";
import PanduanGlosarium from "@/components/PanduanGlosarium";
import PanduanFaqAccordion from "@/components/PanduanFaqAccordion";
import DashboardMock from "@/components/DashboardMock";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/panduan`;

const PAGE_TITLE = "Panduan Timebase — Navigasi, Monitoring & Manajemen";
const PAGE_DESCRIPTION =
  "Referensi lengkap Timebase: navigasi & akun, monitoring aktivitas Active/Idle/Distraction, screenshot berkala, manajemen user & role, glosarium.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "panduan Timebase",
    "cara pakai dashboard monitoring karyawan",
    "monitoring aktivitas karyawan",
    "manajemen user dan role Timebase",
    "glosarium tracking karyawan",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

/* ===== SECTION: Navigasi & Akun ===== */
interface NavAkunCard {
  icon: LucideIcon;
  title: string;
  desc: string;
  variant: PanduanMiniUIVariant;
}

const NAV_AKUN_CARDS: NavAkunCard[] = [
  {
    icon: SlidersHorizontal,
    title: "Header & Filter Global",
    desc: "Filter rentang tanggal dan tim tersedia di header dan berlaku untuk seluruh halaman dashboard — sekali diatur, halaman Aktivitas Karyawan, Screenshot, Pemakaian Aplikasi, hingga Pemakaian Situs otomatis menampilkan data pada rentang dan tim yang sama, tanpa perlu mengatur ulang filter di tiap halaman.",
    variant: "filter",
  },
  {
    icon: LayoutPanelTop,
    title: "Pengaturan Tampilan",
    desc: "Kustomisasi bagaimana dashboard ditampilkan, misalnya mode tampilan galeri Screenshot (Timeline kronologis atau Grid kotak) serta kepadatan tampilan kartu, agar admin dan HR bisa menyesuaikan cara membaca data dengan kebiasaan kerja masing-masing.",
    variant: "settings",
  },
  {
    icon: CircleUser,
    title: "Profil Pengguna",
    desc: "Kelola profil akun pengguna yang sedang login — data diri, email login, dan status sesi. Halaman ini murni untuk akun Anda sendiri, terpisah dari data karyawan yang dipantau di halaman Manajemen User.",
    variant: "profile",
  },
];

/* ===== SECTION: Monitoring ===== */
const ACTIVITY_STATUSES = [
  { label: "Active", desc: "aktivitas keyboard/mouse terdeteksi", tone: "success" as const },
  { label: "Idle", desc: "tanpa aktivitas terdeteksi", tone: "warning" as const },
  { label: "Distraction", desc: "pemakaian app/situs masuk daftar Aturan Distraction", tone: "error" as const },
  { label: "Cek sendiri", desc: "status perlu ditinjau manual", tone: "info" as const },
  { label: "Tak Terekam", desc: "waktu tidak terlacak agen (mis. agen tertutup)", tone: "muted" as const },
];

const SCREENSHOT_MODES = [
  "Mode Timeline — urutan kronologis",
  "Mode Grid — susunan kotak",
  'Badge "Slightly Unusual" — muncul pada screenshot dengan pola berbeda dari aktivitas normal (deteksi anomali)',
];

/* ===== SECTION: Manajemen ===== */
const USER_MGMT_ACTIONS = [
  "Detail Karyawan — modal berisi email, telepon, tanggal mulai kerja, tanggal lahir, dan info akses sistem",
  "Atur Akses & Role — dropdown assign role baru; scope data tetap otomatis mengikuti hierarki organisasi",
  "Nonaktifkan Akses — menonaktifkan akun tanpa menghapus data",
  "Hapus Permanen — menghapus data user dari sistem",
];

const ROLE_SCOPES = [
  "Monitoring — akses ke halaman aktivitas & screenshot",
  "Analitik — akses ke ringkasan & laporan",
  "Tim — akses ke data tim",
  "Karyawan — akses ke data individual karyawan",
  "Pengaturan — akses ke konfigurasi tracking & distraction",
  "Role & Akses — akses untuk mengelola peran lain",
];

const DISTRACTION_EXAMPLES = [
  "Contoh tag aplikasi: steam, epic games, game, mobile legends",
  "Contoh tag situs: facebook.com, netflix.com, twitter.com/x.com, tiktok.com",
];

/* ===== SECTION: Referensi — Glosarium ===== */
const GLOSSARY_ITEMS = [
  { term: "Tracked Time", definition: "Total waktu yang terlacak oleh agen desktop selama sesi kerja." },
  { term: "Active", definition: "Waktu dengan aktivitas keyboard/mouse terdeteksi." },
  { term: "Idle", definition: "Waktu tanpa aktivitas terdeteksi." },
  { term: "Distraction", definition: "Waktu pemakaian aplikasi/situs yang masuk daftar Aturan Distraction." },
  { term: "Cek sendiri", definition: "Status aktivitas yang perlu ditinjau manual." },
  { term: "Tak Terekam", definition: "Waktu yang tidak terlacak oleh agen, misalnya karena agen tertutup." },
  { term: "Keaktifan (%)", definition: "Persentase waktu aktif dibanding total waktu terekam." },
  { term: "Role & Permission", definition: "Pengaturan menu dan aksi yang boleh diakses tiap peran." },
  { term: "Scope Data", definition: "Cakupan data yang bisa dilihat, otomatis mengikuti hierarki organisasi." },
];

/* ===== SECTION: Tonton Ringkasan Dashboard ===== */
const VIDEO_STEPS: { icon: LucideIcon; label: string }[] = [
  { icon: Users, label: "Monitoring Aktivitas Real-Time" },
  { icon: Camera, label: "Screenshot Otomatis Berkala" },
  { icon: UserCog, label: "Manajemen User & Role" },
  { icon: Settings2, label: "Pengaturan & Distraction" },
];

/* ===== SECTION: FAQ ===== */
const FAQ_ITEMS = [
  {
    question: "Apakah Timebase mengambil screenshot layar karyawan?",
    answer:
      'Ya. Selama sesi kerja aktif, agen desktop mengambil screenshot otomatis secara berkala (interval sekitar 10 menit) yang bisa ditinjau HR/admin di tab Screenshots. Ini bukan rekaman layar terus-menerus (live stream) — hanya cuplikan berkala, dan admin bisa melihat persis kapan tiap screenshot diambil.',
  },
  {
    question: "Apakah Timebase merekam isi ketikan karyawan (keylogger)?",
    answer:
      "Tidak. Sistem hanya mendeteksi ada atau tidaknya aktivitas keyboard/mouse untuk menentukan status Active atau Idle — bukan merekam karakter atau isi apa yang diketik. Cakupannya sengaja dibatasi pada scope kerja, bukan pengawasan konten.",
  },
  {
    question: "Apakah karyawan bisa melihat status aktivitasnya sendiri?",
    answer:
      "Bisa. Transparansi adalah bagian dari positioning Timebase sebagai accountability tool — karyawan dapat melihat ringkasan aktivitas dan persentase Keaktifan miliknya sendiri, bukan hanya HR yang memiliki akses satu arah.",
  },
  {
    question: "Bagaimana cara mengatur aplikasi atau situs yang dianggap distraksi?",
    answer:
      'Admin mengatur sendiri lewat Manajemen > Pengaturan > Aturan Distraction — tambah tag aplikasi/situs lewat input field, hapus lewat ikon ×. Perlu diingat, perubahan aturan hanya berlaku untuk blok aktivitas baru dan tidak berlaku surut ke data yang sudah terekam.',
  },
  {
    question: "Apakah perlu persetujuan (consent) karyawan sebelum dipantau?",
    answer:
      "Timebase merekomendasikan setiap klien menerapkan kebijakan consent tertulis kepada karyawan sebelum tracking berjalan, selaras dengan UU PDP No. 27/2022. Ini adalah kebijakan penggunaan yang disarankan, bukan gerbang teknis otomatis yang dipaksakan oleh software.",
  },
  {
    question: "Siapa saja yang bisa melihat data monitoring karyawan?",
    answer:
      "Tergantung role & akses yang diberikan admin di halaman Role & Akses. Scope data mengikuti hierarki organisasi secara otomatis: admin melihat seluruh data, lead melihat data bawahannya, dan karyawan hanya melihat datanya sendiri.",
  },
];

export default function PanduanPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      inLanguage: "id",
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      about: "Panduan penggunaan dashboard monitoring aktivitas dan produktivitas karyawan Timebase",
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
        { "@type": "ListItem", position: 2, name: "Panduan", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* SECTION 1: HERO — single column, center-aligned (inner page tanpa heroImage) */}
      <section className={styles.hero} aria-labelledby="hero-panduan-headline">
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <span className={`${styles.eyebrow} stagger-item`}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Panduan Penggunaan
            </span>
            <h1 id="hero-panduan-headline" className={`${styles.headline} stagger-item`}>
              Panduan Lengkap Menggunakan Timebase
            </h1>
            <p className={`${styles.subheadline} stagger-item`}>
              Referensi menyeluruh untuk tim HR dan admin: mulai dari navigasi &amp; pengaturan akun, cara membaca
              setiap detail monitoring aktivitas kerja, mengelola user &amp; role akses, hingga glosarium istilah
              yang dipakai di seluruh dashboard Timebase.
            </p>

            <div className={`${styles.heroCtaRow} stagger-item`}>
              <a
                href={CONTACT_WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
                title="Hubungi tim Timebase via WhatsApp untuk bantuan penggunaan"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Hubungi Tim Support
              </a>
              <a
                href="#navigasi-akun-panduan"
                className={styles.ctaSecondary}
                title="Lihat struktur panduan Timebase"
              >
                Lihat Struktur Panduan
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className={`${styles.statsRow} stagger-item`}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100+</span>
                <span className={styles.statLabel}>klien/pengguna sudah menerapkan Timebase</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2: Navigasi & Akun */}
      <section id="navigasi-akun-panduan" className={styles.navAkun} aria-labelledby="nav-akun-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="nav-akun-panduan-title" className={styles.sectionTitle}>
              Navigasi &amp; Akun
            </h2>
            <p className={styles.valueProp}>
              Sebelum masuk ke monitoring, kenali dulu tiga elemen yang selalu terlihat di dashboard Timebase:
              filter global di header, pengaturan tampilan, dan profil akun Anda sendiri.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Elemen navigasi dan akun Timebase, 3 elemen">
              {NAV_AKUN_CARDS.map((card) => (
                <PanduanMiniUI
                  key={card.title}
                  icon={card.icon}
                  title={card.title}
                  desc={card.desc}
                  variant={card.variant}
                />
              ))}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3: Monitoring */}
      <section id="monitoring-panduan" className={styles.monitoring} aria-labelledby="monitoring-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="monitoring-panduan-title" className={styles.sectionTitle}>
              Monitoring
            </h2>
            <p className={styles.valueProp}>
              Inti dari Timebase: bagaimana aktivitas kerja tim terekam, ditampilkan, dan bisa Anda telusuri sampai
              ke detail per jam, per aplikasi, dan per situs yang dibuka.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Elemen-elemen monitoring Timebase, 4 elemen">
              <div
                className={`${styles.monitorCard} stagger-item`}
                tabIndex={0}
                aria-label="Aktivitas Karyawan — dashboard utama status kerja tim"
              >
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <Users size={20} aria-hidden="true" />
                  </span>
                </div>
                <code className={styles.elementName}>aktivitas-karyawan</code>
                <h3 className={styles.cardTitle}>Aktivitas Karyawan</h3>
                <p className={styles.cardDesc}>
                  Dashboard utama menampilkan kartu tiap karyawan — foto profil, badge platform Windows/Mac, nama,
                  jabatan, total jam kerja, dan progress bar status berwarna. Klik kartu untuk membuka detail 2
                  panel: kiri ringkasan waktu per kategori, kanan timeline per-jam, dengan 4 tab: Screenshots
                  (galeri rentang waktu terpilih, klik untuk lihat ukuran penuh via tombol &quot;Buka Asli&quot;),
                  Per Jam (blok durasi per jam, bisa expand melihat aplikasi/situs spesifik atau menghapus jam
                  tertentu), Aplikasi (daftar app dipakai + durasi &amp; frekuensi buka), dan URL (situs dikunjungi
                  + jumlah halaman &amp; waktu).
                </p>
                <ul className={styles.statusList}>
                  {ACTIVITY_STATUSES.map((status) => (
                    <li className={styles.statusItem} key={status.label}>
                      <span className={`${styles.statusDot} ${styles[`tone_${status.tone}`]}`} aria-hidden="true" />
                      <span>
                        <strong>{status.label}</strong> — {status.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${styles.monitorCard} stagger-item`}
                tabIndex={0}
                aria-label="Screenshot Aktivitas — galeri screenshot per karyawan"
              >
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <Camera size={20} aria-hidden="true" />
                  </span>
                </div>
                <code className={styles.elementName}>screenshot-aktivitas</code>
                <h3 className={styles.cardTitle}>Screenshot Aktivitas</h3>
                <p className={styles.cardDesc}>
                  Galeri screenshot per karyawan menampilkan project terkait, jumlah screenshot, persentase
                  keaktifan, dan rentang jam aktivitas. Klik thumbnail membuka lightbox berisi info karyawan,
                  project, timestamp, dan status aktif. Tersedia search nama karyawan dan tombol &quot;Muat lebih
                  banyak&quot; untuk memuat data lanjutan.
                </p>
                <ul className={styles.plainList}>
                  {SCREENSHOT_MODES.map((line) => (
                    <li className={styles.plainListItem} key={line}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`${styles.monitorCard} stagger-item`}
                tabIndex={0}
                aria-label="Pemakaian Aplikasi — daftar aplikasi yang dipakai tim"
              >
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <AppWindow size={20} aria-hidden="true" />
                  </span>
                </div>
                <code className={styles.elementName}>pemakaian-aplikasi</code>
                <h3 className={styles.cardTitle}>Pemakaian Aplikasi</h3>
                <p className={styles.cardDesc}>
                  Daftar seluruh aplikasi yang dipakai tim dalam rentang waktu terpilih, lengkap dengan total durasi
                  pemakaian dan frekuensi aplikasi tersebut dibuka. Halaman ini membantu HR melihat pola kerja tim
                  secara agregat, tanpa perlu membuka detail tiap karyawan satu per satu.
                </p>
              </div>

              <div
                className={`${styles.monitorCard} stagger-item`}
                tabIndex={0}
                aria-label="Pemakaian Situs (URL) — daftar situs yang dikunjungi tim"
              >
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <Globe size={20} aria-hidden="true" />
                  </span>
                </div>
                <code className={styles.elementName}>pemakaian-situs-url</code>
                <h3 className={styles.cardTitle}>Pemakaian Situs (URL)</h3>
                <p className={styles.cardDesc}>
                  Daftar situs yang dikunjungi tim, lengkap dengan jumlah halaman yang dibuka dan total waktu yang
                  dihabiskan di tiap situs. Data yang sama juga menjadi dasar saat admin menyusun Aturan Distraction
                  di halaman Pengaturan.
                </p>
              </div>
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: Manajemen */}
      <section id="manajemen-panduan" className={styles.manajemen} aria-labelledby="manajemen-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="manajemen-panduan-title" className={styles.sectionTitle}>
              Manajemen
            </h2>
            <p className={styles.valueProp}>
              Tiga halaman yang dipakai admin untuk mengatur siapa saja yang terdaftar, siapa boleh mengakses apa,
              dan bagaimana agen desktop karyawan dikonfigurasi.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Halaman manajemen Timebase, 3 halaman">
              <div className={`${styles.manajemenCard} stagger-item`} tabIndex={0}>
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <UserCog size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Manajemen User</h3>
                <p className={styles.cardDesc}>
                  List karyawan dilengkapi search (nama, email, jabatan) dan filter (Jabatan, Urutan, Item per
                  halaman, Status Akun: Aktif/Nonaktif/Semua). Tiap baris punya menu titik-tiga dengan 4 aksi. Kolom
                  data pribadi di-mask sesuai kebijakan privasi.
                </p>
                <ul className={styles.plainList}>
                  {USER_MGMT_ACTIONS.map((line) => (
                    <li className={styles.plainListItem} key={line}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.manajemenCard} stagger-item`} tabIndex={0}>
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <ShieldCheck size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Role &amp; Akses</h3>
                <p className={styles.cardDesc}>
                  Empat kategori peran: Admin (role bawaan terkunci, akses penuh, tidak bisa diedit/dihapus)
                  ditambah Role Custom yang bisa dibuat sendiri (mis. CEO, Employee, Lead), masing-masing
                  menampilkan jumlah izin dan jumlah anggota. Tombol &quot;Buat Role&quot; membuat peran baru,
                  tombol &quot;Kelola Anggota&quot; menambah/melihat anggota lewat pencarian karyawan.
                </p>
                <ul className={styles.chipList} aria-label="Enam scope izin Role & Akses">
                  {ROLE_SCOPES.map((line) => (
                    <li className={styles.chip} key={line}>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className={styles.note}>
                  Setiap kategori bisa dicentang individual atau lewat &quot;Pilih Semua&quot;. Scope data (siapa
                  boleh melihat data siapa) TIDAK diatur di halaman ini — mengikuti hierarki organisasi secara
                  otomatis; halaman ini hanya mengatur menu &amp; aksi apa saja yang boleh diakses.
                </p>
              </div>

              <div className={`${styles.manajemenCard} stagger-item`} tabIndex={0}>
                <div className={styles.monitorCardTop}>
                  <span className={styles.monitorIconWrap}>
                    <Settings2 size={20} aria-hidden="true" />
                  </span>
                </div>
                <h3 className={styles.cardTitle}>Pengaturan</h3>
                <p className={styles.cardDesc}>
                  Dua tab konfigurasi. Konfigurasi Tracking mengontrol 3 parameter di agen desktop karyawan —
                  Screenshot Otomatis (interval sekitar 10 menit selama sesi aktif), Pelacakan Aplikasi, dan
                  Pelacakan URL — diterapkan lewat tombol &quot;Simpan Setelan&quot;. Aturan Distraction mengelola
                  daftar tag aplikasi &amp; situs yang dianggap distraksi; admin menambah tag lewat input field dan
                  menghapus lewat ikon ×.
                </p>
                <ul className={styles.plainList}>
                  {DISTRACTION_EXAMPLES.map((line) => (
                    <li className={styles.plainListItem} key={line}>
                      {line}
                    </li>
                  ))}
                </ul>
                <p className={styles.note}>
                  Perubahan klasifikasi distraction hanya berlaku untuk blok aktivitas baru — tidak retroaktif ke
                  data yang sudah terekam sebelumnya.
                </p>
              </div>
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: Referensi — Glosarium */}
      <section id="referensi-panduan" className={styles.referensi} aria-labelledby="referensi-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="referensi-panduan-title" className={styles.sectionTitle}>
              Referensi — Glosarium
            </h2>
            <p className={styles.valueProp}>
              Sembilan istilah yang akan sering Anda temui di seluruh dashboard Timebase, dari label status
              aktivitas sampai pengaturan akses.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <PanduanGlosarium items={GLOSSARY_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: Tonton Ringkasan Dashboard (motion signature "Dynamic Pulse") */}
      <section className={styles.video} aria-labelledby="video-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="video-panduan-title" className={styles.sectionTitle}>
              Tonton Ringkasan Dashboard Timebase
            </h2>
            <p className={styles.valueProp}>
              Video tutorial resmi sedang disiapkan tim Timebase dan akan segera hadir. Sementara itu, jelajahi
              animasi interaktif berkelanjutan yang merangkum empat pilar dashboard: monitoring real-time,
              screenshot otomatis, manajemen user &amp; role, hingga pengaturan &amp; distraction.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.videoGrid}>
            <div className={styles.videoDashboard}>
              <span className={styles.comingSoonBadge}>
                <Clock size={12} aria-hidden="true" />
                Video Segera Hadir
              </span>
              <DashboardMock />
              <p className={styles.videoCaption}>
                Animasi Ringkasan Dashboard Timebase — motion signature &ldquo;Dynamic Pulse&rdquo; (Anime.js +
                Framer Motion) memvisualisasikan empat pilar utama yang akan Anda pakai sehari-hari: memantau
                aktivitas real-time, meninjau screenshot otomatis, mengelola user &amp; role, dan mengatur
                parameter tracking &amp; distraction.
              </p>
            </div>

            <ul className={styles.stepsList} aria-label="Empat pilar dashboard Timebase">
              {VIDEO_STEPS.map((step) => {
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
      <section className={styles.faq} aria-labelledby="faq-panduan-title">
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 id="faq-panduan-title" className={styles.sectionTitle}>
              Pertanyaan Seputar Penggunaan
            </h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <PanduanFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8: CTA PENUTUP */}
      <section className={styles.cta} aria-labelledby="cta-panduan-title">
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 id="cta-panduan-title" className={styles.ctaHeadline}>
              Butuh Bantuan Memulai?
            </h2>
            <p className={styles.ctaSubheadline}>
              Tim support Timebase berbasis Malang siap membantu proses onboarding perusahaan Anda, dari aktivasi
              akun hingga dashboard monitoring pertama kali aktif.
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
              title="Hubungi tim support Timebase via WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Hubungi Tim Support
            </a>
            <p className={styles.guarantee}>
              Respons cepat via WhatsApp, langsung dengan tim Timebase — tanpa antrean tiket berbelit.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
