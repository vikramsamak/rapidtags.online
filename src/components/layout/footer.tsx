import { APPLICATION_NAME_FOR_UI, NAVIGATION_LINKS } from '@/constants';
import { Hash } from 'lucide-react';
import Link from 'next/link';
import { NavigationLinks } from './navigation-links';

export function Footer() {
  return (
    <footer className="border-border bg-background/80 border-t backdrop-blur">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Brand */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-foreground text-background flex h-8 w-8 items-center justify-center rounded-md">
                <Hash className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold">
                {APPLICATION_NAME_FOR_UI}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-Powered Hashtag Generator
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ by{' '}
              <a
                href="https://vikramsamak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Vikram Samak
              </a>
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-foreground text-sm font-semibold tracking-wider">
              Menu
            </h3>
            <NavigationLinks
              links={NAVIGATION_LINKS}
              navClassName="flex-col space-y-2"
            />
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-foreground text-sm font-semibold tracking-wider">
              Resources
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://blog.hootsuite.com/social-media-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Social Media Marketing Guide
              </a>
              <a
                href="https://neilpatel.com/what-is-digital-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                What is Digital Marketing?
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-foreground text-sm font-semibold tracking-wider">
              Legal
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
