'use client';
import { toast } from 'sonner';
import { makeApiRequest } from '@/utils';
import clsx from 'clsx';
import { PLATFORM_OPTIONS } from '@/constants';
import { CustomButton, CustomInput, CustomSelector } from '@/components/core';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/shadcn/card';
import { ArrowRight, Check } from 'lucide-react';
import { ScrollArea } from '@/components';
import { Skeleton } from '@/components/shadcn/skeleton';
import { useState } from 'react';

export function HashtagGenerator() {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('');
  const [audience, setAudience] = useState('');

  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setGeneratedTags([]); // Clear previous results
      const response: { data: string[] } = await makeApiRequest({
        url: '/api/generate-hashtags',
        method: 'POST',
        data: { title, platform, keywords, tone, audience },
      });
      toast.success('Hashtags generated successfully!');
      setGeneratedTags(response.data);
      setSelectedTags([]); // Reset selection
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (isCopied) return;
    if (selectedTags.length === 0) {
      toast.error('No hashtags selected to copy.');
      return;
    }
    await navigator.clipboard.writeText(selectedTags.join(' '));
    setIsCopied(true);
    toast.success('Selected hashtags copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSelectAll = () => {
    if (selectedTags.length === generatedTags.length) {
      setSelectedTags([]);
    } else {
      setSelectedTags(generatedTags);
    }
  };

  const renderOutput = () => {
    if (isGenerating) {
      return (
        <div className="space-y-2">
          <Skeleton className="h-8 w-1/3" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-full" />
            ))}
          </div>
        </div>
      );
    }

    if (generatedTags.length > 0) {
      return (
        <div className="space-y-4">
          <div className="flex w-full items-center justify-between">
            <h3 className="text-lg font-semibold">Your Results</h3>
            <div className="flex items-center gap-2">
              <CustomButton
                variant="outline"
                size="sm"
                onClick={handleSelectAll}
                className="bg-transparent hover:bg-white/10"
              >
                {selectedTags.length === generatedTags.length
                  ? 'Deselect All'
                  : 'Select All'}
              </CustomButton>
              <CustomButton
                size="sm"
                onClick={handleCopy}
                disabled={isCopied || selectedTags.length === 0}
                aria-label={
                  isCopied ? 'Hashtags copied' : 'Copy selected hashtags'
                }
              >
                <Check className="mr-2 h-4 w-4" aria-hidden="true" />
                {isCopied ? 'Copied' : `Copy (${selectedTags.length})`}
              </CustomButton>
            </div>
          </div>
          <ScrollArea className="h-[400px] w-full">
            <div
              className="bg-background/30 flex w-full flex-wrap gap-2 rounded-lg border border-white/5 p-4"
              role="list"
            >
              {generatedTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => handleTagSelect(tag)}
                  aria-pressed={selectedTags.includes(tag)}
                  aria-label={`Select hashtag ${tag}`}
                  className={clsx(
                    'inline-flex cursor-pointer items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors select-none',
                    selectedTags.includes(tag)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 border-transparent',
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </ScrollArea>
        </div>
      );
    }

    return (
      <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-white/10 p-8">
        <p className="text-muted-foreground text-center">
          Your generated hashtags will appear here.
        </p>
      </div>
    );
  };

  return (
    <Card className="glow-border w-full border-0 ring-1 ring-white/10 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Hashtag Generator</CardTitle>
        <CardDescription>
          Generate the perfect hashtags for your content on any platform.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Side: Inputs */}
          <div className="space-y-4">
            <CustomInput
              id="topic-for-hashtags"
              label="Topic"
              placeholder="e.g., AI in marketing, Healthy recipes"
              value={title}
              setValue={setTitle}
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
              placeholder="e.g., SEO, social media, content creation"
              value={keywords}
              setValue={setKeywords}
            />
            <CustomInput
              id="tone"
              label="Tone (Optional)"
              placeholder="e.g., Professional, Casual, Humorous"
              value={tone}
              setValue={setTone}
            />
            <CustomInput
              id="audience"
              label="Target Audience (Optional)"
              placeholder="e.g., Small business owners, Students"
              value={audience}
              setValue={setAudience}
            />
            <CustomButton
              onClick={handleGenerate}
              size="lg"
              className="w-full transition-all duration-200"
              disabled={!title || !platform || isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Hashtags'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </CustomButton>
          </div>

          {/* Right Side: Output */}
          <div className="rounded-lg bg-white/5 p-4">{renderOutput()}</div>
        </div>
      </CardContent>
    </Card>
  );
}
