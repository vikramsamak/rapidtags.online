import { Button } from '@/components/shadcn/button';
import { Hash, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center py-8 md:py-16 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
          <div className="border-border bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm">
            <Lightbulb className="mr-2 h-4 w-4" />
            AI-Powered Tools for Creators
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Free AI Hashtag Generator for YouTube, TikTok & Instagram
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
              Boost your social media reach with the #1 AI-powered tool.
              Instantly generate viral hashtags, caption ideas, and more—no
              login required.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/hashtag-generator" passHref>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 hover:shadow-primary/25 h-12 w-full transition-all duration-200 hover:shadow-lg sm:w-auto"
              >
                Generate Hashtags
                <Hash className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/content-idea-generator" passHref>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/50 hover:bg-background/70 h-12 w-full border-white/10 transition-colors sm:w-auto"
              >
                Get Content Ideas
                <Lightbulb className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
