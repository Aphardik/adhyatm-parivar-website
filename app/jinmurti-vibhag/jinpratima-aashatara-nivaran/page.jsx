"use client";
import React from "react";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmurti");
  const data = content?.jinpratimaAashatanaNivaran;

  return (
    <div className="bg-whitey max-w-7xl text-maroon font-body">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-semibold">
                {data?.header?.subtitle}
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What is This Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="p-4 mx-auto max-w-4xl sm:p-6">
            <p className="text-content text-lg lg:text-xl leading-relaxed text-center">
              {data?.content?.quote} <br />
              <span className="text-maroon font-bold">{data?.content?.quoteText}</span> <br />{data?.content?.desc}
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-light-bg font-heading text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            समाधान
          </h3>
        </div> */}

        <div className="py-8 flex flex-col sm:flex-row gap-6 ">
          <div className=" bg-lightyellow flex items-center justify-center border-l-4  border-darkyellow p-4 mx-auto max-w-4xl sm:p-6  rounded-2xl ">
            <div className="flex items-center justify-center space-x-4">
              <p className="text-maroon text-lg lg:text-xl leading-relaxed font-medium">
                {data?.content?.solution}
              </p>
            </div>
          </div>
          <div>
            <img
              src="/jinmurti/jinpratima-aashatana-nivaran/img-1.27.webp"
              alt="adhyatm parivar"
            />
          </div>
        </div>
      </section>
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="aashatana-nivaran-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
