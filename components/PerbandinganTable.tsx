"use client";

import {
  Activity,
  AlertTriangle,
  CircleDashed,
  Clock,
  MessageCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { CONTACT_WA_NUMBER } from "@/lib/site";
import styles from "./PerbandinganTable.module.css";

interface StatusBadge {
  label: string;
  colorVar: "--color-success" | "--color-warning" | "--color-error";
  icon: LucideIcon;
}

interface ComparisonCell {
  competitor: string;
  text: string;
  icon?: LucideIcon;
  badges?: StatusBadge[];
}

interface ComparisonRow {
  dimension: string;
  cells: ComparisonCell[];
}

const COMPETITORS = ["Time Base", "Time Doctor", "Hubstaff", "Insightful", "Dokodemo-Kerja"] as const;

// Seluruh klaim di bawah bersumber verbatim dari planning/PLAN-perbandingan.md
// (Section 2, field comparisonTable) yang sudah traceable ke
// planning/PLAN-COMPETITOR.md. Tidak ada klaim yang dikarang di luar riset.
const ROWS: ComparisonRow[] = [
  {
    dimension: "Status Real-time Active/Idle/Distraction",
    cells: [
      {
        competitor: "Time Base",
        text: "Status real-time Active/Idle/Distraction sepanjang sesi kerja aktif — fitur inti produk.",
        badges: [
          { label: "Active", colorVar: "--color-success", icon: Activity },
          { label: "Idle", colorVar: "--color-warning", icon: CircleDashed },
          { label: "Distraction", colorVar: "--color-error", icon: AlertTriangle },
        ],
      },
      {
        competitor: "Time Doctor",
        text: 'Fokus pada suite workforce analytics (Benchmarks AI, deteksi burnout, Meeting Insights); tidak mengklaim istilah status "Active/Idle/Distraction" secara eksplisit.',
      },
      {
        competitor: "Hubstaff",
        text: 'Dashboard produktivitas real-time, namun metrik berbasis keystroke/gerakan mouse dinilai reviewer mudah dimanipulasi ("mouse-wiggling") dan kurang mencerminkan kerja nyata.',
      },
      {
        competitor: "Insightful",
        text: "Dashboard analytics real-time tersedia, tetapi tampilan aktivitas layar real-time butuh setup manual tambahan; tidak memakai istilah Active/Idle/Distraction.",
      },
      {
        competitor: "Dokodemo-Kerja",
        text: "Screenshot hanya diambil satu kali secara acak setiap 10 menit — bukan status real-time granular seperti Active/Idle/Distraction.",
        icon: Clock,
      },
    ],
  },
  {
    dimension: "Harga & Lokalisasi (IDR vs USD)",
    cells: [
      {
        competitor: "Time Base",
        text: "Harga dalam Rupiah, transparan tanpa biaya tersembunyi.",
      },
      {
        competitor: "Time Doctor",
        text: "Harga hanya dalam USD, tanpa UI/konten Bahasa Indonesia maupun metode pembayaran lokal.",
      },
      {
        competitor: "Hubstaff",
        text: "Harga USD, plus fitur umum seperti Insights (+$3/seat) dan location tracking (+$4/seat) dikenakan biaya tambahan terpisah.",
      },
      {
        competitor: "Insightful",
        text: "Harga USD; reviewer enterprise menyebut harga terasa mahal relatif fitur, fitur lanjutan terkunci di tier lebih tinggi.",
      },
      {
        competitor: "Dokodemo-Kerja",
        text: "Harga Rupiah transparan (mulai Rp1.000.000/bulan untuk 10 user, +Rp50.000/user tambahan), namun hanya satu paket flat tanpa tiering.",
      },
    ],
  },
  {
    dimension: "Transparansi Kebijakan Monitoring",
    cells: [
      {
        competitor: "Time Base",
        text: "Kebijakan monitoring disosialisasikan terbuka ke tim — cakupan dibatasi jam kerja aktif dan aktivitas terkait pekerjaan, selaras prinsip UU PDP.",
        icon: ShieldCheck,
      },
      {
        competitor: "Time Doctor",
        text: 'Tersedia kontrol privasi seperti screenshot blurring, namun review G2/Capterra konsisten menyebut monitoring terasa invasif dan memicu kesan "micromanaged".',
      },
      {
        competitor: "Hubstaff",
        text: 'Screenshot disimpan terenkripsi di AWS S3 dan hanya diambil saat clock-in, tetapi review pengguna menyebut monitoring konstan terasa seperti "invasion of privacy".',
      },
      {
        competitor: "Insightful",
        text: "Positioning privacy-first terkuat di antara pemain global: tanpa keystroke logging, tanpa capture PII, hosting bersertifikat SOC.",
        icon: ShieldCheck,
      },
      {
        competitor: "Dokodemo-Kerja",
        text: "Tidak ditemukan detail eksplisit kebijakan transparansi monitoring pada materi produk — fokus produk condong ke HRIS/absensi, bukan kebijakan pengawasan aktivitas digital.",
      },
    ],
  },
  {
    dimension: "Kompleksitas Setup & Konfigurasi",
    cells: [
      {
        competitor: "Time Base",
        text: "Manajemen user, role, dan hak akses (User & Access Management) memungkinkan admin mengatur kebijakan monitoring sesuai kebutuhan tim WFA.",
      },
      {
        competitor: "Time Doctor",
        text: "Diposisikan enterprise-ready dengan 60+ integrasi dan paket solusi khusus per-industri — konfigurasi cenderung lebih kompleks untuk kebutuhan spesifik industri.",
      },
      {
        competitor: "Hubstaff",
        text: "Platform serba-guna (time tracking, GPS, project management, payroll) dalam satu produk; addons berbayar terpisah (Insights, location tracking) menambah kerumitan konfigurasi paket.",
      },
      {
        competitor: "Insightful",
        text: "Onboarding umum disebut cepat, namun proses konfigurasi awal untuk fitur lanjutan disebut memakan waktu cukup lama.",
      },
      {
        competitor: "Dokodemo-Kerja",
        text: "Live demo tanpa kartu kredit dan UI trilingual (ID/EN/JP) mempermudah evaluasi awal; paket HRIS lengkap (absensi, cuti, GPS) namun fitur monitoring aktivitas digital dangkal.",
      },
    ],
  },
  {
    dimension: "Support Lokal & Respons",
    cells: [
      {
        competitor: "Time Base",
        text: `Support langsung via WhatsApp (${CONTACT_WA_NUMBER}), berbasis Kota Malang — kanal cepat dan personal, bukan sistem tiket impersonal.`,
        icon: MessageCircle,
      },
      {
        competitor: "Time Doctor",
        text: "Klaim dukungan 24/7 multibahasa, namun keluhan billing di Trustpilot paling dominan disertai customer support yang kurang responsif.",
      },
      {
        competitor: "Hubstaff",
        text: "Keluhan dukungan pelanggan lambat; tidak ada UI/konten Bahasa Indonesia maupun metode pembayaran lokal.",
      },
      {
        competitor: "Insightful",
        text: "Fokus pada target enterprise/Fortune 500 global; tidak ada lokalisasi Bahasa Indonesia atau harga IDR.",
      },
      {
        competitor: "Dokodemo-Kerja",
        text: "Kompetitor lokal langsung dengan UI trilingual dan studi kasus klien Indonesia, tetapi jejak media/brand recognition internasional jauh lebih kecil.",
      },
    ],
  },
];

/**
 * PerbandinganTable — matriks 5 dimensi x 5 pemain (Time Base vs 4
 * kompetitor). Reflow WAJIB: grid/table di desktop, stacked-card per
 * dimensi di mobile (bukan horizontal scroll paksa) — lihat
 * planning/PLAN-perbandingan.md Section 4, Section 2.
 */
export default function PerbandinganTable() {
  return (
    <div className={styles.wrapper}>
      {/* ===== DESKTOP: real <table>, hidden below 768px via CSS ===== */}
      <div className={styles.desktopTable} role="region" aria-label="Tabel perbandingan Time Base vs kompetitor">
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.dimensionHeaderCell}>
                Dimensi
              </th>
              {COMPETITORS.map((name) => (
                <th
                  key={name}
                  scope="col"
                  className={name === "Time Base" ? styles.timeBaseHeaderCell : styles.headerCell}
                >
                  {name}
                  {name === "Time Base" && <span className={styles.recommendedBadge}>Rekomendasi Kami</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.dimension} className="stagger-item">
                <th scope="row" className={styles.dimensionCell}>
                  {row.dimension}
                </th>
                {row.cells.map((cell) => (
                  <td
                    key={cell.competitor}
                    className={cell.competitor === "Time Base" ? styles.timeBaseCell : styles.cell}
                  >
                    {cell.badges && (
                      <div className={styles.badgeRow}>
                        {cell.badges.map((badge) => {
                          const BadgeIcon = badge.icon;
                          return (
                            <span
                              key={badge.label}
                              className={styles.statusBadge}
                              style={{ borderColor: `var(${badge.colorVar})`, color: `var(${badge.colorVar})` }}
                            >
                              <BadgeIcon size={13} aria-hidden="true" />
                              {badge.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {cell.icon && !cell.badges && (
                      <cell.icon size={16} aria-hidden="true" />
                    )}
                    <span>{cell.text}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MOBILE: stacked-card per dimensi, hidden at/above 768px via CSS ===== */}
      <div className={styles.mobileStack}>
        {ROWS.map((row) => (
          <div key={row.dimension} className={`${styles.dimensionCard} stagger-item`} tabIndex={0}>
            <h3 className={styles.dimensionCardTitle}>{row.dimension}</h3>
            <dl className={styles.competitorList}>
              {row.cells.map((cell) => (
                <div
                  key={cell.competitor}
                  className={cell.competitor === "Time Base" ? styles.competitorRowTimeBase : styles.competitorRow}
                >
                  <dt className={styles.competitorName}>
                    {cell.competitor}
                    {cell.competitor === "Time Base" && (
                      <span className={styles.recommendedBadgeMobile}>Rekomendasi Kami</span>
                    )}
                  </dt>
                  <dd className={styles.competitorValue}>
                    {cell.badges && (
                      <div className={styles.badgeRow}>
                        {cell.badges.map((badge) => {
                          const BadgeIcon = badge.icon;
                          return (
                            <span
                              key={badge.label}
                              className={styles.statusBadge}
                              style={{ borderColor: `var(${badge.colorVar})`, color: `var(${badge.colorVar})` }}
                            >
                              <BadgeIcon size={13} aria-hidden="true" />
                              {badge.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {cell.icon && !cell.badges && <cell.icon size={16} aria-hidden="true" />}
                    <span>{cell.text}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
