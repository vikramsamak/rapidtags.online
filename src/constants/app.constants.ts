import type { Route } from 'next';

export const METADATA = {
  title:
    'Rapidtags.online | Free AI Hashtag Generator for YouTube, TikTok & Instagram',
  applicationName: 'Rapidtags.online',
  description:
    'Boost your reach with the #1 Free AI Hashtag Generator. Instantly generate viral hashtags for YouTube, TikTok, Instagram, and LinkedIn. No login required.',
  keywords: [
    'rapidtags',
    'hashtag generator',
    'ai hashtag generator',
    'youtube tags generator',
    'tiktok hashtag generator',
    'instagram hashtag generator',
    'free hashtag generator',
    'viral hashtags',
    'social media growth tools',
    'seo tools',
    'keyword research',
    'content ideas',
    'best hashtags for reels',
    'rapidtags.online',
  ],
  creator: 'Vikram Samak',
  authors: [{ name: 'Vikram Samak', url: 'https://vikramsamak.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rapidtags.online',
    title:
      'Rapidtags.online | Free AI Hashtag Generator for YouTube, TikTok & Instagram',
    description:
      'Boost your reach with the #1 Free AI Hashtag Generator. Instantly generate viral hashtags for YouTube, TikTok, Instagram, and LinkedIn. No login required.',
    siteName: 'Rapidtags.online',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Rapidtags.online | Free AI Hashtag Generator for YouTube, TikTok & Instagram',
    description:
      'Boost your reach with the #1 Free AI Hashtag Generator. Instantly generate viral hashtags for YouTube, TikTok, Instagram, and LinkedIn. No login required.',
    creator: '@vikramsamak',
  },
};

export const APP_URL = 'https://rapidtags.online';

export const APPLICATION_NAME_FOR_UI = 'Rapidtags';

export const NAVIGATION_LINKS: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/hashtag-generator', label: 'Hashtag Generator' },
  { href: '/content-idea-generator', label: 'Content Idea Generator' },
];
