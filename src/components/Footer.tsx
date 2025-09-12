import { Hash } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
              <Hash className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold">RapidTags</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Support
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 RapidTags. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
