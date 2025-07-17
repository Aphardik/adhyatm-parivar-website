import React from 'react'

const page = () => {
  return (
     <div className="mx-auto py-6 font-body">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        <div className="lg:col-span-1">
          <div className="flex items-center mb-4">
            <div className="bg-[#731f46] text-gray-200 text-4xl font-bold pt-6 px-4 py-2">
              3.1
            </div>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-gray-800">
            प्राचीन श्रुत सुरक्षा...
          </h1>
          <p className="text-gray-700 text-sm font-semibold">
            (कार्य प्रगति: वि.सं. २०६३)
          </p>
          <p className="mt-2 text-base text-gray-700">
            जिस श्रुत के बल पर २१,००० वर्ष तक शासन जयवंता रहने वाला है, उसकी महिमा शब्दों में वर्णन कर पाना असम्भव है। पूज्य कृपानाथ के मार्गदर्शन से सैकड़ों श्रमण-श्रमणियों अपने हजारों घंटे दे कर इसकी रक्षा के लिए तनतोड़ परिश्रम कर रहे हैं। 
            जिसके सुंदर परिणाम स्वरूप अध्यात्म परिवार द्वारा की गई प्राचीन श्रुत प्रकाशन की एक छोटीसी झलक :
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
            <img src="/jinagam/prachin-shrut-suraksha/img-3.2.png" alt="Books Image" className="w-full sm:w-2/3" />
            <div className="mt-4 sm:mt-0 text-center text-sm p-4 w-full sm:w-1/3 font-semibold bg-pink-200 text-gray-800">
              <p>
                सैकड़ों घंटों के परिश्रम द्वारा ये ग्रंथ गीतार्थों के हाथों तक पहुंचे हैं।
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <img src="/jinagam/prachin-shrut-suraksha/img-3.1.png" alt="Books Image" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  )
}

export default page