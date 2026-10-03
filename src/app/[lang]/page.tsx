import LanguageSwitcher from '@/components/LanguageSwitcher';
import HomeButtons from '../../components/HomeButtons';
import Image from 'next/image';
import { images } from '@/assets';

export default function Home({ params }: { params: Promise<{ lang: string }> }) {
    return (
        <main data-scroll-root="home" className="relative h-full min-h-dvh lg:min-h-full w-full overflow-y-auto overflow-x-hidden flex flex-col justify-between items-center lg:items-start">
            <div className="flex lg:justify-between justify-center w-full">
                <Image
                    src={images.solartuff}
                    alt="Logo"
                    loading="eager"
                    className='w-5/6 h-auto max-w-125 lg:w-140 lg:max-w-200 m-8 lg:ml-20'
                />
                <Image
                    src={images.sus316b}
                    alt="Logo"
                    loading="eager"
                    className='h-48 w-auto shrink lg:mr-10 lg:block hidden'
                />
            </div>

            <div className="grow flex items-center justify-center lg:hidden py-4">
                <Image
                    src={images.promotionReduced}
                    alt="Promotion Reduced"
                    width={600}
                    className='w-full h-auto max-w-150 px-4'
                />
            </div>

            <div className='flex-row flex w-full lg:justify-between items-center gap-30 xl:gap-50 2xl:gap-65 pb-16 2xl:pb-20 px-8 2xl:px-16 justify-center'>
                <div className='hidden lg:block flex-1 min-w-0 max-w-300'>
                    <Image
                        src={images.promotion}
                        alt="Promotion"
                        loading="eager"
                        width={1200}
                        className='w-full h-auto object-contain'
                    />
                </div>

                <HomeButtons
                    params={params}
                    className="w-full max-w-150 flex flex-col gap-3 lg:w-1/4 shrink-0 self-end"
                />
            </div>
            <LanguageSwitcher className='fixed bottom-5 right-5'/>
        </main>
    );
}
