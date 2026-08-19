import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanCallout from "@/components/PanduanCallout";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "./docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan`;
const PAGE_TITLE = "Mengenal Hub Venturo";
const PAGE_DESCRIPTION =
  "Panduan lengkap penggunaan Hub Venturo (TimeBase) — platform monitoring aktivitas kerja karyawan Venturo Pro.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function PanduanHomePage() {
  const { next } = getPanduanPageNav("/panduan");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    author: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.crumb}>Memulai</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <PanduanCallout variant="update">
        <strong>Diperbarui:</strong> panduan ini telah disesuaikan dengan pembaruan tampilan aplikasi per 18 Agustus
        2026 &mdash; termasuk rebranding ke wordmark <strong>TimeBase</strong>, label tenant baru, dan beberapa
        penambahan fitur di menu Manajemen.
      </PanduanCallout>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Mengenal Hub Venturo
      </h2>
      <p className={styles.paragraph}>
        Hub Venturo (bermerek <strong>TimeBase</strong> pada aplikasinya, dengan tagline &ldquo;Accountability
        Everywhere&rdquo;) adalah platform monitoring aktivitas kerja karyawan untuk skema{" "}
        <strong>WFA (Work From Anywhere)</strong>. Fungsi utamanya:
      </p>
      <ul className={styles.list}>
        <li>Memantau aktivitas kerja karyawan secara real-time (Active / Idle / Distraction)</li>
        <li>Screenshot otomatis selama sesi kerja aktif</li>
        <li>Pencatatan pemakaian aplikasi &amp; situs web</li>
        <li>Manajemen user, role, dan hak akses</li>
      </ul>

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Struktur Menu Sidebar
      </h2>
      <p className={styles.paragraph}>Sidebar aplikasi terbagi menjadi dua grup utama:</p>
      <ul className={styles.list}>
        <li>
          <strong>MONITORING</strong> &mdash; Aktivitas, Screenshot, Aplikasi, URL
        </li>
        <li>
          <strong>MANAJEMEN</strong> &mdash; User, Role &amp; Akses, Pengaturan
        </li>
      </ul>
      <p className={styles.paragraph}>
        Di bagian atas sidebar kini tampil logo gradasi <strong>TimeBase</strong> beserta kotak identitas{" "}
        <strong>TENANT &mdash; Venturo</strong> (menandakan organisasi/tenant yang sedang aktif). Elemen ini baru
        dibanding versi tampilan sebelumnya.
      </p>

      <PanduanShot
        src="01-sidebar-dashboard.jpg"
        alt="Sidebar utama dengan logo TimeBase, kotak TENANT, grup MONITORING &amp; MANAJEMEN, serta dashboard Aktivitas Karyawan"
      />

      <p className={styles.paragraph}>
        Di bagian bawah sidebar terdapat tombol <code className={styles.code}>Unduh aplikasi</code> yang mengarah ke
        folder Google Drive eksternal berisi installer aplikasi desktop (agen tracking) dalam beberapa versi.
      </p>

      <PanduanCallout variant="tip">
        <strong>💡 Tip</strong> Urutan belajar yang disarankan: <strong>Memulai &rarr; Navigasi &amp; Akun &rarr;
        Monitoring &rarr; Manajemen &rarr; Referensi.</strong>
      </PanduanCallout>

      <PanduanPageNav next={next} />
    </>
  );
}
