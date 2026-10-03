import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { homeButtonTranslations, productKnowledge } from '@/constants/translations';
import Image from 'next/image';
import { images } from '@/assets';

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
        <div className="flex flex-row lg:gap-8 justify-between items-start">
            <Image
                src={images.structure}
                width={1200}
                alt="Structure"
                loading="eager"
                className="relative w-full  lg:basis-3/4 min-w-0 max-w-200 lg:max-w-none h-auto shrink-0"
            />

            <Image
                src={images.sus316b}
                width={600}
                alt="SUS316B"
                className="relative -ml-38 lg:ml-0 w-[45%] lg:w-auto lg:flex-1 lg:basis-1/4 min-w-0 max-w-40 lg:max-w-80 h-auto self-start -mt-16"
            />
        </div>
        <SimpleMarkdown content={localeText.secondPart} />
        <SimpleMarkdown content={localeText.tablePart} />
        <SimpleMarkdown content={localeText.thirdPart} />
    </PageContent>
}