import CounterStatsUI from '@/app/_components/StatData'
import React from 'react'

const Page = () => {
   const statsData = [
    { count: "42", label: "कुल देवबगीचा निर्माण श्रीसंघ तथा व्यक्तिगत", color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    { count: "33L +", label: "श्रीसंघ आदि द्वारा सद्व्यय ", color: "bg-gradient-to-b from-green-400 to-green-600" },
    { count: "7L +", label: "अध्यात्म परिवार द्वारा सद्व्यय", color: "bg-gradient-to-b from-green-400 to-green-600" },
   
  ];
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg ">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">देवबगीचे का निर्माण</h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-medium mb-1 sm:mb-2">कार्य प्रारंभ : वि.सं.२०७७</p>
            </div>
          </div>
        </div>
      </header>


      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-md p-8 bg-lighten-bg">
          <p className="text-lg leading-relaxed text-heading">
            <span className='text-secondary-color font-semibold'> ‘फुलड़ा केरा बाग मां बैठा श्री जिनराज’ </span>ये पंक्ति तो आज साल में कभी दो-चार बार होने वाली महापूजा में बाहर से लाए हुए पुष्पों से कुछ अंश में साकार होती है तो होती है। व्यक्तिगत पुष्प पूजा तो ९९.९९% मालन पर निर्भर हो गई है। वो जो फूल लाती है वही फूल चढ़ाने के लिए उपलब्ध होते हैं। क्या इसका कोई समाधान नहीं है ?प्रतिदिन बोली जाने वाली दोहे कि यह पंक्ति साकार नहीं हो सकती है?

पांचवे स्वप्न में प्रभु की माता ने जितने प्रकार के फूल देखे थे, क्या उनमें से ज्यादा से ज्यादा प्रकार के फूलों से फूलपूजा हम नहीं कर सकते? इन सभी प्रश्नों का जवाब 'हां' है। अध्यात्म परिवार द्वारा प्रस्तुत है : <span className='text-secondary-color font-semibold'> देव बगीचा और गृहकुंडे । </span>
          </p>
        </div>
      </section>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0 ">
        <div className='grid lg:grid-cols-3 items-center'>
       <div className='flex flex-col gap-2 items-center justify-center'>
        <img src="/jinmandir/dev-bagicha/img-2.30.png" alt="ap" />
        <p className='text-center text-heading font-semibold'>यह है जूनागढ़ देवबगीचा</p>
       </div>
       <div className='flex flex-col gap-2 items-center justify-center'>
        <img src="/jinmandir/dev-bagicha/img-2.31.png" alt="ap" />
        <p className='text-center text-heading font-semibold'>पुष्पों के कुंडों की व्यवस्था परिवार करता है।</p>
       </div>
       <div className='flex flex-col gap-2 items-center justify-center'>
        <img src="/jinmandir/dev-bagicha/img-2.32.png" alt="ap" />
        <p className='text-center text-heading font-semibold'>खंभात में देवबगीचे का प्रारंभ</p>
       </div>
       </div>
      </section>

 <div className="text-center mt-8 lg:mt-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
           सौभाग्य का सीमाचिह्न : रक्षा रायणवृक्ष की....
            </h2>
          </div>
 {/* Problem Section - What Happened */}
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-md p-8 bg-lighten-bg mb-6">
          <div className="space-y-4 text-base leading-relaxed text-heading">
            <p>
              मई २०२१ का वो कठिन समय जब 'ताउते' साइक्लोन ने चारों तरफ विनाश का तांडव मचा दिया था। गिरिराज और सिद्धवड़ में भी सैकड़ों वृक्षों को नुकसान हुआ था, लेकिन जिस महिमावंत वृक्ष के नीचे दादा आदिनाथ पूर्व ९९ बार पधारे थे, उसकी मुख्य डाल टूटने के कारण सर्जित हालत ने आराधकों के हृदय को स्तंभित कर दिया था।
            </p>
            <p>
             सेठ आ.क. पेढ़ी की तरफ से अध्यात्म परिवार का संपर्क किया गया। अध्यात्म परिवार के शासन सेवक कंसल्टेंट को लेकर तत्काल पालीताना पहुंचे। पेढ़ी के मुख्य व्यक्ति भी गिरिराज पर पहुंचे।
            </p>
            <div className="bg-secondary-color/10 p-4 rounded-lg mt-6">
              <p className="text-lg font-semibold text-secondary-color italic">
               "आपको टूटी हुई डाल की चिंता है, यहा तो पूरे वृक्ष की हालत गंभीर है। ये लंबा नहीं चलेगा। यह पूरा वृक्ष बीमार है ।"
              </p>
            </div>
            <p>
           रायण वृक्ष को देखकर कंसलटेंट द्वारा कथित शब्दों को सुनकर वहां उपस्थित तमाम लोगों को भय और चिंता ने घेर लिया। अब क्या होगा? इसका क्या उपाय है?
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-heading font-bold text-secondary-color">तुफान से सर्जित विनाश</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-1.jpg" alt="तुफान क्षति 1" className="w-full h-96 object-cover rounded" />
          </div>
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-2.jpg" alt="तुफान क्षति 2" className="w-full h-96 object-cover rounded" />
          </div>
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-3.jpg" alt="तुफान क्षति 3" className="w-full h-96 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* Solution Section - What Was Done */}
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-md p-8 bg-lighten-bg mb-6">
          <h3 className="text-lg font-semibold text-secondary-color mb-4">कंसलटेंट के मार्गदर्शन के अनुसार तात्कालिक उपाय किए गए :</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-secondary-color font-bold text-lg">•</span>
              <p className="text-base text-heading">वृक्ष के आस-पास के संगमरमर के फर्श को खोल कर उसमें अन्य रायण वृक्षों की मिट्टी डाली गई।</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-secondary-color font-bold text-lg">•</span>
              <p className="text-base text-heading">उचित पोशक तत्त्व डाले गए।</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-secondary-color font-bold text-lg">•</span>
              <p className="text-base text-heading">जलसिंचन आदि की मात्र का निर्णय किया गया।</p>
            </div>
          </div>
          
          <div className="bg-light-bg rounded-lg p-6 mt-6">
            <p className="text-base leading-relaxed text-heading italic">
            पंद्रह दिन व्यतीत होते-होते तो लाखों लोगों की आस्था से चमत्कार का सर्जन होने लगा और एक महीने में तो पुनः ‘नीलुड़ी रायण तरु तले' का साक्षात्कार हो गया! बाकी की बातें छाबियों को ही कहने दीजिये।
            </p>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-heading font-bold text-secondary-color">युद्धस्तर पर की गई कार्यवाही की झलक</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-4.jpg" alt="सुधार कार्य 1" className="w-full h-96 object-cover rounded" />
          </div>
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-5.jpg" alt="सुधार कार्य 2" className="w-full h-96 object-cover rounded" />
          </div>
          <div className="bg-light-bg rounded-lg p-4">
            <img src="/jinmandir/dev-bagicha/img-2.33-6.jpg" alt="सुधार कार्य 3" className="w-full h-96 object-cover rounded" />
          </div>
        </div>
      </section>

<section className='p-4 sm:p-16 bg-lighten-bg mb-12'>
  <div className='text-center mb-8'>
    <h2 className='text-xl md:text-2xl font-semibold text-heading px-4'>
      हजारों-लाखों हृदयों की आस्था द्वारा सर्जित चमत्कार की झांकी में निमित्त बनने का सौभाग्य अध्यात्म परिवार के इतिहास का स्वर्णपृष्ठ बन गया !
    </h2>
  </div>
  
  <div className='grid grid-cols-1 gap-6 items-center'>
    <div className='w-full'>
      <img src="/jinmandir/dev-bagicha/img-2.34-1.png" alt="" className='w-full h-auto' />
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-center'>
      <img src="/jinmandir/dev-bagicha/img-2.34-2.jpg" alt="" className='w-full h-auto' />
      <img src="/jinmandir/dev-bagicha/img-2.34-3.png" alt="" className='w-full h-auto' />
      <img src="/jinmandir/dev-bagicha/img-2.34-4.jpg" alt="" className='w-full h-auto' />
    </div>
  </div>
</section>
<CounterStatsUI statsData={statsData}/>

    </div>
  )
}

export default Page