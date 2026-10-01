"use client";

import { useState } from 'react';
import Link from 'next/link';
import HeaderLinks from './HeaderLinks';
import HeaderLinksMobile from './HeaderLinksMobile';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="relative">
            <header className="bg-brand p-2 px-5 w-full z-50 relative flex justify-between lg:justify-evenly flex-row-reverse lg:flex-row items-center">
                <Link href="/">
                  <Image width={150} height={150} src='/solartuff.png' alt="Website Logo" />
                </Link>
                <div className="lg:hidden block cursor-pointer p-2 text-4xl select-none" onClick={toggleMobileMenu}>
                    ☰
                </div>

                <nav className="hidden lg:flex items-center">
                    <HeaderLinks />
                    <LanguageSwitcher className='ml-3 xl:ml-15' />
                </nav>
            </header>

            <div className={`
                flex-col bg-bg-overlay backdrop-blur-md fixed inset-0 w-full h-screen transition-all duration-500 ease-in-out py-[40vh] px-[20%] text-brand
                ${isMobileMenuOpen
                    ? 'translate-x-0 pointer-events-auto'
                    : '-translate-x-full pointer-events-none'
                }
            `}>
                <HeaderLinksMobile onLinkClick={() => setIsMobileMenuOpen(false)} hoverState='bg-white/10'/>
                <LanguageSwitcher className='mt-4 absolute' />
            </div>
        </div>
    );
};
