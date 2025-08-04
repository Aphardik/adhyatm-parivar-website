import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

const Page = () => {
  const statsData = [
    { count: "381", label: "कुल जिनालयों का शुद्धिकरण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "85", label: "कुल उपाश्रय को शुद्धिकरण", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "3.5Cr +", label: "अध्यात्म परिवार द्वारा सद्व्यय", color: "bg-gradient-to-b from-blue-400 to-blue-600" }
  ];
  return (
    <div className="mx-auto font-body bg-background">
      {/* Header */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                जिनालय शुद्धि - उपाश्रय शुद्धि...
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-4 sm:p-8 bg-lighten-bg max-w-4xl mx-auto">
          <p className="text-base sm:text-xl leading-relaxed text-heading">
            ‘प्रभु का धाम तो देवविमान जैसा लगना चाहिए।’ इस भावना से यह कार्य करने की अध्यात्म परिवार की रीत अनोखी है। जिनालय का प्रत्येक स्तंभ, कोना, सामरण-शिखर और बारिक-बारिक कोरणी-इन सभी भागों की शुद्धि के साथ पूजा के विविध उपकरणों की भी शुद्धि की जाती है। आराधना के धाम की तरह उपाश्रयों की भी आमूलचूल शुद्धि यह इसके साथ जुड़ा हुआ प्रकल्प है। शुद्धियों के पूर्व और पश्चात की छवियों में कार्य की खूबी दिखाई देगी!
          </p>
        </div>
      </section>

    

      <section className="my-12">
        <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
          
          <div className="rounded-lg p-6 order-1 md:order-1">

             <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
               सौभाग्य का सीमाचिह्न : शत्रुंजय के शिखर पर
            </h3>
          </div>
            <p className="text-base text-center sm:text-lg leading-relaxed text-content mb-2">
              हर वर्ष दादा आदिनाथ के गर्भगृह-रंगमंडप की शुद्धि तथा आस-पास के जिनालयों-देरियों तथा नवटूंक के जिनालयों का शुद्धिकरण, रंगरोगान आदि का कार्य गतिमान है।
            </p>
            <p className="text-base sm:text-lg text-center leading-relaxed text-content">
              नवटूक के जिनालयों के सभी शिखरों की शुद्धि के साथ निगोद न हो, इस लिए जर्मन कंपनी के वोटर रिपेलन्ट द्वारा प्रिझर्वेशन-प्रोसेस प्रगति पर है।
            </p>
          </div>
        </div>
        <div className="grid bg-lighten-bg rounded-lg p-8 md:grid-cols-2">
          <div className=" order-2 md:order-2">
            <img
              src="/jinmandir/jinalaya-suddhi/img-2.11-1.png"
              alt="Jinalay Preservation"
              className="w-full sm:h-64 object-contain rounded-lg"
            />
          </div>
          <div className=" order-2 md:order-2">
            <img
              src="/jinmandir/jinalaya-suddhi/img-2.11-2.png"
              alt="Jinalay Preservation"
              className="w-full sm:h-64 object-contain rounded-lg"
            />
          </div>
          </div>
      </section>
       <section className="my-12">
        <div className="bg-lighten-bg rounded-lg grid md:grid-cols-3 gap-8 mb-12 items-center">

          <div className=" order-1 md:order-2">
            <img
              src="/jinmandir/jinalaya-suddhi/img-2.10-1.png"
              alt="Jinalay Cleaning"
              className="w-full sm:h-64 object-contain rounded-lg"
            />
          </div>
          <div className=" order-1 md:order-2">
            <img
              src="/jinmandir/jinalaya-suddhi/img-2.10-2.png"
              alt="Jinalay Cleaning"
              className="w-full sm:h-64 object-contain rounded-lg"
            />
          </div>
          <div className=" p-6 order-1 md:order-2">
            <img
              src="/jinmandir/jinalaya-suddhi/img-2.10-3.png"
              alt="Jinalay Cleaning"
              className="w-full sm:h-64 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
      <CounterStatsUI statsData={statsData}/>
    </div>
  );
};

export default Page;
