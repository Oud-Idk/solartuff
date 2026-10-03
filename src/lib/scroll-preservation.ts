'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect } from 'react'

/** Marks an element as its page's scroll container. Give each one a unique value. */
const SCROLL_ROOT_SELECTOR = '[data-scroll-root]'

type ScrollSnapshot = {
    /** Window scroll, used below `lg` where the document scrolls. */
    window: number
    /** `data-scroll-root` name paired with its offset, used at `lg` and up. */
    roots: readonly (readonly [string, number])[]
}

/**
 * Strips the `/<locale>` prefix, so a language switch looks like the same page.
 * Kept module-level because the `[lang]` segment remounts on every language
 * switch, which would discard any snapshot held in React state.
 */
const snapshots = new Map<string, ScrollSnapshot>()

let pendingFrame: number | undefined

/** Strips the `/<locale>` prefix, so a language switch looks like the same page. */
export function stripLocale(pathname: string) {
    return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/'
}

/** Records where the current page is scrolled to, before navigating away from it. */
export function captureScroll(pathname: string) {
    const roots = Array.from(document.querySelectorAll<HTMLElement>(SCROLL_ROOT_SELECTOR)).flatMap(
        (el) => {
            const name = el.dataset.scrollRoot
            return name ? [[name, el.scrollTop] as const] : []
        }
    )

    snapshots.set(stripLocale(pathname), { window: window.scrollY, roots })
}

/** Puts a captured page back where it was. A no-op for navigations we never captured. */
export function restoreScroll(pathname: string) {
    const key = stripLocale(pathname)
    const snapshot = snapshots.get(key)
    if (!snapshot) return

    // One-shot, so an unrelated later visit to this page doesn't jump back.
    snapshots.delete(key)

    applyScroll(snapshot)

    // Re-apply once layout settles, in case a late-loading image above the
    // viewport shifted the content that sits before it.
    if (pendingFrame !== undefined) cancelAnimationFrame(pendingFrame)
    pendingFrame = requestAnimationFrame(() => {
        pendingFrame = undefined
        applyScroll(snapshot)
    })
}

function applyScroll({ window: top, roots }: ScrollSnapshot) {
    window.scrollTo(0, top)

    for (const [name, offset] of roots) {
        const el = document.querySelector<HTMLElement>(`[data-scroll-root="${name}"]`)
        if (el) el.scrollTop = offset
    }
}

// `useLayoutEffect` warns when it runs during server rendering. Restore before
// paint on the client so the new locale doesn't flash at the top first.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/** Mounted once in the root layout; lives above the page tree, so it survives navigations. */
export function ScrollRestoration() {
    const pathname = usePathname()

    useIsomorphicLayoutEffect(() => {
        restoreScroll(pathname)
    }, [pathname])

    return null
}