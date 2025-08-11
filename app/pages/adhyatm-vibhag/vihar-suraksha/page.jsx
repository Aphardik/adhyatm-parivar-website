import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'विहार सुरक्षा | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
         const statsData = [
    { count: "1132", label: "कुल विहार", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "2,43,651", label: "कुल कि.मी.",color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "23,117", label: "कुल विहार के दिन",color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "6,484", label: "कुल श्रमणी संख्या", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "1.33Cr +", label: "अध्यात्म परिवार द्वारा सद्व्यय", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
   
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                विहार सुरक्षा
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७३
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="relative max-w-5xl mx-auto rounded-sm p-8 sm:p-12 bg-lightyellow">
          <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <p className="text-xl leading-relaxed text-maroon">
            योगशास्त्र ग्रंथ में श्रामणीक्षेत्र की भक्ति के प्रकारों का वर्णन करते हुए कलिकाल सर्वज्ञ श्री फरमाते हैं कि :{" "}
            <span className="text-secondary-color font-bold">
              श्रावक को श्रमणीवर्ग का दुष्ट और दुराचारी लोगों से रक्षण करना चाहिए।
            </span>{" "}
            अध्यात्म परिवार तो सात क्षेत्र की भक्ति के लिए ही समर्पित है। इस कार्य द्वारा संयमियों की सुरक्षा तथा पैसे आदि के विषय की निश्चिंतता करवाने का लाभ अध्यात्म परिवार को मिल रहा है।
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* First Image and Text Pair */}
            <div className="flex flex-col items-center justify-center bg-maroon  rounded-sm ">
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.20.jpg"
                  alt="Group of people walking on a road with a person on a bicycle carrying supplies"
                  className="w-full h-full object-contain rounded-sm shadow"
                />
              </div>
              <p className="text-whitey py-3 sm:text-base font-semibold text-center leading-relaxed">
                विहार में साथ रहने के लिए ट्रेंड, यह स्टाफ साध्वीजी भगवंतों की शाता में <br /> निमित्त बनता है।
              </p>
            </div>

            {/* Second Image and Text Pair */}
            <div className="flex flex-col items-center justify-center bg-maroon text-whitey rounded-sm ">
              <div className=" w-full flex justify-center items-center">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.21.jpg"
                  alt="Person on a bicycle carrying supplies following a group of people walking on a road"
                  className="w-full h-full object-contain rounded-sm shadow"
                />
              </div>
              <p className="text-whitey py-3 sm:text-base font-semibold text-center leading-relaxed">
                विहार चाहे मुंबई से बेंगलुरु का हो या अहमदाबाद से चेन्नई का, अध्यात्म परिवार को संदेश मिलते ही योग्य व्यवस्था हो जाती है!
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