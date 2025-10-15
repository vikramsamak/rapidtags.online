import HashtagGenerator from '@/components/hashtag-generator';
import { Features } from '@/components/features';
import { Steps } from '@/components/steps';
import {
  HASHTAG_GENERATOR_FEATURES,
  HASHTAG_GENERATOR_STEPS,
} from '@/constants';

export default function HashtagGeneratorPage() {
  return (
    <>
      <section id="hashtag-generator" className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              AI Hashtag Generator
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
              Instantly generate relevant and trending hashtags to boost your
              content&apos;s visibility on social media.
            </p>
          </div>
          <HashtagGenerator />
        </div>
      </section>

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
    </>
  );
}
