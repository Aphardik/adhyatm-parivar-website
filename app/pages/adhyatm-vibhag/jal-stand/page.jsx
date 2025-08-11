import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'उष्णजल ठंडा करने का स्टैंड | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
         const statsData = [
    { count: "85", label: "श्रीसंघ विहरधाम में कुल स्टैंड अर्पण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "10L +", label: "श्रीसंघ द्वारा सद्व्यय ",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "42L +", label: "अध्यात्म परिवार द्वारा सद्व्यय", color: "bg-gradient-to-b from-green-400 to-green-600" },
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                उष्णजल ठंडा करने का स्टैंड
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon mb-1 sm:mb-2">
                (कार्य प्रारंभ : वि.सं. २०७७)
              </p>
            </div>
          </div>
        </div>
      </header>

<div className="px-2 sm:px-4">
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="rounded-sm p-8 sm:p-12 bg-lightyellow relative">
          <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <p className="text-xl leading-relaxed text-maroon">
            गर्मियों में उबाला हुआ पानी जल्दी ठंडा नहीं होता है, इसलिए कहीं-कहीं विहारधाम और आयंबिल शालाओं में कई बार आधा गर्म किए हुए पानी को बिना उकाले ही ठार (ठंडा) कर दिया जाता है। इस भयंकर दोष का विकल्प है:
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Stand */}
            <div className="relative flex flex-col items-center bg-lightyellow rounded-sm p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
              <div className="h-80 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/jal-stand/img-3.28.png"
                  alt="झरने वाला उष्णजल स्टैंड"
                  className="w-full max-w-sm h-full object-contain rounded-lg "
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-maroon font-bold text-lg sm:text-xl">झरने वाला उष्णजल स्टैंड</h3>
                <p className="text-maroon leading-relaxed">
                  इस स्टैंड की अनेक विशेषताएं हैं: इसमें १२ ट्रैक वाला झरना है। पानी इतने ट्रैक्स में घूमता है कि 100° पर गर्म पानी नीचे पहुंचते-पहुंचते लगभग 32° तक ठंडा हो जाता है।
                </p>
              </div>
            </div>

            {/* Second Stand */}
             <div className="relative flex flex-col items-center bg-lightyellow rounded-sm p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
              <div className="h-80 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/jal-stand/img-3.29.png"
                  alt="स्टेनलेस स्टील स्टैंड"
                  className="w-full max-w-sm h-full object-contain rounded-lg "
                />
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-maroon font-bold text-lg sm:text-xl">स्टेनलेस स्टील स्टैंड</h3>
                <p className="text-maroon leading-relaxed">
                  हल्के एल्युमिनियम के बदले Govt. Approved फ़ूड ग्रेड 'स्टेनलेस स्टील' का उपयोग किया गया है। इसमें नल का उपयोग नहीं होने से जयणा का पालन होता है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData} textColor="maroon" />
    </div>
    </div>
  );
};

export default Page;