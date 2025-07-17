import React from "react";

const SanskritShikshan = () => {
  return (
    <div className="flex flex-col font-body bg-gray-100 sm:flex-row mx-auto py-6 gap-4 px-4">
      {/* Left Section */}
      <div className="sm:w-1/3 w-full">
        <div className="flex items-center mb-4">
          <div className="bg-gray-800 text-gray-100 text-4xl font-bold p-4 pt-6">
            4.10
          </div>
        </div>dy
        <h1 className="text-gray-700 text-2xl font-heading font-bold mb-2">
          संस्कृत शिक्षण वर्ग (संशिव)...
        </h1>
        <p className="text-gray-600 mb-4 text-sm font-semibold">
          (कार्य प्रारंभ : वि.सं. २०७७)
        </p>
      </div>

      {/* Right Section */}
      <div className="sm:w-2/3 w-full">
        <p className="text-gray-700 mb-2">
          पथप्रदर्शक पूज्यश्री के द्वारा श्रावक भी सरलता से संस्कृत सीख सकें ऐसी पद्धति विकसित की गई है।
          जल्दी से यकीन नहीं होता है परंतु यह वास्तविकता है कि अध्यात्म परिवार द्वारा
          ‘हफ्ते में दो दिन' वाले संशिव प्रकल्प में,
        </p>
        <p className="text-gray-700 mb-2">
          आज मुंबई के कई श्रावक और श्राविकाओं का संस्कृत शिक्षण पूर्णता की ओर अग्रसर है!
        </p>
        <p className="text-gray-700 font-bold">
          लगातार दो वर्षों से यह ज्ञानयज्ञ चल रहा है और आगे भी चलता रहेगा।
        </p>
      </div>
    </div>
  );
};

export default SanskritShikshan;
