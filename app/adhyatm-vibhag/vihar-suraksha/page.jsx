"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.viharSuraksha;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.count === "1132" ? "bg-gradient-to-b from-yellow-400 to-orange-500" :
      stat.count === "2,43,651" ? "bg-gradient-to-b from-green-400 to-green-600" :
        stat.count === "23,117" ? "bg-gradient-to-b from-green-400 to-green-600" :
          stat.count === "6,484" ? "bg-gradient-to-b from-teal-400 to-teal-600" :
            "bg-gradient-to-b from-blue-400 to-blue-600"
  })) || [];

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-bold my-1">
                {data?.header?.subtitle}
              </p>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="relative max-w-5xl mx-auto rounded-sm p-8 sm:p-12 bg-lightyellow">
          <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
            <TopLeftSvg />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
            <BottomRighSvg />
          </div>
          <p className="text-xl leading-relaxed text-maroon">
            {data?.intro?.text}
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Image and Text Pair */}
            <div className="flex flex-col items-center justify-center bg-maroon  rounded-sm ">
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.20.webp"
                  alt={data?.captions?.left}
                  className="w-full h-full object-contain rounded-sm shadow"
                />
              </div>
              <p className="text-whitey py-3 sm:text-base font-semibold text-center leading-relaxed">
                {data?.captions?.left}
              </p>
            </div>

            {/* Second Image and Text Pair */}
            <div className="flex flex-col items-center justify-center bg-maroon text-whitey rounded-sm ">
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.21.webp"
                  alt={data?.captions?.right}
                  className="w-full h-full object-contain rounded-sm shadow"
                />
              </div>
              <p className="text-whitey py-3 sm:text-base font-semibold text-center leading-relaxed">
                {data?.captions?.right}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
    </div>
  );
};

export default Page;