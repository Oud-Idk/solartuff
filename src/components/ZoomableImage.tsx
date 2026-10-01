'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ZoomableImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
}

export default function ZoomableImage({ src, alt, width, height, className }: ZoomableImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on "Esc" key press
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            {/* Thumbnail Image */}
            <div className={`cursor-zoom-in ${className}`} onClick={() => setIsOpen(true)}>
                <Image 
                    src={src} 
                    width={width || 400} 
                    height={height || 400} 
                    alt={alt} 
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Lightbox Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 z-100 flex items-center justify-center bg-bg-overlay-heavy cursor-zoom-out p-4 md:p-10"
                    onClick={() => setIsOpen(false)}
                >
                    <button 
                        className="absolute top-5 right-5 text-text text-4xl z-110 hover:text-text-secondary"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                    <div className="relative w-full h-full">
                        <Image 
                            src={src} 
                            fill
                            alt={alt} 
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </>
    );
}