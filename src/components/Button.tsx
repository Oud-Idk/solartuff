import { ReactNode } from "react";

export default function Button({children, href}: {children: ReactNode, href: string}) {
  return (
    <a
      href={href}
      className="block text-center text-xl sm:text-2xl 2xl:text-3xl font-serif w-full rounded-full bg-primary py-2 lg:py-3 md:px-4 no-underline text-primary-text font-bold transition-all hover:scale-105 shadow-[inset_0px_0px_10px_8px_theme(--color-primary-glow)]"
    >
      {children}
    </a>
  );
}
