import PageContent from '@/components/PageContent';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { productKnowledge } from '@/constants/translations';
import Image from 'next/image';

export default async function ProductKnowledge({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = productKnowledge[lang as keyof typeof productKnowledge] || productKnowledge.en;

    return <PageContent header={lang === 'en' ? 'Product Knowledge' : 'Pengetahuan Produk'}>
        <SimpleMarkdown content={localeText.firstPart} />
        <Image src="/structure.png" width="800" height="800" alt="Structure" />
        <SimpleMarkdown content={localeText.secondPart} />
        <SimpleMarkdown content={localeText.tablePart} />
        <SimpleMarkdown content={localeText.thirdPart} />
    </PageContent>
}
