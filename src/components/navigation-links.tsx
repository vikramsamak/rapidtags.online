import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLink {
  href: string;
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
