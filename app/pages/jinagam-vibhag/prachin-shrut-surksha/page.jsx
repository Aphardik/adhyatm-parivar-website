import React from "react";

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-background">
      <header className="bg-light-bg ">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                प्राचीन श्रुत सुरक्षा
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रगति: वि.सं. २०६३
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="border-l-4 border-secondary-color rounded-xl p-8 bg-lighten-bg">
          <p className="text-xl leading-relaxed text-heading">
            जिस श्रुत के बल पर २१,००० वर्ष तक शासन जयवंता रहने वाला है, उसकी
            महिमा शब्दों में वर्णन कर पाना असम्भव है। पूज्य कृपानाथ के
            मार्गदर्शन से सैकड़ों श्रमण-श्रमणियों अपने हजारों घंटे दे कर इसकी
            रक्षा के लिए तनतोड़ परिश्रम कर रहे हैं। जिसके सुंदर परिणाम स्वरूप
            अध्यात्म परिवार द्वारा की गई प्राचीन श्रुत प्रकाशन की एक छोटीसी झलक
            :
          </p>
        </div>
      </section>

      <section className=" py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className=" rounded-lg overflow-hidden ">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.1-1.png"
                  alt="1"
                  className="w-full h-64 object-cover "
                />
              </div>

              <div className=" rounded-lg overflow-hidden ">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.1-2.png"
                  alt="2"
                  className="w-full h-64 object-cover "
                />
              </div>

              <div className=" rounded-lg overflow-hidden  ">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.1-3.png"
                  alt="3"
                  className="w-full h-64 object-cover "
                />
              </div>

              <div className=" rounded-lg overflow-hidden border ">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.1-4.png"
                  alt="4"
                  className="w-full h-64 object-cover "
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.1-5.png"
                  alt="5"
                  className="w-full h-64 object-cover "
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="">
              <div className=" rounded-lg overflow-hidden">
                <img
                  src="/jinagam/prachin-shrut-suraksha/img-3.2.png"
                  alt="ap"
                  className="w-full h-80 lg:h-96 object-contain "
                />
              </div>
            </div>

            <div className=" space-y-6">
              <p className="p-4 border-l-4 border-secondary-color rounded-xl bg-lighten-bg text-lg text-heading leading-relaxed">
                सैकड़ों घंटों के परिश्रम द्वारा ये ग्रंथ गीतार्थों के हाथों तक
                पहुंचे हैं।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
