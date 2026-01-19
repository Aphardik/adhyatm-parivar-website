"use client";
import React, { useState } from 'react';
import Image3DCarousel from './Image3DCarousel';

const RangChhataSection = () => {
    const [activeLanguage, setActiveLanguage] = useState('Hindi');

    const getFontClass = (lang) => {
        switch (lang) {
            case 'Hindi': return 'font-heading';
            case 'Gujarati': return 'font-anek';
            case 'English': return 'font-sans';
            default: return 'font-heading';
        }
    };

    const images = {
        Hindi: [
            "/diksha/rangchhata-1H.webp",
            "/diksha/rangchhata-2H.webp",
            "/diksha/rangchhata-3H.webp",
            "/diksha/rangchhata-4H.webp",
            "/diksha/rangchhata-5H.webp",
            "/diksha/rangchhata-6H.webp",
            "/diksha/rangchhata-7H.webp",
            "/diksha/rangchhata-8H.webp",
            "/diksha/rangchhata-9H.webp",

        ],
        Gujarati: [
            "/diksha/rangchhata-1G.webp",
            "/diksha/rangchhata-2G.webp",
            "/diksha/rangchhata-3G.webp",
            "/diksha/rangchhata-4G.webp",
            "/diksha/rangchhata-5G.webp",
            "/diksha/rangchhata-6G.webp",
            "/diksha/rangchhata-7G.webp",
            "/diksha/rangchhata-8G.webp",
            "/diksha/rangchhata-9G.webp",
        ],
        English: [
            "/diksha/rangchhata-1E.webp",
            "/diksha/rangchhata-2E.webp",
            "/diksha/rangchhata-3E.webp",
            "/diksha/rangchhata-4E.webp",
            "/diksha/rangchhata-5E.webp",
            "/diksha/rangchhata-6E.webp",
            "/diksha/rangchhata-7E.webp",
            "/diksha/rangchhata-8E.webp",
            "/diksha/rangchhata-9E.webp",
        ]
    };

    const titles = {
        Hindi: "रंग छटा",
        Gujarati: "રંગ છાંટણા",
        English: "Flashes of Diksha Mahotsav"
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="text-center mb-2 relative">
                <div className={`relative inline-block w-full text-center my-2 ${getFontClass(activeLanguage)}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>

                    <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-maroon via-amber-700 to-maroon bg-clip-text text-transparent pb-2 leading-snug">
                        {titles[activeLanguage]}
                    </h2>
                </div>

                <div className="flex justify-center relative z-10">
                    <div className="relative flex items-center bg-gray-300 rounded-3xl p-1 shadow-inner">
                        <button
                            onClick={() => setActiveLanguage('Hindi')}
                            className={`relative cursor-pointer px-6 py-2 rounded-3xl text-sm md:text-base font-bold transition-all duration-300 ease-in-out transform font-heading ${activeLanguage === 'Hindi'
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'text-gray-600 hover:text-maroon'
                                }`}
                        >
                            हिन्दी
                        </button>
                        <button
                            onClick={() => setActiveLanguage('Gujarati')}
                            className={`relative cursor-pointer px-6 py-2 rounded-3xl text-sm md:text-base font-bold transition-all duration-300 ease-in-out transform font-anek ${activeLanguage === 'Gujarati'
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'text-gray-600 hover:text-maroon'
                                }`}
                        >
                            ગુજરાતી
                        </button>
                        <button
                            onClick={() => setActiveLanguage('English')}
                            className={`relative cursor-pointer px-6 py-2 rounded-3xl text-sm md:text-base font-bold transition-all duration-300 ease-in-out transform font-sans ${activeLanguage === 'English'
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'text-gray-600 hover:text-maroon'
                                }`}
                        >
                            English
                        </button>
                    </div>
                </div>
            </div>

            <div className="relative animate-fade-in">
                <Image3DCarousel key={activeLanguage} images={images[activeLanguage]} />
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default RangChhataSection;
