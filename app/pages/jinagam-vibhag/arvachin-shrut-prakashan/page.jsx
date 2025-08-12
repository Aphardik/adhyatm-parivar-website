import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'अर्वाचीन श्रुत प्रकाशन-श्रुत प्रचार | जिनागम विभाग',
  description: '',
}

const Page = () => {
  const statsData = [
    {
      count: "85",
      label: "प्रवचन पुस्तक",
      label1: " पृष्ठ: 10,170",
      label2: " नकल: 7,74,000",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "09",
      label: "वाचना पुस्तक",
      label1: " पृष्ठ: 1200",
      label2: " नकल: 45,000",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "34",
      label: "कथा पुस्तक",
      label1: " पृष्ठ: 1245",
      label2: " नकल: 1,58,000",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "42",
      label: "अध्धयन पुस्तक",
      label1: " पृष्ठ: 6,457",
      label2: " नकल: 39,700",
      color: "bg-gradient-to-b from-teal-400 to-teal-600",
    },
    {
      count: "46",
      label: "अन्य पुस्तके",
      label1: " पृष्ठ: 7,194",
      label2: " नकल: 1,04,300",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
    {
      count: "1.75cr +",
      label: "अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
  ];
  const bulletPoints = [
    "जिन प्रवचनों से औसतन हर १० से १५ दिनों में एक दीक्षा का सर्जन हो रहा है।",
    "जिन वचनों ने श्रमण-श्रमणी वर्ग को कलिकाल की जहरीली हवा से सुरक्षित रखा है।",
    "जो नित्य उपयोगी साहित्य आराधकों का श्वास-प्राण बन गया है।",
    "जो नूतन सर्जन भक्तिरस और वैराग्यरस से भींजा हुआ है, ऐसा श्रेणीबद्ध साहित्य अध्यात्म परिवार द्वारा प्रकाशित हो रहा है।",
  ];

  const bookCategories = [
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.3.png",
      alt: "Collection of books",
      title: "प्रवचन की पुस्तकें",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.4.png",
      alt: "Collection of study books",
      title: "अध्ययन पुस्तकें",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.5.png",
      alt: "Collection of children's literature",
      title: "बालकथा साहित्य",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.6.png",
      alt: "Collection of various literature",
      title: "विविध साहित्य",
    },
    {
      image: "/jinagam/arvachin-shrut-prakashan/img-3.7.png",
      alt: "Collection of various literature",
      title: "नित्योपयोगी साहित्य",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon mb-4">
                अर्वाचीन श्रुत प्रकाशन-श्रुत प्रचार
              </h1>
              <p className="text-base text-center lg:text-lg text-maroon font-medium">
                कार्य प्रारंभ : वि.सं. २०६३
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        {/* Main Content */}
 <section className="py-4 max-w-5xl mx-auto sm:py-6 lg:py-8 lg:px-0">
      <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
        <div className="absolute top-0 left-0 opacity-15">
          <TopLeftSvg />
        </div>
        <div className="absolute bottom-0 right-0 opacity-15">
          <BottomRighSvg />
        </div>
        <div className="grid grid-cols-1 gap-6">
          {bulletPoints.map((point, index) => (
            <div key={index} className=" p-4  ">
              <p className="text-lg font-semibold text-center leading-relaxed text-maroon">
                 {point}
              </p>
                <div className="flex items-center justify-center mt-6">
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                    <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                    <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                  </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Book Categories */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-lightyellow rounded-xl p-6">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="w-full h-96 object-contain rounded-lg"
                  />
                </div>
                <h3 className="font-bold bg-maroon  text-lg py-3 text-whitey font-heading">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-12">
         
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
              विविध श्रुतकार्यों की झलक...
            </h3>
          </div>

          <div className="relative bg-lightyellow rounded-xl p-8 text-maroon">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-lightyellow rounded-xl p-6">
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.8.png"
                  alt="Ancient manuscripts collection"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <div>
                <p className="sm:text-lg leading-relaxed">
                  ऐसी मध्यकालीन कृतियों वाली हजारों हस्तप्रतों के लाखों पन्ने
                  जर्जर हालत में हैं।
                </p>
                <p className="sm:text-lg leading-relaxed">
                  जिनको पिछले २५० वर्षों में शायद किसी ने कभी उठाया भी नहीं है।
                </p>
                </div>
                <div>
                <p className="sm:text-lg leading-relaxed">
                  पूज्य कृपानाथ के निश्रावर्ती संख्याबद्ध श्रमण-श्रमणीवर्या इस
                  विराट साहित्य को गीतार्थसुलभ बनाने के लिए कमरतोड़ परिश्रम कर
                  रहे हैं।
                </p>
                <p className="sm:text-lg leading-relaxed">
                  जिसके सुंदर फल श्री संघ के करकमल में अर्पण किए जा रहे है।
                </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adhyatm Parichay */}
        <section className="my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="relative bg-lightyellow rounded-sm p-6">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.9.png"
                  alt="Adhyatm Parichay book"
                  className="w-full h-96 object-contain rounded-lg mb-4"
                />
                <h3 className="font-bold text-xl text-maroon font-heading text-center">
                  अध्यात्म परिचय
                </h3>
              </div>
            </div>

            <div className="rounded-sm p-6">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                अध्यात्म परिवार द्वारा पिछले १६-१७ वर्षों से प्रारंभ की गई इस
                श्रुतयात्रा में प्राचीनश्रुत, अर्वाचीनश्रुत आदि कितनी धाराएं
                हैं? तो यात्रा ने कितने माइलस्टोन पार किये हैं? इस यात्रा का
                भावी मुक्काम क्या है? ऐसी अनेक बातें जानने के लिए प्रस्तुत है...
                कद में छोटी किंतु जानकारी में विशाल पुस्तिका :
              </p>
              <p className="text-lg font-semibold text-maroon mt-4">
                श्रुतयात्रा अध्यात्म परिवार की
              </p>
            </div>
          </div>
        </section>

        {/* Gyansetu */}
        <section className="my-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl p-6 order-2 md:order-1">
              <p className="text-base sm:text-lg leading-relaxed text-maroon mb-6">
                यह है{" "}
                <span className="text-maroon font-semibold">ज्ञानसेतु</span> के
                हर महीने प्रकाशित होने वाले अंक। इसके द्वारा अध्यात्म परिवार
                समग्र जैनशासन के बाग में हर महीने खिलने वाले पुस्तकफूलों की
                जानकारी का सुंदर गुलदस्ता बनाकर ज्ञानभंडारों तथा श्रुतरसिक
                चतुर्विध संघ को पहुंचाता है।
              </p>
            </div>

            <div className="space-y-4 order-1 md:order-2">
              <div className="relative bg-lightyellow rounded-sm p-4">
                <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
                <img
                  src="/jinagam/arvachin-shrut-prakashan/img-3.10.png"
                  alt="Publication book series"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
       <CounterStatsUI statsData={statsData} textColor="maroon" />
      </div>
    </div>
  );
};

export default Page;
