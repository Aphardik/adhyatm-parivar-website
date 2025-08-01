import React from 'react';

const Page = () => {
  return (
    <div className="container  mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
               पाइयशाला-प्राकृत शिक्षण शाला
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
               कार्य प्रारंभ : वि.सं. २०७९
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
            <p className="text-xl leading-relaxed">
             जो भाषा प्रभु वीर के मूल उपदेशों को अपने अंदर समाकर बैठी है, उस भाषा का ठोस और सरल पद्धति वाला अध्ययन चतुर्विध संघ कर सके इसलिए यह अद्भुत प्रकल्प फिलहाल पूज्य श्रमणी भगवंतो के लिए कार्यरत है। धीरे-धीरे सकल संघ के लिए कार्यरत बनेगा ।
            </p>
          </div>
         
        </div>
      </section>

     
    </div>
  );
};

export default Page;