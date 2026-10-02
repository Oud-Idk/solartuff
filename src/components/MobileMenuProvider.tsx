"use client";

import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

/** Strips the `/<locale>` prefix, so a language switch looks like the same page. */
function getPagePath(pathname: string) {
    return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/';
}

interface MobileMenuContextValue {
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

/**
 * Owns the mobile menu open state above the `[lang]` segment.
 *
 * This must not live in a layout below `[lang]`: Next.js keys every route
 * segment's React subtree by `lang|<value>|<type>` (see `createRouterCacheKey`
 * in next/dist/.../router-reducer/create-router-cache-key.js, used as the
 * `<Activity key>` in layout-router.js). Changing the locale therefore unmounts
 * and remounts everything below `[lang]`, which would reset a `useState` down
 * there and slam the menu shut. The root layout is rendered from `cache.rsc`
 * without a locale-dependent key, so state held here survives the switch.
 *
 * State is recorded as the page the menu was opened on rather than a bare
 * boolean: a language switch leaves that page unchanged (only the locale
 * prefix moves), while navigating somewhere else resets it. That also stops the
 * menu popping open when returning to a `(main)` page from the home page, since
 * the header unmounts there and would otherwise remount already "open".
 */
export function MobileMenuProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const pagePath = getPagePath(pathname);

    const [openedOn, setOpenedOn] = useState<string | null>(null);

    const closeMobileMenu = useCallback(() => setOpenedOn(null), []);
    const openMobileMenu = useCallback(() => setOpenedOn(pagePath), [pagePath]);
    const toggleMobileMenu = useCallback(
        () => setOpenedOn((current) => (current === pagePath ? null : pagePath)),
        [pagePath],
    );

    const value = useMemo(
        () => ({
            isMobileMenuOpen: openedOn === pagePath,
            openMobileMenu,
            closeMobileMenu,
            toggleMobileMenu,
        }),
        [openedOn, pagePath, openMobileMenu, closeMobileMenu, toggleMobileMenu],
    );

    return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

export function useMobileMenu() {
    const context = useContext(MobileMenuContext);

    if (!context) {
        throw new Error('useMobileMenu must be used within a MobileMenuProvider');
    }

    return context;
}