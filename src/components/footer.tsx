import { APPLICATION_NAME_FOR_UI } from "@/constants";
import { Hash } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo and Brand */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
                <Hash className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold">
                {APPLICATION_NAME_FOR_UI}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Powered Hashtag Generator
            </p>
            <p className="text-sm text-muted-foreground">
              Made with ❤️ by{" "}
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
            <h3 className="text-sm font-semibold  tracking-wider text-foreground">
              Menu
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                How it Works
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-sm font-semibold  tracking-wider text-foreground">
              Resources
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://blog.hootsuite.com/social-media-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Social Media Marketing Guide
              </a>
              <a
                href="https://neilpatel.com/what-is-digital-marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                What is Digital Marketing?
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="text-sm font-semibold  tracking-wider text-foreground">
              Legal
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
