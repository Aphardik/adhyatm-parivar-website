"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Card3DCarousel = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Group items into pages of 5
  const itemsPerPage = 5;
  const pages = [];
  for (let i = 0; i < items.length; i += itemsPerPage) {
    pages.push(items.slice(i, i + itemsPerPage));
  }

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
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
    <div className="w-full py-2 font-heading">
      {/* Deck Stack Container */}
      <div className="relative w-full min-h-[420px] md:min-h-[440px] flex items-center justify-center px-4">
        <div 
          className="relative w-full max-w-2xl min-h-[400px] sm:min-h-[500px] mx-auto touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {getVisibleCards().map(({ index, position }) => (
            <div
              key={`${index}-${position}`}
              className="absolute inset-0 transition-all duration-400 ease-out"
              style={{
                ...getCardStyle(position),
                pointerEvents: position === 0 ? 'auto' : 'none',
              }}
            >
              <div className="bg-gradient-to-br from-white via-amber-50/30 to-white shadow-2xl border border-amber-200/50 h-full">
                <div className="space-y-0 bg-gradient2 h-full overflow-hidden">
                  {pages[index].map((item, idx) => (
                    <div key={idx}>
                      <div className="px-3 py-1 md:px-4 md:py-2.5">
                        <div className="text-center mb-1">
                          <span className="text-[0.5rem] md:text-xs font-semibold text-gray-700 bg-gradient-to-r from-amber-100 to-pink-100 px-3 py-0.5 rounded-full inline-block">
                            {item.gender === 'M' ? 'मुमुक्षुरत्न' : 'मुमुक्षुरत्ना'}
                          </span>
                        </div>
                        <h4 className="text-xs md:text-base font-semibold text-gray-900 text-center">
                          {item.name}
                        </h4>
                        <div className="mt-1 flex items-center justify-center gap-3 text-xs md:text-sm text-gray-600">
                          <span>आयु: {item.age}</span>
                          <span>•</span>
                          <span>{item.residence}</span>
                        </div>
                      </div>
                      {idx < pages[index].length - 1 && (
                        <div className="border-b border-amber-200/50"></div>
                      )}
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
          <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-900 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-900 group-hover:scale-110 transition-transform" />
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
                ? 'bg-red-900 w-8'
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
    { name: "परसमालजी सिरेमालजी अंगारा", gender: "M", age: 68, residence: "सत्यपुर-मुंबई" },
    { name: "प्रवीणभाई शिवलालजी हिरानी", gender: "M", age: 60, residence: "मालवाड़ा-मुंबई" },
    { name: "चंपकभाई मोहनलालजी मोरखिया", gender: "M", age: 61, residence: "वातम-सूरत" },
    { name: "समीरभाई कांतिलालजी शाह", gender: "M", age: 52, residence: "पिंडवाड़ा-अहमदाबाद" },
    { name: "शैलेन्द्रभाई गौतमचंदजी संकलेचा", gender: "M", age: 49, residence: "रायपुर" },
    { name: "आशीषभाई राजेन्द्रजी सुराना", gender: "M", age: 44, residence: "रायपुर" },
    { name: "मयूरभाई मनहरभाई शाह", gender: "M", age: 42, residence: "सूरत" },
    { name: "हर्षिलभाई भद्रेशभाई शाह", gender: "M", age: 34, residence: "जमनपुर-मुंबई" },
    { name: "जैनमकुमार निमिशभाई शाह", gender: "M", age: 27, residence: "बोटाड-मुंबई" },
    { name: "हर्षिलभाई चंपकभाई मोरखिया", gender: "M", age: 26, residence: "वातम-सूरत" },
    { name: "ध्रुवकुमार कुमारभाई मनीयार", gender: "M", age: 22, residence: "भाभर-मुंबई" },
    { name: "प्रियलकुमार संजयभाई संघवी", gender: "M", age: 18, residence: "भाभर-मुंबई" },
    { name: "आर्यनकुमार आशीषभाई सुराना", gender: "M", age: 16, residence: "रायपुर" },
    { name: "जिनंगकुमार योगेशभाई", gender: "M", age: 15, residence: "कुवाला-मुंबई" },
    { name: "आरुषकुमार आशीषभाई सुराना", gender: "M", age: 14, residence: "रायपुर" },
    { name: "वज्रभाई रोहनभाई मुजपुरा", gender: "M", age: 14, residence: "भाभर-सूरत" },
    { name: "तनीषकुमार प्रमोदभाई सोनिगारा", gender: "M", age: 13, residence: "रायपुर" }
  ];

  const femaleData = [
    { name: "सुजाताबेन राजेशभाई वोरा", gender: "F", age: 66, residence: "USA" },
    { name: "संगीताबेन संजयभाई शाह", gender: "F", age: 63, residence: "खेड़ा-USA" },
    { name: "लताबेन प्रवीणभाई हिरानी", gender: "F", age: 55, residence: "मालवाड़ा-मुंबई" },
    { name: "पल्लवीबेन राकेशकुमार शाह", gender: "F", age: 53, residence: "आसेड़ा(डीसा)-मुंबई" },
    { name: "शिल्पाबेन चंपकभाई मोरखिया", gender: "F", age: 52, residence: "वातम-सूरत" },
    { name: "जिनाज्ञाबेन बिपीनभाई गडा", gender: "F", age: 52, residence: "लाकडिया कुंवागड-मुंबई" },
    { name: "एकताबेन शैलेन्द्रभाई संकलेचा", gender: "F", age: 47, residence: "रायपुर" },
    { name: "रुचिकाबेन समीरभाई शाह", gender: "F", age: 46, residence: "पिंडवाड़ा-अहमदाबाद" },
    { name: "रीतुबेन आशीषभाई सुराना", gender: "F", age: 42, residence: "रायपुर" },
    { name: "रिम्पलबेन मयूरभाई शाह", gender: "F", age: 36, residence: "सूरत" },
    { name: "प्रियलबेन हर्षिलभाई शाह", gender: "F", age: 33, residence: "जमनपुर-मुंबई" },
    { name: "मित्तलकुमारी पारसमलजी दोषी", gender: "F", age: 30, residence: "हाडेचा-वडोदरा" },
    { name: "मोक्षीबेन धवलकुमार आकरानी", gender: "F", age: 29, residence: "खीमत-भाभर" },
    { name: "इतिकुमारी अशोकभाई जैन", gender: "F", age: 28, residence: "उदयपुर" },
    { name: "श्रेष्ठीकुमारी भरतभाई अजबानी", gender: "F", age: 27, residence: "धानेरा-सूरत" },
    { name: "साक्षीकुमारी नरभाई बैद", gender: "F", age: 27, residence: "नोखा(राजस्थान)-हिंगणघाट(Maharashtra)" },
    { name: "सुरभिकुमारी कपूरचंदजी भंसाली", gender: "F", age: 27, residence: "रायपुर" },
    { name: "अंजली कांतीलालजी भंसाली", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-पुणे" },
    { name: "हेत्वीकुमारी प्रकाशभाई ओस्तवाल", gender: "F", age: 27, residence: "गढ़ सिवाना(राजस्थान)-चलथान(गुजरात)" },
    { name: "दीनीशाकुमारी भूपेंद्रजी कानूनगो(बोथरा)", gender: "F", age: 26, residence: "सुपुर-मुंबई" },
    { name: "संयमीकुमारी मयूरभाई दोषी", gender: "F", age: 23, residence: "दियोदर-मुंबई" },
    { name: "काव्याकुमारी दिलीपभाई मेहता", gender: "F", age: 23, residence: "हाडेचा-मुंबई" },
    { name: "प्रवज्याकुमारी पुरवीशभाई शेठ", gender: "F", age: 23, residence: "थराद-सूरत" },
    { name: "खुशीकुमारी जिग्नेशभाई मेहता", gender: "F", age: 22, residence: "माडका(वाव)-सूरत" },
    { name: "हनीकुमारी मनोजभाई राठौड़", gender: "F", age: 21, residence: "पिंडवाड़ा-सूरत" },
    { name: "मितवाकुमारी हितेशभाई संघवी", gender: "F", age: 19, residence: "शणवाल-सूरत" },
    { name: "श्रीयाकुमारी कल्पेशभाई संघवी", gender: "F", age: 19, residence: "भाभर-मुंबई" },
    { name: "आंशिकुमारी जिग्नेशभाई मेहता", gender: "F", age: 19, residence: "माडका(वाव)-सूरत" },
    { name: "विरतिकुमारी जिगरभाई शाह", gender: "F", age: 18, residence: "आगलोड(गुजरात)-मुंबई" },
    { name: "दीयाकुमारी विजयभाई सेठ", gender: "F", age: 18, residence: "तीर्थगाम(बनासकांठा)-सूरत" },
    { name: "परीकुमारी मुकेशभाई धोखा", gender: "F", age: 17, residence: "झेरडा-पुणे" },
    { name: "दिव्याकुमारी पुरर्विशभाई शेठ", gender: "F", age: 17, residence: "थराद-सूरत" },
    { name: "श्रेणिकुमारी केतनभाई रोलिया", gender: "F", age: 17, residence: "भाभर-मुंबई" },
    { name: "माईशाकुमारी रितेशभाई मेहता", gender: "F", age: 17, residence: "उज्जैन-मुंबई" },
    { name: "क्रियाकुमारी जिग्नेशभाई फोफानी", gender: "F", age: 17, residence: "तेरवाड़ा-थरा" },
    { name: "श्रेयसीकुमारी किंजलभाई रोलिया(शाह)", gender: "F", age: 16, residence: "भाभर-मुंबई" },
    { name: "जैनीकुमारी मेहुल संघवी", gender: "F", age: 15, residence: "शेणवाल-अहमदाबाद" },
    { name: "प्रांजलकुमारी कुनालभाई शाह", gender: "F", age: 14, residence: "कालंद्री(राजस्थान)-कोयंबतूर" },
    { name: "झीलकुमारी नितिन संघवी", gender: "F", age: 14, residence: "भाभर" },
    { name: "मोक्षाकुमारी मयंकभाई रोलिया", gender: "F", age: 13, residence: "भाभर-मुंबई" },
    { name: "आर्याकुमारी अमितभाई रोलिया", gender: "F", age: 11, residence: "भाभर-सूरत" },
    { name: "जैनाकुमारी तुषारभाई भाभेरा", gender: "F", age: 11, residence: "दुनावाडा(पाटन)-सूरत" },
    { name: "धृतिकुमारी हर्षिलभाई शाह", gender: "F", age: 8, residence: "जमनपुर-मुंबई" },
    { name: "तहती समीरभाई शाह", gender: "F", age: 7, residence: "भांडोरा(बनासकांठा)-सूरत" },
    { name: "खुशीकुमारी महेंद्रभाई अंगारा", gender: "F", age: 23, residence: "हाडेचा-मुंबई" }
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

      <div className="relative inline-block w-full text-center mt-6 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>
        <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-900 via-amber-700 to-red-900 bg-clip-text text-transparent py-2 leading-snug">
          63 दीक्षार्थियों का विवरण
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 space-y-0">
        <Card3DCarousel items={maleData} title="पुरुष दीक्षार्थी" />
        <Card3DCarousel items={femaleData} title="महिला दीक्षार्थी" />
      </div>
    </div>
  );
}