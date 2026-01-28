"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { translations } from "../data/translations";

const MetadataManager = () => {
    const pathname = usePathname();
    const { language, t } = useLanguage();

    useEffect(() => {
        const getPageTitle = () => {
            const segments = pathname.split("/").filter(Boolean);
            const lastSegment = segments[segments.length - 1];

            // 1. Handle Home
            if (pathname === "/") {
                return t("common.pageTitles.home");
            }

            // 2. Full Path Match from pageTitles (e.g. "contactus" or "pages-sba")
            const fullPathKey = segments.join("-");
            const fullTitle = t(`common.pageTitles.${fullPathKey}`);
            if (fullTitle && !fullTitle.includes('common.pageTitles')) {
                return fullTitle;
            }

            // 3. Last Segment Match from pageTitles
            const commonTitle = t(`common.pageTitles.${lastSegment}`);
            if (commonTitle && !commonTitle.includes('common.pageTitles')) {
                return commonTitle;
            }

            // 4. Search in Navigation Menus dynamically
            // This maps path prefixes to menu keys in navigation.json
            const prefixToMenu = {
                "jinmurti-vibhag": "menu1",
                "jinmandir-vihabg": "menu2",
                "jinagam-vibhag": "menu3",
                "adhyatm-vibhag": "menu4"
            };

            const navData = translations[language].navigation;
            for (const [prefix, menuKey] of Object.entries(prefixToMenu)) {
                if (pathname.includes(prefix)) {
                    const menu = navData[menuKey];
                    if (menu && menu.items) {
                        // We try to match the last segment to a derived slug of the title
                        // Or since we know the structure, we can just look for the item.
                        // For simplicity, we can't easily map back from slug to index without a link map.
                        // But we can check if any item title's keywords are in the slug.
                        const slug = lastSegment.toLowerCase();
                        const matchedItem = menu.items.find(item => {
                            // Simple heuristic: check if any word from the title is in the slug
                            // (This is fallback-ish)
                            return false;
                        });
                        if (matchedItem) return `${matchedItem.title} | ${t("navigation.title")}`;
                    }
                }
            }

            return t("common.pageTitles.default") || "अध्यात्म परिवार";
        };

        const title = getPageTitle();
        document.title = title;
    }, [pathname, language, t]);

    return null;
};

export default MetadataManager;
