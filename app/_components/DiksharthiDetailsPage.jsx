import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';
import { getSectionData } from '../_utils/sectionData';

const Card3DCarousel = ({ items, title, language, content }) => {
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
    <div className={`w-full py-2 ${language === 'hi' ? 'font-heading' : language === 'gu' ? 'font-anek' : 'font-sans'}`}>
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
                            {item.gender === 'M' ? content?.details?.mumukshu_ratna_m : content?.details?.mumukshu_ratna_f}
                          </span>
                        </div>
                        <h4 className="text-xs md:text-base font-semibold text-gray-900 text-center">
                          {item.name}
                        </h4>
                        <div className="mt-1 flex items-center justify-center gap-3 text-xs md:text-sm text-gray-600">
                          <span>{content?.details?.age_prefix}{item.age}</span>
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
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
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
  const { language } = useLanguage();
  const content = getSectionData(language, "diksha");

  const maleData = content?.details?.maleData || [];
  const femaleData = content?.details?.femaleData || [];

  return (
    <div className={`${language === 'hi' ? 'font-heading' : language === 'gu' ? 'font-anek' : 'font-sans'} bg-white flex flex-col items-center justify-center relative overflow-hidden py-10`}>
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
          {content?.details?.title}
        </h2>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 space-y-0">
        <Card3DCarousel items={maleData} title={content?.details?.male_title} language={language} content={content} />
        <Card3DCarousel items={femaleData} title={content?.details?.female_title} language={language} content={content} />
      </div>
    </div>
  );
}