import React from 'react';

const VibhagDescription = () => {
  const vibhags = [
    {
      title: "जिनमूर्ति विभाग",
      description: "समग्र भारत में रही प्राचीन से लेकर आधुनिक काल तक की सभी जिनप्रतिमाओं की सुरक्षा के लिए विज्ञानसिद्ध परंपरागत पद्धति से लेप - ऑप आदि कार्य। नई, सुंदर पाषाण एवं धातु प्रतिमाओ का निर्माण, प्रतिमाओं की अशतना का निवारण आदि।",
      icon: "/jinpratima.png"
    },
    {
      title: "जिनमंदिर विभाग", 
      description: "समग्र भारत के जिनमंदिरों के लिए लीकेज समस्या जैसी समस्याओं का निवारण, यथासंभव हर वर्ष शुद्धि, नूतन जिनालय निर्माण के लिए शिल्पशाला आदि कार्य।",
      icon: "/jinmandir.png"
    },
    {
      title: "जिनागम विभाग",
      description: "समग्र भारत में एवं विदेशों में भी स्थित जैन हस्तप्रतों का सूचीकरण करके १.५ करोड़ से भी ज्यादा श्लोकप्रमाण, करीब १५००० प्राचीन जैन ग्रंथों का अच्छी तरह से संपादन एवं विविध पुस्तकों का प्रकाशन वगैरह।",
      icon: "/jinagam.png"
    },
    {
      title: "अध्यात्म विभाग",
      description: "जैनशासन के चार अंग - साधु, साध्वी, श्रावक एवं श्राविका - इन सबको धर्म की साधना में जहां-जहां बाधाए आती हो उन समस्याओं के निवारण के लिए संशोधन करके समाधान को क्रियान्वित करना। इसमें करीब 18 से 20 प्रकार के कार्य चल रहे हैं।",
      icon: "/adhyatm.png"
    }
  ];

  return (
    <div className="font-body  sm:px-4">
      <div className="max-w-5xl pt-20 mx-auto">
        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          <div className="space-y-16  p-8 md:p-16">
            {vibhags.map((vibhag, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8 lg:gap-16`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="inline-block">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#01044c] mb-4 font-heading">
                      {vibhag.title}
                    </h3>
                    <p className="text-content text-base md:text-lg max-w-lg">
                      {vibhag.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-transparent rounded-full flex items-center justify-center">
                    <img className='w-[5.5rem] md:w-[7.5rem] rounded-full h-[5.5rem] md:h-[7.5rem] object-cover' src={vibhag.icon} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden">
          <div className="grid gap-6">
            {vibhags.map((vibhag, index) => (
              <div
                key={index}
                className="  p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-lighten-bg rounded-full flex items-center justify-center">
                      <img className='w-16 h-16 rounded-full object-cover' src={vibhag.icon} alt="" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#01044c] mb-2 font-heading">
                      {vibhag.title}
                    </h3>
                    <p className="text-content text-sm leading-relaxed">
                      {vibhag.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VibhagDescription;