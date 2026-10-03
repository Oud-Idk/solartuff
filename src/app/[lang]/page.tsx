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
                    className='h-auto max-w-125 hero-rise hero-step-0 min-w-4/12 m-8 lg:ml-30 '
                />
                <Image
                    src={images.sus316b}
                    alt="Logo"
                    loading="eager"
                    className='h-48 w-auto shrink lg:mr-10 lg:block hidden hero-rise hero-step-1'
                />
            </div>

            {/* Matches the desktop panel's step so the entrance reads the same on either breakpoint. */}
            <div className='grow flex items-center justify-center lg:hidden py-4 hero-rise hero-step-2'>
                <Image
                    src={images.promotionReduced}
                    alt="Promotion Reduced"
                    width={600}
                    className='w-full h-auto max-w-150 px-4'
                />
            </div>

            <div className='flex-row flex w-full lg:justify-between items-center gap-30 xl:gap-50 2xl:gap-50 pb-16 2xl:pb-20 px-8 2xl:px-16 justify-center'>
                <div className='hidden lg:block flex-1 min-w-0 max-w-380 hero-rise hero-step-2'>
                    <Image
                        src={images.promotion}
                        alt="Promotion"
                        loading="eager"
                        width={1300}
                        className='w-full h-auto object-contain'
                    />
                </div>

                <HomeButtons
                    params={params}
                    className="w-full max-w-200 flex flex-col gap-3 lg:w-17/64 shrink-0 self-end"
                />
            </div>
            <LanguageSwitcher className='fixed bottom-5 right-5 hero-rise hero-step-8' />
        </main>
    );
}
