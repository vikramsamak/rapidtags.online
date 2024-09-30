import { APP_URL } from "@/constants/Constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
