"use client";
import React from 'react';
import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.prabhubhaktiUpkaran;

  return (
    <div className="max-w-7xl  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
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
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
            <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow">
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


        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.sections?.[0]?.title}
            </h3>

          </div>
          <div className="grid sm:grid-cols-4 w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-1.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-2.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-3.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-4.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-5.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-6.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-7.webp" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-8.webp" alt="" />
          </div>

        </section>
        <section className="py-8 px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.sections?.[1]?.title}
            </h3>

          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2   sm:gap-8">
              {/* First Image and Text Pair */}
              <div className="flex flex-col  p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/prabhubhakti-upkaran/img-3.56-1.webp"
                    alt="ap"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

              </div>

              {/* Second Image and Text Pair */}
              <div className="flex flex-col  p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/prabhubhakti-upkaran/img-3.56-2.webp"
                    alt="ap"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;