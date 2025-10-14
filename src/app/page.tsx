import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { WhyChooseUs } from '@/components/why-choose-us';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
      </main>
    </div>
  );
}
