import { APP_URL, METADATA } from "@/constants";
import Script from "next/script";

export const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: METADATA.applicationName,
    url: APP_URL,
    operatingSystem: "ANY",
    applicationCategory: "WebApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};