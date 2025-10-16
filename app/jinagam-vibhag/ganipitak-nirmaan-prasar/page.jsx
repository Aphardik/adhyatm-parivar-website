import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const metadata = {
  title: "गणिपिटक निर्माण-प्रसार | जिनागम विभाग",
  description: "",
};

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                गणिपिटक निर्माण-प्रसार
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        <section className="py-4  sm:py-6 lg:py-8 lg:px-0">
          <div className="bg-lightyellow rounded-sm relative  p-6 sm:p-8">
            <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <div className="bg-lightyellow flex items-center justify-center p-6 sm:p-8 rounded-sm">
              <p className="text-maroon font-semibold flex items-center justify-center gap-4 text-xl sm:text-3xl italic text-center">
                <FaQuoteLeft size={32} className="text-maroon flex-shrink-0" />
                जिनबिंब जिनागम भवियण कुं आधारा
                <FaQuoteRight size={32} className="text-maroon flex-shrink-0" />
              </p>
            </div>
            <p className="text-maroon text-base sm:text-lg font-medium text-center">
              इन पंक्तियों के अनुसार जैसे जिनालय में जिनबिंब तथा उनके सेवक
              अधिष्ठायकों की स्थापना होती है, उसी प्रकार पाठशाला आदि में
              जिनागमस्थापना रूप श्री गणिपिटक तथा वाणी की अधिष्ठायिका सरस्वती
              देवी की स्थापना के लिए संगमरमर की श्री गणिपिटक का निर्माण तथा उसका
              प्रसार अध्यात्म परिवार द्वारा हो रहा है।
            </p>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-2xl">
                <div className="rounded-lg overflow-hidden bg-lighten-bg p-8">
                  <img
                    src="/jinagam/ganipitak-nirmaan-prasar/img-3.17.png"
                    alt="Decorative sculpture with intricate design"
                    className="w-full h-80 lg:h-96 object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-6 w-full max-w-4xl">
                <p className="p-6 bg-secondary-color text-white rounded-xl sm:text-xl leading-relaxed text-center font-semibold">
                  ऐसे नैनाकर्षक श्री गणिपिटक अनेक स्थानों पर स्थापित हुए हैं।
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
