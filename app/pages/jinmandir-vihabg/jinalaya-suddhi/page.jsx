import React from 'react'

const page = () => {
  return (
     <div class="container mx-auto py-8 font-body">
      <div class="flex flex-col md:flex-row gap-8">
        {/* <!-- First Column --> */}
        <div class="w-full md:basis-2/5">
          <div class="py-4">
            <div class="text-4xl font-bold">
              <span class="bg-gray-800 text-white px-4 py-2">2.2</span>
            </div>
            <h1 class="text-gray-800 text-2xl font-heading font-bold mt-8">
              जिनालय शुद्धि - उपाश्रय शुद्धि...
            </h1>
            <p class="text-gray-600 mt-2">(कार्य प्रारंभ : वि.सं. २०७७)</p>
          </div>
          <p class="mt-4">
            ‘प्रभु का धाम तो देवविमान जैसा लगना चाहिए।’
          </p>
          <p class="mt-2">
            इस भावना से यह कार्य करने की अध्यात्म परिवार की रीत अनोखी है। जिनालय का प्रत्येक स्तंभ, कोना, सामरण-शिखर और बारिक-बारिक कोरणी-इन सभी भागों की शुद्धि के साथ पूजा के विविध उपकरणों की भी शुद्धि की जाती है।
          </p>
          <p class="mt-2">
            आराधना के धाम की तरह उपाश्रयों की भी आमूलचूल शुद्धि यह इसके साथ जुड़ा हुआ प्रकल्प है।
          </p>
          <p class="mt-2">
            शुद्धियों के पूर्व और पश्चात की छवियों में कार्य की खूबी दिखाई देगी!
          </p>
        </div>

        {/* <!-- Second Column --> */}
        <div class="w-full md:basis-1/5">
          <img
            alt="Main Image"
            class="h-full w-full object-cover rounded"
            src="/jinmandir/jinalaya-suddhi/img-2.10.png"
          />
        </div>

        {/* <!-- Third Column --> */}
        <div class="w-full md:basis-2/5 flex flex-col justify-between">
          <div class="bg-gray-100 p-4 rounded">
            <h3 class="text-xl font-heading font-bold text-gray-800">
              सौभाग्य का सीमाचिह्न : शत्रुंजय के शिखर पर, दादा के दरबार में....
            </h3>
            <p class="mt-2">
              हर वर्ष दादा आदिनाथ के गर्भगृह-रंगमंडप की शुद्धि तथा आस-पास के जिनालयों-देरियों तथा नवटूंक के जिनालयों का शुद्धिकरण, रंगरोगान आदि का कार्य गतिमान है।
            </p>
            <p class="mt-2">
              नवटूक के जिनालयों के सभी शिखरों की शुद्धि के साथ निगोद न हो इस लिए जर्मन कंपनी के वोटर रिपेलन्ट द्वारा प्रिझर्वेशन-प्रोसेस प्रगति पर है।
            </p>
          </div>
          <img
            alt="Bottom Image"
            class="rounded-lg mt-4 w-full object-cover"
            src="/jinmandir/jinalaya-suddhi/img-2.11.png"
          />
        </div>
      </div>
    </div>
  )
}

export default page