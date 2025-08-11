import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";

export const metadata = {
  title: 'अध्यात्म ज्ञानतीर्थ : संग्रह, संशोधन, प्रकाशन | जिनागम विभाग',
  description: '',
}

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                अध्यात्म ज्ञानतीर्थ : संग्रह, संशोधन, प्रकाशन
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon">
                कार्य प्रारंभ : वि.सं. २०७९
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
           <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Left Column - Building Image */}
            <div className="flex flex-col items-center bg-white border border-gray-200 p-6">
              <img
                src="/jinagam/adhyatm-gyantirth/img-3.15.jpg"
                alt="A four-story building with a modern design"
                className="w-full h-96 object-cover mb-4"
              />
             <div className="bg-maroon text-white text-center p-4 w-full">
                <p className="font-semibold">
                 मात्र और मात्र श्रुतकार्यों के लिए बना हुआ चारमंजिला श्रुतप्रसाद
                </p>
              </div>
            </div>

            {/* Right Column - Workshop Image */}
            <div className="flex flex-col items-center bg-white border border-gray-200 p-6">
              <img
                src="/jinagam/adhyatm-gyantirth/img-3.16.jpg"
                alt="A large room with people working at desks"
                className="w-full h-96 object-cover mb-4"
              />
              <div className="bg-maroon text-white text-center p-4 w-full">
                <p className="font-semibold">
                 एक बार इस ज्ञान तीर्थ की मुख्य कार्यशाला को नजरों से निहारिए
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">संग्रह :</h2>
              <p className="text-maroon text-lg leading-relaxed">
               यहां जर्मनी की हाई रेंज स्कैनिंग मशीनों द्वारा दुर्लभ पुस्तकों का संग्रह होता है।
              </p>
            </div>

             <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">संशोधन :</h2>
              <p className="text-maroon text-lg leading-relaxed">
               पूज्यों द्वारा किये गए शुद्धिकरण के आधार पर संशोधित ग्रंथ यहां मुद्रित होकर विशाल श्रुत संग्रह तैयार होता है। लिप्यंतरित ग्रंथों को गीतार्थ गुरु भगवंतों तक पहुंचाने के लिए यहां स्किल्ड स्टाफ बहुत ध्यानपूर्वक कंपोजिंग तथा प्रूफशुद्धि करके ग्रंथों को मुद्रणयोग्य बनाते हैं।
              </p>
            </div>

              <div className="relative rounded-sm text-center p-6 sm:p-10 bg-lightyellow">
              <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
              <h2 className="text-maroon text-2xl font-heading font-bold mb-4">प्रकाशन :</h2>
              <p className="text-maroon text-lg leading-relaxed">
                आज तक ३१९ ग्रंथों का प्रकाशन हो चुका है। यह प्रक्रिया निरंतर चल रही है। अभी यहां २१ लोगों का स्टाफ कार्यरत हैं। यह संख्या बढ़ती ही रहे ऐसी दिल की भावना है!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;