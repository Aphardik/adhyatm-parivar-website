import React from 'react'

const Page = () => {
  
  return (
    <div className="bg-gray-50 text-gray-800 font-body">
      {/* <!-- Header --> */}
      <header className="bg-gray-100 border border-gray-200">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-300 text-gray-800 text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.1
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900 mb-1 sm:mb-2"> जिनप्रतिमा आशातरा निवारण</h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">  (बिना अंजन वाली प्रतिमाओं की योग्य व्यवस्था) कार्य प्रारंभ : वि.सं. २०७६</p>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Content Section --> */}
        <div className="py-4 sm:py-6 lg:py-8 lg:px-0">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-8">
        {/* <!-- Left Side --> */}
        <div className="md:w-3/5 bg-gray-100 p-8">
          <div>
            <img
              alt="Decorative arch with a blank space in the center where a statue would be placed"
              className="w-full"
              height="800"
              src="/jinmurti/jinpratima-aashatana-nivaran/img-1.26.png"
              width="600"
            />
          </div>
          <p className="mt-4 text-center text-sm">
            यह है उत्तर प्रदेश स्थित धर्मनाथ दादा की चार कल्याणक भूमि रतनपुरी (रानोही) के जिनालय में मूलनायक के पद पर शोभायमान !
            <span className="font-bold"> अतिप्राचीन धर्मनाथ दादा </span>
            यह प्रतिमाजी हिम्मतनगर, गुजरात के समीप के खेत से प्राप्त हुई थी।
          </p>
        </div>

        {/* <!-- Right Side --> */}
        <div className="md:w-2/5 p-8 bg-gray-100 md:mt-0">
          <p className="mt-8 md:px-10">
            श्री षोडशक ग्रंथ षो.८गा.१ में पूज्य हरिभद्रसूरि महाराजा का वचन है कि :
            <span className="font-bold">
              ‘प्रतिमा बनाने के बाद मात्र दस दिनों में उसका अंजन विधान होना चाहिए।’</span>
            सद्गुरु के मुख से ऐसा सुनने के बाद आराधक आत्मा को अत्यंत चिंता होती है कि पूर्व में नासमझी में घर में 'गिफ्ट' के रूप में स्वीकार की हुई पाषाण, धातु, फाइबर की प्रतिमाजी का क्या करें?
          </p>

          <p className="mt-4 md:px-10">
            इसके समाधान के लिए उनकी आशातना न हो उस प्रकार उनकी व्यवस्था के लिए अध्यात्म परिवार सज्ज है।
          </p>

          {/* <!-- Image --> */}
          <div className="mt-4">
            <img
              alt="Various small statues and a decorative item placed on a red cloth"
              className="w-full filter grayscale"
              height="200"
              src="/jinmurti/jinpratima-aashatana-nivaran/img-1.27.png"
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page