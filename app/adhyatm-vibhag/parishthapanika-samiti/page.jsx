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
  const data = content?.parishthapanikaSamiti;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    label1: stat.label1,
    color: stat.count === "1320" ? "bg-gradient-to-b from-yellow-400 to-orange-500" :
      stat.count.includes("1.62Cr") ? "bg-gradient-to-b from-green-400 to-green-600" :
        stat.count.includes("52L") ? "bg-gradient-to-b from-teal-400 to-teal-600" :
          stat.count === "205" ? "bg-gradient-to-b from-blue-400 to-blue-600" :
            stat.count.includes("4.25Cr") ? "bg-gradient-to-b from-green-400 to-green-600" :
              "bg-gradient-to-b from-yellow-400 to-orange-500"
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
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="max-w-5xl relative mx-auto rounded-sm p-8 sm:p-12 bg-lightyellow">
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

      <section className="pt-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-10">
            {/* Left Column - First Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4 h-full w-full justify-center items-center mb-4">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-1.webp"
                  alt="A rectangular planter with soil - type 1"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-2.webp"
                  alt="A rectangular planter with soil - type 2"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
              </div>
              <p className="text-white py-3 rounded-sm px-4 bg-maroon font-semibold text-center leading-relaxed">
                {data?.details?.[0]?.text}
              </p>
            </div>

            {/* Right Column - Second Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4 h-full w-full justify-center items-center mb-4">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.19-1.webp"
                  alt="A rectangular planter with soil - type 1"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.19-2.webp"
                  alt="A rectangular planter with soil - type 2"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
              </div>

              <p className="text-white py-3 rounded-sm px-4 bg-maroon font-semibold text-center leading-relaxed">
                {data?.details?.[1]?.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
      <CallToActionButton
        heading={data?.cta?.heading}
        content=""
        id="matru-kundi-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;