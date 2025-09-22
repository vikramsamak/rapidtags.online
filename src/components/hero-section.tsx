"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Hash, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { makeApiRequest } from "@/utils";
import clsx from "clsx";

export function HeroSection() {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      const response: { data: string[] } = await makeApiRequest({
        url: "/api/generate-hashtags",
        method: "POST",
        data: { title, platform },
      });
      toast.success("Hashtags generated successfully!");
      setGeneratedTags(response.data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Something went wrong. Please try again.");
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
      toast.error("No hashtags to copy.");
      return;
    }

    if (selectedTags.length === 0) {
      toast.error("No hashtags selected.");
      return;
    }

    const tagsText = selectedTags.join(" ");
    await navigator.clipboard.writeText(tagsText);
    setIsCopied(true);
    toast.success("Hashtags copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-8 md:py-16 lg:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-12 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-2 text-sm">
            <Hash className="mr-2 h-4 w-4" />
            AI-Powered Hashtag Generation
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl text-foreground">
              Generate Perfect Hashtags for Every Platform
            </h1>
            <p className="text-lg text-muted-foreground text-pretty sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Boost your social media reach with AI-powered hashtags for
              Instagram, TikTok, YouTube, LinkedIn, and Twitter.
            </p>
          </div>

          <Card className="w-full max-w-2xl p-8 bg-card/50 backdrop-blur-sm border-0 shadow-2xl ring-1 ring-white/10 rounded-2xl glow-border">
            <div className="space-y-6">
              <Input
                id="post-content"
                placeholder="Describe your content..."
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 bg-background/50 border-white/10 focus:border-white/20 transition-colors"
              />

              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger
                  className="w-full h-12 bg-background/50 border-white/10 focus:border-white/20 transition-colors"
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
                onClick={handleGenerate}
                className="w-full h-12 bg-primary hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
                disabled={!title || !platform || isGenerating}
              >
                {isGenerating ? "Generating..." : "Generate Hashtags"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {generatedTags.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-foreground">
                      Generated Hashtags
                    </h3>
                    <Button
                      onClick={handleCopy}
                      variant="outline"
                      size="sm"
                      disabled={isCopied || selectedTags.length === 0}
                      className="h-8 px-3 bg-background/50 border-white/10 hover:bg-background/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Check className="h-3 w-3 mr-1" />
                      {isCopied ? "Copied" : `Copy (${selectedTags.length})`}
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 p-4 bg-background/30 rounded-lg border border-white/5">
                    {generatedTags.map((tag, index) => (
                      <span
                        key={index}
                        onClick={() =>
                          setSelectedTags((prev) =>
                            prev.includes(tag)
                              ? prev.filter((t) => t !== tag)
                              : [...prev, tag]
                          )
                        }
                        className={clsx(
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer select-none user-select-none",
                          selectedTags.includes(tag)
                            ? "bg-primary text-primary-foreground border border-primary"
                            : "bg-muted text-muted-foreground border border-transparent hover:bg-muted/80"
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
        </div>
      </div>
    </section>
  );
}
