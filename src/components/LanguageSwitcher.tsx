'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { captureScroll } from '@/lib/scroll-preservation'

const languages = [
    { code: 'en', name: 'EN' },
    { code: 'id', name: 'ID' },
]

export default function LanguageSwitcher({ className }: { className?: string }) {
    const pathname = usePathname()
    const params = useParams()
    const router = useRouter()

    const currentLang = params.lang as string

    const handleLanguageChange = (newLocale: string) => {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`

        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')

        captureScroll(pathname)

        // Switching locale remounts the page, which resets every scroll container
        // to zero. `scroll: false` keeps the window where it is; ScrollRestoration
        // puts the inner `lg` scroll containers back.
        router.push(newPath, { scroll: false })
    }

    return (
        <div className={twMerge(
            "inline-flex w-fit flex-none self-center items-center gap-2 p-0.5 md:p-1 bg-bg-overlay backdrop-blur-md rounded-full border border-border-subtle",
            className
        )}
            onClick={(e) => e.stopPropagation()}>
            {languages.map((lang) => {
                const isActive = currentLang === lang.code
                return (
                    <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`px-2 py-1 rounded-full text-xs lg:text-md font-medium transition-all duration-200 ${
                            isActive
                                ? 'bg-surface-active text-primary-text shadow-lg'
                                : 'text-text hover:bg-hover-light'
                        }`}
                    >
                        {lang.name}
                    </button>
                )
            })}
        </div>
    )
}