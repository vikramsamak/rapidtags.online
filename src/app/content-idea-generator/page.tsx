'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContentIdea } from '@/types';
import { makeApiRequest } from '@/utils';
import { ArrowRight, Check, Hash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContentIdeaGenerator() {
  const [isContentGenerating, setIsContentGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [contentIdeas, setContentIdeas] = useState<ContentIdea[]>([]);
  const [isCopiedIdeas, setIsCopiedIdeas] = useState(false);

  const handleGenerateIdeas = async () => {
    try {
      setIsContentGenerating(true);
      const response: { data: ContentIdea[] } = await makeApiRequest({
        url: '/api/generate-content-ideas',
        method: 'POST',
        data: { title: topic, platform },
      });
      toast.success('Content ideas generated successfully!');
      setContentIdeas(response.data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsContentGenerating(false);
    }
  };

  const handleCopyIdeas = async () => {
    if (isCopiedIdeas) {
      return;
    }

    if (contentIdeas.length === 0) {
      toast.error('No ideas to copy.');
      return;
    }

    const ideasText = contentIdeas
      .map((idea) => `${idea.title}\n${idea.description}`)
      .join('\n\n');
    await navigator.clipboard.writeText(ideasText);
    setIsCopiedIdeas(true);
    toast.success('Ideas copied to clipboard!');
    setTimeout(() => setIsCopiedIdeas(false), 2000);
  };

  return (
    <section
      id="content-idea-generator"
      className="flex min-h-screen items-center justify-center py-8 md:py-16 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="animate-fade-in flex flex-col items-center space-y-12 text-center">
          <div className="border-border bg-muted inline-flex items-center rounded-full border px-4 py-2 text-sm">
            <Hash className="mr-2 h-4 w-4" />
            AI-Powered Content Idea Generation
          </div>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-foreground text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              Generate Viral Content Ideas Instantly
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
              Never run out of content ideas again. Get unique and engaging
              ideas for your next post on any platform.
            </p>
          </div>
          <Card className="bg-card/50 glow-border w-full max-w-2xl rounded-2xl border-0 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <Input
                id="topic"
                placeholder="Enter a topic..."
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="bg-background/50 h-12 flex-1 border-white/10 transition-colors focus:border-white/20"
              />
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger
                  className="bg-background/50 h-12 w-full border-white/10 transition-colors focus:border-white/20"
                  title="Select platform"
                  name="Select platform"
                >
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                  <SelectItem value="youtube">YouTube</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
              <Button
                onClick={handleGenerateIdeas}
                className="bg-primary hover:bg-primary/90 hover:shadow-primary/25 h-12 w-full transition-all duration-200 hover:shadow-lg"
                disabled={!topic || isContentGenerating}
              >
                {isContentGenerating ? 'Generating...' : 'Generate Ideas'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {contentIdeas.length > 0 && (
                <div className="space-y-4 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-foreground text-sm font-medium">
                      Generated Ideas
                    </h3>
                    <Button
                      onClick={handleCopyIdeas}
                      variant="outline"
                      size="sm"
                      disabled={isCopiedIdeas}
                      className="bg-background/50 hover:bg-background/70 h-8 border-white/10 px-3 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Check className="mr-1 h-3 w-3" />
                      {isCopiedIdeas ? 'Copied' : 'Copy All'}
                    </Button>
                  </div>
                  <div className="flex flex-col gap-4 text-left">
                    {contentIdeas.map((idea, index) => (
                      <Card
                        key={index}
                        className="bg-background/30 border-white/5 p-4"
                      >
                        <h4 className="text-foreground font-bold">
                          {idea.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {idea.description}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
