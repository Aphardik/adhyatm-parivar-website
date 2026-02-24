"use client";
import React from 'react';
import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.anusthanAayojan;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="max-w-7xl mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl text-center font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium my-1">
                {data?.header?.subtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
            <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <p className="text-xl text-maroon leading-relaxed">
                {data?.intro?.text}
              </p>
            </div>
            <div className="p-6 bg-lighten-bg">
              <img className="w-full rounded shadow-lg" src="/adhyatm/anusthan-aayojan/img-3.47.webp" alt="Spiritual event" />
              <p className="text-lg text-whitey bg-maroon rounded-sm py-3 sm:text-xl font-semibold font-heading text-center mt-2">
                {data?.intro?.highlight}
              </p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.activities?.title}
            </h3>
          </div>

          {/* Activity Cards */}
          <div className="grid max-w-5xl mx-auto sm:grid-cols-1 gap-6 mb-8">
            <div className="flex items-center justify-evenly bg-lightyellow p-4 rounded-md">
              <img
                alt="वाचना श्रेणी"
                className="w-1/3 rounded"
                src="/adhyatm/anusthan-aayojan/img-3.49.webp"
              />
              <div className="ml-4">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-maroon">{data?.activities?.vachana?.title}</h2>
                <p className="text-maroon font-semibold">
                  {data?.activities?.vachana?.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center bg-lightyellow justify-evenly p-4 rounded-md">
              <img
                alt="ब्रह्मयात्रा"
                className="w-1/3 order-2 rounded"
                src="/adhyatm/anusthan-aayojan/img-3.50.webp"
              />
              <div className="ml-4 order-1">
                <h2 className="text-lg sm:text-xl font-heading font-bold text-maroon">{data?.activities?.brahmyatra?.title}</h2>
                <p className="text-maroon font-semibold">
                  {data?.activities?.brahmyatra?.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="w-full sm:p-10">
            <div className="text-center my-8 lg:my-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                {data?.activities?.deeksha?.title}
              </h2>
            </div>
            <img
              alt="अनुष्ठान आयोजन का व्यापक दृश्य"
              className="w-full rounded shadow-lg"
              src="/adhyatm/anusthan-aayojan/img-3.48.webp"
            />

          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />

      </div>
    </div>
  );
};

export default Page;