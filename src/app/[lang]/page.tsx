import LanguageSwitcher from '@/components/LanguageSwitcher';
import HomeButtons from '../../components/HomeButtons';
import Image from 'next/image';

export default function Home({ params }: { params: Promise<{ lang: string }> }) {
  return (
    <main className="relative h-full min-h-dvh lg:min-h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-between items-center lg:items-start">
      <Image
        src="/solartuff.png"
        alt="Logo"
        width={400}
        height={400}
        loading="eager"
        className='w-5/6 max-w-125 lg:w-140 lg:max-w-200 m-8'
      />

      <div className="grow flex items-center justify-center lg:hidden py-4">
        <Image
          src="/promotion-reduced.png"
          alt="Promotion Reduced"
          width={600}
          height={600}
          className='px-4'
        />
      </div>

      <div className='flex-row flex w-full lg:justify-between items-center gap-10 2xl:gap-70 pb-16 2xl:pb-28 px-8 2xl:px-16 justify-center'>
        <Image
          src="/promotion.png"
          alt="Promotion"
          loading="eager"
          width={1200}
          height={1200}
          className='hidden lg:block shrink min-w-0 h-auto w-auto max-w-full object-contain'
        />
        <HomeButtons params={params} className="
          w-full max-w-150 flex flex-col gap-3 lg:w-1/4 shrink-0 self-end
        "/>
      </div>
      <LanguageSwitcher className='fixed bottom-5 right-5' />
    </main>
  );
}
