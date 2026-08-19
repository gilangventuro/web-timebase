import { CONTACT_WA_LINK } from "@/lib/site";

export type ArticleIllustration = "accountability" | "compliance" | "malang";

export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; headers: string[]; rows: string[][] };

export interface ArticleClosing {
  heading: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
}

export interface BlogArticle {
  slug: string;
  /** Judul lengkap artikel (H1). */
  title: string;
  /** Judul singkat untuk kartu index Blog. */
  cardTitle: string;
  /** Deskripsi satu baris untuk kartu index Blog. */
  cardDesc: string;
  /** Tanggal tampil, persis dari sumber: "17 Agustus 2026". */
  displayDate: string;
  /** Tanggal ISO untuk JSON-LD/datetime attribute. */
  isoDate: string;
  readTime: string;
  illustration: ArticleIllustration;
  heroCtaLabel: string;
  heroCtaHref: string;
  heroCtaExternal?: boolean;
  /** Meta description (1-2 kalimat pembuka artikel) untuk generateMetadata. */
  seoDescription: string;
  blocks: ArticleBlock[];
  closing: ArticleClosing;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "accountability-tool-vs-surveillance-tool-monitoring-karyawan-wfa",
    title: "Accountability Tool vs Surveillance Tool: Beda Krusial Monitoring Karyawan",
    cardTitle: "Accountability vs Surveillance Tool",
    cardDesc: "Kenali beda tegas dua pendekatan monitoring sebelum memantau tim Anda.",
    displayDate: "17 Agustus 2026",
    isoDate: "2026-08-17",
    readTime: "7 menit baca",
    illustration: "accountability",
    heroCtaLabel: "Lihat Cara Kerja Timebase →",
    heroCtaHref: "/fitur",
    seoDescription:
      "Sejak kerja jarak jauh dan hybrid jadi standar, muncul productivity paranoia di sisi manajemen — kenali beda krusial accountability tool dan surveillance tool sebelum memantau tim Anda.",
    blocks: [
      { kind: "h2", text: "Fenomena “Productivity Paranoia” di Tim Hybrid" },
      {
        kind: "p",
        text: "Sejak kebijakan kerja jarak jauh dan hybrid menjadi standar operasional di banyak perusahaan Indonesia, muncul ketegangan psikologis baru di sisi manajemen: rasa cemas bahwa karyawan yang tidak terlihat langsung tidak benar-benar bekerja maksimal. Fenomena ini dikenal sebagai productivity paranoia. Studi Microsoft menemukan bahwa 49% manajer tim hybrid mengaku kesulitan mempercayai bahwa karyawan bekerja maksimal saat tidak terlihat langsung, sementara separuh pemimpin bisnis lain meyakini karyawan yang “out of sight” bekerja tidak sekeras saat berada di kantor.",
      },
      {
        kind: "p",
        text: "Tekanan inilah yang sering mendorong perusahaan terburu-buru memilih alat monitoring tanpa mempertimbangkan dampaknya terhadap kepercayaan tim. Padahal, jenis alat yang dipilih — accountability tool atau surveillance tool — menentukan apakah kebijakan monitoring karyawan akan bertahan jangka panjang atau justru memicu masalah baru.",
      },
      { kind: "h2", text: "Ciri-Ciri Surveillance Tool" },
      {
        kind: "p",
        text: "Surveillance tool memantau karyawan secara diam-diam dan invasif: keystroke logging, perekaman layar tanpa pemberitahuan, hingga pelacakan aktivitas di luar konteks pekerjaan. Pendekatan ini memang menghasilkan data, tetapi mengorbankan kepercayaan tim.",
      },
      {
        kind: "p",
        text: "Riset Gallup menunjukkan 70% karyawan yang merasa tidak dipercaya oleh atasannya cenderung mencari pekerjaan baru. Alat yang terasa seperti mata-mata justru mempercepat karyawan terbaik keluar dari perusahaan.",
      },
      { kind: "h2", text: "Ciri-Ciri Accountability Tool" },
      {
        kind: "p",
        text: "Sebaliknya, accountability tool dibangun di atas transparansi dan persetujuan (consent). Karyawan tahu persis data apa yang direkam dan untuk tujuan apa — termasuk jika ada screenshot berkala, itu diambil secara terjadwal saat sesi aktif (bukan rekaman layar terus-menerus) dan bisa ditinjau kapan saja, bukan diam-diam. Data yang dikumpulkan dibatasi hanya pada aktivitas yang relevan dengan pekerjaan — jam kerja, status aktif, dan ringkasan progres — bukan konten pribadi atau aktivitas di luar jam kerja.",
      },
      { kind: "h2", text: "Tabel Perbandingan: Accountability Tool vs Surveillance Tool" },
      {
        kind: "table",
        headers: ["Aspek", "Surveillance Tool", "Accountability Tool"],
        rows: [
          ["Transparansi", "Diam-diam, tanpa pemberitahuan", "Terbuka, karyawan tahu data yang direkam"],
          [
            "Jenis Data",
            "Keystroke logging, rekam layar kontinu, aktivitas pribadi di luar kerja",
            "Status Active/Idle, screenshot berkala saat sesi aktif, aplikasi & situs terkait pekerjaan — bukan isi ketikan atau rekaman layar terus-menerus",
          ],
          ["Dampak Trust", "Menurunkan kepercayaan tim", "Memperkuat kepercayaan lewat transparansi"],
          [
            "Legalitas UU PDP",
            "Berisiko melanggar tanpa consent tertulis",
            "Berbasis consent tertulis, selaras UU PDP No. 27/2022",
          ],
          [
            "Dampak Retensi Karyawan",
            "Memicu resign, 70% karyawan tidak dipercaya cenderung keluar",
            "Mendukung retensi karena karyawan merasa dihargai",
          ],
        ],
      },
      { kind: "h2", text: "Micromanagement Menurunkan Produktivitas hingga 55%" },
      {
        kind: "p",
        text: "Data pendukung lain memperkuat mengapa pendekatan surveillance berisiko kontraproduktif: micromanagement dapat menurunkan produktivitas hingga 55%. Semakin ketat dan invasif pengawasan, semakin besar pula tekanan psikologis yang membuat karyawan bekerja defensif — bukan produktif. Accountability tool menghindari jebakan ini karena berfokus pada hasil dan aktivitas kerja yang terukur, bukan pengawasan berlebihan atas setiap gerakan karyawan.",
      },
      { kind: "h2", text: "Bagaimana Timebase Memposisikan Diri" },
      {
        kind: "p",
        text: "Timebase secara eksplisit memposisikan diri sebagai accountability tool, bukan surveillance tool. Setiap pemantauan berjalan di atas consent tertulis karyawan, data yang direkam dibatasi pada aktivitas kerja, dan seluruh tim mendapatkan visibilitas yang sama atas laporan yang dihasilkan. Pendekatan ini memberi HR Manager bukti produktivitas yang bisa dipertanggungjawabkan ke direksi, tanpa mengorbankan kepercayaan tim Anda.",
      },
    ],
    closing: {
      heading: "Lihat Cara Kerja Accountability Tool Timebase",
      text: "Pelajari bagaimana tracking real-time Timebase memberi visibilitas kerja tanpa mengintai karyawan Anda.",
      buttonLabel: "Lihat Fitur & Cara Kerja",
      buttonHref: "/fitur",
    },
  },
  {
    slug: "panduan-compliance-uu-pdp-monitoring-karyawan-remote",
    title: "Panduan Compliance UU PDP No. 27/2022 saat Memantau Karyawan Remote",
    cardTitle: "Panduan Compliance UU PDP",
    cardDesc: "Checklist consent dan keamanan data karyawan sesuai UU PDP No. 27/2022.",
    displayDate: "17 Agustus 2026",
    isoDate: "2026-08-17",
    readTime: "8 menit baca",
    illustration: "compliance",
    heroCtaLabel: "Pelajari Kepatuhan UU PDP Timebase →",
    heroCtaHref: "/keamanan-kepatuhan",
    seoDescription:
      "UU PDP No. 27/2022 berlaku efektif sejak Oktober 2024 dan mewajibkan consent tertulis sebelum memantau karyawan remote — pelajari checklist compliance-nya untuk HR di sini.",
    blocks: [
      { kind: "h2", text: "Kenapa UU PDP Relevan bagi Employee Monitoring" },
      {
        kind: "p",
        text: "Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) berlaku efektif sejak Oktober 2024 dan menjadi payung hukum utama bagi setiap perusahaan Indonesia yang memproses data pribadi — termasuk data aktivitas kerja karyawan remote. Bagi perusahaan yang menerapkan kebijakan kerja jarak jauh maupun hybrid, ini berarti setiap bentuk monitoring karyawan wajib punya dasar hukum yang jelas, bukan sekadar kebijakan internal tanpa payung regulasi.",
      },
      { kind: "h2", text: "Data Pribadi Karyawan yang Dilindungi dalam Konteks Kerja Remote" },
      {
        kind: "p",
        text: "Dalam konteks kerja remote, data pribadi karyawan yang dilindungi mencakup identitas, jam kerja, lokasi kerja, hingga aktivitas digital yang terekam melalui perangkat kerja. UU PDP mewajibkan perusahaan memproses data ini secara sah, terbatas pada tujuan yang jelas, dan tidak disalahgunakan di luar konteks hubungan kerja.",
      },
      { kind: "h2", text: "Kewajiban Consent Tertulis Sebelum Tracking Dimulai" },
      {
        kind: "p",
        text: "UU PDP No. 27/2022 mewajibkan consent tertulis sebelum memantau karyawan. Langkah praktis mendapatkan persetujuan ini meliputi: menjelaskan secara terbuka data apa yang akan direkam, tujuan perekaman, durasi penyimpanan, dan siapa saja yang dapat mengaksesnya — lalu meminta karyawan menandatangani formulir consent secara sadar sebelum instalasi alat tracking diaktifkan. Consent yang diperoleh secara diam-diam atau dipaksakan tidak memenuhi standar UU PDP.",
      },
      { kind: "h2", text: "Prinsip Minimalisasi Data" },
      {
        kind: "p",
        text: "Prinsip minimalisasi data berarti perusahaan hanya boleh merekam data yang benar-benar relevan dengan pekerjaan — jam kerja, status aktivitas, dan ringkasan progres tugas — bukan konten pribadi, riwayat penjelajahan di luar aplikasi kerja, atau aktivitas di luar jam kerja yang disepakati. Semakin sedikit data yang dikumpulkan di luar kebutuhan kerja, semakin rendah pula risiko pelanggaran privasi.",
      },
      { kind: "h2", text: "Risiko dan Sanksi Hukum bila Tidak Compliant" },
      {
        kind: "p",
        text: "Perusahaan yang memantau karyawan tanpa consent tertulis atau memproses data melebihi kebutuhan kerja berisiko dianggap melanggar UU PDP — mulai dari sanksi administratif hingga potensi gugatan dari karyawan yang merasa privasinya dilanggar. Risiko ini bukan hanya soal denda, tetapi juga reputasi perusahaan di mata karyawan dan calon karyawan.",
      },
      { kind: "h2", text: "Checklist Compliance untuk HR" },
      {
        kind: "ul",
        items: [
          "Siapkan formulir consent tertulis yang menjelaskan data yang direkam dan tujuannya.",
          "Minta persetujuan karyawan sebelum instalasi alat tracking, bukan setelahnya.",
          "Batasi data yang direkam hanya pada aktivitas terkait pekerjaan (prinsip minimalisasi data).",
          "Tetapkan kebijakan retensi data yang jelas, termasuk jadwal penghapusan.",
          "Batasi akses data hanya untuk HR/manajer yang berwenang, melalui kontrol akses berbasis peran.",
          "Tinjau ulang kebijakan compliance secara berkala mengikuti perkembangan regulasi.",
        ],
      },
      { kind: "h2", text: "Timebase Dirancang Compliant by Design" },
      {
        kind: "p",
        text: "Timebase dibangun dengan prinsip compliant by design sejak awal: consent tertulis menjadi syarat sebelum tracking aktif, data yang direkam dibatasi pada aktivitas kerja, dan akses data dikontrol berbasis peran HR/manajer. Pendekatan ini membantu perusahaan menjalankan kebijakan kerja jarak jauh maupun hybrid tanpa mengorbankan kepatuhan terhadap UU PDP No. 27/2022.",
      },
    ],
    closing: {
      heading: "Pelajari Kepatuhan UU PDP Timebase Lebih Dalam",
      text: "Lihat bagaimana Timebase menjaga consent tertulis, enkripsi data, dan akses terbatas sesuai UU PDP No. 27/2022.",
      buttonLabel: "Lihat Keamanan & Kepatuhan",
      buttonHref: "/keamanan-kepatuhan",
    },
  },
  {
    slug: "kebijakan-wfa-akuntabel-perusahaan-malang-jawa-timur",
    title: "Cara Perusahaan Malang & Jatim Menyusun Kebijakan Kerja yang Akuntabel",
    cardTitle: "Kebijakan Kerja Perusahaan Malang",
    cardDesc: "Lima langkah menyusun kebijakan kerja akuntabel untuk tim lintas kota.",
    displayDate: "17 Agustus 2026",
    isoDate: "2026-08-17",
    readTime: "7 menit baca",
    illustration: "malang",
    heroCtaLabel: "Konsultasi Kebijakan Kerja dengan Timebase →",
    heroCtaHref: CONTACT_WA_LINK,
    heroCtaExternal: true,
    seoDescription:
      "Kebijakan kerja fleksibel kini jadi standar operasional perusahaan Indonesia — simak lima langkah bagi perusahaan Malang & Jatim menyusun kebijakan kerja yang akuntabel.",
    blocks: [
      { kind: "h2", text: "Tren Kerja Fleksibel di Perusahaan Indonesia 2026" },
      {
        kind: "p",
        text: "Kebijakan kerja fleksibel — baik jarak jauh maupun hybrid — kini menjadi standar operasional, bukan lagi eksperimen darurat era pandemi. Perusahaan-perusahaan besar Indonesia seperti Tokopedia, Traveloka, Unilever, dan Shopee telah menerapkan kebijakan kerja hybrid secara permanen, menunjukkan bahwa fleksibilitas kerja jarak jauh dapat berjalan beriringan dengan pertumbuhan bisnis yang sehat — asal didukung mekanisme akuntabilitas yang jelas.",
      },
      { kind: "h2", text: "Tantangan Spesifik Perusahaan Regional Malang & Jatim" },
      {
        kind: "p",
        text: "Bagi perusahaan berbasis Malang dan Jawa Timur, penerapan kebijakan kerja jarak jauh maupun hybrid membawa tantangan tersendiri: tim yang tersebar lintas kota, dukungan IT yang lebih terbatas dibanding kota-kota besar, dan minimnya pengawasan fisik langsung terhadap tim yang bekerja dari berbagai lokasi — termasuk yang tetap bekerja dari kantor. Tanpa sistem akuntabilitas yang terukur, direksi kesulitan memastikan kebijakan kerja tersebut benar-benar berjalan efektif di seluruh tim.",
      },
      { kind: "h2", text: "Lima Langkah Menyusun Kebijakan Kerja yang Akuntabel" },
      {
        kind: "ol",
        items: [
          "Definisikan jam kerja secara eksplisit, termasuk toleransi fleksibilitas waktu bagi tim lintas kota maupun yang bekerja dari kantor.",
          "Susun SOP pelaporan yang jelas — kapan dan bagaimana karyawan melaporkan progres pekerjaan harian.",
          "Terapkan mekanisme consent tertulis sebelum tracking aktivitas kerja dimulai, sesuai UU PDP No. 27/2022.",
          "Pilih alat tracking yang tepat — accountability tool yang transparan, bukan surveillance tool yang invasif.",
          "Lakukan evaluasi berkala terhadap efektivitas kebijakan kerja berdasarkan data objektif, bukan asumsi.",
        ],
      },
      { kind: "h2", text: "Skenario Penerapan di Perusahaan Skala Menengah Malang" },
      {
        kind: "p",
        text: "Bayangkan sebuah perusahaan skala menengah berbasis Malang dengan tim operasional yang tersebar di beberapa kota Jawa Timur — baik yang bekerja dari kantor maupun dari lokasi masing-masing. Dengan kebijakan kerja yang akuntabel, HR Manager dapat memantau jam kerja dan status aktivitas tim secara real-time, menyusun laporan produktivitas otomatis untuk direksi, dan tetap menjaga kepercayaan tim karena seluruh proses berjalan transparan dan berbasis consent — bukan pengawasan diam-diam.",
      },
      { kind: "h2", text: "Peran Dukungan Lokal dalam Suksesnya Kebijakan Kerja" },
      {
        kind: "p",
        text: "Dukungan lokal menjadi faktor penentu — mulai dari kesamaan zona waktu WIB yang memudahkan koordinasi real-time, onboarding yang lebih cepat karena konteks bisnis yang dipahami langsung, hingga respons dukungan teknis yang tidak perlu menunggu tim di kota lain. Bagi perusahaan Malang dan Jatim, kedekatan konteks bisnis lokal ini mempercepat adopsi kebijakan kerja yang akuntabel.",
      },
      { kind: "h2", text: "Bagaimana Timebase Mendukung Perusahaan Malang & Jatim" },
      {
        kind: "p",
        text: "Sebagai perusahaan yang berbasis di Kota Malang, Timebase memahami langsung tantangan operasional perusahaan Jawa Timur — dukungan cepat, zona WIB, dan konteks bisnis lokal menjadi bagian dari cara kami membangun produk ini. Timebase membantu perusahaan Malang dan Jatim menyusun kebijakan kerja yang akuntabel melalui sistem tracking real-time yang transparan dan berbasis consent.",
      },
    ],
    closing: {
      heading: "Susun Kebijakan Kerja Akuntabel Bersama Timebase",
      text: "Tim Timebase di Malang siap membantu perusahaan Anda menyusun kebijakan kerja yang terukur dan sesuai UU PDP.",
      buttonLabel: "Konsultasi Gratis Sekarang",
      buttonHref: CONTACT_WA_LINK,
      external: true,
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
}
