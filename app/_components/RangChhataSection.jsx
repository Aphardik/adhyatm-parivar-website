"use client";
import React from 'react';
import Image3DCarousel from './Image3DCarousel';
import { useLanguage } from './LanguageContext';
import { getSectionData } from '@/app/utils/sectionData';

const RangChhataSection = () => {
    const { language } = useLanguage();
    const content = getSectionData(language, "diksha");

    const getFontClass = (lang) => {
        switch (lang) {
            case 'hi': return 'font-heading';
            case 'gu': return 'font-anek';
            case 'en': return 'font-sans';
            default: return 'font-heading';
        }
    };

    const [localLang, setLocalLang] = React.useState(language);

    // Update local language when global language changes
    React.useEffect(() => {
        setLocalLang(language);
    }, [language]);

    const imagesMapping = {
        hi: [
            "/diksha/rangchhata-1H.webp",
            "/diksha/rangchhata-2H.webp",
            "/diksha/rangchhata-3H.webp",
            "/diksha/rangchhata-4H.webp",
            "/diksha/rangchhata-5H.webp",
            "/diksha/rangchhata-6H.webp",
            "/diksha/rangchhata-7H.webp",
            "/diksha/rangchhata-8H.webp",
            "/diksha/rangchhata-9H.webp",
            "/diksha/rangchhata-10H.webp",
            "/diksha/rangchhata-11H.webp",
            "/diksha/rangchhata-12H.webp",
            "/diksha/rangchhata-13H.webp",
            "/diksha/rangchhata-14H.webp",
            "/diksha/rangchhata-15H.webp",
        ],
        gu: [
            "/diksha/rangchhata-1G.webp",
            "/diksha/rangchhata-2G.webp",
            "/diksha/rangchhata-3G.webp",
            "/diksha/rangchhata-4G.webp",
            "/diksha/rangchhata-5G.webp",
            "/diksha/rangchhata-6G.webp",
            "/diksha/rangchhata-7G.webp",
            "/diksha/rangchhata-8G.webp",
            "/diksha/rangchhata-9G.webp",
            "/diksha/rangchhata-10G.webp",
            "/diksha/rangchhata-11G.webp",
            "/diksha/rangchhata-12G.webp",
            "/diksha/rangchhata-13G.webp",
            "/diksha/rangchhata-14G.webp",
            "/diksha/rangchhata-15G.webp",
        ],
        en: [
            "/diksha/rangchhata-1E.webp",
            "/diksha/rangchhata-2E.webp",
            "/diksha/rangchhata-3E.webp",
            "/diksha/rangchhata-4E.webp",
            "/diksha/rangchhata-5E.webp",
            "/diksha/rangchhata-6E.webp",
            "/diksha/rangchhata-7E.webp",
            "/diksha/rangchhata-8E.webp",
            "/diksha/rangchhata-9E.webp",
            "/diksha/rangchhata-10E.webp",
            "/diksha/rangchhata-11E.webp",
            "/diksha/rangchhata-12E.webp",
            "/diksha/rangchhata-13E.webp",
            "/diksha/rangchhata-14E.webp",
            "/diksha/rangchhata-15E.webp",
        ]
    };

    const languages = [
        { code: 'hi', label: 'हिन्दी' },
        { code: 'gu', label: 'ગુજરાતી' },
        { code: 'en', label: 'English' }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <div className="text-center mb-8 relative">
                <div className={`relative inline-block w-full text-center my-2 ${getFontClass(language)}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>

                    <h2 className="relative text-3xl md:text-5xl font-bold bg-gradient-to-r from-maroon via-amber-700 to-maroon bg-clip-text text-transparent pb-2 leading-snug">
                        {content?.rangChhata?.title}
                    </h2>
                </div>

                {/* Language Toggle Buttons */}
                <div className="flex justify-center gap-3 mt-6">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLocalLang(lang.code)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base shadow-sm
                                ${localLang === lang.code
                                    ? 'bg-maroon text-white scale-105 shadow-maroon/20'
                                    : 'bg-white text-maroon hover:bg-red-50 border border-red-100 hover:scale-105'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative animate-fade-in">
                <Image3DCarousel key={localLang} images={imagesMapping[localLang] || imagesMapping['hi']} />
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
