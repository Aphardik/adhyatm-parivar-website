import React from 'react';

const page = () => {
  return (
    <div className="text-gray-800 font-body font-semibold">
      {/* First Page Content */}
       <div className="bg-gray-100 mx-auto p-4">
        {/* Three Column Layout */}
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          {/* First Column: Score Box, Heading & Short Description */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-gray-800 text-white text-4xl font-bold p-4 rounded shadow-lg">
              4.5
            </div>
            <h1 className="text-gray-700 text-2xl font-Teko font-bold mt-5">
              शुद्ध पूजाद्रव्य संप्राप्ति...
            </h1>
            <p className="text-gray-600 text-sm font-semibold mt-2">
              (कार्य प्रारंभ : वि.सं. २०७०)
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              अध्यात्म परिवार प्रस्तुत करता है, प्रभु भक्तों को प्रसन्न कर देने वाले पूजा के द्रव्य !
            </p>
          </div>

          {/* Second Column: First Image with Description */}
          <div className="flex-1 text-center">
            <img
              alt="A set of sandalwood pieces"
              className="mx-auto border-4 border-gray-700 rounded-full shadow-md transition-transform transform hover:scale-105"
              height="160"
              src="/adhyatm/suddh-puja-dravya/img-3.30.png"
              width="160"
            />
            <h2 className="text-gray-700 text-xl font-bold mt-5">...गौशीर्ष चंदन...</h2>
            <p className="text-gray-700 mt-3 text-sm font-semibold leading-relaxed">
              विश्व के तमाम चंदनों में सर्वश्रेष्ठ, शास्त्रवर्णित मलयाचल पर्वत पर होने वाला 'गौशीर्ष' वृक्ष का चंदन है। लायसेंस धारक अध्यात्म परिवार गवर्नमेंट ऑक्शन से चंदन की १६ किस्मों में से सबसे ज्यादा तेल वाला तथा रिपोर्ट द्वारा प्रमाणित जिसमें तेल भी श्रेष्ठ जाति का होता है, वह चंदन लेता है। इसके पश्चात IS और GCMS पद्धति से उसकी लैब टेस्टिंग होती है।
            </p>
          </div>

          {/* Third Column: Second Image with Description */}
          <div className="flex-1 text-center">
            <img
              alt="Bottles of sandalwood oil"
              className="mx-auto border-4 border-gray-700 rounded-full transition-transform transform hover:scale-105"
              height="160"
              src="/adhyatm/suddh-puja-dravya/img-3.31.png"
              width="160"
            />
            <h2 className="text-gray-700 text-xl font-bold mt-5">... चंदन का तेल...</h2>
            <p className="text-gray-700 mt-3 text-sm font-semibold leading-relaxed">
              चंदन के विषय में सबसे मुख्य परीक्षणीय है चंदन का तेल । अध्यात्म परिवार ने विलेपन के लिए उत्तम में उत्तम चंदन का तेल उपलब्ध करवाया है।
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Product Card */}
          <div className="text-center flex flex-col items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm mb-2">
                यह गौशीर्ष चंदन का ही श्रेष्ठ वासचूर्ण है। यह वासचूर्ण भी IS और GCMS पद्धति से लैब टेस्टेड है।
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/adhyatm/suddh-puja-dravya/img-3.32.png" alt="Vasachoorna" className="mx-auto mb-4 rounded-full" width="150" height="150" />
              <h2 className="text-xl font-bold font-Teko text-gray-700">...वासचूर्ण...</h2>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <div>
              <img src="/adhyatm/suddh-puja-dravya/img-3.33.png" alt="Orisaya" className="mx-auto mb-4 rounded-full" width="150" height="150" />
              <h2 className="text-xl font-bold font-Teko text-gray-700">... ओरसिया ..</h2>
            </div>
            <div>
              <p className="text-sm mt-2">
                केसर चंदन आदि घिसने के लिए . स्वद्रव्य से पूजा करने का प्रथम उपयोगी उपकरण । अलग-अलग साइज के ओरसिए उपलब्ध हैं।
              </p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm mb-2">
                प्रभु की पूजा में तो केसर से भी गरम कस्तूरी का भी उपयोग करने के लिए शास्त्र में बताया गया है। तो केसर में तो प्रश्न ही कहां उठता है? ASI की भी रिपोर्ट यही है कि : आरस को नुकसान नमी से है केसर से नहीं। इसलिए प्रस्तुत है : १२ प्रकार की रिपोर्ट से टेस्टेड शुद्ध केसर !
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/adhyatm/suddh-puja-dravya/img-3.34.png" alt="Kesar" className="mx-auto mb-4 rounded-full" width="150" height="150" />
              <h2 className="text-xl font-bold font-Teko text-gray-700">...केसर...</h2>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <div>
              <img src="/adhyatm/suddh-puja-dravya/img-3.35.png" alt="Gandhakavari Vastra" className="mx-auto mb-4 rounded-full" width="150" height="150" />
              <h2 className="text-xl font-bold font-Teko text-gray-700">...गंधकाषायी वस्त्र...</h2>
            </div>
            <div>
              <p className="text-sm mt-2">
                यह है प्रभु के अंगलूछने के लिए ५०० काउंट का बंगाली वस्त्र-ढाका की मलमल । इस वस्त्र से अंगलूछना करते वक्त सौधर्मेंद्र कृत जन्माभिषेक की स्मृति होगी!
              </p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm mb-2">
                गौशीर्ष चंदन, केसर आदि के मिश्रण से बनाया हुआ यह चूर्ण अल्प समय में घिस कर तैयार हो जाता है। इस प्रकार शीघ्र प्रभु पूजा की केसर तैयार हो जाती है!
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/adhyatm/suddh-puja-dravya/img-3.36.png" alt="Yuktachandana Choorna" className="mx-auto mb-4 rounded-full" width="150" height="150" />
              <h2 className="text-xl font-bold font-Teko text-gray-700">...यक्षकर्दम चूर्ण...</h2>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="text-center">
            <img src="/adhyatm/suddh-puja-dravya/img-3.37.png" alt="Bheemseti Kapoor" className="mx-auto mb-4 rounded-full" width="150" height="150" />
            <h2 className="text-xl font-bold font-Teko text-gray-700">...भीमसेनी कर्पूर...</h2>
          </div>

          <div className="text-center">
            <p className="text-sm mt-2">
              यह भीमसेनी (बरास) कर्पूर, कर्पूर की सबसे उत्तम जाती है। यह विदेशों में ही मिलता है तथा दुर्लभ वृक्षों से प्राप्त होता है। घनसार कर्पूर भी वनस्पति से प्राप्त होने वाला द्रव्य है। शास्त्र के अनुसार ऐसे कर्पूर को पूजा के लिए केसर में मिलाना चाहिए। इससे केसर घट्ट बनती है, साथ ही इसके एन्टीफंगल गुण के कारण प्रतिमाजी में फंगस और गड्ढे पढ़ने की समस्या नहीं होती है। विशेष : प्रथम विश्वयुद्ध के समय जर्मनी द्वारा बनाया हुआ 'सिंथेटिक कर्पूर' ही प्रायः वर्तमान में सब स्थानों पर मिल रहा है। वह अशुद्ध है। भारत में शुद्ध कर्पूर नहीं मिल सका है।
            </p>
          </div>

          <div className="text-center">
            <img src="/adhyatm/suddh-puja-dravya/img-3.38.png" alt="Ghanasara Kapoor" className="mx-auto mb-4 rounded-full" width="150" height="150" />
            <h2 className="text-xl font-bold font-Teko text-gray-700">...घनसार कर्पूर...</h2>
          </div>
        </div>
      </div>

      {/* Second Page Content */}
     

      {/* Third Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Product Container */}
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* First Product */}
          <div className="md:w-1/2 text-center">
            <div className="flex justify-center gap-4">
              <div className="w-40 h-40 rounded-full p-2">
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.39.png"
                  alt="Gold leaf in gray envelope"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full p-2">
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.40.png"
                  alt="Silver leaf in white envelope"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h2 className="mt-4 text-xl font-Teko text-gray-700 font-bold">
              ... सोने-चांदी का बरक (वर्क) ...
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-center">
              इस बरक की विशेषता है : उसकी मोटाई (Thickness)<br />
              जिसके कारण निर्माल्य ज्यादा उतरता है। परिणाम स्वरूप<br />
              देवद्रव्य का संरक्षण होता है। अध्यात्म परिवार के बरक का वजन और<br />
              १००% शुद्धता के विषय में वर्क के जानकार प्रभु भक्त स्पष्ट समझ सकते हैं।<br />
              उदाहरण : जहां अन्यत्र ७ ग्राम वजन का बरक ₹७०० में मिलता है,<br />
              वहीं अध्यात्म परिवार का २० ग्राम वजन का बरक ₹१९०० में मिलता है।<br />
              फलस्वरूप २५ से ३०% द्रव्य की बचत होती है।<br />
              हर लॉट को उपलब्ध करवाने से पहले बरक की जांच होती है।
            </p>
          </div>

          {/* Second Product */}
          <div className="md:w-1/2 text-center">
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full p-2">
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.41.png"
                  alt="Gold and silver leaf in containers"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h2 className="mt-4 font-Teko text-xl text-gray-700 font-bold">
              सोने का बदला - चांदी का बादला...
            </h2>
            <p className="mt-4 text-sm leading-relaxed">
              १ किलो चांदी (९९९) के साथ<br />
              ७ ग्राम स्वर्ण (९९९) के मिश्रण<br />
              वाला सोने का बादला और चांदी (९९९)<br />
              का चांदी का बादला समग्र<br />
              जैनशासन में प्रायः नहीं मिलता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;