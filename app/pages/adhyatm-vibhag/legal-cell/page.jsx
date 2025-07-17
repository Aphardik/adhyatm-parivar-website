import React from 'react';

const LegalGuidanceAndBalDeeksha = () => {
  return (
    <div className="text-gray-900 font-body">
      {/* Legal Guidance Section */}
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-800 text-gray-100 inline-block p-4 pt-6">
              <h1 className="text-4xl font-bold">4.15</h1>
            </div>
            <div className="mt-4">
              <h2 className="text-3xl text-gray-700 font-heading font-bold">
                कानूनी मार्गदर्शन : लीगल सेल ...
              </h2>
              <p className="text-gray-700 text-sm font-semibold">
                (कार्य प्रारंभ : वि.सं. २०७२ )
              </p>
              <p className="mt-4 text-gray-700">
                अध्यात्म परिवार के ही २५ वर्ष से ज्यादा अनुभवशाली चार्टर्ड अकाउंटेंटों की एक पूरी टीम इस बात के लिए सक्रिय है कि जैन ट्रस्टों को इनकम टैक्स, ट्रस्ट एक्ट आदि के कारण पैदा होने वाली मुश्किलों में मार्गदर्शन मिलता रहे।
              </p>
              <p className="mt-4 text-gray-700">
                अध्यात्म परिवार के अग्रणीजन अपनी कानूनी सूझबूझ द्वारा तथा पहचान और प्रभाव का उपयोग करके, धर्मबाधक जिन मुद्दों पर सरकार द्वारा कानून बनाने का विचार चल रहा है अथवा जो धर्मबाधक कानून बन गए हैं, उनको रोकने अथवा सुधरवाने के लिए सक्रिय हैं।
              </p>
            </div>
            <div className="mt-4">
              <img
                alt="27 दिवसीय 'पुर्णाहुति स्मरणोत्सव' के समय जिनासन के ट्रस्टियों के लिए आयोजित एक संगोष्ठी का दृश्य।"
                className="w-full"
                src="/adhyatm/legal-cell/img-3.62.png"
                width="600"
                height="400"
              />
              <p className="text-center text-gray-700 bg-gray-50 p-4 text-base font-semibold">
                २७ दिवसीय 'गुरुजिन स्मरणोत्सव' के समय जिनशासन के ट्रस्टियों के लिए आयोजित एक संगोष्ठी का दृश्य ।
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 p-4 bg-gray-100 text-gray-800 text-sm">
            <p className="mt-4">
              नहीं, यह कोई फाइलें भरने के लिए लिखे गए पत्र नहीं हैं। इनमें से किसी पत्र ने ट्रस्टों के अमुक दान पर लागू पढ़ने जा रहे GST को रोका है, तो किसी पत्र में UCC में कोई धर्मबाधक कलम न आए उसकी सावधानियां बताई हैं।
            </p>
            <p className="mt-4">
              कोई पत्र श्री सम्मेत शिखर महातीर्थ प्रवासन स्थल (टूरिज्म प्लेस) ना बने इसके लिए लिखा गया है, तो कोई पत्र जीवंत पशुओं का निकास रोकने में सफल बना है।
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                alt="Legal document 1"
                className="w-full border border-golden"
                src="/adhyatm/legal-cell/img-3.63.png"
                width="300"
                height="400"
              />
              <img
                alt="Legal document 2"
                className="w-full border border-golden"
                src="/adhyatm/legal-cell/img-3.64.png"
                width="300"
                height="400"
              />
              <img
                alt="Legal document 3"
                className="w-full border border-golden"
                src="/adhyatm/legal-cell/img-3.65.png"
                width="300"
                height="400"
              />
              <img
                alt="Legal document 4"
                className="w-full border border-golden"
                src="/adhyatm/legal-cell/img-3.66.png"
                width="300"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bal Deeksha Section */}
      <div className="bg-gray-100 flex items-center justify-center container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center text-gray-800 p-10">
          {/* Image Column */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              alt="Map of India with a silhouette of a person and text in Hindi"
              src="/adhyatm/legal-cell/img-3.67.png"
              className="w-full h-auto"
              width="200"
            />
          </div>

          {/* Text Column */}
          <div className="text-center md:p-6 md:text-left md:pl-8">
            <h1 className="text-2xl font-heading font-bold mb-4">
              सौभाग्य का सीमाचिह्न : बालदीक्षा की रक्षा
            </h1>
            <p className="text-lg">
              बालदीक्षा को राजमान्यता पुस्तक का शीर्षक गवाही देता है। सदियों से बालदीक्षा पर रहा
              हुआ जोखम दूर हुआ है और राजमन्यता द्वारा 'बालदीक्षा' की जयजयकार हुई है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalGuidanceAndBalDeeksha;
