'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/card';
import { ContentIdea } from '@/types';
import { makeApiRequest } from '@/utils';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { CustomInput, CustomSelector } from '../core';
import { PLATFORM_OPTIONS } from '@/constants';
import { Button } from '../shadcn/button';
import { Skeleton } from '../shadcn/skeleton';

export function ContentIdeaGenerator() {
  const [isContentGenerating, setIsContentGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('');
  const [audience, setAudience] = useState('');
  const [contentIdeas, setContentIdeas] = useState<ContentIdea[]>([]);
  const [isCopiedIdeas, setIsCopiedIdeas] = useState(false);

  const handleGenerateIdeas = async () => {
    try {
      setIsContentGenerating(true);
      setContentIdeas([]);
      const response: { data: ContentIdea[] } = await makeApiRequest({
        url: '/api/generate-content-ideas',
        method: 'POST',
        data: { topic, platform, keywords, tone, audience },
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

  const renderOutput = () => {
    if (isContentGenerating) {
      return (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      );
    }

    if (contentIdeas.length > 0) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Results</h3>
            <Button
              size="sm"
              onClick={handleCopyIdeas}
              disabled={isCopiedIdeas}
            >
              <Check className="mr-2 h-4 w-4" />
              {isCopiedIdeas ? 'Copied' : 'Copy All'}
            </Button>
          </div>
          <div className="flex flex-col gap-4 text-left">
            {contentIdeas.map((idea, index) => (
              <Card key={index} className="bg-background/30 border-white/5 p-4">
                <h4 className="text-foreground font-bold">{idea.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {idea.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-white/10 p-8">
        <p className="text-muted-foreground text-center">
          Your generated content ideas will appear here.
        </p>
      </div>
    );
  };

  return (
    <Card className="glow-border w-full border-0 ring-1 ring-white/10 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Content Idea Generator</CardTitle>
        <CardDescription>
          Generate viral content ideas for your next big hit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <CustomInput
              id="topic-for-ideas"
              label="Topic"
              placeholder="e.g., The future of AI, Sustainable living"
              value={topic}
              setValue={setTopic}
            />
            <CustomSelector
              id="platform"
              label="Platform"
              value={platform}
              setValue={setPlatform}
              options={PLATFORM_OPTIONS}
              placeholder="Select a platform"
            />
            <CustomInput
              id="keywords"
              label="Keywords (Optional)"
              placeholder="e.g., tech, innovation, environment"
              value={keywords}
              setValue={setKeywords}
            />
            <CustomInput
              id="tone"
              label="Tone (Optional)"
              placeholder="e.g., Informative, Humorous, Inspirational"
              value={tone}
              setValue={setTone}
            />
            <CustomInput
              id="audience"
              label="Target Audience (Optional)"
              placeholder="e.g., Tech enthusiasts, Eco-conscious consumers"
              value={audience}
              setValue={setAudience}
            />
            <Button
              onClick={handleGenerateIdeas}
              size="lg"
              className="w-full transition-all duration-200"
              disabled={!topic || !platform || isContentGenerating}
            >
              {isContentGenerating ? 'Generating...' : 'Generate Ideas'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="rounded-lg bg-white/5 p-4">{renderOutput()}</div>
        </div>
      </CardContent>
    </Card>
  );
}
