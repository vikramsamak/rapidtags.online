import { APP_URL, METADATA } from '@/constants';
import Script from 'next/script';

export const JsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: METADATA.applicationName,
    url: APP_URL,
    image: `${APP_URL}/opengraph-image.png`,
    description: METADATA.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
    featureList: [
      'AI Hashtag Generator',
      'YouTube Tag Generator',
      'TikTok Viral Hashtags',
      'Instagram Content Ideas',
    ],
    sameAs: [
      'https://twitter.com/vikramsamak',
      'https://github.com/vikramsamak',
    ],
  };

  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
