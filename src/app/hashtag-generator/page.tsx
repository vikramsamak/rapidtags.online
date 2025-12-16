import dynamic from 'next/dynamic';
import { FaqJsonLd, BreadcrumbJsonLd, HowToJsonLd } from '@/components/utils';

const HashtagGenerator = dynamic(
  () =>
    import('@/components/features/hashtag-generator').then(
      (mod) => mod.HashtagGenerator,
    ),
  {
    loading: () => (
      <div className="bg-card/50 h-[600px] w-full animate-pulse rounded-xl" />
    ),
    ssr: true,
  },
);
import { Features } from '@/components/sections/features';
import { Steps } from '@/components/sections/steps';
import {
  HASHTAG_GENERATOR_FEATURES,
  HASHTAG_GENERATOR_STEPS,
} from '@/constants';

const FAQS = [
  {
    question: 'Is this hashtag generator free?',
    answer:
      'Yes, Rapidtags.online is 100% free to use for YouTube, TikTok, and Instagram. There are no hidden fees or subscriptions.',
  },
  {
    question: 'Do I need to login to use the tool?',
    answer:
      'No account is required. You can generate unlimited hashtags instantly without any registration or login.',
  },
  {
    question: 'How does the AI hashtag generator work?',
    answer:
      'Our advanced AI analyzes your keyword to find high-performing, trending hashtags associated with your topic, optimizing your social media reach.',
  },
];

export default function HashtagGeneratorPage() {
  return (
    <section id="hashtag-generator" className="py-2 md:py-4 lg:py-6">
      <FaqJsonLd faqs={FAQS} />
      <BreadcrumbJsonLd
        breadcrumbs={[
          { name: 'Home', item: 'https://rapidtags.online' },
          {
            name: 'Hashtag Generator',
            item: 'https://rapidtags.online/hashtag-generator',
          },
        ]}
      />
      <HowToJsonLd
        name="How to use the AI Hashtag Generator"
        description="Generate viral hashtags in seconds using AI."
        steps={HASHTAG_GENERATOR_STEPS.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
      />
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Free AI Hashtag Generator for Social Media
        </h1>
        <HashtagGenerator />
        <Features
          title="Features of Our Hashtag Generator"
          description="Everything you need to create winning hashtag strategies."
          features={HASHTAG_GENERATOR_FEATURES}
        />

        <Steps
          title="A Simple Process"
          description="Get the perfect hashtags in just a few easy steps."
          steps={HASHTAG_GENERATOR_STEPS}
        />
      </div>
    </section>
  );
}
