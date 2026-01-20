"use client";
import React from 'react';
import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.adhyatmshala;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="mx-auto max-w-7xl font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium my-1">
                {data?.header?.subtitle}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        {/* Introduction Section */}
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
            <div className="">
              <div className='flex w-full gap-2 flex-col sm:flex-row justify-center items-center'>
                <img className="w-full h-96 rounded " src="/adhyatm/adhyatmshala/img-3.51-1.webp" alt="Spiritual event" />
                <img className="w-full h-96 rounded " src="/adhyatm/adhyatmshala/img-3.51-2.webp" alt="Spiritual event" />
              </div>
              <p className="text-lg bg-maroon sm:text-xl text-whitey p-3 rounded-sm font-semibold font-heading text-center mt-2">
                {data?.intro?.caption}
              </p>
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />

      </div>
      <CallToActionButton
        heading={data?.cta?.heading || ""} // Fallback if no text provided
        content={data?.cta?.content || ""}
        id="adhyatamshala-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;