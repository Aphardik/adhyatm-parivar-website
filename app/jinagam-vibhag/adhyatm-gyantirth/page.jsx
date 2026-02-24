"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinagam");
  const data = content?.adhyatmGyantirth;

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-bold my-1">
                {data?.header?.subtitle}
              </p>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Left Column - Building Image */}
            <div className="flex flex-col items-center bg-white border border-gray-200 p-6">
              <img
                src="/jinagam/adhyatm-gyantirth/img-3.15.webp"
                alt="A four-story building with a modern design"
                className="w-full h-96 object-cover mb-4"
              />
              <div className="bg-maroon text-white text-center p-4 w-full">
                <p className="font-semibold">
                  {data?.images?.building}
                </p>
              </div>
            </div>

            {/* Right Column - Workshop Image */}
            <div className="flex flex-col items-center bg-white border border-gray-200 p-6">
              <img
                src="/jinagam/adhyatm-gyantirth/img-3.16.webp"
                alt="A large room with people working at desks"
                className="w-full h-96 object-cover mb-4"
              />
              <div className="bg-maroon text-white text-center p-4 w-full">
                <p className="font-semibold">
                  {data?.images?.workshop}
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">{data?.sections?.collection?.title}</h2>
              <p className="text-maroon text-lg leading-relaxed">
                {data?.sections?.collection?.text}
              </p>
            </div>

            <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">{data?.sections?.amendment?.title}</h2>
              <p className="text-maroon text-lg leading-relaxed">
                {data?.sections?.amendment?.text}
              </p>
            </div>

            <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">{data?.sections?.publication?.title}</h2>
              <p className="text-maroon text-lg leading-relaxed">
                {data?.sections?.publication?.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;