import React from 'react';

const BhaktidravyShanshodhan = () => {
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                उत्तम भक्तिद्रव्य संशोधन...
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७३
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
            <p className="text-xl leading-relaxed">
              यह एक ऐसा प्रकल्प है जिसमें अध्यात्म परिवार के संशोधन रसिक लोग सैकड़ो घंटे देकर,
              हजारों किलोमीटर का प्रवास करके, अरे, वन विभाग की अनुमति से जंगल के अंदर परिभ्रमण करके
              समुद्रमंथन जैसी मेहनत करते हैं और अंत में जब 'अमृत' जैसा परिणाम मिलता है,
              तब मेहनत सफल लगने का एहसास होता है। ऐसी कई बातें जानने जैसी हैं....
            </p>
          </div>
        </div>
      </section>

      {/* Document Image Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col p-6">
              <div className="w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/uttam-bhaktidrivya/img-3.57.png"
                  alt="A document from the Ministry of Environment, Forest and Climate Change"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
              <div className="bg-lighten-bg p-4 rounded text-heading max-w-4xl mx-auto">
                <p className="text-center text-lg">
                  प्रभु शासन के प्रभाव से, भारत की सेंट्रल गवर्नमेंट द्वारा देश के सभी जंगलों में से
                  औषधि प्राप्त करने की अनुमति मिल जाने पर अध्यात्म परिवार का उत्साह १०० गुना बढ़ गया है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            अभिषेक औषधि...
          </h3>
        </div>
        
        <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg mb-8">
          <p className="text-xl leading-relaxed">
            दवा के लिए त्रिफला जैसी एक औषधि की कीमत देखें और १८ अभिषेक के पूरे पैकेट की कीमत देखें
            तो शंका हुए बिना नहीं रहती है कि क्या इस पैकेट में वास्तविक औषधि है? इसलिए अध्यात्म परिवार
            ने शुद्ध औषधियों के लिए प्रयत्न शुरू किया है। साथ ही साथ विविध तीर्थों की मिट्टी तथा
            नदियों का जल भी एकत्रित किया जा रहा है।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 overflow-hidden">
              <img
                alt="विविध प्रकार के औषधि प्रकल्प"
                className="w-full h-full object-cover"
                src="/adhyatm/uttam-bhaktidrivya/img-3.58.png"
              />
            </div>
            <div className="p-4">
              <p className="text-center font-heading font-semibold text-lg">विधिपूर्वक औषधि ग्रहण</p>
            </div>
          </div>

          <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 overflow-hidden">
              <img
                alt="विविध प्रकार के जल प्रकल्प"
                className="w-full h-full object-cover"
                src="/adhyatm/uttam-bhaktidrivya/img-3.59.png"
              />
            </div>
            <div className="p-4">
              <p className="text-center font-heading font-semibold text-lg">विधिपूर्वक जल ग्रहण</p>
            </div>
          </div>

          <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 overflow-hidden">
              <img
                alt="विविध नदियों का जल"
                className="w-full h-full object-cover"
                src="/adhyatm/uttam-bhaktidrivya/img-3.60.png"
              />
            </div>
            <div className="p-4">
              <p className="text-center font-heading font-semibold text-lg">विविध नदियों का जल</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 px-4">
          <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg max-w-md">
            <div className="h-96 overflow-hidden">
              <img
                alt="विविध गाँवों की मूर्तियाँ (मिट्टी)"
                className="w-full h-full object-cover"
                src="/adhyatm/uttam-bhaktidrivya/img-3.61.png"
              />
            </div>
            <div className="p-4">
              <p className="text-center font-heading font-semibold text-lg">
                विविध तीर्थों की मूर्तिका (मिट्टी)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BhaktidravyShanshodhan;