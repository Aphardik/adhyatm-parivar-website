import React from 'react';

const BhaktidravyShanshodhan = () => {
  return (
    <div className="flex flex-col md:flex-row font-body gap-4 py-6">
      {/* Left Section */}
      <div className="md:w-1/3">
        <div className="text-gray-200 inline-block text-5xl font-bold p-4 pt-8 bg-gray-800 mb-4">
          4.14
        </div>
        <div className="text-gray-800 font-heading text-2xl font-bold mb-2">
          उत्तम भक्तिद्रव्य संशोधन...
        </div>
        <div className="text-gray-800 text-sm font-semibold mb-4">
          (कार्य प्रारंभ : वि.सं. २०७३)
        </div>
        <p className="text-gray-800 mb-4">
          यह एक ऐसा प्रकल्प है जिसमें अध्यात्म परिवार के संशोधन रसिक लोग सैकड़ो घंटे देकर,
          हजारों किलोमीटर का प्रवास करके, अरे, वन विभाग की अनुमति से जंगल के अंदर परिभ्रमण करके
          समुद्रमंथन जैसी मेहनत करते हैं और अंत में जब 'अमृत' जैसा परिणाम मिलता है,
          तब मेहनत सफल लगने का एहसास होता है। ऐसी कई बातें जानने जैसी हैं....
        </p>
        <img
          alt="A document from the Ministry of Environment, Forest and Climate Change"
          className="mb-4"
          src="/adhyatm/uttam-bhaktidrivya/img-3.57.png"
          width="300"
          height="200"
        />
        <div className="bg-gray-50 p-4 rounded text-gray-800">
          <p>
            प्रभु शासन के प्रभाव से, भारत की सेंट्रल गवर्नमेंट द्वारा देश के सभी जंगलों में से
            औषधि प्राप्त करने की अनुमति मिल जाने पर अध्यात्म परिवार का उत्साह १०० गुना बढ़ गया है।
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-gray-100 border border-golden p-8 md:w-2/3 text-gray-800">
        <div className="mb-4">
          <h2 className="text-xl font-heading font-bold mb-2">अभिषेक औषधि...</h2>
          <p className="mb-4">
            दवा के लिए त्रिफला जैसी एक औषधि की कीमत देखें और १८ अभिषेक के पूरे पैकेट की कीमत देखें
            तो शंका हुए बिना नहीं रहती है कि क्या इस पैकेट में वास्तविक औषधि है? इसलिए अध्यात्म परिवार
            ने शुद्ध औषधियों के लिए प्रयत्न शुरू किया है। साथ ही साथ विविध तीर्थों की मिट्टी तथा
            नदियों का जल भी एकत्रित किया जा रहा है।
          </p>
          <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-4">
            <div className="flex flex-col border border-golden h-full">
              <div className="flex-1 overflow-hidden" style={{ height: '200px' }}>
                <img
                  alt="विविध प्रकार के औषधि प्रकल्प"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.58.png"
                />
              </div>
              <p className="text-center font-heading font-semibold mt-2">विधिपूर्वक औषधि ग्रहण</p>
            </div>
            <div className="flex flex-col border border-golden h-full">
              <div className="flex-1 overflow-hidden" style={{ height: '200px' }}>
                <img
                  alt="विविध प्रकार के जल प्रकल्प"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.59.png"
                />
              </div>
              <p className="text-center font-heading font-semibold mt-2">विधिपूर्वक जल ग्रहण</p>
            </div>
            <div className="flex flex-col border border-golden h-full">
              <div className="flex-1 overflow-hidden" style={{ height: '200px' }}>
                <img
                  alt="विविध नदियों का जल"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.60.png"
                />
              </div>
              <p className="text-center font-heading font-semibold mt-2">विविध नदियों का जल</p>
            </div>
            <div className="flex flex-col h-full md:col-span-3">
              <div
                className="flex-1 overflow-hidden md:max-w-xs mx-auto"
                style={{ height: '200px' }}
              >
                <img
                  alt="विविध गाँवों की मूर्तियाँ (मिट्टी)"
                  className="w-full h-full object-cover"
                  src="/adhyatm/uttam-bhaktidrivya/img-3.61.png"
                />
              </div>
              <p className="text-center font-heading font-semibold mt-2">
                विविध तीर्थों की मूर्तिका (मिट्टी)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhaktidravyShanshodhan;
