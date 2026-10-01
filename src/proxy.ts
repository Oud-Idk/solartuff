import { NextResponse, NextRequest } from 'next/server'

let locales = ['en', 'id']
let defaultLocale = 'en'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const savedLocale = request.cookies.get('NEXT_LOCALE')?.value

    const locale = savedLocale || defaultLocale
    request.nextUrl.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}