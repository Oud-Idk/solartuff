'use client';

import { JSX, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps extends Omit<LinkProps, 'href' | 'onClick'> {
  href: string;
  children: ReactNode;
  className?: string;
  hoverState?: string;
  onClick?: () => void;
}

function NavLink({
  href,
  children,
  hoverState = "bg-nav-active",
  onClick
}: NavLinkProps): JSX.Element {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';

  const isActive = href === '/'
    ? pathWithoutLocale === '/'
    : pathWithoutLocale.endsWith(href);

  return (
    <Link
      href={href}
      className={`xl:text-lg text-sm no-underline p-1.5 px-3 rounded-lg transition-all ${
        isActive ? hoverState : 'hover:bg-nav-hover'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default NavLink;
