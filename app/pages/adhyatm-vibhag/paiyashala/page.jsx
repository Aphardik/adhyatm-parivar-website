import React from "react";

const PrakritTeachingSection = () => {
  return (
    <div className="flex flex-col font-body bg-gray-100 sm:flex-row mx-auto p-6 gap-4">
      {/* Left Section */}
      <div className="w-full sm:w-1/3">
        <div className="flex items-center mb-4">
          <div className="bg-gray-800 text-gray-100 text-4xl font-bold p-4 pt-6">
            4.11
          </div>
        </div>
        <h1 className="text-gray-800 text-2xl font-bold mb-2 font-heading">
          पाइयशाला-प्राकृत शिक्षण शाला...
        </h1>
        <p className="text-gray-700 mb-4 text-sm font-semibold">
          (कार्य प्रारंभ : वि.सं. २०७९)
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-2/3 sm:p-6">
        <p className="text-gray-700 mb-2">
          जो भाषा प्रभु वीर के मूल उपदेशों को अपने अंदर समाकर बैठी है, उस भाषा
          का ठोस और सरल पद्धति वाला अध्ययन चतुर्विध संघ कर सके इसलिए यह अद्भुत
          प्रकल्प फिलहाल पूज्य श्रमणी भगवंतो के लिए कार्यरत है। धीरे-धीरे सकल
          संघ के लिए कार्यरत बनेगा!
        </p>
      </div>
    </div>
  );
};

export default PrakritTeachingSection;
