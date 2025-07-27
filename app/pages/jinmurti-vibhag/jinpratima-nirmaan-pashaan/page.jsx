import React from "react";

const Page = () => {
  return (
    <div className="container bg-background mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                जिनप्रतिमा निर्माण - पाषाण
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                (अध्यात्म शिल्पशाला) &nbsp; कार्य आरंभ: वि.सं. २०६४
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-md p-4 bg-lighten-bg">
          <p className="text-xl leading-relaxed">
            गुजरात के हिम्मतनगर शहर में अध्यात्म परिवार द्वारा प्रारंभ अध्यात्म
            शिल्पशाला का उपक्रम एक बहुआयामी योजना है। जिसकी बातें अत्यंत रोमांचक
            हैं।
          </p>
        </div>
      </section>

      {/* Stone Selection Criteria Section */}
      <section className="my-8">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            पाषाण की जिनप्रतिमा का निर्माण...
          </h3>
        </div>
        <p className="mb-6 text-center text-lg">
          आज ज्यादातर प्रतिमाजी के पाषाण के लिए 'सफेदी' यही अग्रिम और एकमात्र
          मापदंड बन गया है। वास्तव में क्रम ऐसा होना चाहिए :
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                1
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 text-center font-heading">
              पोगर परीक्षण :
            </h3>
            <p className="text-base leading-relaxed">
              जो पाषाण मोटी पोगर का होता है। वह ज्यादा पानी एब्ज़ोर्ब करता है,
              जिसके परिणाम स्वरुप प्रतिमाजी कुछ वर्षों में नष्टप्राय: हो जाएगी।
              इसलिए यह प्रथम मापदंड है।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                2
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-3 text-center font-heading">
              वरण विचार :
            </h3>
            <p className="text-base leading-relaxed">
              पाषाण के जिस भाग में सल्फर (वरण) का प्रमाण ज्यादा होता है, वहां पर
              हल्की सी ठोकर या मार लगने पर ही प्रतिमाजी का टुकड़ा पड़ जायेगा।
            </p>
          </div>

          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-secondary-color text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                3
              </span>
            </div>
            <h3 className="font-bold text-lg text-heading mb-3 text-center font-heading">
              शुक्लता :
            </h3>
            <p className="text-base leading-relaxed">
              ऊपर की दो चीजें सुनिश्चित करने के बाद फिर तीसरे क्रम पर
              भावोत्पादकताके लिए शुक्लता (सफेदी-बेदागपना) अवश्य देखना चाहिए।
            </p>
          </div>
        </div>
      </section>

      {/* Process Documentation Section */}
      <section className="my-12">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            निर्माण प्रक्रिया
          </h3>
        </div>

        {/* Process Step 1 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.13.png"
              alt="पाषाण के पीस में छोटा होल करके स्टेन डाला जाता है।"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
          <div className="bg-light-bg/20 rounded-lg p-6">
            <h3 className="font-bold text-xl text-heading mb-4 font-heading">
              पोगर परीक्षण विधि
            </h3>
            <p className="text-lg leading-relaxed text-heading">
              पत्थर के पीस में छोटा होल करके स्टेन डाला जाता है। उसकी ललामी
              जितनी ज्यादा फैलती है उतनी मोटी पोगरका पाषाण कहा जाता है। वह
              प्रतिमाजी के लिए उपयोग नहीं किया जाता है।
            </p>
          </div>
        </div>

        {/* Process Step 2 - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-light-bg/20 rounded-lg p-6 order-2 md:order-1">
            <h3 className="font-bold text-xl text-heading mb-4 font-heading">
              वरण की पहचान
            </h3>
            <p className="text-lg leading-relaxed text-heading">
              यह जो लाइन दिख रही है, वह वरण है। यह अत्यंत जोखमी है। इसकी
              उपस्थिति से प्रतिमा में दरार या टूटने का खतरा बना रहता है।
            </p>
          </div>
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm order-1 md:order-2">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.14.png"
              alt="यह जो लाइन दिख रही है, वह वरण है।"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Process Step 3 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.15.png"
              alt="मिट्टी का नयनाकर्षक मॉडल"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
          <div className="bg-light-bg/20 rounded-lg p-6">
            <h3 className="font-bold text-xl text-heading mb-4 font-heading">
              प्रारंभिक मॉडल निर्माण
            </h3>
            <p className="text-lg leading-relaxed text-heading">
              शास्त्रोक्त माप अनुसार सर्वप्रथम मिट्टी का नयनाकर्षक मॉडल बनाया
              जाता है। यह मॉडल आगे की सभी प्रक्रियाओं का आधार बनता है।
            </p>
          </div>
        </div>

        {/* Process Step 4 - Text Left, Images Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-light-bg/20 rounded-lg p-6 order-2 md:order-1">
            <h3 className="font-bold text-xl text-heading mb-4 font-heading">
              डिजिटल प्रसंस्करण
            </h3>
            <p className="text-lg leading-relaxed text-heading">
              मिट्टी के मॉडल को 3D स्कैन करके कंप्यूटर द्वारा बारीक एडिटिंग से
              सुंदर घाट दिया जाता है। आधुनिक तकनीक का उपयोग करके पारंपरिक कला को
              और भी निखारा जाता है।
            </p>
          </div>
          <div className="bg-lighten-bg rounded-lg p-6 shadow-sm order-1 md:order-2">
            <div className="space-y-4">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.16.png"
                alt="3D स्कैन और एडिटिंग"
                className="w-full h-32 object-contain rounded-lg"
              />
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.17.png"
                alt="डिजिटल प्रसंस्करण"
                className="w-full h-32 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
