'use client';

import NavLink from './NavLinks';
import { homeButtonTranslations } from "@/constants/translations";
import { useParams } from "next/navigation";
import { X } from "lucide-react";
import { MouseEvent } from "react";

interface HeaderLinksMobileProps {
    hoverState?: string;
}

export default function HeaderLinksMobile({ hoverState }: HeaderLinksMobileProps) {
    const { lang } = useParams();
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;
    const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <>
            <button className="fixed left-5 top-5"><X/></button>
            <div className="relative z-50 flex flex-col gap-3" onClick={stopPropagation}>
                <NavLink hoverState={hoverState} href="/">Home</NavLink>
                <NavLink hoverState={hoverState} href="/about-solartuff">{t.aboutSolartuff}</NavLink>
                <NavLink hoverState={hoverState} href="/product-knowledge">{t.productKnowledge}</NavLink>
                <NavLink hoverState={hoverState} href="/product-selection">{t.productSelection}</NavLink>
                <NavLink hoverState={hoverState} href="/contact-us">{t.contactUs}</NavLink>
            </div>
        </>
    );
}