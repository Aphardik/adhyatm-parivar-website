import BottomRighSvg from "@/app/_components/BottomRighSvg";
import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const metadata = {
  title: " देवबगीचे का निर्माण | जिनमंदिर विभाग",
  description: "",
};

const Page = () => {
  const statsData = [
    {
      count: "42",
      label: "कुल देवबगीचा निर्माण श्रीसंघ तथा व्यक्तिगत",
      color: "bg-gradient-to-b from-yellow-400 to-orange-500",
    },
    {
      count: "33L +",
      label: "श्रीसंघ आदि द्वारा सद्व्यय ",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
    {
      count: "7L +",
      label: "अध्यात्म परिवार द्वारा सद्व्यय",
      color: "bg-gradient-to-b from-green-400 to-green-600",
    },
  ];

    const immediateActions = [
    "वृक्ष के आस-पास के संगमरमर के फर्श को खोल कर उसमें अन्य रायण वृक्षों की मिट्टी डाली गई।",
    "उचित पोशक तत्त्व डाले गए।",
    "जलसिंचन आदि की मात्र का निर्णय किया गया।"
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                देवबगीचे का निर्माण
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">
                कार्य प्रारंभ : वि.सं.२०७७
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-6">
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
          <div className="bg-lightyellow relative rounded-sm  p-6 sm:p-8">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
              <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                <FaQuoteLeft
                  size={32}
                  className="text-maroon flex-shrink-0"
                />
                फुलड़ा केरा बागमां बैठा श्री जिनराज
                <FaQuoteRight
                  size={32}
                  className="text-maroon flex-shrink-0"
                />
              </p>
            </div>
            <p className="text-maroon tracking-wide text-base sm:text-lg font-medium text-center">
              ये पंक्ति तो आज साल में कभी दो-चार बार होने वाली महापूजा में बाहर
              से लाए हुए पुष्पों से कुछ अंश में साकार होती है तो होती है।
              व्यक्तिगत पुष्प पूजा तो ९९.९९% मालन पर निर्भर हो गई है। वो जो फूल
              लाती है वही फूल चढ़ाने के लिए उपलब्ध होते हैं। क्या इसका कोई
              समाधान नहीं है ? <span className="font-bold text-darkpink"> प्रतिदिन बोली जाने वाली दोहे कि यह पंक्ति साकार
              नहीं हो सकती है? {" "}</span>  पांचवे स्वप्न में प्रभु की माता ने जितने प्रकार
              के फूल देखे थे, क्या उनमें से ज्यादा से ज्यादा प्रकार के फूलों से
              फूलपूजा हम नहीं कर सकते? इन सभी प्रश्नों का जवाब 'हां' है।
            </p>
          </div>
        </section>

        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
            अध्यात्म परिवार द्वारा प्रस्तुत है : देव बगीचा और गृहकुंडे
          </h3>
        </div>
        <section className="py-4 sm:py-6 lg:py-8 lg:px-0 ">
          <div className="grid lg:grid-cols-3 items-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.30.png" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                यह है जूनागढ़ देवबगीचा
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.31.png" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                पुष्पों के कुंडों की व्यवस्था परिवार करता है।
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img src="/jinmandir/dev-bagicha/img-2.32.png" alt="ap" />
              <p className="text-center text-maroon font-semibold">
                खंभात में देवबगीचे का प्रारंभ
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mt-6 sm:mt-8 lg:mt-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
            सौभाग्य का सीमाचिह्न : रक्षा रायणवृक्ष की
          </h3>
        </div>
        {/* Problem Section - What Happened */}
        <section className="py-4 text-center sm:py-6 lg:py-8 lg:px-0">
          <div className="relative rounded-sm p-8 sm:p-12 bg-lightyellow mb-6">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="space-y-4 text-base leading-relaxed text-maroon">
              <p>
                मई २०२१ का वो कठिन समय जब 'ताउते' साइक्लोन ने चारों तरफ विनाश का
                तांडव मचा दिया था। गिरिराज और सिद्धवड़ में भी सैकड़ों वृक्षों को
                नुकसान हुआ था, लेकिन जिस महिमावंत वृक्ष के नीचे दादा आदिनाथ
                पूर्व ९९ बार पधारे थे, उसकी मुख्य डाल टूटने के कारण सर्जित हालत
                ने आराधकों के हृदय को स्तंभित कर दिया था।
              </p>
              <p>
                सेठ आ.क. पेढ़ी की तरफ से अध्यात्म परिवार का संपर्क किया गया।
                अध्यात्म परिवार के शासन सेवक कंसल्टेंट को लेकर तत्काल पालीताना
                पहुंचे। पेढ़ी के मुख्य व्यक्ति भी गिरिराज पर पहुंचे।
              </p>
              <div className="bg-lightyellow p-4 rounded-lg mt-6">
                <p className="text-xl font-semibold text-maroon">
                  "आपको टूटी हुई डाल की चिंता है, यहा तो पूरे वृक्ष की हालत
                  गंभीर है। ये लंबा नहीं चलेगा। यह पूरा वृक्ष बीमार है ।"
                </p>
              </div>
              <p>
                रायण वृक्ष को देखकर कंसलटेंट द्वारा कथित शब्दों को सुनकर वहां
                उपस्थित तमाम लोगों को भय और चिंता ने घेर लिया। अब क्या होगा?
                इसका क्या उपाय है?
              </p>
            </div>
          </div>

          <div className="text-center my-6  sm:mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
              तुफान से सर्जित विनाश
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-1.jpg"
                alt="तुफान क्षति 1"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-2.jpg"
                alt="तुफान क्षति 2"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="bg-lightyellow rounded-lg p-4">
              <img
                src="/jinmandir/dev-bagicha/img-2.33-3.jpg"
                alt="तुफान क्षति 3"
                className="w-full h-96 object-cover rounded"
              />
            </div>
          </div>
        </section>

        {/* Solution Section - What Was Done */}
        <section className="py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
          <div className="relative rounded-sm p-8 sm:p-10 bg-lightyellow mb-8  transition-shadow duration-300 border border-white/20">
            <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15  transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <h3 className="text-xl text-center font-heading sm:text-2xl font-semibold text-maroon mb-6 pb-3 border-b border-maroon/20">
              कंसलटेंट के मार्गदर्शन के अनुसार तात्कालिक उपाय किए गए 
            </h3>

        <div className="space-y-5 mb-8">
            {immediateActions.map((action, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/30 backdrop-blur-sm pl-10">
                  <p className="text-base sm:text-lg text-maroon leading-relaxed">
                    {action}
                  </p>
                </div>
                <div className="absolute -left-6 -top-1/8  transform w-12 h-12 bg-gradient-to-b from-pink-300 to-pink-800 flex items-end justify-end pr-1" style={{borderRadius: '18px 18px 4px 18px'}}>
                  <span className="text-xl font-sans font-extrabold text-white">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>

            <div className=" backdrop-blur-sm rounded-2xl p-8 mt-8  overflow-hidden">
              <p className="text-base sm:text-lg leading-relaxed text-maroon font-semibold text-center z-10 pl-4">
                पंद्रह दिन व्यतीत होते-होते तो लाखों लोगों की आस्था से चमत्कार
                का सर्जन होने लगा और एक महीने में तो पुनः 'नीलुड़ी रायण तरु तले'
                का साक्षात्कार हो गया!
              </p>
            </div>
          </div>

          <div className="text-center my-6  sm:mt-8 lg:mt-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-8 py-4 sm:px-12 sm:py-4 rounded-sm">
              युद्धस्तर पर की गई कार्यवाही की झलक
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-4.jpg"
                  alt="सुधार कार्य 1"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md  transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-5.jpg"
                  alt="सुधार कार्य 2"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
            <div className="bg-lightyellow rounded-2xl p-6 shadow-md  transition-all duration-300 transform  group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/jinmandir/dev-bagicha/img-2.33-6.jpg"
                  alt="सुधार कार्य 3"
                  className="w-full h-96 object-cover transition-transform duration-500 "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="p-4 relative sm:py-16 bg-lightyellow mb-12">
          <div className="absolute top-0 left-0 opacity-15  transition-opacity duration-300">
            <TopLeftSvg />
          </div>
          <div className="absolute bottom-0 right-0 opacity-15  transition-opacity duration-300">
            <BottomRighSvg />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-semibold text-maroon px-4">
              हजारों-लाखों हृदयों की आस्था द्वारा सर्जित चमत्कार की झांकी में
              निमित्त बनने का सौभाग्य अध्यात्म परिवार के इतिहास का स्वर्णपृष्ठ
              बन गया !
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 items-center">
            <div className="w-full">
              <img
                src="/jinmandir/dev-bagicha/img-2.34-1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <img
                src="/jinmandir/dev-bagicha/img-2.34-2.jpg"
                alt=""
                className="w-full h-auto"
              />
              <img
                src="/jinmandir/dev-bagicha/img-2.34-3.png"
                alt=""
                className="w-full h-auto"
              />
              <img
                src="/jinmandir/dev-bagicha/img-2.34-4.jpg"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        <CounterStatsUI statsData={statsData} textColor="maroon" />
      </div>
       <CallToActionButton
        heading="विविध पुष्पों से सुसज्जित देवबगीचा"
        content="प्रभुपूजा हेतु सुंदर एवं विविध पुष्पों से युक्त देवबगीचा बनवाने में हम आपकी सहायता कर सकते हैं।"
        id="dev-bagicha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
