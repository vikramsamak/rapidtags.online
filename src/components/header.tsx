"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Hash } from "lucide-react";
import { APPLICATION_NAME_FOR_UI, NAVIGATION_LINKS } from "@/constants";
import { NavigationLinks } from "./navigation-links";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background">
            <Hash className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            {APPLICATION_NAME_FOR_UI}
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <NavigationLinks
            links={NAVIGATION_LINKS}
            navClassName="hidden md:flex items-center space-x-6"
          />

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            name="Toggle Menu"
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            title="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border md:hidden animate-in slide-in-from-top-2 duration-200">
          <NavigationLinks
            links={NAVIGATION_LINKS}
            navClassName="container mx-auto flex flex-col space-y-1 p-4"
            linkClassName="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
          />
        </div>
      )}
    </header>
  );
}
