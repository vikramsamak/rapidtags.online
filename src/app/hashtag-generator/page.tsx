import HashtagGenerator from '@/components/custom/hashtag-generator';
import { Features } from '@/components/custom/features';
import { Steps } from '@/components/custom/steps';
import {
  HASHTAG_GENERATOR_FEATURES,
  HASHTAG_GENERATOR_STEPS,
} from '@/constants';

export default function HashtagGeneratorPage() {
  return (
    <>
      <section id="hashtag-generator" className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HashtagGenerator />
        </div>
      </section>

      {/* <Features
        title="Features of Our Hashtag Generator"
        description="Everything you need to create winning hashtag strategies."
        features={HASHTAG_GENERATOR_FEATURES}
      />

      <Steps
        title="A Simple Process"
        description="Get the perfect hashtags in just a few easy steps."
        steps={HASHTAG_GENERATOR_STEPS}
      /> */}
    </>
  );
}
