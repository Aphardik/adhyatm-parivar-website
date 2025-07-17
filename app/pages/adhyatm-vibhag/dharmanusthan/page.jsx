import React from "react";

const DharmaPage = () => {
  return (
    <div className="text-gray-800 font-body mx-auto py-4">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-2/3 p-4">
          <div className="inline-block">
            <div className="bg-gray-800 text-gray-100 text-4xl font-bold p-4 pt-4">
              4.6
            </div>
          </div>

          <div className="bg-white py-4">
            <h1 className="text-gray-800 font-heading text-2xl font-bold mb-2">
              धर्मानुष्ठान सुशोभन सामग्रियों की उपलब्धि ...
            </h1>
            <p className="text-gray-600 text-sm font-semibold mb-4">
              (कार्य प्रारंभ : वि.सं. २०७६)
            </p>

            <div className="flex flex-col md:flex-row mb-4">
              <div className="md:w-1/2 p-2">
                <img
                  alt="Two ornate vases with intricate designs"
                  src="/adhyatm/dharmanusthan/img-3.42.png"
                  className=""
                />
              </div>
              <div className="md:w-1/2 p-2">
                <p className="text-gray-700">
                  जन हो या पूजा, महोत्सव हो या महापूजा, वंदना हो या संवेदना, तमाम
                  धर्मानुष्ठानों में भावों में वृद्धिका कार्य करने वाले चार फुट के
                  कलश जैसी अनेक यूनिक सामग्री परिवार द्वारा संग्रहित की गई है ।
                  तथा सभी को बिना किसी मूल्य उपयोग करने के लिए उपलब्ध की जा रही है ।
                  आज तक इन सैकड़ों आइटम के संग्रह द्वारा लगभग ४०० अवसरों को शोभायमान
                  किया है।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:w-1/3 px-16 py-4 bg-gray-50">
          <div className="flex flex-col items-center gap-2 justify-center">
            <h3 className="font-bold text-lg font-heading text-gray-800">
              इन सामग्रियों की एक अनेरी झलक!
            </h3>
            <img
              alt="Various golden decorative items on a wooden table"
              src="/adhyatm/dharmanusthan/img-3.43.png"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DharmaPage;
