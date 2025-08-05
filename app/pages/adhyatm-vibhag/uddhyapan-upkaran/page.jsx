import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

const UdyapanPage = () => {
           const statsData = [
    { count: "15", label: "उद्यापन उपकरण व्यवस्था ",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "90", label: "जिनका लाभ प्राप्त हुआ हो वो श्रीसंघ",  color: "bg-gradient-to-b from-green-400 to-green-600" },
   
  ];
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                उद्यापन उपकरण व्यवस्था...
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०६७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
          <p className="text-xl leading-relaxed mb-4">
            उपधान, विविध तप आदि अनेक आलंबनों से आराधक रत्नत्रयी के उपकरणों का
            उद्यापन (उजमणा) करते हैं। तत्पश्चात उन उपकरणों की कोई ऐसी व्यवस्था
            होनी चाहिए कि जहां आवश्यकता हो वहां वह पहुंचें और चतुर्विध संघ की
            आराधना में उपयोगी बनें। यदि ऐसा नहीं हो पाता है तो वे उपकरण किसी
            स्थान पर भरे पड़े रह जाते हैं।
          </p>
          <p className="text-xl leading-relaxed">
            अध्यात्म परिवार अपने विस्तार के कारण ऐसी व्यवस्था के लिए 'सेतु' बना
            है। अब तक परिवार द्वारा लगभग ७० संघों में ऐसे उपकरण पहुंचाए जा चुके
            हैं।
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-8 sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            उपकरणों की एक अनेरी झलक!
          </h3>
        </div>
        
        <div className="grid sm:grid-cols-3 w-full items-center gap-4">
          <img 
            className="mx-auto w-full p-4 " 
            src="/adhyatm/uddhyapan-upkaran/img-3.44.png" 
            alt="Decorative items including an elephant statue and swastika symbol" 
          />
          <img 
            className="mx-auto w-full p-4 " 
            src="/adhyatm/uddhyapan-upkaran/img-3.45.png" 
            alt="Decorative pots with intricate designs" 
          />
          <img 
            className="mx-auto w-full p-4 " 
            src="/adhyatm/uddhyapan-upkaran/img-3.46.png" 
            alt="A large decorative item in a spacious room" 
          />
        </div>
      </section>

      {/* Footer Note Section */}
      <section className="py-4">
        <div className="bg-light-bg text-heading text-base font-bold p-4 text-center rounded-sm">
          इतने सारे उपकरण आवश्यकता वाले योग्य स्थानों पर पहुंचाए गए हैं।
        </div>
      </section>
       <CounterStatsUI statsData={statsData}/>
    </div>
  );
};

export default UdyapanPage;