"use client";
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const NewsInfiniteCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start with 1 because of cloned first item
    const [autoplay, setAutoplay] = useState(true);
    const [windowWidth, setWindowWidth] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalIndex, setModalIndex] = useState(0);
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
        return 3;
    };

    const groupSize = getGroupSize();
    const originalGroups = [];
    if (images && images.length > 0) {
        for (let i = 0; i < images.length; i += groupSize) {
            originalGroups.push(images.slice(i, i + groupSize));
        }
    }

    const totalGroups = originalGroups.length;

    // Create infinite scroll groups by duplicating first/last groups
    const carouselGroups = totalGroups > 0 ? [
        ...originalGroups.slice(totalGroups - 1),
        ...originalGroups,
        ...originalGroups.slice(0, 1)
    ] : [];

    useEffect(() => {
        if (!autoplay || totalGroups <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [autoplay, totalGroups]);

    // Handle reset position after looping
    useEffect(() => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(totalGroups);
                setTimeout(() => setTransitionEnabled(true), 50);
            }, 500);
        }
        else if (currentIndex === totalGroups + 1) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(1);
                setTimeout(() => setTransitionEnabled(true), 50);
            }, 500);
        }
    }, [currentIndex, totalGroups]);

    const handleMouseEnter = () => setAutoplay(false);
    const handleMouseLeave = () => setAutoplay(true);

    const nextGroup = () => {
        if (totalGroups <= 1) return;
        setCurrentIndex(prev => prev + 1);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 10000);
    };

    const prevGroup = () => {
        if (totalGroups <= 1) return;
        setCurrentIndex(prev => prev - 1);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 10000);
    };

    const goToGroup = (index) => {
        setCurrentIndex(index);
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 10000);
    };

    const activeDotIndex = totalGroups > 0 ? (currentIndex - 1 + totalGroups) % totalGroups : 0;

    const openModal = (img, idx) => {
        setSelectedImage(img);
        setModalIndex(idx);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextModalImage = () => {
        const nextIdx = (modalIndex + 1) % images.length;
        setModalIndex(nextIdx);
        setSelectedImage(images[nextIdx]);
    };

    const prevModalImage = () => {
        const prevIdx = (modalIndex - 1 + images.length) % images.length;
        setModalIndex(prevIdx);
        setSelectedImage(images[prevIdx]);
    };

    if (totalGroups === 0) return null;

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-8 py-8 md:py-12'>
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -left-2 md:-left-6 transform -translate-y-1/2 z-20">
                    <button
                        onClick={prevGroup}
                        className="bg-maroon/80 hover:bg-maroon text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Previous news"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>
                </div>

                <div className="absolute top-1/2 -right-2 md:-right-6 transform -translate-y-1/2 z-20">
                    <button
                        onClick={nextGroup}
                        className="bg-maroon/80 hover:bg-maroon text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Next news"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="overflow-hidden" ref={sliderRef}>
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: transitionEnabled ? 'transform 500ms ease-in-out' : 'none'
                        }}
                    >
                        {carouselGroups.map((group, groupIdx) => (
                            <div
                                key={groupIdx}
                                className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
                            >
                                {group.map((image, imgIdx) => {
                                    // Calculate the global index of this image in the original images array
                                    // This is tricky because of groups and cloning.
                                    // Let's find the original absolute index.
                                    let absoluteIndex = 0;
                                    const groupOffset = (groupIdx - 1 + totalGroups) % totalGroups;
                                    absoluteIndex = (groupOffset * groupSize + imgIdx) % images.length;

                                    return (
                                        <div
                                            key={`${groupIdx}-${imgIdx}`}
                                            className="relative aspect-[747/1280] bg-gray-100 shadow-lg rounded-sm overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300"
                                            onClick={() => openModal(image, absoluteIndex)}
                                        >
                                            <img
                                                src={image}
                                                alt={`News cutting ${absoluteIndex + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                                <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
                                                    <FaChevronRight className="text-maroon w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {originalGroups.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToGroup(index + 1)}
                            className={`w-2 h-2 rounded-full focus:outline-none transition-all duration-300 ${activeDotIndex === index
                                    ? 'bg-maroon w-6'
                                    : 'bg-maroon/30 hover:bg-maroon/50'
                                }`}
                            aria-label={`Go to news group ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal for full view */}
            {isModalOpen && typeof document !== 'undefined' && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl hover:text-red-500 transition-colors z-[110] bg-black/20 rounded-full p-2"
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>

                    {/* Modal navigation */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-all z-[110]"
                        onClick={(e) => { e.stopPropagation(); prevModalImage(); }}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl transition-all z-[110]"
                        onClick={(e) => { e.stopPropagation(); nextModalImage(); }}
                    >
                        <FaChevronRight />
                    </button>

                    <div
                        className="relative max-w-full max-h-full flex flex-col items-center justify-center animate-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full view"
                            className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-4 text-white/70 font-sans">
                            {modalIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default NewsInfiniteCarousel;
