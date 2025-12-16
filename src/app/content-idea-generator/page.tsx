import { ContentIdeaGenerator } from '@/components';
import { BreadcrumbJsonLd } from '@/components/utils';
import { Features } from '@/components/sections/features';
import { Steps } from '@/components/sections/steps';
import {
  CONTENT_IDEA_GENERATOR_FEATURES,
  CONTENT_IDEA_GENERATOR_STEPS,
} from '@/constants';

export default function ContentIdeaGeneratorPage() {
  return (
    <section
      id="content-idea-generator"
      className="flex h-full flex-1 flex-col py-2 md:py-4 lg:py-6"
    >
      <BreadcrumbJsonLd
        breadcrumbs={[
          { name: 'Home', item: 'https://rapidtags.online' },
          {
            name: 'Content Idea Generator',
            item: 'https://rapidtags.online/content-idea-generator',
          },
        ]}
      />
      <h1 className="sr-only">AI Content Idea Generator</h1>
      {/* <div className="container mx-auto px-4 md:px-6">
        <ContentIdeaGenerator />
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
      </div> */}
      <div className="flex h-full flex-1 items-center justify-center">
        <div className="text-muted-foreground p-2">
          <p>Content Idea Generator is coming soon...</p>
        </div>
      </div>
    </section>
  );
}
