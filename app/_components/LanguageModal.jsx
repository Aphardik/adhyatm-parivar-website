"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FaX } from "react-icons/fa6";

const LanguageModal = () => {
    const {
        isLanguageModalOpen,
        changeLanguage,
        closeLanguageModal, // 👈 make sure this exists
    } = useLanguage();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isLanguageModalOpen) {
            const timer = setTimeout(() => setIsVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isLanguageModalOpen]);

    if (!isLanguageModalOpen) return null;

    return (
        /* Overlay */
        <div
            onClick={closeLanguageModal} // 👈 click outside closes modal
            className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-300
        ${isVisible
                    ? "bg-black/60 backdrop-blur-sm opacity-100"
                    : "bg-black/0 backdrop-blur-none opacity-0"
                }`}
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()} // 👈 prevent close on inner click
                className={`bg-white sm:m-0 m-4 rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center relative overflow-hidden
          transform transition-all duration-500 ease-out
          ${isVisible
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-90 opacity-0 translate-y-4"
                    }`}
            >
                {/* Top Bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-maroon"></div>

                {/* Close Button */}
                <button
                    onClick={closeLanguageModal}
                    className="absolute font-bold top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close"
                >
                    {/* Use icon or text */}
                    {/* <FaX size={22} /> */}
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    Welcome to Adhyatm Parivar
                </h2>

                <p className="text-gray-600 font-heading mb-8">
                    कृपया अपनी पसंदीदा भाषा चुनें
                </p>

                <div className="grid gap-4">
                    <button
                        onClick={() => changeLanguage("hi")}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-orange-100 hover:border-orange-500 hover:bg-orange-50 transition"
                    >
                        <div className="text-left">
                            <h3 className="font-bold font-heading text-lg">हिन्दी</h3>
                            <p className="text-sm text-gray-500">Hindi</p>
                        </div>
                    </button>

                    <button
                        onClick={() => changeLanguage("gu")}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 transition"
                    >
                        <div className="text-left">
                            <h3 className="font-bold font-anek text-lg">ગુજરાતી</h3>
                            <p className="text-sm text-gray-500">Gujarati</p>
                        </div>
                    </button>

                    <button
                        onClick={() => changeLanguage("en")}
                        className="group flex items-center justify-between p-4 rounded-xl border-2 border-purple-100 hover:border-purple-500 hover:bg-purple-50 transition"
                    >
                        <div className="text-left">
                            <h3 className="font-bold text-lg">English</h3>
                            <p className="text-sm text-gray-500">English</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LanguageModal;
