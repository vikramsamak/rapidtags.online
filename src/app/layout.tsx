import type { Metadata } from 'next';
import { Toaster } from '@/components/shadcn/sonner';
import { APP_URL, METADATA } from '@/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { JsonLd } from '@/components/custom/json-ld';
import { Suspense } from 'react';
import { Header } from '@/components/custom/header';
import { Footer } from '@/components/custom/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keywords,
  creator: METADATA.creator,
  authors: METADATA.authors,
  alternates: {
    canonical: APP_URL,
  },
  applicationName: METADATA.applicationName,
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
      className={`${GeistSans.variable} ${GeistMono.variable} dark antialiased`}
    >
      <body className="bg-background text-foreground font-sans">
        <Header />
        <Suspense fallback={null}>
          <main className="flex min-h-screen flex-col">{children}</main>
        </Suspense>
        <Footer />
        <GoogleAnalytics gaId={GA_TAG} />
        <JsonLd />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
