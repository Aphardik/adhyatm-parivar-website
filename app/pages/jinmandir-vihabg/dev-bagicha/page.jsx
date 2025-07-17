import React from 'react'

const page = () => {
  return (
        <div className="mx-auto py-4 font-body">
      <div className="flex items-center gap-4">
        <div className="bg-gray-800 text-white text-4xl font-bold p-4 inline-block">
          2.5
        </div>
        <div>
          <h1 className="text-gray-800 font-heading text-2xl font-bold mt-4">
            देवबगीचे का निर्माण
          </h1>
          <p className="text-gray-500">(कार्य प्रारंभ : वि.सं.२०७७)</p>
        </div>
      </div>

      <p className="text-gray-800 mt-4">
        <span className="font-bold text-gray-700">
          ‘फुलड़ा केरा बाग मां बैठा श्री जिनराज’
        </span>
        ये पंक्ति तो आज साल में कभी दो-चार बार होने वाली महापूजा में बाहर से लाए हुए पुष्पों से कुछ अंश में साकार होती है तो होती है। व्यक्तिगत पुष्प पूजा तो ९९.९९% मालन पर निर्भर हो गई है। वो जो फूल लाती है वही फूल चढ़ाने के लिए उपलब्ध होते हैं। क्या इसका कोई समाधान नहीं है ?
        <span className="font-bold text-gray-700">
          प्रतिदिन बोली जाने वाली दोहे कि यह पंक्ति साकार नहीं हो सकती है?
        </span>
      </p>

      <p className="text-gray-800 mt-4">
        पांचवे स्वप्न में प्रभु की माता ने जितने प्रकार के फूल देखे थे, क्या उनमें से ज्यादा से ज्यादा प्रकार के फूलों से फूलपूजा हम नहीं कर सकते? इन सभी प्रश्नों का जवाब 'हां' है। अध्यात्म परिवार द्वारा प्रस्तुत है :
        <span className="font-bold text-gray-700">
          देव बगीचा और गृहकुंडे ।
        </span>
      </p>

      <div className="flex flex-col md:flex-row justify-around items-center mt-8">
        <div className="text-center mb-4 md:mb-0">
          <p className="text-gray-600">यह है जूनागढ़ देवबगीचा</p>
          <img
            alt="A garden in Junagadh with various plants and flowers"
            className="rounded-full mx-auto mt-2"
            height="150"
            src="/jinmandir/dev-bagicha/img-2.30.png"
            width="150"
          />
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p className="text-gray-600">
            पुष्पों के कुंडों की व्यवस्था परिवार करता है।
          </p>
          <img
            alt="Arrangement of flower pots by the family"
            className="rounded-full mx-auto mt-2"
            height="150"
            src="/jinmandir/dev-bagicha/img-2.31.png"
            width="150"
          />
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p className="text-gray-600">खंभात में देवबगीचे का प्रारंभ</p>
          <img
            alt="Beginning of a garden in Khambhat"
            className="rounded-full mx-auto mt-2"
            height="150"
            src="/jinmandir/dev-bagicha/img-2.32.png"
            width="150"
          />
        </div>
      </div>
    </div>
  )
}

export default page