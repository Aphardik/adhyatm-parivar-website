import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import React from 'react';

export const metadata = {
  title: 'प्रभुभक्ति आदि के उपकरणों का निर्माण | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
               प्रभुभक्ति आदि के उपकरणों का निर्माण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
              कार्य प्रारंभ : वि.सं. २०६८
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow">
             <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed">
जिनको देखते ही हृदय भावों से छलक जाए कला के ऐसे जीवंत नमूने जैसे १४ महास्वप्न, पालना, पोखना, अष्टमंगल, ५६ दिक्कुमारियों की सामग्रियां, स्थापनाजी के लिए कमल, रथ, भंडार, चार-चार फुट के कलश आदि उपकरणों का निर्माण अध्यात्म परिवार द्वारा किया गया है।            </p>
            
          </div>
         
        </div>

      </section>

     
           <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
          प्रभु की माता को आने वाले सपनों की वास्तविक झांकी यहां होती है।
          </h3>

        </div>
                  <div className="grid sm:grid-cols-4 w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-1.png" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-2.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-3.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-4.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-5.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-6.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-7.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/prabhubhakti-upkaran/img-3.55-8.png" alt="" />
          </div>
        
      </section>
       <section className="py-8 px-4">
         <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
           यह पालन इतना जोरदार है तो त्रिशला माताने जो झुलाया होगा वह पालना कैसा होगा?
          </h3>

        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1  gap-8">
            {/* First Image and Text Pair */}
            <div className="flex flex-col  p-6">
              <div className="h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/prabhubhakti-upkaran/img-3.56.png"
                  alt="ap"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
             
            </div>

            {/* Second Image and Text Pair */}
            
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Page;