import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/manajemen-user`;
const PAGE_TITLE = "Manajemen User";
const PAGE_DESCRIPTION = "Kelola daftar karyawan, detail, dan hak akses masing-masing.";

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

export default function ManajemenUserPage() {
  const { prev, next } = getPanduanPageNav("/panduan/manajemen-user");

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

      <div className={styles.crumb}>Manajemen &middot; 1</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Daftar User
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>User</code>. Gunakan kolom pencarian nama/email/jabatan, serta
        filter Jabatan, Urutkan, Urutan, Per halaman, dan Status akun (Hanya aktif/Nonaktif/Semua). Tombol{" "}
        <code className={styles.code}>Sync dari Humanis</code> di pojok kanan atas menarik data karyawan terbaru
        dari sistem HR (Humanis).
      </p>

      <PanduanShot
        src="25-daftar-user.jpg"
        alt="Daftar User dengan kolom pencarian dan filter. Kolom data pribadi disamarkan sesuai kebijakan privasi"
      />
      <PanduanShot src="26-filter-jabatan.jpg" alt="Filter Jabatan dengan daftar seluruh posisi yang tersedia" />
      <PanduanShot
        src="27-filter-status-akun.jpg"
        alt="Filter Status akun: Hanya aktif, Nonaktif, Semua"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Menu Tindakan
      </h2>
      <p className={styles.paragraph}>
        Klik ikon titik tiga pada kolom Tindakan di tiap baris untuk membuka menu. Menu ini kini berisi{" "}
        <strong>lima</strong> opsi: Detail Karyawan, <strong>Ubah Data</strong>, Atur Akses &amp; Role, Nonaktifkan
        Akses, atau Hapus permanen.
      </p>

      <PanduanShot
        src="28-menu-tindakan.jpg"
        alt="Menu Tindakan per user: Detail Karyawan, Ubah Data, Atur Akses & Role, Nonaktifkan Akses, Hapus permanen"
      />

      <h3 className={styles.h3}>Detail Karyawan</h3>
      <p className={styles.paragraph}>
        Modal berisi email, nomor HP, tanggal mulai kerja, tanggal lahir, info Akses Sistem, dan ID Humanis.
      </p>

      <PanduanShot
        src="29-detail-karyawan.jpg"
        alt="Modal Detail Karyawan. Data pribadi disamarkan sesuai kebijakan privasi"
      />

      <h3 className={styles.h3}>
        Ubah Data <span className={styles.badgeNew}>Baru</span>
      </h3>
      <p className={styles.paragraph}>
        Opsi menu baru untuk mengedit data profil karyawan secara langsung (mis. jabatan, nomor HP, tanggal mulai
        kerja) tanpa perlu menunggu sinkronisasi dari Humanis.
      </p>

      <h3 className={styles.h3}>Atur Akses &amp; Role</h3>
      <p className={styles.paragraph}>
        Dropdown untuk menetapkan role baru pada user. Scope data tetap otomatis mengikuti hierarki Humanis (admin
        lihat semua, lead lihat bawahan, karyawan lihat dirinya sendiri) &mdash; role di sini hanya mengatur menu
        &amp; aksi.
      </p>

      <PanduanShot
        src="30-atur-akses-role.jpg"
        alt="Modal Atur Akses & Role untuk menetapkan role user"
      />

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
