import type { Metadata } from 'next';
import { Toaster } from '@/components/shadcn/sonner';
import { APP_URL, METADATA } from '@/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { JsonLd, ServiceWorkerRegistration } from '@/components';
import { Suspense } from 'react';
import { Header } from '@/components';
import { Footer } from '@/components';
import PWAInstallButton from '@/components/utils/pwa-install-button';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keywords,
  creator: METADATA.creator,
  authors: METADATA.authors,
  alternates: {
    canonical: './',
  },
  applicationName: METADATA.applicationName,
  category: 'technology',
  verification: {
    google: 'google-site-verification-code', // Replace with actual code
    yandex: 'yandex-verification-code', // Replace with actual code
    other: {
      'msvalidate.01': 'bing-verification-code', // Replace with actual code
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: METADATA.title,
    description: METADATA.description,
    creator: '@vikramsamak',
    images: [`${APP_URL}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      className={`${GeistSans.variable} ${GeistMono.variable} dark scroll-smooth antialiased`}
    >
      <ServiceWorkerRegistration />
      <body className="bg-background text-foreground font-sans">
        <Header />
        <Suspense fallback={null}>
          <main className="flex min-h-screen flex-col">{children}</main>
        </Suspense>
        <Footer />
        <GoogleAnalytics gaId={GA_TAG} />
        <JsonLd />
        <PWAInstallButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
