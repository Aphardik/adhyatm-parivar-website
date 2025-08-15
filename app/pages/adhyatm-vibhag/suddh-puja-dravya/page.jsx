import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

export const metadata = {
  title: 'शुद्ध पूजाद्रव्य संप्राप्ति | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
  const statsData = [
    { count: "125", label: "कुल प्राप्तिस्थान", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "15", label: "कुल द्रव्य प्रकार", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "14Cr +", label: "प्रभुपूजको द्वारा ख़रीदे गए द्रव्यों की कुल कीमत", color: "bg-gradient-to-b from-green-400 to-green-600" },
  ];

  return (
    <div className="bg-whitey mx-auto font-body max-w-7xl">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                शुद्ध पूजाद्रव्य संप्राप्ति
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-maroon font-semibold">
                अध्यात्म परिवार
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                कार्य प्रारंभ: वि.सं. २०७०
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center my-8 lg:my-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink  text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            अध्यात्म परिवार प्रस्तुत करता है, प्रभु भक्तों को प्रसन्न कर देने
            वाले पूजा के द्रव्य !
          </h3>
        </div>

        {/* Products Section with Alternating Layout */}
        <section className="my-12">
          {/* Product 1 - Gauseersh Chandan - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                alt="A set of sandalwood pieces"
                className="w-full h-64 object-contain rounded-xl"
                src="/adhyatm/suddh-puja-dravya/img-3.30.jpg"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                गौशीर्ष चंदन
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                विश्व के तमाम चंदनों में सर्वश्रेष्ठ, शास्त्रवर्णित मलयाचल पर्वत
                पर होने वाला 'गौशीर्ष' वृक्ष का चंदन है। लायसेंस धारक अध्यात्म
                परिवार गवर्नमेंट ऑक्शन से चंदन की १६ किस्मों में से सबसे ज्यादा
                तेल वाला तथा रिपोर्ट द्वारा प्रमाणित जिसमें तेल भी श्रेष्ठ जाति का
                होता है, वह चंदन लेता है। इसके पश्चात IS और GCMS पद्धति से उसकी
                लैब टेस्टिंग होती है।
              </p>
            </div>
          </div>

          {/* Product 2 - Chandan Ka Tel - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                चंदन का तेल
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                चंदन के विषय में सबसे मुख्य परीक्षणीय है चंदन का तेल । अध्यात्म
                परिवार ने विलेपन के लिए उत्तम में उत्तम चंदन का तेल उपलब्ध करवाया
                है।
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                alt="Bottles of sandalwood oil"
                className="w-full h-64 object-contain rounded-xl"
                src="/adhyatm/suddh-puja-dravya/img-3.31.png"
              />
            </div>
          </div>

          {/* Product 3 - Vasachoorna - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.32.png"
                alt="Vasachoorna"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                वासचूर्ण
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                यह गौशीर्ष चंदन का ही श्रेष्ठ वासचूर्ण है। यह वासचूर्ण भी IS और
                GCMS पद्धति से लैब टेस्टेड है।
              </p>
            </div>
          </div>

          {/* Product 4 - Orisaya - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                ओरसिया
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
               स्वद्रव्य से पूजा करने का प्रथम उपयोगी उपकरण । केसर चंदन आदि घिसने के लिए, अलग-अलग साइज के ओरसिए उपलब्ध हैं।


              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.33.jpg"
                alt="Orisaya"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product 5 - Kesar - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.34.png"
                alt="Kesar"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                केसर
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                प्रभु की पूजा में तो केसर से भी गरम कस्तूरी का भी उपयोग करने के
                लिए शास्त्र में बताया गया है। तो केसर में तो प्रश्न ही कहां उठता
                है? ASI की भी रिपोर्ट यही है कि : आरस को नुकसान नमी से है केसर से
                नहीं। इसलिए प्रस्तुत है : १२ प्रकार की रिपोर्ट से टेस्टेड शुद्ध
                केसर !
              </p>
            </div>
          </div>

          {/* Product 6 - Gandhakashaayi Vastra - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                गंधकाषायी वस्त्र
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
               यह है प्रभु के अंगलूछने के लिए ५०० काउंट का बंगाली वस्त्र-ढाका की मलमल। इस वस्त्र से अंगलूछना करते वक्त सौधर्मेंद्र कृत जन्माभिषेक की स्मृति होगी!

              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.35.png"
                alt="Gandhakavari Vastra"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product 7 - Yaksha Kardam Choorna - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.36.jpg"
                alt="Yuktachandana Choorna"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                यक्षकर्दम चूर्ण
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                गौशीर्ष चंदन, केसर आदि के मिश्रण से बनाया हुआ यह चूर्ण अल्प समय
                में घिस कर तैयार हो जाता है। इस प्रकार शीघ्र प्रभु पूजा की केसर
                तैयार हो जाती है!
              </p>
            </div>
          </div>

          {/* Product 8 - Sone Chandi Ka Barak - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className=" rounded-xl p-8 order-2 md:order-1">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                सोने-चांदी का बरक (वर्क)
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                इस बरक की विशेषता है : उसकी मोटाई (Thickness) जिसके कारण निर्माल्य
                ज्यादा उतरता है। परिणाम स्वरूप देवद्रव्य का संरक्षण होता है।
                अध्यात्म परिवार के बरक का वजन और १००% शुद्धता के विषय में वर्क के
                जानकार प्रभु भक्त स्पष्ट समझ सकते हैं। उदाहरण : जहां अन्यत्र ७
                ग्राम वजन का बरक ₹७०० में मिलता है, वहीं अध्यात्म परिवार का २०
                ग्राम वजन का बरक ₹१९०० में मिलता है। फलस्वरूप २५ से ३०% द्रव्य की
                बचत होती है। हर लॉट को उपलब्ध करवाने से पहले बरक की जांच होती है।
              </p>
            </div>
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink order-1 md:order-2">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.39.png"
                  alt="Gold leaf"
                  className="sm:h-52 object-cover rounded-full"
                />
                <img
                  src="/adhyatm/suddh-puja-dravya/img-3.40.jpg"
                  alt="Silver leaf"
                  className="sm:h-52 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Product 9 - Sone Ka Badla - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-lightyellow rounded-xl p-8 border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.41.jpg"
                alt="Gold and silver leaf in containers"
                className="w-full h-64 object-contain rounded-xl"
              />
            </div>
            <div className=" rounded-xl p-8">
              <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
                सोने का बादला - चांदी का बादला
              </h3>
              <p className="text-lg leading-relaxed text-maroon">
                १ किलो चांदी (९९९) के साथ ७ ग्राम स्वर्ण (९९९) के मिश्रण वाला सोने
                का बादला और चांदी (९९९) का चांदी का बादला समग्र जैनशासन में प्रायः
                नहीं मिलता है।
              </p>
            </div>
          </div>

          {/* Kapoor Section - Special 3 Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
            <div className="bg-lightyellow rounded-xl p-8 text-center border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.37.jpg"
                alt="Bheemseti Kapoor"
                className="mx-auto mb-4 rounded-full h-64 w-64 object-cover"
              />
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                भीमसेनी कर्पूर
              </h3>
            </div>

            <div className=" rounded-xl p-8">
              <p className="text-lg leading-relaxed text-maroon">
                यह भीमसेनी (बरास) कर्पूर, कर्पूर की सबसे उत्तम जाती है। यह विदेशों
                में ही मिलता है तथा दुर्लभ वृक्षों से प्राप्त होता है। घनसार
                कर्पूर भी वनस्पति से प्राप्त होने वाला द्रव्य है। शास्त्र के
                अनुसार ऐसे कर्पूर को पूजा के लिए केसर में मिलाना चाहिए। इससे केसर
                घट्ट बनती है, साथ ही इसके एन्टीफंगल गुण के कारण प्रतिमाजी में फंगस
                और गड्ढे पढ़ने की समस्या नहीं होती है। <br /> विशेष : प्रथम विश्वयुद्ध के
                समय जर्मनी द्वारा बनाया हुआ 'सिंथेटिक कर्पूर' ही प्रायः वर्तमान
                में सब स्थानों पर मिल रहा है। वह अशुद्ध है। भारत में शुद्ध कर्पूर
                नहीं मिल सका है।
              </p>
            </div>

            <div className="bg-lightyellow rounded-xl p-8 text-center border border-lightpink">
              <img
                src="/adhyatm/suddh-puja-dravya/img-3.38.jpeg"
                alt="Ghanasara Kapoor"
                className="mx-auto mb-4 rounded-full h-64 w-64 object-cover"
              />
              <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
                घनसार कर्पूर
              </h3>
            </div>
          </div>
        </section>

        <div className="pb-8">
        <CounterStatsUI statsData={statsData} textColor="maroon" />
        </div>
      </div>
    </div>
  );
};

export default Page;