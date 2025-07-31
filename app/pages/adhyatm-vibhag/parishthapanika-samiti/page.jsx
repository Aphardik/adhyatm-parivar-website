import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                परिष्ठापानिका समिति सुरक्षा मात्रु की कुंडी निर्माण स्थंडिल भूमि (डेम) निर्माण
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-semibold mb-1 sm:mb-2">
                (कार्य प्रारंभ : वि.सं. २०६६)
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-heading">
            चारित्र का प्राण है, पांच समिति और तीन गुप्ति। वर्तमान काल में पांचवी समिति का पालन बहुत कठिन बन गया है, यह कौन नहीं जानता है? घने जंगलों के स्थान पर एक को सट कर एक इमारतें की भीड़ में जैसे यह समिति कुचल गई है! ऐसे समय में जिनकी नसों में चारित्र का रक्त बह रहा है,{" "}
            <span className="text-content font-bold">
              ऐसे पूज्य कृपानाथ के मार्गदर्शन से एक अद्भुत विकल्प प्राप्त हुआ है।
            </span>{" "}
            देखते ही देखते इसकी सुरभि संपूर्ण भारत में फैल गई। सैकड़ो-हजारों श्रमण-श्रमणियों को चारित्रपालन में सहायक बनने का लाभ मिला अध्यात्म परिवार को!
          </p>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Left Column - First Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="flex flex-col sm:flex-row gap-4 h-64 w-full justify-center items-center mb-6">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-1.png"
                  alt="A rectangular planter with soil - type 1"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.18-2.png"
                  alt="A rectangular planter with soil - type 2"
                  className="w-full sm:w-1/2 h-full object-cover rounded-lg shadow"
                />
              </div>
              <p className="text-heading font-semibold text-center leading-relaxed">
                संपूर्ण भारत के विविध स्थलों पर बनाई गई ऐसी मात्र परठने की कुंडियों में उपयोग होने वाले स्पेशल कोयले ने दुर्गंध की कंप्लेंट पर पूर्णविराम लगा दिया है!
              </p>
            </div>

            {/* Right Column - Second Image */}
            <div className="flex flex-col items-center bg-lighten-bg rounded-lg p-6">
              <div className="h-64 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/parishthapanika-samiti/img-3.19.png"
                  alt="A large indoor area with a roof and a building"
                  className="w-full max-w-sm h-full object-cover rounded-lg shadow"
                />
              </div>
              <p className="text-heading font-semibold text-center leading-relaxed">
                संपूर्ण भारत के विविध श्रीसंघों में बनाई गई यह स्थंडिलभूमि (डोम)ने जैसे असंभव को संभव कर दिया है!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;