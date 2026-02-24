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
  const data = content?.prachinShrutSuraksha;

  const statsDataMap = [
    { count: "60", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "21717", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "32750", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "116", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
    { count: "5,01,544", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "1.25cr +", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
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
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium my-1">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm sm:p-12 p-8 bg-lightyellow">
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

        <section className=" py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className=" rounded-lg overflow-hidden ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-1.webp"
                    alt="1"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-2.webp"
                    alt="2"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden  ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-3.webp"
                    alt="3"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden border ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-4.webp"
                    alt="4"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-5.webp"
                    alt="5"
                    className="w-full h-64 object-cover "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="">
                <div className=" rounded-lg overflow-hidden">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.2.webp"
                    alt="ap"
                    className="w-full h-80 lg:h-96 object-contain "
                  />
                </div>
              </div>

              <div className=" space-y-6">
                <p className="py-3 px-6 rounded-sm bg-lightpink font-bold text-lg text-maroon  leading-relaxed">
                  {data?.gallery?.caption}
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
