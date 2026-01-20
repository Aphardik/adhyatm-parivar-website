"use client";
import React from "react";
import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import { useLanguage } from "@/app/_components/LanguageContext";
import { getSectionData } from "@/app/_utils/sectionData";

const Page = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "jinagam");
  const data = content?.arvachinShrutPrakashan;

  const statsDataMap = [
    { count: "85", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "09", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "34", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "42", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "46", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
    { count: "1.75cr +", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
  ];

  const statsData = data?.stats?.map((stat) => ({
    count: stat.count,
    label: stat.label,
    label1: stat.label1,
    label2: stat.label2,
    color: stat.color || "bg-gradient-to-b from-blue-400 to-blue-600",
  })) || [];

  const bulletPoints = data?.bulletPoints || [];

  const bookCategoriesImages = [
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.3.webp",
      alt: "Collection of books",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.4.webp",
      alt: "Collection of study books",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.5.webp",
      alt: "Collection of children's literature",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.6.webp",
      alt: "Collection of various literature",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.7.webp",
      alt: "Collection of various literature",
    },
  ];

  const bookCategories = bookCategoriesImages.map((item, index) => ({
    ...item,
    title: data?.categories?.[index]?.title || "",
  }));

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                {data?.header?.title}
              </h1>
              <p className="text-base text-center lg:text-lg text-maroon font-bold my-1">
                {data?.header?.subtitle}
              </p>
              <p className="text-base text-center lg:text-lg text-maroon font-medium">
                {data?.header?.date}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        {/* Main Content */}
        <section className="py-4 max-w-5xl mx-auto sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15">
              <BottomRighSvg />
            </div>
            <div className="grid grid-cols-1 gap-6">
              {bulletPoints.map((point, index) => (
                <div key={index} className=" p-4  ">
                  <p className="text-lg font-semibold text-center leading-relaxed text-maroon">
                    {point}
                  </p>
                  <div className="flex items-center justify-center mt-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book Categories */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-lightyellow rounded-xl p-6">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-96 object-contain rounded-lg"
                  />
                </div>
                <h3 className="font-bold bg-maroon  text-lg py-3 text-whitey font-heading">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-12">

          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              {data?.featured?.title}
            </h3>
          </div>

          <div className="relative bg-lightyellow rounded-xl p-8 text-maroon">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-lightyellow rounded-xl p-6">
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.8.webp"
                  alt="Ancient manuscripts collection"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <div>
                  <p className="sm:text-lg leading-relaxed">
                    {data?.featured?.p1}
                  </p>
                  <p className="sm:text-lg leading-relaxed">
                    {data?.featured?.p2}
                  </p>
                </div>
                <div>
                  <p className="sm:text-lg leading-relaxed">
                    {data?.featured?.p3}
                  </p>
                  <p className="sm:text-lg leading-relaxed">
                    {data?.featured?.p4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adhyatm Parichay */}
        <section className="my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="relative bg-lightyellow rounded-sm p-6">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.9.webp"
                  alt="Adhyatm Parichay book"
                  className="w-full h-96 object-contain rounded-lg mb-4"
                />
                <h3 className="font-bold text-xl text-maroon font-heading text-center">
                  {data?.adhyatmParichay?.title}
                </h3>
              </div>
            </div>

            <div className="rounded-sm p-6">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                {data?.adhyatmParichay?.text}
              </p>
              <p className="text-lg font-semibold text-maroon mt-4">
                {data?.adhyatmParichay?.highlight}
              </p>
            </div>
          </div>
        </section>

        {/* Gyansetu */}
        <section className="my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl p-6 order-2 md:order-1">
              <p className="text-base sm:text-lg leading-relaxed text-maroon mb-6">
                {data?.gyansetu?.text}
              </p>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              <div className="relative bg-lightyellow rounded-sm p-4">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.10.webp"
                  alt="Publication book series"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>



        {/* Stats */}
        <CounterStatsUI statsData={statsData} textColor="maroon" />

        {/* Call To Action */}
        <section className="my-12">
          <CallToActionButton
            heading="अध्यात्म परिवार द्वारा प्रकाशित सभी पुस्तकों की सूची देखने के लिए यहाँ क्लिक करे"
            content=""
            href="/books"
            id="books-cta"
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
