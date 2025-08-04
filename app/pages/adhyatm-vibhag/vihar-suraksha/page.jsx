import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

const Page = () => {
         const statsData = [
    { count: "1132", label: "कुल विहार", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "2,43,651", label: "कुल कि.मी.",color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "23,117", label: "कुल विहार के दिन",color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "6,484", label: "कुल श्रमणी संख्या", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "1.33Cr +", label: "अध्यात्म परिवार द्वारा सद्व्यय", color: "bg-gradient-to-b from-blue-400 to-blue-600" },
   
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                विहार सुरक्षा
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-semibold mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७३
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-heading">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Image and Text Pair */}
            <div className="flex flex-col bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.20.png"
                  alt="Group of people walking on a road with a person on a bicycle carrying supplies"
                  className="w-full h-full object-contain rounded-lg shadow"
                />
              </div>
              <p className="text-heading sm:text-lg font-semibold text-center leading-relaxed">
                विहार में साथ रहने के लिए ट्रेंड, यह स्टाफ साध्वीजी भगवंतों की शाता में निमित्त बनता है।
              </p>
            </div>

            {/* Second Image and Text Pair */}
            <div className="flex flex-col bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vihar-suraksha/img-3.21.png"
                  alt="Person on a bicycle carrying supplies following a group of people walking on a road"
                  className="w-full h-full object-contain rounded-lg shadow"
                />
              </div>
              <p className="text-heading sm:text-lg font-semibold text-center leading-relaxed">
                विहार चाहे मुंबई से बेंगलुरु का हो या अहमदाबाद से चेन्नई का, अध्यात्म परिवार को संदेश मिलते ही योग्य व्यवस्था हो जाती है!
              </p>
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData}/>
    </div>
  );
};

export default Page;