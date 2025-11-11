"use client"
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaClock, FaMapPin } from 'react-icons/fa';
// import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';
const Timeline = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [direction, setDirection] = useState({});

  const minSwipeDistance = 50;

  const timelineData = [
    {
      year: 2016,
      logo: "/diksha/dikshalogo.png",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "First Diksha Ceremony",
      place: "New Delhi, India",
      description: "The inaugural diksha ceremony marked the beginning of our spiritual journey with 50 dedicated participants.",
      date: "March 15, 2016"
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
    setDirection({
      ...direction,
      [yearIndex]: 'next'
    });
    
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex < maxIndex ? currentIndex + 1 : 0
    });
  };

  const handlePrevImage = (yearIndex) => {
    setDirection({
      ...direction,
      [yearIndex]: 'prev'
    });
    
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex > 0 ? currentIndex - 1 : maxIndex
    });
  };

  const onTouchStart = (e, yearIndex) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e, yearIndex) => {
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
    const totalImages = item.images.length;
    const currentDirection = direction[yearIndex];
    const isFirstImage = currentImageIndex === 0;
    
    return (
      <div 
        className="relative w-full h-full perspective-1000"
        onTouchStart={(e) => onTouchStart(e, yearIndex)}
        onTouchMove={(e) => onTouchMove(e, yearIndex)}
        onTouchEnd={() => onTouchEnd(yearIndex)}
        style={{ perspective: '1500px' }}
      >
        {/* Stacked cards carousel style */}
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {item.images.map((image, index) => {
            const offset = index - currentImageIndex;
            const isActive = index === currentImageIndex;
            const isVisible = Math.abs(offset) <= 2;
            
            if (!isVisible) return null;
            
            // Calculate transforms for card stack effect - reduced horizontal offset
            const translateX = offset * 8; // Reduced from 15 to 8
            const translateZ = -Math.abs(offset) * 80; // Depth
            const scale = 1 - Math.abs(offset) * 0.08; // Slightly reduced scale difference
            const opacity = isActive ? 1 : 0.6 - Math.abs(offset) * 0.2;
            const rotateY = offset * 5; // Reduced rotation from 8 to 5
            
            return (
              <div
                key={index}
                className="absolute inset-0 rounded-sm overflow-hidden transition-all duration-500 ease-out shadow-2xl"
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  zIndex: 100 - Math.abs(offset),
                  transformStyle: 'preserve-3d',
                  pointerEvents: isActive ? 'auto' : 'none'
                }}
              >
                <div className="relative w-full h-full bg-white rounded-sm overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={image}
                    alt={`${item.year} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Logo overlay on first image */}
                  {index === 0 && isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent flex items-center justify-center">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white/35 backdrop-blur-sm p-2 md:p-4 shadow-2xl border-4 border-white/50 transform group-hover:scale-110 transition-all duration-300">
                          <img
                            src={item.logo}
                            alt="Event Logo"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        {/* <div className="absolute -bottom-2 -right-2 w-7 h-7 md:w-10 md:h-10 bg-[#5BA8C4] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-white text-xs md:text-sm font-bold">{item.year}</span>
                        </div> */}
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay for non-active cards */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-black/20"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {item.images.length > 1 && (
          <>
            <button
              onClick={() => handlePrevImage(yearIndex)}
              className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 z-[150] bg-white/30 hover:bg-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>
            <button
              onClick={() => handleNextImage(yearIndex)}
              className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-[150] bg-white/30 hover:bg-white p-2 md:p-3 rounded-full shadow-xl transition-all duration-200 hover:scale-110 backdrop-blur-sm"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            </button>

            {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-[150] flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveImageIndex({
                      ...activeImageIndex,
                      [yearIndex]: index
                    });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div> */}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
       <div className="relative overflow-hidden bg-gradient-to-r from-[#5BA8C4] via-[#4A9AB8] to-[#3B8CAA] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/dikshabanner.png" 
            alt="Banner Background" 
            className="w-full h-full object-cover opacity-30"
          />
          {/* Light black overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center space-y-4 md:space-y-6">
            <div className="inline-block animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="h-1 w-12 bg-white/50 rounded-sm"></div>
                <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-white/90">Our Journey</span>
                <div className="h-1 w-12 bg-white/50 rounded-sm"></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Diksha Timeline
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              A spiritual journey through time, celebrating moments of enlightenment and community
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{timelineData.length}</div>
                <div className="text-sm md:text-base text-white/80">Events</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold">{timelineData[timelineData.length - 1].year - timelineData[0].year}+</div>
                <div className="text-sm md:text-base text-white/80">Years</div>
              </div>
            </div>
          </div>
        </div>  
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#E8E5E0] to-transparent"></div>
      </div>

      {/* Timeline Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BA8C4] via-[#4A9AB8] to-[#5BA8C4] shadow-lg" />

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-0 top-6 z-20">
                  <div className="px-4 py-2 bg-gradient-to-br from-[#5BA8C4] to-[#3B8CAA] rounded-sm flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 border-2 border-white">
                    <span className="text-white text-sm font-bold">{item.year}</span>
                  </div>
                </div>

                <div className="pl-20 pr-4 mb-6">
                  <div className="h-56 w-full overflow-visible">
                    {renderImageStack(item, index)}
                  </div>
                </div>

                <div className="mx-4 bg-white rounded-sm p-6 shadow-xl transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaMapPin className="w-4 h-4 mr-2 text-[#5BA8C4]" />
                    <span className="text-sm">{item.place}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaClock className="w-4 h-4 mr-2 text-[#5BA8C4]" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BA8C4] via-[#4A9AB8] to-[#5BA8C4] transform -translate-x-1/2 shadow-lg" />

            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center justify-between mb-20 lg:mb-24 opacity-0 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="px-4 py-2 bg-gradient-to-br from-[#5BA8C4] to-[#3B8CAA] rounded-sm flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer group border-4 border-white">
                      <span className="text-white text-2xl lg:text-3xl font-bold group-hover:scale-105 transition-transform duration-300">{item.year}</span>
                    </div>
                  </div>

                  <div className={`w-[45%] ${isEven ? 'pr-12 lg:pr-16' : 'pl-12 lg:pl-16'}`}>
                    <div className="bg-white rounded-sm p-6 lg:p-8 shadow-xl h-full transform hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                      <h3 className="text-2xl lg:text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <FaMapPin className="w-5 h-5 mr-3 text-[#5BA8C4]" />
                          <span className="font-medium">{item.place}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <FaClock className="w-5 h-5 mr-3 text-[#5BA8C4]" />
                          <span className="font-medium">{item.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className={`w-[45%] ${isEven ? 'pl-12 lg:pl-16' : 'pr-12 lg:pr-16'}`}>
                    <div className="h-64 lg:h-80 w-full">
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-next {
          0% {
            opacity: 0;
            transform: translateX(40px) rotateY(10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        @keyframes slide-in-prev {
          0% {
            opacity: 0;
            transform: translateX(-40px) rotateY(-10deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-next {
          animation: slide-in-next 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-in-prev {
          animation: slide-in-prev 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Timeline;