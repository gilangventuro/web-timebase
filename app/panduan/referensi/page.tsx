import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { getPanduanPageNav } from "@/lib/panduan-nav";
import PanduanPageNav from "@/components/PanduanPageNav";
import styles from "../docs.module.css";

const PAGE_URL = `${SITE_URL}/panduan/referensi`;
const PAGE_TITLE = "Glosarium & Catatan Audit";
const PAGE_DESCRIPTION =
  "Rujukan cepat istilah, catatan audit, dan alur penggunaan TimeBase (Hub Venturo).";

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

export default function PanduanReferensiPage() {
  const { prev } = getPanduanPageNav("/panduan/referensi");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    headline: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    author: { "@type": "Organization", name: SITE_NAME },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className={styles.crumb}>Referensi</div>
      <h1 className={styles.h1}>{PAGE_TITLE}</h1>
      <p className={styles.subtitle}>{PAGE_DESCRIPTION}</p>

      <h2 className={styles.h2}>
        <span className={styles.num}>1</span>Glosarium
      </h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Istilah</th>
            <th>Keterangan</th>
          </tr>
          <tr>
            <td>
              <strong>Tracked Time</strong>
            </td>
            <td>Total waktu yang terlacak oleh agen desktop selama sesi kerja.</td>
          </tr>
          <tr>
            <td>
              <strong>Active</strong>
            </td>
            <td>Waktu dengan aktivitas keyboard/mouse terdeteksi.</td>
          </tr>
          <tr>
            <td>
              <strong>Idle</strong>
            </td>
            <td>Waktu tanpa aktivitas terdeteksi.</td>
          </tr>
          <tr>
            <td>
              <strong>Distraction</strong>
            </td>
            <td>Waktu pemakaian aplikasi/situs yang masuk daftar Aturan Distraction.</td>
          </tr>
          <tr>
            <td>
              <strong>Cek sendiri</strong>
            </td>
            <td>Status aktivitas yang perlu ditinjau manual.</td>
          </tr>
          <tr>
            <td>
              <strong>Tak Terekam</strong>
            </td>
            <td>Waktu yang tidak terlacak oleh agen (mis. agen tertutup).</td>
          </tr>
          <tr>
            <td>
              <strong>Keaktifan (%)</strong>
            </td>
            <td>Persentase waktu aktif dibanding total waktu terekam.</td>
          </tr>
          <tr>
            <td>
              <strong>Slightly Unusual</strong>
            </td>
            <td>Badge pada screenshot dengan pola yang berbeda dari kebiasaan.</td>
          </tr>
          <tr>
            <td>
              <strong>Role &amp; Permission</strong>
            </td>
            <td>Pengaturan menu &amp; aksi yang boleh diakses tiap peran.</td>
          </tr>
          <tr>
            <td>
              <strong>Scope Data</strong>
            </td>
            <td>Cakupan data yang bisa dilihat, otomatis mengikuti hierarki Humanis.</td>
          </tr>
          <tr>
            <td>
              <strong>Tenant</strong>
            </td>
            <td>Organisasi/perusahaan yang sedang aktif dalam sesi login, ditampilkan di bawah logo sidebar.</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.h2}>
        <span className={styles.num}>2</span>Catatan Audit &mdash; Audit 18 Agustus 2026
      </h2>
      <ul className={styles.list}>
        <li>
          Aplikasi tampil dengan rebranding wordmark <strong>TimeBase</strong> (gradasi ungu&ndash;oranye, tagline
          &ldquo;Accountability Everywhere&rdquo;) beserta kotak identitas <strong>TENANT</strong> baru di sidebar;
          struktur menu MONITORING dan MANAJEMEN tidak berubah.
        </li>
        <li>
          Menu Tindakan pada Daftar User bertambah satu opsi: <strong>Ubah Data</strong>.
        </li>
        <li>
          Role <strong>Admin</strong> pada halaman Role &amp; Akses kini memiliki tombol edit; hanya tombol hapus
          yang tetap terkunci.
        </li>
        <li>
          Form Buat Role Baru bertambah kategori permission <strong>Project</strong> (4 izin: lihat, buat, ubah, sync
          dari Space).
        </li>
        <li>
          Halaman Role &amp; Akses menambahkan penjelasan <strong>Mapping Jabatan &rarr; Role</strong> untuk
          auto-assign role saat sync Humanis.
        </li>
        <li>
          Contoh tag Distraction Situs pada Pengaturan WFA bertambah satu entri (
          <code className={styles.code}>store.steampowered.com</code>).
        </li>
        <li>
          Permission <code className={styles.code}>team.view</code> (&ldquo;Lihat halaman Tim Saya&rdquo;) dan
          kategori <code className={styles.code}>Analitik</code> masih terdaftar di Role &amp; Akses namun belum
          ditemukan sebagai halaman tersendiri yang bisa diakses lewat sidebar akun Admin &mdash; kemungkinan khusus
          untuk role tertentu atau belum tersedia, sama seperti temuan audit sebelumnya.
        </li>
        <li>
          Data aktivitas hanya muncul bila filter tanggal disesuaikan ke periode yang memiliki data (mis. 11 Agustus
          2026); tanggal berjalan saat audit belum tentu memiliki data aktivitas.
        </li>
        <li>
          Audit mengikuti hak akses (role) akun Admin yang dipakai; fitur yang bersifat mengubah data (Sync dari
          Humanis, Ganti Password, Buat/Hapus Role) tidak dieksekusi &mdash; hanya diamati strukturnya.
        </li>
      </ul>

      <h2 className={styles.h2}>
        <span className={styles.num}>3</span>Ringkasan Alur Cepat
      </h2>
      <div className={styles.flow}>
        <div>Login</div>
        <div className={styles.flowArrow}>&darr;</div>
        <div>Atur filter tanggal &amp; karyawan di header</div>
        <div className={styles.flowArrow}>&darr;</div>
        <div>Tinjau ringkasan tiap karyawan &rarr; buka Detail (Screenshots / Per Jam / Aplikasi / URL)</div>
        <div className={styles.flowArrow}>&darr;</div>
        <div>Cross-check pola tim lewat menu Screenshot, Aplikasi, dan URL</div>
        <div className={styles.flowArrow}>&darr;</div>
        <div>Kelola User serta Role &amp; Akses sesuai kebutuhan admin</div>
        <div className={styles.flowArrow}>&darr;</div>
        <div>Sesuaikan Pengaturan WFA &mdash; konfigurasi tracking &amp; aturan distraction</div>
      </div>

      <PanduanPageNav prev={prev} />
    </>
  );
}
