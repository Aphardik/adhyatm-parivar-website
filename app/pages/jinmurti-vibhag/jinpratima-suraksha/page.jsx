import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Page = () => {
  return (
    <div className="bg-background text-heading font-body">
      {/* Header */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading mb-1 sm:mb-2">
                जिनप्रतिमा सुरक्षा
              </h1>
              <p className="sm:text-base lg:text-lg text-content font-medium">
                कार्य आरंभ: वि.सं. २०६३
              </p>
            </div>
          </div>
        </div>
      </header> 

      {/* Section 1: Introduction */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto  max-w-7xl">


          <div className="bg-background  p-6 sm:p-8 lg:p-10">
            <div className="space-y-6 text-center">
              <p className="text-heading text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                एक नयनरम्य प्रतिमा में हजारों को समकित प्राप्त करवाने की ताकत
                होती है। यह प्रतिमा हमारी अज्ञानता के कारण यदि खराब हो जाए और मन
                में भक्ति के उल्लास के बदले चिंता के बादल छा जाएं तो
                <span className="text-secondary-color font-semibold">
                  {" "}
                  यह कितनी बड़ी हानि है!
                </span>
              </p>
              <p className="text-heading text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                इसके मूल शोधते शोधते अध्यात्म परिवार ने{" "}
                <span className="text-secondary-color font-bold">ASI</span> के
                दरवाजे खटखटाने तक के प्रयत्न किये है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems - Modern Grid Layout */}
      <section className="py-8 sm:pb-12 lg:pb-16 ">
        <div className="mx-auto  max-w-7xl">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
             यह प्रतिमा की तस्वीर है या हमारे अज्ञान की तस्वीर?
            </h2>
          </div>

          {/* Problem 1 - Image Left */}
          <div className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-background rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.1.png"
                    alt="Damaged Statue"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-background rounded-sm  p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-heading mb-4">
                  कड़वी वास्तविकता
                </h3>
                <p className="text-lg sm:text-xl text-heading leading-relaxed">
                  चिपकाए हुए कंके को निकालने पर प्रकट हुई कड़वी वास्तविकता!
                </p>
              </div>
            </div>
          </div>

          {/* Problem 2 - Image Right */}
          <div className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="bg-background rounded-sm  p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-heading mb-4">
                  प्रभु के चरणों की दुर्दशा
                </h3>
                <p className="text-lg sm:text-xl text-heading mb-4 leading-relaxed">
                  जिन प्रभु के चरण जहां पड़ते थे वहां स्वर्णकमल रखे जाते थे{" "}
                  <br /> उन प्रभु के चरणों पर चिपकाये हुए पंजे से पैदा होने वाली
                  दर्दनाक दुर्दशा!
                </p>
              </div>
              <div className="bg-background rounded-sm  overflow-hidden">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.2.png"
                  alt="Damaged Feet"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Problem 3 - Image Left */}
          <div className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-background rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.3.png"
                    alt="Damaged Parts"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 bg-background rounded-sm  p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-heading mb-4">
                  नमी का कारण
                </h3>
                <p className="text-lg sm:text-xl text-heading leading-relaxed">
                  इस अवदशा का कारण और कुछ नहीं, टिके आदि के भीतर रहने वाली नमी
                  ही है।
                </p>
              </div>
            </div>
          </div>

          {/* Problem 4 - Image Right */}
          <div className="mb-12 lg:mb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="bg-background rounded-sm  p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-heading mb-4">
                  धरणेंद्र की सुरक्षा
                </h3>
                <p className="text-lg sm:text-xl text-heading mb-4 leading-relaxed">
                  पार्श्वनाथ प्रभु को तो धरणेंद्रने सुरक्षित रखा था। <br /> हम
                  प्रभु के प्रतिबिंब रूपी फणा को नहीं संभाल सके!
                </p>
              </div>
              <div className="bg-background rounded-sm  overflow-hidden">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.4.png"
                  alt="Damaged Parts"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Root Cause Analysis */}
      <section className="py-8 sm:py-12 lg:py-16 bg-background">
        <div className="mx-auto max-w-7xl">
          {/* Ancient Wisdom Quote */}
          <div className="mb-8 lg:mb-12">
            <div className="text-center mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                महत्वपूर्ण निष्कर्ष
              </h3>
            </div>
            <div className="bg-lighten-bg rounded-sm  p-6 sm:p-8">
              <p className="text-heading text-lg sm:text-xl font-medium text-center">
                जो बात ASI ने कही है वह बात सदियों पहले श्री श्राद्धविधि ग्रंथ
                में अंकित है:
              </p>
              <div className="bg-lighten-bg flex items-center justify-center p-6 sm:p-8 rounded-sm">
                <p className="text-heading font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                  <FaQuoteLeft
                    size={32}
                    className="text-content flex-shrink-0"
                  />
                  प्रतिमा पर जिस जगह पर जरा भी पानी रह जाता है (वहां) श्यामलता आ
                  जाती है।
                  <FaQuoteRight
                    size={32}
                    className="text-content flex-shrink-0"
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Root Cause Analysis */}
          <div className="">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-row gap-2">
              <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.5.1.png"
                  alt="Root Cause Analysis"
                  className="w-full h-full object-contain"
                />
              </div>
                            <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.5.2.png"
                  alt="Root Cause Analysis"
                  className="w-full h-full object-contain"
                />
              </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-heading">
                  बबूल के पेड़ की जड़ के बदले मात्रा डालियां कांटने से कांटे
                  चुभना किस प्रकार बंद होंगे?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-light-bg text-heading rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </span>
                    <span className="font-medium text-lg">
                      सबसे पहले १ इंच का टिका लगाया गया उसके गड्ढ़े!
                    </span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-light-bg text-heading rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </span>
                    <span className="font-medium text-lg">
                      उसको ढकने १.५ इंच का टिका लगाया उससे दूसरा गड्ढ़ा हुआ!
                    </span>
                  </div>
                  <div className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-light-bg text-heading rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </span>
                    <span className="font-medium text-lg">
                      इन दोनों को छिपाने के २ इंच का टिका लगाया उससे बना तीसरा
                      गड्ढ़ा!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Solutions */}
      <section className="py-8 sm:py-12 lg:py-16 ">
        <div className="mx-auto  max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              ये तो हुई समस्या, परन्तु समाधान? यह रहा...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
            <div className="bg-lighten-bg rounded-sm  p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-4 text-heading">
                प्रत्येक पूजक का एक संकल्प:
              </h3>
              <div className=" rounded-sm p-4 sm:p-6 space-y-3">
                <p className="font-medium text-lg text-content">
                  'शासन की धरोहर की सुरक्षा के लिए रोज १ मिनट अर्पण करूंगा'।
                </p>
                <p className="font-medium text-lg text-content">
                  मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।
                </p>
              </div>
            </div>
            <div className="bg-lighten-bg rounded-sm  p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-4 text-heading">
                भविष्य का नुकसान रुकेगा:
              </h3>
              <div className=" rounded-sm p-4 sm:p-6 space-y-3">
                <p className="font-medium text-content text-base sm:text-lg leading-relaxed">
                  अध्यात्म परिवार ने टिका निकाल कर प्रतिमाजी का लेप-ओप करने के
                  लिए बहुत परिश्रमपूर्वक शुद्ध द्रव्यों की खोज की है। बस हमें
                  ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ
                  दीजिये-दिलवाइये।
                </p>
                <p className="font-medium text-content text-base sm:text-lg">
                  मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Work Done - Success Stories */}
      <section className="py-8 sm:py-12 lg:py-16 bg-background">
        <div className="mx-auto  max-w-7xl">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              सौभाग्य का सीमाचिह्न
            </h2>
          </div>

          <div className="bg-lighten-bg rounded-sm mb-8  overflow-hidden hover: transition-shadow">
            <div className="h-full bg-lighten-bg flex items-center justify-center">
              <img
                src="/jinmurti/jinpratima-suraksha/img-1.6.png"
                alt="Work Done"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="font-semibold font-heading text-xl mb-3 text-heading">
                श्री शत्रुंजय तीर्थाधिपति आदिनाथ दादा
              </h4>
              <p className="text-content leading-relaxed">
                पिछले ५ सालो में अध्यात्म परिवार द्वारा प्रतिवर्ष भादरवा सुदी ६
                से आसोज सुदी ६ दौरान, श्री शत्रुंजय तीर्थाधिपति आदिनाथ दादा की
                ओप (शुद्ध) सहित महातीर्थ पर विराजमान अन्य प्रतिमाओं के ओप आदि का
                कार्य अनुक्रम से किया जा रहा है।
              </p>
            </div>
          </div>

          {/* Major Tirth Work Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 lg:mb-12">
            {/* Card 1 */}
            <div className="bg-lighten-bg rounded-sm  overflow-hidden hover: transition-shadow">
              <div className="h-48 sm:h-56 bg-lighten-bg flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.7.png"
                  alt="Girnar Tirth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-heading">
                  श्री गिरनार महातीर्थ
                </h4>
                <p className="text-content leading-relaxed">
                  में विराटमान प्रगट प्रभावी श्री अमीझरा पार्श्वनाथ परमात्मा के
                  ओप का कार्य
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-lighten-bg rounded-sm  overflow-hidden hover: transition-shadow">
              <div className="h-48 sm:h-56 bg-lighten-bg flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.8.png"
                  alt="Sametshikhar Tirth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-heading">
                  श्री समेतशिखर महातीर्थ
                </h4>
                <p className="text-content leading-relaxed">
                  के जलमंदिर में विराजमान श्री श्यामला पार्श्वनाथ परमात्मा के
                  लेप का कार्य
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-lighten-bg rounded-sm  overflow-hidden hover: transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="h-48 sm:h-56 bg-lighten-bg flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.9.png"
                  alt="Shankheshwar Tirth"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-heading">
                  श्री शंखेश्वर महातीर्थ
                </h4>
                <p className="text-content leading-relaxed">
                  की भमती में विराजमान तमाम परमात्माओं के ओप का कार्य
                </p>
              </div>
            </div>
          </div>

          {/* Makshi Tirth Summary */}
          <div className="bg-lighten-bg rounded-sm  p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-secondary-color rounded-sm"></div>
              <div className="w-3 h-3 bg-secondary-color rounded-full mx-3"></div>
              <div className="w-12 h-1 bg-secondary-color rounded-sm"></div>
            </div>
            <p className="text-center font-semibold text-heading leading-relaxed text-lg sm:text-xl">
              श्री मक्षीजी तीर्थ में विराजमान श्री मक्षीजी पार्श्वनाथ परमात्मा
              के लेप सहित बावन जिनालय में सुशोभित तमाम परमात्माओ के ओप आदि का
              कार्य अध्यात्म परिवार द्वारा सहर्ष संपन्न हुआ है!
            </p>
          </div>
        </div>
      </section>


      {/* Section 3 - Updated सौभाग्य का सीमाचिह्न section */}
      <div className="min-h-screen bg-background">
        <div className="container mx-auto  max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block bg-light-bg text-heading px-8 py-4 rounded-sm ">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold">
                सौभाग्य का सीमाचिह्न: अंतरिक्षजी के आंगन में...
              </h1>
            </div>
          </div>

          {/* Main Story Section */}
          <div className="bg-background mb-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Story Content */}
              <div className="space-y-6">
                <div className="bg-lighten-bg p-6 rounded-lg border-l-4 border-secondary-color">
                  <h2 className="text-xl font-heading  text-heading mb-4">
                    प्रतीक्षा का काल
                  </h2>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      १५,०६० दिनों तक लाखों लोगों के दिल की अनकही पीड़ा के अनुभव
                      से कौन अनजान है?
                    </p>
                    <p>
                      कि जब श्री अंतरिक्षजी के अधिनायक दादा दरवाजों के पीछे बंद
                      थे।
                    </p>
                    <p>
                      अपने दादा को पाने के लिए कितना धनव्यय... कितनी बाधाएं...
                    </p>
                    <p>
                      कितनी तप साधना... कितने दशकों, महीनों, घंटों की लम्बी
                      प्रतीक्षा...
                    </p>
                    <p>
                      <span className="font-bold text-content">
                        श्वेतांबर श्रीसंघ ने की है....
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-lighten-bg p-6 rounded-lg border-l-4 border-secondary-color">
                  <h2 className="text-xl font-heading  text-heading mb-4">
                    साधना का फल
                  </h2>
                  <div className="space-y-3 text-content leading-relaxed">
                    
                    <p>
                      अंत में सर्वोच्च न्यायालय के उस ऐतिहासिक इंटरिम ऑर्डर के
                      रूप में वह साधना फलीभूत हुई।
                    </p>
                    <p>अब दादा की पूजा का लाभ मिलने वाला था।</p>
                    <p>जो लेपकार्य दशकों से रुका हुआ था उसको संपन्न करना था।</p>
                  </div>
                </div>

                <div className="bg-lighten-bg p-6 rounded-lg border-l-4 border-secondary-color">
                  <h2 className="text-xl font-heading  text-heading mb-4">
                    तैयारी और चुनौती
                  </h2>
                  <div className="space-y-3 text-content leading-relaxed">
                    <p>संपूर्ण भारत के जैन संघों की परस्पर बैठकें शुरू हुईं।</p>
                    <p>क्या होगा? किस प्रकार होगा? होगा तो सही न?</p>
                    <p>
                      और उस समय, अध्यात्म परिवार के पूर्णसमर्पित शासन सेवक का
                      संपर्क किया गया।
                    </p>
                    <p>
                      पूछा गया कि: क्या आप अंतरिक्षजी के दादा के लेप करने का
                      कार्य कर सकोगे?
                    </p>
                  </div>
                </div>

                <div className="bg-lighten-bg p-6 rounded-lg border-l-4 border-secondary-color">
                  <h2 className="text-xl font-heading  text-heading mb-4">
                    समर्पण और सफलता
                  </h2>
                  <div className="space-y-3 text-content leading-relaxed">
                    <p>
                      अध्यात्म परिवार के कार्यवाहक शासन सेवक के साढ़े तीन करोड़
                      रोम हर्षित हो गए।
                    </p>
                    <p>
                      उन्होंने तत्काल जवाब दिया:{" "}
                      <span className="font-bold text-heading">
                        अवश्य। मैं अंतरिक्षजी पहुंचता हूं।
                      </span>
                    </p>
                    <p>
                      किन्तु वहां पहुंचते ही वहां के गंभीर हालत में जान के जोखम
                      का अंदाज आ गया।
                    </p>
                    <p>
                      पर दादा की भक्ति के उल्लास के सामने जोखम का भय फीका पड़
                      गया।
                    </p>
                    <p>
                      दादा की भक्ति और समग्र भारत के चतुर्विध संघों के मंगल आशीष
                      के बल से दादा के लेप का मंगल कार्य संपन्न हुआ।
                    </p>
                  </div>
                </div>

                {/* <div className="bg-background p-6 rounded-lg border-2 border-light-bg">
                  <p className="text-xl font-bold text-center text-heading">
                    हमारे सौभाग्य का यह सीमाचिह्न है।
                  </p>
                </div> */}
              </div>

              {/* Visual Content Section */}
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg ">
                  <h3 className="text-lg font-semibold text-center mb-4 text-heading">
                    वहीवटदारो ने यह क्रिटिकल कार्य अध्यात्म परिवार को सौंपा
                    क्योंकि उन्हें पता था कि...
                  </h3>
                  <div className="bg-background h-48 flex items-center justify-center rounded-lg mb-4">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.10.png"
                      alt="क्षतिग्रस्त प्रतिमा"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="hidden w-full h-full items-center justify-center text-content">
                      प्रतिमा छवि
                    </div>
                  </div>
                  <p className="font-semibold text-center text-heading bg-background p-3 rounded">
                    ठग कारीगर एमसील आदि हल्के द्रव्यों का उपयोग करके प्रभु की
                    दुर्दशा करते हैं!
                  </p>
                </div>

                <div className="bg-background h-64 flex items-center justify-center rounded-lg">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.11.png"
                    alt="क्षतिग्रस्त प्रतिमा"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="hidden w-full h-full items-center justify-center text-content">
                    प्रतिमा छवि
                  </div>
                </div>

                <div className="bg-background rounded-md  p-8">
                  <div className="grid lg:grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                      <div className="bg-background h-56 flex items-center justify-center rounded-lg">
                        <img
                          src="/jinmurti/jinpratima-suraksha/img-1.12.png"
                          alt="संरक्षित प्रतिमा"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="hidden w-full h-full items-center justify-center text-content">
                          प्रतिमा छवि
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="bg-background p-4 rounded-lg border-l-4 border-light-bg">
                        <p className="font-semibold text-heading">
                          अध्यात्म परिवार तमाम ओप आदि में प्योर डायमंड
                          पाउडर-शुद्धद्रव्यों का ही उपयोग करता है।
                        </p>
                      </div>
                      {/* <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="font-semibold text-blue-800 text-center">
                          लेपकार्य संपन्न होने के बाद आंखों को कैसी ठंडक मिलती
                          है?
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
