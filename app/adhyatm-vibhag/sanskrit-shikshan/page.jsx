import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import React from 'react';

export const metadata = {
  title: 'संस्कृत शिक्षण वर्ग (संशिव) | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
                 const statsData = [
    { count: "225", label: "कुल छात्र",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "600", label: "कुल वर्ग घंटे",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "5L +", label: "अध्यात्म परिवार द्वारा सद्व्यय",  color: "bg-gradient-to-b from-teal-400 to-teal-600" },
   
  ];
  return (
    <div className="max-w-7xl mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
               संस्कृत शिक्षण वर्ग (संशिव)
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium my-1">
               कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
             <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed">
             पथप्रदर्शक पूज्यश्री के द्वारा श्रावक भी सरलता से संस्कृत सीख सकें ऐसी पद्धति विकसित की गई है। जल्दी से यकीन नहीं होता है परंतु यह वास्तविकता है कि अध्यात्म परिवार द्वारा ‘हफ्ते में दो दिन' वाले संशिव प्रकल्प में,
आज मुंबई के कई श्रावक और श्राविकाओं का संस्कृत शिक्षण पूर्णता की ओर अग्रसर है।
            </p>
            <p className='font-semibold text-darkpink text-xl'>लगातार दो वर्षों से यह ज्ञानयज्ञ चल रहा है और आगे भी चलता रहेगा।</p>
          </div>
         
        </div>
      </section>

   <CounterStatsUI statsData={statsData} textColor="maroon" />
    </div>
    </div>
  );
};

export default Page;