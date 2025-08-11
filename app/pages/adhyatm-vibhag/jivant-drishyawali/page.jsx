import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import React from 'react';

export const metadata = {
  title: 'जीवंत दृश्यावली | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
                   const statsData = [
    { count: "08", label: "कुल प्रयोग",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1.5L +", label: "अंदाजन कुल दर्शक",  color: "bg-gradient-to-b from-green-400 to-green-600" },
   
  ];
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
               जीवंत दृश्यावली
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
              कार्य प्रारंभ : वि.सं.२०७१
              </p>
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
            अध्यात्म परिवार द्वारा हृदय को वैराग्यरस से भिंजा दे और शासनखुमारी से छलका दे ऐसी विविध जीवंत दृश्यावली (भाववर्धक नाटक) तैयार किए गए हैं।
            </p>
            <p className="text-xl text-maroon leading-relaxed">
            इसमें विशेष तौर पर शास्त्र तथा महापुरुषों की मर्यादा अखंडित रहे इस प्रकार भगवान, साधु आदि महापुरुषों के किरदार निभाए बिना मात्र बोधदायक प्रसंग दर्शाए गए हैं।
            </p>
            <p className="text-xl text-maroon leading-relaxed">
            उन प्रस्तुतियों को देखने के बाद दर्शकों में एक अलग ही संवेदना पैदा होती है। अभी तक 'भवप्रपंच', 'आनंदक्रांति' तथा 'शौर्यगाथा' जैसी दृश्यावली कई लोगों के जीवन परिवर्तन में आधार बनी है।
            </p>
          </div>
         
        </div>

      </section>

     
           <section className="py-8 w-full sm:pb-8 lg:pb-8">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
           'शौर्यगाथा' के ऐसे दृश्यों ने अच्छे-अच्छे की आंखें नम कर दी !
          </h3>

        </div>
                  <div className="grid sm:grid-cols-3 w-full items-center">
            <img className="mx-auto object-cover sm:h-72 w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.52.jpg" alt="" />
            <img className="mx-auto object-cover sm:h-72 w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.53.jpg" alt="" />
            <img  className="mx-auto object-cover sm:h-72 w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.54.png" alt="" />
          </div>
        
      </section>
<CounterStatsUI statsData={statsData} textColor="maroon" />

    </div>
    </div>
  );
};

export default Page;