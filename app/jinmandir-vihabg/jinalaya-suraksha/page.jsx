import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";


export const metadata = {
  title: 'जिनालय सुरक्षा | जिनमंदिर विभाग',
  description: '',
}

const JinalayaSuraksha = () => {
  const statsData = [
    {
      count: "65",
      label: "कुल जिनालयों की मरम्मत",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "1.25Cr +",
      label: "  अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
  ];
  return (
    <div className="bg-whitey max-w-7xl font-body text-maroon">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl  font-heading font-bold text-maroon">
                जिनालय सुरक्षा (मरम्मत)
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-bold my-1">
               जिनालय का लीकेज आदि समस्याओं का निवारण कार्य
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What is This Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-2 sm:p-4  mx-auto max-w-4xl">
            <div className="space-y-4">
              <p className="text-maroon leading-relaxed text-center text-lg">
                जिनशासन की शान समान जिनालय की सुरक्षा जोखम में हो और कोई रास्ता
                न हो तो, अपवाद स्वरूप वनस्पति को कभी स्पर्श भी नहीं करने वाले
                महात्मा वनस्पति को खींच कर निकाल सकते हैं :
              </p>
              <div className=" p-4 rounded-sm  border-b-2 border-maroon/50 max-w-2xl mx-auto">
                <p className="text-maroon font-semibold sm:text-xl font-base text-center">
                  यदि शास्त्रों में ऐसा लिखा हो तो हम श्रावकों के लिए यह कितना
                  अनिवार्य कर्तव्य है?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-2 sm:py-4 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              समाधान
            </h3>
          </div> */}

          <div className="bg-lightyellow rounded p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/5">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.3.png"
                  alt="Additional repair"
                  className="w-full h-56 object-cover rounded"
                />
              </div>
              <div className="lg:w-4/5 space-y-4">
                <div className="relative border border-maroon/20 p-6 sm:p-14 rounded-sm">
                  <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                    <TopLeftSvg />
                  </div>
                  <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                    <BottomRighSvg />
                  </div>
                  <p className="text-maroon sm:text-lg leading-relaxed">
                    हम जानते हैं कि सीमेंट के उपयोग से जिनालय की सुरक्षा को जोखम
                    होता है! लीकेज के मूल स्थान को ढूंढ कर इस प्रकार सीमेंट का
                    घोल डालकर कुछ समय के लिए लीकेज का सॉल्यूशन अध्यात्म परिवार
                    द्वारा किया जा रहा है।
                  </p>
                  <p className="text-maroon sm:text-lg leading-relaxed font-medium">
                    भविष्य में यही समाधान चूने के व्यापक उपयोग द्वारा किया
                    जाएगा।
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded p-4">
              <p className="text-maroon text-lg font-semibold leading-relaxed text-center">
                अहमदाबाद, मुंबई, कोल्हापुर आदि अनेक स्थानों के अनेक जिनालयों में
                अध्यात्म परिवार द्वारा किए हुए सुरक्षाकर्म से लीकेज की समस्या टल
                गई है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before After Results Section */}
      <section className="py-6 sm:py-6 lg:py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              परिणाम
            </h3>
          </div>

          <div className="bg-lightyellow p-6 sm:p-8 ">
            {/* Before After Comparison */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
              {/* Before Image */}
              <div className="relative group">
                <div className="bg-whitey p-4">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.1.jpg"
                    alt="मरम्मत पूर्व"
                    className="w-80 h-80 object-cover transition-colors duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    पहले
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-gray-800 font-semibold text-lg">
                      मरम्मत पूर्व
                    </span>
                    <p className="text-maroon text-sm mt-1">
                      क्षतिग्रस्त अवस्था
                    </p>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="flex flex-col items-center">
                <div className="bg-whitey text-maroon w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ">
                  VS
                </div>
                <div className="text-maroon text-sm mt-2 font-medium">
                  तुलना
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="bg-whitey p-4 ">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.2.jpg"
                    alt="मरम्मत पश्चात"
                    className="w-80 h-80 object-cover transition-colors duration-300"
                  />
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    बाद में
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-gray-800 font-semibold text-lg">
                      मरम्मत पश्चात
                    </span>
                    <p className="text-maroon text-sm mt-1">
                      सुधारी गई अवस्था
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-whitey text-maroon px-6 py-3 rounded-full font-semibold">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                छवि ही सब कुछ कह रही है, कुछ और लिखने की जरूरत ही नहीं है!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}

      {/* Abu Delwada Success Story Section */}
      <section className="py-8 sm:py-12 text-lg lg:py-16 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              सौभाग्य का सीमाचिह्न - आबू देलवाड़ा
            </h3>
          </div>

          <div className="bg-lightyellow rounded p-6 sm:p-8">
            <div className="text-center mb-8">
              <div className="text-2xl font-heading font-semibold text-maroon mb-4">
                आबू - देलवाड़ा का देरासर...
              </div>
              <div className="w-24 h-1 bg-secondary-color mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1  gap-6">
              <div className="space-y-4 ">
                <p className="text-maroon leading-relaxed">
                  आठ शतकों से मात्र भारत ही नहीं, समग्र विश्व के हजारों, लाखों,
                  करोड़ों लोगों की आंख तथा श्वास को स्थिर करने वाले आबु देलवाड़ा
                  के इन मंदिरों की महिमागान का वर्णन शब्दों में किस प्रकार हो
                  सकता है?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
                  <div className="bg-lightyellow border relative border-maroon/20 p-4 py-10 rounded-sm">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <TopLeftSvg />
                    </div>
                    <p className="text-maroon font-medium">
                      इस सम्पूर्ण जिनालय के सामरण आदि में पड़ी मोटी मोटी दरारों
                      के कारण लीकेज की समस्या इस हद तक थी कि जिनालय में २०-२०
                      बाल्टी पानी गिरता था!
                    </p>
                  </div>
                  <div className="bg-lightyellow relative border border-maroon/20 p-4 py-10 rounded-sm">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <TopLeftSvg />
                    </div>
                    <p className="text-maroon leading-relaxed">
                      दरारों में से घुसने वाले पानी के कारण अंदर का पत्थर पोला
                      होता जा रहा था, जिसके कारण पूरा जिनालय जीर्ण हो रहा था।
                    </p>
                  </div>
                  <div className="bg-lightyellow relative border border-maroon/20 p-4 py-10 rounded-sm">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <TopLeftSvg />
                    </div>
                    <p className="text-maroon leading-relaxed">
                      अध्यात्म परिवार ने दरारों के मूल कारणभूत सीमेंट की २ से
                      २.५० इंच की परत हटा कर चूने से उसकी मरम्मत करके जिनालय की
                      बढ़ती जीर्णता को रोका है।
                    </p>
                  </div>
                  <div className="bg-lightyellow relative border border-maroon/20 p-4 py-10 rounded-sm">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                      <TopLeftSvg />
                    </div>
                    <p className="text-maroon leading-relaxed font-medium">
                      इस महान कार्य को करने का लाभ देकर सेठ श्री कल्याणजी
                      परमानंदजी पेढ़ी, सिरोही ने अध्यात्म परिवार को असीम आनंद
                      प्रदान किया है।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remarkable Incident Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              एक रोमहर्षकारी घटना
            </h3>
          </div>

          <div className="bg-whitey rounded p-0 sm:p-8 ">
            <div className="bg-lightyellow text-lg p-6 rounded-sm mb-6">
              <p className="text-maroon text-xl font-bold mb-2">कार्य का आरंभ हुआ</p>
              <p className="text-maroon">
                कहावत भी है कि, 'अच्छे काम में सौ विघ्न आते हैं।'
              </p>
            </div>

            <div className="grid grid-cols-1 text-lg lg:grid-cols-2 gap-6">
              <div className="bg-whitey p-6 rounded-sm space-y-6">
                <p className="text-maroon leading-relaxed">
                  इस कार्य की किसी ने ASI जोधपुर डिपार्टमेंट को कंप्लेन कर दी :
                  'आबु देलवाड़ा के एतिहासिक शिल्प के साथ छेड़छाड़ हो रही है। '
                  जोधपुर से सिहोरी ट्रस्टमंडल को समाचार आया की 'कल उच्च अधिकारी
                  जांच के लिए आ रहे हैं ।'
                </p>

                <p className="text-maroon leading-relaxed">
                  अध्यात्म परिवार के व्यवस्थापक योगानुयोग नजदीक में ही थे। वे
                  तुरंत आ पहुंच गए। ASI अधिकारी इमरान अलि को पेढ़ी के
                  अध्यक्षश्री और अध्यात्म परिवार के कार्यकर्ता ने साथ मिलकर
                  समग्र कार्य का निरीक्षण करवाया।
                </p>

                <div className="relative bg-lightyellow p-4 sm:p-8 rounded-sm  ">
                  <div className="text-maroon  text-center leading-relaxed font-medium text-xl">
                    <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <TopLeftSvg />
      </div>
       <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <BottomRighSvg />
      </div>
                    <span className="p-2 ">परीक्षण के अंत में अधिकारी के उद्गार थे</span> 
                    <p className="font-bold my-4">'प्राचीन धरोहर के रक्षण के लिए इतनी सावधानी तो ASI भी नहीं लेता है!'</p>
                     <span className="p-2 ">यह सुनकर कर सबका हृदय आनंद से छलक गया।</span>
                  </div>
                </div>

                {/* <p className="text-gray-800 leading-relaxed">
                  यह सुनकर कर सबका हृदय आनंद से छलक गया।
                </p> */}
              </div>

              <div className="bg-lightyellow p-4 rounded-sm">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.9.png"
                  alt="पुराने पत्थर की दीवार"
                  className="w-full h-auto rounded-sm border border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vimalvasahi Work Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              विमलवसही की मरम्मत
            </h3>
          </div>

          <div className="bg-whitey rounded p-0 sm:p-8 ">
            <div className="space-y-6">
              {/* First block - normal */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="sm:w-1/2">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.4.jpg"
                    alt="विमलवसही"
                    className="w-full h-auto rounded-sm border border-gray-300"
                  />
                </div>
                <div className="sm:w-1/2 p-4">
                  <p className="text-maroon text-lg leading-relaxed">
                    यहां{" "}
                    <span className="font-bold text-maroon">'विमलवसही'</span>{" "}
                    का रंग मंडप है, जहां दरार से लीकेज के कारण मूसलाधार पानी
                    गिरता था!
                  </p>
                </div>
              </div>

              {/* Second block - reversed */}
              <div className="flex flex-col sm:flex-row-reverse items-center gap-6">
                <div className="sm:w-1/2 p-4">
                  <img
                    src="/jinmandir/jinalaya-suraksha/img-2.5.jpg"
                    alt="विमलवसही"
                    className="w-full h-auto "
                  />
                </div>
                <div className="sm:w-1/2">
                  <p className="text-maroon text-lg leading-relaxed">
                    चूने के द्वारा जिसकी मरम्मत हुई है और जिसकी बाकी है उन दोनों
                    के बीच में फर्क स्पष्ट देखा जा सकता है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ranakpur Section */}
      <section className="py-6 sm:py-6 lg:py-8 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              सौभाग्य का सीमाचिह्न - राणकपुर
            </h3>
          </div>

          <div className="bg-whitey rounded">
            <div className="mb-6">
              <p className="text-maroon text-xl mb-4 leading-relaxed text-center">
                पहाड़ियों की गोद में बसे और एवरेस्ट जैसी ऊंची ख्याति प्राप्त इस
                महातीर्थ की सुरक्षा करने का लाभ देकर सेठ आनंदजी कल्याणजी पेढ़ी
                ने हमारे अहोभाग्य को शीर्ष पर पहुंचा दिया।
              </p>

              <p className="text-maroon font-semibold text-xl leading-relaxed text-center">
                और फिर शुरू हुआ एक अद्भुत सुरक्षायज्ञ ! जिसकी नयनरोचक छबियां ही
                कार्य का व्याप समझने के लिए काफी हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-lightyellow p-4 rounded-sm">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.6.jpeg"
                  alt="दरार"
                  className="w-full h-auto  mb-4"
                />
                <p className="text-base text-maroon leading-relaxed">
                  यह शिखर पर दिखाई देने वाली कालाश वास्तव में एक फंगस है। जिसके कारण शिखरों में दरारें भी पड़ रही है। हर दो वर्षों में इसकी मरम्मत करनी पड़ती थी।
                </p>
              </div>

              <div className="bg-lightyellow  p-4 rounded-sm">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.7.jpeg"
                  alt="फंगस हटाना"
                  className="w-full h-auto  mb-4"
                />
                <p className="text-base text-maroon leading-relaxed">
                  ASI के सहयोग से अध्यात्म परिवार द्वारा पहले सॉफ्ट केमिकल से
                  फंगस दूर की जाती है। पश्चात दरारों और खंडित भागों को चूने से
                  रिस्टोर किया जाता है और अंत में वॉटर रिपेलेंट प्रोसेस की जाती
                  है।
                </p>
              </div>

              <div className="bg-lightyellow   p-4 rounded-sm">
                <img
                  src="/jinmandir/jinalaya-suraksha/img-2.8.png"
                  alt="10-15 साल परिणाम"
                  className="w-full h-auto  mb-4"
                />
                <p className="text-base text-maroon leading-relaxed">
                  यह परिणाम अब कम से कम १०-१५ वर्ष तक रहेगा।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData} textColor="maroon" />
       <CallToActionButton
        heading="जिनालय में दरार या लीकेज?"
        content="आपके आस-पास कोई जिनालय में दरार या लीकेज हैं। हम उसे सुरक्षित और सुदृढ़ बनाने में मदद करेंगे।"
        id="jinalay-suraksha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default JinalayaSuraksha;
