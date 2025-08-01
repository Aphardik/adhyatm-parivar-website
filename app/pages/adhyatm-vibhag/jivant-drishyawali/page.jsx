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
               जीवंत दृश्यावली
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
              कार्य प्रारंभ : वि.सं.२०७१
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
            अध्यात्म परिवार द्वारा हृदय को वैराग्यरस से भिंजा दे और शासनखुमारी से छलका दे ऐसी विविध जीवंत दृश्यावली (भाववर्धक नाटक) तैयार किए गए हैं।
            </p>
            <p className="text-xl leading-relaxed">
            इसमें विशेष तौर पर शास्त्र तथा महापुरुषों की मर्यादा अखंडित रहे इस प्रकार भगवान, साधु आदि महापुरुषों के किरदार निभाए बिना मात्र बोधदायक प्रसंग दर्शाए गए हैं।
            </p>
            <p className="text-xl leading-relaxed">
            उन प्रस्तुतियों को देखने के बाद दर्शकों में एक अलग ही संवेदना पैदा होती है। अभी तक 'भवप्रपंच', 'आनंदक्रांति' तथा 'शौर्यगाथा' जैसी दृश्यावली कई लोगों के जीवन परिवर्तन में आधार बनी है।
            </p>
          </div>
         
        </div>

      </section>

     
           <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
           'शौर्यगाथा' के ऐसे दृश्यों ने अच्छे-अच्छे की आंखें नम कर दी !
          </h3>

        </div>
                  <div className="grid sm:grid-cols-3 w-full items-center">
            <img className="mx-auto w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.52.png" alt="" />
            <img className="mx-auto w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.53.png" alt="" />
            <img  className="mx-auto w-full p-4" src="/adhyatm/jivant-drishyawali/img-3.54.png" alt="" />
          </div>
        
      </section>
    </div>
  );
};

export default Page;