"use client";

import Link from 'next/link';
import HeaderLinks from './HeaderLinks';
import HeaderLinksMobile from './HeaderLinksMobile';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { useMobileMenu } from './MobileMenuProvider';

export default function Header() {
    const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu();

    return (
        <div className="sticky top-0 z-50 w-full">
            <header className="bg-brand p-2 px-5 w-full relative flex justify-between text-black lg:justify-evenly flex-row-reverse lg:flex-row items-center">
                <div className="flex w-full justify-between lg:hidden">
                    <div className="lg:hidden block cursor-pointer p-2 text-xl select-none" onClick={toggleMobileMenu}>
                        ☰
                    </div>
                    <Link href="/">
                        <Image width={150} height={150} src='/solartuff.png' alt="Website Logo" />
                    </Link>
                    <LanguageSwitcher className='ml-15' />
                </div>

                <nav className="hidden lg:flex items-center">
                    <Link href="/">
                        <Image width={150} height={150} src='/solartuff.png' alt="Website Logo" className="mr-5" />
                    </Link>
                    <HeaderLinks />
                    <LanguageSwitcher className='ml-3 xl:ml-15' />
                </nav>
            </header>

            <div className={`
                    flex-col bg-bg-overlay backdrop-blur-md fixed inset-0 w-full h-screen transition-all duration-500 ease-in-out py-[40vh] px-[20%] text-brand z-40
                    ${isMobileMenuOpen
                        ? 'translate-x-0 pointer-events-auto'
                        : '-translate-x-full pointer-events-none'
                    }
                `}
                onClick={closeMobileMenu}
            >
                <HeaderLinksMobile hoverState='bg-white/10'/>
                <LanguageSwitcher className='mt-4 absolute' />
            </div>
        </div>
    );
};