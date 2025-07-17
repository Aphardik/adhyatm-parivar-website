import React from 'react';

export default function AnusthanAyojan() {
  return (
    <div className="bg-gray-100 font-body text-gray-800 mx-auto p-6 mt-6">
      {/* Main Container: Makes it responsive */}
      <div className="flex md:flex-row flex-col items-center gap-6">
        {/* Left Side: Heading & Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="inline-block bg-gray-800 text-gray-200 text-4xl font-bold py-2 px-4 rounded mb-4">
            4.8
          </div>
          <h1 className="text-2xl font-bold font-heading">अनुष्ठान आयोजन...</h1>
          <p className="text-sm font-semibold mt-1">(कार्य प्रारंभ : वि.सं.२०६५)</p>
          <p className="mt-4 leading-relaxed">
            अध्यात्म परिवार द्वारा सामूहिक दीक्षा, उपधान तप, वाचनाश्रेणी, S3 विशिष्ट प्रश्नोत्तरी प्रवचन, प्रतिष्ठा महोत्सव, महापूजाएं और हाल ही में एक कदम आगे बढ़कर ब्रह्मयात्रा आदि जैसे अनुष्ठानों का आयोजन होता है कि जो हजारों के जीवन में बोधिबीज डालने का कार्य करते हैं। थोड़ी झांकी :
          </p>
        </div>

        {/* Right Side: Image & Description */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <img
            src="/adhyatm/anusthan-aayojan/img-3.47.png"
            alt="Spiritual event"
            className="rounded shadow-lg w-full max-w-sm md:max-w-full"
          />
          <p className="text-base font-semibold font-heading text-center md:text-left mt-4">
            उपधान की साधना जीवन की दिशा बदल देती है।
          </p>
        </div>
      </div>

      {/* Second Section - Image Layout */}
      <div className="container mx-auto mt-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* First Image with Description */}
          <div className="flex items-center">
            <img
              alt="Placeholder image of 150x150 pixels"
              className="w-1/2 md:w-1/2"
              src="/adhyatm/anusthan-aayojan/img-3.49.png"
              width="150"
              height="150"
            />
            <div className="ml-4">
              <h2 className="text-lg font-heading font-bold">वाचना- श्रेणी</h2>
              <p className="text-gray-600 font-semibold">
                अब तक वाचना- श्रेणी में लगभग २५,००० श्रोताओंने जिनवाणी पान किया है।
              </p>
            </div>
          </div>

          {/* Second Image with Description */}
          <div className="flex items-center">
            <img
              alt="Placeholder image of 150x150 pixels"
              className="w-1/2 md:w-1/2"
              src="/adhyatm/anusthan-aayojan/img-3.50.png"
              width="150"
              height="150"
            />
            <div className="ml-4">
              <h2 className="text-lg font-heading font-bold">ब्रह्मयात्रा</h2>
              <p className="text-gray-600 font-semibold">
                'ब्रह्मयात्रा' के अंतर्गत १५ से २५ वर्ष के युवा नेमिनाथ प्रभु के प्राचीन तीर्थों की यात्रा करके धन्य बने!
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full">
          <img
            alt="Placeholder image of 1200x400 pixels"
            className="w-full"
            src="/adhyatm/anusthan-aayojan/img-3.48.png"
            width="1200"
            height="400"
          />
        </div>
      </div>
    </div>
  );
}