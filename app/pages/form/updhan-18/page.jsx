"use client"
import React, { useState } from 'react';
import { FaCalendar, FaMapPin, FaPhone, FaCheck, FaExclamationTriangle, FaLanguage } from 'react-icons/fa';

const EventPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('gujarati');

  const switchLanguage = (lang) => {
    setSelectedLanguage(lang);
  };

  // Rules array
  const rules = [
    "ઉપધાન તપ કેગરહવમાં એક જ વાર કમતી અતિ મહત્વની કિંમા છે માટે તે એમની જ્ઞાનકારી અને પૂર્વિકાસ (પ્રેક્ષિકા) માટે પ્રબેલના એક દિવસ પૂર્વ આવવું અતિ આવશ્યક છે.",
    "ઉપધાનના પ્રવેશ કરવા પહેલા આવના આંશા લોજિકલ સુધીના સુત્રી અને વતલતા છે. એક છે કોઈ સાથે ધર્મ ભાવના પૂર્વક આવવું અતિ આવશ્યક છે.",
    "ઉપધાનના પ્રવેશ કરવા પહેલા સમ્પૂર્ણવની પ્રતિના ઉચ્યારમાં આવે છે જેમ વીતરાજ સર્વિન અથવા એવેમ ભગવાન તરીકે નવીન કરાતે કે નવીન અતિસાત્વીકીન.",
    "વિશિષ્ટતઃક ઉપધાન કરમાના છે તેથી મોગાવર્ત વગેરે કોઈ સાધના લાભના નથીસી. સ્વીકાર પર વાત કરી શકાતા નથી.",
    "૧૨ વર્ષ ઊંચ્યાનો બાકેરીનો સાઈ, બાળિકાઓની પહેરવાની રસોઈ, ઉન્મત વયેમના સર્વ ત્યાગ.",
    "કર વગર કોઈ પણ - એક જ ઉપધાન કરવાની છે."
  ];

  return (
    <div className="min-h-screen  font-anek">
      {/* Hero Section */}
      <div className="relative bg-gradient1 text-gray-800">
        <div className="absolute "></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="space-y-2 text-gray-800 font-medium text-sm tracking-wide">
              <div>ઘરમ તીર્થધિત શ્રી પદ્મસંહરાયજીનો નામ</div>
              <div>શ્રી જગ-હિત-ઈચ્છુક-વિકાસ-શાસ્ત્રાઉપદેશ-કમકાણ-રોહિણીવર્ણ-રોહિતાશ્વર્યજી સરસ્વતીજી નામ</div>
            </div>
            
            <div>
            <p className="text-lg md:text-xl font-bold">
              "સૃષ્ટિશાસ્ત્રિયત્વ" દીક્ષારાજાની વિચારવર્ષ
            </p>
            
            <p className="text-lg md:text-xl font-bold">
              મોહનગરી મુનાઈ - બારીવતીની ઘરા પર
            </p>
            </div>
            
            <div className=" p-6 pt-8 backdrop-blur-3xl rounded-md inline-block">
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
              <h2 className="text-2xl font-bold mb-2">ભાવના પત્રક</h2>
              <p className="text-sm font-medium opacity-90">
                ભવનિસ્તારક નિશ્રા : 'સૂરિશાન્તિ-જિન-સંયમ' કૃપાપ્રાપ્ત, અધ્યાત્મસમ્રાટ પ.પૂ.આ.ભ. શ્રીમદ્ વિજય યોગતિલકસૂરીશ્વરજી મહારાજા
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
                    <span className="font-medium">તિ.સં. ૨૦૨૨</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">માગશર વદ ૩, બુધવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૧૦-૧૧-૨૦૨૫
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
                    <span className="font-medium">તિ.સં. ૨૦૨૬</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">માગશર વદ ૮, શુક્રવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૧૨-૧-૨૦૨૬
                  </div>
                </div>
              </div>
            </div>

            {/* Third Event */}
            <div className="group transition-all duration-300">
              <div className="bg-white rounded-3xl shadow-md border border-purple-100 overflow-hidden hover:shadow-lg">
                <div className="bg-gradient2 p-6">
                  <h3 className="text-xl font-bold">ત્રીજમાઉ</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="w-5 h-5 mr-3" />
                    <span className="font-medium">તિ.સં. ૨૦૨૬</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaMapPin className="w-5 h-5 mr-3" />
                    <span className="font-medium">મહા વદ ૧૦, બુધવાર</span>
                  </div>
                  <div className="text-2xl font-bold text-center pt-2">
                    ૨૮-૧-૨૦૨૬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Rules Section */}
       <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-gradient2 p-4 px-8 pt-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-2xl font-bold">અપચય પાતળ્લા યોગ્ય નિયમો</h2>
            </div>
          </div>
          
          <div className="p-2 sm:p-8 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <div key={index} className="bg-white p-6 min-h-28 rounded-2xl shadow-md border-l-4 border-darkpink hover:shadow-lg transition-all duration-300 h-full flex flex-col">
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
                  આયોજક : અધ્યાત્મ પરિવાર - <br /> 844 844 40 50
                </h1>
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
            <p className="text-lg text-gray-700 font-bold flex items-center">પુષ્પાંજલિ ગાર્ડન્સ,ચંદાવરકર રોડ, બોરીવલી (વે), મુંબઈ</p>
          </div>

          <div className="grid bg-gradient2 items-center justify-center md:grid-cols-1 gap-6 p-6">
            <div className="rounded-2xl overflow-hidden border-2 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d72.8777!3d19.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzA2LjAiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              <h2 className="text-2xl font-bold">આધ્યાત્મિક ઉપધાન તપ - ભાવનાપત્ર</h2>
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

          <div className="sm:p-8">
            <div className="space-y-6">
              {/* Form iframe */}
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