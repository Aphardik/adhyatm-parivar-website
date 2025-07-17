import React from "react";

const ViharSuraksha = () => {
  return (
    <div className="font-body bg-white text-gray-800">
      <div className="container mx-auto py-8 px-4">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row gap-4 items-start mb-6">
          <div className="text-4xl bg-gray-800 text-white py-4 px-4 font-bold rounded">
            4.2
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-700 text-2xl font-bold font-heading">
              विहार सुरक्षा
            </h1>
            <p className="text-sm text-gray-500 font-semibold">
              (कार्य प्रारंभ : वि.सं. २०७३)
            </p>
          </div>
        </div>

        {/* Paragraph */}
        <div className="text-lg text-gray-700 leading-relaxed mb-8">
          योगशास्त्र ग्रंथ में श्रामणीक्षेत्र की भक्ति के प्रकारों का वर्णन करते हुए कलिकाल सर्वज्ञ श्री फरमाते हैं कि :{" "}
          <span className="text-gray-700 font-bold">
            श्रावक को श्रमणीवर्ग का दुष्ट और दुराचारी लोगों से रक्षण करना चाहिए।
          </span>{" "}
          अध्यात्म परिवार तो सात क्षेत्र की भक्ति के लिए ही समर्पित है। इस कार्य द्वारा संयमियों की सुरक्षा तथा पैसे आदि के विषय की निश्चिंतता करवाने का लाभ अध्यात्म परिवार को मिल रहा है।
        </div>

        {/* Image Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Image 1 */}
          <div className="p-2">
            <img
              src="/adhyatm/vihar-suraksha/img-3.20.png"
              alt="Group of people walking on a road with a person on a bicycle carrying supplies"
              className="w-full rounded shadow"
            />
          </div>

          {/* Text 1 */}
          <div className="p-2 bg-gray-100 flex items-center justify-center text-base leading-relaxed text-gray-700 text-center">
            विहार में साथ रहने के लिए ट्रेंड, यह स्टाफ साध्वीजी भगवंतों की शाता में निमित्त बनता है।
          </div>

          {/* Image 2 */}
          <div className="p-2">
            <img
              src="/adhyatm/vihar-suraksha/img-3.21.png"
              alt="Person on a bicycle carrying supplies following a group of people walking on a road"
              className="w-full rounded shadow"
            />
          </div>

          {/* Text 2 */}
          <div className="p-2 bg-gray-100 flex items-center justify-center text-base leading-relaxed text-gray-700 text-center">
            विहार चाहे मुंबई से बेंगलुरु का हो या अहमदाबाद से चेन्नई का, अध्यात्म परिवार को संदेश मिलते ही योग्य व्यवस्था हो जाती है!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViharSuraksha;
