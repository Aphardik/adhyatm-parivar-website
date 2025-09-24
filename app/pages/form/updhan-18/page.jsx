"use client"
import { SpiritualForm } from '@/app/_components/UpdhanForm';
import React, { useState } from 'react';
import { FaCalendar, FaMapPin, FaPhone, FaCheck, FaExclamationTriangle, FaLanguage } from 'react-icons/fa';

const EventPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('gujarati');

  const switchLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  // Rules array
  const rules = [
    "ઉપધાનતપ શ્રાવકજીવનમાં એક જ વાર કરાતી અતિ મહત્ત્વની ક્રિયા છે માટે તે અંગેની જાણકારી અને પૂર્વાભ્યાસ (પ્રેક્ટીસ) માટે પ્રવેશના એક દિવસ પૂર્વે આવવું અતિ આવશ્યક છે, તે વિના ગુરુભગવંત ઉપધાનમાં પ્રવેશ કરાવશે નહીં.",
    "ઉપધાનમાં પ્રવેશ કરતા પૂર્વે ઓછામાં ઓછા લોગસ્સ સુધીના સૂત્રો અને મુહપત્તિના ૫૦ બોલ આટલું આવડવું અનિવાર્ય છે, આથી આપ ભાવના પત્ર મોકલતાની સાથે જ તે અંગેનો પ્રયત્ન શરૂ કરશોજી. જો આટલું નહીં આવડતું હોય તો ઉપધાનમાં પ્રવેશ થશે નહીં.",
    "ઉપધાનમાં પ્રવેશ કરતા પહેલા સમ્યક્ત્વની પ્રતિજ્ઞા ઉચ્ચારવામાં આવે છે. જેમાં વીતરાગ સર્વજ્ઞ (૨૪ તીર્થંકર અને સીમંધરસ્વામી વગેરે) એમને જ ભગવાન તરીકે સ્વીકારીશ. પંચમહાવ્રતોને પાળનારા વૈરાગીને ગુરુ તરીકે સ્વીકારીશ અને એ જ પ્રભુએ બતાવેલા તત્ત્વને ધર્મ તરીકે માનીશ. આ પ્રતિજ્ઞા સ્વીકાર કરનાર જ ઉપધાન કરી શકશે.",
    "વિધિપૂર્વક ઉપધાન કરવાના છે તેથી મોબાઈલ વગેરે કોઈ સાધનો લાવવા નહિ, સ્પીકર પર વાત કરી શકાશે નહીં. જે એવું કરશે તેમને ગુરુભગવંત બીજે દિવસે પૌષધ પળાવી દેશે.",
    "૧૨ વર્ષ ઉપરની બહેનોએ સાડી, ચણિયાચોળી પહેરવાની રહેશે. ઉદ્ભટ વેષનો સર્વથા ત્યાગ.",
        "પુરૂષ વર્ગે ધોતિયા, ખેસનો જ ઉપયોગ કરવાનો રહેશે.",
    "ઘરેણા ઉપધાનમાં પહેરાશે નહિ, સ્ત્રીઓએ માત્ર સૌભાગ્યચિહ્ન ધારણ કરી શકાશે."
  ];

    const notice = [
    "ઉપધાન તપમાં પ્રવેશ સ્નાન કરીને, પ્રભુપૂજા કરીને કરવાનો હોવાથી પૂજાના વસ્ત્ર સાથે લાવવા.",
    "પ્રવેશના દિવસે નાણ સમક્ષ નંદીની ક્રિયા માટે શ્રીફળ, ૧.૨૫ કિલો ચોખા અને યથાશક્તિ રૂપાનાણું સાથે લાવવું.",
    "ઉપધાનમાં અઢારિયાના પ્રવેશ પછી ત્રણ દિવસ સુધી જ કોઈપણ ઉપકરણ લઈ શકાશે, પછી લઈ શકાશે નહિ.",
    "ઠંડીના હિસાબે પોતાની આવશ્યકતા પ્રમાણે ઓઢવા-પાથરવાની સામગ્રી લાવવી.",
    "કોઈપણ પ્રકારનું જોખમ સાથે લઈને આવવું નહીં.",
        "કાયમી દવા લેતા હો તો તે દવા સાથે લાવવી.",
    "અનિવાર્ય કારણસર જો આપ ન પધારી શકો તો મેસેજ અથવા ફોન કરી અચૂક જાણ કરવા વિનંતી છે."
  ];

  return (
    <div className="min-h-screen  font-anek">
      {/* Hero Section */}
      <div className="relative bg-gradient1 text-gray-800">
        <div className="absolute "></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="space-y-2 text-gray-800 font-medium text-sm tracking-wide">
              <div>શાસનનાયક શ્રી મહાવીરસ્વામિને નમ:</div>
              <div>શ્રી જીત-હીર-બુદ્ધિ-તિલક-શાન્તિચન્દ્ર-કનકપ્રભ-સોમચન્દ્ર-જિનચન્દ્ર-સંયમરત્નસૂરિ સદ્‍ગુરુભ્યો નમઃ</div>
            </div>
            
            <div>
            <p className="text-lg md:text-xl font-bold">
              ‘સૂરિશાન્તિચન્દ્ર’ દીક્ષાશતાબ્દી વિરાગવર્ષે
            </p>
            
            <p className="text-lg md:text-xl font-bold">
              મોહનગરી મુંબઈ-બોરીવલીની ધરા પર
            </p>
            </div>
            
            <div className=" p-6 px-10 pt-8 text-gray-800 rounded-[4rem] inline-block">
              <p className="text-xl pb-4 md:text-2xl font-bold ">સુખનું ફરમાન</p>
              <h2 className="text-3xl md:text-5xl font-bold ">આધ્યાત્મિક ઉપધાન</h2>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 -mt-8 relative z-10">
        
        {/* Event Schedule Cards */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient2 px-8 py-4 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">ભવનિસ્તારક નિશ્રા</h2>
              <p className="text-sm font-medium opacity-90">
                 'સૂરિશાન્તિ-જિન-સંયમ' કૃપાપ્રાપ્ત, અધ્યાત્મસમ્રાટ પ.પૂ.આ.ભ. શ્રીમદ્ વિજય યોગતિલકસૂરીશ્વરજી મહારાજા
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* First Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white rounded-3xl shadow-md border border-green-100 overflow-hidden hover:shadow-lg">
                <div className="bg-gradient2 p-6">
                  <h3 className="text-xl font-bold">પ્રથમ પ્રવેશ</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="w-5 h-5 mr-3 text-gray-700" />
                    <span className="font-medium">વિ.સં. ૨૦૮૨</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">માગશર વદ ૬, બુધવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૧૦-૧૨-૨૦૨૫
                  </div>
                </div>
              </div>
            </div>

            {/* Second Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white rounded-3xl shadow-md border border-red-100 overflow-hidden hover:shadow-lg">
                <div className="bg-gradient2 p-6">
                  <h3 className="text-xl font-bold">દ્વિતીય પ્રવેશ</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="w-5 h-5 mr-3" />
                    <span className="font-medium">વિ.સં. ૨૦૮૨</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">માગશર વદ ૮, શુક્રવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૧૨-૧૨-૨૦૨૫
                  </div>
                </div>
              </div>
            </div>

            {/* Third Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white rounded-3xl shadow-md border border-purple-100 overflow-hidden hover:shadow-lg">
                <div className="bg-gradient2 p-6">
                  <h3 className="text-xl font-bold">મોક્ષમાળ</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="w-5 h-5 mr-3" />
                    <span className="font-medium">વિ.સં. ૨૦૮૨</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">મહા સુદ ૧૦, બુધવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૨૮-૧-૨૦૨૬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* Contact and Location Section */}
        <div className="bg-white max-w-5xl mx-auto rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 mb-12">
          <div className="bg-gradient2 p-6">
            <h3 className="text-2xl font-bold flex items-center">
              {/* <FaMapPin className="w-6 h-6 mr-3" /> */}
              ઉપધાન સ્થળ :
            </h3>
            <p className="text-lg text-gray-700 font-bold flex items-center">પુષ્પાંજલિ ગાર્ડન્સ, ચંદાવરકર રોડ, બોરીવલી (વે), મુંબઈ</p>
          </div>

          <div className="grid bg-gradient2 items-center justify-center md:grid-cols-1 gap-6 p-6">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100">
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


       

       
        {/* Registration Form Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient2 flex flex-col sm:flex-row items-center justify-between p-4 px-8 text-center">
            <div className="flex items-center justify-center mb-4 sm:mb-0">
              <h2 className="text-2xl font-bold">ભાવનાપત્ર</h2>
            </div>
               {/* Language Toggle */}
           <div className="flex justify-center items-center">
  <div className="inline-flex rounded-3xl overflow-auto border border-gray-300 bg-gray-200">
    <button
      onClick={() => switchLanguage('gujarati')}
      className={`px-6 py-3 font-semibold transition-all duration-300 ${
        selectedLanguage === 'gujarati'
          ? 'bg-gray-800 text-white shadow-md'
          : 'text-gray-700 hover:bg-gray-300'
      }`}
    >
      ગુજરાતી
    </button>
    <button
      onClick={() => switchLanguage('hindi')}
      className={`font-heading px-6 py-3 font-semibold transition-all duration-300 ${
        selectedLanguage === 'hindi'
          ? 'bg-gray-800 text-white shadow-md'
          : 'text-gray-700 hover:bg-gray-300'
      }`}
    >
      हिन्दी
    </button>
  </div>
</div>

          </div>

          {/* <div className="sm:p-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl sm:p-4">
                <iframe
                  aria-label="સુખનું ફરમાન - આધ્યાત્મિક ઉપધાન (ભાવનાપત્ર)"
                  frameBorder="0"
                  allow="camera;"
                  scrolling="yes"
                  style={{ height: "600px", width: "100%", border: "none", overflow: "scroll" }}
                  src={
                    selectedLanguage === 'hindi'
                      ? 'https://forms.zohopublic.in/adhyatmparivar/form/Untitled21/formperma/OwjZqG5R74pAy8kg5Uf7dkxv2bqcyrxC_4wLFhltKJU?zf_lang=hi&zf_enablecamera=true'
                      : 'https://forms.zohopublic.in/adhyatmparivar/form/Untitled21/formperma/OwjZqG5R74pAy8kg5Uf7dkxv2bqcyrxC_4wLFhltKJU?zf_enablecamera=true'
                  }
                />
              </div>
            </div>
          </div> */}
          <SpiritualForm/>
        </div>

         {/*  Rules Section */}
       <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient2 p-4 px-8 pt-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">અવશ્ય પાળવા યોગ્ય નિયમો</h2>
            </div>
          </div>
          
          <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-darkpink hover:shadow-lg transition-all duration-300 h-full min-h-32 flex flex-col">
                  <div className="flex items-start flex-1">
                    {/* <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div> */}
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer inside rules section */}
            {/* <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="bg-gradient2 p-4 rounded-2xl shadow-lg">
                <h1 className='font-bold text-lg md:text-xl text-center text-gray-800'>
                  આયોજક : અધ્યાત્મ પરિવાર - <br/> 844 844 40 50
                </h1>
              </div>
            </div> */}
          </div>
        </div>

          {/*  notice Section */}
       <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient2 p-4 px-8 pt-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">ખાસ સૂચના</h2>
            </div>
          </div>
          
          <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {notice.map((rule, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-darkpink hover:shadow-lg transition-all duration-300 h-full min-h-24 flex flex-col">
                  <div className="flex items-start flex-1">
                    {/* <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div> */}
                    <p className="text-gray-700 leading-relaxed flex-1">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Footer inside rules section */}
            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <div className="bg-gradient2 p-4 rounded-2xl shadow-lg">
                <h1 className='font-bold text-lg md:text-xl text-center text-gray-800'>
                  આયોજક 
                </h1>
                <p className='font-bold text-lg md:text-xl text-center text-gray-800'>અધ્યાત્મ પરિવાર</p>
                <p className='font-bold text-lg md:text-xl text-center text-gray-800'>844 844 40 50</p>

              </div>
            </div>
          </div>
        </div>


        {/* <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                સંયમાનુરાગી આરાધકશ્રી, મુંબઈ મહાનગરે યોજાનાર શ્રી ઉપધાન તપમાં જોડાઈ જિનાજ્ઞામય આરાધના તથા પૂજ્ય અધ્યાત્મસમ્રાટ ગુરુભગવંતની અતિસાત્ત્વિક, સચોટ જિનવાણીમાં ભીંજાઈ સંયમજીવનનો રસાસ્વાદ માણવાની આપની ભાવનાની અમો અંતરથી અનુમોદના કરીએ છીએ.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventPage;