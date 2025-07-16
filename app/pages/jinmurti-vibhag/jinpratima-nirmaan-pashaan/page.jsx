import React from 'react'

const Page = () => {
  return (
          <div className="container mx-auto font-body">
<header className="bg-gray-100 border border-gray-200">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-300 text-gray-800 text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.2
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900">जिनप्रतिमा निर्माण - पाषाण</h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium mb-1 sm:mb-2">(अध्यात्म शिल्पशाला) &nbsp; कार्य आरंभ: वि.सं. २०६४</p>
            </div>
          </div>
        </div>
      </header>


<div className="py-4 sm:py-6 lg:py-8 lg:px-0">
      <div className=" border-l-4 border-gray-700 rounded-md p-4 bg-gray-200">
        <p className="text-lg leading-relaxed">
          गुजरात के हिम्मतनगर शहर में अध्यात्म परिवार द्वारा प्रारंभ अध्यात्म
          शिल्पशाला का उपक्रम एक बहुआयामी योजना है। जिसकी बातें अत्यंत रोमांचक हैं।
        </p>
      </div>

      <div className="rounded my-8">
        <h2 className="text-gray-800 text-2xl font-heading font-bold mb-6 text-center">
          पाषाण की जिनप्रतिमा का निर्माण...
        </h2>
        <p className="mb-6 text-center text-lg">
          आज ज्यादातर प्रतिमाजी के पाषाण के लिए 'सफेदी' यही अग्रिम और एकमात्र मापदंड बन गया है।
          वास्तव में क्रम ऐसा होना चाहिए :
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* <!-- Point 1 --> */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">1</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 text-center font-heading">पोगर परीक्षण :</h3>
            <p className="text-sm leading-relaxed">
              जो पाषाण मोटी पोगर का होता है। वह ज्यादा पानी एब्ज़ोर्ब करता है, जिसके परिणाम स्वरुप
              प्रतिमाजी कुछ वर्षों में नष्टप्राय: हो जाएगी। इसलिए यह प्रथम मापदंड है।
            </p>
          </div>

          {/* <!-- Point 2 --> */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">2</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 text-center font-heading">वरण विचार :</h3>
            <p className="text-sm leading-relaxed">
              पाषाण के जिस भाग में सल्फर (वरण) का प्रमाण ज्यादा होता है,
              वहां पर हल्की सी ठोकर या मार लगने पर ही प्रतिमाजी का टुकड़ा पड़ जायेगा।
            </p>
          </div>

          {/* <!-- Point 3 --> */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">3</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 text-center font-heading">शुक्लता :</h3>
            <p className="text-sm leading-relaxed">
              ऊपर की दो चीजें सुनिश्चित करने के बाद फिर तीसरे क्रम पर
              भावोत्पादकताके लिए शुक्लता (सफेदी-बेदागपना) अवश्य देखना चाहिए।
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Image Grid Section --> */}
      <div className="grid md:grid-cols-5 gap-6 text-sm font-semibold text-gray-700">
        {/* <!-- Image 1 --> */}
        <div className="md:col-span-2 bg-white rounded-lg p-4 shadow-sm">
          <img
            src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.13.png"
            alt="पाषाण के पीस में छोटा होल करके स्टेन डाला जाता है।"
            className="w-full mb-4 rounded-lg"
            height="150"
            width="150"
          />
          <p className="text-center leading-relaxed">
            पत्थर के पीस में छोटा होल करके स्टेन डाला जाता है। उसकी ललामी जितनी ज्यादा फैलती है
            उतनी मोटी पोगरका पाषाण कहा जाता है। वह प्रतिमाजी के लिए उपयोग नहीं किया जाता है।
          </p>
        </div>

        {/* <!-- Image 2 --> */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <img
            src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.14.png"
            alt="यह जो लाइन दिख रही है, वह वरण है।"
            className="w-full mb-4 rounded-lg"
            height="150"
            width="150"
          />
          <p className="text-center leading-relaxed">
            यह जो लाइन दिख रही है, वह वरण है। यह अत्यंत जोखमी है।
          </p>
        </div>

        {/* <!-- Image 3 --> */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <img
            src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.15.png"
            alt="मिट्टी का नयनाकर्षक मॉडल"
            className="w-full mb-4 rounded-lg"
            height="150"
            width="150"
          />
          <p className="text-center leading-relaxed">
            शास्त्रोक्त माप अनुसार सर्वप्रथम मिट्टी का नयनाकर्षक मॉडल बनाया जाता है ।
          </p>
        </div>

        {/* <!-- Image 4 + 5 --> */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="space-y-2 mb-4">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.16.png"
              alt="3D स्कैन और एडिटिंग"
              className="w-full rounded-lg"
              height="75"
              width="150"
            />
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.17.png"
              alt="पाँचवी छवि"
              className="w-full rounded-lg"
              height="75"
              width="150"
            />
          </div>
          <p className="text-center leading-relaxed">
            उसको 3D स्कैन करके कंप्यूटर द्वारा बारीक एडिटिंग से सुंदर घाट दिया जाता है।
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page