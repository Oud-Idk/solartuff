import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({children, href, className}: {children: ReactNode, href: string, className?: string}) {
  return (
    <a
      href={href}
      className={twMerge(
        "block text-center text-xl sm:text-2xl 2xl:text-3xl font-serif w-full rounded-full bg-primary py-2 2xl:py-3 md:px-4 no-underline text-primary-text font-bold transition-all hover:scale-105 shadow-[inset_0px_0px_20px_6px_theme(--color-primary-glow)]",
        className
      )}
    >
      {children}
    </a>
  );
}
