import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import CounterStatsUI from '@/app/_components/StatData';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import React from 'react';

export const metadata = {
  title: 'उत्तम भक्तिद्रव्य संशोधन | अध्यात्म विभाग',
  description: '',
}


const BhaktidravyShanshodhan = () => {
                  const statsData = [
    { count: "60", label: "कुल अंदाजन संशोधनीय औषधियां",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "08", label: " आज तक एकत्रित जल के नदियों की संख्या",  color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "120", label: "एकत्रित मिट्टी के तीर्थो की संख्या",  color: "bg-gradient-to-b from-teal-400 to-teal-600" },
   
  ];
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                उत्तम भक्तिद्रव्य संशोधन
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७३
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="py-6 sm:py-8 lg:py-8">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
             <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed">
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
              <div className="bg-lightyellow p-4 rounded text-maroon max-w-4xl mx-auto">
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
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            अभिषेक औषधि...
          </h3>
        </div>
        
        <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow mb-8">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <p className="text-lg text-maroon leading-relaxed">
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
                src="/adhyatm/uttam-bhaktidrivya/img-3.58.jpeg"
              />
            </div>
            <div className="p-4 bg-maroon text-whitey">
              <p className="text-center font-heading font-semibold text-lg">विधिपूर्वक औषधि ग्रहण</p>
            </div>
          </div>

          <div className="flex flex-col   rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 overflow-hidden">
              <img
                alt="विविध प्रकार के जल प्रकल्प"
                className="w-full h-full object-cover"
                src="/adhyatm/uttam-bhaktidrivya/img-3.59.jpeg"
              />
            </div>
            <div className="p-4 bg-maroon text-whitey">
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
            <div className="p-4 bg-maroon text-whitey">
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
                src="/adhyatm/uttam-bhaktidrivya/img-3.61.jpg"
              />
            </div>
            <div className="p-4 bg-maroon text-whitey">
              <p className="text-center font-heading font-semibold text-lg">
                विविध तीर्थों की मूर्तिका (मिट्टी)
              </p>
            </div>
          </div>
        </div>
      </section>
<CounterStatsUI statsData={statsData} textColor="maroon" />
    </div>
    </div>
  );
};

export default BhaktidravyShanshodhan;