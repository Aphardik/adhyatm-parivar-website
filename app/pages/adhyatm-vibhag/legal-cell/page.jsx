import React from 'react';

const Page = () => {
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-light-bg">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-heading">
                कानूनी मार्गदर्शन : लीगल सेल
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium mb-1 sm:mb-2">
                कार्य प्रारंभ : वि.सं. २०७२
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
              अध्यात्म परिवार के ही २५ वर्ष से ज्यादा अनुभवशाली चार्टर्ड अकाउंटेंटों की एक पूरी टीम इस बात के लिए सक्रिय है कि जैन ट्रस्टों को इनकम टैक्स, ट्रस्ट एक्ट आदि के कारण पैदा होने वाली मुश्किलों में मार्गदर्शन मिलता रहे।
            </p>
          </div>
        </div>
      </section>

      {/* Legal Advocacy Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            धर्मबाधक कानूनों से सुरक्षा
          </h3>
        </div>
        <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
          <p className="text-xl leading-relaxed mb-4">
            अध्यात्म परिवार के अग्रणीजन अपनी कानूनी सूझबूझ द्वारा तथा पहचान और प्रभाव का उपयोग करके, धर्मबाधक जिन मुद्दों पर सरकार द्वारा कानून बनाने का विचार चल रहा है अथवा जो धर्मबाधक कानून बन गए हैं, उनको रोकने अथवा सुधरवाने के लिए सक्रिय हैं।
          </p>
        </div>
      </section>

      {/* Seminar Image Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex max-w-4xl mx-auto flex-col p-6">
              <div className="h-96 w-full flex justify-center items-center">
                <img 
                  src="/adhyatm/legal-cell/img-3.62.png" 
                  alt="ट्रस्टियों के लिए आयोजित संगोष्ठी" 
                  className="w-full h-full object-contain rounded-lg" 
                />
              </div>
              <p className="text-base bg-lighten-bg text-center p-4 font-semibold text-content">
                  २७ दिवसीय 'गुरुजिन स्मरणोत्सव' के समय जिनशासन के ट्रस्टियों के लिए आयोजित एक संगोष्ठी का दृश्य ।
                </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">

        <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg mb-8">
          <p className="text-xl leading-relaxed mb-4">
            नहीं, यह कोई फाइलें भरने के लिए लिखे गए पत्र नहीं हैं। इनमें से किसी पत्र ने ट्रस्टों के अमुक दान पर लागू पढ़ने जा रहे GST को रोका है, तो किसी पत्र में UCC में कोई धर्मबाधक कलम न आए उसकी सावधानियां बताई हैं।
          </p>
          <p className="text-xl leading-relaxed">
            कोई पत्र श्री सम्मेत शिखर महातीर्थ प्रवासन स्थल (टूरिज्म प्लेस) ना बने इसके लिए लिखा गया है, तो कोई पत्र जीवंत पशुओं का निकास रोकने में सफल बना है।
          </p>
        </div>
        <div className="grid sm:grid-cols-4 w-full items-center">
          <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.63.png" alt="कानूनी दस्तावेज़ 1" />
          <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.64.png" alt="कानूनी दस्तावेज़ 2" />
          <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.65.png" alt="कानूनी दस्तावेज़ 3" />
          <img className="mx-auto w-full p-4" src="/adhyatm/legal-cell/img-3.66.png" alt="कानूनी दस्तावेज़ 4" />
        </div>
      </section>

      {/* Bal Deeksha Section */}
      <section className="py-8 mb-12 w-full sm:pb-12 lg:pb-16 ">
        <div className="text-center my-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-light-bg text-heading inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            सौभाग्य का सीमाचिह्न : बालदीक्षा की रक्षा
          </h3>
        </div>
        <div className="flex bg-lighten-bg flex-col md:flex-row items-center justify-center text-gray-800 p-6">
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              alt="भारत का मानचित्र और व्यक्ति की छाया"
              src="/adhyatm/legal-cell/img-3.67.png"
              className="w-full h-auto"
              width="200"
            />
          </div>
          <div className="text-center md:p-6 md:text-left md:pl-8">
            <div className="border-l-4 border-secondary-color rounded-md p-4 sm:p-10 bg-lighten-bg">
              <p className="text-xl leading-relaxed">
                बालदीक्षा को राजमान्यता पुस्तक का शीर्षक गवाही देता है। सदियों से बालदीक्षा पर रहा हुआ जोखम दूर हुआ है और राजमन्यता द्वारा 'बालदीक्षा' की जयजयकार हुई है।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;