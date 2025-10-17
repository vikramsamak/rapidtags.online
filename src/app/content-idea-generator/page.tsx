import { ContentIdeaGenerator } from '@/components';
import { Features } from '@/components/sections/features';
import { Steps } from '@/components/sections/steps';
import {
  CONTENT_IDEA_GENERATOR_FEATURES,
  CONTENT_IDEA_GENERATOR_STEPS,
} from '@/constants';

export default function ContentIdeaGeneratorPage() {
  return (
    <>
      <section id="content-idea-generator" className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContentIdeaGenerator />
        </div>
      </section>

      <Features
        title="Features of Our Content Idea Generator"
        description="Everything you need to brainstorm winning content ideas."
        features={CONTENT_IDEA_GENERATOR_FEATURES}
      />

      <Steps
        title="A Simple Process"
        description="Get the perfect content ideas in just a few easy steps."
        steps={CONTENT_IDEA_GENERATOR_STEPS}
      />
    </>
  );
}
