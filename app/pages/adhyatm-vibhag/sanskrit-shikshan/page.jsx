import CounterStatsUI from '@/app/_components/StatData';
import React from 'react';

const Page = () => {
                 const statsData = [
    { count: "225", label: "कुल छात्र",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "600", label: "कुल वर्ग घंटे",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "5L +", label: "अध्यात्म परिवार द्वारा सद्व्यय",  color: "bg-gradient-to-b from-teal-400 to-teal-600" },
   
  ];
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
               संस्कृत शिक्षण वर्ग (संशिव)
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
               कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
            <p className="text-xl leading-relaxed">
             पथप्रदर्शक पूज्यश्री के द्वारा श्रावक भी सरलता से संस्कृत सीख सकें ऐसी पद्धति विकसित की गई है। जल्दी से यकीन नहीं होता है परंतु यह वास्तविकता है कि अध्यात्म परिवार द्वारा ‘हफ्ते में दो दिन' वाले संशिव प्रकल्प में,
आज मुंबई के कई श्रावक और श्राविकाओं का संस्कृत शिक्षण पूर्णता की ओर अग्रसर है।
            </p>
            <p className='font-semibold text-lg'>लगातार दो वर्षों से यह ज्ञानयज्ञ चल रहा है और आगे भी चलता रहेगा।</p>
          </div>
         
        </div>
      </section>

      <CounterStatsUI statsData={statsData}/>
    </div>
  );
};

export default Page;