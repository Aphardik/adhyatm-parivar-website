import React from "react";

const UshnajalStand = () => {
  return (
    <div className="bg-gray-50 font-body text-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Main Flex Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Text Section */}
          <div className="md:w-1/3 p-4">
            {/* Rating Badge */}
            <div className="bg-gray-700 text-white text-4xl font-bold p-4 pt-4 text-center w-fit mb-4 rounded">
              4.4
            </div>

            {/* Title & Subtitle */}
            <div className="mb-4 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-700 font-heading">
                उष्णजल ठंडा करने का स्टैंड
              </h1>
              <p className="text-sm text-gray-600 font-semibold">
                (कार्य प्रारंभ : वि.सं. २०७७)
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-gray-700">
              गर्मियों में उबाला हुआ पानी जल्दी ठंडा नहीं होता है, इसलिए
              कहीं-कहीं विहारधाम और आयंबिल शालाओं में कई बार आधा गर्म किए हुए
              पानी को बिना उकाले ही ठार (ठंडा) कर दिया जाता है। इस भयंकर दोष का
              विकल्प है:
            </p>
          </div>

          {/* Image and Features - Left */}
          <div className="md:w-1/3 p-4 flex flex-col items-center">
            <img
              src="/adhyatm/jal-stand/img-3.28.png"
              alt="झरने वाला उष्णजल स्टैंड"
              className="w-full max-w-xs rounded shadow"
            />
            <p className="mt-4 text-base text-gray-700 text-center">
              इस स्टैंड की अनेक विशेषताएं हैं: इसमें १२ ट्रैक वाला झरना है।
              पानी इतने ट्रैक्स में घूमता है कि 100° पर गर्म पानी
              नीचे पहुंचते-पहुंचते लगभग 32° तक ठंडा हो जाता है।
            </p>
          </div>

          {/* Image and Features - Right */}
          <div className="md:w-1/3 p-4 flex flex-col items-center">
            <img
              src="/adhyatm/jal-stand/img-3.29.png"
              alt="स्टेनलेस स्टील स्टैंड"
              className="w-full max-w-xs rounded shadow"
            />
            <p className="mt-4 text-base text-gray-700 text-center">
              हल्के एल्युमिनियम के बदले Govt. Approved फ़ूड ग्रेड 'स्टेनलेस स्टील' का उपयोग किया गया है। इसमें नल का उपयोग नहीं होने से जयणा का पालन होता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UshnajalStand;
