"use client";
import React from "react";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

// export const metadata = {
//   title: 'जिनप्रतिमा निर्माण - पाषाण | जिनमूर्ति विभाग',
//   description: '',
// }

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmurti");
  const data = content?.jinpratimaNirmaanPashaan;

  return (
    <div className="max-w-7xl bg-whitey mx-auto font-body">
      {/* Header Section */}
      <header className="relative flex items-center justify-center h-40 bg-lightpink">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>

              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        {/* Stone Selection Criteria Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          {/* <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            पाषाण की जिनप्रतिमा का निर्माण...
          </h3>
        </div> */}
          <p className="mb-6 text-center font-bold text-maroon text-lg">
            {data?.intro?.title}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  1
                </span>
              </div>
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                {data?.criteria?.[0]?.title}
              </h3>
              <p className="text-base text-maroon leading-relaxed">
                {data?.criteria?.[0]?.desc}

              </p>
            </div>

            <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  2
                </span>
              </div>
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                {data?.criteria?.[1]?.title}
              </h3>
              <p className="text-base text-maroon leading-relaxed">
                {data?.criteria?.[1]?.desc}
              </p>
            </div>

            <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  3
                </span>
              </div>
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                {data?.criteria?.[2]?.title}
              </h3>
              <p className="text-base text-maroon leading-relaxed">
                {data?.criteria?.[2]?.desc}
              </p>
            </div>
          </div>
        </section>

        {/* Process Documentation Section */}
        <section className="my-12">

          {/* Process Step 1 - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.13.webp"
                alt="पाषाण के पीस में छोटा होल करके स्टेन डाला जाता है।"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-lightpink/20 rounded-lg p-6">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.process?.[0]?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.process?.[0]?.desc}
              </p>
            </div>
          </div>

          {/* Process Step 2 - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightpink/20 rounded-lg p-6 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.process?.[1]?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.process?.[1]?.desc}
              </p>
            </div>
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm order-1 md:order-2">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.14.webp"
                alt="यह जो लाइन दिख रही है, वह वरण है।"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Process Step 3 - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.15.webp"
                alt="मिट्टी का नयनाकर्षक मॉडल"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-lightpink/20 rounded-lg p-6">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.process?.[2]?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.process?.[2]?.desc}
              </p>
            </div>
          </div>

          {/* Process Step 4 - Text Left, Images Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightpink/20 rounded-lg p-6 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.process?.[3]?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.process?.[3]?.desc}
              </p>
            </div>
            <div className="bg-lightyellow  rounded-lg p-6  order-1 md:order-2">
              <div className="flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.16.webp"
                  alt="3D स्कैन और एडिटिंग"
                  className="w-full h-64 object-contain rounded-lg"
                />
                <img
                  src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.17.webp"
                  alt="डिजिटल प्रसंस्करण"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-lg p-6">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.181920.webp"
                alt="Process 3"
                className="w-full h-64 object-contain  rounded-lg"
              />
            </div>
            <div className="rounded-lg p-6">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">{data?.process?.[4]?.title}</h3>
              <p className="text-base leading-relaxed text-maroon">
                {data?.process?.[4]?.desc}
              </p>
            </div>
          </div>
        </section>
        <section className="py-6 sm:py-8 lg:py-8">
          <div className="bg-lightyellow rounded-sm  p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
              <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
              <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
            </div>
            <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
              {data?.conclusion?.text}
            </p>
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
};

export default Page;
