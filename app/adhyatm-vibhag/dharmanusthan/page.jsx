"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.dharmanusthan;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="bg-whitey max-w-7xl mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
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
          <div className="grid sm:grid-cols-2 items-center gap-6 sm:gap-10">
            <div className="p-6 bg-lighten-bg">
              <img className="w-full" src="/adhyatm/dharmanusthan/img-3.42.webp" alt="dharmanushthan" />
            </div>
            <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <p className="text-lg text-maroon leading-relaxed">
                {data?.intro?.text}
              </p>
            </div>
          </div>
        </section>

        {/* Stone Selection Criteria Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.gallery?.title}
            </h3>

          </div>
          <div className="grid sm:grid-cols-4 w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-1.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-2.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-3.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-4.webp" alt="" />
          </div>

        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />

      </div>
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="dharmanushthan-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
