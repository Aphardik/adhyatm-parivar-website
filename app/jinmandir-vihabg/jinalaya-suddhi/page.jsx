"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmandir");
  const data = content?.jinalayaSuddhi;

  const statsDataMap = [
    {
      count: "381",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "85",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "3.5Cr +",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
  ];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="max-w-7xl font-body bg-whitey">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6 lg:py-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
              {data?.header?.title}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-maroon font-medium">
              {data?.header?.date}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="mx-auto px-2 sm:px-6">
        {/* Introduction Section */}
        <section className="py-6 sm:py-6 lg:py-8">
          <div className="max-w-5xl relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="bg-lightyellow rounded-xl p-6 sm:p-8 lg:p-12">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                {data?.intro?.text}
              </p>
            </div>
          </div>
        </section>

        {/* Shatrunjay Section */}
        <section className="py-6 sm:py-6 lg:py-8">
          {/* Section Title */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-6 rounded-lg">
              {data?.shatrunjay?.title}
            </h3>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="space-y-6 text-center">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                {data?.shatrunjay?.p1}
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                {data?.shatrunjay?.p2}
              </p>
            </div>
          </div>

          {/* Before/After Images - First Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-1.2.webp"
                alt="Jinalay Cleaning Before"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  {data?.labels?.before}
                </p>
              </div>
            </div>
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-1.1.webp"
                alt="Jinalay Cleaning After"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  {data?.labels?.after}
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Images - Second Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.11-2.1.webp"
                alt="Jinalay Cleaning Before"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  {data?.labels?.before}
                </p>
              </div>
            </div>
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.11-2.2.webp"
                alt="Jinalay Cleaning After"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  {data?.labels?.after}
                </p>
              </div>
            </div>
          </div>

          {/* Risk Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-6 rounded-lg">
              {data?.risk?.title}
            </h3>
          </div>

          {/* Risk Images Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-2.1.webp"
                alt="Risk Work 1"
                className="w-full h-48 sm:h-64 lg:h-80 object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-2.2.webp"
                alt="Risk Work 2"
                className="w-full h-48 sm:h-64 lg:h-80 object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-3.1.webp"
                alt="Risk Work 3"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-3.2.webp"
                alt="Risk Work 4"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <CounterStatsUI statsData={statsData} textColor="maroon" />
      </div>
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="jinalay/upashray-suddhi-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
