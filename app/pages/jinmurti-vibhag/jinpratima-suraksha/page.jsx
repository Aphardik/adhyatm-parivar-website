import React from "react";
import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa";


const Page = () => {
  return (
    <div className="bg-white-50 text-gray-800 font-body">
      {/* Header */}
      <header className="bg-gray-300 border border-gray-200">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-400 text-gray-800 text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.1
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900 mb-1 sm:mb-2">जिनप्रतिमा सुरक्षा</h1>
              <p className=" sm:text-base lg:text-lg text-gray-600 font-medium">कार्य आरंभ: वि.सं. २०६३</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-4 sm:py-6 lg:py-8 lg:px-0">
        {/* Section 1 - Four Images in Same Row */}
        <main className="mx-auto py-4 sm:py-0">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-heading bg-gray-300 text-gray-800 block px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
              यह प्रतिमा की तस्वीर है या हमारे अज्ञान की तस्वीर?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="bg-gray-100 shadow-sm border border-gray-200">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.1.png" alt="Damaged Statue" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 border-t-2 border-gray-200">
                <p className="font-semibold text-gray-900  sm:text-base lg:text-lg leading-relaxed">
                 चिपकाए हुए कंके को निकालने पर प्रकट हुई कड़वी वास्तविकता! 
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 shadow-sm border border-gray-200">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.2.png" alt="Damaged Feet" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 border-t-2 border-gray-200">
                <p className="font-semibold text-gray-900  sm:text-base lg:text-lg mb-2 sm:mb-3">
                  जिन प्रभु के चरण जहां पड़ते थे वहां स्वर्णकमल रखे जाते थे
                </p>
                <p className="text-gray-700  sm:text-base leading-relaxed">
                  उन प्रभु के चरणों पर चिपकाये हुए पंजे से पैदा होने वाली दर्दनाक दुर्दशा!
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 shadow-sm border border-gray-200">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.3.png" alt="Damaged Parts" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 border-t-2 border-gray-200">
                <p className="font-semibold text-gray-900  sm:text-base lg:text-lg leading-relaxed">
                  इस अवदशा का कारण और कुछ नहीं, टिके आदि के भीतर रहने वाली नमी ही है।
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 shadow-sm border border-gray-200">
              <div className="aspect-video">
                <img src="/jinmurti/jinpratima-suraksha/img-1.4.png" alt="Damaged Parts" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 sm:p-6 border-t-2 border-gray-200">
                <p className="font-semibold text-gray-900  sm:text-base lg:text-lg mb-2 sm:mb-3">
                  पार्श्वनाथ प्रभु को तो धरणेंद्रने सुरक्षित रखा था।
                </p>
                <p className="text-gray-700  sm:text-base italic leading-relaxed">
                  हम प्रभु के प्रतिबिंब रूपी फणा को नहीं संभाल सके!
                </p>
              </div>
            </div>
          </div>

          {/* Text Section - Previously in Left Column */}
          <div className="space-y-6 lg:space-y-8 mb-6 lg:mb-8">
            <div className="bg-gray-100 border border-gray-200 p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  एक नयनरम्य प्रतिमा में हजारों को समकित प्राप्त करवाने की ताकत होती है। यह प्रतिमा हमारी अज्ञानता के कारण यदि खराब हो जाए और मन में भक्ति के उल्लास के बदले चिंता के बादल छा जाएं तो
                  <span className="text-black font-semibold"> यह कितनी बड़ी हानि है!</span>
                </p>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  इसके मूल शोधते शोधते अध्यात्म परिवार ने <span className="text-gray-900 font-bold">ASI</span> के दरवाजे खटखटाने तक के प्रयत्न किये है।
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 border border-gray-200">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-heading text-center bg-gray-300 text-gray-800 px-4 py-2 sm:px-6 sm:py-3">
                  महत्वपूर्ण निष्कर्ष
                </h3>
              </div>
              <p className="text-gray-800 p-4 sm:p-6  sm:text-base mb-3 sm:mb-4 font-medium">
                जो बात ASI ने कही है वह बात सदियों पहले श्री श्राद्धविधि ग्रंथ में अंकित है:
              </p>
              <div className="bg-gray-100 border-2 flex items-center justify-center border-gray-200 p-4 sm:p-6 mx-4 sm:mx-6 mb-4 sm:mb-6">
                <p className="text-gray-700 font-semibold flex items-center justify-center gap-3  sm:text-base lg:text-xl italic text-center">
                  <FaQuoteLeft size={28} /> प्रतिमा पर जिस जगह पर जरा भी पानी रह जाता है (वहां) श्यामलता आ जाती है। <FaQuoteRight size={28} />
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Section 2 - बबूल के पेड़ की जड़ section remains same */}
        <div className="bg-gray-50 py-4 sm:py-8 text-gray-800">
          <div className="mx-auto space-y-4 sm:space-y-6">
            <div className="bg-gray-100 rounded-sm border border-gray-300 shadow-sm p-4 sm:p-6">
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="w-full bg-gray-100 h-48 sm:h-56 lg:h-64 flex items-center justify-center rounded  shadow-sm">
                  <img src="/jinmurti/jinpratima-suraksha/img-1.5.png" alt="Damaged Statue" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    बबूल के पेड़ की जड़ के बदले मात्रा डालियां कांटने से कांटे चुभना किस प्रकार बंद होंगे?
                  </h2>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs sm: font-bold flex-shrink-0">1</span>
                      <span className="font-medium  sm:text-base">सबसे पहले १ इंच का टिका लगाया गया उसके गड्ढ़े!</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs sm: font-bold flex-shrink-0">2</span>
                      <span className="font-medium  sm:text-base">उसको ढकने १.५ इंच का टिका लगाया उससे दूसरा गड्ढ़ा हुआ!</span>
                    </li>
                    <li className="flex gap-2 sm:gap-3">
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs sm: font-bold flex-shrink-0">3</span>
                      <span className="font-medium  sm:text-base">इन दोनों को छिपाने के २ इंच का टिका लगाया उससे बना तीसरा गड्ढ़ा!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-sm border border-gray-300 shadow-sm overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 sm:h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
                  <img src="/jinmurti/jinpratima-suraksha/img-1.6.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 bg-white/60 rounded-sm  shadow-sm p-3 sm:p-4 lg:p-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-2 sm:mb-3 font-heading">सौभाग्य का सीमाचिन्ह</h2>
                  <p className="text-center">
                    पिछले ५ सालो में अध्यात्म परिवार द्वारा प्रतिवर्ष भादरवा सुदी ६ से आसोज सुदी ६ दौरान,
                    <span className="font-semibold text-gray-600"> श्री शत्रुंजय तीर्थाधिपति आदिनाथ दादा </span>
                    की ओप (शुद्ध) सहित महातीर्थ पर विराजमान अन्य प्रतिमाओं के ओप आदि का कार्य अनुक्रम से किया जा रहा है।
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-sm border border-gray-200 shadow-lg p-6 sm:p-8 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1 */}
        <div className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300 transform hover:-translate-y-1">
          <div className="relative overflow-hidden">
            <div className="w-full h-48 sm:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center">
              <img 
                src="/jinmurti/jinpratima-suraksha/img-1.7.png" 
                alt="Damaged Statue" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-600 transition-colors">
              श्री गिरनार महातीर्थ
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              में विराटमान प्रगट प्रभावी श्री अमीझरा पार्श्वनाथ परमात्मा के ओप का कार्य
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300 transform hover:-translate-y-1">
          <div className="relative overflow-hidden">
            <div className="w-full h-48 sm:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center">
              <img 
                src="/jinmurti/jinpratima-suraksha/img-1.8.png" 
                alt="Damaged Parts" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-600 transition-colors">
              श्री समेतशिखर महातीर्थ
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              के जलमंदिर में विराजमान श्री श्यामला पार्श्वनाथ परमात्मा के लेप का कार्य
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
          <div className="relative overflow-hidden">
            <div className="w-full h-48 sm:h-52 lg:h-56 bg-gradient-to-br from-gray-100 to-gray-100 flex items-center justify-center">
              <img 
                src="/jinmurti/jinpratima-suraksha/img-1.9.png" 
                alt="Damaged Parts" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-600 transition-colors">
              श्री शंखेश्वर महातीर्थ
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              की भमती में विराजमान तमाम परमात्माओं के ओप का कार्य
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-100 border-2 border-gray-200 rounded-sm p-6 shadow-inner">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full mx-3"></div>
          <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
        </div>
        <p className="text-center font-semibold text-gray-800 leading-relaxed text-base sm:text-lg">
          श्री मक्षीजी तीर्थ में विराजमान श्री मक्षीजी पार्श्वनाथ परमात्मा के लेप सहित 
          बावन जिनालय में सुशोभित तमाम परमात्माओ के ओप आदि का कार्य अध्यात्म परिवार द्वारा सहर्ष संपन्न हुआ है!
        </p>

      </div>
    </div>
            
            <div className="bg-gray-50 rounded-sm border border-gray-300 shadow-md p-4 sm:p-6">
                        <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-heading bg-gray-300 text-gray-800 block px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
             ये तो हुई समस्या, परन्तु समाधान? यह रहा...
            </h2>
          </div>
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-100 border border-gray-100 rounded-sm p-3 sm:p-4">
                  <h3 className="font-bold mb-2 sm:mb-3  sm:text-base">प्रत्येक पूजक का एक संकल्प:</h3>
                  <div className="bg-gray-100  rounded p-2 sm:p-3 space-y-2">
                    <p className="font-medium  sm:text-base">'शासन की धरोहर की सुरक्षा के लिए रोज १ मिनट अर्पण करूंगा'।</p>
                    <p className="font-medium  sm:text-base">मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।</p>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-100 rounded-sm p-3 sm:p-4">
                  <h3 className="font-bold mb-2 sm:mb-3  sm:text-base">भविष्य का नुकसान रुकेगा:</h3>
                  <div className="bg-gray-100  rounded p-2 sm:p-3 space-y-2">
                    <p className="font-medium  sm:text-base">
                      अध्यात्म परिवार ने टिका निकाल कर प्रतिमाजी का लेप-ओप करने के लिए बहुत परिश्रमपूर्वक
                      शुद्ध द्रव्यों की खोज की है। बस हमें ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ दीजिये-दिलवाइये।
                    </p>
                    <p className="font-medium  sm:text-base">मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Updated सौभाग्य का सीमाचिह्न section */}
        <div className="bg-gray-50 text-black py-4 sm:py-8">
          <div className="mx-auto">
            <div className="bg-gray-100 border border-gray-200 rounded-sm p-4 sm:p-6 lg:p-8">
             
              <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold font-heading bg-gray-300 text-gray-800 block px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
             सौभाग्य का सीमाचिह्न: अंतरिक्षजी के आंगन में...
            </h2>
          </div>
              
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
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
                    <p className="font-semibold mb-3 text-gray-800">
                      वहीवटदारो ने यह क्रिटिकल कार्य अध्यात्म परिवार को सौंपा क्योंकि उन्हें पता था कि...
                    </p>
                    <div className="mb-3 bg-gray-200 h-48 flex items-center justify-center">
                      <img src="/jinmurti/jinpratima-suraksha/img-1.10.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                    </div>
                    <p className="font-semibold text-gray-800">
                      ठग कारीगर एमसील आदि हल्के द्रव्यों का उपयोग करके प्रभु की दुर्दशा करते हैं!
                    </p>
                  </div>
                  
                  <div className="bg-gray-200 h-80 mt-12 flex items-center justify-center">
                    <img src="/jinmurti/jinpratima-suraksha/img-1.11.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-gray-200 h-48 sm:h-56 flex items-center justify-center mb-4">
                    <img src="/jinmurti/jinpratima-suraksha/img-1.12.png" alt="Damaged Statue" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <p className="font-semibold text-gray-800">
                    अध्यात्म परिवार तमाम ओप आदि में प्योर डायमंड पाउडर-शुद्धद्रव्यों का ही उपयोग करता है।
                  </p>
                  <p className="font-semibold bg-gray-200 p-4 text-gray-800 rounded">
                    लेपकार्य संपन्न होने के बाद आंखों को कैसी ठंडक मिलती है?
                  </p>
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