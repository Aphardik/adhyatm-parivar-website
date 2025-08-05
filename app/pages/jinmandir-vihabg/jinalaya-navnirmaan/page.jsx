import React from "react";

export default function TempleConstructionPage() {
  return (
    <div className="container bg-background mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                जिनालय नवनिर्माण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-content font-semibold">
                अध्यात्म शिल्पशाला
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ: वि.सं.२०७१
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16">
        <div className="border-l-4 border-secondary-color rounded-md p-4 bg-lighten-bg">
          <p className="text-lg leading-relaxed text-heading mb-4">
            इसीलिए तो सीहोर के राजा जब भावनगर में बसे तब उन्होंने जैन
            <span className=" text-secondary-color font-semibold">
              {" "}
              श्रेष्ठी कुंवरजीभाई माधाभाई{" "}
            </span>
            आदि को नगर के बसने का आमंत्रण दिया। लेकिन उन श्रेष्ठियों ने कह दिया
            कि,
            <span className="text-secondary-color font-semibold">
              {" "}
              "जिनालय के बिना हम नहीं आएंगे"{" "}
            </span>
            राजा ने जिनालय की जगह दी। ऐसे तो अनेक इतिहास हैं।
          </p>
          <p className="text-lg leading-relaxed text-heading">
            इसीलिए अध्यात्म परिवार ने{" "}
            <span className="text-secondary-color font-semibold">
              'अध्यात्म शिल्पशाला'
            </span>
            का एक विराट प्रकल्प प्रारंभ किया है। जिनालय निर्माण शास्त्रोक्त
            विधिपूर्वक तथा आकर्षक हो इसलिए पद्धति अनुसार योजना बनाई है, उसकी एक
            झलक इस प्रकार है :
          </p>
        </div>
      </section>

      {/* Project Planning Section */}
      <section className="py-8 sm:pb-12 lg:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                1
              </span>
            </div>
            <p className="text-base text-center leading-relaxed text-heading">
              शिल्प शास्त्रानुसारी प्लान बनाना।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                2
              </span>
            </div>
            <p className="text-base leading-relaxed text-center text-heading">
              स्तंभ, गोखले, घुम्मट आदि के आकर्षक भाववर्धक स्केच बनाना।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                3
              </span>
            </div>
            <p className="text-base text-center leading-relaxed text-heading">
              पाषाण आदि द्रव्यों की शुद्धि रखना।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                4
              </span>
            </div>
            <p className="text-base text-center leading-relaxed text-heading">
              रूपकाम मर्यादापूर्ण हो उसका ध्यान रखना।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                5
              </span>
            </div>
            <p className="text-base text-center leading-relaxed text-heading">
              पत्थर खरीदी, बांधकाम, पत्थर फिटिंग, कार्निंग आदि हर एक लेवल की
              देखरेख का कार्य स्वयं करना।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                6
              </span>
            </div>
            <p className="text-base text-center leading-relaxed text-heading">
              भविष्य में जिनालय की जैन स्थापत्य के रूप में पहचान बने इसलिए
              तीर्थंकर प्रभु आदि के जीवन प्रसंग तथा शासन-प्रभावक घटनाओं की कोरणी
              करना।
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-bold text-heading bg-light-bg/20 rounded-lg inline-block px-6 py-3">
            अध्यात्म शिल्पशाला की उपलब्धि की यह झलकियां हैं!
          </p>
        </div>
      </section>

      {/* Stone Processing Section */}
      <section className="my-12">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            जिनालय पाषाण निर्माण की प्रक्रिया (कार्य प्रारंभ: वि.सं.२०७६)
          </h3>
        </div>

        <div className="border-l-4 border-secondary-color rounded-md p-4 bg-lighten-bg mb-8">
          <p className="text-lg leading-relaxed text-heading">
            अध्यात्म शिल्पशाला द्वारा करोड़ों रुपए के देवद्रव्य का रक्षण, मजबूत
            बंधारण और गहरी तथा आकर्षक कोरणी, ऐसे त्रिविध लाभ के लिए यह कार्य
            प्रारंभ किया गया है।
          </p>
        </div>

        {/* Stone Procurement */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmandir/jinalaya-navnirmaan/img-2.12.jpg"
              alt="स्टोन ब्लॉक"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-center text-base font-semibold text-heading">
              यह है आरस की टनल माइन
            </p>
          </div>
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmandir/jinalaya-navnirmaan/img-2.13.jpg"
              alt="अंबाजी माइन की खरीदी"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-center text-base font-semibold text-heading">
              अंबाजी माइन की एक थड़ी की खरीदी के समय खदानमलिक तथा अध्यात्म
              परिवार निर्माण विभाग के कार्यकर्ता।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmandir/jinalaya-navnirmaan/img-2.14.jpg"
              alt="स्टोन ब्लॉक"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-center text-base font-semibold text-heading">
              थड़ी की खरीद के बाद बनाया गया स्टोन ब्लॉक।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmandir/jinalaya-navnirmaan/img-2.15.jpg"
              alt="विदेशी पाषाण"
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-center text-base font-semibold text-heading">
              मात्र अंबाजी या मकराना ही नहीं, इटली, थासोस ग्रीस, इथोपिया, ईरान
              आदि देशों से भी स्टोन ब्लॉक मंगवाया है।
            </p>
          </div>
        </div>

        {/* Stone Processing Steps */}
        <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
          <div className="text-center mb-8 ">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              जेसलमेर का स्टोन ब्लॉक
            </h3>
          </div>
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.16.jpg"
                  alt="जैसलमेर का स्टोन ब्लॉक"
                  className="w-full h-80 object-contain rounded-lg"
                />
                <p className="mt-4">जेसलमेर का स्टोन ब्लॉक</p>
              </div>
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.17.jpg"
                  alt="जैसलमेर का स्टोन ब्लॉक"
                  className="w-full h-80 object-contain rounded-lg"
                />
                <p className="mt-4">
                  इस स्टोन ब्लॉक को ट्रेसिंग मशीन द्वारा जरूरी नाप के प्रमाण में
                  कटा जाता है।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Processing */}
        <div className="bg-light-bg/20 rounded-lg p-6 mb-12">
          <h3 className="font-bold text-xl text-heading mb-6 text-center font-heading">
            उन्नत तकनीकी प्रक्रिया
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* <div className="text-center">
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.17.png"
                alt="CNC डायमंड वायर प्रोफाइल मशीन"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-sm font-semibold text-heading">
                इस स्टोन ब्लॉक को ट्रेसिंग मशीन द्वारा जरूरी नाप के प्रमाण में
                कटा जाता है।
              </p>
            </div> */}
            <div className="text-center">
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.18.jpg"
                alt="CNC डायमंड वायर प्रोफाइल मशीन"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-base font-semibold text-heading">
                CNC डायमंड वायर प्रोफाइल मशीन
              </p>
            </div>
            <div className="text-center">
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.19.jpg"
                alt="पिलर निर्माण"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-base font-semibold text-heading">
                किसी भी शेप में पिलर बनाया जा सकता है
              </p>
            </div>
            <div className="text-center">
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.20.jpg"
                alt="एक्सीस प्रीफाइल मशीन"
                className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
              />
              <p className="text-base font-semibold text-heading">
                एक्सीस प्रीफाइल मशीन द्वारा कार्विंग
              </p>
            </div>
          </div>
        </div>

        {/* Fine Work Section */}
        <div className="border-l-4 border-secondary-color rounded-md p-6 bg-lighten-bg mb-12">

          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div>
              <p className="text-lg font-semibold leading-relaxed text-heading mb-2">
                देलवाड़ा के मंदिर ८०० वर्ष बाद भी हमारा मन जीत लेते हैं, क्योंकि
                वहां बुरादे के बदले में चांदी, सोना तथा रत्न देकर गहरी गहरी
                कोरणी करवाई थी।
              </p>
              <p className="text-lg font-semibold leading-relaxed text-heading">
                छिछली कोरणी हो तो २५-५० वर्षों में पुनः घिसाई करवाने से वह कोरणी
                नष्ट हो जाती है।
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center sm:p-4">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.21.png"
                  alt="प्रोफाइलिंग"
                  className="w-full object-contain rounded-lg mb-2"
                />
                <p className="text-base text-heading">
                  जैसा शेप जरूरी हो वैसी प्रोफाइलिंग हो सकती है।
                </p>
              </div>
              <div className="text-center sm:p-4">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.22.png"
                  alt="इन-ले वर्क"
                  className="w-full object-contain rounded-lg mb-2"
                />
                <p className="text-base text-heading">
                  ऐसा इन-ले वर्क भी शिल्पशाला में होता है।
                </p>
              </div>
              <div className="text-center sm:p-4">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.23.png"
                  alt="मैन्युअल कार्विंग"
                  className="w-full object-contain rounded-lg mb-2"
                />
                <p className="text-base text-heading">
                  यंत्र का काम होने के बाद इस प्रकार मैन्युअल फाइन कार्विंग आसान
                  बन जाती है।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Project */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lighten-bg rounded-lg p-6">
            <img
              src="/jinmandir/jinalaya-navnirmaan/img-2.24.jpeg"
              alt="कच्छ-रापर-गढ़वाली जिनालय कार्विंग"
              className="w-full bg-lightyellow sm:p-20 object-contain rounded-lg"
            />
          </div>
          <div className="bg-lighten rounded-lg p-6">
            <h3 className="font-bold text-xl text-heading mb-4 font-heading">
              कच्छ-रापर- गढ़वाली के दर्शनीय जिनालय
            </h3>
            <p className="text-lg leading-relaxed text-heading">
              <span className="font-semibold text-heading">
                कच्छ-रापर-गढ़वाली के दर्शनीय जिनालय
              </span>{" "}
              की यह कार्विंग तथा प्रोफाइलिंग{" "}
              <span className="font-semibold text-heading">
                अध्यात्म शिल्पशाला
              </span>{" "}
              में हो रही है।
            </p>
          </div>
        </div>
      </section>

      {/* Final Temple Images */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-lighten-bg rounded-lg p-6 shadow-sm flex-grow">
              <img
                alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                className="w-full object-contain rounded-lg"
                src="/jinmandir/jinalaya-navnirmaan/img-2.25.png"
              />
            </div>
            <div className="bg-secondary-color text-white rounded-lg p-4">
              <p className="text-base leading-relaxed">
                श्री शांति कनक जिनालय, नानपुरा सूरत के जिनालय की कोरणी कई विशेषज्ञों के लिए आकर्षण बनी है!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-lighten-bg rounded-lg p-6 shadow-sm flex-grow">
              <img
                alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                className="w-full object-contain rounded-lg"
                src="/jinmandir/jinalaya-navnirmaan/img-2.26.png"
              />
            </div>
            <div className="bg-secondary-color text-white rounded-lg p-4">
              <p className="text-base leading-relaxed">
                श्री शान्तिवर्धक जिनालय-पाल, अभी तो यह निर्माणाधीन है तो भी ऐसा
                मन मोह लेता है तो जब पूर्ण रूप से बन जाएगा तब कैसा होगा!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="text-center py-8">
        <div className="bg-light-bg rounded-lg p-6 inline-block">
          <p className="text-xl font-bold text-heading">
            यह तो चित्र हैं। साक्षात निहारने के लिए पधारिए 'अध्यात्म शिल्पशाला'
            हिम्मतनगर!
          </p>
        </div>
      </section> */}
    </div>
  );
}
