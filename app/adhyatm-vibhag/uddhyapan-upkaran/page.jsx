"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const UdyapanPage = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.uddhyapanUpkaran;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.count === "15" ? "bg-gradient-to-b from-yellow-400 to-orange-500" :
      "bg-gradient-to-b from-green-400 to-green-600"
  })) || [];

  return (
    <div className="max-w-7xl mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-bold my-1">
                {data?.header?.subtitle}
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
        <section className="py-8 text-maroon sm:py-12 lg:py-16">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed mb-4">
              {data?.intro?.p1}
            </p>
            <p className="text-xl leading-relaxed">
              {data?.intro?.p2}
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.gallery?.title}
            </h3>
          </div>

          <div className="grid sm:grid-cols-3 w-full items-center gap-4">
            <img
              className="mx-auto w-full p-4 "
              src="/adhyatm/uddhyapan-upkaran/img-3.44.webp"
              alt="Decorative items including an elephant statue and swastika symbol"
            />
            <img
              className="mx-auto w-full p-4 "
              src="/adhyatm/uddhyapan-upkaran/img-3.45.webp"
              alt="Decorative pots with intricate designs"
            />
            <img
              className="mx-auto w-full p-4 "
              src="/adhyatm/uddhyapan-upkaran/img-3.46.webp"
              alt="A large decorative item in a spacious room"
            />
          </div>
        </section>

        {/* Footer Note Section */}
        {/* <section className="py-4">
        <div className="bg-light-bg text-maroon text-base font-bold p-4 text-center rounded-sm">
          इतने सारे उपकरण आवश्यकता वाले योग्य स्थानों पर पहुंचाए गए हैं।
        </div>
      </section> */}
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
      </div>
      <CallToActionButton
        heading={data?.cta?.text}
        content=""
        id="udhyapan-upkaran-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default UdyapanPage;