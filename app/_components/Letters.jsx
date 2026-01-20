"use client";
import React, { useState, useEffect, useRef } from 'react';

import { useLanguage } from "./LanguageContext";
import { getSectionData } from "../_utils/sectionData";

export default function TestimonialSlider() {
  const { language } = useLanguage();
  const content = getSectionData(language, "home");
  // Default empty array if not loaded yet, or fallback to mock if desired, but user wants dynamic.
  // Original had 9 items.
  const testimonials = content?.letters || [];


  const [currentGroup, setCurrentGroup] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const sliderRef = useRef(null);
  const autoplayInterval = 5000;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGroupSize = () => {
    if (windowWidth <= 640) return 1;
    if (windowWidth <= 768) return 2;
    if (windowWidth <= 1024) return 3;
    return 3;
  };

  const groupSize = getGroupSize();
  const originalGroups = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    originalGroups.push(testimonials.slice(i, i + groupSize));
  }

  const totalGroups = originalGroups.length;

  // Create infinite scroll groups by duplicating first/last groups
  const testimonialGroups = [
    ...originalGroups.slice(totalGroups - 1),
    ...originalGroups,
    ...originalGroups.slice(0, 1)
  ];

  useEffect(() => {
    if (!autoplay || totalGroups === 0) return;

    const interval = setInterval(() => {
      setCurrentGroup(prev => {
        const newIndex = prev + 1;
        // Reset position without animation when reaching cloned end
        if (newIndex >= totalGroups + 1) {
          setTimeout(() => {
            setTransitionEnabled(false);
            setCurrentGroup(1);
            setTimeout(() => setTransitionEnabled(true), 50);
          }, 500);
          return newIndex;
        }
        return newIndex;
      });
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, totalGroups]);

  // Handle reset position after looping
  useEffect(() => {
    if (currentGroup === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentGroup(totalGroups);
        setTimeout(() => setTransitionEnabled(true), 50);
      }, 500);
    }
    else if (currentGroup === totalGroups + 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentGroup(1);
        setTimeout(() => setTransitionEnabled(true), 50);
      }, 500);
    }
  }, [currentGroup, totalGroups]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const goToGroup = (index) => {
    setCurrentGroup(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const nextGroup = () => {
    setCurrentGroup(prev => (prev + 1) % (totalGroups + 2));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const prevGroup = () => {
    setCurrentGroup(prev => (prev - 1 + totalGroups + 2) % (totalGroups + 2));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  // Calculate active dot index accounting for cloned slides
  const activeDotIndex = (currentGroup - 1 + totalGroups) % totalGroups;

  return (
    <div className='max-w-7xl mx-auto pt-20 px-8'>
      <img src="/6.jpg" alt="" />
      <div className="font-body py-8">
        <div className="mx-auto">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-center text-[#01044c] mb-12">
            {content?.lettersTitle}
          </h1>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-20">
              <button
                onClick={prevGroup}
                className="bg-[#01044c]/80 hover:bg-[#01044c] text-whitey rounded-full w-10 h-10 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonials"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
              <button
                onClick={nextGroup}
                className="bg-[#01044c]/80 hover:bg-[#01044c] text-whitey rounded-full w-10 h-10 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Next testimonials"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="overflow-hidden px-2" ref={sliderRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentGroup * 100}%)`,
                  transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none'
                }}
              >
                {testimonialGroups.map((group, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
                  >
                    {group.map((testimonial, idx) => (
                      <div
                        key={idx}
                        className="bg-[linear-gradient(180deg,_rgba(255,209,229,1)_0%,_rgba(235,221,129,1)_50%)] shadow-xl overflow-hidden h-80 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#01044c] "
                      >
                        <div className="p-6 flex flex-col h-full">
                          {/* Quote section */}
                          <div className="flex-grow overflow-y-auto mb-4">
                            <div className="text-[#01044c] text-5xl font-bold mb-2">"</div>
                            <p className="text-content leading-relaxed text-base line-height-loose">
                              {testimonial.quote}
                            </p>
                          </div>

                          <div className="mt-auto border-t border-purple-100 pt-4">
                            <p className="text-[#01044c] font-semibold text-right text-base">
                              ...{testimonial.author}
                            </p>
                            {testimonial.organization && (
                              <p className="text-[#01044c]/80 text-sm text-right mt-1">
                                {testimonial.organization}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {originalGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToGroup(index + 1)}
                  className={`w-2 h-2 rounded-full focus:outline-none transition-all duration-300 ${activeDotIndex === index
                    ? 'bg-[#01044c] w-6'
                    : 'bg-[#01044c]/50 hover:bg-[#01044c]/70'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}