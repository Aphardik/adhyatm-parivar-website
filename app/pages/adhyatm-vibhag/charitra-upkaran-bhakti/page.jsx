import CounterStatsUI from "@/app/_components/StatData";
import React from "react";

const Page = () => {
           const statsData = [
    { count: "09", label: "कुल उपकरण", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },

  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                चारित्र उपकरण भक्ति
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-semibold mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-heading mb-4">
            वैसे तो यह कार्य जैन शासन में बहुत व्यापक रूप से हो ही रहा है। अध्यात्म परिवार का मुख्य उद्देश्य यह है कि ऐसे उपकरणों से पूज्यों की भक्ति करना जिससे चारित्र ज्यादा उज्जवल रूप से पाला जा सके।
          </p>
          <p className="text-heading font-bold text-xl">इसकी एक झलक यह है :</p>
        </div>
      </section>

      <section className="py-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Main Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* First Item */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.22.png"
                  alt="A stack of folded white cloths"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-heading  text-lg">यह प्योर गर्म कामली</p>
                <p className="text-heading font-bold leading-relaxed">
                  अप्काय उपरांत अग्निकाय आदि की विराधना से भी बचाती है!
                </p>
              </div>
            </div>

            {/* Second Item */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.23.png"
                  alt="A red pot with a white cloth on top"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center text-lg space-y-2">
                <p className="text-heading leading-relaxed">
                  अब तांबे और प्लास्टिक के घड़ों के उपयोग की जरूरत नहीं है।
                </p>
                <p className="text-heading font-bold leading-relaxed">
                  यह लकड़ी का लोट श्रमणसंघ को आत्मविराधना से भी बचाएगा।
                </p>
              </div>
            </div>

                       <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.24.png"
                  alt="A red pot with a white cloth on top"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-heading text-lg leading-relaxed">
                 यह प्योर ऊन है। 
                </p>
                <p className="text-heading font-bold leading-relaxed">
                 अग्निकाय की विराधना से बचाती है।
                </p>
              </div>
            </div>

                       <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.25.png"
                  alt="A red pot with a white cloth on top"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                
                <p className="text-heading font-bold leading-relaxed">
                  नाके की डोरी की भी ऐसी ही भूमिका है।
                </p>
              </div>
            </div>

               <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.26.png"
                  alt="A red pot with a white cloth on top"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-heading text-lg leading-relaxed">
                 रेशमी डोरी की रील ओघे के पाटे की किनार के लिए है।
                </p>
                <p className="text-heading font-bold leading-relaxed">
                 यह श्रमणीवर्याओं की विशेष भक्ति के लिए है।
                </p>
              </div>
            </div>

               <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/charitra-upkaran-bhakti/img-3.27.png"
                  alt="A red pot with a white cloth on top"
                  className="w-full max-w-xs h-full object-contain"
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-heading text-lg leading-relaxed">
                 प्लास्टिक की टोक्सी का उपयोग न करना पड़े,
                </p>
                <p className="text-heading font-bold leading-relaxed">
                 इसलिए विकल्प के रूप में यह काष्ठ की विविध साइज की टोक्सियां हैं।
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
        <CounterStatsUI statsData={statsData}/>
    </div>
  );
};

export default Page;