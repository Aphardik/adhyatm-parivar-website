"use client";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmandir");
  const data = content?.devBagicha;

  const statsDataMap = [
    {
      count: "42",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "33L +",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "7L +",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
  ];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  const immediateActions = data?.solution?.steps || [];

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="bg-lightyellow relative rounded-sm  p-6 sm:p-8">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
              <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                <FaQuoteLeft
                  size={32}
                  className="text-maroon flex-shrink-0"
                />
                {data?.quotes?.main}
                <FaQuoteRight
                  size={32}
                  className="text-maroon flex-shrink-0"
                />
              </p>
            </div>
            <p className="text-maroon tracking-wide text-base sm:text-lg font-medium text-center">
              {data?.quotes?.desc} <span className="font-bold text-darkpink"> {data?.quotes?.highlight} {" "}</span>  {data?.quotes?.continuation}
            </p>
          </div>
        </section>

        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
            {data?.showcase?.title}
          </h3>
        </div>
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0 ">
          <div className="grid lg:grid-cols-3 items-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.30.webp" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                {data?.showcase?.items?.[0]?.title}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.31.webp" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                {data?.showcase?.items?.[1]?.title}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.32.webp" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                {data?.showcase?.items?.[2]?.title}
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
            {data?.problem?.title}
          </h3>
        </div>
        {/* Problem Section - What Happened */}
        <section className="py-4 text-center sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm p-8 sm:p-12 bg-lightyellow mb-6">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-maroon">
              <p>
                {data?.problem?.desc1}
              </p>
              <p>
                {data?.problem?.desc2}
              </p>
              <div className="bg-lightyellow p-4 rounded-lg mt-6">
                <p className="text-xl font-semibold text-maroon">
                  {data?.problem?.quote}
                </p>
              </div>
              <p>
                {data?.problem?.desc3}
              </p>
            </div>
          </div>

          <div className="text-center my-6  sm:mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
              {data?.problem?.cycloneTitle}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-1.webp"
                alt="तुफान क्षति 1"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-2.webp"
                alt="तुफान क्षति 2"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-3.webp"
                alt="तुफान क्षति 3"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Solution Section - What Was Done */}
        <section className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
          <div className="relative rounded-sm p-8 sm:p-10 bg-lightyellow mb-8  transition-shadow duration-300 border border-white/20">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15  transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <h3 className="text-xl text-center font-heading sm:text-2xl font-semibold text-maroon mb-6 pb-3 border-b border-maroon/20">
              {data?.solution?.title}
            </h3>

            <div className="space-y-5 mb-8">
              {immediateActions.map((action, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/30 backdrop-blur-sm pl-10">
                    <p className="text-base sm:text-lg text-maroon leading-relaxed">
                      {action}
                    </p>
                  </div>
                  <div className="absolute -left-6 -top-1/8  transform w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-800 flex items-end justify-end pr-1" style={{ borderRadius: '18px 18px 4px 18px' }}>
                    <span className="text-xl font-sans font-extrabold text-white">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className=" backdrop-blur-sm rounded-2xl p-8 mt-8  overflow-hidden">
              <p className="text-base sm:text-lg leading-relaxed text-maroon font-semibold text-center z-10 pl-4">
                {data?.solution?.result}
              </p>
            </div>
          </div>

          <div className="text-center my-6  sm:mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
              {data?.solution?.galleryTitle}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-4.webp"
                  alt="सुधार कार्य 1"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md  transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-5.webp"
                  alt="सुधार कार्य 2"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md  transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-6.webp"
                  alt="सुधार कार्य 3"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 relative sm:py-16 bg-lightyellow mb-12">
          <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
            <TopLeftSvg />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15  transition-opacity duration-300">
            <BottomRighSvg />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-maroon px-4">
              {data?.miracle?.text}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 items-center">
            <div className="w-full">
              <img
                src="/jinmandir/dev-bagicha/img-2.34-1.webp"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <img
                src="/jinmandir/dev-bagicha/img-2.34-2.webp"
                alt=""
                className="w-full h-auto"
              />
              <img
                src="/jinmandir/dev-bagicha/img-2.34-3.webp"
                alt=""
                className="w-full h-auto"
              />
              <img
                src="/jinmandir/dev-bagicha/img-2.34-4.webp"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" />
      </div>
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="dev-bagicha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
