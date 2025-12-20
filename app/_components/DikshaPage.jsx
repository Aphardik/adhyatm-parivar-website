"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HexagonalSvg from "./HexagonalSvg";
import DiksharthiDetailsPage from "./DiksharthiDetailsPage";
import Image3DCarousel from "./Image3DCarousel";

const Timeline = () => {
  const [activeImageIndex, setActiveImageIndex] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const minSwipeDistance = 50;

  const carouselImages = [
    "/diksha/muhurt1.webp",
    "/diksha/muhurt2.webp"
  ];

  // Auto-slide carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const timelineData = [
    {
      year: 2024,
      logo: "/diksha/35DikshaAhmedabad.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "35",
      place: "अहमदाबाद",
      description: "वीरव्रतोत्सव",
      date: "सं. २०८०"
    },
    {
      year: 2023,
      logo: "/diksha/8DixaBhabhar.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "8",
      place: "भाभर",
      description: "आत्महितोत्सव",
      date: "सं.२०८०"
    },
    {
      year: 2023,
      logo: "/diksha/5DixaTervada.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "5",
      place: "तेरवाडा",
      description: "संयम योग उत्सव",
      date: "सं. २०७९"
    },
    {
      year: 2022,
      logo: "/diksha/7DixaAhmedabad.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "7",
      place: "अहमदाबाद",
      description: "मोहविजयोत्सव",
      date: "सं. २०७९"
    },
    {
      year: 2021,
      logo: "/diksha/74DixaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "74",
      place: "सुरत",
      description: "सिंहसत्त्वोत्सव",
      date: "सं. २०७८"
    },
    {
      year: 2019,
      logo: "/diksha/18DixaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "18",
      place: "सुरत",
      description: "प्रभुपंथोत्सव",
      date: "सं.२०७६"
    },
    {
      year: 2019,
      logo: "/diksha/44DikshaMumbai.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "44",
      place: "मुंबई",
      description: "आध्यात्मिक लग्नोत्सव",
      date: "सं.२०७५"
    },
    {
      year: 2017,
      logo: "/diksha/26DikshaAhemdabad.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "26",
      place: "अहमदाबाद",
      description: "विश्वानंद उत्सव",
      date: "सं. २०७४"
    },
    {
      year: 2016,
      logo: "/diksha/36DixaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "36",
      place: "सुरत",
      description: "रत्नत्रयी उत्सव",
      date: "सं.२०७३"
    },
    {
      year: 2014,
      logo: "/diksha/45dikshaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "45",
      place: "सुरत",
      description: "संयम सुवास उत्सव",
      date: "सं.२०७१"
    },
    {
      year: 2013,
      logo: "/diksha/updhanDikshaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "6",
      place: "भाभर",
      description: "उपधान - दीक्षा उत्सव",
      date: "सं. २०७०"
    },
    {
      year: 2012,
      logo: "/diksha/17Dixa.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "17",
      place: "पालीताणा",
      description: "अजितशांति दीक्षा प्रतिष्ठा उत्सव",
      date: "सं. २०६८"
    },
    {
      year: 2011,
      logo: "/diksha/7DixaSurat.webp",
      images: [
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
        "/dummyalbumpic.jpg",
      ],
      title: "7",
      place: "सुरत",
      description: "प्रव्रज्या प्रदान उत्सव",
      date: "सं. २०६७"
    },
  ];

  const handleNextImage = (yearIndex) => {
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex < maxIndex ? currentIndex + 1 : 0,
    });
  };

  const handlePrevImage = (yearIndex) => {
    const currentIndex = activeImageIndex[yearIndex] || 0;
    const maxIndex = timelineData[yearIndex].images.length - 1;
    setActiveImageIndex({
      ...activeImageIndex,
      [yearIndex]: currentIndex > 0 ? currentIndex - 1 : maxIndex,
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
    if (isLeftSwipe) handleNextImage(yearIndex);
    if (isRightSwipe) handlePrevImage(yearIndex);
  };

  const handleCarouselPrev = () => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleCarouselNext = () => {
    setCurrentCarouselIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen w-screen font-heading bg-white">
      {/* Simple Banner - Image Only */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <img
          src="/dikshabanner.webp"
          alt="Diksha Banner"
          className="w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* Announcement Text Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center space-y-2 md:space-y-3">
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            ऐतिहासिक <span className='font-bold text-xl text-maroon md:text-2xl'> 17-45-36-26-44-18-74-35 </span> आदि
          </p>
          <p className="text-base md:text-lg text-gray-600">
            अनेक सामूहिक दीक्षा के बाद फिर एकबार
          </p>
          <p className="text-xl md:text-2xl text-amber-600 font-bold italic">
            'सूरियोग' की अद्वितीय वाणी के प्रभाव से...
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-semibold">
            महाराष्ट्र की धरा पर सदियों में सर्वप्रथम बार <br /> एक ही साथ एक ही मंडप में
          </p>

          <p className="text-3xl md:text-4xl lg:text-5xl pt-2 text-maroon font-bold">
            सामूहिक <span className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>63</span> दीक्षा
          </p>




          {/* Diksha Details Card */}
          <div className="relative w-full max-w-md mx-auto my-8 md:my-10">
            <div className="relative">
              <HexagonalSvg accentColor="red" />
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/40 via-pink-400/40 to-amber-300/40 blur-xl"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white via-amber-50/30 to-white rounded-lg shadow-2xl border border-amber-200/50 p-4 md:p-6">
                <div className="space-y-5">
                  {/* Diksha Day Section - Top Most */}
                  <div className="text-center space-y-2 p-2">
                    <div className="text-lg md:text-2xl font-extrabold text-gray-700">
                      दीक्षा दिन
                    </div>
                  </div>

                  {/* Date Section */}
                  <div className="text-center space-y-1 p-2">
                    <div className="text-maroon font-bold text-2xl md:text-3xl">
                      माघ वदी 7
                    </div>
                    <div className="text-maroon font-bold text-2xl md:text-3xl">
                      February 8, 2026
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="text-center space-y-2 p-2">
                    <div className="text-amber-700 font-bold text-lg md:text-2xl">
                      📍 स्थान
                    </div>
                    <div className="text-gray-800 font-semibold text-base md:text-lg">
                      बोरीवली, मुंबई
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Auto-Sliding Carousel */}
          <div className="relative w-full max-w-4xl mx-auto my-8 md:my-12">
            <div className="relative inline-block w-full text-center my-6">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>

              <h2 className="relative text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-maroon via-amber-700 to-maroon bg-clip-text text-transparent py-2 leading-snug">
                63 दीक्षार्थियों के
                <span className="block mt-1">
                  'दीक्षा मुहूर्तप्रदान महोत्सव' की एक झांकी
                </span>
              </h2>
            </div>


            <div className="relative h-64 md:h-96 overflow-hidden rounded-sm shadow-2xl">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentCarouselIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={image}
                    alt={`Muhurt ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation Buttons */}
              {/* <button
                onClick={handleCarouselPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <FaChevronLeft className="text-maroon text-xl" />
              </button>
              <button
                onClick={handleCarouselNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <FaChevronRight className="text-maroon text-xl" />
              </button> */}

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentCarouselIndex
                      ? 'bg-maroon w-8'
                      : 'bg-white/60 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <DiksharthiDetailsPage />

          {/* New Image Carousel Section */}
          <div className="relative w-full max-w-4xl mx-auto my-12 md:my-16">
            <div className="relative inline-block w-full text-center mb-8 px-4">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300/40 via-red-200/40 to-pink-300/40 blur-xl"></div>
              <h2 className="relative text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-maroon via-amber-700 to-maroon bg-clip-text text-transparent py-2 leading-snug">
                महाराष्ट्र के मुंबई नगरी में पहली बार 59 जैन मुमुक्षु का दीक्षा लेने का मुहूर्त प्रदान किया गया
              </h2>
            </div>
            <Image3DCarousel
              images={[
                "/diksha/dikshanews1.webp",
                "/diksha/dikshanews2.webp",
                "/diksha/dikshanews3.webp",
                "/diksha/dikshanews4.webp",
                "/diksha/dikshanews5.webp",
                "/diksha/dikshanews6.webp",
                "/diksha/dikshanews7.webp",
                "/diksha/dikshanews8.webp",
                "/diksha/dikshanews9.webp",
                "/diksha/dikshanews10.webp",
                "/diksha/dikshanews11.webp",
              ]}
            />
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center my-8 md:my-12">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent max-w-md"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-maroon/40" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
            </div>
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-maroon/30 to-transparent max-w-md"></div>
          </div>

          {/* Main Heading */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 via-orange-200/40 to-amber-200/40 blur-xl"></div>
            <h2 className="relative text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-maroon via-amber-700 to-maroon bg-clip-text text-transparent py-2">
              पिछले कुछ सालों में हुई सामूहिक दीक्षा की झलक
            </h2>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-8 top-0 rounded-4xl bottom-0 w-1 bg-gradient-to-b from-[#800000] via-[#b33939] to-[#ff6b6b] shadow-lg" />

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-0 top-6 z-20">
                  <div className="px-4 py-2 bg-maroon rounded-sm flex items-center justify-center shadow-xl transform transition-all duration-300">
                    <span className="text-white text-sm font-sans font-bold">{item.year}</span>
                  </div>
                </div>

                <div className="mx-4 ml-[3.8rem] bg-white w-[85%] rounded-sm p-2 transform transition-all duration-300 mb-6">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-36 h-auto p-1">
                        <img
                          src={item.logo}
                          alt="Event Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 text-center my-auto">
                      <h3 className="text-lg font-bold text-gray-800"><span className='text-2xl text-maroon font-extrabold'>{item.title} </span> दीक्षा</h3>
                      <p className="text-maroon text-lg font-semibold leading-relaxed">{item.description}</p>
                      <div className="space-y-0">
                        <div className="text-center text-gray-600">
                          <span className="text-base">{item.place}</span>
                        </div>
                        <div className="text-center text-gray-600">
                          <span className="text-base">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="max-w-4xl mx-auto relative pl-12 lg:pl-16">
            <div className="absolute left-6 lg:left-[4.5rem] top-0 bottom-0 w-1 bg-gradient-to-b from-[#800000] via-[#b33939] to-[#ff6b6b] shadow-lg"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative mb-16 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Year */}
                <div className="absolute -left-6 top-8 z-10">
                  <div className="px-4 py-2 bg-maroon rounded-sm text-white text-xl font-bold shadow-lg">
                    {item.year}
                  </div>
                </div>

                {/* Card */}
                <div className="ml-8 lg:ml-12">
                  <div className="bg-white rounded-sm p-6 lg:p-8 transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="w-32 lg:w-48 p-3">
                        <img
                          src={item.logo}
                          alt="Event Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 text-center my-auto">
                        <h3 className="text-xl font-bold text-gray-700 mb-1">
                          <span className="text-4xl text-maroon">
                            {item.title}{" "}
                          </span>
                          दीक्षा
                        </h3>
                        <h3 className="text-maroon font-extrabold text-xl lg:text-3xl leading-relaxed">
                          {item.description}
                        </h3>
                        <p className="text-gray-700 text-lg font-medium">
                          {item.place}
                        </p>
                        <p className="text-gray-700 text-lg font-medium">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
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
      `}</style>
    </div>
  );
};

export default Timeline;