'use client'
import React from 'react';

const JivantDrishyawali = () => {
  return (
    <div className="mx-auto font-body text-gray-800 py-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="flex items-center mb-4">
            <div className="bg-gray-700 text-white text-4xl font-bold p-4">
              4.12
            </div>
          </div>
          <h1 className="text-gray-700 text-3xl font-bold font-heading mb-2">
            जीवंत दृश्यावली....
          </h1>
          <p className="text-gray-600 mb-4">(कार्य प्रारंभ : वि.सं.२०७१)</p>
          <p className="mb-4">
            अध्यात्म परिवार द्वारा हृदय को वैराग्यरस से भिंजा दे और शासनखुमारी से छलका दे
            ऐसी विविध जीवंत दृश्यावली (भाववर्धक नाटक) तैयार किए गए हैं।
          </p>
          <p className="mb-4">
            इसमें विशेष तौर पर शास्त्र तथा महापुरुषों की मर्यादा अखंडित रहे इस प्रकार भगवान,
            साधु आदि महापुरुषों के किरदार निभाए बिना मात्र बोधदायक प्रसंग दर्शाए गए हैं।
          </p>
          <p className="mb-4">
            उन प्रस्तुतियों को देखने के बाद दर्शकों में एक अलग ही संवेदना पैदा होती है।
            अभी तक 'भवप्रपंच', 'आनंदक्रांति' तथा 'शौर्यगाथा' जैसी दृश्यावली कई लोगों के जीवन
            परिवर्तन में आधार बनी है।
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <img
                src="/adhyatm/jivant-drishyawali/img-3.52.png"
                alt="A theatrical performance with actors in traditional attire"
                className="w-full"
                width={300}
                height={200}
              />
            </div>
            <div className="col-span-1">
              <img
                src="/adhyatm/jivant-drishyawali/img-3.53.png"
                alt="A theatrical performance with actors in traditional attire"
                className="w-full"
                width={300}
                height={200}
              />
            </div>
            <div className="col-span-2 flex justify-center">
              <img
                src="/adhyatm/jivant-drishyawali/img-3.54.png"
                alt="A theatrical performance with actors in traditional attire"
                className="w-1/2"
                width={300}
                height={200}
              />
            </div>
          </div>
          <p className="my-4 font-semibold text-center sm:w-1/3 mx-auto">
            <span className="text-gray-700 font-bold">'शौर्यगाथा'</span> के ऐसे दृश्यों ने
            अच्छे-अच्छे की आंखें नम कर दी !
          </p>
        </div>
      </div>
    </div>
  );
};

export default JivantDrishyawali;
