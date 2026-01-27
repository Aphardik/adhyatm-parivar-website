"use client"
import { useState, useMemo } from 'react';
import { BiSearch, BiChevronDown, BiChevronUp, BiPhone, BiMapPin } from 'react-icons/bi';
import { IoLocation } from "react-icons/io5";
import { FiBook } from "react-icons/fi";
import hiSuddhDravyaData from "@/app/data/sections/hi/suddhDravyaPraptisthan.json";
import hiPustakData from "@/app/data/sections/hi/pustakPraptisthan.json";
import guSuddhDravyaData from "@/app/data/sections/gu/suddhDravyaPraptisthan.json";
import guPustakData from "@/app/data/sections/gu/pustakPraptisthan.json";
import HexagonalSvg from './HexagonalSvg';
import Link from 'next/link';
import CallToActionButton from './CallToActionButton';
import { useLanguage } from './LanguageContext';

const Praptisthan = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('suddh-dravya');
  const [collapsedCities, setCollapsedCities] = useState({});

  // Select data based on language
  const currentData = useMemo(() => {
    if (activeTab === 'suddh-dravya') {
      return language === 'gu' ? guSuddhDravyaData : hiSuddhDravyaData;
    } else {
      return language === 'gu' ? guPustakData : hiPustakData;
    }
  }, [activeTab, language]);

  const tabTitle = activeTab === 'suddh-dravya' ? t('praptisthan.tabs.suddhDravya') : t('praptisthan.tabs.pustak');

  // Extract unique areas from data
  const processedData = useMemo(() => {
    const processed = {};
    Object.keys(currentData).forEach(city => {
      const areas = [...new Set(currentData[city].map(entry => entry.area))];
      processed[city] = areas;
    });
    return processed;
  }, [currentData]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return processedData;

    const filtered = {};
    Object.keys(processedData).forEach(city => {
      const filteredAreas = processedData[city].filter(area =>
        area.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredAreas.length > 0 || city.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered[city] = city.toLowerCase().includes(searchTerm.toLowerCase()) 
          ? processedData[city] 
          : filteredAreas;
      }
    });
    return filtered;
  }, [searchTerm, processedData]);

  const toggleCityCollapse = (city) => {
    setCollapsedCities(prev => ({
      ...prev,
      [city]: !prev[city]
    }));
  };

  const CityCard = ({ city, areas }) => (
    <div className="bg-lightpink/20 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div 
        className="bg-maroon text-whitey cursor-pointer hover:bg-maroon/90 transition-colors"
        onClick={() => toggleCityCollapse(city)}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <h3 className="text-lg font-heading font-bold flex items-center gap-2">
            <BiMapPin className="w-5 h-5" />
            {city}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm bg-whitey/20 px-2 py-1 font-body rounded-full">
              {areas.length} {t('praptisthan.locationUnit')}
            </span>
            {collapsedCities[city] ? (
              <BiChevronDown className="w-6 h-6" />
            ) : (
              <BiChevronUp className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      
      <div 
        className={`overflow-auto transition-all duration-300 ease-in-out ${
          collapsedCities[city] ? 'max-h-0 opacity-0' : 'max-h-none opacity-100'
        }`}
        style={{
          maxHeight: collapsedCities[city] ? '0px' : '3000px'
        }}
      >
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-whitey border border-gray-200 rounded-lg px-4 py-3 hover:bg-lightpink/30 transition-colors duration-200"
              >
                <span className="text-heading font-body font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const totalLocations = Object.values(filteredData).reduce((sum, areas) => sum + areas.length, 0);

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="bg-transparent text-sm sm:text-base backdrop-blur-lg shadow-md sticky mb-8 top-24 z-10">
        <div className="max-w-7xl flex items-center justify-between flex-col gap-2 sm:gap-0 sm:flex-row mx-auto py-3">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex bg-whitey rounded-lg border border-gray-300 overflow-auto">
              <button
                onClick={() => {
                  setActiveTab('suddh-dravya');
                  setCollapsedCities({});
                }}
                className={`flex items-center cursor-pointer gap-2 px-2 sm:px-6 py-3 font-heading transition-colors ${
                  activeTab === 'suddh-dravya'
                    ? 'bg-maroon text-whitey'
                    : 'bg-whitey text-heading hover:bg-lightpink'
                }`}
              >
                <IoLocation className="hidden sm:block w-5 h-5" />
                {t('praptisthan.tabs.suddhDravya')}
              </button>
              <button
                onClick={() => {
                  setActiveTab('pustak');
                  setCollapsedCities({});
                }}
                className={`flex items-center gap-2 cursor-pointer px-3 sm:px-6 py-3 font-heading transition-colors ${
                  activeTab === 'pustak'
                    ? 'bg-maroon text-whitey'
                    : 'bg-whitey text-heading hover:bg-lightpink'
                }`}
              >
                <FiBook className="hidden sm:block w-5 h-5" />
                {t('praptisthan.tabs.pustak')}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-2xl rounded-3xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BiSearch className="h-5 w-5 text-content" />
            </div>
            <input
              type="text"
              placeholder={t('praptisthan.searchPlaceholder')}
              className="w-full placeholder:font-body bg-whitey placeholder:text-content pl-10 pr-4 py-3 text-sm border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon/60 focus:border-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        {Object.keys(filteredData).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-content font-body">
              {activeTab === 'suddh-dravya' ? t('praptisthan.noResults.suddhDravya') : t('praptisthan.noResults.pustak')}
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.keys(filteredData).map(city => (
              <CityCard key={city} city={city} areas={filteredData[city]} />
            ))}
            
            {/* Call to Action Card */}
            <CallToActionButton 
             heading={t('praptisthan.cta')}
                id="contactus-cta"
                href={
                  "https://wa.me/918448444050"
                }
            />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-whitey border-t-2 border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 font-heading text-center text-content">
          <p>{t('praptisthan.footer').replace('{count}', totalLocations).replace('{title}', tabTitle)}</p>
        </div>
      </div>
    </div>
  );
};

export default Praptisthan;


// "use client"
// import { useState, useMemo } from 'react';
// import { BiBuilding, BiLocationPlus, BiMapPin, BiPhone, BiSearch, BiChevronDown, BiChevronUp } from 'react-icons/bi';
// import { IoLocation } from "react-icons/io5";
// import { FiBook } from "react-icons/fi";
// import {suddhDravyaPraptisthanData} from "@/app/data/suddhDravyaPraptisthan"
// import {pustakPraptisthanData} from "@/app/data/pustakPraptisthan"
// import HexagonalSvg from './HexagonalSvg';

// const Praptisthan = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [activeTab, setActiveTab] = useState('suddh-dravya');
//   const [collapsedCities, setCollapsedCities] = useState({});

//   const currentData = activeTab === 'suddh-dravya' ? suddhDravyaPraptisthanData : pustakPraptisthanData;
//   const tabTitle = activeTab === 'suddh-dravya' ? 'शुद्धद्रव्य प्राप्तिस्थान' : 'पुस्तक प्राप्तिस्थान';

//   const filteredData = useMemo(() => {
//     if (!searchTerm) return currentData;

//     const filtered = {};
//     Object.keys(currentData).forEach(city => {
//       const filteredEntries = currentData[city].filter(entry =>
//         entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         entry.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         entry.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         entry.phone.includes(searchTerm) ||
//         entry.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         city.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       if (filteredEntries.length > 0) {
//         filtered[city] = filteredEntries;
//       }
//     });
//     return filtered;
//   }, [searchTerm, currentData]);

//   const toggleCityCollapse = (city) => {
//     setCollapsedCities(prev => ({
//       ...prev,
//       [city]: !prev[city]
//     }));
//   };

//   const PratisthanCard = ({ entry }) => (
//     <div className="bg-lightpink/30 shadow-md  hover:shadow-lg  p-6 font-body relative  transition-colors">
//       <HexagonalSvg accentColor="red"/>
//       <div className="flex flex-col space-y-3">
//         <h3 className="text-xl font-bold text-heading">{entry.name}</h3>
        
//         <div className="flex items-start space-x-2">
//           <BiBuilding className="w-5 h-5 text-content mt-1 flex-shrink-0" />
//           <span className="text-content font-medium">{entry.area}</span>
//         </div>
        
//         <div className="flex items-start space-x-2">
//           <BiMapPin className="w-5 h-5 text-content mt-1 flex-shrink-0" />
//           <div className="text-heading">
//             <p className="mb-1">{entry.address}</p>
//             <p className="font-medium">{entry.city}</p>
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <BiPhone className="w-5 h-5 text-gray-600 flex-shrink-0" />
//           <a 
//             href={`tel:${entry.phone}`}
//             className="text-blue-600 font-medium hover:underline"
//           >
//             {entry.phone}
//           </a>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen py-8">
//       {/* Header */}
//       <div className="bg-transparent backdrop-blur-lg shadow-md sticky mb-8 top-16 z-10">
//         <div className="max-w-7xl flex items-center justify-between flex-col gap-2 sm:gap-0 sm:flex-row mx-auto px-4 py-3">
//           {/* Tabs */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex bg-whitey rounded-lg border border-gray-300 overflow-hidden">
//               <button
//                 onClick={() => {
//                   setActiveTab('suddh-dravya');
//                   setCollapsedCities({});
//                 }}
//                 className={`flex items-center cursor-pointer gap-2 px-2 sm:px-6 py-3 font-heading transition-colors ${
//                   activeTab === 'suddh-dravya'
//                     ? 'bg-maroon text-whitey'
//                     : 'bg-whitey text-heading hover:bg-lightpink'
//                 }`}
//               >
//                 <IoLocation className="hidden sm:block w-5 h-5" />
//                 शुद्धद्रव्य प्राप्तिस्थान
//               </button>
//               <button
//                 onClick={() => {
//                   setActiveTab('pustak');
//                   setCollapsedCities({});
//                 }}
//                 className={`flex items-center gap-2  cursor-pointer px-3 sm:px-6 py-3 font-heading transition-colors ${
//                   activeTab === 'pustak'
//                     ? 'bg-maroon text-whitey'
//                     : 'bg-whitey text-heading hover:bg-lightpink'
//                 }`}
//               >
//                 <FiBook className="hidden sm:block w-5 h-5" />
//                 पुस्तक प्राप्तिस्थान
//               </button>
//             </div>
//           </div>

//           {/* Search Bar */}
//           <div className="relative w-full max-w-2xl  rounded-3xl">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <BiSearch className="h-5 w-5 text-content" />
//             </div>
//             <input
//               type="text"
//               placeholder="नाम, फोन, पता, या शहर से खोजें..."
//               className="w-full placeholder:font-body bg-whitey placeholder:text-content pl-10 pr-4 py-3 text-sm border rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-maroon/60 focus:border-gray-400"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-4">
//         {Object.keys(filteredData).length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-xl text-content font-body">
//               {activeTab === 'suddh-dravya' ? 'कोई शुद्धद्रव्य प्राप्तिस्थान नहीं मिला' : 'कोई पुस्तक प्राप्तिस्थान नहीं मिला'}
//             </p>
//           </div>
//         ) : (
//           Object.keys(filteredData).map(city => (
//             <div key={city} className="">
//               {/* City Header - Clickable */}
//               <div 
//                 className="mb-6 bg-maroon text-whitey cursor-pointer hover:bg-maroon/90 transition-colors"
//                 onClick={() => toggleCityCollapse(city)}
//               >
//                 <div className="flex items-center justify-between px-4 py-3">
//                   <h2 className="text-base sm:text-lg font-heading text-heading">
//                     {city} - {filteredData[city].length} {tabTitle}
//                   </h2>
//                   <div className="text-background">
//                     {collapsedCities[city] ? (
//                       <BiChevronDown className="w-6 h-6" />
//                     ) : (
//                       <BiChevronUp className="w-6 h-6" />
//                     )}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Cards Grid with Animation */}
//               <div 
//                 className={`overflow-hidden transition-all duration-100 ease-in-out ${
//                   collapsedCities[city] ? 'max-h-0 opacity-0' : 'max-h-none opacity-100'
//                 }`}
//                 style={{
//                   maxHeight: collapsedCities[city] ? '0px' : '5000px'
//                 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
//                   {filteredData[city].map((entry, index) => (
//                     <PratisthanCard key={index} entry={entry} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Footer */}
//       <div className="bg-whitey border-t-2 border-gray-300 mt-12">
//         <div className="max-w-7xl mx-auto px-4 py-6 font-heading text-center text-content">
//           <p>कुल {Object.values(filteredData).reduce((sum, entries) => sum + entries.length, 0)} {tabTitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Praptisthan;