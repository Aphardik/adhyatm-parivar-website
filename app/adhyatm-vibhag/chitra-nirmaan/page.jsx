"use client";
import HeaderSvg from '@/app/_components/HeaderSvg';
import React from 'react';
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.chitraNirmaan;

  return (
    <div className="max-w-7xl mx-auto font-body">
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

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
            <div className="rounded-sm text-maroon p-4 sm:p-10 bg-lightyellow">
              <p className="sm:text-lg leading-relaxed mb-1">
                {data?.intro?.p1}
              </p>
              <p className="sm:text-lg leading-relaxed mb-1">
                {data?.intro?.p2}
              </p>
            </div>
          </div>
        </section>

        {/* Completed Works Section */}
        <section className="py-8 w-full sm:pb-6 lg:pb-6">

          <div className="rounded-sm text-maroon p-4 sm:p-10 bg-lightyellow">
            <p className="sm:text-lg leading-relaxed">
              {data?.completed?.text}
            </p>
          </div>
        </section>


        {/* Images Section */}
        <section className="py-8 px-4">

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="h-full w-full flex flex-col justify-center items-center mb-6">
                  <img
                    src="/adhyatm/chitra-nirmaan/img-3.69.webp"
                    alt="चित्र निर्माण कार्यशाला"
                    className="h-full object-contain rounded-t-sm"
                  />
                  <p className="text-base rounded-b-sm text-center bg-lightyellow p-4 font-semibold text-maroon">
                    {data?.workshop?.text}
                  </p>
                </div>
                <div className="">

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