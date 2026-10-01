import PageContent from '@/components/PageContent';
import SimpleMarkdown from '@/components/SimpleMarkdown';
import { aboutSolartuff } from '@/constants/translations';

export default async function AboutSolartuff({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const localeText = aboutSolartuff[lang as keyof typeof aboutSolartuff] || aboutSolartuff.en;

    return <PageContent header={lang === 'en' ? 'About Us' : 'Tentang Kami'}>
      <SimpleMarkdown content={localeText}/>
    </PageContent>
}
