"use client"
import HexagonalSvg from '@/app/_components/HexagonalSvg';
import SpiritualForm from '@/app/_components/UpdhanForm';
import React, { useState } from 'react';
import { FaCalendar, FaClock, FaPhone, FaCheck, FaExclamationTriangle, FaLanguage } from 'react-icons/fa';

const EventPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('gujarati');

  const switchLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  // Content in both languages
  const content = {
    gujarati: {
      heroSection: {
        greeting: "શ્રી શંખેશ્વર પાર્શ્વનાથાય નમઃ",
        guruvandana: "શ્રી જીત-હીર-બુદ્ધિ-તિલક-શાન્તિચન્દ્ર-કનકપ્રભ-સોમચન્દ્ર-જિનચન્દ્ર-સંયમરત્નસૂરિ સદ્‍ગુરુભ્યો નમઃ",
        year: "'સૂરિશાન્તિચન્દ્ર' દીક્ષાશતાબ્દી વિરાગવર્ષે",
        location: "મોહનગરી મુંબઈ-બોરીવલીની ધરા પર",
        sukhanumFarman: "આનંદભર્યું જીવન, જીવનનો આનંદ",
        adhyatmikUpdhan: "આધ્યાત્મિક ઉપધાન"
      },
      eventSection: {
        title: "ભવનિસ્તારક નિશ્રા",
        guru: "'સૂરિશાન્તિ-જિન-સંયમ' કૃપાપ્રાપ્ત, અધ્યાત્મસમ્રાટ પ.પૂ.આ.ભ. શ્રીમદ્ વિજય યોગતિલકસૂરીશ્વરજી મહારાજા",
        firstEntry: "પ્રથમ પ્રવેશ",
        secondEntry: "દ્વિતીય પ્રવેશ",
        mokshmala: "મોક્ષમાળ"
      },
      formSection: {
        title: "ભાવનાપત્ર"
      },
      rulesSection: {
        title: "અવશ્ય પાળવા યોગ્ય નિયમો",
        rules: [
          "ઉપધાનતપ શ્રાવકજીવનમાં એક જ વાર કરાતી અતિ મહત્ત્વની ક્રિયા છે માટે તે અંગેની જાણકારી અને પૂર્વાભ્યાસ (પ્રેક્ટીસ) માટે પ્રવેશના એક દિવસ પૂર્વે આવવું અતિ આવશ્યક છે, તે વિના ગુરુભગવંત ઉપધાનમાં પ્રવેશ કરાવશે નહીં.",
          "ઉપધાનમાં પ્રવેશ કરતા પૂર્વે ઓછામાં ઓછા લોગસ્સ સુધીના સૂત્રો અને મુહપત્તિના ૫૦ બોલ આટલું આવડવું અનિવાર્ય છે, આથી આપ ભાવના પત્ર મોકલતાની સાથે જ તે અંગેનો પ્રયત્ન શરૂ કરશોજી. જો આટલું નહીં આવડતું હોય તો ઉપધાનમાં પ્રવેશ થશે નહીં.",
          "ઉપધાનમાં પ્રવેશ કરતા પહેલા સમ્યક્ત્વની પ્રતિજ્ઞા ઉચ્ચારવામાં આવે છે. જેમાં વીતરાગ સર્વજ્ઞ (૨૪ તીર્થંકર અને સીમંધરસ્વામી વગેરે) એમને જ ભગવાન તરીકે સ્વીકારીશ. પંચમહાવ્રતોને પાળનારા વૈરાગીને ગુરુ તરીકે સ્વીકારીશ અને એ જ પ્રભુએ બતાવેલા તત્ત્વને ધર્મ તરીકે માનીશ. આ પ્રતિજ્ઞા સ્વીકાર કરનાર જ ઉપધાન કરી શકશે.",
          "વિધિપૂર્વક ઉપધાન કરવાના છે તેથી મોબાઈલ વગેરે કોઈ સાધનો લાવવા નહિ, સ્પીકર પર વાત કરી શકાશે નહીં. જે એવું કરશે તેમને ગુરુભગવંત બીજે દિવસે પૌષધ પરાવી દેશે.",
          "૧૨ વર્ષ ઉપરની બહેનોએ સાડી, ચણિયાચોળી પહેરવાની રહેશે. ઉદ્ભટ વેષનો સર્વથા ત્યાગ.",
          "પુરૂષ વર્ગે ધોતિયા, ખેસનો જ ઉપયોગ કરવાનો રહેશે.",
          "ઘરેણા ઉપધાનમાં પહેરાશે નહિ, સ્ત્રીઓએ માત્ર સૌભાગ્યચિહ્ન ધારણ કરી શકાશે."
        ]
      },
      noticeSection: {
        title: "ખાસ સૂચના",
        notices: [
          "ઉપધાન તપમાં પ્રવેશ સ્નાન કરીને, પ્રભુપૂજા કરીને કરવાનો હોવાથી પૂજાના વસ્ત્ર સાથે લાવવા.",
          "પ્રવેશના દિવસે નાણ સમક્ષ નંદીની ક્રિયા માટે શ્રીફળ, ૧.૨૫ કિલો ચોખા અને યથાશક્તિ રૂપાનાણું સાથે લાવવું.",
          "ઉપધાનમાં અઢારિયાના પ્રવેશ પછી ત્રણ દિવસ સુધી જ કોઈપણ ઉપકરણ લઈ શકાશે, પછી લઈ શકાશે નહિ.",
          "ઠંડીના હિસાબે પોતાની આવશ્યકતા પ્રમાણે ઓઢવા-પાથરવાની સામગ્રી લાવવી.",
          "કોઈપણ પ્રકારનું જોખમ સાથે લઈને આવવું નહીં.",
          "કાયમી દવા લેતા હો તો તે દવા સાથે લાવવી.",
          "અનિવાર્ય કારણસર જો આપ ન પધારી શકો તો મેસેજ અથવા ફોન કરી અચૂક જાણ કરવા વિનંતી છે."
        ]
      },
      locationSection: {
        title: "ઉપધાન સ્થળ",
        address: "પુષ્પાંજલિ ગાર્ડન્સ, ચંદાવરકર રોડ, બોરીવલી (વે), મુંબઈ"
      },
      organizer: {
        title: "આયોજક",
        name: "અધ્યાત્મ પરિવાર",
        phone: "844 844 40 50"
      }
    },
    hindi: {
      heroSection: {
        greeting: "श्री शंखेश्वर पार्श्वनाथाय नमः",
        guruvandana: "श्री जीत-हीर-बुद्धि-तिलक-शान्तिचन्द्र-कनकप्रभ-सोमचन्द्र-जिनचन्द्र-संयमरत्नसूरि सद्‌गुरुभ्यो नमः",
        year: "'सूरिशान्तिचन्द्र' दीक्षाशताब्दी विरागवर्ष में",
        location: "मोहनगरी मुंबई-बोरीवली की धरा पर ",
        sukhanumFarman: "आनंद भरा जीवन, जीवन का आनंद",
        adhyatmikUpdhan: "आध्यात्मिक उपधान"
      },
      eventSection: {
        title: "उपधान उपवन निश्रा",
        guru: "'सूरिजिन-संयम’ कृपाप्राप्त अध्यात्मसम्राट प.पू.आ.भ.श्रीमद् विजय योगतिलकसूरीश्वरजी महाराजा",
        firstEntry: "प्रथम प्रवेश",
        secondEntry: "द्वितीय प्रवेश",
        mokshmala: "मोक्षमाला"
      },
      formSection: {
        title: "भावनापत्र"
      },
      rulesSection: {
        title: "अवश्य पालन करने योग्य नियम",
        rules: [
          "उपधान तप श्रावकजीवन में एक ही बार की जानेवाली अति महत्त्वपूर्ण क्रिया है, इसलिए उससे संबंधित जानकारी तथा पूर्वाभ्यास (प्रेक्टिस) के लिए प्रवेश से एक दिन पहले आना अति आवश्यक है, अन्यथा गुरुभगवंत उपधान में प्रवेश नहीं करवाएंगे।",
          "उपधान में प्रवेश करने से पूर्व कम से कम लोगस्स तक सूत्र तथा मुहपत्ति के ५० बोल आना अनिवार्य है। अतः आप भावना पत्र भेजने के साथ ही इससे संबंधित प्रयत्न प्रारंभ कर देवें। यदि इतना नहीं आता होगा तो उपधान में प्रवेश नहीं हो सकेगा।",
          "उपधान में प्रवेश करने से पहले सम्यक्त्व की प्रतिज्ञा उचराई जाती है। जिसमें वीतराग सर्वज्ञ (२४ तीर्थंकर तथा सीमंधरस्वामी आदि) को ही भगवान के रूप में स्वीकार करूंगा, महाव्रतों का पालन करनेवाले वैरागी को ही गुरु के रूप में स्वीकार करूंगा और वीतराग प्रभु द्वारा बताए हुए तत्त्व को ही धर्म के रूप में मानूंगा। यह प्रतिज्ञा स्वीकार करनेवाले ही उपधान कर सकते हैं।",
          "विधिपूर्वक उपधान करना है, इसलिए मोबाइल आदि किसी भी प्रकार के साधन लेकर नहीं आवें। उपधान में स्पीकर पर बात नहीं हो सकेगी। ऐसा करनेवाले को गुरुभगवंत अगले दिन पौषध परवा देंगे।",
          "१२ वर्ष से बड़ी बहनों को साड़ी या चनियाचोली पहनना है। उद्भट वेष का सर्वथा त्याग रहेगा।",
          "पुरुष वर्ग को धोती-दुपट्टे का ही उपयोग करना है।",
          "ठंड के हिसाब से अपनी आवश्यकता अनुसार ओड़ने-बिछाने की सामग्री लेकर आवें।",
          "उपधान में गहने नहीं पहने जाते हैं। स्त्रियां मात्र सौभाग्य चिन्ह धारण कर सकती हैं।",
          "किसी भी प्रकार की जोखम साथ में लेकर न आवें।",
          "अपनी रोज की चालू दवा अपने साथ लेकर आयें।",
        ]
      },
      noticeSection: {
        title: "विशेष सूचना",
        notices: [
          "उपधान तप में प्रवेश स्नान करके, प्रभुपूजा करके करना है इसलिए पूजा के वस्त्र साथ लाना।",
          "प्रवेश के दिन नाण के सामने नंदी की क्रिया के लिए श्रीफल, १.२५ किलो चावल और यथाशक्ति रूपानाणा साथ लाना।",
          "उपधान में अढ़ारिया के प्रवेश के बाद तीन दिन तक ही कोई भी उपकरण ले सकेंगे, बाद में नहीं ले सकेंगे।",
          "ठंड के हिसाब से अपनी आवश्यकता के अनुसार ओढ़ने-बिछाने की सामग्री लाना।",
          "किसी भी प्रकार का जोखिम साथ लेकर नहीं आना।",
          "स्थायी दवा लेते हों तो वह दवा साथ लाना।",
          "अनिवार्य कारणवश यदि आप नहीं पधार सकें तो मैसेज या फोन करके अवश्य जानकारी देने की विनती है।"
        ]
      },
      locationSection: {
        title: "उपधान स्थल",
        address: "पुष्पांजलि गार्डन्स, चंदावरकर रोड, बोरिवली (पश्चिम), मुंबई"
      },
      organizer: {
        title: "आयोजक",
        name: "अध्यात्म परिवार",
        phone: "844 844 40 50"
      }
    }
  };

  const currentContent = content[selectedLanguage];

  return (
    <div className={`${selectedLanguage == 'gujarati' ? 'font-anek' : 'font-heading'  } relative min-h-screen `}>
      {/* Language Toggle - Fixed at top right */}
      <div className="fixed top-20 right-4 z-20">
        <div className="inline-flex rounded-full overflow-hidden border border-gray-300 bg-white shadow-lg">
          <button
            onClick={() => switchLanguage('gujarati')}
            className={`px-4 py-2 font-semibold font-anek text-sm transition-all duration-300 ${
              selectedLanguage === 'gujarati'
                ? 'bg-darkpink text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            ગુ.
          </button>
          <button
            onClick={() => switchLanguage('hindi')}
            className={`font-heading px-4 py-2 font-semibold text-sm transition-all duration-300 ${
              selectedLanguage === 'hindi'
                ? 'bg-darkpink text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            हि.
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient1 text-gray-800">
        <div className="absolute "></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="space-y-2 text-gray-800 font-medium text-sm tracking-wide">
              <div>{currentContent.heroSection.greeting}</div>
              <div>{currentContent.heroSection.guruvandana}</div>
            </div>
            
            <div>
              <p className="text-lg md:text-xl font-bold">
                {currentContent.heroSection.year}
              </p>
              
              <p className="text-lg md:text-[2rem] font-bold">
                {currentContent.heroSection.location}
              </p>
            </div>
            
            <div className="px-10 text-gray-800 rounded-[4rem] inline-block">
              
              <h2 className="text-3xl pb-2 md:text-[3.5rem] font-bold">{currentContent.heroSection.adhyatmikUpdhan}</h2>
              <p className="text-lg  md:text-2xl font-bold">{currentContent.heroSection.sukhanumFarman}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 -mt-8 relative z-10">
        
        {/* Event Schedule Cards */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-lightpink px-8 py-4 rounded-sm shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{currentContent.eventSection.title}</h2>
              <p className="text-sm font-medium opacity-90">
                {currentContent.eventSection.guru}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* First Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white text-center rounded-sm shadow-md border border-green-100 overflow-hidden hover:shadow-lg">
                <div className="bg-lightpink p-6">
                  <h3 className="text-xl font-bold">{currentContent.eventSection.firstEntry}</h3>
                </div>
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-center text-gray-700">
                    {selectedLanguage == 'gujarati' ? <span className="font-medium text-center">વિ.સં. ૨૦૮૨</span> : <span className="font-medium text-center">वि.सं.२०८२</span>}
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    {selectedLanguage == 'gujarati' ? <span className="font-medium text-center">માગસર વદ ૬, બુધવાર</span> : <span className="font-medium text-center">मार्गशीर्ष वद ६, बुधवार</span>}
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                   { selectedLanguage == 'gujarati' ? '૧૦-૧૨-૨૦૨૫' : '10-12-2025' }
                  </div>
                  <HexagonalSvg accentColor="darkpink" />
                </div>
              </div>
            </div>

            {/* Second Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white text-center rounded-sm shadow-md border border-red-100 overflow-hidden hover:shadow-lg">
                <div className="bg-lightpink p-6">
                  <h3 className="text-xl font-bold">{currentContent.eventSection.secondEntry}</h3>
                </div>
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-center text-gray-700">
                   {selectedLanguage == 'gujarati' ? <span className="font-medium">વિ.સં. ૨૦૮૨</span> : <span className="font-medium">वि.सं.२०८२</span>}
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                   {selectedLanguage == 'gujarati' ? <span className="font-medium">માગસર વદ ૮, શુક્રવાર</span> : <span className="font-medium">मार्गशीर्ष वद ८, शुक्रवार</span>}
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    { selectedLanguage == 'gujarati' ? '૧૨-૧૨-૨૦૨૫' : '12-12-2025' }
                  </div>
                  <HexagonalSvg accentColor="darkpink" />
                </div>
              </div>
            </div>

            {/* Third Event */}
            <div className="group text-center transition-all duration-300">
              <div className="rounded-sm shadow-md border border-purple-100 overflow-hidden hover:shadow-lg">
                <div className="bg-lightpink p-6">
                  <h3 className="text-xl font-bold">{currentContent.eventSection.mokshmala}</h3>
                </div>
                <div className="p-6 relative space-y-4">
                  <div className="flex items-center justify-center text-gray-700">
                    {selectedLanguage == 'gujarati' ? <span className="font-medium">વિ.સં. ૨૦૮૨</span> : <span className="font-medium">वि.सं.२०८२</span>}
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                   {selectedLanguage == 'gujarati' ? <span className="font-medium">મહા સુદ ૧૦, બુધવાર</span> : <span className="font-medium">माघ सुद १०, बुधवार </span>}
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    { selectedLanguage == 'gujarati' ? '૨૮-૦૧-૨૬' : '28-01-2026 ' }
                  </div>
                  <HexagonalSvg accentColor="darkpink" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="bg-white max-w-4xl mx-auto rounded-sm shadow-md border border-gray-100 overflow-hidden mb-12">
          <div className="bg-lightpink flex flex-col sm:flex-row items-center justify-between p-4 px-8 text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold">{currentContent.formSection.title}</h2>
            </div>
          </div>

          <SpiritualForm language={selectedLanguage} />
        </div>

        {/* Rules Section */}
        <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden mb-12">
          <div className="bg-lightpink p-4 px-8 pt-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">{currentContent.rulesSection.title}</h2>
            </div>
          </div>
          
          <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {currentContent.rulesSection.rules.map((rule, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-darkpink hover:shadow-lg transition-all duration-300 h-full min-h-32 flex flex-col">
                  <div className="flex items-start flex-1">
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice Section */}
        <div className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden mb-12">
          <div className="bg-lightpink p-4 px-8 pt-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">{currentContent.noticeSection.title}</h2>
            </div>
          </div>
          
          <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {currentContent.noticeSection.notices.map((notice, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-darkpink hover:shadow-lg transition-all duration-300 h-full min-h-24 flex flex-col">
                  <div className="flex items-start flex-1">
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {notice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact and Location Section */}
        <div className="bg-white max-w-4xl mt-12 mx-auto rounded-sm shadow-sm border border-lightpink overflow-hidden group hover:shadow-2xl transition-all duration-300 mb-12">
          <div className="bg-lightpink p-6">
            <h3 className="text-2xl font-bold flex items-center">
              {currentContent.locationSection.title}
            </h3>
            <p className="text-lg text-gray-700 font-bold flex items-center">{currentContent.locationSection.address}</p>
          </div>

          <div className="grid items-center justify-center md:grid-cols-1 gap-6">
            <div className="rounded-sm overflow-hidden border-2 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1897116901796!2d72.84334927498143!3d19.23056208200608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b128ae83e0a7%3A0x64efaa7af84c8be4!2sPushpanjali%20Gardens!5e0!3m2!1sen!2sin!4v1758553257795!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pushpavati Gardens, Borivali"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-lightpink p-4 rounded-sm shadow-md">
            <h1 className='font-bold text-lg md:text-2xl text-center text-gray-800'>
              {currentContent.organizer.title}
            </h1>
            <p className='font-bold text-lg md:text-xl text-center text-gray-700'>{currentContent.organizer.name}</p>
            <p className='font-bold text-base md:text-lg text-center text-gray-700'>{currentContent.organizer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;