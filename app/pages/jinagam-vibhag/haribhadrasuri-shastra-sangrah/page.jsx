import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

const Page = () => {
         const statsData = [
    { count: "1.25L +", label: "कुल पुस्तक/ग्रन्थ", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "1007", label: "साधु/साध्वी सदस्य संख्या",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "1184", label: "श्रावक/श्राविका सदस्य संख्या",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "16K +", label: "कुल प्रकाशक", color: "bg-gradient-to-b from-teal-400 to-teal-600" },
    { count: "50L +", label: "अध्यात्म परिवार द्वारा सद्व्यय",color: "bg-gradient-to-b from-blue-400 to-blue-600" },
   
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                हरिभद्रसूरि शास्त्रसंग्रह : श्रीसंघ के लिए श्रुत की उपलब्धि
              </h1>
              <p className="text-lg sm:text-base text-center lg:text-lg text-content font-semibold mb-1 sm:mb-2">
                (कार्य प्रारंभ : वि.सं. २०७३)
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-content">
           मात्र छह वर्ष की छोटीसी अवधि में जो सूरत ही नहीं अपितु संपूर्ण भारत में अग्रिम कक्षा में गिना जाने लगा है, ऐसे सूरत स्थित इस ज्ञानभंडार की झांकी तो यहां प्रस्तुत है, फिर भी अभी बहुत कुछ बताना बाकी है जो आप मुलाकात में ही जान सकेंगे।
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg overflow-hidden bg-lighten-bg p-4">
                <img
                  src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.12.png"
                  alt="Library shelves filled with books"
                  className="w-full h-64 object-contain rounded-lg mb-6"
                />
                <p className="text-content text-lg font-semibold text-center">
                 इन ३७३ अलमारियों सर्वज्ञ प्रभु का ज्ञानवैभव दीमक तथा सीलन ना लगे इस प्रकार सुरक्षित रखा गया है।
                </p>
              </div>

              <div className="rounded-lg overflow-hidden bg-lighten-bg p-4">
                <img
                  src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.11.png"
                  alt="Library books collection"
                  className="w-full h-64 object-contain rounded-lg mb-6"
                />
                <p className="text-content text-lg font-semibold text-center">
                आज जिसका आंकड़ा १.२५ लाख से अधिक है, ये ग्रंथ-पुस्तकें ज्ञानपिपासुओं प्राणों से भी प्यारी है।
                </p>
              </div>

              <div className="rounded-lg overflow-hidden bg-lighten-bg p-4">
                <img
                  src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.13.png"
                  alt="Library entrance with glass doors"
                  className="w-full h-64 object-contain rounded-lg mb-6"
                />
                <p className="text-content text-lg font-semibold text-center">
                 इस खिड़की से हर रोज सुबह ९:०० से शाम ७:०० बजे तक पुस्तकें प्राप्त की जा सकती हैं। वह भी मात्र २ मिनट में !
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.14.png"
                  alt="Beautifully carved wooden statue of Guru Shri Haribhadra Acharya"
                  className="w-full h-80 lg:h-[90vh] object-contain rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-6 w-full max-w-4xl">
              <p className="p-4 bg-secondary-color text-white rounded-xl text-lg leading-relaxed text-center font-semibold">
               इस शास्त्रसंग्रह का २००७ साधु-साध्वीजी भगवंत तथा १९९६ श्रावक-श्राविका वर्ग उपयोग कर चुके हैं। क्या आप बाकी हैं?
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