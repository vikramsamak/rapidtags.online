"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Edit3, Zap, Share2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Edit3,
    title: "Describe Your Content",
    description:
      "Simply type what your post is about - a photo, video, or any content you want to share.",
  },
  {
    icon: Zap,
    title: "Choose Your Platform",
    description:
      "Select from YouTube, Instagram, TikTok, LinkedIn, or Twitter for platform-optimized tags.",
  },
  {
    icon: Share2,
    title: "Get Smart Tags",
    description:
      "Our AI analyzes your content and generates relevant, trending hashtags instantly.",
  },
  {
    icon: TrendingUp,
    title: "Boost Your Reach",
    description:
      "Copy the tags and watch your engagement soar with optimized hashtag strategies.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Generate perfect hashtags in seconds with our simple 4-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative border border-border bg-card hover-lift transition-all duration-300 glow-border"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {step.description}
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
