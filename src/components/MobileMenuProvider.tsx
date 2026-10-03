"use client";

import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { stripLocale } from '@/lib/scroll-preservation';

interface MobileMenuContextValue {
    isMobileMenuOpen: boolean;
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    toggleMobileMenu: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const pagePath = stripLocale(pathname);

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