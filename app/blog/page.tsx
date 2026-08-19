import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SwipeableCards from "@/components/SwipeableCards";
import BlogIllustrationAccountability from "@/components/BlogIllustrationAccountability";
import BlogIllustrationCompliance from "@/components/BlogIllustrationCompliance";
import BlogIllustrationMalang from "@/components/BlogIllustrationMalang";
import BlogFaqAccordion from "@/components/BlogFaqAccordion";
import BlogVideoPreviewPulse from "@/components/BlogVideoPreviewPulse";
import { SITE_URL, SITE_NAME, CONTACT_WA_LINK } from "@/lib/site";
import { BLOG_ARTICLES } from "./blog-data";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/blog`;
const PAGE_TITLE = "Blog Timebase | Tips Monitoring Aktivitas Karyawan";
const PAGE_DESCRIPTION =
  "Panduan praktis akuntabilitas kerja untuk HR Manager. Regulasi, strategi, dan tren terbaru dari tim Timebase.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const FAQ_ITEMS = [
  {
    question: "Seberapa sering Timebase memperbarui blog ini?",
    answer:
      "Kami rutin menerbitkan artikel baru seputar tips monitoring aktivitas karyawan, tren HR tech, dan regulasi terkait agar HR Manager selalu punya rujukan terkini.",
  },
  {
    question: "Apakah artikel ini membahas UU PDP secara mendalam?",
    answer:
      "Ya — sejumlah artikel kami secara khusus membahas compliance UU PDP monitoring karyawan, termasuk kewajiban consent tertulis dan prinsip minimalisasi data.",
  },
  {
    question: "Apakah Timebase hanya relevan untuk perusahaan di Malang?",
    answer:
      "Tidak — meski berbasis di Malang, seluruh tips dan panduan kami (termasuk kebijakan kerja fleksibel perusahaan Malang) dapat diterapkan perusahaan di kota mana pun di Indonesia.",
  },
  {
    question: "Bagaimana blog ini membantu keputusan bisnis saya?",
    answer:
      "Setiap artikel dirancang membantu HR Manager mengambil keputusan berbasis data sebelum menerapkan atau mengevaluasi kebijakan monitoring karyawan di perusahaan.",
  },
  {
    question: "Apakah artikel Timebase boleh dibagikan ulang?",
    answer: "Boleh, selama menyertakan atribusi dan tautan balik (backlink) ke artikel asli di timebase.id/blog.",
  },
];

const ILLUSTRATIONS = {
  accountability: BlogIllustrationAccountability,
  compliance: BlogIllustrationCompliance,
  malang: BlogIllustrationMalang,
} as const;

export default function BlogIndexPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: PAGE_TITLE,
      url: PAGE_URL,
      description: PAGE_DESCRIPTION,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      blogPost: BLOG_ARTICLES.map((article) => ({
        "@type": "BlogPosting",
        headline: article.title,
        url: `${SITE_URL}/blog/${article.slug}`,
        datePublished: article.isoDate,
        author: { "@type": "Organization", name: SITE_NAME },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Visually hidden — SEO/accessibility still need exactly one <h1> per
          page even though the hero block itself was removed from view. */}
      <h1 className="srOnly">Wawasan Monitoring Karyawan</h1>

      {/* SECTION 3: Artikel Pilihan Kami */}
      <section className={styles.articles}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Artikel Pilihan Kami</h2>
            <p className={styles.valueProp}>
              Timebase membantu perusahaan memantau aktivitas karyawan melalui sistem tracking real-time,
              memberikan visibilitas dan akuntabilitas kerja yang transparan — baik jarak jauh maupun di kantor.
              Mulai dari tips monitoring aktivitas karyawan berikut.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <SwipeableCards ariaLabel="Artikel pilihan blog Timebase">
              {BLOG_ARTICLES.map((article) => {
                const Illustration = ILLUSTRATIONS[article.illustration];
                return (
                  <div className={`${styles.articleCard} stagger-item`} key={article.slug} tabIndex={0}>
                    <div className={styles.articleBanner}>
                      <Illustration />
                    </div>
                    <div className={styles.articleBody}>
                      <div className={styles.articleMeta}>
                        <span className={styles.articleTag}>Artikel</span>
                        <span className={styles.articleMetaDot} aria-hidden="true">
                          &middot;
                        </span>
                        <span>{article.displayDate}</span>
                        <span className={styles.articleMetaDot} aria-hidden="true">
                          &middot;
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className={styles.articleCardTitle}>{article.cardTitle}</h3>
                      <p className={styles.articleCardDesc}>{article.cardDesc}</p>
                      <Link
                        href={`/blog/${article.slug}`}
                        className={styles.readArticleLink}
                        title={`Baca Artikel: ${article.title}`}
                      >
                        Baca Artikel
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </SwipeableCards>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4: Kenapa Kami Menulis Ini */}
      <section className={styles.why}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Kenapa Kami Menulis Ini</h2>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.whyBody}>
            <p>
              Timebase dibangun di atas satu prinsip: tracking aktivitas karyawan harus menjadi alat akuntabilitas,
              bukan alat pengintaian diam-diam. Blog ini ditulis untuk membantu HR Manager memahami cara menerapkan
              kebijakan kerja yang terukur tanpa jatuh ke micromanagement yang justru menurunkan produktivitas.
            </p>
            <p>
              Setiap topik yang kami angkat — mulai dari kepatuhan UU PDP No. 27/2022, tren kerja fleksibel di
              perusahaan Indonesia, hingga strategi mengelola tim lintas kota — disusun berdasarkan kebutuhan nyata
              HR Manager yang harus mempertanggungjawabkan kebijakan kerja ke jajaran direksi.
            </p>
            <p>
              Sebagai perusahaan yang berbasis di Kota Malang, kami memahami tantangan operasional perusahaan Jawa
              Timur secara langsung — dukungan cepat, zona WIB, dan konteks bisnis lokal menjadi bagian dari cara
              kami menulis dan membangun produk ini.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pertanyaan Umum Blog Timebase</h2>
          </AnimatedSection>

          <AnimatedSection as="div">
            <BlogFaqAccordion items={FAQ_ITEMS} />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6: Pratinjau Video Insight (motion signature Dynamic Pulse) */}
      <section className={styles.videoPreview}>
        <div className="container">
          <AnimatedSection as="div" className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Pratinjau Video Insight Monitoring Karyawan</h2>
            <p className={styles.valueProp}>
              Video edukasi seputar akuntabilitas kerja sedang diproduksi Timebase. Area ini sementara menampilkan
              animasi interaktif Dynamic Pulse — garis real-time tracking dan pulse dot yang bergerak berkelanjutan
              — sebagai gambaran motion signature dashboard Timebase yang sesungguhnya.
            </p>
          </AnimatedSection>

          <AnimatedSection as="div">
            <BlogVideoPreviewPulse />
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.videoNote}>
            <p>
              Nantikan seri video insight seputar tren monitoring karyawan, compliance UU PDP, dan studi kasus
              kebijakan kerja perusahaan Indonesia langsung dari tim Timebase.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7: CTA penutup */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>Jangan Tunggu Sampai Terlambat</h2>
            <p className={styles.ctaSubheadline}>
              100+ perusahaan sudah memantau tim mereka secara real-time dan akuntabel bersama Timebase.
            </p>
            <a
              href={CONTACT_WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButtonLarge}
              title="Konsultasi Gratis Sekarang bersama Timebase via WhatsApp"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className={styles.guarantee}>Respons cepat dari tim Malang, tanpa komitmen kontrak di awal konsultasi.</p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
