import React from 'react';

const ParishthapanikaSamiti = () => {
  return (
    <div className="bg-white font-body text-gray-800">
      <div className="container mx-auto px-4 py-6 bg-gray-50 rounded">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Left Column: Heading & Description */}
          <div className="md:w-1/3 space-y-4">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white text-4xl font-bold p-4 rounded">
                4.1
              </div>
            </div>
            <h1 className="text-gray-700 text-2xl font-bold font-heading">पारिष्ठापनिका समिति</h1>
            <p className="text-sm text-gray-500 font-semibold">(कार्य प्रारंभ : वि.सं. २०६६)</p>
            <p className="text-base leading-relaxed">
              चारित्र का प्राण है, पांच समिति और तीन गुप्ति। वर्तमान काल में पांचवी समिति का पालन बहुत कठिन बन गया है, यह कौन नहीं जानता है? घने जंगलों के स्थान पर एक को सट कर एक इमारतें की भीड़ में जैसे यह समिति कुचल गई है! ऐसे समय में जिनकी नसों में चारित्र का रक्त बह रहा है,
              <span className="text-gray-700 font-bold"> ऐसे पूज्य कृपानाथ के मार्गदर्शन से एक अद्भुत विकल्प प्राप्त हुआ है।</span>
              देखते ही देखते इसकी सुरभि संपूर्ण भारत में फैल गई। सैकड़ो-हजारों श्रमण-श्रमणियों को चारित्रपालन में सहायक बनने का लाभ मिला अध्यात्म परिवार को!
            </p>
          </div>

          {/* Center Column: Image + Text */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <img
              src="/adhyatm/parishthapanika-samiti/img-3.18.png"
              alt="A rectangular planter with soil"
              className="w-full sm:w-2/3 mb-4 rounded shadow"
            />
            <p className="text-sm font-semibold text-gray-800 px-2">
              संपूर्ण भारत के विविध स्थलों पर बनाई गई ऐसी मात्र परठने की कुंडियों में उपयोग होने वाले स्पेशल कोयले ने दुर्गंध की कंप्लेंट पर पूर्णविराम लगा दिया है!
            </p>
          </div>

          {/* Right Column: Image + Text */}
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <img
              src="/adhyatm/parishthapanika-samiti/img-3.19.png"
              alt="A large indoor area with a roof and a building"
              className="w-full sm:w-2/3 mb-4 rounded shadow"
            />
            <p className="text-base text-gray-700 px-2">
              संपूर्ण भारत के विविध श्रीसंघों में बनाई गई यह स्थंडिलभूमि (डोम)ने जैसे असंभव को संभव कर दिया है!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParishthapanikaSamiti;
