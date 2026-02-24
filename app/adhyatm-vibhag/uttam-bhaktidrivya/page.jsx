"use client";
import React from 'react';
import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const BhaktidravyShanshodhan = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.uttamBhaktidrivya;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.count === "60" ? "bg-gradient-to-b from-yellow-400 to-orange-500" :
      stat.count === "08" ? "bg-gradient-to-b from-green-400 to-green-600" :
        "bg-gradient-to-b from-teal-400 to-teal-600"
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
        <section className="py-6 sm:py-8 lg:py-8">
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
          </div>
        </section>

        {/* Document Image Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/uttam-bhaktidrivya/img-3.57.webp"
                    alt="A document from the Ministry of Environment, Forest and Climate Change"
                    className="w-full h-96 object-contain rounded-lg"
                  />
                </div>
                <div className="bg-lightyellow p-4 rounded text-maroon max-w-4xl mx-auto">
                  <p className="text-center text-lg">
                    {data?.documentCaption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.abhishek?.title}
            </h3>
          </div>

          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow mb-8">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-lg text-maroon leading-relaxed">
              {data?.abhishek?.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
            <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 overflow-hidden">
                <img
                  alt="विविध प्रकार के औषधि प्रकल्प"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.58.webp"
                />
              </div>
              <div className="p-4 bg-maroon text-whitey">
                <p className="text-center font-heading font-semibold text-lg">{data?.captions[0]}</p>
              </div>
            </div>

            <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 overflow-hidden">
                <img
                  alt={data?.captions[1]}
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.59.webp"
                />
              </div>
              <div className="p-4 bg-maroon text-whitey">
                <p className="text-center font-heading font-semibold text-lg">{data?.captions[2]}</p>
              </div>
            </div>

            <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
              <div className="h-96 overflow-hidden">
                <img
                  alt={data?.captions[3]}
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.60.webp"
                />
              </div>
              <div className="p-4 bg-maroon text-whitey">
                <p className="text-center font-heading font-semibold text-lg">{data?.captions[3]}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 px-4">
            <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg max-w-md">
              <div className="h-96 overflow-hidden">
                <img
                  alt="विविध गाँवों की मूर्तियाँ (मिट्टी)"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.61.webp"
                />
              </div>
              {/* <div className="p-4 bg-maroon text-whitey">
              <p className="text-center font-heading font-semibold text-lg">
                विविध तीर्थों की मूर्तिका (मिट्टी)
              </p>
            </div> */}
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
      </div>
    </div>
  );
};

export default BhaktidravyShanshodhan;