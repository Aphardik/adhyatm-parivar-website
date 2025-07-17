import React from 'react'

const page = () => {
  return (
     <div className="mx-auto bg-white font-body py-6">
      <div className="flex flex-wrap justify-between mb-6">
        <div className="flex items-start flex-row sm:flex-col mb-4 gap-2 sm:gap-0 md:w-1/4 p-2">
          <div className="bg-[#731f46] text-gray-200 text-4xl font-bold pt-6 p-4 mb-4">3.2</div>
          <div>
            <div className="text-[#731f46] font-heading text-3xl font-bold mb-2">
              अर्वाचीन <br className="hidden sm:block" />
              श्रुत प्रकाशन- <br className="hidden sm:block" />
              श्रुत प्रचार
            </div>
            <div className="text-[#731f46]">(कार्य प्रारंभ : वि.सं. २०६३)</div>
          </div>
        </div>


        <div className="text-center w-full md:w-1/4 p-2">
          <img
            alt="Collection of books on a red velvet background"
            className="w-full h-auto"
            height="400"
            src="/jinagam/arvachin-shrut-prakashan/img-3.3.png"
            width="300"
          />
        </div>

        <div className="text-center w-full md:w-1/4 p-2">
          <img
            alt="Collection of study books on a red velvet background"
            className="w-full h-auto"
            height="400"
            src="/jinagam/arvachin-shrut-prakashan/img-3.4.png"
            width="300"
          />
        </div>

        <div className="text-center w-full md:w-1/4 p-2">
          <img
            alt="Collection of children's literature on a red velvet background"
            className="w-full h-auto"
            height="400"
            src="/jinagam/arvachin-shrut-prakashan/img-3.5.png"
            width="300"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        <div className="bg-[#731f46] text-base text-gray-200 p-2 rounded w-full md:w-1/2 mb-4 md:mb-0">
          <ul className="list-disc p-8">
            <li className="mb-2">
              जिन प्रवचनों से औसतन हर १० से १५ दिनों में एक दीक्षा का सर्जन हो रहा है।
            </li>
            <li className="mb-2">
              जिन वचनों ने श्रमण-श्रमणी वर्ग को कलिकाल की जहरीली हवा से सुरक्षित रखा है।
            </li>
            <li className="mb-2">
              जो नित्य उपयोगी साहित्य आराधकों का श्वास-प्राण बन गया है।
            </li>
            <li>
              जो नूतन सर्जन भक्तिरस और वैराग्यरस से भींजा हुआ है, ऐसा श्रेणीबद्ध साहित्य अध्यात्म परिवार द्वारा प्रकाशित हो रहा है।
            </li>
          </ul>
        </div>

        <div className="text-center w-full md:w-1/4 pl-4 p-2">
          <img
            alt="Collection of various literature on a red velvet background"
            className="w-full h-auto"
            height="400"
            src="/jinagam/arvachin-shrut-prakashan/img-3.6.png"
            width="300"
          />
        </div>

        <div className="text-center w-full md:w-1/4 p-3">
          <img
            alt="Collection of Nityopayogi literature on a red velvet background"
            className="w-full h-auto"
            height="400"
            src="/jinagam/arvachin-shrut-prakashan/img-3.7.png"
            width="300"
          />
        </div>
      </div>
    </div>
  )
}

export default page