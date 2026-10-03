"use client";

import Link from 'next/link';
import HeaderLinks from './HeaderLinks';
import HeaderLinksMobile from './HeaderLinksMobile';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';
import { images } from '@/assets';
import { useMobileMenu } from './MobileMenuProvider';

export default function Header() {
    const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu();

    return (
        <div className="sticky top-0 z-50 w-full">
            <header className="bg-brand p-2 px-5 w-full relative flex justify-between text-black lg:justify-evenly flex-row-reverse lg:flex-row items-center">
                <div className="flex w-full items-center justify-between lg:hidden gap-5">
                    <div className="lg:hidden block cursor-pointer p-2 text-xl select-none" onClick={toggleMobileMenu}>
                        ☰
                    </div>
                    <Link href="/">
                        <Image width={150} src={images.solartuff} alt="Website Logo" className="w-37.5 h-auto" />
                    </Link>
                    <LanguageSwitcher />
                </div>

                <nav className="hidden lg:flex items-center gap-15">
                    <Link href="/">
                        <Image width={150} src={images.solartuff} alt="Website Logo" className="w-37.5 h-auto mr-5" />
                    </Link>
                    <HeaderLinks />
                    <LanguageSwitcher className="ml-5"/>
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