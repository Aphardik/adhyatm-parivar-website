import React from 'react'

const page = () => {
  return (
       <div className="mx-auto font-body bg-white py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="flex flex-col gap-4 mb-4 items-start">
            <div className="inline-block bg-[#7A1B3E] text-white px-4 py-2 pt-6 w-auto shrink-0">
              <span className="text-3xl font-bold">3.3</span>
            </div>
            <div className="flex-1">
              <h1 className="text-[#7A1B3E] font-heading text-2xl font-bold">
                हरिभद्रसूरि शास्त्रसंग्रह : श्रीसंघ के लिए श्रुत की उपलब्धि
              </h1>
              <p className="text-[#7A1B3E] font-semibold text-sm">
                (कार्य प्रारंभ : वि.सं. २०७३)
              </p>
            </div>
          </div>

          <p className="text-gray-700 my-8 text-sm font-semibold">
            मात्र छह वर्ष की छोटीसी अवधि में जो सूरत ही नहीं अपितु संपूर्ण भारत में अग्रिम कक्षा में गिना जाने लगा है, ऐसे सूरत स्थित इस ज्ञानभंडार की झांकी तो यहां प्रस्तुत है, फिर भी अभी बहुत कुछ बताना बाकी है जो आप मुलाकात में ही जान सकेंगे।
          </p>

          <div className="flex items-center gap-x-4">
            <img
              src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.12.png"
              alt="Library shelves filled with books"
              className="w-2/3"
            />
            <p className="w-1/3 font-semibold text-gray-700 text-sm">
              इन ३७३ अलमारियों सर्वज्ञ प्रभु का ज्ञानवैभव दीमक तथा सीलन ना लगे इस प्रकार सुरक्षित रखा गया है।
            </p>
          </div>
        </div>

        <div className="bg-pink-50">
          <div className="mb-4 relative">
            <img
              src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.11.png"
              alt="Library shelves filled with books"
              className="mb-2"
              width="300"
              height="200"
            />
            <p className="text-gray-700 text-sm w-28 font-semibold absolute left-5 bottom-2 text-center">
              आज जिसका आंकड़ा १.२५ लाख से अधिक है, ये ग्रंथ-पुस्तकें ज्ञानपिपासुओं प्राणों से भी प्यारी है।
            </p>
          </div>
          <div>
            <img
              src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.13.png"
              alt="Library entrance with glass doors"
              className="mb-2"
              width="300"
              height="200"
            />
            <p className="text-gray-700 text-center font-semibold text-sm sm:mt-4">
              इस खिड़की से हर रोज सुबह ९:०० से
              शाम ७:०० बजे तक पुस्तकें प्राप्त की जा सकती हैं। वह भी मात्र २ मिनट में !
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 bg-pink-50">
            <img
              src="/jinagam/haribhadrasuri-shastra-sangrah/img-3.14.png"
              alt="Beautifully carved wooden statue of Guru Shri Haribhadra Acharya"
              className=""
              width="300"
              height="400"
            />
            <p className="text-gray-200 bg-[#7A1B3E] font-semibold text-sm p-4 py-8 text-center">
              इस शास्त्रसंग्रह का २००७ साधु-साध्वीजी भगवंत तथा १९९६ श्रावक-श्राविका वर्ग उपयोग कर चुके हैं। क्या आप बाकी हैं?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page