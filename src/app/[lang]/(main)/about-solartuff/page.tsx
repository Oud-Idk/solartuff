import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { aboutSolartuff, homeButtonTranslations } from '@/constants/translations';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return { title: t.aboutSolartuff };
}

export default async function AboutSolartuff({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = aboutSolartuff[lang as keyof typeof aboutSolartuff] || aboutSolartuff.en;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return <PageContent header={t.aboutSolartuff}>
      <SimpleMarkdown content={localeText}/>
    </PageContent>
}