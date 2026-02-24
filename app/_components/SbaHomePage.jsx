'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useCallback, useMemo } from 'react';
import { FaEye, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { FaX } from "react-icons/fa6";
import { photoData1 } from '@/app/data/sba';

import { useLanguage } from "./LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const PhotoGalleryHome = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "home");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Memoize the latest photos to prevent recalculation on every render
  const latestPhotos = useMemo(() => {
    // Check if photoData1 has the current language key, strictly
    const key = language === 'hi' ? 'hindi' : (language === 'gu' ? 'gujarati' : 'hindi');
    const allPhotos = [...(photoData1[key] || photoData1.hindi || [])];
    return allPhotos
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 3);
  }, [language]);

  // Memoized navigation handlers to prevent unnecessary re-renders
  const goToPrevious = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? latestPhotos.length - 1 : prev - 1
    );
  }, [latestPhotos.length]);

  const goToNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      prev === latestPhotos.length - 1 ? 0 : prev + 1
    );
  }, [latestPhotos.length]);

  const goToSlide = useCallback((index) => {
    setSelectedImageIndex(index);
  }, []);

  // Generate a simple blur placeholder
  const generateBlurDataURL = (width = 400, height = 300) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Create a gradient blur effect
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(0.5, '#e5e7eb');
    gradient.addColorStop(1, '#d1d5db');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    return canvas.toDataURL('image/jpeg', 0.1);
  };

  const PhotoCard = ({ photo, index, isActive = false }) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
      setIsLoading(false);
    };

    const handleImageError = () => {
      setImageError(true);
      setIsLoading(false);
      console.error(`Failed to load image: ${photo.imageUrl}`);
    };

    return (
      <div className="group font-heading rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
        <div className="relative overflow-hidden rounded-t-sm">
          {!imageError ? (
            <div className="relative w-full min-h-[300px] bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                      <div className="w-8 h-8 text-gray-400 relative">
                        <Image
                          src="/logo.png"
                          alt="adhyatm"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="text-sm">Loading...</div>
                  </div>
                </div>
              )}

              <Image
                src={photo.imageUrl}
                alt={photo.name || 'Gallery image'}
                width={400}
                height={300}
                className={`w-full h-auto object-contain bg-lighten-bg transition-all duration-700 group-hover:scale-102 ${isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                priority={isActive && index === 0} // Priority for first active image
                loading={isActive ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcTV52mSKZl+6BFjKgN1JJ3AzX6tscQvpZ7KqRnLM2lDpwTnZ4tZh2HnrtBUHKAajTAhc/d+FHaZJ3+t/J+XGfJOGjHrrnPXbq0a4bP8AIWl3yJ/8U8lfhqxHfSJFLNGJLbxf5v/Z"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>
          ) : (
            <div className="w-full h-auto min-h-[300px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <FaX className="w-8 h-8 text-heading" />
                </div>
                <div className="text-sm font-medium">Image not available</div>
              </div>
            </div>
          )}
        </div>

        {/* Title below image - always visible */}
        <Link href={'/pages/sba'} className="p-3 block bg-[#01044c]">
          <h3 className="text-base font-semibold text-gray-100 line-clamp-2 text-center">
            {photo.name}
          </h3>
        </Link>
      </div>
    );
  };

  // Navigation Dots Component
  const NavigationDots = () => (
    <div className="flex justify-center items-center space-x-3 mt-4">
      {latestPhotos.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`transition-all duration-300 rounded-full ${index === selectedImageIndex
            ? 'w-8 h-3 bg-[#01044c]/90 shadow-md'
            : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  // Thumbnail component with optimized loading
  const ThumbnailButton = ({ photo, index, isSelected }) => {
    const [thumbnailError, setThumbnailError] = useState(false);

    return (
      <button
        onClick={() => goToSlide(index)}
        className={`relative w-16 h-12 rounded-md overflow-hidden transition-all duration-300 ${isSelected
          ? 'ring-2 ring-[#01044c]/80 ring-offset-2 scale-110'
          : 'opacity-60 hover:opacity-100'
          }`}
      >
        {!thumbnailError ? (
          <Image
            src={photo.imageUrl}
            alt={`Thumbnail ${index + 1}`}
            width={64}
            height={48}
            className="w-full h-full object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEcTV52mSKZl+6BFjKgN1JJ3AzX6tscQvpZ7KqRnLM2lDpwTnZ4tZh2HnrtBUHKAajTAhc/d+FHaZJ3+t/J+XGfJOGjHrrnPXbq0a4bP8AIWl3yJ/8U8lfhqxHfSJFLNGJLbxf5v/Z"
            onError={() => setThumbnailError(true)}
            sizes="64px"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <FaX className="w-4 h-4 text-gray-500" />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="font-heading max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      {/* Header */}
      <div className='border-b-2 border-[#01044c] mb-6'>
        <h2 className="font-semibold flex items-center gap-2 text-xl text-[#01044c] text-start">{content?.sba?.title}</h2>
        <p className="font-body text-sm font-semibold text-[#01044c] mb-4">
          {content?.sba?.subtitle}
        </p>
      </div>

      {/* Latest Photos Section */}
      <div>
        {/* Mobile Carousel */}
        <div className="lg:hidden">
          {latestPhotos.length > 0 && (
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-lg">
                <PhotoCard
                  photo={latestPhotos[selectedImageIndex]}
                  index={selectedImageIndex}
                  isActive={true}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Navigation Dots */}
              <NavigationDots />

              {/* Thumbnail Preview */}
              <div className="flex justify-center space-x-2 mt-4 px-4">
                {latestPhotos.map((photo, index) => (
                  <ThumbnailButton
                    key={photo.id}
                    photo={photo}
                    index={index}
                    isSelected={index === selectedImageIndex}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-4 sm:gap-6">
          {latestPhotos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <Link
            href="/pages/sba"
            className="font-sans font-semibold flex rounded-md sm:inline-flex items-center justify-center bg-[#01044c] text-white px-8 py-3 transition-all duration-300 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {content?.sba?.viewAll}
            <FaChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Empty State */}
        {latestPhotos.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEye className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-heading mb-2">
              {content?.sba?.noPhotos}
            </h3>
            <p className="text-gray-500">
              {content?.sba?.comingSoon}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGalleryHome;