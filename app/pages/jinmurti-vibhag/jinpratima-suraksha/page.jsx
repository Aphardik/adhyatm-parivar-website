import React from "react";
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";


const Page = () => {
  return (
    <div className="bg-background text-heading font-body">
      {/* Header */}
      <header className="bg-light-bg border ">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-lighten-bg text-heading text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.1
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading mb-1 sm:mb-2">जिनप्रतिमा सुरक्षा</h1>
              <p className="sm:text-base lg:text-lg text-content font-medium">कार्य आरंभ: वि.सं. २०६३</p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Introduction - What is this about? */}
      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-t-sm">
              जिनप्रतिमा सुरक्षा - यह क्या है?
            </h2>
          </div>
          
          <div className="bg-background border rounded-b-sm p-6 sm:p-8 shadow-sm">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-heading text-base sm:text-lg leading-relaxed">
                एक नयनरम्य प्रतिमा में हजारों को समकित प्राप्त करवाने की ताकत होती है। यह प्रतिमा हमारी अज्ञानता के कारण यदि खराब हो जाए और मन में भक्ति के उल्लास के बदले चिंता के बादल छा जाएं तो
                <span className="text-secondary-color font-semibold"> यह कितनी बड़ी हानि है!</span>
              </p>
              <p className="text-heading text-base sm:text-lg leading-relaxed">
                इसके मूल शोधते शोधते अध्यात्म परिवार ने <span className="text-secondary-color font-bold">ASI</span> के दरवाजे खटखटाने तक के प्रयत्न किये है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problems - The Issues */}
      <section className="py-6 sm:py-8 lg:py-10 bg-background">
        <div className="mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-sm">
               समस्याएं - यह प्रतिमा की तस्वीर है या हमारे अज्ञान की तस्वीर?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-background shadow-sm border rounded-sm">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.1.png" alt="Damaged Statue" className="w-full h-full object-cover rounded-t-sm" />
              </div>
              <div className="p-4 sm:p-6 border-t-2">
                <p className=" text-heading sm:text-base lg:text-lg leading-relaxed">
                  चिपकाए हुए कंके को निकालने पर प्रकट हुई कड़वी वास्तविकता!
                </p>
              </div>
            </div>
            
            <div className="bg-background shadow-sm border rounded-sm">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.2.png" alt="Damaged Feet" className="w-full h-full object-cover rounded-t-sm" />
              </div>
              <div className="p-4 sm:p-6 border-t-2 ">
                <p className="text-heading sm:text-base lg:text-lg mb-2 sm:mb-3">
                  जिन प्रभु के चरण जहां पड़ते थे वहां स्वर्णकमल रखे जाते थे
                </p>
                <p className="text-content sm:text-base leading-relaxed">
                  उन प्रभु के चरणों पर चिपकाये हुए पंजे से पैदा होने वाली दर्दनाक दुर्दशा!
                </p>
              </div>
            </div>
            
            <div className="bg-background shadow-sm border rounded-sm">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.3.png" alt="Damaged Parts" className="w-full h-full object-cover rounded-t-sm" />
              </div>
              <div className="p-4 sm:p-6 border-t-2">
                <p className="text-heading sm:text-base lg:text-lg leading-relaxed">
                  इस अवदशा का कारण और कुछ नहीं, टिके आदि के भीतर रहने वाली नमी ही है।
                </p>
              </div>
            </div>
            
            <div className="bg-background shadow-sm border rounded-sm">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.4.png" alt="Damaged Parts" className="w-full h-full object-cover rounded-t-sm" />
              </div>
              <div className="p-4 sm:p-6 border-t-2">
                <p className="text-heading sm:text-base lg:text-lg mb-2 sm:mb-3">
                  पार्श्वनाथ प्रभु को तो धरणेंद्रने सुरक्षित रखा था।
                </p>
                <p className="text-content sm:text-base italic leading-relaxed">
                  हम प्रभु के प्रतिबिंब रूपी फणा को नहीं संभाल सके!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Root Cause - Why these problems occur */}
      <section className="py-6 sm:py-8 lg:py-10 bg-background">
        <div className="mx-auto px-4 sm:px-6">
          {/* <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-sm">
              समस्या का मूल कारण
            </h2>
          </div> */}

          {/* Ancient Wisdom Quote */}
          <div className="bg-background border rounded-sm mb-6 sm:mb-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-center bg-secondary-color text-background px-4 py-2 sm:px-6 sm:py-3 rounded-t-sm">
                महत्वपूर्ण निष्कर्ष
              </h3>
            </div>
            <p className="text-heading p-4 sm:p-6 sm:text-base mb-3 sm:mb-4 font-medium">
              जो बात ASI ने कही है वह बात सदियों पहले श्री श्राद्धविधि ग्रंथ में अंकित है:
            </p>
            <div className="bg-light-bg flex items-center justify-center p-4 sm:p-6 mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-sm">
              <p className="text-heading font-semibold flex items-center justify-center gap-3 sm:text-base lg:text-xl italic text-center">
                <FaQuoteLeft size={28} className="text-content" /> 
                प्रतिमा पर जिस जगह पर जरा भी पानी रह जाता है (वहां) श्यामलता आ जाती है। 
                <FaQuoteRight size={28} className="text-content" />
              </p>
            </div>
          </div>

          {/* Root Cause Analysis */}
          <div className="bg-background rounded-sm border shadow-sm p-4 sm:p-6">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="w-full h-48 sm:h-56 lg:h-64 flex items-center justify-center rounded">
                <img src="/jinmurti/jinpratima-suraksha/img-1.5.png" alt="Root Cause Analysis" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-emibold mb-3 sm:mb-4 text-heading">
                  बबूल के पेड़ की जड़ के बदले मात्रा डालियां कांटने से कांटे चुभना किस प्रकार बंद होंगे?
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-light-bg text-content rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">1</span>
                    <span className="font-medium sm:text-base">सबसे पहले १ इंच का टिका लगाया गया उसके गड्ढ़े!</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-light-bg text-content rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">2</span>
                    <span className="font-medium sm:text-base">उसको ढकने १.५ इंच का टिका लगाया उससे दूसरा गड्ढ़ा हुआ!</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-light-bg text-content rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">3</span>
                    <span className="font-medium sm:text-base">इन दोनों को छिपाने के २ इंच का टिका लगाया उससे बना तीसरा गड्ढ़ा!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Solutions */}
      <section className="py-6 sm:py-8 lg:py-10 bg-background">
        <div className="mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-t-sm">
             ये तो हुई समस्या, परन्तु समाधान? यह रहा...
            </h2>
          </div>
          
          <div className="bg-background rounded-b-sm border shadow-md p-4 sm:p-6">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-lighten-bg rounded-sm p-3 sm:p-4">
                <h3 className="mb-2 sm:mb-3 sm:text-lg text-heading">प्रत्येक पूजक का एक संकल्प:</h3>
                <div className="text-content rounded p-2 sm:p-3 space-y-2">
                  <p className="font-medium sm:text-base">'शासन की धरोहर की सुरक्षा के लिए रोज १ मिनट अर्पण करूंगा'।</p>
                  <p className="font-medium sm:text-base">मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।</p>
                </div>
              </div>
              <div className="bg-lighten-bg  rounded-sm p-3 sm:p-4">
                <h3 className=" mb-2 sm:mb-3 sm:text-lg text-heading">भविष्य का नुकसान रुकेगा:</h3>
                <div className="rounded p-2 sm:p-3 space-y-2">
                  <p className="font-medium text-content sm:text-base">
                    अध्यात्म परिवार ने टिका निकाल कर प्रतिमाजी का लेप-ओप करने के लिए बहुत परिश्रमपूर्वक
                    शुद्ध द्रव्यों की खोज की है। बस हमें ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ दीजिये-दिलवाइये।
                  </p>
                  <p className="font-medium text-content sm:text-base">मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Work Done - Success Stories */}
      <section className="py-6 sm:py-8 lg:py-10 bg-background">
        <div className="mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8 rounded-sm">
              सौभाग्य का सीमाचिह्न
            </h2>
          </div>
           <div className=" bg-background rounded-sm shadow-sm p-3 sm:p-4 lg:p-6">
                <p className="text-center text-heading">
                  पिछले ५ सालो में अध्यात्म परिवार द्वारा प्रतिवर्ष भादरवा सुदी ६ से आसोज सुदी ६ दौरान,
                  <span className="font-semibold text-secondary-color"> श्री शत्रुंजय तीर्थाधिपति आदिनाथ दादा </span>
                  की ओप (शुद्ध) सहित महातीर्थ पर विराजमान अन्य प्रतिमाओं के ओप आदि का कार्य अनुक्रम से किया जा रहा है।
                </p>
              </div>

          {/* Recent Work Done */}
          <div className="bg-background rounded-sm border shadow-sm overflow-hidden mb-6 sm:mb-8">
              <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <img src="/jinmurti/jinpratima-suraksha/img-1.6.png" alt="Work Done" className="w-full h-full object-cover" />
              </div>
          </div>

          {/* Major Tirth Work Cards */}
          <div className="bg-background shadow-md  mb-6 sm:mb-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="group bg-background rounded-sm shadow-md  overflow-hidden border transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 sm:h-52 lg:h-56 bg-background flex items-center justify-center">
                    <img 
                      src="/jinmurti/jinpratima-suraksha/img-1.7.png" 
                      alt="Girnar Tirth" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg mb-3 text-heading transition-colors">
                    श्री गिरनार महातीर्थ
                  </h4>
                  <p className="text-content leading-relaxed text-sm">
                    में विराटमान प्रगट प्रभावी श्री अमीझरा पार्श्वनाथ परमात्मा के ओप का कार्य
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className=" bg-background rounded-sm shadow-md  overflow-hidden border">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 sm:h-52 lg:h-56 bg-background flex items-center justify-center">
                    <img 
                      src="/jinmurti/jinpratima-suraksha/img-1.8.png" 
                      alt="Sametshikhar Tirth" 
                      className="w-full h-full " 
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg mb-3 text-heading transition-colors">
                    श्री समेतशिखर महातीर्थ
                  </h4>
                  <p className="text-content leading-relaxed text-sm">
                    के जलमंदिर में विराजमान श्री श्यामला पार्श्वनाथ परमात्मा के लेप का कार्य
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className=" bg-background rounded-sm shadow-md border sm:col-span-2 lg:col-span-1">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 sm:h-52 lg:h-56 bg-background flex items-center justify-center">
                    <img 
                      src="/jinmurti/jinpratima-suraksha/img-1.9.png" 
                      alt="Shankheshwar Tirth" 
                      className="w-full h-full object-cover " 
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-3 text-heading">
                    श्री शंखेश्वर महातीर्थ
                  </h4>
                  <p className="text-content leading-relaxed text-sm">
                    की भमती में विराजमान तमाम परमात्माओं के ओप का कार्य
                  </p>
                </div>
              </div>
            </div>

            {/* Makshi Tirth Summary */}
            <div className="mt-8 bg-lighten-bg  rounded-sm p-6 shadow-inner">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-1 bg-secondary-color rounded-full"></div>
                <div className="w-3 h-3 bg-secondary-color rounded-full mx-3"></div>
                <div className="w-12 h-1 bg-secondary-color rounded-full"></div>
              </div>
              <p className="text-center font-semibold text-secondary-color leading-relaxed text-base sm:text-lg">
                श्री मक्षीजी तीर्थ में विराजमान श्री मक्षीजी पार्श्वनाथ परमात्मा के लेप सहित 
                बावन जिनालय में सुशोभित तमाम परमात्माओ के ओप आदि का कार्य अध्यात्म परिवार द्वारा सहर्ष संपन्न हुआ है!
              </p>
            </div>
          </div>

        {/* Section 3 - Updated सौभाग्य का सीमाचिह्न section */}
        <div className="bg-background text-background py-4 sm:py-8">
          <div className="mx-auto">
            <div className=" border rounded-sm">
             
              <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-secondary-color text-background block px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
             सौभाग्य का सीमाचिह्न: अंतरिक्षजी के आंगन में...
            </h2>
          </div>
              
              <div className="grid lg:grid-cols-2 text-content gap-6 lg:gap-8 mb-6 lg:mb-8">
                <div className="space-y-3 text-base">
                  <p>१५,०६० दिनों तक लाखों लोगों के दिल की अनकही पीड़ा के अनुभव से कौन अनजान है?</p>
                  <p>कि जब श्री अंतरिक्षजी के अधिनायक दादा दरवाजों के पीछे बंद थे।</p>
                  <p>अपने दादा को पाने के लिए कितना धनव्यय... कितनी बाधाएं...</p>
                  <p>कितनी तप साधना... कितने दशकों, महीनों, घंटों की लम्बी प्रतीक्षा...</p>
                  <p><span className="font-bold">श्वेतांबर श्रीसंघ ने की है....</span></p>
                  <p>अंत में सर्वोच्च न्यायालय के</p>
                  <p>उस ऐतिहासिक इंटरिम ऑर्डर के रूप में वह साधना फलीभूत हुई।</p>
                  <p>अब दादा की पूजा का लाभ मिलने वाला था।</p>
                  <p>जो लेपकार्य दशकों से रुका हुआ था उसको संपन्न करना था ।</p>
                  <p>संपूर्ण भारत के जैन संघों की परस्पर बैठकें शुरू हुईं।</p>
                  <p>क्या होगा? किस प्रकार होगा ? होगा तो सही न ?</p>
                  <p>और उस समय, अध्यात्म परिवार के पूर्णसमर्पित</p>
                  <p>शासन सेवक का संपर्क किया गया। पूछा गया कि :</p>
                  <p>क्या आप अंतरिक्षजी के दादा के लेप करने का कार्य कर सकोगे?</p>
                  <p>अध्यात्म परिवार के कार्यवाहक शासन सेवक के साढ़े तीन करोड़ रोम हर्षित हो गए।</p>
                  <p>
                    उन्होंने तत्काल जवाब दिया : <span className="font-bold">अवश्य । मैं अंतरिक्षजी पहुंचता हूं।</span>
                  </p>
                  <p>किन्तु वहां पहुंचते ही वहां के गंभीर हालत में जान के जोखम का अंदाज आ गया।</p>
                  <p>पर दादा की भक्ति के उल्लास के सामने जोखम का भय फीका पड़ गया।</p>
                  <p>दादा की भक्ति और समग्र भारत के चतुर्विध संघों के</p>
                  <p>मंगल आशीष के बल से दादा के लेप का मंगल कार्य संपन्न हुआ।</p>
                  <p>हमारे सौभाग्य का यह सीमाचिह्न है।</p>
                </div>
                
                <div className="space-y-4 p-10">
                  <div className="text-center">
                    <p className="font-semibold mb-3 text-heading">
                      वहीवटदारो ने यह क्रिटिकल कार्य अध्यात्म परिवार को सौंपा क्योंकि उन्हें पता था कि...
                    </p>
                    <div className="mb-3 bg-light-bg h-48 flex items-center justify-center">
                      <img src="/jinmurti/jinpratima-suraksha/img-1.10.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-semibold text-heading">
                      ठग कारीगर एमसील आदि हल्के द्रव्यों का उपयोग करके प्रभु की दुर्दशा करते हैं!
                    </p>
                  </div>
                  
                  <div className="bg-light-bg h-80 mt-12 flex items-center justify-center">
                    <img src="/jinmurti/jinpratima-suraksha/img-1.11.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-lighten-bg h-48 sm:h-56 flex items-center justify-center mb-4">
                    <img src="/jinmurti/jinpratima-suraksha/img-1.12.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <p className="font-semibold text-heading">
                    अध्यात्म परिवार तमाम ओप आदि में प्योर डायमंड पाउडर-शुद्धद्रव्यों का ही उपयोग करता है।
                  </p>
                  <p className="font-semibold bg-lighten-bg p-4 text-heading rounded">
                    लेपकार्य संपन्न होने के बाद आंखों को कैसी ठंडक मिलती है?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Page;