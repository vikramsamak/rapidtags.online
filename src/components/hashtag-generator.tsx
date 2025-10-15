import { toast } from 'sonner';
import { makeApiRequest } from '@/utils';
import clsx from 'clsx';
import PlatformSelector from './platform-selector';
import CommonInput from './common-input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';

export default function HashtagGenerator() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      const response: { data: string[] } = await makeApiRequest({
        url: '/api/generate-hashtags',
        method: 'POST',
        data: { title, platform },
      });
      toast.success('Hashtags generated successfully!');
      setGeneratedTags(response.data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (isCopied) {
      return;
    }

    if (generatedTags.length === 0) {
      toast.error('No hashtags to copy.');
      return;
    }

    if (selectedTags.length === 0) {
      toast.error('No hashtags selected.');
      return;
    }

    const tagsText = selectedTags.join(' ');
    await navigator.clipboard.writeText(tagsText);
    setIsCopied(true);
    toast.success('Hashtags copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Card className="bg-card/50 glow-border w-full max-w-2xl rounded-2xl border-0 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
      <div className="space-y-6">
        <CommonInput
          id="topic-for-hshtags"
          placeholder="Enter a topic..."
          value={title}
          setValue={setTitle}
        />
        <PlatformSelector platform={platform} setPlatform={setPlatform} />
        <Button
          onClick={handleGenerate}
          className="bg-primary hover:bg-primary/90 hover:shadow-primary/25 h-12 w-full transition-all duration-200 hover:shadow-lg"
          disabled={!title || !platform || isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate Hashtags'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {generatedTags.length > 0 && (
          <div className="space-y-4 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-foreground text-sm font-medium">
                Generated Hashtags
              </h3>
              <Button
                onClick={handleCopy}
                variant="outline"
                size="sm"
                disabled={isCopied || selectedTags.length === 0}
                className="bg-background/50 hover:bg-background/70 h-8 border-white/10 px-3 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Check className="mr-1 h-3 w-3" />
                {isCopied ? 'Copied' : `Copy (${selectedTags.length})`}
              </Button>
            </div>
            <div className="bg-background/30 flex flex-wrap gap-2 rounded-lg border border-white/5 p-4">
              {generatedTags.map((tag, index) => (
                <span
                  key={index}
                  onClick={() =>
                    setSelectedTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag],
                    )
                  }
                  className={clsx(
                    'user-select-none inline-flex cursor-pointer items-center rounded-full px-3 py-1 text-xs font-medium transition-colors select-none',
                    selectedTags.includes(tag)
                      ? 'bg-primary text-primary-foreground border-primary border'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 border border-transparent',
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
