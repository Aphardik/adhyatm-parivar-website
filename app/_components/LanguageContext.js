"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("hi");
    const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
    const [hasCheckedLanguage, setHasCheckedLanguage] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("appLanguage");
        const initialLang = savedLanguage || "hi";

        setLanguage(initialLang);
        document.documentElement.setAttribute("data-language", initialLang);

        if (!savedLanguage) {
            // setIsLanguageModalOpen(false);
            setIsLanguageModalOpen(true);
        }

        setHasCheckedLanguage(true);
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("appLanguage", lang);
        document.documentElement.setAttribute("data-language", lang);
        setIsLanguageModalOpen(false);
    };

    const closeLanguageModal = () => {
        setIsLanguageModalOpen(false);
    };

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];
        for (let k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                changeLanguage,
                closeLanguageModal, // ✅ expose it
                t,
                isLanguageModalOpen,
                setIsLanguageModalOpen,
                hasCheckedLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
