import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Target,
  TrendingUp as Trending,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Generate optimized hashtags in under 3 seconds with our advanced AI engine.",
  },
  {
    icon: Target,
    title: "Platform Optimized",
    description:
      "Tailored hashtags for each platform's unique algorithm and audience behavior.",
  },
  {
    icon: Trending,
    title: "Trending Analysis",
    description:
      "Real-time trending hashtag detection to maximize your content's visibility.",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    description:
      "All generated hashtags are filtered for safety and platform compliance.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description:
      "Generate hashtags anytime, anywhere. No limits, no restrictions.",
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge & Evolving",
    description:
      "Our AI tool is brand new and continuously improving with fresh updates and features.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance text-foreground">
            Why Choose Our Tag Generator
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Powerful features designed to maximize your social media reach and
            engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border bg-card hover-lift transition-all duration-300 glow-border"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
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
