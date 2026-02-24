"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

export default function TempleConstructionPage() {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmandir");
  const data = content?.jinalayaNavnirmaan;

  return (
    <div className="max-w-7xl bg-whitey mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-maroon font-semibold">
                {data?.header?.subtitle}
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-6 flex flex-col gap-8 sm:py-6 lg:py-8">
          <div className="max-w-5xl bg-lightyellow p-8 relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="rounded-sm p-4 bg-lightyellow">
              <p className="text-lg leading-relaxed text-maroon mb-4">
                {data?.intro?.p1}
                <span className="text-darkpink font-semibold">
                  {" "}
                  {data?.intro?.highlight1}{" "}
                </span>
                {data?.intro?.p2}
                <span className="text-darkpink font-semibold">
                  {" "}
                  {data?.intro?.highlight2}{" "}
                </span>
                {data?.intro?.p3}
              </p>

            </div>
            <div>

            </div>
          </div>

          <div className="max-w-5xl bg-lightyellow p-8 relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="rounded-sm p-4 bg-lightyellow">

              <p className="text-lg leading-relaxed text-maroon">
                {data?.intro?.p4}{" "}
                <span className="text-secondary-color font-semibold">
                  {data?.intro?.highlight3}{" "}
                </span>
                {data?.intro?.p5}
              </p>
            </div>
            <div>

            </div>
          </div>

        </section>

        {/* Project Planning Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.planningSteps?.map((step, index) => (
              <div key={index} className="bg-lightyellow relative rounded-lg p-6 shadow-sm">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="text-center mb-4">
                  <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-base text-center leading-relaxed text-maroon">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stone Processing Section */}
        <section className="my-12">
          <div className="text-center mb-8 lg:mb-12">
            <div className="max-w-fit bg-lightpink rounded-sm mx-auto p-6  ">

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-maroon">
                {data?.process?.title}
              </h3>
            </div>
          </div>

          <div className="max-w-5xl  rounded-sm p-6 mx-auto mb-8 ">

            <p className="text-lg text-center leading-relaxed text-maroon">
              {data?.process?.desc}
            </p>
          </div>

          {/* Stone Procurement */}
          <div className="grid md:grid-cols-4 gap-6 mb-28">
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.12.webp"
                alt="स्टोन ब्लॉक"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-maroon">
                {data?.process?.items?.[0]?.text}
              </p>
            </div>
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.13.webp"
                alt="अंबाजी माइन की खरीदी"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-maroon">
                {data?.process?.items?.[1]?.text}
              </p>
            </div>

            <div className="bg-lightyellow rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.14.webp"
                alt="स्टोन ब्लॉक"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-maroon">
                {data?.process?.items?.[2]?.text}
              </p>
            </div>

            <div className="bg-lightyellow rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.15.webp"
                alt="विदेशी पाषाण"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-maroon">
                {data?.process?.items?.[3]?.text}
              </p>
            </div>
          </div>

          {/* Stone Processing Steps */}
          <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
            <div className="text-center mb-8">
              <div className="max-w-fit bg-lightpink rounded-sm mx-auto p-6 ">

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-maroon">
                  {data?.stoneBlock?.title}
                </h3>
              </div>
            </div>
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm order-1 md:order-2 relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.16.webp"
                    alt="जैसलमेर का स्टोन ब्लॉक"
                    className="w-full h-80 object-contain rounded-lg"
                  />
                  <p className="mt-4 text-maroon font-semibold">{data?.stoneBlock?.subtext1}</p>
                </div>
                <div className="text-center">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.17.webp"
                    alt="जैसलमेर का स्टोन ब्लॉक"
                    className="w-full h-80 object-contain rounded-lg"
                  />
                  <p className="mt-4 text-maroon font-semibold">
                    {data?.stoneBlock?.subtext2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Processing */}
          <div className="bg-lightpink/20 rounded-lg p-6 mb-12 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <h3 className="font-bold text-xl text-maroon mb-6 text-center font-heading">
              {data?.tech?.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.18.webp"
                  alt="CNC डायमंड वायर प्रोफाइल मशीन"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-maroon">
                  {data?.tech?.items?.[0]?.title}
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.19.webp"
                  alt="पिलर निर्माण"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-maroon">
                  {data?.tech?.items?.[1]?.title}
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.20.webp"
                  alt="एक्सीस प्रीफाइल मशीन"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-maroon">
                  {data?.tech?.items?.[2]?.title}
                </p>
              </div>
            </div>
          </div>

          {/* Fine Work Section */}
          <div className="rounded-sm p-20 bg-lightyellow mb-12 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="grid text-center md:grid-cols-1 gap-8 items-center">

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.21.webp"
                    alt="प्रोफाइलिंग"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-maroon">
                    {data?.finishing?.items?.[0]?.title}
                  </p>
                </div>
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.22.webp"
                    alt="इन-ले वर्क"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-maroon">
                    {data?.finishing?.items?.[1]?.title}
                  </p>
                </div>
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.23.webp"
                    alt="मैन्युअल कार्विंग"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-maroon">
                    {data?.finishing?.items?.[2]?.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Project */}
          <div className="bg-lightyellow rounded-lg p-10 my-12 text-center relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>

            <p className="text-lg leading-relaxed text-maroon">
              {data?.delwada?.text}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-lg p-6 relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.24.webp"
                alt="कच्छ-रापर-गढ़वाली जिनालय कार्विंग"
                className="w-full  sm:p-20 object-contain rounded-lg"
              />
            </div>



            <div className="flex flex-col gap-8">

              <div className="bg-lightyellow rounded-lg p-10 text-center relative">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
                <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                  {data?.currentProject?.title}
                </h3>
                <p className="text-lg leading-relaxed text-maroon">
                  {data?.currentProject?.text}
                </p>
              </div>


            </div>




          </div>
        </section>

        {/* Final Temple Images */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="bg-lightyellow rounded-lg p-6 shadow-sm flex-grow relative">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <img
                  alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                  className="w-full object-contain rounded-lg"
                  src="/jinmandir/jinalaya-navnirmaan/img-2.25.webp"
                />
              </div>
              <div className="bg-lightyellow text-maroon rounded-sm p-4 relative">

                <p className="text-base leading-relaxed">
                  {data?.gallery?.[0]?.text}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-lightyellow rounded-lg p-6 shadow-sm flex-grow relative">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <img
                  alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                  className="w-full object-contain rounded-lg"
                  src="/jinmandir/jinalaya-navnirmaan/img-2.26.webp"
                />
              </div>
              <div className="bg-lightyellow text-maroon rounded-sm p-4 relative">

                <p className="text-base leading-relaxed">
                  {data?.gallery?.[1]?.text}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <CallToActionButton
        heading=" जो नुकसान पहले ही हो चुका है उसका क्या?"
        content=" अध्यात्म परिवार ने टीका आदि निकाल कर प्रतिमाजी का लेप-ओप करने के लिए बहुत परिश्रमपूर्वक शुद्ध द्रव्यों की खोज की है। बस, हमें ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ दीजिए-दिलवाइये।"
        id="jinpratima-suraksha-cta"
        href={
          "https://wa.me/918448444050"
        }
      /> */}
    </div>
  );
}