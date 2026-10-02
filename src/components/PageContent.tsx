import { ReactNode } from 'react';
import ZoomableImage from './ZoomableImage';

export default function PageContent({header, children}: {header: string, children: ReactNode}) {
    return (
        <main className="flex flex-col lg:grid lg:grid-cols-5 flex-1 w-full overflow-y-auto lg:overflow-hidden">
            <div className='flex flex-col w-full items-center justify-center px-[10%] py-5 lg:col-span-2 lg:bg-transparent'>
                <ZoomableImage
                    src="/triple-shield.png"
                    alt="Triple Shield"
                    className='w-3/4 max-w-60 lg:w-[min(100%,60vh)] lg:max-w-120 lg:px-[10%] hover:scale-110 transition-transform'
                />
                <h1 className="text-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black p-5 text-center">
                    {header}
                </h1>
            </div>

            <div className="bg-bg w-full lg:col-span-3 flex-1 flex flex-col lg:h-full lg:overflow-y-auto shadow-[0_0_2rem_2.5rem_theme(--color-bg)] mt-6 lg:mt-0">
                <div className="w-full px-8 lg:px-12 py-8 lg:my-auto">
                    {children}

                    <div className="flex justify-center pt-6">
                        <ZoomableImage
                            src="/certificate.png"
                            alt="Certificates"
                            width={400}
                            height={400}
                            className="hover:opacity-80 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
