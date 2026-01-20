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
  const data = content?.charitraUpkaranBhakti;

  return (
    <div className="mx-auto max-w-7xl font-body">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-6 sm:p-8 lg:py-8 relative z-10">
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

      <div className="px-4 sm:px-6 lg:px-8">
        <section className="py-8 sm:py-10 lg:py-12">
          <div className="relative rounded-sm p-8 sm:p-12 bg-lightyellow ">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed text-maroon mb-4">
              {data?.intro?.text}
            </p>

          </div>
        </section>

        <section className="pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {data?.items?.map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-lightyellow rounded-sm p-4 border border-lightpink ">
                  <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                    <img
                      src={`/adhyatm/charitra-upkaran-bhakti/img-3.${22 + index}.webp`}
                      alt={item.title}
                      className="w-full max-w-xs h-full object-contain"
                    />
                  </div>
                  <div className="text-center space-y-1  p-4 rounded-lg w-full">
                    <p className="text-maroon font-bold text-lg">{item.title}</p>
                    {item.desc && (
                      <p className="text-maroon  leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <div className="pb-8">
       <CounterStatsUI statsData={statsData} textColor="maroon" />
        </div> */}
      </div>
    </div>
  );
};

export default Page;