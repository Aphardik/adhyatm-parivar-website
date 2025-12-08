"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Card3DCarousel = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  
  // Group items into pages of 3
  const itemsPerPage = 3;
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % pages.length);
      setIsAnimating(false);
      setDirection(null);
    }, 400);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
      setIsAnimating(false);
      setDirection(null);
    }, 400);
  };

  const getVisibleCards = () => {
    const visible = [];
    for (let i = 0; i < Math.min(3, pages.length); i++) {
      const index = (currentIndex + i) % pages.length;
      visible.push({ index, position: i });
    }
    return visible;
  };

  const getCardStyle = (position) => {
    if (direction === 'next') {
      if (position === 0) {
        return {
          transform: 'translateX(-120%) translateY(20px) rotate(-15deg) scale(0.9)',
          opacity: 0,
          zIndex: 10,
          backgroundColor: '#901E3E',
        };
      } else if (position === 1) {
        return {
          transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          opacity: 1,
          zIndex: 30,
           backgroundColor: '#901E3E',
        };
      } else if (position === 2) {
        return {
          transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
          opacity: 0.7,
          zIndex: 20,
           backgroundColor: '#901E3E',
        };
      }
    } else if (direction === 'prev') {
      if (position === 0) {
        return {
          transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          opacity: 1,
          zIndex: 30,
           backgroundColor: '#901E3E',
        };
      } else if (position === 1) {
        return {
          transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
          opacity: 0.7,
          zIndex: 20,
           backgroundColor: '#901E3E',
        };
      } else if (position === 2) {
        return {
          transform: 'translateX(120%) translateY(20px) rotate(15deg) scale(0.9)',
          opacity: 0,
          zIndex: 10,
           backgroundColor: '#901E3E',
        };
      }
    } else {
      if (position === 0) {
        return {
          transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
          opacity: 1,
          zIndex: 30,
           backgroundColor: '#901E3E',
        };
      } else if (position === 1) {
        return {
          transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
          opacity: 0.7,
          zIndex: 20,
           backgroundColor: '#901E3E',
        };
      } else if (position === 2) {
        return {
          transform: 'translateX(8%) translateY(16px) rotate(6deg) scale(0.92)',
          opacity: 0.4,
          zIndex: 10,
           backgroundColor: '#901E3E',
        };
      }
    }
  };

  return (
    <div className="w-full py-2">
      {/* Title */}
      {/* <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-900 via-amber-700 to-red-900 bg-clip-text text-transparent">
          {title}
        </h3>
      </div> */}

      {/* Deck Stack Container */}
      <div className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-center px-4">
        <div className="relative w-full max-w-2xl min-h-[420px] sm:min-h-[480px] mx-auto" >
          {getVisibleCards().map(({ index, position }) => (
            <div
              key={`${index}-${position}`}
              className="absolute inset-0 transition-all duration-400 ease-out"
              style={{
                ...getCardStyle(position),
                pointerEvents: position === 0 ? 'auto' : 'none',
              }}
            >
              <div className="bg-gradient-to-br from-white via-amber-50/30 to-white  shadow-2xl border border-amber-200/50 p-6 md:p-8 h-full">
                <div className="space-y-4 bg-white">
                  {pages[index].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-amber-100/40 via-pink-300/40 to-amber-100/40 rounded-lg border border-amber-200/50 px-4 py-4 md:px-6 md:py-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900">
                            {item.name}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-600 mt-1">
                            {item.gender === 'M' ? 'पुरुष' : 'महिला'} • आयु: {item.age}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs md:text-sm text-gray-700">
                          {item.residence}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-maroon group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-maroon group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating && index !== currentIndex) {
                setDirection(index > currentIndex ? 'next' : 'prev');
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                  setDirection(null);
                }, 400);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-maroon w-8'
                : 'bg-gray-400 w-2 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-gray-600 text-sm md:text-base">
        {currentIndex + 1} / {pages.length}
      </div>
    </div>
  );
};

export default function DiksharthiDetailsPage() {
  const maleData = [
    { name: "हरखचंदजी बछराजजी भंसाली", gender: "M", age: 71, residence: "हाडेचा-मुंबई" },
    { name: "पारसमलजी सिरेमलजी अंगारा", gender: "M", age: 68, residence: "सुपुर-मुंबई" },
    { name: "वीरेणभाई शिवलालजी हिरानी", gender: "M", age: 60, residence: "मालवाड़ा-मुंबई" },
    { name: "चंपकभाई मोहनलालजी मोरखया", gender: "M", age: 61, residence: "वातम-सूरत" },
    { name: "समीरभाई कालालजी शाह", gender: "M", age: 52, residence: "पिंडवाड़ा-अहमदाबाद" },
    { name: "शैलेभाई गौतमचंदजी संकलेचा", gender: "M", age: 49, residence: "रायपुर" },
    { name: "आशीषभाई राजजी सुराना", gender: "M", age: 44, residence: "रायपुर" },
    { name: "मयूरभाई मनहरभाई शाह", gender: "M", age: 42, residence: "सूरत" },
    { name: "हर्षिलभाई भेशभाई शाह", gender: "M", age: 34, residence: "जमनपुर-मुंबई" },
    { name: "जैनमकुमार निमिशभाई शाह", gender: "M", age: 27, residence: "बोटाड-मुंबई" },
    { name: "हर्षिलभाई चंपकभाई मोरखया", gender: "M", age: 26, residence: "वातम-सूरत" },
    { name: "ध्रुवकुमार कुमारभाई मनीयार", gender: "M", age: 22, residence: "भाभर-मुंबई" },
    { name: "प्रियलकुमार संजयभाई संघवी", gender: "M", age: 18, residence: "भाभर-मुंबई" },
    { name: "आयनकुमार आशीषभाई सुराना", gender: "M", age: 16, residence: "रायपुर" },
    { name: "जिनांग योगेशभाई शाह", gender: "M", age: 15, residence: "कुवाला-मुंबई" },
    { name: "आर्षकुमार आशीषभाई सुराना", gender: "M", age: 14, residence: "रायपुर" },
    { name: "वृकुमार रोहनभाई मुजपुरा", gender: "M", age: 14, residence: "भाभर-सूरत" },
    { name: "तनीषकुमार मोदभाई सोनिगारा", gender: "M", age: 13, residence: "रायपुर" }
  ];

  const femaleData = [
    { name: "सुजाताबेन राजेशभाई वोरा", gender: "F", age: 66, residence: "USA" },
    { name: "संगीताबेन संजयभाई शाह", gender: "F", age: 63, residence: "खेड़ा-USA" },
    { name: "लताबेन वीरेणभाई हिरानी", gender: "F", age: 55, residence: "मालवाड़ा-मुंबई" },
    { name: "प्रवीणबेन राकेशकुमार शाह", gender: "F", age: 53, residence: "आसेड़ा(डीसा)-मुंबई" },
    { name: "निशाबेन चंपकभाई मोरखया", gender: "F", age: 52, residence: "वातम-सूरत" },
    { name: "जिनप्राभाबेन बिपीनभाई गडा", gender: "F", age: 52, residence: "लाकडिया कुंवागड-मुंबई" },
    { name: "एकताबेन शैलेभाई संकलेचा", gender: "F", age: 47, residence: "रायपुर" },
    { name: "चिकाबेन समीरभाई शाह", gender: "F", age: 46, residence: "पिंडवाड़ा-अहमदाबाद" },
    { name: "रतुबेन आशीषभाई सुराना", gender: "F", age: 42, residence: "रायपुर" },
    { name: "रुपलबेन मयूरभाई शाह", gender: "F", age: 36, residence: "सूरत" },
    { name: "प्रियलबेन हर्षिलभाई शाह", gender: "F", age: 33, residence: "जमनपुर-मुंबई" },
    { name: "मिलकुमारी पारसमलजी दोषी", gender: "F", age: 30, residence: "हाडेचा-वडोदरा" },
    { name: "मोक्षीबेन धवलकुमार आकराणी", gender: "F", age: 29, residence: "खमत-भाभर" },
    { name: "इक्षितकुमारी अशोकभाई जैन", gender: "F", age: 28, residence: "उदयपुर" },
    { name: "प्रेरीकुमारी भरतभाई अजबानी", gender: "F", age: 27, residence: "धानेरा-सूरत" },
    { name: "साक्षीकुमारी नरभाई बैद", gender: "F", age: 27, residence: "नोखा(राजस्थान)-हिंगणघाट(Maharashtra)" },
    { name: "सुरभिकुमारी कपूरचंदजी भंसाली", gender: "F", age: 27, residence: "रायपुर" },
    { name: "अंजली कांतीलालजी भंसाली", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-पुणे" },
    { name: "हेत्वीकुमारी काशभाई ओवाल", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-चलथान(गुजरात)" },
    { name: "दीनीशाकुमारी भूपेंद्रजी कानूनगो(बोथरा)", gender: "F", age: 26, residence: "सुपुर-मुंबई" },
    { name: "संयमीकुमारी मयूरभाई दोषी", gender: "F", age: 23, residence: "दियोदर-मुंबई" },
    { name: "कान्ताकुमारी दिलीपभाई मेहता", gender: "F", age: 23, residence: "हाडेचा-मुंबई" },
    { name: "प्राज्ञाकुमारी पुरुषोत्तमभाई शेठ", gender: "F", age: 23, residence: "थराद-सूरत" },
    { name: "खुशीकुमारी जितेशभाई मेहता", gender: "F", age: 22, residence: "माडका(वाव)-सूरत" },
    { name: "हनीकुमारी मनोजभाई राठौड़", gender: "F", age: 21, residence: "पिंडवाड़ा-सूरत" },
    { name: "मितव्याकुमारी हितेशभाई संघवी", gender: "F", age: 19, residence: "शेणवाल-सूरत" },
    { name: "प्रीयाकुमारी केशभाई संघवी", gender: "F", age: 19, residence: "भाभर-मुंबई" },
    { name: "आंशीकुमारी जितेशभाई मेहता", gender: "F", age: 19, residence: "माडका(वाव)-सूरत" },
    { name: "विरक्तिकुमारी जिगरभाई शाह", gender: "F", age: 18, residence: "आगलोड(गुजरात)-मुंबई" },
    { name: "दीयाकुमारी विजयभाई सेठ", gender: "F", age: 18, residence: "तीर्थगाम(बनासकांठा)-सूरत" },
    { name: "परीकुमारी मुकेशभाई धोखा", gender: "F", age: 17, residence: "झेरडा-पुणे" },
    { name: "ऋद्धाकुमारी पुरुषोत्तमभाई शेठ", gender: "F", age: 17, residence: "थराद-सूरत" },
    { name: "श्रेणिकुमारी केतनभाई रोलिया", gender: "F", age: 17, residence: "भाभर-मुंबई" },
    { name: "माईशाकुमारी रितेशभाई मेहता", gender: "F", age: 17, residence: "उज्जैन-मुंबई" },
    { name: "प्रियाकुमारी जितेशभाई फोफानी", gender: "F", age: 17, residence: "तेरवाड़ा-थरा" },
    { name: "श्रेयसीकुमारी किंजलभाई रोलिया(शाह)", gender: "F", age: 16, residence: "भाभर-मुंबई" },
    { name: "जैनीकुमारी मेलभाई संघवी", gender: "F", age: 15, residence: "शेणवाल-अहमदाबाद" },
    { name: "प्रांजलकुमारी कुनालभाई शाह", gender: "F", age: 14, residence: "काली(राजस्थान)-कोयंबतूर" },
    { name: "झीलकुमारी निर्तितनभाई संघवी", gender: "F", age: 14, residence: "भाभर" },
    { name: "मोक्षाकुमारी मयंकभाई रोलिया", gender: "F", age: 13, residence: "भाभर-मुंबई" },
    { name: "आर्याकुमारी अमितभाई रोलिया", gender: "F", age: 11, residence: "भाभर-सूरत" },
    { name: "जैनाकुमारी तुषारभाई भाभेरा", gender: "F", age: 11, residence: "दुनावाडा(पाटन)-सूरत" },
    { name: "धृतिकुमारी हर्षिलभाई शाह", gender: "F", age: 8, residence: "जमनपुर-मुंबई" },
    { name: "तत्वर्तीकुमारी समीरभाई शाह", gender: "F", age: 7, residence: "भांडोरा(बनासकांठा)-सूरत" }
  ];

  return (
    <div className="font-heading bg-white flex flex-col items-center justify-center relative overflow-hidden py-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
        }
      `}</style>

      <div className="relative inline-block w-full text-center my-6 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>
        <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-900 via-amber-700 to-red-900 bg-clip-text text-transparent py-2 leading-snug">
          62 दीक्षार्थियों का विवरण
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 space-y-0">
        <Card3DCarousel items={maleData} title="पुरुष दीक्षार्थी" />
        <Card3DCarousel items={femaleData} title="महिला दीक्षार्थी" />
      </div>
    </div>
  );
}