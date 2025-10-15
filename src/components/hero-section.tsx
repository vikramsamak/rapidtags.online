'use client';

import { Hash } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center py-8 md:py-16 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
          <div className="border-border bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm">
            <Hash className="mr-2 h-4 w-4" />
            AI-Powered Hashtag Generation
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Generate Perfect Hashtags for Every Platform
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
              Boost your social media reach with AI-powered hashtags for
              Instagram, TikTok, YouTube, LinkedIn, and Twitter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
