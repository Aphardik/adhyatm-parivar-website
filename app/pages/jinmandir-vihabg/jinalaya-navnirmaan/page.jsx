import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'जिनालय नवनिर्माण | जिनमंदिर विभाग',
  description: '',
}

export default function TempleConstructionPage() {
  return (
    <div className="max-w-7xl bg-whitey mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightblue relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-darkblue">
                जिनालय नवनिर्माण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-darkblue font-semibold">
                अध्यात्म शिल्पशाला
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-darkblue font-medium">
                कार्य प्रारंभ: वि.सं.२०७१
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-6 flex flex-col gap-8 sm:py-6 lg:py-8">
          <div className="max-w-5xl bg-shadeblue p-8 relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="rounded-sm p-4 bg-shadeblue">
              <p className="text-lg leading-relaxed text-darkblue mb-4">
                जैनों के स्थानांतर के कारण वे जिस नए स्थान पर जाकर बसते है वहां नूतन जिनालय आराधना के आलंबन के रूप में अनिवार्य होता है। इसीलिए तो सीहोर के राजा जब भावनगर में बसे तब उन्होंने जैन
                <span className="text-secondary-color font-semibold">
                  {" "}
                  श्रेष्ठी कुंवरजीभाई माधाभाई{" "}
                </span>
                आदि को नगर में बसने का आमंत्रण दिया। लेकिन उन श्रेष्ठियों ने कह दिया कि,
                <span className="text-secondary-color font-semibold">
                  {" "}
                  "जिनालय के बिना हम नहीं आएंगे"{" "}
                </span>
               राजा ने जिनालय की जगह दी। ऐसे तो अनेक इतिहास हैं।
              </p>
             
            </div>
            <div>
              
            </div>
          </div>

          <div className="max-w-5xl bg-shadeblue p-8 relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="rounded-sm p-4 bg-shadeblue">
             
              <p className="text-lg leading-relaxed text-darkblue">
                इसीलिए अध्यात्म परिवार ने{" "}
                <span className="text-secondary-color font-semibold">
                  'अध्यात्म शिल्पशाला'{" "}
                </span>
                का एक विराट प्रकल्प प्रारंभ किया है। जिनालय निर्माण शास्त्रोक्त
                विधिपूर्वक तथा आकर्षक हो इसलिए पद्धति अनुसार योजना बनाई है, उसकी एक
                झलक इस प्रकार है :
              </p>
            </div>
            <div>
              
            </div>
          </div>

        </section>

        {/* Project Planning Section */}
        <section className="py-8 sm:pb-12 lg:pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-shadeblue relative rounded-lg p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  1
                </span>
              </div>
              <p className="text-base text-center leading-relaxed text-darkblue">
                शिल्प शास्त्रानुसारी प्लान बनाना।
              </p>
            </div>

            <div className="bg-shadeblue relative rounded-lg p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  2
                </span>
              </div>
              <p className="text-base leading-relaxed text-center text-darkblue">
                स्तंभ, गोखले, घुम्मट आदि के आकर्षक भाववर्धक स्केच बनाना।
              </p>
            </div>

            <div className="bg-shadeblue relative rounded-lg p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  3
                </span>
              </div>
              <p className="text-base text-center leading-relaxed text-darkblue">
                पाषाण आदि द्रव्यों की शुद्धि रखना।
              </p>
            </div>

            <div className="bg-shadeblue relative rounded-lg p-6">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  4
                </span>
              </div>
              <p className="text-base text-center leading-relaxed text-darkblue">
                रूपकाम मर्यादापूर्ण हो उसका ध्यान रखना।
              </p>
            </div>

            <div className="bg-shadeblue relative rounded-lg p-6 shadow-sm">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  5
                </span>
              </div>
              <p className="text-base text-center leading-relaxed text-darkblue">
                पत्थर खरीदी, बांधकाम, पत्थर फिटिंग, कार्निंग आदि हर एक लेवल की
                देखरेख का कार्य स्वयं करना।
              </p>
            </div>

            <div className="bg-shadeblue relative rounded-lg p-6 shadow-sm">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="text-center mb-4">
                <span className="bg-darkblue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                  6
                </span>
              </div>
              <p className="text-base text-center leading-relaxed text-darkblue">
                भविष्य में जिनालय की जैन स्थापत्य के रूप में पहचान बने इसलिए
                तीर्थंकर प्रभु आदि के जीवन प्रसंग तथा शासन-प्रभावक घटनाओं की कोरणी
                करना।
              </p>
            </div>
          </div>

         
        </section>

        {/* Stone Processing Section */}
        <section className="my-12">
          <div className="text-center mb-8 lg:mb-12">
            <div className="max-w-fit bg-lightblue rounded-sm mx-auto p-6  ">

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-darkblue">
                जिनालय पाषाण निर्माण की प्रक्रिया (कार्य प्रारंभ: वि.सं.२०७६)
              </h3>
            </div>
          </div>

          <div className="max-w-5xl  rounded-sm p-6 mx-auto mb-8 ">
        
            <p className="text-lg text-center leading-relaxed text-darkblue">
              अध्यात्म शिल्पशाला द्वारा करोड़ों रुपए के देवद्रव्य का रक्षण, मजबूत
              बंधारण और गहरी तथा आकर्षक कोरणी, ऐसे त्रिविध लाभ के लिए यह कार्य
              प्रारंभ किया गया है।
            </p>
          </div>

          {/* Stone Procurement */}
          <div className="grid md:grid-cols-4 gap-6 mb-28">
            <div className="bg-shadeblue rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.12.jpg"
                alt="स्टोन ब्लॉक"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-darkblue">
                यह है आरस की टनल माइन
              </p>
            </div>
            <div className="bg-shadeblue rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.13.jpg"
                alt="अंबाजी माइन की खरीदी"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-darkblue">
                अंबाजी माइन की एक थड़ी की खरीदी के समय खदानमलिक तथा अध्यात्म
                परिवार निर्माण विभाग के कार्यकर्ता।
              </p>
            </div>

            <div className="bg-shadeblue rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.14.jpg"
                alt="स्टोन ब्लॉक"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-darkblue">
                थड़ी की खरीद के बाद बनाया गया स्टोन ब्लॉक।
              </p>
            </div>

            <div className="bg-shadeblue rounded-lg p-6 shadow-sm relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.15.jpg"
                alt="विदेशी पाषाण"
                className="w-full h-48 object-contain rounded-lg mb-4"
              />
              <p className="text-center text-base font-semibold text-darkblue">
                मात्र अंबाजी या मकराना ही नहीं, इटली, थासोस ग्रीस, इथोपिया, ईरान
                आदि देशों से भी स्टोन ब्लॉक मंगवाया है।
              </p>
            </div>
          </div>

          {/* Stone Processing Steps */}
          <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
            <div className="text-center mb-8">
              <div className="max-w-fit bg-lightblue rounded-sm mx-auto p-6 ">

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading text-darkblue">
                  जेसलमेर का स्टोन ब्लॉक
                </h3>
              </div>
            </div>
            <div className="bg-shadeblue rounded-lg p-6 shadow-sm order-1 md:order-2 relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.16.jpg"
                    alt="जैसलमेर का स्टोन ब्लॉक"
                    className="w-full h-80 object-contain rounded-lg"
                  />
                  <p className="mt-4 text-darkblue font-semibold">जेसलमेर का स्टोन ब्लॉक</p>
                </div>
                <div className="text-center">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.17.jpg"
                    alt="जैसलमेर का स्टोन ब्लॉक"
                    className="w-full h-80 object-contain rounded-lg"
                  />
                  <p className="mt-4 text-darkblue font-semibold">
                    इस स्टोन ब्लॉक को ट्रेसिंग मशीन द्वारा जरूरी नाप के प्रमाण में
                    कटा जाता है।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Processing */}
          <div className="bg-lightblue/20 rounded-lg p-6 mb-12 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <h3 className="font-bold text-xl text-darkblue mb-6 text-center font-heading">
              उन्नत तकनीकी प्रक्रिया
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.18.jpg"
                  alt="CNC डायमंड वायर प्रोफाइल मशीन"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-darkblue">
                  CNC डायमंड वायर प्रोफाइल मशीन
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.19.jpg"
                  alt="पिलर निर्माण"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-darkblue">
                  किसी भी शेप में पिलर बनाया जा सकता है
                </p>
              </div>
              <div className="text-center">
                <img
                  src="/jinmandir/jinalaya-navnirmaan/img-2.20.jpg"
                  alt="एक्सीस प्रीफाइल मशीन"
                  className="w-60 h-60 object-cover rounded-full mx-auto mb-4"
                />
                <p className="text-base font-semibold text-darkblue">
                  एक्सीस प्रीफाइल मशीन द्वारा कार्विंग
                </p>
              </div>
            </div>
          </div>

          {/* Fine Work Section */}
          <div className="rounded-sm p-20 bg-shadeblue mb-12 relative">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="grid text-center md:grid-cols-1 gap-8 items-center">
             
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.21.png"
                    alt="प्रोफाइलिंग"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-darkblue">
                    जैसा शेप जरूरी हो वैसी प्रोफाइलिंग हो सकती है।
                  </p>
                </div>
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.22.png"
                    alt="इन-ले वर्क"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-darkblue">
                    ऐसा इन-ले वर्क भी शिल्पशाला में होता है।
                  </p>
                </div>
                <div className="text-center sm:p-4">
                  <img
                    src="/jinmandir/jinalaya-navnirmaan/img-2.23.png"
                    alt="मैन्युअल कार्विंग"
                    className="w-full object-contain rounded-lg mb-2"
                  />
                  <p className="text-base font-semibold text-darkblue">
                    यंत्र का काम होने के बाद इस प्रकार मैन्युअल फाइन कार्विंग आसान
                    बन जाती है।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Current Project */}
           <div className="bg-shadeblue rounded-lg p-10 my-12 text-center relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
             
              <p className="text-lg leading-relaxed text-darkblue">
               <span className="font-semibold ">देलवाड़ा के मंदिर </span> ८०० वर्ष बाद भी हमारा मन जीत लेते हैं, क्योंकि वहां बुरादे के बदले में चांदी, सोना तथा रत्न देकर गहरी गहरी कोरणी करवाई थी। छिछली कोरणी हो तो २५-५० वर्षों में पुनः घिसाई करवाने से वह कोरणी नष्ट हो जाती है।
              </p>
            </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div className="bg-shadeblue rounded-lg p-6 relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <img
                src="/jinmandir/jinalaya-navnirmaan/img-2.24.jpeg"
                alt="कच्छ-रापर-गढ़वाली जिनालय कार्विंग"
                className="w-full  sm:p-20 object-contain rounded-lg"
              />
            </div>



            <div className="flex flex-col gap-8">
              
            <div className="bg-shadeblue rounded-lg p-10 text-center relative">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
              <h3 className="font-bold text-xl text-darkblue mb-4 font-heading">
                कच्छ-रापर- गढ़वाली के दर्शनीय जिनालय
              </h3>
              <p className="text-lg leading-relaxed text-darkblue">
                <span className="font-semibold text-darkblue">
                  कच्छ-रापर-गढ़वाली के दर्शनीय जिनालय
                </span>{" "}
                की यह कार्विंग तथा प्रोफाइलिंग{" "}
                <span className="font-semibold text-darkblue">
                  अध्यात्म शिल्पशाला
                </span>{" "}
                में हो रही है।
              </p>
            </div>

           
            </div>




          </div>
        </section>

        {/* Final Temple Images */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <div className="bg-shadeblue rounded-lg p-6 shadow-sm flex-grow relative">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <img
                  alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                  className="w-full object-contain rounded-lg"
                  src="/jinmandir/jinalaya-navnirmaan/img-2.25.png"
                />
              </div>
              <div className="bg-shadeblue text-darkblue rounded-sm p-4 relative">
                
                <p className="text-base leading-relaxed">
                  श्री शांति कनक जिनालय, नानपुरा सूरत के जिनालय की कोरणी कई विशेषज्ञों के लिए आकर्षण बनी है!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-shadeblue rounded-lg p-6 shadow-sm flex-grow relative">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <img
                  alt="मंदिर कार्विंग पर काम कर रहे कारीगर"
                  className="w-full object-contain rounded-lg"
                  src="/jinmandir/jinalaya-navnirmaan/img-2.26.png"
                />
              </div>
              <div className="bg-shadeblue text-darkblue rounded-sm p-4 relative">
                
                <p className="text-base leading-relaxed">
                  श्री शान्तिवर्धक जिनालय-पाल, अभी तो यह निर्माणाधीन है तो भी ऐसा
                  मन मोह लेता है तो जब पूर्ण रूप से बन जाएगा तब कैसा होगा!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
       <CallToActionButton
        heading=" जो नुकसान पहले ही हो चुका है उसका क्या?"
        content=" अध्यात्म परिवार ने टीका आदि निकाल कर प्रतिमाजी का लेप-ओप करने के लिए बहुत परिश्रमपूर्वक शुद्ध द्रव्यों की खोज की है। बस, हमें ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ दीजिए-दिलवाइये।"
        id="jinpratima-suraksha-cta"
        href={
          "https://wa.me/918448444050?text=नमस्कार%2C%0A%0Aमैं%20अध्यात्म%20परिवार%20की%20सेवाओं%20के%20बारे%20में%20जानकारी%20चाहता%2Fचाहती%20हूं।%0Aकृपया%20प्रतिमाजी%20की%20शुद्धि-सुरक्षा%20के%20लिए%20उपलब्ध%20सेवाओं%20की%20विस्तृत%20जानकारी%20प्रदान%20करें।%0A%0Aधन्यवाद"
        }
      />
    </div>
  );
}