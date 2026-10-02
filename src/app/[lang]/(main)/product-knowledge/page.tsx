import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { homeButtonTranslations, productKnowledge } from '@/constants/translations';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return { title: t.productKnowledge };
}

export default async function ProductKnowledge({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = productKnowledge[lang as keyof typeof productKnowledge] || productKnowledge.en;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return <PageContent header={t.productKnowledge}>
        <SimpleMarkdown content={localeText.firstPart} />
        <Image src="/structure.png" width="800" height="800" alt="Structure" />
        <SimpleMarkdown content={localeText.secondPart} />
        <SimpleMarkdown content={localeText.tablePart} />
        <SimpleMarkdown content={localeText.thirdPart} />
    </PageContent>
}