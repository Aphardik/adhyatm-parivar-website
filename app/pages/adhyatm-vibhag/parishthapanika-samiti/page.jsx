import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'परिष्ठापानिका समिति सुरक्षा मात्रु की कुंडी निर्माण स्थंडिल भूमि (डेम) निर्माण | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
    const statsData = [
    { count: "1320", label: "कुल कुण्डी निर्माण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1.62Cr +", label: "श्री संघ द्वारा सद्व्यय", label1:"कुण्डी निर्माण", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "52L +", label: "अध्यात्म परिवार द्वारा सद्व्यय",label1:"कुण्डी निर्माण", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "205", label: "कुल डोम निर्माण", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
    { count: "4.25Cr +", label: "श्रीसंघ द्वारा सद्व्यय", label1:"डोम निर्माण", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "1.5Cr +", label: "अध्यात्म परिवार द्वारा सद्व्यय",label1:"डोम निर्माण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" }
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                परिष्ठापानिका समिति सुरक्षा मात्रु की कुंडी निर्माण स्थंडिल भूमि (डेम) निर्माण
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-semibold mb-1 sm:mb-2">
                (कार्य प्रारंभ : वि.सं. २०६६)
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="max-w-5xl relative mx-auto rounded-sm p-8 sm:p-12 bg-lightyellow">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />

            </div>
          <p className="text-xl leading-relaxed text-maroon">
            चारित्र का प्राण है, पांच समिति और तीन गुप्ति। वर्तमान काल में पांचवी समिति का पालन बहुत कठिन बन गया है, यह कौन नहीं जानता है? घने जंगलों के स्थान पर एक को सट कर एक इमारतें की भीड़ में जैसे यह समिति कुचल गई है! ऐसे समय में जिनकी नसों में चारित्र का रक्त बह रहा है,{" "}
            <span className="text-maroon font-bold">
              ऐसे पूज्य कृपानाथ के मार्गदर्शन से एक अद्भुत विकल्प प्राप्त हुआ है।
            </span>{" "}
            देखते ही देखते इसकी सुरभि संपूर्ण भारत में फैल गई। सैकड़ो-हजारों श्रमण-श्रमणियों को चारित्रपालन में सहायक बनने का लाभ मिला अध्यात्म परिवार को!
          </p>
        </div>
      </section>

      <section className="pt-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-10">
            {/* Left Column - First Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4 h-full w-full justify-center items-center mb-4">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-1.jpg"
                  alt="A rectangular planter with soil - type 1"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-2.jpg"
                  alt="A rectangular planter with soil - type 2"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
              </div>
              <p className="text-white py-3 rounded-sm px-4 bg-maroon font-semibold text-center leading-relaxed">
                संपूर्ण भारत के विविध स्थलों पर बनाई गई ऐसी मात्र परठने की कुंडियों में उपयोग होने वाले स्पेशल कोयले ने दुर्गंध की कंप्लेंट पर पूर्णविराम लगा दिया है!
              </p>
            </div>

            {/* Right Column - Second Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
             <div className="flex flex-col sm:flex-row gap-4 h-full w-full justify-center items-center mb-4">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.19-1.jpg"
                  alt="A rectangular planter with soil - type 1"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.19-2.jpg"
                  alt="A rectangular planter with soil - type 2"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
              </div>
            
               <p className="text-white py-3 rounded-sm px-4 bg-maroon font-semibold text-center leading-relaxed">
               संपूर्ण भारत के विविध श्रीसंघों में बनाई गई यह स्थंडिलभूमि (डोम)ने जैसे असंभव को संभव कर दिया है!
              </p>
            </div>
          </div>
        </div>
      </section>
     <CounterStatsUI statsData={statsData} textColor="maroon" />
    </div>
  );
};

export default Page;