import React from 'react'

const page = () => {
  return (
     <div className="mx-auto py-6 font-body">
      {/* <!-- Title Block --> */}
      <div className="flex mb-4">
        <div className="bg-gray-800 inline text-white text-4xl font-bold p-4">
          <span>2.4</span>
        </div>
        <div className="ml-4">
          <h1 className="text-gray-800 font-heading text-xl sm:text-2xl font-bold">
            जिनालय तथा गृहजिनालय के लिए संगमरमर के पत्थर की घड़ाई
          </h1>
          <p className="font-bold text-gray-500">
            (कार्य प्रारंभ : वि.सं. २०७७)
          </p>
        </div>
      </div>

      {/* <!-- Description Paragraph --> */}
      <p className="mb-4">
        अध्यात्म शिल्पशाला में हो रही जिनालय के पत्थरों की घड़ाई की बात आपने पढ़ी और निहारी।
        इस कार्य के दरमियान ही वहां गृहजिनालय के योग्य पत्थरों को अलग से तराशा जाता है।
        जिनमें से गृहजिनालय बनाने की भावना रखने वाले सुश्रावकों की भावना अनुसार हृदय आह्लादक
        कोरणी वाली सुंदर देरियां तैयार करके उपलब्ध करवाई जाती हैं।
      </p>

      {/* <!-- Images Section --> */}
      <div className="flex justify-between px-20 border-blue-50 mb-4">
        <img
          alt="A beautifully carved marble temple with intricate designs"
          className="w-1/3 p-2"
          height="300"
          src="/jinmandir/patthar-ghadayi/img-2.27.png"
          width="200"
        />
        <img
          alt="A beautifully carved marble temple with intricate designs"
          className="w-1/3 p-2"
          height="300"
          src="/jinmandir/patthar-ghadayi/img-2.28.png"
          width="200"
        />
        <img
          alt="A beautifully carved marble temple with intricate designs"
          className="w-1/3 p-2"
          height="300"
          src="/jinmandir/patthar-ghadayi/img-2.29.png"
          width="200"
        />
      </div>

      {/* <!-- Caption --> */}
      <p className="text-center text-gray-700 font-bold">
        अध्यात्म परिवार द्वारा निर्माण की हुई कुछ गृहजिनालय की मोहक देरियां।
      </p>
     
    </div>
  )
}

export default page