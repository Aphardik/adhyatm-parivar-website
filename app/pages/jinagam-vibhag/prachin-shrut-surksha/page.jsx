import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'प्राचीन श्रुत सुरक्षा | जिनागम विभाग',
  description: '',
}

const Page = () => {
  const statsData = [
    {
      count: "60",
      label: "आज तक प्रकाशित वॉल्यूम",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "21717",
      label: "कुल पृष्ठ ",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "32750",
      label: "कुल नकल",
      color: "bg-gradient-to-b from-teal-400 to-teal-600",
    },
    {
      count: "116",
      label: "वॉल्यूम में समाविष्ट कुल ग्रंथ",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
    {
      count: "5,01,544",
      label: "ग्रंथों की कुल (लगभग) श्लोक संख्या",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "1.25cr +",
      label: "अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                प्राचीन श्रुत सुरक्षा
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                कार्य प्रगति: वि.सं. २०६३
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm sm:p-12 p-8 bg-lightyellow">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed text-maroon">
              जिस श्रुत के बल पर २१,००० वर्ष तक शासन जयवंता रहने वाला है, उसकी
              महिमा शब्दों में वर्णन कर पाना असम्भव है। पूज्य कृपानाथ के
              मार्गदर्शन से सैकड़ों श्रमण-श्रमणियों अपने हजारों घंटे दे कर इसकी
              रक्षा के लिए तनतोड़ परिश्रम कर रहे हैं। जिसके सुंदर परिणाम स्वरूप
              अध्यात्म परिवार द्वारा की गई प्राचीन श्रुत प्रकाशन की एक छोटीसी
              झलक :
            </p>
          </div>
        </section>

        <section className=" py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className=" rounded-lg overflow-hidden ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-1.png"
                    alt="1"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-2.png"
                    alt="2"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden  ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-3.png"
                    alt="3"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className=" rounded-lg overflow-hidden border ">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-4.png"
                    alt="4"
                    className="w-full h-64 object-cover "
                  />
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.1-5.png"
                    alt="5"
                    className="w-full h-64 object-cover "
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="">
                <div className=" rounded-lg overflow-hidden">
                  <img
                    src="/jinagam/prachin-shrut-suraksha/img-3.2.png"
                    alt="ap"
                    className="w-full h-80 lg:h-96 object-contain "
                  />
                </div>
              </div>

              <div className=" space-y-6">
                <p className="py-3 px-6 rounded-sm bg-lightpink font-bold text-lg text-maroon  leading-relaxed">
                  सैकड़ों घंटों के परिश्रम द्वारा ये ग्रंथ गीतार्थों के हाथों तक
                  पहुंचे हैं।
                </p>
              </div>
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} />
      </div>
    </div>
  );
};

export default Page;
