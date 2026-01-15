"use client"
import React, { useState, useMemo } from 'react';
import { BOOKS_DATA } from '@/app/data/book-list';
import { detectLanguage } from '@/app/utils/detectLanguage.utils';

import { FaBookOpen, FaFilter, FaInfo, FaInfoCircle, FaSearch, FaWhatsapp } from 'react-icons/fa';
import { FaMarsAndVenus, FaX } from 'react-icons/fa6';


const getBookThumbnail = (srno) => {
  return `/book-thumbnails/BOOK_THUMB-${srno}.jpg`;
};

const extractUniqueValues = (books, key) => {
  if (key === 'language') {
    const languages = new Set();
    books.forEach(book => {
      if (book.language === 'સં./ગુ.') {
        languages.add('સંસ્કૃત');
        languages.add('गुजराती');
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
  const [selectedShreni, setSelectedShreni] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [showPageDropdown, setShowPageDropdown] = useState(false);
  const [pageSearchTerm, setPageSearchTerm] = useState('');
  
  const itemsPerPage = 20;

  const shreniOptions = extractUniqueValues(BOOKS_DATA, 'shreni');
  const languageOptions = extractUniqueValues(BOOKS_DATA, 'language');

  const filteredBooks = useMemo(() => {
    return BOOKS_DATA.filter(book => {
      const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesShreni = selectedShreni.length === 0 || selectedShreni.includes(book.shreni);
      
      let matchesLanguage = selectedLanguage.length === 0;
      if (!matchesLanguage) {
        if (book.language === 'સં./ગુ.') {
          matchesLanguage = selectedLanguage.includes('સંસ્કૃત') || selectedLanguage.includes('गुजराती');
        } else {
          matchesLanguage = selectedLanguage.includes(book.language);
        }
      }

      const matchesPrice = selectedPriceFilter === 'all' || 
        (selectedPriceFilter === 'free' && book.price === 0) ||
        (selectedPriceFilter === 'priced' && book.price > 0);
      
      return matchesSearch && matchesShreni && matchesLanguage && matchesPrice;
    });
  }, [searchTerm, selectedShreni, selectedLanguage, selectedPriceFilter]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = filteredBooks.slice(startIndex, endIndex);

    const SHRENI_DESCRIPTIONS = {
  'अध्ययन साहित्यश्रेणी': {
    'गुजराती': 'चतुर्विध संघ को ज्ञानप्राप्ति में उपयोगी बने ऐसी पुस्तकें।',
    'हिन्दी': 'चतुर्विध संघ को ज्ञानप्राप्ति में उपयोगी बने ऐसी पुस्तकें।',
    'संस्कृत': 'चतुर्विध संघ को ज्ञानप्राप्ति में उपयोगी बने ऐसी पुस्तकें।'
  },
  'अप्रगट राससाहित्यश्रेणी': {
    'गुजराती': 'मध्यकालीन रासप्रकारक साहित्य की विश्व में प्रथम बार हस्तप्रतों  आधार पर प्रकाशित पुस्तकें।',
    'हिन्दी': 'मध्यकालीन रासप्रकारक साहित्य की विश्व में प्रथम बार हस्तप्रतों  आधार पर प्रकाशित पुस्तकें।',
    'संस्कृत': 'मध्यकालीन रासप्रकारक साहित्य की विश्व में प्रथम बार हस्तप्रतों  आधार पर प्रकाशित पुस्तकें।'
  },
  'अप्रगट साहित्यश्रेणी': {
    'गुजराती': 'सदियों पुराने शास्त्र, जो आज तक सिर्फ हस्तप्रत (मैनुस्क्रिप्ट) में थे, उनका अथक परिश्रम के संशोधन करके समग्र विश्व में किये गए प्रथम प्रकाशनों की  पुस्तकें। ',
    'हिन्दी': 'सदियों पुराने शास्त्र, जो आज तक सिर्फ हस्तप्रत (मैनुस्क्रिप्ट) में थे, उनका अथक परिश्रम के संशोधन करके समग्र विश्व में किये गए प्रथम प्रकाशनों की  पुस्तकें। ',
    'संस्कृत': 'सदियों पुराने शास्त्र, जो आज तक सिर्फ हस्तप्रत (मैनुस्क्रिप्ट) में थे, उनका अथक परिश्रम के संशोधन करके समग्र विश्व में किये गए प्रथम प्रकाशनों की  पुस्तकें। '
  },
  'किशोर कथाश्रेणी': {
    'गुजराती': 'किशोरों के लिए प्रेरणात्मक कहानी की पुस्तकें।',
    'हिन्दी': '',
    'संस्कृत': ''
  },
  'ग्रंथोद्धार साहित्यश्रेणी': {
    'गुजराती': 'पूर्व संपादित शास्त्रों के हस्तप्रतो आदि के आधार पर किये गए नूतन संपादन की पुस्तकें।',
    'हिन्दी': 'पूर्व संपादित शास्त्रों के हस्तप्रतो आदि के आधार पर किये गए नूतन संपादन की पुस्तकें।',
    'संस्कृत': 'पूर्व संपादित शास्त्रों के हस्तप्रतो आदि के आधार पर किये गए नूतन संपादन की पुस्तकें।'
  },
  'नित्योपयोगी साहित्यश्रेणी': {
    'गुजराती': 'चतुर्विध संघ को आराधना में हमेशा उपयोगी बने ऐसी हिन्दी पुस्तकें।',
    'हिन्दी': 'चतुर्विध संघ को ज्ञानप्राप्ति में उपयोगी बने ऐसी पुस्तकें।',
    'संस्कृत': ''
  },
  'प्रबुद्ध कथाश्रेणी': {
    'गुजराती': 'प्रबुद्धों के लिए आधुनिक भाषा में लिखी अद्भुत कथाओं की पुस्तकें।',
    'हिन्दी': '',
    'संस्कृत': ''
  },
  'प्रवचन साहित्यश्रेणी': {
    'गुजराती': 'आ.श्री योगतिलकसूरीजी के प्रवचनों की गुजराती पुस्तकें। इन प्रवचनों से औसतन दसवें दिन एक दीक्षा होती है।',
    'हिन्दी': 'आचार्यश्री के प्रवचनों की हिंदी पुस्तकें। जिसके प्रभाव से पूरे भारत के जैन बंधु लाभान्वित होते है। ',
    'संस्कृत': 'आचार्यश्री  प्रवचनों को भारत की विभिन्न भाषाओं में प्रसारित करने वाली पुस्तके।',
    'अंग्रेजी': 'भारत और विदेशों में रहने वाले अंग्रेजी भाषा को हि जानने वाले जिज्ञासुओं के लिए आचार्यश्री के प्रवचनों को अंग्रेजी भाषा में प्रसारित करने वाली पुस्तकें।'
  },
  'बालानंद साहित्यश्रेणी': {
    'गुजराती': 'बच्चों में संस्कार रोपने वाली सचित्र कहानियों की गुजराती पुस्तकें। ',
    'हिन्दी': 'बच्चों में संस्कार रोपने वाली सचित्र कहानियों की हिन्दी पुस्तकें। ',
    'संस्कृत': 'बच्चों में संस्कार रोपने वाली सचित्र कहानियों की संस्कृत पुस्तकें। '
  },
  'वाचना साहित्यश्रेणी': {
    'गुजराती': 'विशेषरूप से श्रमण-श्रमणीओ को दी गयी वाचनाओ  पुस्तकें। जो कि चतुर्विध संघ को भी उपयोगी बनाती है।',
    'हिन्दी': 'गुजराती वाचनाओं के हिंदी अनुवाद की पुस्तकें। जो कि समग्र भारत के चतुर्विध संघ उपयोगी बनाती है।',
    'संस्कृत': 'वाचनार्थं रसप्रदं साहित्यम्, साहित्यिकरुचेः वृद्धिः'
  },
  'विविध साहित्यश्रेणी': {
    'हिन्दी': 'विविध विषयों की हिन्दी पुस्तकें।',
    'गुजराती': 'गुरुभगवन्तो की जीवनियाँ, अंजनशलाका के रहस्य, पूजा लिए मार्गदर्शन, भक्तिसाहित्य जैसे विविध विषयों की गुजराती पुस्तकें। जिन में कई पुस्तकें चतुरंगी एवं है।',
    'संस्कृत': 'विविध विषयों की संस्कृत पुस्तकें।'
  },
  'शास्त्र-शेवधि-रत्नम': {
    'गुजराती': 'जैनशासन के प्राचीन महापुरुषों ने बनाये ग्रंथो की विषयानुरूप सर्वग्राही संकलनवाली ग्रंथश्रेणी। ',
    'हिन्दी': 'जैनशासन के प्राचीन महापुरुषों ने बनाये ग्रंथो की विषयानुरूप सर्वग्राही संकलनवाली ग्रंथश्रेणी। ',
    'संस्कृत': 'जैनशासन के प्राचीन महापुरुषों ने बनाये ग्रंथो की विषयानुरूप सर्वग्राही संकलनवाली ग्रंथश्रेणी। '
  },
  'संस्कारशाला साहित्यश्रेणी': {
    'गुजराती': '',
    'हिन्दी': '',
    'संस्कृत': ''
  },
  'सार्थ साहित्यश्रेणी': {
    'गुजराती': 'जैनशासन के महत्वपूर्ण सूत्रों को गुजराती अर्थ के साथ समझाने वाली पुस्तकें।',
    'हिन्दी': 'जैनशासन के महत्वपूर्ण सूत्रों को गुजराती अर्थ के साथ समझाने वाली पुस्तकें।',
    'संस्कृत': 'जैनशासन के महत्वपूर्ण सूत्रों को गुजराती अर्थ के साथ समझाने वाली पुस्तकें।'
  }
};

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedShreni, selectedLanguage, selectedPriceFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowPageDropdown(false);
    setPageSearchTerm('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPaginationNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const getFilteredPageNumbers = () => {
    if (!pageSearchTerm) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    return Array.from({ length: totalPages }, (_, i) => i + 1)
      .filter(page => page.toString().includes(pageSearchTerm));
  };

  const getShreniDescription = (shreni, language) => {
    const descriptions = SHRENI_DESCRIPTIONS[shreni];
    if (!descriptions) return '';
    
    // Try to match language, fallback to first available
    if (language === 'गुजराती' && descriptions['गुजराती']) {
      return descriptions['गुजराती'];
    } else if (language === 'हिन्दी' && descriptions['हिन्दी']) {
      return descriptions['हिन्दी'];
    } else if (language === 'संस्कृत' && descriptions['संस्कृत']) {
      return descriptions['संस्कृत'];
    }
    
    // Fallback to first available description
    return descriptions['गुजराती'] || descriptions['हिन्दी'] || descriptions['संस्कृत'] || '';
  };

  const handleShreniToggle = (shreni) => {
    setSelectedShreni(prev => 
      prev.includes(shreni) 
        ? prev.filter(s => s !== shreni)
        : [...prev, shreni]
    );
  };

  const handleLanguageToggle = (language) => {
    setSelectedLanguage(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  // Loading Skeleton Component
  const BookCardSkeleton = () => (
    <div className="bg-white p-2 rounded-sm shadow-sm border border-gray-200 animate-pulse">
     loading
    </div>
  );

  // Sidebar Filter Component
  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'h-full overflow-y-auto' : ''}`}>
      {/* Mobile Header with Close Button */}
      {isMobile && (
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold font-heading text-gray-900">Filters</h2>
          <button 
            onClick={() => setShowMobileFilters(false)} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaX className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      )}
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold font-heading text-gray-900 mb-4 flex items-center justify-between">
          श्रेणी 
        </h3>
        <div className="space-y-2">
          {shreniOptions.map(shreni => {
            const count = BOOKS_DATA.filter(book => book.shreni === shreni).length;
            return (
              <label key={shreni} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedShreni.includes(shreni)}
                  onChange={() => handleShreniToggle(shreni)}
                  className="w-4 h-4 text-maroon focus:ring-maroon rounded"
                />
                <span className="text-sm font-heading text-gray-700 group-hover:text-maroon">
                  {shreni} ({count})
                </span>
              </label>
            );
          })}
        </div>
        {selectedShreni.length > 0 && (
          <button
            onClick={() => setSelectedShreni([])}
            className="mt-3 text-sm text-maroon hover:text-maroon font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="mb-6 pt-6 border-t border-gray-300">
        <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">भाषा</h3>
        <div className="space-y-2">
          {languageOptions.map(language => {
            const count = BOOKS_DATA.filter(book => {
              if (book.language === 'સં./ગુ.') {
                return language === 'સંસ્કૃત' || language === 'गुजराती';
              }
              return book.language === language;
            }).length;
            return (
              <label key={language} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedLanguage.includes(language)}
                  onChange={() => handleLanguageToggle(language)}
                  className="w-4 h-4 text-maroon focus:ring-maroon rounded"
                />
                <span className="text-sm font-heading text-gray-700 group-hover:text-maroon">
                  {language} ({count})
                </span>
              </label>
            );
          })}
        </div>
        {selectedLanguage.length > 0 && (
          <button
            onClick={() => setSelectedLanguage([])}
            className="mt-3 text-sm text-maroon hover:text-maroon font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="mb-6 pt-6  border-t border-gray-300">
        <h3 className="text-lg font-bold font-heading text-gray-900 mb-4">मूल्य</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={selectedPriceFilter === 'all'}
              onChange={() => setSelectedPriceFilter('all')}
              className="w-4 h-4 text-maroon focus:ring-maroon"
            />
            <span className="text-sm text-gray-700 group-hover:text-maroon">
              All Books ({BOOKS_DATA.length})
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={selectedPriceFilter === 'free'}
              onChange={() => setSelectedPriceFilter('free')}
              className="w-4 h-4 text-maroon focus:ring-maroon"
            />
            <span className="text-sm font-heading text-gray-700 group-hover:text-maroon">
              अमूल्य ({BOOKS_DATA.filter(book => book.price === 0).length})
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="radio"
              name="price"
              checked={selectedPriceFilter === 'priced'}
              onChange={() => setSelectedPriceFilter('priced')}
              className="w-4 h-4 text-maroon focus:ring-maroon"
            />
            <span className="text-sm font-heading text-gray-700 group-hover:text-maroon">
              मूल्य के साथ ({BOOKS_DATA.filter(book => book.price > 0).length})
            </span>
          </label>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
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
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:justify-center">
            <h1 className="text-2xl font-heading text-center sm:text-4xl font-bold text-white">
              सलंग प्रकाशन सूची
            </h1>
            <button 
              onClick={() => setShowMobileFilters(true)}
              className="lg:hidden bg-white/90 hover:bg-white p-2.5 rounded-md transition-colors shadow-lg"
            >
              <FaFilter className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 in-w-0">
            {/* Results Info with Go to Page */}
            <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
              <p className="text-sm text-gray-600">
                Showing {startIndex + 1}–{Math.min(endIndex, filteredBooks.length)} of {filteredBooks.length} results
              </p>
              
              {/* Go to Page Dropdown */}
              
            </div>

            {/* Books Grid */}
            {isLoading ? (
              <div className="grid grid-cols-2 font-heading lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
                {[...Array(12)].map((_, index) => (
                  <BookCardSkeleton key={index} />
                ))}
              </div>
            ) : currentBooks.length > 0 ? (
              <>
                <div className="grid grid-cols-2 cursor-pointer font-heading lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
                  {currentBooks.map(book => (
                    <div 
                      key={book.srno} 
                      onClick={() => setSelectedBook({ image: book.image, name: book.name })}
                      className="bg-white rounded-sm shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
                    >
                      {/* Image */}
                      <div 
                        className="relative overflow-hidden bg-gray-100 cursor-pointer"
                        
                      >
                        <img 
  src={getBookThumbnail(book.srno)} 
  alt={book.name}
  className="w-full h-full max-h-[8rem] object-contain group-hover:scale-105 transition-transform duration-300"
  loading="lazy"
  onError={(e) => {
    // Fallback to original image if thumbnail fails
    e.target.src = book.image;
  }}
/>
                        {book.price > 0 ? (
                          <div className="absolute top-0 right-0 bg-gray-300  px-1.5 py-0.5  text-[10px] font-bold">₹{book.price}</div>
                        ) : (
                          <div className="absolute top-0 right-0 bg-gray-300   px-1.5 py-0.5  text-[10px] font-bold">अमूल्य</div>
                        )}

                          <div className="absolute top-0 left-0 border text-white font-sans bg-maroon  px-1.5 py-0.5 text-sm font-bold">{book.srno}</div>
                      </div>

                      {/* Content */}
                      <div className="px-2">
                        {/* Shreni with info icon and tooltip */}
                        <div className="text-[0.6rem] text-gray-500 pt-1 uppercase mb-0.5 flex items-center gap-1">
                          <span className="truncate">
                            {book.shreni} - {book.shreniCode.split('-')[1]}
                          </span>
                          <div className="relative flex-shrink-0">
                            <FaInfoCircle 
                              className="w-3 h-3 mb-1 text-gray-400 hover:text-gray-600 cursor-help active:text-gray-600" 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveTooltip(activeTooltip === book.srno ? null : book.srno);
                              }}
                              onMouseEnter={() => setActiveTooltip(book.srno)}
                              onMouseLeave={() => setActiveTooltip(null)}
                            />
                            {/* Tooltip - Fixed for mobile with touch support */}
                            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 max-w-[calc(100vw-2rem)] bg-gray-900 text-white text-[10px] rounded p-2 shadow-xl z-[100] transition-all duration-200 ${
                              activeTooltip === book.srno ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                            }`}>
                              <div className="font-semibold mb-1">{book.shreni}</div>
                              <div className="text-gray-300 leading-relaxed">
                                {getShreniDescription(book.shreni, book.language) || 'विवरण उपलब्ध नहीं है।'}
                              </div>
                              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                                <div className="border-4 border-transparent border-t-gray-900"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className={`${detectLanguage(book.name) === "Hindi" ? "font-heading" : "font-anek"} text-sm sm:text-sm py-1 font-semibold text-gray-900 mb-1 line-clamp-2 leading-tight group-hover:text-maroon transition-colors`}>
                        {book.name}
                        </h3>

                        {/* Additional Details */}
                        <div className="space-y-0.5 text-xs text-gray-600 mb-1">
                          <div className="flex  justify-between">
                            <span className='pt-1'>भाषा:</span>
                            <span className="font-medium pt-1  truncate ml-1">{book.language === 'સં./ગુ.' ? 'સં/गु' : book.language}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>आवृत्ति:</span>
                            <span className="font-medium">{book.edition}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>प्रतियां:</span>
                            <span className="font-medium">{book.totalCopies}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className='flex sm:flex-row flex-col items-center sm:items-start justify-between'>
                  <div className="flex justify-center items-center gap-2 mb-8">
                    {getPaginationNumbers().map((page, index) => (
                      page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-500">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`min-w-[40px] px-3 py-2 text-sm rounded-sm font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-red-800 text-white'
                              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                    {currentPage < totalPages && (
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        →
                      </button>
                    )}
                  </div>
                  {totalPages > 1 && (
                <div className="relative">
                  <button
                    onClick={() => setShowPageDropdown(!showPageDropdown)}
                    className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-700">Go to page {currentPage}</span>
                    <svg 
                      className={`w-4 h-4 text-gray-500 transition-transform ${showPageDropdown ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {showPageDropdown && (
                    <>
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => {
                          setShowPageDropdown(false);
                          setPageSearchTerm('');
                        }}
                      />
                      
                      {/* Dropdown Content */}
                      <div className="absolute bottom-0 right-0 mt-2 w-36 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                        {/* Search Input */}
                        <div className="p-3 border-b border-gray-200">
                          <input
                            type="text"
                            placeholder="Search"
                            value={pageSearchTerm}
                            onChange={(e) => setPageSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>

                        {/* Page List */}
                        <div className="max-h-64 overflow-y-auto">
                          {getFilteredPageNumbers().length > 0 ? (
                            getFilteredPageNumbers().map(page => (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                  currentPage === page 
                                    ? 'bg-red-50 text-red-800 font-semibold' 
                                    : 'text-gray-700'
                                }`}
                              >
                                Page {page}
                                {currentPage === page && (
                                  <span className="float-right text-red-600">✓</span>
                                )}
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-sm text-gray-500 text-center">
                              No pages found
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
              </div>
                )}
              </>
            ) : (
              <div className="min-h-[600px] flex items-center justify-center">
                <div className="text-center py-16 bg-white rounded-lg shadow-sm w-full">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaBookOpen className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold mb-2">No books found</p>
                  <p className="text-gray-600 text-sm">Try adjusting your filters or search terms</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
            onClick={() => setShowMobileFilters(false)} 
          />
          <div className={`absolute left-0 top-0 bottom-0 w-80 max-w-[85%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            showMobileFilters ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-6 h-full overflow-y-auto">
              <FilterSidebar isMobile={true} />
            </div>
          </div>
        </div>
      )}

      {selectedBook && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedBook(null)}
  >
    <div
      className="relative bg-white dark:bg-gray-900 rounded-md shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] animate-fadeIn"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
        <h2 className={`${detectLanguage(selectedBook.name) === "Hindi" ? "font-heading" : "font-anek"} text-lg font-semibold text-gray-800 dark:text-gray-200`}>
          {selectedBook.name || "Book Preview"}
        </h2>
        <button
          onClick={() => setSelectedBook(null)}
          className="text-gray-300 bg-red-600 p-2 cursor-pointer rounded-full transition-colors"
        >
          <FaX className="w-3 h-3" />
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center p-4 items-center bg-gray-50 dark:bg-gray-950">
        <img
          src={selectedBook.image}
          alt={selectedBook.name}
          className="max-w-full max-h-[75vh] object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
)}

      {/* Footer Contact */}
      <div className="bg-maroon font-heading text-white py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium mb-2">अध्यात्म परिवार पुस्तक विभाग संपर्क:</p>
          <div className="flex font-sans items-center justify-center gap-3 text-xl font-bold text-gray-200">
            7676769600
            <a
              href="https://wa.me/917676769600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
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
//         languages.add('गुजराती');
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
//           matchesLanguage = selectedLanguage === 'સંસ્કૃત' || selectedLanguage === 'गुजराती';
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
//               className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-maroon text-white rounded-lg hover:from-amber-700 hover:to-maroon transition-all shadow-md"
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
//               <span className="text-sm .600 font-medium">Active filters:</span>
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
//           <p className=".700 font-medium">
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
//                   <h3 className="text-lg font-bold .900 mb-3 line-clamp-2  group-hover:text-amber-700 transition-colors">
//                     {book.name}
//                   </h3>
                  
//                   {/* Details Grid */}
//                   <div className="space-y-2 text-sm ">
//                     <div className="flex justify-between items-center">
//                       <span className=".600">Price</span>
//                       <span className={`px-3 py-1 ${book.price>0 ? 'bg-red-600' : 'bg-green-600'} .100 rounded-md font-semibold text-xs`}>
//                         {book.price>0 ? `₹ ${book.price}` : 'Free'}
//                       </span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className=".600">Language</span>
//                       <span className="px-3 py-1 bg-amber-50 text-amber-800 rounded-md font-semibold text-xs">
//                         {book.language === 'સં./ગુ.' ? 'સંસ્કૃત/गुजराती' : book.language}
//                       </span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className=".600">Edition</span>
//                       <span className=".900 font-semibold">{book.edition}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className=".600">Available</span>
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
//             <p className=".900 text-lg font-semibold mb-2">No books found</p>
//             <p className=".600 text-sm">Try adjusting your filters or search terms</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BookCatalog;
