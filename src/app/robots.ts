import { APP_URL } from "@/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
