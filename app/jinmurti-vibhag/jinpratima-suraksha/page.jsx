"use client";
import React from "react";
import CounterStatsUI from "@/app/_components/StatData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HexagonalSvg from "@/app/_components/HexagonalSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmurti");
  const data = content?.jinpratimaSuraksha;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="bg-whitey max-w-7xl text-maroon  font-body">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40 overflow-hidden">
        <HeaderSvg />

        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-maroon font-semibold">
                {data?.header?.subtitle}
              </p>
              <p className="sm:text-base text-center lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        {/* Section 1: Introduction */}
        <section className="py-8 sm:py-8 lg:py-8">
          <div className="mx-auto  max-w-7xl">
            <div className="bg-whitey  p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 text-center">
                <p className="text-maroon text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                  {data?.intro?.p1}
                  <span className="text-darkpink font-semibold">
                    {" "}
                    {data?.intro?.p1Highlight}
                  </span>
                </p>
                <p className="text-maroon text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                  {data?.intro?.p2}{" "}
                  <span className="text-darkpink font-sans font-bold">
                    {data?.intro?.p2Highlight}
                  </span>{" "}
                  {data?.intro?.p2End}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problems - Modern Grid Layout */}
        <section className="py-8 sm:mb-8 lg:mb-8 ">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                {data?.problems?.title}
              </h2>
            </div>

            {/* Problem 1 - Image Left */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-whitey rounded-sm  overflow-hidden">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.1.webp"
                      alt="Damaged Statue"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    {data?.problems?.items?.[0]?.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon leading-relaxed">
                    {data?.problems?.items?.[0]?.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 2 - Image Right */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    {data?.problems?.items?.[1]?.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon mb-4 leading-relaxed">
                    {data?.problems?.items?.[1]?.desc}
                  </p>
                </div>
                <div className="bg-whitey rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.2.webp"
                    alt="Damaged Feet"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Problem 3 - Image Left */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex  flex-col sm:flex-row  gap-2">
                    <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.3-1.webp"
                        alt="Root Cause Analysis"
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                    <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.3-2.webp"
                        alt="Root Cause Analysis"
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    {data?.problems?.items?.[2]?.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon leading-relaxed">
                    {data?.problems?.items?.[2]?.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 4 - Image Right */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    {data?.problems?.items?.[3]?.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon mb-4 leading-relaxed">
                    {data?.problems?.items?.[3]?.desc}
                  </p>
                </div>
                <div className="bg-whitey flex flex-col gap-2 sm:flex-row items-center rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.4-1.webp"
                    alt="Damaged Parts"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.4-2.webp"
                    alt="Damaged Parts"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Root Cause Analysis */}
        <section className="my-8 sm:my-8 lg:my-8 bg-whitey">
          <div className="mx-auto max-w-7xl">
            {/* Ancient Wisdom Quote */}
            <div className="mb-8 lg:mb-12">
              <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                  {data?.rootCause?.title}
                </h3>
              </div>
              <div className="bg-lightyellow rounded-sm  p-6 sm:p-8">
                <p className="text-maroon text-lg sm:text-xl font-medium text-center">
                  {data?.rootCause?.ancientWisdom}
                </p>
                <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
                  <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                    <FaQuoteLeft
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                    {data?.rootCause?.quote}
                    <FaQuoteRight
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* Root Cause Analysis */}
            <div className="">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex  flex-col sm:flex-row  gap-2">
                  <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.5.1.webp"
                      alt="Root Cause Analysis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.5.2.webp"
                      alt="Root Cause Analysis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-maroon">
                    {data?.rootCause?.mainTitle}
                  </h3>
                  <div className="space-y-4">
                    {data?.rootCause?.steps?.map((step, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <span className="w-8 h-8 bg-maroon text-whitey rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="font-medium text-lg">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Updated सौभाग्य का सीमाचिह्न section */}
        <div className=" bg-whitey my-8 sm:my-8 lg:my-8">
          <div className="container mx-auto  max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-lightpink text-maroon px-8 py-4 rounded-sm ">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold">
                  {data?.story?.title}
                </h1>
              </div>
            </div>

            {/* Main Story Section */}
            <div className="bg-whitey mb-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Story Content */}
                <div className="space-y-6">
                  {data?.story?.sections?.map((section, index) => (
                    <div key={index} className="bg-lightyellow p-6 rounded-lg border-l-4 border-darkyellow">
                      <h2 className="text-xl font-semibold font-heading  text-maroon mb-4">
                        {section?.title}
                      </h2>
                      <div className="space-y-3 text-maroon leading-relaxed">
                        {section?.content?.map((text, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* <div className="bg-whitey p-6 rounded-lg border-2 border-light-bg">
                  <p className="text-xl font-bold text-center text-maroon">
                    हमारे सौभाग्य का यह सीमाचिह्न है।
                  </p>
                </div> */}
                </div>

                {/* Visual Content Section */}
                <div className="space-y-6">
                  <div className="bg-whitey p-8 rounded-md ">
                    <h3 className="text-base font-semibold text-center mb-4 text-maroon">
                      {data?.story?.images?.title}
                    </h3>
                    <div className="bg-whitey h-48 flex items-center justify-center rounded-lg mb-4">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.10.webp"
                        alt="क्षतिग्रस्त प्रतिमा"
                        className="w-full h-full object-contain rounded-lg"
                      />
                      {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                        प्रतिमा छवि
                      </div> */}
                    </div>
                    <p className="font-semibold text-center text-maroon bg-whitey p-3 rounded">
                      {data?.story?.images?.label1}
                    </p>
                  </div>

                  <div className="bg-whitey h-64 flex items-center justify-center rounded-lg">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.11.webp"
                      alt="क्षतिग्रस्त प्रतिमा"
                      className="w-full h-full object-contain rounded-lg"
                    />
                    {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                      प्रतिमा छवि
                    </div> */}
                  </div>

                  <div className="bg-whitey rounded-md  flex items-center justify-center  p-8">
                    <div className="grid lg:grid-cols-1">
                      <div className="lg:col-span-2">
                        <div className="bg-whitey h-56 flex items-center justify-center rounded-lg">
                          <img
                            src="/jinmurti/jinpratima-suraksha/img-1.12.webp"
                            alt="संरक्षित प्रतिमा"
                            className="w-full h-full object-contain rounded-lg"
                          />
                          {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                            प्रतिमा छवि
                          </div> */}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="bg-whitey p-4 rounded-lg ">
                          <p className="font-semibold text-maroon">
                            {data?.story?.images?.label2}
                          </p>
                        </div>
                        {/* <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="font-semibold text-blue-800 text-center">
                          लेपकार्य संपन्न होने के बाद आंखों को कैसी ठंडक मिलती
                          है?
                        </p>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CounterStatsUI statsData={statsData} />


        <section className="py-8 sm:py-8 lg:py-8 bg-whitey">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                {data?.milestones?.title}
              </h2>
            </div>

            <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75%  rounded-sm mb-8  overflow-hidden h-52 sm:h-auto transition-shadow">
              {/* <div className="h-full bg-lightyellow flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.6.webp"
                  alt="Work Done"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="block sm:hidden">
                <HexagonalSvg accentColor="red" />
              </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                  {data?.milestones?.items?.[0]?.title}
                </h4>
                <p className="text-maroon leading-relaxed">
                  {data?.milestones?.items?.[0]?.desc}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 lg:mb-8">
              {/* Card 1 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm h-52 sm:h-auto overflow-hidden hover: transition-shadow">
                <HexagonalSvg accentColor="red" />
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.7.webp"
                    alt="Girnar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    {data?.milestones?.items?.[1]?.title}
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    {data?.milestones?.items?.[1]?.desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% h-52 sm:h-auto rounded-sm  overflow-hidden hover: transition-shadow">
                <HexagonalSvg accentColor="red" />
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.8.webp"
                    alt="Sametshikhar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    {data?.milestones?.items?.[2]?.title}
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    {data?.milestones?.items?.[2]?.desc}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm h-52 sm:h-auto overflow-hidden transition-shadow sm:col-span-2 lg:col-span-1">
                <HexagonalSvg accentColor="red" />
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.9.webp"
                    alt="Shankheshwar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    {data?.milestones?.items?.[3]?.title}
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    {data?.milestones?.items?.[3]?.desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm mb-8 h-52 sm:h-auto  overflow-hidden hover: transition-shadow">
              {/* <div className="h-full bg-lightyellow flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.6.webp"
                  alt="Work Done"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="block sm:hidden">
                <HexagonalSvg accentColor="red" />
              </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                  {data?.milestones?.items?.[4]?.title}
                </h4>
                <p className="text-maroon leading-relaxed">
                  {data?.milestones?.items?.[4]?.desc}
                </p>
              </div>
            </div>
          </div>

        </section>
        <section className="py-8 sm:py-8 lg:py-8 ">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                {data?.pledge?.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8 lg:gap-8">
              <div className="bg-lightyellow rounded-sm  p-6 sm:p-8">
                {/* <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-4 text-maroon">
                प्रत्येक पूजक का एक संकल्प:
              </h3> */}

                <div className="bg-lightyellow rounded-sm ">
                  <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
                    {data?.pledge?.text1}
                  </p>
                  <div className="flex items-center justify-center my-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
                  <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
                    {data?.pledge?.text2}
                  </p>
                  <div className="flex items-center justify-center my-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="jinpratima-suraksha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div >
  );
};

export default Page;
