"use client";
import React from "react";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.suddhPujaDravya;

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: stat.count === "125" ? "bg-gradient-to-b from-yellow-400 to-orange-500" :
      stat.count === "15" ? "bg-gradient-to-b from-green-400 to-green-600" :
        "bg-gradient-to-b from-green-400 to-green-600"
  })) || [];


  return (
    <div className="bg-whitey mx-auto font-body max-w-7xl">
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

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center my-8 lg:my-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink  text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            {data?.intro?.title}
          </h3>
        </div>

        {/* Products Section with Alternating Layout */}
        <section className="my-12">
          {/* Product 1 - Gauseersh Chandan - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                alt="A set of sandalwood pieces"
                className="w-full h-64 object-contain rounded-xl"
                src="/adhyatm/suddh-puja-dravya/img-3.30.webp"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.gauseershChandan?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.gauseershChandan?.desc}
              </p>
            </div>
          </div>

          {/* Product 2 - Chandan Ka Tel - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.chandanKaTel?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.chandanKaTel?.desc}
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                alt="Bottles of sandalwood oil"
                className="w-full h-64 object-contain rounded-xl"
                src="/adhyatm/suddh-puja-dravya/img-3.31.webp"
              />
            </div>
          </div>

          {/* Product 3 - Vasachoorna - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.32.webp"
                alt="Vasachoorna"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.vasachoorna?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.vasachoorna?.desc}
              </p>
            </div>
          </div>

          {/* Product 4 - Orisaya - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.orisaya?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.orisaya?.desc}
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.33.webp"
                alt="Orisaya"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product 5 - Kesar - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.34.webp"
                alt="Kesar"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.kesar?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.kesar?.desc}
              </p>
            </div>
          </div>

          {/* Product 6 - Gandhakashaayi Vastra - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.gandhakashaayiVastra?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.gandhakashaayiVastra?.desc}
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.35.webp"
                alt="Gandhakavari Vastra"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product 7 - Yaksha Kardam Choorna - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.36.webp"
                alt="Yuktachandana Choorna"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.yakshaKardamChoorna?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.yakshaKardamChoorna?.desc}
              </p>
            </div>
          </div>

          {/* Product 8 - Sone Chandi Ka Barak - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.soneChandiKaBarak?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.soneChandiKaBarak?.desc}
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.39.webp"
                  alt="Gold leaf"
                  className="sm:h-52 object-cover rounded-full"
                />
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.40.webp"
                  alt="Silver leaf"
                  className="sm:h-52 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Product 9 - Sone Ka Badla - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.41.webp"
                alt="Gold and silver leaf in containers"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                {data?.products?.soneKaBadla?.title}
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.soneKaBadla?.desc}
              </p>
            </div>
          </div>

          {/* Kapoor Section - Special 3 Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="bg-lightyellow rounded-xl p-8 text-center border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.37.webp"
                alt="Bheemseti Kapoor"
                className="mx-auto mb-4 rounded-full h-64 w-64 object-cover"
              />
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                {data?.products?.bheemsetiKapoor?.title}
              </h3>
            </div>

            <div className=" rounded-xl p-8">
              <p className="text-lg leading-relaxed text-maroon">
                {data?.products?.bheemsetiKapoor?.desc}
              </p>
            </div>

            <div className="bg-lightyellow rounded-xl p-8 text-center border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.38.webp"
                alt="Ghanasara Kapoor"
                className="mx-auto mb-4 rounded-full h-64 w-64 object-cover"
              />
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                {data?.products?.ghanasaraKapoor?.title}
              </h3>
            </div>
          </div>
        </section>

        <div className="pb-8">
          <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
        </div>
      </div>
      <CallToActionButton
        heading={data?.cta?.text}
        content=""
        id="suddh-puja-dravya-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;