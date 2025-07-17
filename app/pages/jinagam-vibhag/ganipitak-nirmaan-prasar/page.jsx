import React from 'react'

const page = () => {
  return (
     <div className="container mx-auto font-body px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="bg-[#7A1B3E] text-white text-4xl font-bold px-6 py-4 inline-block rounded">
            3.5
          </div>
          <h1 className="text-3xl text-gray-800 sm:text-4xl font-heading font-bold mt-6">
            गणिपिटक निर्माण-प्रसार ...
          </h1>
          <p className="text-base text-gray-700 mt-4 leading-relaxed">
            'जिनबिंब जिनागम भवियण कुं आधारा' इन पंक्तियों के अनुसार जैसे जिनालय में जिनबिंब तथा उनके सेवक अधिष्ठायकों की स्थापना होती है, उसी प्रकार पाठशाला आदि में जिनागमस्थापना रूप श्री गणिपिटक तथा वाणी की अधिष्ठायिका सरस्वती देवी की स्थापना के लिए संगमरमर की श्री गणिपिटक का निर्माण तथा उसका प्रसार अध्यात्म परिवार द्वारा हो रहा है।
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/jinagam/ganipitak-nirmaan-prasar/img-3.17.png"
            alt="Decorative sculpture with intricate design"
            className="w-full p-20 sm:w-4/5 object-contain"
          />
          <div className="mt-4 bg-[#7A1B3E] text-white text-sm p-3 rounded text-center w-full">
            ऐसे नैनाकर्षक श्री गणिपिटक अनेक स्थानों पर स्थापित हुए हैं।
          </div>
        </div>
      </div>
    </div>
  )
}

export default page