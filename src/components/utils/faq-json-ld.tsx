import Script from 'next/script';

interface FAQ {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  faqs: FAQ[];
}

export const FaqJsonLd = ({ faqs }: FaqJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
