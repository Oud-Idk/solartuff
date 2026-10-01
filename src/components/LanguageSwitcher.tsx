'use client'

import { usePathname, useRouter, useParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const languages = [
  { code: 'en', name: 'EN'},
  { code: 'id', name: 'ID' },
]

export default function LanguageSwitcher({className}: {className?: string}) {
  const pathname = usePathname()
  const params = useParams()
  const router = useRouter()
  
  const currentLang = params.lang as string

  const handleLanguageChange = (newLocale: string) => {
    // 1. Save the preference in a cookie for the Proxy
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; samesite=lax`

    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')

    // 3. Navigate
    router.push(newPath)
  }

  return (
    <div className={twMerge("flex items-center gap-2 p-1 bg-bg-overlay backdrop-blur-md rounded-full border border-border-subtle", className)}>
      {languages.map((lang) => {
        const isActive = currentLang === lang.code

        return (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-2 py-1 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
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