import Script from 'next/script';

interface Step {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: Step[];
}

export const HowToJsonLd = ({ name, description, steps }: HowToJsonLdProps) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };

  return (
    <Script
      id="howto-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
