import CounterStatsUI from '@/app/_components/StatData';
import React from 'react';

const AnusthanAyojan = () => {
             const statsData = [
    { count: "09", label: "कुल सामूहिक दीक्षा",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "12", label: "कुल वाचना श्रेणी",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "05", label: "कुल उपधान",  color: "bg-gradient-to-b from-teal-400 to-teal-600" },
   
  ];
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                अनुष्ठान आयोजन...
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं.२०६५
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
              अध्यात्म परिवार द्वारा सामूहिक दीक्षा, उपधान तप, वाचनाश्रेणी, S3 विशिष्ट प्रश्नोत्तरी प्रवचन, प्रतिष्ठा महोत्सव, महापूजाएं और हाल ही में एक कदम आगे बढ़कर ब्रह्मयात्रा आदि जैसे अनुष्ठानों का आयोजन होता है कि जो हजारों के जीवन में बोधिबीज डालने का कार्य करते हैं। थोड़ी झांकी :
            </p>
          </div>
          <div className="p-6 bg-lighten-bg">
            <img className="w-full rounded shadow-lg" src="/adhyatm/anusthan-aayojan/img-3.47.jpg" alt="Spiritual event" />
            <p className="text-lg sm:text-xl font-semibold font-heading text-center mt-4">
              उपधान की साधना जीवन की दिशा बदल देती है।
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-8 sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            विविध अनुष्ठानों की झलक!
          </h3>
        </div>
        
        {/* Activity Cards */}
        <div className="grid sm:grid-cols-1 gap-6 mb-8">
          <div className="flex items-center justify-evenly  p-4 rounded-md">
            <img
              alt="वाचना श्रेणी"
              className="w-1/3 rounded"
              src="/adhyatm/anusthan-aayojan/img-3.49.jpg"
            />
            <div className="ml-4">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-heading">वाचना- श्रेणी</h2>
              <p className="text-content font-semibold">
                अब तक वाचना- श्रेणी में लगभग २५,००० श्रोताओंने जिनवाणी पान किया है।
              </p>
            </div>
          </div>

          <div className="flex items-center justify-evenly p-4 rounded-md">
            <img
              alt="ब्रह्मयात्रा"
              className="w-1/3 order-2 rounded"
              src="/adhyatm/anusthan-aayojan/img-3.50.png"
            />
            <div className="ml-4 order-1">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-heading">ब्रह्मयात्रा</h2>
              <p className="text-content font-semibold">
                'ब्रह्मयात्रा' के अंतर्गत १५ से २५ वर्ष के युवा नेमिनाथ प्रभु के प्राचीन तीर्थों की यात्रा करके धन्य बने!
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="w-full">
           <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                'सिंहसत्त्वोत्सव' सामूहिक ७४ दीक्षा का मानव सैलाब
              </h2>
            </div>
          <img
            alt="अनुष्ठान आयोजन का व्यापक दृश्य"
            className="w-full rounded shadow-lg"
            src="/adhyatm/anusthan-aayojan/img-3.48.jpg"
          />
          
        </div>
      </section>
             <CounterStatsUI statsData={statsData}/>

    </div>
  );
};

export default AnusthanAyojan;