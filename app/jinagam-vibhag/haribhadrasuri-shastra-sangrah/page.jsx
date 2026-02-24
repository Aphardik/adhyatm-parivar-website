"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinagam");
  const data = content?.haribhadrasuriShastraSangrah;

  const statsDataMap = [
    { count: "1.25L +", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1007", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "1184", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "16K +", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "50L +", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
  ];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl text-center font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-lg sm:text-base text-center lg:text-lg text-maroon my-1">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="max-w-5xl relative mx-auto rounded-sm p-8 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed text-maroon">
              {data?.intro}
            </p>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-sm overflow-hidden bg-lightyellow p-4">
                  <img
                    src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.12.webp"
                    alt="Library shelves filled with books"
                    className="w-full h-64 object-contain rounded-lg mb-6"
                  />
                  <p className="text-maroon text-lg font-semibold text-center">
                    {data?.captions?.shelves}
                  </p>
                </div>

                <div className="rounded-sm overflow-hidden bg-lightyellow p-4">
                  <img
                    src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.11.webp"
                    alt="Library books collection"
                    className="w-full h-64 object-contain rounded-lg mb-6"
                  />
                  <p className="text-maroon text-lg font-semibold text-center">
                    {data?.captions?.books}
                  </p>
                </div>

                <div className="rounded-sm overflow-hidden bg-lightyellow p-4">
                  <img
                    src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.13.webp"
                    alt="Library entrance with glass doors"
                    className="w-full h-64 object-contain rounded-lg mb-6"
                  />
                  <p className="text-maroon text-lg font-semibold text-center">
                    {data?.captions?.window}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-full max-w-md">
                <div className="rounded-sm overflow-hidden">
                  <img
                    src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.14.webp"
                    alt="Beautifully carved wooden statue of Guru Shri Haribhadra Acharya"
                    className="w-full h-80 lg:h-[90vh] object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-6 w-full max-w-4xl">
                <p className="p-4 bg-lightpink text-maroon rounded-sm text-lg leading-relaxed text-center font-semibold">
                  {data?.captions?.statue}
                </p>
              </div>
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" />
      </div>
    </div>
  );
};

export default Page;