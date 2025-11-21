import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
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
  const features = [
    "हल्के एल्युमिनियम के बदले Govt. Approved फ़ूड ग्रेड 'स्टेनलेस स्टील' का उपयोग किया गया है।",
    "इसमें नल का उपयोग नहीं होने से जयणा का पालन होता है।",
    "इसमें १२ ट्रैक वाला झरना है। पानी इतने ट्रैक्स में घूमता है तो 100° पर गर्म पानी नीचे पहुंचते-पहुंचते लगभग 32° तक ठंडा हो जाता है।"
  ];
  
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                उष्णजल ठंडा करने का स्टैंड
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-bold my-1">
                उष्णजल को शीत करने के स्टैंड का वितरण कार्य
              </p>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon">
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
          गर्मियों में उबाला हुआ पानी जल्दी ठंडा नहीं होता है, इसलिए कहीं-कहीं विहारधाम और आयंबिल शालाओं में कई बार आधा गर्म किए हुए पानी को बिना उकाले ही ठार (ठंडा कर) दिया जाता है। इस भयंकर दोष का विकल्प है: जल ठंडा करने का स्टैंड
          </p>
        </div>
      </section>

<section className="py-8">
  <div className="max-w-4xl mx-auto">

    <div className="relative flex flex-col items-center bg-lightyellow rounded-sm p-6">
      <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <TopLeftSvg />
      </div>
      <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <BottomRighSvg />
      </div>
      
      {/* Container for both images */}
      <div className="w-full flex flex-col lg:flex-row gap-6 justify-center items-center">
        {/* First Image */}
        <div className="h-80 flex-1 flex justify-center items-center">
          <img
            src="/adhyatm/jal-stand/img-3.28.webp"
            alt="झरने वाला उष्णजल स्टैंड"
            className="w-full max-w-sm h-full object-contain rounded-lg"
          />
        </div>

        {/* Second Image */}
        <div className="h-80 flex-1 flex justify-center items-center">
          <img
            src="/adhyatm/jal-stand/img-3.29.webp"
            alt="स्टेनलेस स्टील स्टैंड"
            className="w-full max-w-sm h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>
      

      <section className="max-w-4xl mx-auto p-6 bg-lightyellow ">
      <div className=" backdrop-blur-lg rounded-2xl p-8">
        <h3 className="text-xl text-center font-heading sm:text-2xl font-semibold text-maroon mb-6 pb-3 border-b border-maroon/20">
          इस स्टैंड की अनेक विशेषताएं हैं
        </h3>

        <div className="space-y-5 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-white/30 backdrop-blur-sm pl-10">
                <p className="text-base sm:text-lg text-maroon leading-relaxed">
                  {feature}
                </p>
              </div>
              <div 
                className="absolute -left-6 top-4 -translate-y-1/2 w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-800 flex items-center justify-center" 
                style={{borderRadius: '18px 18px 4px 18px'}}
              >
                <span className="text-xl absolute right-1 bottom-0 font-sans font-extrabold text-white">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <CounterStatsUI statsData={statsData} textColor="maroon" />
    </div>
     <CallToActionButton
                 heading="जयणायुक्त-अनुकूल जल ठंडा करने की व्यवस्था ।"
                 content=""
                 id="matru-kundi-cta"
                 href={
                   "https://wa.me/918448444050"
                 }
               />
    </div>
  );
};

export default Page;