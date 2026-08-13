import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["/", "/fitur", "/perbandingan", "/harga", "/tentang", "/blog", "/kontak"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/blog" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
