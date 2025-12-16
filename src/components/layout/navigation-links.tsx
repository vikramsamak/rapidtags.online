import Link from 'next/link';
import type { Route } from 'next';
import { cn } from '@/lib/utils';

interface NavLink {
  href: Route;
  label: string;
}

interface NavigationLinksProps {
  links: NavLink[];
  navClassName?: string;
  linkClassName?: string;
  onClick?: () => void;
}

export function NavigationLinks({
  links,
  navClassName,
  linkClassName,
  onClick,
}: NavigationLinksProps) {
  return (
    <nav className={cn('flex', navClassName)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-muted-foreground hover:text-foreground text-sm font-medium transition-colors',
            linkClassName,
          )}
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
