import React from 'react';

export default function TempleConstructionPage() {
  return (
    <div className="bg-white font-body text-gray-800">
      {/* First Section - Temple Construction Overview */}
      <div className="container mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column: Heading and Description */}
          <div>
            <div className="bg-gray-800 text-white px-4 py-4 inline-block">
              <span className="text-4xl font-bold">2.3</span>
            </div>
            <h1 className="text-gray-800 font-heading text-2xl font-bold mt-4">
              जिनालय नवनिर्माण
            </h1>
            <p className="text-gray-800 font-semibold text-sm">(कार्य प्रारंभ : वि.सं.२०७१)...</p>
            <p className="mt-4">
              इसीलिए तो सीहोर के राजा जब भावनगर में बसे तब उन्होंने जैन
              <span className="text-gray-800 font-semibold"> श्रेष्ठी कुंवरजीभाई माधाभाई</span>
              आदि को नगर के बसने का आमंत्रण दिया। लेकिन उन श्रेष्ठियों ने कह दिया कि,
              <span className="text-gray-800 font-semibold"> "जिनालय के बिना हम नहीं आएंगे" </span>
              राजा ने जिनालय की जगह दी। ऐसे तो अनेक इतिहास हैं।
            </p>
            <p className="mt-4">
              इसीलिए अध्यात्म परिवार ने <span className="text-gray-800 font-semibold">'अध्यात्म शिल्पशाला'</span>
              का एक विराट प्रकल्प प्रारंभ किया है। जिनालय निर्माण शास्त्रोक्त विधिपूर्वक तथा आकर्षक हो इसलिए पद्धति अनुसार योजना बनाई है, उसकी एक झलक इस प्रकार है :
            </p>
            <ul className="list-disc list-inside mt-4">
              <li className="mb-1">१. शिल्प शास्त्रानुसारी प्लान बनाना।</li>
              <li className="mb-1">२. स्तंभ, गोखले, घुम्मट आदि के आकर्षक भाववर्धक स्केच बनाना।</li>
              <li className="mb-1">3. पाषाण आदि द्रव्यों की शुद्धि रखना ।</li>
              <li className="mb-1">४. रूपकाम मर्यादापूर्ण हो उसका ध्यान रखना।</li>
              <li className="mb-1">५. पत्थर खरीदी, बांधकाम, पत्थर फिटिंग, कार्निंग आदि हर एक लेवल की देखरेख का कार्य स्वयं करना ।</li>
              <li className="mb-1">६. भविष्य में जिनालय की जैन स्थापत्य के रूप में पहचान बने इसलिए तीर्थंकर प्रभु आदि के जीवन प्रसंग तथा शासन-प्रभावक घटनाओं की कोरणी करना।</li>
            </ul>
            <p className="mt-4 font-bold text-gray-700">
              अध्यात्म शिल्पशाला की उपलब्धि की यह झलकियां हैं!
            </p>
          </div>

          {/* Right Column: Image and Description */}
          <div>
            <div className="bg-gray-100 p-4">
              <p className="p-4">
                <span className="font-bold text-gray-800 font-heading text-lg">जिनालय पाषाण निर्माण की प्रक्रिया (कार्य प्रारंभ : वि.सं.२०७६)</span>
                <br />
                अध्यात्म शिल्पशाला द्वारा करोड़ों रुपए के देवद्रव्य का रक्षण, मजबूत बंधारण और गहरी तथा आकर्षक कोरणी, ऐसे त्रिविध लाभ के लिए यह कार्य प्रारंभ किया गया है।
              </p>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.12.png"
                alt="A large quarry with workers extracting stone"
                className="w-full h-auto rounded-lg"
              />
              <p className="my-4 font-semibold text-center">यह है आरस की टनल माइन</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm font-semibold text-gray-800">
              <div>
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.13.png"
                  alt="A group of people standing in front of a quarry"
                  className="w-full h-auto rounded"
                />
                <p className="text-center mt-2">
                  अंबाजी माइन की एक थड़ी (खदान के कुछ भाग) की खरीदी के समय खदानमलिक तथा अध्यात्म परिवार निर्माण विभाग के कार्यकर्ता।
                </p>
              </div>
              <div>
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.14.png"
                  alt="Large stone blocks"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center mt-2">थड़ी की खरीद के बाद बनाया गया स्टोन ब्लॉक।</p>
              </div>
              <div>
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.15.png"
                  alt="Stone blocks from various countries"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center mt-2">
                  मात्र अंबाजी या मकराना ही नहीं, इटली, थासोस ग्रीस, इथोपिया, ईरान आदि देशों से भी स्टोन ब्लॉक मंगवाया है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Stone Processing */}
      <div className="container mx-auto px-4 py-6">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="flex flex-col items-center w-full sm:w-1/2">
              <img
                alt="A stack of Jaisalmer stone blocks"
                className="w-full h-auto"
                src="/jinmandir/jinalaya-navnirmaan/img-2.16.png"
              />
              <p className="bg-gray-800 text-white text-sm font-semibold text-center p-2 w-full">
                यह है जेसलमेर का स्टोन ब्लॉक
              </p>
            </div>
            <div className="flex flex-col items-center w-full sm:w-1/2">
              <img
                alt="A trimming machine cutting a stone block"
                className="w-full h-auto"
                src="/jinmandir/jinalaya-navnirmaan/img-2.17.png"
              />
              <p className="text-center py-2 mt-2">
                इस स्टोन ब्लॉक को ट्रेसिंग मशीन द्वारा जरूरी नाप के प्रमाण में कटा जाता है।
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <p className="text-center py-2 mb-2 order-first sm:order-first">CNC डायमंड वायर प्रोफाइल मशीन।</p>
              <img
                alt="CNC diamond wire profiling machine"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.18.png"
              />
              <p className="text-center py-2 mb-2 block sm:hidden">CNC डायमंड वायर प्रोफाइल मशीन।</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="A pillar being carved by a machine"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.19.png"
              />
              <p className="text-center py-2 mt-2">
                किसी भी शेप में पिलर बनाया जा सकता है।
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center py-2 mb-2 order-first sm:order-first hidden sm:block">
                एक्सीस प्रीफाइल मशीन द्वारा कार्विंग।
              </p>
              <img
                alt="A machine carving a stone"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.20.png"
              />
              <p className="text-center py-2 mt-2 block sm:hidden">
                एक्सीस प्रीफाइल मशीन द्वारा कार्विंग।
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 bg-gray-100 p-4 rounded">
          {/* Left Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <p className="text-center py-2 mb-2 order-first sm:order-first hidden sm:block">
                जैसा शेप जरूरी हो वैसी प्रोफाइलिंग हो सकती है।
              </p>
              <img
                alt="Profiling of a stone in desired shape"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.21.png"
              />
              <p className="text-center py-2 mt-2 block sm:hidden">
                जैसा शेप जरूरी हो वैसी प्रोफाइलिंग हो सकती है।
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Manual fine carving on a stone"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.22.png"
              />
              <p className="text-center py-2 mt-2">
                ऐसा इन-ले वर्क भी शिल्पशाला में होता है।
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-center py-2 mb-2 order-first sm:order-first hidden sm:block">
                यंत्र का काम होने के बाद इस प्रकार मैन्युअल फाइन कार्विंग आसान बन जाती है।
              </p>
              <img
                alt="A carved stone piece"
                className="w-32 h-32 object-cover rounded-full"
                src="/jinmandir/jinalaya-navnirmaan/img-2.23.png"
              />
              <p className="text-center py-2 mt-2 block sm:hidden">
                यंत्र का काम होने के बाद इस प्रकार मैन्युअल फाइन कार्विंग आसान बन जाती है।
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center">
            <p className="text-center py-2 mb-4 max-w-lg">
              देलवाड़ा के मंदिर ८०० वर्ष बाद भी हमारा मन जीत लेते हैं, क्योंकि वहां बुरादे के बदले में चांदी, सोना तथा रत्न देकर गहरी गहरी कोरणी करवाई थी। छिछली कोरणी हो तो २५-५० वर्षों में पुनः घिसाई करवाने से वह कोरणी नष्ट हो जाती है।
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                alt="Carving and profiling in a workshop"
                className="w-full sm:w-48 h-auto"
                src="/jinmandir/jinalaya-navnirmaan/img-2.24.png"
              />
              <p className="text-center py-2 mt-2 sm:mt-0 sm:w-64">
                <span className="font-semibold text-gray-800">कच्छ-रापर- गढ़वाली के दर्शनीय जिनालय</span> की यह कार्विंग तथा प्रोफाइलिंग <span className="font-semibold text-gray-800">अध्यात्म शिल्पशाला</span> में हो रही है।
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 mb-4">
          <p className="text-gray-700 font-semibold px-4 py-2 bg-gray-100 rounded-lg inline-block">
            यह तो चित्र हैं। साक्षात निहारने के लिए पधारिए 'अध्यात्म शिल्पशाला ' हिम्मतनगर !
          </p>
        </div>
      </div>

      {/* Third Section - Final Temple Images */}
      <div className="container mx-auto">
        <div className="flex flex-wrap h-full">
          {/* Left side column */}
          <div className="w-full md:w-1/2 p-2 flex">
            <div className="w-full h-full">
              <img 
                alt="A beautifully carved temple structure with intricate details"
                className="w-full h-full object-cover"
                src="/jinmandir/jinalaya-navnirmaan/img-2.25.png" 
              />
            </div>
          </div>

          {/* Right side column */}
          <div className="w-full md:w-1/2 p-2 flex">
            <div className="flex flex-col w-full h-full">
              {/* Top image takes up most of the space */}
              <div className="flex-grow">
                <img 
                  alt="Artisan working on temple carvings"
                  className="w-full h-full object-cover"
                  src="/jinmandir/jinalaya-navnirmaan/img-2.26.png" 
                />
              </div>

              {/* Bottom text div takes up fixed space */}
              <div className="bg-blue-900 text-gray-200 text-sm p-2 mt-2">
                <p>
                  श्री शान्तिवर्धक जिनालय-पाल, अभी तो यह निर्माणाधीन है तो भी ऐसा मन मोह लेता है तो जब पूर्ण रूप से बन जाएगा तब कैसा होगा!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}