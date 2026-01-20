"use client";
import React from 'react'
import HeaderSvg from '@/app/_components/HeaderSvg'
import Link from 'next/link'
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmurti");
  const data = content?.jinpratimaNirmaanDhatu;

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">{data?.header?.title}</h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">{data?.header?.date}</p>
            </div>
          </div>
        </div>
      </header>


      <div className='px-2 sm:px-6'>
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className=" p-4 ">
            <p className="text-xl text-center leading-relaxed text-maroon">
              {data?.intro?.text}
            </p>
          </div>
        </section>

        <section className="my-12">

          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="rounded-lg p-6  order-2 md:order-1">
              <h3 className="font-bold text-xl sm:text-2xl text-maroon mb-4 font-heading">{data?.sections?.[0]?.title}</h3>
              <p className="text-base sm:text-lg leading-relaxed text-maroon mb-4">
                {data?.sections?.[0]?.text}
                {/* <Link href="/jinmurti-vibhag/jinpratima-nirmaan-pashaan" className='text-darkpink font-bold'>&nbsp; (पाषाण जिनप्रतिमा निर्माण) &nbsp; </Link> 
                मिट्टी का मॉडल बनाया जाता है, उसके बाद वैक्स की डाई बनाकर वैक्यूम इन्वेस्टमेंट कास्टिंग पद्धति से धातु की प्रतिमाजी का निर्माण किया जाता है। */}
              </p>

            </div>
            <div className="bg-lightyellow rounded-lg p-6 order-1 md:order-2">
              <img
                src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.21.webp"
                alt="Casting Process"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-lg p-6">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <img
                  src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.22.webp"
                  alt="Detailed Idol"
                  className="w-full h-64 object-contain filter grayscale rounded-lg"
                />
                <img
                  src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.23.webp"
                  alt="Symbol"
                  className="w-full h-64 object-contain filter grayscale rounded-lg"
                />
                <img
                  src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.24.webp"
                  alt="Design"
                  className="w-full h-64 object-contain filter grayscale rounded-lg"
                />
              </div>
            </div>
            <div className=" rounded-lg p-6">
              <h3 className="font-bold text-xl sm:text-2xl text-maroon mb-4 font-heading">{data?.sections?.[1]?.title}</h3>
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                {data?.sections?.[1]?.text}
              </p>
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
  )
}

export default Page