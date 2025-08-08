import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'चारित्र उपकरण भक्ति | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
  const statsData = [
    { count: "09", label: "कुल उपकरण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
  ];
  
  return (
    <div className="mx-auto max-w-7xl font-body y min-h-screen">
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-6 sm:p-8 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                चारित्र उपकरण भक्ति
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8">
        <section className="py-8 sm:py-10 lg:py-12">
          <div className="relative rounded-sm p-8 sm:p-12 bg-lightyellow ">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl leading-relaxed text-maroon mb-4">
              वैसे तो यह कार्य जैन शासन में बहुत व्यापक रूप से हो ही रहा है। अध्यात्म परिवार का मुख्य उद्देश्य यह है कि ऐसे उपकरणों से पूज्यों की भक्ति करना जिससे चारित्र ज्यादा उज्जवल रूप से पाला जा सके।
            </p>

          </div>
        </section>

        <section className="pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12">
              
              {/* First Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4 border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.22.jpg"
                    alt="A stack of folded white cloths"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1  p-4 rounded-lg w-full">
                  <p className="text-maroon font-bold text-lg">यह प्योर गर्म कामली</p>
                  <p className="text-maroon  leading-relaxed">
                    अप्काय उपरांत अग्निकाय आदि की विराधना से भी बचाती है!
                  </p>
                </div>
              </div>

              {/* Second Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4    border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.23.jpg"
                    alt="A red pot with a white cloth on top"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1  p-4 rounded-lg w-full">
                  <p className="text-maroon font-bold leading-relaxed text-lg">
                    अब तांबे और प्लास्टिक के घड़ों के उपयोग की जरूरत नहीं है।
                  </p>
                  <p className="text-maroon leading-relaxed">
                    यह लकड़ी का लोट श्रमणसंघ को आत्मविराधना से भी बचाएगा।
                  </p>
                </div>
              </div>

              {/* Third Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4    border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.24.jpg"
                    alt="Pure wool"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1  p-4 rounded-lg w-full">
                  <p className="text-maroon text-xl font-bold  leading-relaxed">
                    यह प्योर ऊन है।
                  </p>
                  <p className="text-maroon  leading-relaxed">
                    अग्निकाय की विराधना से बचाती है।
                  </p>
                </div>
              </div>

              {/* Fourth Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4    border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.25.jpg"
                    alt="Nose string"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1  p-4 rounded-lg w-full">
                  <p className="text-maroon font-bold leading-relaxed text-lg">
                    नाके की डोरी की भी ऐसी ही भूमिका है।
                  </p>
                </div>
              </div>

              {/* Fifth Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4    border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.26.jpg"
                    alt="Silk thread reel"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1  p-4 rounded-lg w-full">
                  <p className="text-maroon text-lg font-bold leading-relaxed">
                    रेशमी डोरी की रील ओघे के पाटे की किनार के लिए है।
                  </p>
                  <p className="text-maroon  leading-relaxed">
                    यह श्रमणीवर्याओं की विशेष भक्ति के लिए है।
                  </p>
                </div>
              </div>

              {/* Sixth Item */}
              <div className="flex flex-col items-center bg-lightyellow rounded-sm p-4    border border-lightpink ">
                <div className="h-64 w-full flex justify-center items-center mb-6  rounded-lg p-4">
                  <img
                    src="/adhyatm/charitra-upkaran-bhakti/img-3.27.jpg"
                    alt="Wooden containers"
                    className="w-full max-w-xs h-full object-contain"
                  />
                </div>
                <div className="text-center space-y-1 p-4 rounded-lg w-full">
                  <p className="text-maroon text-lg font-bold leading-relaxed">
                    प्लास्टिक की टोक्सी का उपयोग न करना पड़े,
                  </p>
                  <p className="text-maroon leading-relaxed">
                    इसलिए विकल्प के रूप में यह काष्ठ की विविध साइज की टोक्सियां हैं।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="pb-8">
          <CounterStatsUI statsData={statsData}/>
        </div>
      </div>
    </div>
  );
};

export default Page;