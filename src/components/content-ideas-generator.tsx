'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContentIdea } from '@/types';
import { makeApiRequest } from '@/utils';
import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import CommonInput from './common-input';
import PlatformSelector from './platform-selector';

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
        data: { topic, platform },
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
    <Card className="bg-card/50 glow-border w-full max-w-2xl rounded-2xl border-0 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
      <div className="space-y-6">
        <CommonInput
          id="topic-for-ideas"
          placeholder="Enter a topic..."
          value={topic}
          setValue={setTopic}
        />
        <PlatformSelector platform={platform} setPlatform={setPlatform} />
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
                  <h4 className="text-foreground font-bold">{idea.title}</h4>
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
  );
}
