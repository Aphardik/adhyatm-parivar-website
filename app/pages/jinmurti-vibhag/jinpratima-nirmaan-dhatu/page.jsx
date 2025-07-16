import React from 'react'

const Page = () => {
  return (
     <div className="mx-auto font-body bg-white">
      <header className="bg-gray-100 border border-gray-200">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-300 text-gray-800 text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.3
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900"> जिनप्रतिमा निर्माण : धातु...</h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium mb-1 sm:mb-2">(कार्य आरंभ : वि.सं. २०६४)</p>
            </div>
          </div>
        </div>
      </header>


      <div className="py-4 sm:py-6 lg:py-8 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
        {/* <!-- Left Section --> */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <img
              src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.181920.png"
              alt="Process 3"
              className="w-full max-w-lg md:max-w-full filter grayscale"
            />
          </div>
          <p className="mt-4 text-gray-700 text-center text-sm md:text-base px-4">
            यह नयनरम्य प्रतिमाजीओं का निर्माण ऐसी चीवट से किया जाता है कि लेफ्ट-राईट सभी छोटे से छोटे अंग-ऊपांगो का नाप प्रभु के समचतुरस्र संस्थान की झांकि दिलाए ऐसे समान नाप के बनते है।
          </p>
        </div>

        {/* <!-- Right Section --> */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 bg-gray-100 gap-4 p-4">
          {/* <!-- Text and Large Image --> */}
          <div className="col-span-1 md:col-span-2">
            
            <p className="mt-2 text-gray-700 text-sm md:text-base">
              अध्यात्म शिल्पशाला की यह दूसरी उपलब्धि है। धातु की प्रतिमाजी के लिए भी पूर्व में 1.2 में जिस प्रकार बताया है उस प्रकार मिट्टी का मॉडल तो बनाया जाता है, उसके बाद वैक्स की डाई बनाकर
              <span className="text-gray-800 font-semibold">वैक्यूम इन्वेस्टमेंट कास्टिंग पद्धति</span>
              से धातु की प्रतिमाजी का निर्माण किया जाता है ।
            </p>

            <div className="w-full mt-4">
              <p className="mt-2 text-gray-700 font-semibold text-center text-sm md:text-base">
                कास्टिंग इस प्रकार होती है
              </p>
              <img src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.21.png" alt="Casting Process 1" className="w-full filter grayscale" />
            </div>
          </div>

          {/* <!-- Small Images Column --> */}
          <div className="flex flex-col">
            <div className="flex flex-row md:flex-col justify-between md:justify-start gap-4 md:gap-4">
              <img src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.22.png" alt="Detailed Idol" className="w-1/3 md:w-full filter grayscale" />
              <img src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.23.png" alt="Symbol" className="w-1/3 md:w-full filter grayscale" />
              <img src="/jinmurti/jinpratima-nirmaan-dhatu/img-1.24.png" alt="Design" className="w-1/3 md:w-full filter grayscale" />
            </div>
            <p className="mt-4 text-gray-700 text-center text-sm font-semibold">
              ऐसे अद्भुत डिटेलिंग वाले प्रभुजी, सिद्धचक्रजी तथा परिकर उपलब्ध करवाने के लिए अध्यात्म परिवार सज्ज है!
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page