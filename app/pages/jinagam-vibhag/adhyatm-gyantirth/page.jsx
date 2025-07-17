import React from 'react'

const page = () => {
  return (
     <div className="mx-auto py-4 font-body text-gray-800">
      <div className="flex items-center gap-2">
        <div className="flex items-center mb-4">
          <div className="bg-[#7A1B3E] text-white text-4xl pt-6 font-bold p-4">
            3.4
          </div>
        </div>
        <div>
          <h1 className="text-[#7A1B3E] text-2xl sm:text-3xl font-heading font-bold mb-2">
            अध्यात्म ज्ञानतीर्थ : संग्रह, संशोधन, प्रकाशन...
          </h1>
          <p className="text-gray-600 font-semibold mb-4">
            (कार्य प्रारंभ : वि.सं. २०७९)
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-2 flex flex-col items-center">
          <img
            alt="A four-story building with a modern design"
            className=""
            height="200"
            src="/jinagam/adhyatm-gyantirth/img-3.15.png"
            width="200"
          />
          <p className="text-gray-800 mt-4 text-center">
            मात्र और मात्र श्रुतकार्यों के लिए बना हुआ चारमंजिला श्रुतप्रसाद
          </p>
          <p className="text-gray-800 mt-2 text-center">
            क्या आपको देखने का सौभाग्य मिला है? इसे निहारने के लिए आप अध्यात्म
            ज्ञानतीर्थ में जरूर पधारिए !
          </p>
        </div>

        <div className="md:w-2/3 bg-pink-50 p-2 flex sm:flex-row flex-col items-center justify-between">
          <div className="md:w-1/3 flex flex-col items-center mb-4 p-4">
            <img
              alt="A large room with people working at desks"
              className="w-full"
              height="100"
              src="/jinagam/adhyatm-gyantirth/img-3.16.png"
              width="100"
            />
            <div className="bg-[#7A1B3E] text-white text-center p-4">
              <p>
                एक बार इस ज्ञान तीर्थ की मुख्य कार्यशाला को नजरों से निहारिए
              </p>
            </div>
          </div>

          <div className="md:w-2/3 p-4">
            <h2 className="text-[#7A1B3E] text-xl font-bold mb-2">संग्रह :</h2>
            <p className="text-gray-800 mb-4">
              यहां जर्मनी की हाई रेंज स्कैनिंग मशीनों द्वारा दुर्लभ पुस्तकों का
              संग्रह होता है।
            </p>

            <h2 className="text-[#7A1B3E] text-xl font-bold mb-2">संशोधन :</h2>
            <p className="text-gray-800 mb-4">
              पूज्यों द्वारा किये गए शुद्धिकरण के आधार पर संशोधित ग्रंथ यहां
              मुद्रित होकर विशाल श्रुत संग्रह तैयार होता है। लिप्यंतरित ग्रंथों
              को गीतार्थ गुरु भगवंतों तक पहुंचाने के लिए यहां स्किल्ड स्टाफ बहुत
              ध्यानपूर्वक कंपोजिंग तथा प्रूफशुद्धि करके ग्रंथों को मुद्रणयोग्य
              बनाते हैं।
            </p>

            <h2 className="text-[#7A1B3E] text-xl font-bold mb-2">प्रकाशन :</h2>
            <p className="text-gray-800">
              आज तक ३१९ ग्रंथों का प्रकाशन हो चुका है। यह प्रक्रिया निरंतर चल
              रही है। अभी यहां २१ लोगों का स्टाफ कार्यरत हैं। यह संख्या बढ़ती ही
              रहे ऐसी दिल की भावना है!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page