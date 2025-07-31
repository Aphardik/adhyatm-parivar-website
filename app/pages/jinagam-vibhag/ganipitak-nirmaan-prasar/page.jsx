import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                गणिपिटक निर्माण-प्रसार ...
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-content">
            'जिनबिंब जिनागम भवियण कुं आधारा' इन पंक्तियों के अनुसार जैसे जिनालय में जिनबिंब तथा उनके सेवक अधिष्ठायकों की स्थापना होती है, उसी प्रकार पाठशाला आदि में जिनागमस्थापना रूप श्री गणिपिटक तथा वाणी की अधिष्ठायिका सरस्वती देवी की स्थापना के लिए संगमरमर की श्री गणिपिटक का निर्माण तथा उसका प्रसार अध्यात्म परिवार द्वारा हो रहा है।
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
  );
};

export default Page;