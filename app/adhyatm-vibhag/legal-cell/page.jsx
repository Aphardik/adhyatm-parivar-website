"use client";
import React from 'react';
import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.legalCell;

  const deekshaTextParts = data?.deeksha?.text?.split(' - ') || [];
  const deekshaQuote = deekshaTextParts[0] || "";
  const deekshaDesc = deekshaTextParts.slice(1).join(' - ') || data?.deeksha?.text || "";

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

        {/* Legal Advocacy Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.advocacy?.title}
            </h3>
          </div>
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed mb-4">
              {data?.advocacy?.text}
            </p>
          </div>
        </section>

        {/* Seminar Image Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex max-w-7xl mx-auto flex-col p-6">
                <div className="w-full flex justify-center items-center">
                  <img
                    src="/adhyatm/legal-cell/img-3.62.webp"
                    alt="ट्रस्टियों के लिए आयोजित संगोष्ठी"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <p className="text-base bg-maroon text-whitey text-center p-4 font-semibold">
                  २७ दिवसीय 'गुरुजिन स्मरणोत्सव' के समय जिनशासन के ट्रस्टियों के लिए आयोजित एक संगोष्ठी का दृश्य ।
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">

          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow text-maroon mb-8">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed mb-4">
              {data?.stories?.text1}
            </p>
            <p className="text-xl leading-relaxed">
              {data?.stories?.text2}
            </p>
          </div>
          <div className="grid sm:grid-cols-4 bg-lightpink w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.63.webp" alt="कानूनी दस्तावेज़ 1" />
            <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.64.webp" alt="कानूनी दस्तावेज़ 2" />
            <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.65.webp" alt="कानूनी दस्तावेज़ 3" />
            <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.66.webp" alt="कानूनी दस्तावेज़ 4" />
          </div>
        </section>

        {/* Bal Deeksha Section */}
        <section className="py-8 mb-12 w-full sm:pb-12 lg:pb-16 ">
          <div className="text-center my-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.deeksha?.title}
            </h3>
          </div>
          <div className="flex bg-lightyellow flex-col md:flex-row items-center justify-center text-gray-800 p-6">
            <div className="flex justify-center mb-6 md:mb-0">
              <img
                alt="भारत का मानचित्र और व्यक्ति की छाया"
                src="/adhyatm/legal-cell/img-3.67.webp"
                className="w-full h-auto"
                width="200"
              />
            </div>
            <div className="text-center md:p-6 md:text-left md:pl-8">
              <div className="rounded-sm p-4 sm:p-10 ">
                <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
                  <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                    <FaQuoteLeft
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                    {deekshaQuote}
                    <FaQuoteRight
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                  </p>
                </div>
                <p className="text-xl text-center text-maroon leading-relaxed">

                  {deekshaDesc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CallToActionButton
        heading={data?.cta?.heading}
        content=""
        id="legal-cell-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;