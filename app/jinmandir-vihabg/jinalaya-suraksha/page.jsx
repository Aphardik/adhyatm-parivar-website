"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const JinalayaSuraksha = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmandir");
  const data = content?.jinalayaSuraksha;

  const statsDataMap = [
    { count: "65", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1.25Cr +", color: "bg-gradient-to-b from-green-400 to-green-600" },
  ];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  return (
    <div className="bg-whitey max-w-7xl font-body text-maroon">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl  font-heading font-bold text-maroon">
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

      {/* What is This Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-2 sm:p-4  mx-auto max-w-4xl">
            <div className="space-y-4">
              <p className="text-maroon leading-relaxed text-center text-lg">
                {data?.whatIsThis?.text}
              </p>
              <div className=" p-4 rounded-sm  border-b-2 border-maroon/50 max-w-2xl mx-auto">
                <p className="text-maroon font-semibold sm:text-xl font-base text-center">
                  {data?.whatIsThis?.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-2 sm:py-4 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-lightyellow rounded p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/5">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.3.webp"
                  alt="Additional repair"
                  className="w-full h-56 object-cover rounded"
                />
              </div>
              <div className="lg:w-4/5 space-y-4">
                <div className="relative border border-maroon/20 p-6 sm:p-14 rounded-sm">
                  <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                    <TopLeftSvg />
                  </div>
                  <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                    <BottomRighSvg />
                  </div>
                  <p className="text-maroon sm:text-lg leading-relaxed">
                    {data?.solution?.p1}
                  </p>
                  <p className="text-maroon sm:text-lg leading-relaxed font-medium">
                    {data?.solution?.p2}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded p-4">
              <p className="text-maroon text-lg font-semibold leading-relaxed text-center">
                {data?.solution?.highlight}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before After Results Section */}
      <section className="py-6 sm:py-6 lg:py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.results?.title}
            </h3>
          </div>

          <div className="bg-lightyellow p-6 sm:p-8 ">
            {/* Before After Comparison */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
              {/* Before Image */}
              <div className="relative group">
                <div className="bg-whitey p-4">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.1.webp"
                    alt="मरम्मत पूर्व"
                    className="w-80 h-80 object-cover transition-colors duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    पहले
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-gray-800 font-semibold text-lg">
                      {data?.results?.before}
                    </span>
                    <p className="text-maroon text-sm mt-1">
                      {data?.results?.beforeDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex flex-col items-center">
                <div className="bg-whitey text-maroon w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ">
                  VS
                </div>
                <div className="text-maroon text-sm mt-2 font-medium">
                  {data?.results?.vs}
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="bg-whitey p-4 ">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.2.webp"
                    alt="मरम्मत पश्चात"
                    className="w-80 h-80 object-cover transition-colors duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    बाद में
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-gray-800 font-semibold text-lg">
                      {data?.results?.after}
                    </span>
                    <p className="text-maroon text-sm mt-1">
                      {data?.results?.afterDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-whitey text-maroon px-6 py-3 rounded-full font-semibold">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {data?.results?.conclusion}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abu Delwada Success Story Section */}
      <section className="py-8 sm:py-12 text-lg lg:py-16 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.abuDelwada?.title}
            </h3>
          </div>

          <div className="bg-lightyellow rounded p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="text-2xl font-heading font-semibold text-maroon mb-4">
                {data?.abuDelwada?.subTitle}
              </div>
              <div className="w-24 h-1 bg-secondary-color mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1  gap-6">
              <div className="space-y-4 ">
                <p className="text-maroon leading-relaxed">
                  {data?.abuDelwada?.p1}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                  {data?.abuDelwada?.cards?.map((card, index) => (
                    <div key={index} className="bg-lightyellow border relative border-maroon/20 p-4 py-10 rounded-sm">
                      <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                        <TopLeftSvg />
                      </div>
                      <p className="text-maroon font-medium">
                        {card}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remarkable Incident Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.incident?.title}
            </h3>
          </div>

          <div className="bg-whitey rounded p-0 sm:p-8 ">
            <div className="bg-lightyellow text-lg p-6 rounded-sm mb-6">
              <p className="text-maroon text-xl font-bold mb-2">{data?.incident?.startTitle}</p>
              <p className="text-maroon">
                {data?.incident?.startDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 text-lg lg:grid-cols-2 gap-6">
              <div className="bg-whitey p-6 rounded-sm space-y-6">
                <p className="text-maroon leading-relaxed">
                  {data?.incident?.p1}
                </p>

                <p className="text-maroon leading-relaxed">
                  {data?.incident?.p2}
                </p>

                <div className="relative bg-lightyellow p-4 sm:p-8 rounded-sm  ">
                  <div className="text-maroon  text-center leading-relaxed font-medium text-xl">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <TopLeftSvg />
                    </div>
                    <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <BottomRighSvg />
                    </div>
                    <span className="p-2 ">{data?.incident?.officerQuote}</span>
                    <p className="font-bold my-4">{data?.incident?.officerStatement}</p>
                    <span className="p-2 ">{data?.incident?.conclusion}</span>
                  </div>
                </div>
              </div>

              <div className="bg-lightyellow p-4 rounded-sm">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.9.webp"
                  alt="पुराने पत्थर की दीवार"
                  className="w-full h-auto rounded-sm border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vimalvasahi Work Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.vimalvasahi?.title}
            </h3>
          </div>

          <div className="bg-whitey rounded p-0 sm:p-8 ">
            <div className="space-y-6">
              {/* First block - normal */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="sm:w-1/2">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.4.webp"
                    alt="विमलवसही"
                    className="w-full h-auto rounded-sm border border-gray-300"
                  />
                </div>
                <div className="sm:w-1/2 p-4">
                  <p className="text-maroon text-lg leading-relaxed">
                    {data?.vimalvasahi?.p1}
                  </p>
                </div>
              </div>

              {/* Second block - reversed */}
              <div className="flex flex-col sm:flex-row-reverse items-center gap-6">
                <div className="sm:w-1/2 p-4">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.5.webp"
                    alt="विमलवसही"
                    className="w-full h-auto "
                  />
                </div>
                <div className="sm:w-1/2">
                  <p className="text-maroon text-lg leading-relaxed">
                    {data?.vimalvasahi?.p2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranakpur Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.ranakpur?.title}
            </h3>
          </div>

          <div className="bg-whitey rounded">
            <div className="mb-6">
              <p className="text-maroon text-xl mb-4 leading-relaxed text-center">
                {data?.ranakpur?.intro1}
              </p>

              <p className="text-maroon font-semibold text-xl leading-relaxed text-center">
                {data?.ranakpur?.intro2}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data?.ranakpur?.cards?.map((card, index) => (
                <div key={index} className="bg-lightyellow p-4 rounded-sm">
                  <img
                    src={index === 0 ? "/jinmandir/jinalaya-suraksha/img-2.6.webp" : index === 1 ? "/jinmandir/jinalaya-suraksha/img-2.7.webp" : "/jinmandir/jinalaya-suraksha/img-2.8.webp"}
                    alt={card.title || "Image"}
                    className="w-full h-auto  mb-4"
                  />
                  <p className="text-base text-maroon leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData} textColor="maroon" />
      <CallToActionButton
        heading={data?.cta?.heading}
        content={data?.cta?.content}
        id="jinalay-suraksha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};
export default JinalayaSuraksha;
