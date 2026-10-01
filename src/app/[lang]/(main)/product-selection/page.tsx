import PageContent from '@/components/PageContent';
import ProductComparison from '@/components/ProductComparison';
import { productSelection } from '@/constants/translations';

export default async function ProductSelection({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = productSelection[lang] || productSelection.en;

    return <PageContent header={lang === 'en' ? 'Product Selection' : 'Pemilihan Produk'}>
        <ProductComparison
            header={localeText.header}
            products={localeText.products}
            listContent={localeText.modelComparison}
        />
    </PageContent>
}
