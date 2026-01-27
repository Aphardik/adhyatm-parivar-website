/**
 * Converts Devanagari (Hindi) text to Gujarati text.
 * The Unicode offset between Devanagari (0x0900) and Gujarati (0x0A80) is 0x0180.
 * Some characters may not have a 1:1 mapping, but for the script conversion of common text, this works well.
 */
export const toGujarati = (text) => {
    if (!text || typeof text !== 'string') return text;

    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        // Devanagari block: 0x0900 to 0x097F
        if (code >= 0x0900 && code <= 0x097F) {
            // Gujarati offset: 0x0180
            // Note: Gujarati script has gaps in its Unicode block compared to Devanagari.
            // Simple mapping works for most common characters.
            return String.fromCharCode(code + 0x0180);
        }
        return char;
    }).join('');
};

/**
 * Deeply translates an object or array to Gujarati script if the current language is 'gu'.
 */
export const translateToGujarati = (data, language) => {
    if (language !== 'gu') return data;

    if (Array.isArray(data)) {
        return data.map(item => translateToGujarati(item, language));
    } else if (typeof data === 'object' && data !== null) {
        const translated = {};
        for (const key in data) {
            translated[toGujarati(key)] = translateToGujarati(data[key], language);
        }
        return translated;
    } else if (typeof data === 'string') {
        return toGujarati(data);
    }
    return data;
};
