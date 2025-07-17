import React from "react";

const CharitraUpkaranBhakti = () => {
  return (
    <div className="bg-white text-gray-800 font-body">
      <div className="container mx-auto py-8 px-4">
        {/* Header and Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <div className="flex items-start mb-4">
              <div className="bg-gray-800 text-white text-4xl font-bold p-4 pt-4 rounded">
                4.3
              </div>
              <div className="ml-4">
                <h1 className="text-gray-800 text-2xl font-bold font-heading">
                  चारित्र उपकरण भक्ति
                </h1>
                <p className="text-gray-600 text-sm font-semibold">
                  (कार्य प्रारंभ : वि.सं. २०७७)
                </p>
              </div>
            </div>
            <p className="mb-2 text-base text-gray-700">
              वैसे तो यह कार्य जैन शासन में बहुत व्यापक रूप से हो ही रहा है।
              अध्यात्म परिवार का मुख्य उद्देश्य यह है कि ऐसे उपकरणों से पूज्यों की
              भक्ति करना जिससे चारित्र ज्यादा उज्जवल रूप से पाला जा सके।
            </p>
            <p className="text-gray-800 font-bold">इसकी एक झलक यह है :</p>
          </div>

          {/* Image 1 */}
          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.22.png"
              alt="A stack of folded white cloths"
              className="mx-auto mb-2 w-48 h-auto"
            />
            <p className="text-gray-700">यह प्योर गर्म कामली</p>
            <p className="text-gray-700">
              अप्काय उपरांत अग्निकाय आदि की विराधना से भी बचाती है!
            </p>
          </div>

          {/* Image 2 */}
          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.23.png"
              alt="A red pot with a white cloth on top"
              className="mx-auto mb-2 w-48 h-auto"
            />
            <p className="text-gray-700">
              अब तांबे और प्लास्टिक के घड़ों के उपयोग की जरूरत नहीं है।
            </p>
            <p className="text-gray-700">
              यह लकड़ी का लोट श्रमणसंघ को आत्मविराधना से भी बचाएगा।
            </p>
          </div>
        </div>

        {/* Additional Items */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-gray-50 p-6 rounded">
          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.24.png"
              alt="A stack of white wool"
              className="mx-auto mb-2 w-40 h-auto"
            />
            <p className="text-gray-700">
              यह प्योर ऊन है। अग्निकाय की विराधना से बचाती है।
            </p>
          </div>

          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.25.png"
              alt="A stack of white wool rolls"
              className="mx-auto mb-2 w-40 h-auto"
            />
            <p className="text-gray-700">नाके की डोरी की भी ऐसी ही भूमिका है।</p>
          </div>

          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.26.png"
              alt="Two spools of silk thread"
              className="mx-auto mb-2 w-40 h-auto"
            />
            <p className="text-gray-700">
              रेशमी डोरी की रील ओघे के पाटे की किनार के लिए है।
            </p>
            <p className="text-gray-700">
              यह श्रमणीवर्याओं की विशेष भक्ति के लिए है।
            </p>
          </div>

          <div className="text-center text-sm font-semibold">
            <img
              src="/adhyatm/charitra-upkaran-bhakti/img-3.27.png"
              alt="A set of wooden bowls"
              className="mx-auto mb-2 w-40 h-auto"
            />
            <p className="text-gray-700">
              प्लास्टिक की टोक्सी का उपयोग न करना पड़े,
            </p>
            <p className="text-gray-700">
              इसलिए विकल्प के रूप में यह काष्ठ की विविध साइज की टोक्सियां हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharitraUpkaranBhakti;
