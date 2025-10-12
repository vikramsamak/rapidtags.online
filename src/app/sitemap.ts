import { APP_URL } from "@/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  return [
    {
      url: APP_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
