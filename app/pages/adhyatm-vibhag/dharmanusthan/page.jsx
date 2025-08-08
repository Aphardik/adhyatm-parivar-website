import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'धर्मानुष्ठान सुशोभन सामग्रियों की उपलब्धि | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
           const statsData = [
    { count: "151", label: "कुल सुशोभन उपकरण प्रकार",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "43L +", label: "अनुमानित कुल कीमत",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "400", label: "आजतक के कुल प्रसंग",color: "bg-gradient-to-b from-green-400 to-green-600" },
   
  ];
  return (
    <div className="bg-whitey mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon mb-4">
                धर्मानुष्ठान सुशोभन सामग्रियों की उपलब्धि
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                  कार्य प्रारंभ : वि.सं. २०७६
              </p>
            </div>
          </div>
        </div>
      </header>

<div className="px-2 sm:px-4">
      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 items-center gap-6 sm:gap-10">
          <div className="p-6 bg-lighten-bg">
        <img className="w-full" src="/adhyatm/dharmanusthan/img-3.42.png" alt="dharmanushthan" />
        </div>
        <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <p className="text-lg text-maroon leading-relaxed">
           जन हो या पूजा, महोत्सव हो या महापूजा, वंदना हो या संवेदना, तमाम धर्मानुष्ठानों में भावों में वृद्धिका कार्य करने वाले चार फुट के कलश जैसी अनेक यूनिक सामग्री परिवार द्वारा संग्रहित की गई है । तथा सभी को बिना किसी मूल्य उपयोग करने के लिए उपलब्ध की जा रही है । आज तक इन सैकड़ों आइटम के संग्रह द्वारा लगभग ४०० अवसरों को शोभायमान किया है।
          </p>
        </div>
        </div>
      </section>

      {/* Stone Selection Criteria Section */}
      <section className="py-8 sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            इन सामग्रियों की एक अनेरी झलक!
          </h3>

        </div>
                  <div className="grid sm:grid-cols-4 w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-1.png" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-2.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-3.png" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/dharmanusthan/img-3.43-4.png" alt="" />
          </div>
        
      </section>
<CounterStatsUI statsData={statsData}/>
     
    </div>
    </div>
  );
};

export default Page;
