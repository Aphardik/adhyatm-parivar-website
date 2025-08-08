import HeaderSvg from '@/app/_components/HeaderSvg';
import React from 'react';

export const metadata = {
  title: 'चित्र निर्माण | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-4">
                चित्र निर्माण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-maroon font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०६७
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="rounded-sm text-maroon p-4 sm:p-10 bg-lightyellow">
            <p className="text-xl leading-relaxed mb-1">
              पार्श्वप्रभु की थुई में हम बोलते हैं :
            </p>
            <p className="text-xl leading-relaxed font-bold mb-1">
              'नेमी - राजी चित्त विराजी विलोकित व्रत लिये'
            </p>
            <p className="text-xl leading-relaxed mb-1">
              अर्थात कि चित्रों का दर्शन वैराग्य में और पट निहारने की मंगलक्रिया भक्ति में वृद्धि करती है।
            </p>
            <p className="text-xl leading-relaxed">
              इसलिए अध्यात्म परिवार ऐसे चित्र तैयार कर रहा है जिनसे शुभभावों में खूब अभिवृद्धि होगी!
            </p>
          </div>
        </div>
      </section>

      {/* Completed Works Section */}
      <section className="py-8 w-full sm:pb-6 lg:pb-6">

        <div className="rounded-sm text-maroon p-4 sm:p-10 bg-lightyellow">
          <p className="text-xl leading-relaxed">
            अभी तक श्री मुनिसुव्रत स्वामी का जीवनदर्शन, पूज्य हरिभद्रसूरीश्वरजी महाराज का व्यक्तित्व चित्र, कल्पसूत्र-बारसासूत्र-सामाचारी चित्रसंपुट, पाटपरंपरावर्ती पूज्यों के चित्र, प्राचीन पूज्यों के प्रसंगचित्र, गिरिराज आदि तीर्थ के पट इत्यादि चित्र सज्ज हो चुके हैं !
          </p>
        </div>
      </section>


      {/* Images Section */}
      <section className="py-8 px-4">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Image */}
            <div className="flex flex-col p-6">
              <div className="h-96 w-full flex justify-center items-center mb-6">
                <img 
                  src="/adhyatm/chitra-nirmaan/img-3.68.jpeg" 
                  alt="गिरनार तीर्थ चित्र" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="text-center bg-lightyellow p-4">
                <p className="text-base font-semibold text-maroon">
                  श्री गिरनार तीर्थ : <br /> जैसे साक्षात हो !
                </p>
              </div>
            </div>

            {/* Second Image */}
            <div className="flex flex-col p-6">
              <div className="h-96 w-full flex justify-center items-center mb-6">
                <img 
                  src="/adhyatm/chitra-nirmaan/img-3.69.png" 
                  alt="चित्र निर्माण कार्यशाला" 
                  className="w-full h-full object-cover rounded-lg" 
                />
              </div>
              <div className="text-center bg-lightyellow p-4">
                <p className="text-base font-semibold text-maroon">
                  श्री कल्पसूत्र में वर्णित साधु सामाचारी का साक्षात्कार करवाते ऐसे चित्रों का निर्माण अध्यात्म परिवार की पहल है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Page;