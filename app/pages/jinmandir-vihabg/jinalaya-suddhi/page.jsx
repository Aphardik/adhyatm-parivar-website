import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'जिनालय शुद्धि - उपाश्रय शुद्धि | जिनमंदिर विभाग',
  description: '',
}

const Page = () => {
  const statsData = [
    {
      count: "381",
      label: "कुल जिनालयों का शुद्धिकरण",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "85",
      label: "कुल उपाश्रय को शुद्धिकरण",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "3.5Cr +",
      label: "अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="max-w-7xl font-body bg-whitey">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-6 lg:py-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
              जिनालय शुद्धि - उपाश्रय शुद्धि
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-maroon font-medium">
              कार्य प्रारंभ : वि.सं. २०७७
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="mx-auto px-2 sm:px-6">
        {/* Introduction Section */}
        <section className="py-6 sm:py-6 lg:py-8">
          <div className="max-w-5xl relative mx-auto">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="bg-lightyellow rounded-xl p-6 sm:p-8 lg:p-12">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                'प्रभु का धाम तो देवविमान जैसा लगना चाहिए।' इस भावना से यह कार्य
                करने की अध्यात्म परिवार की रीत अनोखी है। जिनालय का प्रत्येक
                स्तंभ, कोना, सामरण-शिखर और बारिक-बारिक कोरणी-इन सभी भागों की
                शुद्धि के साथ पूजा के विविध उपकरणों की भी शुद्धि की जाती है।
                आराधना के धाम की तरह उपाश्रयों की भी आमूलचूल शुद्धि यह इसके साथ
                जुड़ा हुआ प्रकल्प है। शुद्धियों के पूर्व और पश्चात की छवियों में
                कार्य की खूबी दिखाई देगी!
              </p>
            </div>
          </div>
        </section>

        {/* Shatrunjay Section */}
        <section className="py-6 sm:py-6 lg:py-8">
          {/* Section Title */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-6 rounded-lg">
              सौभाग्य का सीमाचिह्न : शत्रुंजय के शिखर पर
            </h3>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <div className="space-y-6 text-center">
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                हर वर्ष दादा आदिनाथ के गर्भगृह-रंगमंडप की शुद्धि तथा आस-पास के
                जिनालयों-देरियों तथा नवटूंक के जिनालयों का शुद्धिकरण, रंगरोगान
                आदि का कार्य गतिमान है।
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-maroon">
                नवटूक के जिनालयों के सभी शिखरों की शुद्धि के साथ निगोद न हो, इस
                लिए जर्मन कंपनी के वोटर रिपेलन्ट द्वारा प्रिझर्वेशन-प्रोसेस
                प्रगति पर है।
              </p>
            </div>
          </div>

          {/* Before/After Images - First Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-1.2.jpeg"
                alt="Jinalay Cleaning Before"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  शुद्धि से पहले
                </p>
              </div>
            </div>
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-1.1.jpeg"
                alt="Jinalay Cleaning After"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  शुद्धि के बाद
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Images - Second Set */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.11-2.1.jpg"
                alt="Jinalay Cleaning Before"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  शुद्धि से पहले
                </p>
              </div>
            </div>
            <div className="bg-lightyellow rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.11-2.2.jpg"
                alt="Jinalay Cleaning After"
                className="w-full h-64 sm:h-80 lg:h-96 object-contain"
              />
              <div className="p-4 text-center bg-maroon">
                <p className="text-lg sm:text-xl text-whitey font-medium">
                  शुद्धि के बाद
                </p>
              </div>
            </div>
          </div>

          {/* Risk Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-6 rounded-lg">
              जान के जोखिम पर भी शुद्धि का काम होता है।
            </h3>
          </div>

          {/* Risk Images Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-2.1.jpeg"
                alt="Risk Work 1"
                className="w-full h-48 sm:h-64 lg:h-80 object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-2.2.jpeg"
                alt="Risk Work 2"
                className="w-full h-48 sm:h-64 lg:h-80 object-contain"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-3.1.png"
                alt="Risk Work 3"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/jinmandir/jinalaya-suddhi/img-2.10-3.2.png"
                alt="Risk Work 4"
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
          <CounterStatsUI statsData={statsData} textColor="maroon" />
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
