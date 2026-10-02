import type { Metadata } from 'next';
import PageContent from '@/components/PageContent';
import ProductComparison from '@/components/ProductComparison';
import { homeButtonTranslations, productSelection } from '@/constants/translations';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return { title: t.productSelection };
}

export default async function ProductSelection({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = productSelection[lang] || productSelection.en;
    const t = homeButtonTranslations[lang as keyof typeof homeButtonTranslations] || homeButtonTranslations.en;

    return <PageContent header={t.productSelection}>
        <ProductComparison
            header={localeText.header}
            products={localeText.products}
            listContent={localeText.modelComparison}
        />
    </PageContent>
}