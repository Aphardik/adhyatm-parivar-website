import BottomRighSvg from '@/app/_components/BottomRighSvg';
import HeaderSvg from '@/app/_components/HeaderSvg';
import TopLeftSvg from '@/app/_components/TopLeftSvg';
import React from 'react';

export const metadata = {
  title: 'पाइयशाला-प्राकृत शिक्षण शाला | अध्यात्म विभाग',
  description: '',
}


const Page = () => {
  return (
    <div className="mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">

            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
               पाइयशाला-प्राकृत शिक्षण शाला
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium">
               कार्य प्रारंभ : वि.सं. २०७९
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
             <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed">
             जो भाषा प्रभु वीर के मूल उपदेशों को अपने अंदर समाकर बैठी है, उस भाषा का ठोस और सरल पद्धति वाला अध्ययन चतुर्विध संघ कर सके इसलिए यह अद्भुत प्रकल्प फिलहाल पूज्य श्रमणी भगवंतो के लिए कार्यरत है। धीरे-धीरे सकल संघ के लिए कार्यरत बनेगा ।
            </p>
          </div>
         
        </div>
      </section>

     
    </div>
    </div>
  );
};

export default Page;