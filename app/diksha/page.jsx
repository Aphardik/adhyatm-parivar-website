"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaClock, FaMapPin } from 'react-icons/fa';

const Timeline = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const timelineData = [
    {
      year: "२०८०",
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "३५ दीक्षा",
      place: "अहमदाबाद",
      description: "वीरव्रतोत्सव",
      date: "सं. २०८०"
    },
    {
      year: 2019,
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "Annual Diksha Celebration",
      place: "Mumbai, India",
      description: "Expanding our community with over 200 new members receiving diksha in a grand ceremony.",
      date: "August 22, 2019"
    },
    {
      year: 2020,
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "Virtual Diksha Program",
      place: "Online Event",
      description: "Adapting to pandemic times with our first virtual diksha ceremony connecting participants worldwide.",
      date: "November 7, 2020"
    },
    {
      year: 2022,
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "Grand Diksha Mahotsav",
      place: "Bangalore, India",
      description: "A monumental celebration with record participation and special guest appearances.",
      date: "April 30, 2022"
    },
    {
      year: 2023,
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "Golden Jubilee Diksha",
      place: "Chennai, India",
      description: "Celebrating 50 years of spiritual service with special ceremonies and community outreach.",
      date: "December 10, 2023"
    }
  ];

  const handleNextImage = (yearIndex) => {
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex < maxIndex ? currentIndex + 1 : 0
    });
  };

  const handlePrevImage = (yearIndex) => {
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex > 0 ? currentIndex - 1 : maxIndex
    });
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (yearIndex) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNextImage(yearIndex);
    }
    if (isRightSwipe) {
      handlePrevImage(yearIndex);
    }
  };

  const renderImageStack = (item, yearIndex) => {
    const currentImageIndex = activeImageIndex[yearIndex] || 0;
    
    return (
      <div 
        className="relative w-full h-full"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={() => onTouchEnd(yearIndex)}
      >
        {/* Stacked cards with polaroid style */}
        <div className="relative w-full h-full">
          {item.images.map((image, index) => {
            const offset = index - currentImageIndex;
            const isActive = index === currentImageIndex;
            const isVisible = Math.abs(offset) <= 2;
            
            if (!isVisible) return null;
            
            // Calculate transforms for stack effect
            const translateX = offset * 3;
            const translateY = -Math.abs(offset) * 4;
            const rotate = offset * 2;
            const scale = 1 - Math.abs(offset) * 0.05;
            const opacity = isActive ? 1 : 0.7;
            
            return (
              <div
                key={index}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotate}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: 100 - Math.abs(offset),
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                <div className="relative w-full h-full">
                  <div className="relative w-full h-[85%] bg-gray-200 overflow-hidden">
                    <img
                      src={image}
                      alt={`${item.year} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/10"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {item.images.length > 1 && (
          <div className='hidden sm:block'>
            <button
              onClick={() => handlePrevImage(yearIndex)}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-[150] bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-100" />
            </button>
            <button
              onClick={() => handleNextImage(yearIndex)}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-[150] bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-100" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen font-heading bg-white">
      {/* Simple Banner - Image Only */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <img 
          src="/dikshabanner.png" 
          alt="Diksha Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Announcement Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center space-y-2 md:space-y-4">
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            ऐतिहासिक 17-45-36-26-44-18-74-35 आदि
          </p>
          <p className="text-base md:text-lg text-gray-600">
            अनेक सामूहिक दीक्षा के बाद फिर एकबार
          </p>
          <p className="text-xl md:text-2xl text-amber-600 font-bold italic">
            'सूरियोग' की अद्वितीय वाणी के प्रभाव से...
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            महाराष्ट्र की धरा पर
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            सदियों में सर्वप्रथम बार
          </p>
          <p className="text-base md:text-lg text-gray-600">
            एक ही साथ एक ही मंडप में
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl text-maroon font-bold">
            सामूहिक 55 दीक्षा
          </p>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 rounded-4xl bottom-0 w-1 bg-maroon/90 shadow-lg" />

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-0 top-6 z-20">
                  <div className="px-4 py-2 bg-maroon rounded-sm flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300">
                    <span className="text-white text-sm font-bold">{item.year}</span>
                  </div>
                </div>

                <div className="mx-4 ml-[3.8rem] bg-white w-[80%] rounded-sm p-6 transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-white shadow-lg p-2 border-2 border-maroon/20">
                        <img
                          src={item.logo}
                          alt="Event Logo"
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-base font-semibold leading-relaxed mb-3">{item.description}</p>
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-600">
                          <FaMapPin className="w-3 h-3 mr-2 text-maroon" />
                          <span className="text-sm">{item.place}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaClock className="w-3 h-3 mr-2 text-maroon" />
                          <span className="text-sm">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="h-64 w-full overflow-visible">
                    {renderImageStack(item, index)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout - Info Card Left, Images Right (wider) */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-maroon transform -translate-x-1/2 shadow-lg" />

            {timelineData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-between mb-20 lg:mb-24 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="px-4 py-2 bg-maroon rounded-sm flex items-center justify-center shadow-2xl transform transition-all duration-300 cursor-pointer group">
                      <span className="text-white text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300">{item.year}</span>
                    </div>
                  </div>

                  {/* Info Card - 45% width */}
                  <div className="w-[45%] pr-8 lg:pr-12">
                    <div className="bg-white rounded-sm p-6 lg:p-8 h-full transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-start gap-6">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-lg p-3 border-2 border-maroon/20">
                            <img
                              src={item.logo}
                              alt="Event Logo"
                              className="w-full h-full object-contain rounded-full"
                            />
                          </div>
                        </div>
                        
                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex items-center text-gray-600">
                              <FaMapPin className="w-4 h-4 mr-3 text-maroon flex-shrink-0" />
                              <span className="text-sm font-medium">{item.place}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <FaClock className="w-4 h-4 mr-3 text-maroon flex-shrink-0" />
                              <span className="text-sm font-medium">{item.date}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image Album - 45% width */}
                  <div className="w-[45%] pl-8 lg:pl-12">
                    <div className="h-80 lg:h-96 w-full">
                      {renderImageStack(item, index)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Timeline;