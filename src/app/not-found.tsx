import Link from 'next/link';
import { Button } from '@/components/shadcn/button';
import { Card } from '@/components/shadcn/card';
import { Hash, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <Card className="glow-border bg-card/50 w-full max-w-md border-0 p-8 text-center ring-1 ring-white/10 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Logo/Icon */}
          <div className="flex justify-center">
            <div className="bg-primary/10 ring-primary/20 flex h-16 w-16 items-center justify-center rounded-full ring-1">
              <Hash className="text-primary h-8 w-8" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-2">
            <h1 className="text-foreground text-6xl font-bold">404</h1>
            <h2 className="text-foreground text-xl font-semibold">
              Page Not Found
            </h2>
            <p className="text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link
                href="javascript:history.back()"
                className="flex items-center justify-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
