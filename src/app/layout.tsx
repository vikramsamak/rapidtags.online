import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { APP_URL, METADATA } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keywords,
  creator: METADATA.creator,
  authors: METADATA.authors,
  alternates: {
    canonical: APP_URL,
  },
  metadataBase: new URL("https://www.rapidtags.online"),
  applicationName: "RapidTags",
};

const GA_TAG = process.env.GA_TAG as string;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased dark`}
    >
      <body className="font-sans bg-background text-foreground">
        <Suspense fallback={null}>{children}</Suspense>
        <GoogleAnalytics gaId={GA_TAG} />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
