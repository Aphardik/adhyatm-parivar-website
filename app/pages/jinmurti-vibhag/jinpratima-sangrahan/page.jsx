import React from 'react'

const Page = () => {
  return (
      <div className="bg-gray-50 text-gray-800 font-body">
      {/* <!-- Header --> */}
         <header className="bg-gray-100 border border-gray-200">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-gray-300 text-gray-800 text-2xl sm:text-4xl font-bold font-heading px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-6 min-w-fit">
              1.4
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-gray-900 mb-1 sm:mb-2">प्राचीन जिनप्रतिमा संग्रहण</h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium"> (कार्य आरंभ : वि.सं. २०६८)</p>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Content Section --> */}
       <div className="py-4 sm:py-6 lg:py-8 lg:px-0">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* <!-- Left Column --> */}
        <div className="md:w-2/5 bg-gray-100 p-8 border border-gray-200">
          {/* <!-- Paragraphs --> */}
          <div className="text-gray-700 mb-4">
            जमीन से निकलने वाली प्रतिमाजी सरकारी म्यूज़ियम आदि अयोग्य स्थानों पर न चली जाएं अपितु योग्य स्थान पर उनकी पूजा हो सके, इसलिए उन प्रतिमाजी का शुद्धिकरण, यदि जरूरत हो तो लेप आदि करके योग्य स्थान पर विराजमान करना। यह कार्य सुचारू रूप से चल रहा है।
          </div>
          <div className="text-gray-700 mb-8">
            साथ-साथ निर्जन बन गए गांवों आदि में अपूज रह जाने की संभावना वाले जिनबिंबों की योग्य स्थान पर पूजा हो सके, इसमें भी अध्यात्म परिवार 'सेतु' बन रहा है।
          </div>

          {/* <!-- Highlighted Box --> */}
          <div className="bg-gray-200 border-l-4 border-gray-700 rounded-md text-gray-800 p-8">
            डीसा के नजदीक खेत में से निकले अतिप्राचीन आदिनाथ दादा आज श्री शांतिकनक जैन संघ, नानपुरा-सूरत जिनालय के महाराजा बनकर शोभायमान हैं।
          </div>

          {/* <!-- Footer Title (Hidden on small screens) --> */}
          <div className="text-gray-400 font-heading hidden sm:block text-2xl font-bold mt-12">
            प्राचीन जिनप्रतिमा संग्रहण
          </div>
        </div>

        {/* <!-- Right Column (Image) --> */}
        <div className="md:w-3/5 border border-gray-200">
          <img
            src="/jinmurti/jinpratima-sangrahan/img-1.25.png"
            alt="Decorative ornate structure with a silhouette of a deity in the center"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page