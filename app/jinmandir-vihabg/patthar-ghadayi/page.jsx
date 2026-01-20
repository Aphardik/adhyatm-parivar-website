"use client";
import React from 'react'
import BottomRighSvg from '@/app/_components/BottomRighSvg'
import CallToActionButton from '@/app/_components/CallToActionButton'
import HeaderSvg from '@/app/_components/HeaderSvg'
import TopLeftSvg from '@/app/_components/TopLeftSvg'
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinmandir");
  const data = content?.pattharGhadayi;
  // console.log(data, "data")

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon"> {data?.header?.title}</h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-bold my-1">{data?.header?.subtitle}</p>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">{data?.header?.date}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm p-8 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed text-maroon">
              {data?.intro?.text}
            </p>
          </div>
        </section>

        <div className="text-center my-8 lg:mt-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            {data?.showcase?.title}
          </h2>
        </div>

        <section className="my-12">
          <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
            <div className="bg-lighten-bg rounded-lg p-6">
              <div className="grid sm:grid-cols-3 gap-8">
                <div className='p-8 bg-lightyellow rounded-sm'>
                  <img
                    src="/jinmandir/patthar-ghadayi/img-2.27.webp"
                    alt="Detailed Idol"
                    className="w-full object-contain "
                  />
                </div>
                <div className='p-8 bg-lightyellow rounded-sm'>
                  <img
                    src="/jinmandir/patthar-ghadayi/img-2.28.webp"
                    alt="Symbol"
                    className="w-full object-contain "
                  />
                </div>
                <div className='p-8 bg-lightyellow rounded-sm'>
                  <img
                    src="/jinmandir/patthar-ghadayi/img-2.29.webp"
                    alt="Design"
                    className="w-full object-contain "
                  />
                </div>
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
  )
}

export default Page