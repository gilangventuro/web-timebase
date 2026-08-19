import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanShot from "@/components/PanduanShot";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/role-akses`;
const PAGE_TITLE = "Role & Akses";
const PAGE_DESCRIPTION = "Atur role dan hak akses menu/aksi sesuai kebutuhan tim.";

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

export default function RoleAksesPage() {
  const { prev, next } = getPanduanPageNav("/panduan/role-akses");

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

      <div className={styles.crumb}>Manajemen &middot; 2</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Daftar Role
      </h2>
      <p className={styles.paragraph}>
        Buka menu <code className={styles.code}>Role &amp; Akses</code>. Role bawaan <strong>Admin</strong> kini juga
        memiliki tombol edit (pensil) &mdash; hanya tombol hapus yang tetap terkunci untuk role ini. Role custom lain
        (CEO, Employee, Lead) masing-masing menampilkan jumlah izin dan jumlah karyawan anggotanya, dengan tombol edit
        dan hapus tersedia penuh.
      </p>
      <PanduanShot
        src="31-daftar-role.jpg"
        alt="Daftar Role: Admin, CEO, Employee, dan Lead beserta jumlah izin dan anggota"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Kelola Anggota Role
      </h2>
      <p className={styles.paragraph}>
        Klik tombol <code className={styles.code}>Kelola Anggota</code> untuk menambah atau melihat anggota tiap role
        lewat kolom pencarian karyawan.
      </p>
      <PanduanShot
        src="32-kelola-anggota.jpg"
        alt="Modal Kelola Anggota Role menampilkan daftar karyawan pada role terkait"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>3</span>Membuat Role Baru
      </h2>
      <p className={styles.paragraph}>
        Klik tombol <code className={styles.code}>Buat Role</code>, isi nama role, lalu centang kategori permission
        yang diinginkan: Monitoring, Analitik, Tim, <strong>Project</strong>, Karyawan, Pengaturan, dan Role &amp;
        Akses. Kategori <strong>Project</strong> (Lihat daftar project, Buat project, Ubah project &amp; anggota,
        Sync project dari Space) merupakan penambahan baru dibanding sebelumnya. Tersedia opsi &ldquo;Pilih
        semua&rdquo; per kategori. Scope data tidak diatur di halaman ini &mdash; hanya menu &amp; aksi yang boleh
        diakses tiap role.
      </p>
      <PanduanShot
        src="33-buat-role.jpg"
        alt="Form Buat Role Baru dengan daftar permission per kategori, termasuk kategori Project yang baru"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>4</span>Klik Edit pada Role Admin
      </h2>
      <p className={styles.paragraph}>
        Berbeda dari temuan audit sebelumnya, tombol edit (pensil) pada role <strong>Admin</strong> kini bisa diklik
        dan membuka modal &ldquo;Ubah Role: Admin&rdquo;. Semua toggle izin tampil <strong>aktif dan terkunci</strong>{" "}
        (tidak bisa dimatikan), dengan keterangan: &ldquo;Role Admin selalu punya semua akses dan tidak bisa
        dikurangi &mdash; superuser.&rdquo; Nama role juga tidak bisa diubah untuk role bawaan ini.
      </p>
      <PanduanShot
        src="31b-ubah-role-admin.jpg"
        alt="Modal Ubah Role: Admin — seluruh izin aktif dan terkunci sebagai superuser"
      />

      <h2 className={styles.h2}>
        <span className={styles.num}>5</span>Mapping Jabatan &rarr; Role <span className={styles.badgeNew}>Baru</span>
      </h2>
      <p className={styles.paragraph}>
        Bagian baru di bawah daftar role yang menjelaskan cara kerja auto-assign role saat sinkronisasi dari Humanis:
        pencocokan nama jabatan dilakukan secara <em>case-insensitive</em> dan berbasis substring (mis. &ldquo;lead&rdquo;
        cocok dengan &ldquo;Lead Engineer&rdquo;). Karyawan yang rolenya sudah diatur manual dan role{" "}
        <strong>super-admin</strong> tidak ikut diubah oleh proses ini. Aturan dicek urut dari atas; jika tidak ada
        yang cocok, role default-nya adalah <strong>Employee</strong>.
      </p>

      <PanduanPageNav prev={prev} next={next} />
    </>
  );
}
