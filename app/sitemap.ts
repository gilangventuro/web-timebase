import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { PANDUAN_FLAT_LINKS } from "@/lib/panduan-nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/", "/fitur", "/keamanan-kepatuhan", "/harga", "/blog"];
  const panduanRoutes = PANDUAN_FLAT_LINKS.map((link) => link.href);
  const blogPosts = [
    "/blog/accountability-tool-vs-surveillance-tool-monitoring-karyawan-wfa",
    "/blog/panduan-compliance-uu-pdp-monitoring-karyawan-remote",
    "/blog/kebijakan-wfa-akuntabel-perusahaan-malang-jawa-timur",
  ];

  return [
    ...routes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: (route === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "/" ? 1 : 0.8,
    })),
    ...panduanRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "/panduan" ? 0.8 : 0.6,
    })),
    ...blogPosts.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
