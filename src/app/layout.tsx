import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import { APP_URL, METADATA } from "@/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from "@radix-ui/react-scroll-area";

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
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className="h-[100vh]">
            <Header />
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Footer />
            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollArea>
          <Toaster position="top-center" />
        </ThemeProvider>
        <GoogleAnalytics gaId={GA_TAG} />
      </body>
    </html>
  );
}
