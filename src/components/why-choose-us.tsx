import { Card, CardContent } from '@/components/ui/card';
import {
  Zap,
  Target,
  TrendingUp as Trending,
  Shield,
  Clock,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Generate optimized hashtags in under 3 seconds with our advanced AI engine.',
  },
  {
    icon: Target,
    title: 'Platform Optimized',
    description:
      "Tailored hashtags for each platform's unique algorithm and audience behavior.",
  },
  {
    icon: Trending,
    title: 'Trending Analysis',
    description:
      "Real-time trending hashtag detection to maximize your content's visibility.",
  },
  {
    icon: Shield,
    title: 'Safe & Compliant',
    description:
      'All generated hashtags are filtered for safety and platform compliance.',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description:
      'Generate hashtags anytime, anywhere. No limits, no restrictions.',
  },
  {
    icon: Sparkles,
    title: 'Cutting-Edge & Evolving',
    description:
      'Our AI tool is brand new and continuously improving with fresh updates and features.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="features" className="bg-background py-8 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Why Choose Our Tag Generator
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
            Powerful features designed to maximize your social media reach and
            engagement
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border bg-card hover-lift glow-border border transition-all duration-300"
            >
              <CardContent className="space-y-4 p-6">
                <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                  <feature.icon className="text-foreground h-6 w-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-foreground text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-pretty">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
