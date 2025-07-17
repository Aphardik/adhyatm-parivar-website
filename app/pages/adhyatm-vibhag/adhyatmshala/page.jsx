import React from 'react';

const AdhyatmShala = () => {
  return (
    <div className="bg-white font-body">
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8">
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-start md:items-start">
          <div className="flex flex-col items-start md:items-start">
            <div className="bg-gray-700 text-white text-center p-4 rounded">
              <div className="text-4xl font-bold">4.9</div>
            </div>

            <div className="mt-4 text-gray-700 text-2xl font-heading font-bold">
              अध्यात्मशाला...
            </div>

            <div className="text-gray-600 text-base">
              (कार्य प्रारंभ : वि.सं. २०७४)
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:ml-8">
            <p className="text-gray-800 text-base leading-relaxed">
              आज के बालक कल के शासन के रखवाले हैं। यदि उनको अच्छे संस्कार नहीं दिए
              गए तो उनके दिलों दिमाग में नास्तिकता बस जाएगी! अध्यात्म परिवार
              द्वारा संचालित संघों में तथा पथप्रदर्शक सूरिभगवंत तथा उनके
              आज्ञावर्ती श्रमणों के चातुर्मास स्थलों में अभी प्रारंभिक स्तर पर चल
              रही ‘अध्यात्मशाला' के अभ्यासक्रम का प्रभाव ऐसा है कि बालकों के
              माता-पिता आयोजकों को आभार व्यक्त करते-करते गदगद हो जाते हैं।
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-4 flex flex-col items-center">
          <div className="mt-4 flex flex-col md:flex-row items-center">
            <img
              src="/adhyatm/adhyatmshala/img-3.51.png"
              alt="Children sitting and studying in a classroom setting"
              className="rounded-sm m-2 w-full"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdhyatmShala;
