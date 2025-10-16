"use client"
import React, { useState, useMemo } from 'react';
import { FaSearch, FaFilter, FaBookOpen, FaHandSparkles } from 'react-icons/fa';
import { BOOKS_DATA } from '../data/book-list';
import { detectLanguage } from '@/app/utils/detectLanguage.utils';

const SHRENI_DESCRIPTIONS = {
  'અઘ્યય સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'ગહન અધ્યયન માટેના મહત્વપૂર્ણ ગ્રંથો, આધ્યાત્મિક જ્ઞાનનો ખજાનો',
    'હિન્દી': 'गहन अध्ययन के लिए महत्वपूर्ण ग्रंथ, आध्यात्मिक ज्ञान का खजाना',
    'संस्कृत': 'गम्भीराध्ययनार्थं महत्त्वपूर्णग्रन्थाः, आध्यात्मिकज्ञानस्य निधिः'
  },
  'અપ્રગટ રાસસાહિત્યશ્રેણી': {
    'ગુજરાતી': 'દુર્લભ રાસ સાહિત્યનો અનમોલ સંગ્રહ, ભક્તિરસની અનુભૂતિ',
    'હિન્દી': 'दुर्लभ रास साहित्य का अनमोल संग्रह, भक्तिरस की अनुभूति',
    'संस्कृत': 'दुर्लभराससाहित्यस्य अमूल्यसङ्ग्रहः, भक्तिरसस्य अनुभूतिः'
  },
  'અપ્રગટ સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'અપ્રકાશિત અને દુર્લભ સાહિત્યનો ખજાનો, ઐતિહાસિક મહત્વ',
    'હિન્દી': 'अप्रकाशित और दुर्लभ साहित्य का खजाना, ऐतिहासिक महत्व',
    'संस्कृत': 'अप्रकाशितदुर्लभसाहित्यस्य निधिः, ऐतिहासिकमहत्त्वम्'
  },
  'કિશોર કથાશ્રેણી': {
    'ગુજરાતી': 'કિશોરો માટે પ્રેરક કથાઓ, ચારિત્ર્ય નિર્માણની સાથે મનોરંજન',
    'હિન્દી': 'किशोरों के लिए प्रेरक कथाएं, चरित्र निर्माण के साथ मनोरंजन',
    'संस्कृत': 'किशोराणां कृते प्रेरकाः कथाः, चारित्र्यनिर्माणं मनोरञ्जनञ्च'
  },
  'ગ્રંથોદ્ધારે સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'પ્રાચીન ગ્રંથોનું સંરક્ષણ અને સંપાદન, સાંસ્કૃતિક વારસો',
    'હિન્દી': 'प्राचीन ग्रंथों का संरक्षण और संपादन, सांस्कृतिक विरासत',
    'संस्कृत': 'प्राचीनग्रन्थानां संरक्षणं सम्पादनञ्च, सांस्कृतिकधरोहरम्'
  },
  'નિત્યોપયોગી સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'દૈનિક જીવનમાં ઉપયોગી સાહિત્ય, આધ્યાત્મિક માર્ગદર્શન',
    'હિન્દી': 'दैनिक जीवन में उपयोगी साहित्य, आध्यात्मिक मार्गदर्शन',
    'संस्कृत': 'दैनन्दिनजीवने उपयोगि साहित्यम्, आध्यात्मिकमार्गदर्शनम्'
  },
  'પ્રભુતૃ કથાશ્રેણી': {
    'ગુજરાતી': 'પ્રભુની દિવ્ય લીલાઓની કથાઓ, ભક્તિભાવની જાગૃતિ',
    'હિન્દી': 'प्रभु की दिव्य लीलाओं की कथाएं, भक्तिभाव की जागृति',
    'संस्कृत': 'प्रभोः दिव्यलीलानां कथाः, भक्तिभावस्य जागृतिः'
  },
  'પ્રવચન સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'આચાર્યોના પ્રવચનોનો સંગ્રહ, તત્ત્વજ્ઞાનની સરળ સમજ',
    'હિન્દી': 'आचार्यों के प्रवचनों का संग्रह, तत्त्वज्ञान की सरल समझ',
    'संस्कृत': 'आचार्याणां प्रवचनानां सङ्ग्रहः, तत्त्वज्ञानस्य सरलबोधः'
  },
  'બાલાનંદ કથાશ્રેણી': {
    'ગુજરાતી': 'બાળકો માટે આનંદદાયક કથાઓ, નૈતિક મૂલ્યો સાથે મનોરંજન',
    'હિન્દી': 'बच्चों के लिए आनंददायक कथाएं, नैतिक मूल्यों के साथ मनोरंजन',
    'संस्कृत': 'बालानां कृते आनन्ददायकाः कथाः, नैतिकमूल्यैः सह मनोरञ्जनम्'
  },
  'વાચના સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'વાચન માટે રસપ્રદ સાહિત્ય, સાહિત્યિક સ્વાદની વૃદ્ધિ',
    'હિન્દી': 'वाचन के लिए रसप्रद साहित्य, साहित्यिक स्वाद की वृद्धि',
    'संस्कृत': 'वाचनार्थं रसप्रदं साहित्यम्, साहित्यिकरुचेः वृद्धिः'
  },
  'विविध साहित्यश्रेशी': {
    'હિન્દી': 'विविध विषयों का संकलन, विशेष और दुर्लभ ग्रंथ',
    'ગુજરાતી': 'વિવિધ વિષયોનો સંકલન, વિશેષ અને દુર્લભ ગ્રંથ',
    'संस्कृत': 'विविधविषयाणां सङ्कलनम्, विशिष्टदुर्लभग्रन्थाः'
  },
  'શાસ્ત્ર-શૈલાવિશિ-રત્નમૂ': {
    'ગુજરાતી': 'શાસ્ત્રીય જ્ઞાનના રત્નો, પરંપરાગત શિક્ષણનો સાર',
    'હિન્દી': 'शास्त्रीय ज्ञान के रत्न, परंपरागत शिक्षा का सार',
    'संस्कृत': 'शास्त्रीयज्ञानस्य रत्नानि, परम्परागतशिक्षायाः सारः'
  },
  'સંસ્કારશાળા સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'સંસ્કારો અને શિક્ષણ માટેનું સાહિત્ય, બાળ વિકાસનો આધાર',
    'હિન્દી': 'संस्कार और शिक्षा के लिए साहित्य, बाल विकास का आधार',
    'संस्कृत': 'संस्कारशिक्षार्थं साहित्यम्, बालविकासस्य आधारः'
  },
  'સાર્થ સાહિત્યશ્રેણી': {
    'ગુજરાતી': 'અર્થ સહિત સાહિત્ય, સરળ સમજણ અને ગહન અધ્યયન',
    'હિન્દી': 'अर्थ सहित साहित्य, सरल समझ और गहन अध्ययन',
    'संस्कृत': 'अर्थसहितं साहित्यम्, सरलबोधः गम्भीराध्ययनञ्च'
  }
};

const extractUniqueValues = (books, key) => {
  if (key === 'language') {
    const languages = new Set();
    books.forEach(book => {
      if (book.language === 'સં./ગુ.') {
        languages.add('સંસ્કૃત');
        languages.add('ગુજરાતી');
      } else {
        languages.add(book.language);
      }
    });
    return [...languages].sort();
  }
  return [...new Set(books.map(book => book[key]))].sort();
};

const BookCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShreni, setSelectedShreni] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [groupByShreni, setGroupByShreni] = useState(false);

  const shreniOptions = extractUniqueValues(BOOKS_DATA, 'shreni');
  const languageOptions = extractUniqueValues(BOOKS_DATA, 'language');

  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter(book => {
      const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesShreni = selectedShreni === 'all' || book.shreni === selectedShreni;
      
      let matchesLanguage = selectedLanguage === 'all';
      if (!matchesLanguage) {
        if (book.language === 'સં./ગુ.') {
          matchesLanguage = selectedLanguage === 'સંસ્કૃત' || selectedLanguage === 'ગુજરાતી';
        } else {
          matchesLanguage = book.language === selectedLanguage;
        }
      }
      
      return matchesSearch && matchesShreni && matchesLanguage;
    });
  }, [searchTerm, selectedShreni, selectedLanguage]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedShreni('all');
    setSelectedLanguage('all');
  };

  const hasActiveFilters = searchTerm || selectedShreni !== 'all' || selectedLanguage !== 'all';

  // Group books by shreni if toggle is on
  const groupedBooks = useMemo(() => {
    if (!groupByShreni) {
      return { ungrouped: filteredBooks };
    }
    
    // Group books by shreni and sort them
    const grouped = filteredBooks.reduce((acc, book) => {
      if (!acc[book.shreni]) {
        acc[book.shreni] = [];
      }
      acc[book.shreni].push(book);
      return acc;
    }, {});
    
    // Sort each group by srno
    Object.keys(grouped).forEach(shreni => {
      grouped[shreni].sort((a, b) => a.srno - b.srno);
    });
    
    return grouped;
  }, [filteredBooks, groupByShreni]);

  // Get shreni code number from book's shreniCode (extract digits after hyphen)
  const getShreniCodeNumber = (shreniCode) => {
    if (!shreniCode) return '';
    const parts = shreniCode.split('-');
    return parts.length > 1 ? parts[1] : '';
  };

  // Get shreni description for tooltip
  const getShreniDescriptionForTooltip = (shreniName, language = 'ગુજરાતી') => {
    const descriptions = SHRENI_DESCRIPTIONS[shreniName];
    if (!descriptions) return '';
    
    let descLang = 'ગુજરાતી';
    if (language === 'હિન્દી') {
      descLang = 'હિન્દી';
    } else if (language === 'संस्कृत' || language === 'સંસ્કૃત') {
      descLang = 'संस्कृत';
    }
    
    return descriptions[descLang] || descriptions['ગુજરાતી'];
  };

  // Get shreni description based on selected language
  const getShreniDescription = () => {
    if (selectedShreni === 'all') return null;
    
    const descriptions = SHRENI_DESCRIPTIONS[selectedShreni];
    if (!descriptions) return null;

    // Map language selection to description language
    let descLang = 'ગુજરાતી'; // default
    if (selectedLanguage === 'હિન્દી') {
      descLang = 'હિન્દી';
    } else if (selectedLanguage === 'संस्कृत' || selectedLanguage === 'સંસ્કૃત') {
      descLang = 'संस्कृत';
    }

    return {
      name: selectedShreni,
      description: descriptions[descLang] || descriptions['ગુજરાતી']
    };
  };

  const shreniInfo = getShreniDescription();

  return (
    <div className="min-h-screen font-anek bg-white">
      {/* Header */}
      <header
        style={{
          backgroundImage: "url('/booklistheader.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex items-center justify-center h-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-heading sm:text-4xl font-bold text-white text-center">
                सलंग प्रकाशन सूची
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-3xl focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
            >
              <FaFilter className="w-5 h-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedShreni}
                onChange={(e) => setSelectedShreni(e.target.value)}
                className="px-4 py-3 border bg-gray-100 border-gray-300 rounded-3xl focus:outline-none focus:border-orange-500 min-w-[200px] cursor-pointer"
              >
                <option value="all">All Shreni</option>
                {shreniOptions.map(shreni => (
                  <option key={shreni} value={shreni}>{shreni}</option>
                ))}
              </select>

              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-4 py-3 border bg-gray-100 border-gray-300 rounded-3xl focus:outline-none focus:border-orange-500 min-w-[180px] cursor-pointer"
              >
                <option value="all">All Languages</option>
                {languageOptions.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t-2 border-orange-400 space-y-3">
              <select
                value={selectedShreni}
                onChange={(e) => setSelectedShreni(e.target.value)}
                className="w-full px-4 py-3 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
              >
                <option value="all">All Shreni</option>
                {shreniOptions.map(shreni => (
                  <option key={shreni} value={shreni}>{shreni}</option>
                ))}
              </select>

              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-orange-500 bg-white"
              >
                <option value="all">All Languages</option>
                {languageOptions.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          )}

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-600 font-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-sm font-medium">
                  Search: {searchTerm}
                </span>
              )}
              {selectedShreni !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium">
                  {selectedShreni}
                </span>
              )}
              {selectedLanguage !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm font-medium">
                  {selectedLanguage}
                </span>
              )}
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 px-3 py-1 text-sm text-amber-700 hover:text-amber-900 underline font-medium"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Group By Shreni Toggle */}
          <div className="mt-4 flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={groupByShreni}
                  onChange={(e) => setGroupByShreni(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-amber-500 peer-checked:to-orange-600 transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
              <span className="text-sm font-semibold text-gray-700">Group by Shreni</span>
            </label>
          </div>
        </div>

        {/* Shreni Description Banner */}
        {shreniInfo && (
          <div className="mb-8 relative overflow-hidden rounded-b-lg border-b-2 border-amber-100 shadow-md">
            <div className="absolute inset-0 opacity-5 bg-cover" style={{backgroundImage: "url('/bookcardbg1.jpg')"}}></div>
            <div className="relative p-3 md:p-4">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-1">
                    {shreniInfo.name}
                  </h2>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                    {shreniInfo.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-tr-full"></div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6 flex items-center gap-2">
          <p className="text-gray-700 font-medium">
            Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
          </p>
        </div>

        {/* Book Grid */}
        {filteredBooks.length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedBooks)
              .sort(([shreniA], [shreniB]) => shreniA.localeCompare(shreniB))
              .map(([shreniName, books]) => (
              <div key={shreniName}>
                {/* Shreni Header (only shown when grouping is enabled) */}
                {groupByShreni && shreniName !== 'ungrouped' && (
                  <div className="mb-6 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <h2 className="text-2xl font-bold text-amber-900 mb-2 flex items-center gap-3">
                      <span className="inline-block w-2 h-8 bg-gradient-to-b  rounded-full"></span>
                      {shreniName}
                      <span className="text-lg text-gray-500">({books.length} {books.length === 1 ? 'book' : 'books'})</span>
                    </h2>
                    <p className="text-gray-700 ml-5 text-sm">{getShreniDescriptionForTooltip(shreniName)}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {books.map(book => (
                    <div 
                     style={{backgroundImage:"url('/bookcardbg1.jpg')", backgroundSize:"contain"}}
                      key={book.srno} 
                      className="bg-white rounded-xl pt-5 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
                    >
                      {/* Book Image - Full width */}
                      <div className="aspect-[3/4] overflow-hidden relative">
                        <img 
                          src={book.image} 
                          alt={book.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Book Details */}
                      <div   style={{backgroundImage:"url('/bookcardbg1.jpg')", backgroundSize:"cover"}}  className="p-5 flex-1 flex flex-col">
                        {/* Sr No and Shreni */}
                        <div className="flex items-start justify-between mb-3 gap-2">
                          <div className="bg-amber-100 px-3 py-1 rounded-md">
                            <span className="text-xs font-bold text-amber-800">#{book.srno}</span>
                          </div>
                          <div 
                            className="bg-red-600 text-white px-3 py-1 rounded-md flex-1 text-center group/tooltip relative cursor-help"
                            title={getShreniDescriptionForTooltip(book.shreni, book.language)}
                          >
                            <span className="text-xs font-bold uppercase tracking-wide">
                              {book.shreni} - {getShreniCodeNumber(book.shreniCode)}
                            </span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full right-0 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 shadow-xl z-10">
                              <div className="text-left leading-relaxed">
                                {getShreniDescriptionForTooltip(book.shreni, book.language)}
                              </div>
                              <div className="absolute top-full right-4 -mt-1">
                                <div className="border-8 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Book Name */}
                        <h3 className={`${detectLanguage(book.name)=="Hindi"?"font-heading":"font-anek"} text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-700 transition-colors`}>
                          {book.name}
                        </h3>
                        
                        {/* Details Grid */}
                        <div className="space-y-2 text-sm mt-auto">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Price</span>
                            <span className={`px-3 py-1 ${book.price > 0 ? 'bg-red-600' : 'bg-green-600'} text-gray-100 rounded-md font-semibold text-xs`}>
                              {book.price > 0 ? `₹ ${book.price}` : 'Free'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Language</span>
                            <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-md font-semibold text-xs">
                              {book.language === 'સં./ગુ.' ? 'સંસ્કૃત/ગુજરાતી' : book.language}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Edition</span>
                            <span className="text-gray-900 font-semibold">{book.edition}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Available</span>
                            <span className="text-green-700 font-semibold">{book.totalCopies} copies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaBookOpen className="w-10 h-10 text-amber-600" />
            </div>
            <p className="text-gray-900 text-lg font-semibold mb-2">No books found</p>
            <p className="text-gray-600 text-sm">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCatalog;

// "use client"
// import React, { useState, useMemo } from 'react';
// import { FaSearch, FaFilter, FaBookOpen, FaHandSparkles } from 'react-icons/fa';
// import HeaderSvg from '../_components/HeaderSvg';
// import { BOOKS_DATA } from '../data/book-list';

// const extractUniqueValues = (books, key) => {
//   if (key === 'language') {
//     const languages = new Set();
//     books.forEach(book => {
//       if (book.language === 'સં./ગુ.') {
//         languages.add('સંસ્કૃત');
//         languages.add('ગુજરાતી');
//       } else {
//         languages.add(book.language);
//       }
//     });
//     return [...languages].sort();
//   }
//   return [...new Set(books.map(book => book[key]))].sort();
// };

// const BookCatalog = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedShreni, setSelectedShreni] = useState('all');
//   const [selectedLanguage, setSelectedLanguage] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);

//   const shreniOptions = extractUniqueValues(BOOKS_DATA, 'shreni');
//   const languageOptions = extractUniqueValues(BOOKS_DATA, 'language');

//   const filteredBooks = useMemo(() => {
//     return BOOKS_DATA.filter(book => {
//       const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesShreni = selectedShreni === 'all' || book.shreni === selectedShreni;
      
//       let matchesLanguage = selectedLanguage === 'all';
//       if (!matchesLanguage) {
//         if (book.language === 'સં./ગુ.') {
//           matchesLanguage = selectedLanguage === 'સંસ્કૃત' || selectedLanguage === 'ગુજરાતી';
//         } else {
//           matchesLanguage = book.language === selectedLanguage;
//         }
//       }
      
//       return matchesSearch && matchesShreni && matchesLanguage;
//     });
//   }, [searchTerm, selectedShreni, selectedLanguage]);

//   const clearFilters = () => {
//     setSearchTerm('');
//     setSelectedShreni('all');
//     setSelectedLanguage('all');
//   };

//   const hasActiveFilters = searchTerm || selectedShreni !== 'all' || selectedLanguage !== 'all';

//   return (
//     <div className="min-h-screen font-anek bg-white">
//       {/* Header */}
//       <header
//         style={{
//           backgroundImage: "url('/booklistheader.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="relative flex items-center justify-center h-24 overflow-hidden"
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60 z-0"></div>

//         {/* Content */}
//         <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
//           <div className="flex flex-col sm:flex-row items-center justify-start gap-4 sm:gap-6 lg:gap-8">
//             <div className="text-center sm:text-left">
//               <h1 className="text-2xl sm:text-4xl font-heading font-bold text-white text-center">
//                  सलंग प्रकाशन सूची
//               </h1>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Search and Filter Bar */}
//         <div className=" rounded-xl p-6 mb-8">
//           <div className="flex flex-col lg:flex-row gap-4">
//             {/* Search */}
//             <div className="flex-1 relative">
//               <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search books..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-3xl focus:outline-none focus:border-darkpink transition-colors"
//               />
//             </div>

//             {/* Filter Button (Mobile) */}
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-md"
//             >
//               <FaFilter className="w-5 h-5" />
//               Filters
//             </button>

//             {/* Desktop Filters */}
//             <div className="hidden lg:flex gap-4">
//               <select
//                 value={selectedShreni}
//                 onChange={(e) => setSelectedShreni(e.target.value)}
//                 className="px-4 py-3 border !bg-gray-100 border-gray-300 rounded-3xl focus:outline-none focus:border-darkpink bg-white min-w-[180px] cursor-pointer"
//               >
//                 <option value="all">All Shreni</option>
//                 {shreniOptions.map(shreni => (
//                   <option key={shreni} value={shreni}>{shreni}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className="px-4 py-3 border !bg-gray-100 border-gray-300 rounded-3xl focus:outline-none focus:border-darkpink bg-white min-w-[180px] cursor-pointer"
//               >
//                 <option value="all">All Languages</option>
//                 {languageOptions.map(language => (
//                   <option key={language} value={language}>{language}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Mobile Filters Dropdown */}
//           {showFilters && (
//             <div className="lg:hidden mt-4 pt-4 border-t-2 border-darkpink space-y-3">
//               <select
//                 value={selectedShreni}
//                 onChange={(e) => setSelectedShreni(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-darkpink rounded-lg focus:outline-none focus:border-darkpink bg-white"
//               >
//                 <option value="all">All Shreni</option>
//                 {shreniOptions.map(shreni => (
//                   <option key={shreni} value={shreni}>{shreni}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedLanguage}
//                 onChange={(e) => setSelectedLanguage(e.target.value)}
//                 className="w-full px-4 py-3 border-2 border-darkpink rounded-lg focus:outline-none focus:border-amber-500 bg-white"
//               >
//                 <option value="all">All Languages</option>
//                 {languageOptions.map(language => (
//                   <option key={language} value={language}>{language}</option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Active Filters Display */}
//           {hasActiveFilters && (
//             <div className="mt-4  flex flex-wrap items-center gap-2">
//               <span className="text-sm text-gray-600 font-medium">Active filters:</span>
//               {searchTerm && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 rounded-md text-sm font-medium">
//                   Search: {searchTerm}
//                 </span>
//               )}
//               {selectedShreni !== 'all' && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium">
//                   {selectedShreni}
//                 </span>
//               )}
//               {selectedLanguage !== 'all' && (
//                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm font-medium">
//                   {selectedLanguage}
//                 </span>
//               )}
//               <button
//                 onClick={clearFilters}
//                 className="inline-flex items-center gap-1 px-3 py-1 text-sm text-amber-700 hover:text-amber-900 underline font-medium"
//               >
//                 Clear all
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Results Count */}
//         <div className="mb-6 flex items-center gap-2">
//           <p className="text-gray-700 font-medium">
//             Showing {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
//           </p>
//         </div>

//         {/* Book Grid */}
//         {filteredBooks.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredBooks.map(book => (
//               <div style={{backgroundImage:"url('/bookcardbg1.jpg')",backgroundSize:"contain"}} key={book.srno} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
//                 {/* Book Image */}
//                 <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 overflow-hidden relative">
//                   <img 
//                     src={book.image} 
//                     alt={book.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <span className="text-xs font-bold text-amber-700">#{book.srno}</span>
//                   </div>
//                   <div className="absolute top-3 right-3 bg-maroon text-white px-3 py-1 rounded-full shadow-lg">
//                     <span className="text-xs font-bold uppercase tracking-wide">{book.shreni}</span>
//                   </div>
//                 </div>
                
//                 {/* Book Details */}
//                 <div className="p-5">
//                   {/* Book Name */}
//                   <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2  group-hover:text-amber-700 transition-colors">
//                     {book.name}
//                   </h3>
                  
//                   {/* Details Grid */}
//                   <div className="space-y-2 text-sm ">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Price</span>
//                       <span className={`px-3 py-1 ${book.price>0 ? 'bg-red-600' : 'bg-green-600'} text-gray-100 rounded-md font-semibold text-xs`}>
//                         {book.price>0 ? `₹ ${book.price}` : 'Free'}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Language</span>
//                       <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-md font-semibold text-xs">
//                         {book.language === 'સં./ગુ.' ? 'સંસ્કૃત/ગુજરાતી' : book.language}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Edition</span>
//                       <span className="text-gray-900 font-semibold">{book.edition}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Available</span>
//                       <span className="text-green-700 font-semibold">{book.totalCopies} copies</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 bg-white rounded-xl shadow-md">
//             <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FaBookOpen className="w-10 h-10 text-amber-600" />
//             </div>
//             <p className="text-gray-900 text-lg font-semibold mb-2">No books found</p>
//             <p className="text-gray-600 text-sm">Try adjusting your filters or search terms</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCatalog;
