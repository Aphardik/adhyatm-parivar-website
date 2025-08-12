import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import React from "react";

export const metadata = {
  title: 'जिनप्रतिमा निर्माण - पाषाण | जिनमूर्ति विभाग',
  description: '',
}

const Page = () => {
  return (
    <div className="max-w-7xl bg-whitey mx-auto font-body">
      {/* Header Section */}
      <header className="relative flex items-center justify-center h-40 bg-lightpink">
         <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                जिनप्रतिमा निर्माण - पाषाण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg my-1 text-maroon font-semibold">
                अध्यात्म शिल्पशाला
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
                  कार्य आरंभ: वि.सं. २०७६
              </p>
            </div>
          </div>
        </div>
      </header>

<div className="px-2 sm:px-6">
      {/* Stone Selection Criteria Section */}
      <section className="py-8 sm:pb-12 lg:pb-16">
        {/* <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            पाषाण की जिनप्रतिमा का निर्माण...
          </h3>
        </div> */}
        <p className="mb-6 text-center font-bold text-maroon text-lg">
          आज ज्यादातर प्रतिमाजी के पाषाण के लिए 'सफेदी' यही अग्रिम और एकमात्र
          मापदंड बन गया है। वास्तव में क्रम ऐसा होना चाहिए :
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                1
              </span>
            </div>
            <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
              पोगर परीक्षण :
            </h3>
            <p className="text-base text-maroon leading-relaxed">
              जो पाषाण मोटी पोगर का होता है वह ज्यादा पानी एब्ज़ोर्ब करता है, जिसके परिणाम स्वरुप प्रतिमाजी कुछ वर्षों में नष्टप्राय: हो जाएगी। इसलिए यह प्रथम मापदंड है।

            </p>
          </div>

          <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                2
              </span>
            </div>
            <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
              वरण विचार :
            </h3>
            <p className="text-base text-maroon leading-relaxed">
              पाषाण के जिस भाग में सल्फर (वरण) का प्रमाण ज्यादा होता है, वहां पर
              हल्की सी ठोकर या मार लगने पर ही प्रतिमाजी का टुकड़ा पड़ जायेगा।
            </p>
          </div>

          <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <span className="bg-maroon text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto text-lg font-bold">
                3
              </span>
            </div>
            <h3 className="font-bold text-lg text-maroon mb-3 text-center font-heading">
              शुक्लता :
            </h3>
            <p className="text-base text-maroon leading-relaxed">
              ऊपर की दो चीजें सुनिश्चित करने के बाद फिर तीसरे क्रम पर
              भावोत्पादकताके लिए शुक्लता (सफेदी-बेदागपना) अवश्य देखना चाहिए।
            </p>
          </div>
        </div>
      </section>

      {/* Process Documentation Section */}
      <section className="my-12">
    
        {/* Process Step 1 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.13.png"
              alt="पाषाण के पीस में छोटा होल करके स्टेन डाला जाता है।"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
          <div className="bg-lightpink/20 rounded-lg p-6">
            <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
              पोगर परीक्षण विधि
            </h3>
            <p className="text-lg leading-relaxed text-maroon">
              पत्थर के पीस में छोटा होल करके स्टेन डाला जाता है। उसकी ललामी
              जितनी ज्यादा फैलती है उतनी मोटी पोगरका पाषाण कहा जाता है। वह
              प्रतिमाजी के लिए उपयोग नहीं किया जाता है।
            </p>
          </div>
        </div>

        {/* Process Step 2 - Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lightpink/20 rounded-lg p-6 order-2 md:order-1">
            <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
              वरण की पहचान
            </h3>
            <p className="text-lg leading-relaxed text-maroon">
              यह जो लाइन दिख रही है, वह वरण है। यह अत्यंत जोखमी है। इसकी
              उपस्थिति से प्रतिमा में दरार या टूटने का खतरा बना रहता है।
            </p>
          </div>
          <div className="bg-lightyellow rounded-lg p-6 shadow-sm order-1 md:order-2">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.14.png"
              alt="यह जो लाइन दिख रही है, वह वरण है।"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Process Step 3 - Image Left, Text Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lightyellow rounded-lg p-6 shadow-sm">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.15.png"
              alt="मिट्टी का नयनाकर्षक मॉडल"
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
          <div className="bg-lightpink/20 rounded-lg p-6">
            <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
              प्रारंभिक मॉडल निर्माण
            </h3>
            <p className="text-lg leading-relaxed text-maroon">
              शास्त्रोक्त माप अनुसार सर्वप्रथम मिट्टी का नयनाकर्षक मॉडल बनाया
              जाता है। यह मॉडल आगे की सभी प्रक्रियाओं का आधार बनता है।
            </p>
          </div>
        </div>

        {/* Process Step 4 - Text Left, Images Right */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lightpink/20 rounded-lg p-6 order-2 md:order-1">
            <h3 className="font-bold text-xl text-maroon mb-4 font-heading">
              डिजिटल प्रसंस्करण
            </h3>
            <p className="text-lg leading-relaxed text-maroon">
              मिट्टी के मॉडल को 3D स्कैन करके कंप्यूटर द्वारा बारीक एडिटिंग से
              सुंदर घाट दिया जाता है। आधुनिक तकनीक का उपयोग करके पारंपरिक कला को
              और भी निखारा जाता है।
            </p>
          </div>
          <div className="bg-lightyellow  rounded-lg p-6  order-1 md:order-2">
            <div className="flex items-center justify-center">
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.16.jpg"
                alt="3D स्कैन और एडिटिंग"
                className="w-full h-64 object-contain rounded-lg"
              />
              <img
                src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.17.png"
                alt="डिजिटल प्रसंस्करण"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="bg-lightyellow rounded-lg p-6">
            <img
              src="/jinmurti/jinpratima-nirmaan-pashaan/img-1.181920.jpeg"
              alt="Process 3"
              className="w-full h-64 object-contain  rounded-lg"
            />
          </div>
          <div className="rounded-lg p-6">
            <h3 className="font-bold text-xl text-maroon mb-4 font-heading">प्रारंभिक डिज़ाइन और नाप</h3>
            <p className="text-base leading-relaxed text-maroon">
              यह नयनरम्य प्रतिमाजीओं का निर्माण ऐसी चीवट से किया जाता है कि लेफ्ट-राईट सभी छोटे से छोटे अंग-ऊपांगो का नाप प्रभु के समचतुरस्र संस्थान की झांकि दिलाए ऐसे समान नाप के बनते है।
            </p>
          </div>
        </div>
      </section>
            <section className="py-6 sm:py-8 lg:py-8">
                 <div className="bg-lightyellow rounded-sm  p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
              <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
              <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
            </div>
            <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
              गुजरात के हिम्मतनगर शहर में अध्यात्म परिवार द्वारा प्रारंभ अध्यात्म
            शिल्पशाला का उपक्रम एक बहुआयामी योजना है। जिसकी बातें अत्यंत रोमांचक
            हैं।
            </p>
          </div>
      </section>
    </div>
     <CallToActionButton
            heading=" जो नुकसान पहले ही हो चुका है उसका क्या?"
            content=" अध्यात्म परिवार ने टीका आदि निकाल कर प्रतिमाजी का लेप-ओप करने के लिए बहुत परिश्रमपूर्वक शुद्ध द्रव्यों की खोज की है। बस, हमें ज्यादा से ज्यादा प्रतिमाजी की शुद्धि-सुरक्षा का लाभ दीजिए-दिलवाइये।"
            id="jinpratima-suraksha-cta"
            href={
              "https://wa.me/918448444050?text=नमस्कार%2C%0A%0Aमैं%20अध्यात्म%20परिवार%20की%20सेवाओं%20के%20बारे%20में%20जानकारी%20चाहता%2Fचाहती%20हूं।%0Aकृपया%20प्रतिमाजी%20की%20शुद्धि-सुरक्षा%20के%20लिए%20उपलब्ध%20सेवाओं%20की%20विस्तृत%20जानकारी%20प्रदान%20करें।%0A%0Aधन्यवाद"
            }
          />
    </div>
  );
};

export default Page;
