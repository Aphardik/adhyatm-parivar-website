import React from 'react';

const DecorativeDisplay = () => {
  return (
    <div className="mx-auto py-6 font-body">
      {/* First Row with Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* First Column */}
        <div className="flex flex-col items-start md:items-start">
          <div className="bg-gray-700 text-white text-4xl font-bold p-4 mb-4">
            4.13
          </div>
          <h1 className="text-gray-700 font-heading text-2xl font-bold mb-2 md:text-left">
            प्रभुभक्ति आदि के उपकरणों का निर्माण...
          </h1>
          <p className="text-gray-700 text-sm font-semibold mb-4">
            (कार्य प्रारंभ : वि.सं. २०६८)
          </p>
          <p className="text-gray-700 text-base">
            जिनको देखते ही हृदय भावों से छलक जाए कला के ऐसे जीवंत नमूने जैसे
            १४ महास्वप्न, पालना, पोखना, अष्टमंगल, ५६ दिक्कुमारियों की सामग्रियां,
            स्थापनाजी के लिए कमल, रथ, भंडार, चार-चार फुट के कलश आदि उपकरणों का
            निर्माण अध्यात्म परिवार द्वारा किया गया है।
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          <img
            src="/adhyatm/prabhubhakti-upkaran/img-3.55.png"
            alt="Decorative cradle with figures"
            width={300}
            height={300}
            className="mb-4 sm:w-1/2 mx-auto"
          />
          <p className="text-gray-800 bg-gray-200 font-semibold text-base p-4 rounded text-center">
            प्रभु की माता को आने वाले सपनों की वास्तविक झांकी यहां होती है।
          </p>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center">
          <img
            src="/adhyatm/prabhubhakti-upkaran/img-3.56.png"
            alt="Decorative elephant statue"
            width={200}
            height={200}
            className="w-3/4 md:w-auto"
          />
          <p className="text-gray-800 bg-gray-200 font-semibold text-base p-4 rounded text-center">
            यह पालन इतना जोरदार है तो त्रिशला माताने जो झुलाया होगा वह पालना कैसा होगा?
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecorativeDisplay;
