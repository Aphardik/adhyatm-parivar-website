"use client"
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Image3DCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [modalTouchStart, setModalTouchStart] = useState(null);
    const [modalTouchEnd, setModalTouchEnd] = useState(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = () => {
        if (isAnimating || !images || images.length === 0) return;
        setDirection('next');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsAnimating(false);
            setDirection(null);
        }, 400);
    };

    const prevSlide = () => {
        if (isAnimating || !images || images.length === 0) return;
        setDirection('prev');
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            setIsAnimating(false);
            setDirection(null);
        }, 400);
    };

    const onTouchStart = (e) => {
        if (isModalOpen) return;
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        if (isModalOpen) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (isModalOpen || !touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    const handleModalTouchStart = (e) => {
        setModalTouchEnd(null);
        setModalTouchStart(e.targetTouches[0].clientX);
    };

    const handleModalTouchMove = (e) => {
        setModalTouchEnd(e.targetTouches[0].clientX);
    };

    const handleModalTouchEnd = () => {
        if (!modalTouchStart || !modalTouchEnd) return;

        const distance = modalTouchStart - modalTouchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    const openModal = (img) => {
        setSelectedImage(img);
        setIsModalOpen(true);
        // Prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Restore scrolling
        document.body.style.overflow = 'unset';
    };

    const getVisibleCards = () => {
        if (!images || images.length === 0) return [];
        const visible = [];
        for (let i = 0; i < Math.min(3, images.length); i++) {
            const index = (currentIndex + i) % images.length;
            visible.push({ index, position: i });
        }
        return visible;
    };

    const getCardStyle = (position) => {
        const defaultColor = '#e3e3e3';
        if (direction === 'next') {
            if (position === 0) {
                return {
                    transform: 'translateX(-120%) translateY(20px) rotate(-15deg) scale(0.9)',
                    opacity: 0,
                    zIndex: 10,
                    backgroundColor: defaultColor,
                };
            } else if (position === 1) {
                return {
                    transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                    backgroundColor: defaultColor,
                };
            } else if (position === 2) {
                return {
                    transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
                    opacity: 0.7,
                    zIndex: 20,
                    backgroundColor: defaultColor,
                };
            }
        } else if (direction === 'prev') {
            if (position === 0) {
                return {
                    transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                    backgroundColor: defaultColor,
                };
            } else if (position === 1) {
                return {
                    transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
                    opacity: 0.7,
                    zIndex: 20,
                    backgroundColor: defaultColor,
                };
            } else if (position === 2) {
                return {
                    transform: 'translateX(120%) translateY(20px) rotate(15deg) scale(0.9)',
                    opacity: 0,
                    zIndex: 10,
                    backgroundColor: defaultColor,
                };
            }
        } else {
            if (position === 0) {
                return {
                    transform: 'translateX(0) translateY(0) rotate(0deg) scale(1)',
                    opacity: 1,
                    zIndex: 30,
                    backgroundColor: defaultColor,
                };
            } else if (position === 1) {
                return {
                    transform: 'translateX(4%) translateY(8px) rotate(3deg) scale(0.96)',
                    opacity: 0.7,
                    zIndex: 20,
                    backgroundColor: defaultColor,
                };
            } else if (position === 2) {
                return {
                    transform: 'translateX(8%) translateY(16px) rotate(6deg) scale(0.92)',
                    opacity: 0.4,
                    zIndex: 10,
                    backgroundColor: defaultColor,
                };
            }
        }
    };

    return (
        <div className="w-full py-4 font-heading">
            <div className="relative w-full min-h-[300px] md:min-h-[450px] flex items-center justify-center px-4">
                <div
                    className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-[747/1280] mx-auto touch-pan-y"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {getVisibleCards().map(({ index, position }) => (
                        <div
                            key={`${index}-${position}`}
                            className={`absolute inset-0 transition-all duration-400 ease-out rounded-xl overflow-hidden shadow-2xl ${position === 0 ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
                            onClick={() => position === 0 && openModal(images[index])}
                            style={{
                                ...getCardStyle(position),
                                pointerEvents: position === 0 ? 'auto' : 'none',
                            }}
                        >
                            <img
                                src={images[index]}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    disabled={isAnimating || images.length <= 1}
                    className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-900 group-hover:scale-110 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    disabled={isAnimating || images.length <= 1}
                    className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                    <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-900 group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
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

            {/* Full Screen Modal */}
            {isModalOpen && typeof document !== 'undefined' && ReactDOM.createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-8 transition-all duration-300 animate-in fade-in backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl md:text-5xl hover:text-red-500 transition-colors z-[110] bg-black/20 rounded-full p-2"
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>
                    <div
                        className="relative max-w-full max-h-full flex items-center justify-center animate-in zoom-in duration-300 touch-pan-y"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleModalTouchStart}
                        onTouchMove={handleModalTouchMove}
                        onTouchEnd={handleModalTouchEnd}
                    >
                        <img
                            key={currentIndex}
                            src={images[currentIndex]}
                            alt="Full view"
                            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl drop-shadow-2xl animate-fade-in"
                        />
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Image3DCarousel;
