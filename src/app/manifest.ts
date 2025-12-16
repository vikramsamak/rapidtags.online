import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rapidtags.online',
    short_name: 'Rapidtags',
    description:
      'Boost your reach with the #1 Free AI Hashtag Generator. Instantly generate viral hashtags for YouTube, TikTok, Instagram, and LinkedIn. No login required.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'any',
    id: '/',
    categories: ['social', 'utilities'],
    display_override: ['standalone', 'minimal-ui', 'window-controls-overlay'],
    icons: [
      {
        src: '/icon/android/android-launchericon-192-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon/android/android-launchericon-512-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon/ios/192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon/ios/512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon/windows11/Square150x150Logo.scale-100.png',
        sizes: '150x150',
        type: 'image/png',
      },
      {
        src: '/icon/windows11/LargeTile.scale-200.png',
        sizes: '620x620',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/screenshots/wide.png',
        type: 'image/png',
        sizes: '1910x885',
        form_factor: 'wide',
      },
      {
        src: '/screenshots/narrow.png',
        type: 'image/png',
        sizes: '345x767',
        form_factor: 'narrow',
      },
    ],
    shortcuts: [
      {
        name: 'Hashtag Generator',
        url: '/hashtag-generator',
        description: 'Generate hashtags for your social media posts',
        icons: [
          {
            src: '/icon/shortcuts/hashtag-generator.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'Content Idea Generator',
        url: '/content-idea-generator',
        description: 'Get content ideas for your next post',
        icons: [
          {
            src: '/icon/shortcuts/content-idea-generator.png',
            sizes: '96x96',
            type: 'image/png',
          },
        ],
      },
    ],
    protocol_handlers: [
      {
        protocol: 'web+rapidtags',
        url: '/?text=%s',
      },
    ],
  };
}
