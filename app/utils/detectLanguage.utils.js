export function detectLanguage(name) {
  if (!name || typeof name !== 'string') return 'Unknown';

  name = name.trim();

  // Unicode ranges for scripts
  const hindiRegex = /[\u0900-\u097F]/;   // Devanagari (Hindi)
  const gujaratiRegex = /[\u0A80-\u0AFF]/; // Gujarati
  const englishRegex = /^[A-Za-z\s]+$/;    // Basic English letters

  if (hindiRegex.test(name)) {
    return 'Hindi';
  } else if (gujaratiRegex.test(name)) {
    return 'Gujarati';
  } else if (englishRegex.test(name)) {
    return 'English';
  } else {
    return 'Unknown';
  }
}


