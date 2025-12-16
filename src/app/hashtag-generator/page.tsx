import { HashtagGenerator } from '@/components/features/hashtag-generator';
import { FaqJsonLd } from '@/components/utils';
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
      <div className="container mx-auto px-4 md:px-6">
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
