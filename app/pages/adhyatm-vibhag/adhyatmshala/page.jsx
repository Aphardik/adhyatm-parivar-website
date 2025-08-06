import CounterStatsUI from '@/app/_components/StatData';
import React from 'react';

const AnusthanAyojan = () => {
               const statsData = [
    { count: "06", label: "कुल स्थल",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1200", label: "अंदाजन कुल बच्चे ",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "51", label: "कुल सत्र संख्या",  color: "bg-gradient-to-b from-teal-400 to-teal-600" },
   
  ];
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
               अध्यात्मशाला
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
               कार्य प्रारंभ : वि.सं. २०७४
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
              आज के बालक कल के शासन के रखवाले हैं। यदि उनको अच्छे संस्कार नहीं दिए गए तो उनके दिलों दिमाग में नास्तिकता बस जाएगी! अध्यात्म परिवार द्वारा संचालित संघों में तथा पथप्रदर्शक सूरिभगवंत तथा उनके आज्ञावर्ती श्रमणों के चातुर्मास स्थलों में अभी प्रारंभिक स्तर पर चल रही ‘अध्यात्मशाला' के अभ्यासक्रम का प्रभाव ऐसा है कि बालकों के माता-पिता आयोजकों को आभार व्यक्त करते-करते गदगद हो जाते हैं।
            </p>
          </div>
          <div className="">
            <div className='flex w-full gap-2 flex-col sm:flex-row justify-center items-center'>
            <img className="w-full h-96 rounded " src="/adhyatm/adhyatmshala/img-3.51-1.jpg" alt="Spiritual event" />
            <img className="w-full h-96 rounded " src="/adhyatm/adhyatmshala/img-3.51-2.jpeg" alt="Spiritual event" />
            </div>
            <p className="text-lg sm:text-xl font-semibold font-heading text-center mt-4">
             बच्चे आनंद से अध्यात्मशाला में पढ़ रहे हैं!
            </p>
          </div>
        </div>
      </section>
  <CounterStatsUI statsData={statsData}/>
     
    </div>
  );
};

export default AnusthanAyojan;