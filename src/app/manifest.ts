import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rapidtags",
    short_name: "RapidTags",
    description: "A app build for generating hashtags.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "any",
    id: "/",
    icons: [
      {
        src: "/icon/android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon/ios/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/ios/512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon/windows11/Square150x150Logo.scale-100.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        src: "/icon/windows11/LargeTile.scale-200.png",
        sizes: "620x620",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/wide.png",
        type: "image/png",
        sizes: "1910x883",
        form_factor: "wide",
      },
      {
        src: "/screenshots/narrow.png",
        type: "image/png",
        sizes: "345x767",
        form_factor: "narrow",
      },
    ],
  };
}
