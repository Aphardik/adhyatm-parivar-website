import React from 'react';

const Page = () => {
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
               प्रभुभक्ति आदि के उपकरणों का निर्माण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
              कार्य प्रारंभ : वि.सं. २०६८
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
            <p className="text-xl leading-relaxed">
जिनको देखते ही हृदय भावों से छलक जाए कला के ऐसे जीवंत नमूने जैसे १४ महास्वप्न, पालना, पोखना, अष्टमंगल, ५६ दिक्कुमारियों की सामग्रियां, स्थापनाजी के लिए कमल, रथ, भंडार, चार-चार फुट के कलश आदि उपकरणों का निर्माण अध्यात्म परिवार द्वारा किया गया है।            </p>
            
          </div>
         
        </div>

      </section>

     
           <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
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
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
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
  );
};

export default Page;