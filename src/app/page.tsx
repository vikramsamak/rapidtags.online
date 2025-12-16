import { Features, HeroSection, Steps } from '@/components';
import { BreadcrumbJsonLd, HowToJsonLd } from '@/components/utils';
import { HOW_IT_WORKS_STEPS, WHY_CHOOSE_US_POINTS } from '@/constants';

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd
        breadcrumbs={[{ name: 'Home', item: 'https://rapidtags.online' }]}
      />
      <HowToJsonLd
        name="How to use Rapidtags.online"
        description="Get amazing results in a few simple steps using our AI tools."
        steps={HOW_IT_WORKS_STEPS.map((step) => ({
          name: step.title,
          text: step.description,
        }))}
      />
      <HeroSection />
      <Steps
        title="How It Works"
        description="Get amazing results in a few simple steps"
        steps={HOW_IT_WORKS_STEPS}
      />
      <Features
        title="Why Choose Our Platform"
        description=" Powerful features designed to maximize your content's reach and
            engagement"
        features={WHY_CHOOSE_US_POINTS}
      />
    </>
  );
}
