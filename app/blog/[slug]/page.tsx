import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BlogIllustrationAccountability from "@/components/BlogIllustrationAccountability";
import BlogIllustrationCompliance from "@/components/BlogIllustrationCompliance";
import BlogIllustrationMalang from "@/components/BlogIllustrationMalang";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { BLOG_ARTICLES, getArticleBySlug, type ArticleBlock } from "../blog-data";
import styles from "./page.module.css";

const ILLUSTRATIONS = {
  accountability: BlogIllustrationAccountability,
  compliance: BlogIllustrationCompliance,
  malang: BlogIllustrationMalang,
} as const;

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: article.title,
    description: article.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${article.title} | ${SITE_NAME}`,
      description: article.seoDescription,
      publishedTime: article.isoDate,
    },
  };
}

function renderBlock(block: ArticleBlock, index: number) {
  switch (block.kind) {
    case "h2":
      return (
        <h2 className={`${styles.h2} stagger-item`} key={index}>
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className={`${styles.p} stagger-item`} key={index}>
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className={`${styles.ul} stagger-item`} key={index}>
          {block.items.map((item) => (
            <li className={styles.ulItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className={`${styles.ol} stagger-item`} key={index}>
          {block.items.map((item, i) => (
            <li className={styles.olItem} key={item}>
              <span className={styles.olNumber} aria-hidden="true">
                {i + 1}
              </span>
              <span className={styles.olText}>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className={`${styles.tableWrap} stagger-item`} key={index}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} data-label={block.headers[cellIndex]}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const Illustration = ILLUSTRATIONS[article.illustration];
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.seoDescription,
      datePublished: article.isoDate,
      dateModified: article.isoDate,
      url: articleUrl,
      mainEntityOfPage: articleUrl,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/" title={`Beranda ${SITE_NAME}`}>
            Beranda
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" title={`Blog ${SITE_NAME}`}>
            Blog
          </Link>
        </nav>
      </div>

      {/* HERO ARTIKEL */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <AnimatedSection as="div" className={styles.heroText}>
            <h1 className={styles.headline}>{article.title}</h1>
            <p className={styles.metaRow}>
              <span>Tim Timebase</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={article.isoDate}>{article.displayDate}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{article.readTime}</span>
            </p>
          </AnimatedSection>

          <AnimatedSection as="div" className={styles.heroIllustrationBlock} delay={100} ambient>
            <Illustration />
            <a
              href={article.heroCtaHref}
              target={article.heroCtaExternal ? "_blank" : undefined}
              rel={article.heroCtaExternal ? "noopener noreferrer" : undefined}
              className={styles.heroCtaLink}
              title={`${article.heroCtaLabel} — ${SITE_NAME}`}
            >
              {article.heroCtaLabel}
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* BODY ARTIKEL */}
      <section className={styles.body}>
        <div className="container">
          <AnimatedSection as="article" className={styles.articleBody}>
            {article.blocks.map((block, index) => renderBlock(block, index))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA PENUTUP */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <AnimatedSection as="div">
            <h2 className={styles.ctaHeadline}>{article.closing.heading}</h2>
            <p className={styles.ctaSubheadline}>{article.closing.text}</p>
            <a
              href={article.closing.buttonHref}
              target={article.closing.external ? "_blank" : undefined}
              rel={article.closing.external ? "noopener noreferrer" : undefined}
              className={styles.ctaButtonLarge}
              title={`${article.closing.buttonLabel} — ${SITE_NAME}`}
            >
              {article.closing.buttonLabel}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
