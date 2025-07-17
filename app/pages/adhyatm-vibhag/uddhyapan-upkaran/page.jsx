import React from "react";

const UdyapanPage = () => {
  return (
    <div className="bg-white font-body text-gray-800">
      <div className="mx-auto py-6">
        {/* Heading Box */}
        <div className="flex">
          <div className="bg-gray-800 text-gray-100 text-4xl font-bold p-4">
            4.7
          </div>
        </div>

        {/* Title and Subtext */}
        <div className="mt-4">
          <h1 className="text-gray-700 font-bold text-2xl font-heading">
            उद्यापन उपकरण व्यवस्था...
          </h1>
          <p className="text-gray-600 text-sm font-semibold">
            (कार्य प्रारंभ : वि.सं. २०६७)
          </p>
        </div>

        {/* Description Paragraphs */}
        <div className="mt-4">
          <p className="text-gray-800 leading-relaxed">
            उपधान, विविध तप आदि अनेक आलंबनों से आराधक रत्नत्रयी के उपकरणों का
            उद्यापन (उजमणा) करते हैं। तत्पश्चात उन उपकरणों की कोई ऐसी व्यवस्था
            होनी चाहिए कि जहां आवश्यकता हो वहां वह पहुंचें और चतुर्विध संघ की
            आराधना में उपयोगी बनें। यदि ऐसा नहीं हो पाता है तो वे उपकरण किसी
            स्थान पर भरे पड़े रह जाते हैं।
          </p>
          <p className="text-gray-800 leading-relaxed mt-4">
            अध्यात्म परिवार अपने विस्तार के कारण ऐसी व्यवस्था के लिए 'सेतु' बना
            है। अब तक परिवार द्वारा लगभग ७० संघों में ऐसे उपकरण पहुंचाए जा चुके
            हैं।
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <img
            src="/adhyatm/uddhyapan-upkaran/img-3.44.png"
            alt="Decorative items including an elephant statue and swastika symbol"
            className="w-full sm:w-1/3 border"
          />
          <img
            src="/adhyatm/uddhyapan-upkaran/img-3.45.png"
            alt="Decorative pots with intricate designs"
            className="w-full sm:w-1/3 border"
          />
          <img
            src="/adhyatm/uddhyapan-upkaran/img-3.46.png"
            alt="A large decorative item in a spacious room"
            className="w-full sm:w-1/3 border"
          />
        </div>

        {/* Footer Note */}
        <div className="bg-gray-100 text-gray-700 text-base font-bold p-4 mt-4">
          इतने सारे उपकरण आवश्यकता वाले योग्य स्थानों पर पहुंचाए गए हैं।
        </div>
      </div>
    </div>
  );
};

export default UdyapanPage;
