import React from "react";
import CounterStatsUI from "@/app/_components/StatData";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HexagonalSvg from "@/app/_components/HexagonalSvg";

export const metadata = {
  title: "जिनप्रतिमा सुरक्षा | जिनमूर्ति विभाग",
  description: "",
};

const Page = () => {
  const statsData = [
    {
      count: "653",
      label: "कुल संघ जिनालय",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "12002",
      label: " कुल आरस की प्रतिमा की शुद्धि-सुरक्षा",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "4865",
      label: " कुल धातु की प्रतिमा की शुद्धि-सुरक्षा",
      color: "bg-gradient-to-b from-teal-400 to-teal-600",
    },
    {
      count: "1Cr +",
      label: "श्रीसंघ द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
    {
      count: "3.5Cr +",
      label: "अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
  ];
  return (
    <div className="bg-whitey max-w-7xl text-maroon  font-body">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40 overflow-hidden">
        <HeaderSvg />

        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                जिनप्रतिमा सुरक्षा
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-maroon font-semibold">
               जिनालय का लीकेज आदि समस्याओं का निर्माणकार्य
              </p>
              <p className="sm:text-base text-center lg:text-lg text-maroon font-medium">
                कार्य आरंभ: वि.सं. २०७३
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        {/* Section 1: Introduction */}
        <section className="py-8 sm:py-8 lg:py-8">
          <div className="mx-auto  max-w-7xl">
            <div className="bg-whitey  p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 text-center">
                <p className="text-maroon text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                  एक नयनरम्य प्रतिमा में हजारों को समकित प्राप्त करवाने की ताकत
                  होती है। यह प्रतिमा हमारी अज्ञानता के कारण यदि खराब हो जाए और
                  मन में भक्ति के उल्लास के बदले चिंता के बादल छा जाएं तो
                  <span className="text-darkpink font-semibold">
                    {" "}
                    यह कितनी बड़ी हानि है!
                  </span>
                </p>
                <p className="text-maroon text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
                  इसके मूल शोधते शोधते अध्यात्म परिवार ने{" "}
                  <span className="text-darkpink font-sans font-bold">
                    Archaeological Survey of India (ASI)
                  </span>{" "}
                  के दरवाजे खटखटाने तक के प्रयत्न किये है।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Problems - Modern Grid Layout */}
        <section className="py-8 sm:mb-8 lg:mb-8 ">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                यह प्रतिमा की तस्वीर है या हमारे अज्ञान की तस्वीर?
              </h2>
            </div>

            {/* Problem 1 - Image Left */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-whitey rounded-sm  overflow-hidden">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.1.jpg"
                      alt="Damaged Statue"
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    कड़वी वास्तविकता
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon leading-relaxed">
                    चिपकाए हुए कंके को निकालने पर प्रकट हुई कड़वी वास्तविकता!
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 2 - Image Right */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    प्रभु के चरणों की दुर्दशा
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon mb-4 leading-relaxed">
                    जिन प्रभु के चरण जहां पड़ते थे वहां स्वर्णकमल रखे जाते थे{" "}
                    <br /> उन प्रभु के चरणों पर चिपकाये हुए पंजे से पैदा होने
                    वाली दर्दनाक दुर्दशा!
                  </p>
                </div>
                <div className="bg-whitey rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.2.jpg"
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
                  <div className="flex  flex-col sm:flex-row  gap-2">
                    <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.3-1.jpg"
                        alt="Root Cause Analysis"
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                    <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.3-2.jpg"
                        alt="Root Cause Analysis"
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    अवदशा का कारण
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon leading-relaxed">
                    इस अवदशा का कारण और कुछ नहीं, टिके आदि के भीतर रहने वाली नमी
                    ही है।
                  </p>
                </div>
              </div>
            </div>

            {/* Problem 4 - Image Right */}
            <div className="mb-12 lg:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-whitey rounded-sm  p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-maroon mb-4">
                    धरणेंद्र की सुरक्षा
                  </h3>
                  <p className="text-lg sm:text-xl text-maroon mb-4 leading-relaxed">
                    पार्श्वनाथ प्रभु को तो धरणेंद्रने सुरक्षित रखा था। <br /> हम
                    प्रभु के प्रतिबिंब रूपी फणा को नहीं संभाल सके!
                  </p>
                </div>
                <div className="bg-whitey flex flex-col gap-2 sm:flex-row items-center rounded-sm  overflow-hidden">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.4-1.jpeg"
                    alt="Damaged Parts"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.4-2.jpg"
                    alt="Damaged Parts"
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Root Cause Analysis */}
        <section className="my-8 sm:my-8 lg:my-8 bg-whitey">
          <div className="mx-auto max-w-7xl">
            {/* Ancient Wisdom Quote */}
            <div className="mb-8 lg:mb-12">
              <div className="text-center mb-8 lg:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                  महत्वपूर्ण निष्कर्ष
                </h3>
              </div>
              <div className="bg-lightyellow rounded-sm  p-6 sm:p-8">
                <p className="text-maroon text-lg sm:text-xl font-medium text-center">
                  जो बात ASI ने कही है वह बात सदियों पहले श्री श्राद्धविधि ग्रंथ
                  में अंकित है:
                </p>
                <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
                  <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                    <FaQuoteLeft
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                    प्रतिमा पर जिस जगह पर जरा भी पानी रह जाता है (वहां) श्यामलता
                    आ जाती है।
                    <FaQuoteRight
                      size={32}
                      className="text-maroon flex-shrink-0"
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* Root Cause Analysis */}
            <div className="">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex  flex-col sm:flex-row  gap-2">
                  <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.5.1.jpg"
                      alt="Root Cause Analysis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className=" rounded-sm  flex items-center justify-center h-64 sm:h-80">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.5.2.jpg"
                      alt="Root Cause Analysis"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-6 text-maroon">
                    बबूल के पेड़ की जड़ के बदले मात्र डालियां कांटने से कांटे
                    चुभना किस प्रकार बंद होंगे?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-maroon text-whitey rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        1
                      </span>
                      <span className="font-medium text-lg">
                        सबसे पहले १ इंच का टिका लगाया गया उसके गड्ढ़े!
                      </span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-maroon text-whitey rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        2
                      </span>
                      <span className="font-medium text-lg">
                        उसको ढकने १.५ इंच का टिका लगाया उससे दूसरा गड्ढ़ा हुआ!
                      </span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="w-8 h-8 bg-maroon text-whitey rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
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

        {/* Section 3 - Updated सौभाग्य का सीमाचिह्न section */}
        <div className=" bg-whitey my-8 sm:my-8 lg:my-8">
          <div className="container mx-auto  max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-block bg-lightpink text-maroon px-8 py-4 rounded-sm ">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold">
                  सौभाग्य का सीमाचिह्न: अंतरिक्षजी के आंगन में...
                </h1>
              </div>
            </div>

            {/* Main Story Section */}
            <div className="bg-whitey mb-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Story Content */}
                <div className="space-y-6">
                  <div className="bg-lightyellow p-6 rounded-lg border-l-4 border-darkyellow">
                    <h2 className="text-xl font-semibold font-heading  text-maroon mb-4">
                      प्रतीक्षा का काल
                    </h2>
                    <div className="space-y-3 text-maroon leading-relaxed">
                      <p>
                        १५,०६० दिनों तक लाखों लोगों के दिल की अनकही पीड़ा के
                        अनुभव से कौन अनजान है?
                      </p>
                      <p>
                        कि जब श्री अंतरिक्षजी के अधिनायक दादा दरवाजों के पीछे
                        बंद थे।
                      </p>
                      <p>
                        अपने दादा को पाने के लिए कितना धनव्यय... कितनी बाधाएं...
                      </p>
                      <p>
                        कितनी तप साधना... कितने दशकों, महीनों, घंटों की लम्बी
                        प्रतीक्षा...
                      </p>
                      <p>
                        <span className="font-bold text-maroon">
                          श्वेतांबर श्रीसंघ ने की है....
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-lightyellow p-6 rounded-lg border-l-4 border-darkyellow">
                    <h2 className="text-xl font-semibold font-heading  text-maroon mb-4">
                      साधना का फल
                    </h2>
                    <div className="space-y-3 text-maroon leading-relaxed">
                      <p>
                        अंत में सर्वोच्च न्यायालय के उस ऐतिहासिक इंटरिम ऑर्डर के
                        रूप में वह साधना फलीभूत हुई।
                      </p>
                      <p>अब दादा की पूजा का लाभ मिलने वाला था।</p>
                      <p>
                        जो लेपकार्य दशकों से रुका हुआ था उसको संपन्न करना था।
                      </p>
                    </div>
                  </div>

                  <div className="bg-lightyellow p-6 rounded-lg border-l-4 border-darkyellow">
                    <h2 className="text-xl font-semibold font-heading  text-maroon mb-4">
                      तैयारी और चुनौती
                    </h2>
                    <div className="space-y-3 text-maroon leading-relaxed">
                      <p>
                        संपूर्ण भारत के जैन संघों की परस्पर बैठकें शुरू हुईं।
                      </p>
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

                  <div className="bg-lightyellow p-6 rounded-lg border-l-4 border-darkyellow">
                    <h2 className="text-xl font-semibold font-heading  text-maroon mb-4">
                      समर्पण और सफलता
                    </h2>
                    <div className="space-y-3 text-maroon leading-relaxed">
                      <p>
                        अध्यात्म परिवार के कार्यवाहक शासन सेवक के साढ़े तीन
                        करोड़ रोम हर्षित हो गए।
                      </p>
                      <p>
                        उन्होंने तत्काल जवाब दिया:{" "}
                        <span className="font-bold text-maroon">
                          अवश्य। मैं अंतरिक्षजी पहुंचता हूं।
                        </span>
                      </p>
                      <p>
                        किन्तु वहां पहुंचते ही वहां के गंभीर हालत में जान के
                        जोखम का अंदाज आ गया।
                      </p>
                      <p>
                        पर दादा की भक्ति के उल्लास के सामने जोखम का भय फीका पड़
                        गया।
                      </p>
                      <p>
                        दादा की भक्ति और समग्र भारत के चतुर्विध संघों के मंगल
                        आशीष के बल से दादा के लेप का मंगल कार्य संपन्न हुआ।
                      </p>
                    </div>
                  </div>

                  {/* <div className="bg-whitey p-6 rounded-lg border-2 border-light-bg">
                  <p className="text-xl font-bold text-center text-maroon">
                    हमारे सौभाग्य का यह सीमाचिह्न है।
                  </p>
                </div> */}
                </div>

                {/* Visual Content Section */}
                <div className="space-y-6">
                  <div className="bg-whitey p-8 rounded-md ">
                    <h3 className="text-base font-semibold text-center mb-4 text-maroon">
                      वहीवटदारो ने यह क्रिटिकल कार्य अध्यात्म परिवार को सौंपा
                      क्योंकि उन्हें पता था कि...
                    </h3>
                    <div className="bg-whitey h-48 flex items-center justify-center rounded-lg mb-4">
                      <img
                        src="/jinmurti/jinpratima-suraksha/img-1.10.jpg"
                        alt="क्षतिग्रस्त प्रतिमा"
                        className="w-full h-full object-contain rounded-lg"
                      />
                      {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                        प्रतिमा छवि
                      </div> */}
                    </div>
                    <p className="font-semibold text-center text-maroon bg-whitey p-3 rounded">
                      ठग कारीगर एमसील आदि हल्के द्रव्यों का उपयोग करके प्रभु की
                      दुर्दशा करते हैं!
                    </p>
                  </div>

                  <div className="bg-whitey h-64 flex items-center justify-center rounded-lg">
                    <img
                      src="/jinmurti/jinpratima-suraksha/img-1.11.png"
                      alt="क्षतिग्रस्त प्रतिमा"
                      className="w-full h-full object-contain rounded-lg"
                    />
                    {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                      प्रतिमा छवि
                    </div> */}
                  </div>

                  <div className="bg-whitey rounded-md  flex items-center justify-center  p-8">
                    <div className="grid lg:grid-cols-1">
                      <div className="lg:col-span-2">
                        <div className="bg-whitey h-56 flex items-center justify-center rounded-lg">
                          <img
                            src="/jinmurti/jinpratima-suraksha/img-1.12.png"
                            alt="संरक्षित प्रतिमा"
                            className="w-full h-full object-contain rounded-lg"
                          />
                          {/* <div className="hidden w-full h-full items-center justify-center text-maroon">
                            प्रतिमा छवि
                          </div> */}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="bg-whitey p-4 rounded-lg ">
                          <p className="font-semibold text-maroon">
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

        <CounterStatsUI statsData={statsData} />


        <section className="py-8 sm:py-8 lg:py-8 bg-whitey">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                सौभाग्य का सीमाचिह्न
              </h2>
            </div>

            <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75%  rounded-sm mb-8  overflow-hidden h-52 sm:h-auto transition-shadow">
              {/* <div className="h-full bg-lightyellow flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.6.jpeg"
                  alt="Work Done"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="block sm:hidden">
                <HexagonalSvg accentColor="red"/>
                </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                  श्री शत्रुंजय तीर्थाधिपति आदिनाथ दादा
                </h4>
                <p className="text-maroon leading-relaxed">
                  वि.सं. २०७५-७६ से प्रतिवर्ष भादरवा सुद छठ से आसोज सुद छठ (एक
                  माह) तक श्री शत्रुंजय तीर्थाधिपति दादा आदिनाथ का ओप (शुद्धि)
                  सहित महातीर्थ पर विराजमान प्रतिमाओं के ओप आदि का कार्य अविरत
                  चल रहा है।
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 lg:mb-8">
              {/* Card 1 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm h-52 sm:h-auto overflow-hidden hover: transition-shadow">
                <HexagonalSvg accentColor="red"/>
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.7.png"
                    alt="Girnar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    श्री गिरनार महातीर्थ
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    वर्तमान विश्व की सबसे प्राचीन प्रतिमा गिरनार महातीर्थ मंडन
                    श्री नेमिनाथ दादा की प्रतिमा का शास्त्रवर्णित शुद्ध द्रव्यों
                    से लेप का कार्य एवं प्रगट प्रभावी श्री अमीझरा पार्श्वनाथ
                    परमात्मा के ओप का कार्य भी अध्यात्म परिवार द्वारा संपन्न!
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% h-52 sm:h-auto rounded-sm  overflow-hidden hover: transition-shadow">
                <HexagonalSvg accentColor="red"/>
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.8.png"
                    alt="Sametshikhar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    श्री समेतशिखर महातीर्थ
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    इस अवसर्पिणी काल के २०-२० तीर्थंकरों के मोक्ष कल्याणक से
                    सुवासित श्री समेत्तशिखर महातीर्थ के जलमंदिर में विराजमान
                    श्री शामला पार्श्वनाथ परमात्मा के लेप का कार्य
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm h-52 sm:h-auto overflow-hidden transition-shadow sm:col-span-2 lg:col-span-1">
                <HexagonalSvg accentColor="red"/>
                {/* <div className="h-48 sm:h-56 bg-lightyellow flex items-center justify-center">
                  <img
                    src="/jinmurti/jinpratima-suraksha/img-1.9.png"
                    alt="Shankheshwar Tirth"
                    className="w-full h-full object-cover"
                  />
                </div> */}
                <div className="p-6">
                  <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                    श्री शंखेश्वर महातीर्थ
                  </h4>
                  <p className="text-maroon leading-relaxed">
                    की भमती में विराजमान तमाम परमात्माओं के ओप का कार्य
                  </p>
                </div>
              </div>
            </div>

             <div className="relative bg-radial-[at_25%_25%] from-lightpink to-lightyellow to-75% rounded-sm mb-8 h-52 sm:h-auto  overflow-hidden hover: transition-shadow">
              {/* <div className="h-full bg-lightyellow flex items-center justify-center">
                <img
                  src="/jinmurti/jinpratima-suraksha/img-1.6.jpeg"
                  alt="Work Done"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <div className="block sm:hidden">
                <HexagonalSvg accentColor="red"/>
                </div>
              <div className="p-6">
                <h4 className="font-semibold font-heading text-xl mb-3 text-maroon">
                 श्री मक्षीजी तीर्थ
                </h4>
                <p className="text-maroon leading-relaxed">
                  श्री मक्षीजी तीर्थ में विराजमान श्री मक्षीजी पार्श्वनाथ परमात्मा
                के लेप सहित बावन जिनालय में सुशोभित तमाम परमात्माओं के ओप आदि का
                कार्य अध्यात्म परिवार द्वारा सहर्ष संपन्न हुआ है!
                </p>
              </div>
            </div>
          </div>

        </section>
        <section className="py-8 sm:py-8 lg:py-8 ">
          <div className="mx-auto  max-w-7xl">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                प्रत्येक पूजक का एक संकल्प, जिससे भविष्य का नुकसान रुकेगा
              </h2>
            </div>

            <div className="grid md:grid-cols-1 gap-8 lg:gap-8">
              <div className="bg-lightyellow rounded-sm  p-6 sm:p-8">
                {/* <h3 className="text-xl sm:text-2xl font-semibold font-heading mb-4 text-maroon">
                प्रत्येक पूजक का एक संकल्प:
              </h3> */}

                <div className="bg-lightyellow rounded-sm ">
                  <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
                    'शासन की धरोहर की सुरक्षा के लिए रोज १ मिनट अर्पण करूंगा'।
                  </p>
                  <div className="flex items-center justify-center my-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
                  <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
                    मै अंगलुंछ्ने से अपने प्रभु को सूखा कर ही पूजा करूंगा।
                  </p>
                  <div className="flex items-center justify-center my-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
                </div>
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
                  "https://wa.me/918448444050"
                }
              />
    </div>
  );
};

export default Page;
