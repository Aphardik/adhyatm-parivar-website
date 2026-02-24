"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import { FaCheck } from "react-icons/fa";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

// export const metadata = {
//   title: "विविध संघों - आराधना भवनों का संचालन | अध्यात्म विभाग",
//   description: "",
// };

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "adhyatm");
  const data = content?.vividhSangh;

  const bhavans = data?.otherBhavans?.list || [];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    color: "bg-gradient-to-b from-yellow-400 to-orange-500",
  })) || [];

  return (
    <div className="max-w-7xl mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
        <section className="py-8 sm:py-12 lg:py-16">
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

        {/* Trust Details Section */}
        <section className="py-8 w-full sm:pb-8 lg:pb-8">
          <div className="text-center mb-8 lg:">
            <h3 className="text-xl  sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.trustProfile?.title}
            </h3>
          </div>
        </section>

        {/* Paal-Surat Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.surat?.title}
            </h3>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.70.webp"
                    alt="पाल-सूरत संघ भवन"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 ">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <ul className="text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.surat?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Nanpura Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.nanpura?.title}
            </h3>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.71.webp"
                    alt="नानपुरा संघ भवन"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow mb-8">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <ul className=" text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.nanpura?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ahmedabad Usmanpura Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.usmanpura?.title}
            </h3>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.72.webp"
                    alt="उस्मानपुरा संघ भवन"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>

            <ul className="text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.usmanpura?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Madalpur Paladi Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.madalpur?.title}
            </h3>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.73.webp"
                    alt="मादलपुर संघ भवन"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>

            <ul className="text-xl grid sm:grid-cols-3 text-maroon leading-relaxed space-y-2">
              {data?.madalpur?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Adajan Patiya Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.adajan?.title}
            </h3>
          </div>
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>

            <ul className="text-xl grid text-maroon sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.adajan?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* New Varana Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.newVasana?.title}
            </h3>
          </div>
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <ul className="text-xl grid text-maroon sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.newVasana?.list?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gurumandirs Section */}
        <section className="py-8 w-full sm:pb-12 lg:pb-16">
          <div className="text-center mb-8 lg:">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.gurumandir?.title}
            </h3>
          </div>
          <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow mb-8">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <ul className="text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
              {data?.gurumandir?.list?.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-white bg-maroon rounded-full p-1 mt-1">
                    <FaCheck size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Yugbhumi Gurumandir Images Section */}
        <section className="py-8 px-4">
          <div className="text-center mb-8 lg:">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.yugbhumi?.title}
            </h3>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.74.webp"
                    alt={data?.yugbhumi?.images?.[0]?.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col p-6">
                <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                  <img
                    src="/adhyatm/vividh-sangh/img-3.75.webp"
                    alt={data?.yugbhumi?.images?.[1]?.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Image Section */}
        <div className="text-center my-8 lg:my-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            {data?.otherBhavans?.title}
          </h3>
        </div>

        <div className="relative py-8 my-10 px-4 sm:px-6 md:px-8 lg:px-12 font-body">
          <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
            {/* <TopLeftSvg /> */}
          </div>
          <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
            {/* <BottomRighSvg /> */}
          </div>

          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {bhavans.map((bhavan, index) => (
              <div
                key={index}
                className="bg-lightpink/50 rounded-sm shadow-sm hover:shadow-md transition-all duration-200 hover:bg-lightpink/40 h-24 sm:h-28 lg:h-32 w-full flex items-center justify-center p-2"
              >
                <p className="text-sm sm:text-base lg:text-lg text-maroon text-center leading-tight line-clamp-3">
                  {bhavan}
                </p>
              </div>
            ))}
          </div>
        </div>
        <CounterStatsUI statsData={statsData} textColor="maroon" disclaimer={data?.statsDisclaimer} />
      </div>
    </div>
  );
};

export default Page;
