import { useParams } from 'next/navigation';
import NavLink from './NavLinks';
import { homeButtonTranslations } from '@/constants/translations';

export default function HeaderLinks() {
    const { lang } = useParams();
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return (
        <div className='flex flex-row gap-1 xl:gap-3'>
            <NavLink href="/">Home</NavLink>
            <NavLink href="about-solartuff">{t.aboutSolartuff}</NavLink>
            <NavLink href="product-knowledge">{t.productKnowledge}</NavLink>
            <NavLink href="product-selection">{t.productSelection}</NavLink>
            <NavLink href="contact-us">{t.contactUs}</NavLink>
        </div>
    );
};