import React from "react";

const ArtworkPage = () => {
  return (
    <div className="py-6 auto bg-white font-body">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-gray-800 text-gray-100 text-4xl font-bold p-4">
              4.16
            </div>
          </div>
          <div className="text-gray-800 font-heading text-3xl font-bold mb-2">
            चित्र निर्माण ...
          </div>
          <div className="text-gray-600 font-semibold text-sm mb-4">
            (कार्य प्रारंभ : वि.सं. २०६७)
          </div>
          <div className="text-gray-800 mb-4">
            पार्श्वप्रभु की थुई में हम बोलते हैं :
            <br />
            <span className="font-bold text-gray-800">
              'नेमी - राजी चित्त विराजी विलोकित व्रत लिये'
            </span>
            <br />
            अर्थात कि चित्रों का दर्शन वैराग्य में और पट निहारने की मंगलक्रिया भक्ति में वृद्धि करती है।
            <br />
            इसलिए अध्यात्म परिवार ऐसे चित्र तैयार कर रहा है जिनसे शुभभावों में खूब अभिवृद्धि होगी!
          </div>
          <div className="text-gray-800 mb-4">
            अभी तक श्री मुनिसुव्रत स्वामी का जीवनदर्शन, पूज्य हरिभद्रसूरीश्वरजी महाराज का व्यक्तित्व चित्र,
            कल्पसूत्र-बारसासूत्र-सामाचारी चित्रसंपुट, पाटपरंपरावर्ती पूज्यों के चित्र, प्राचीन पूज्यों के प्रसंगचित्र,
            गिरिराज आदि तीर्थ के पट इत्यादि चित्र सज्ज हो चुके हैं !
          </div>
          <div className="text-gray-800 font-semibold sm:text-right p-2 bg-gray-100 sm:mb-4">
            श्री कल्पसूत्र में वर्णित साधु सामाचारी का साक्षात्कार करवाते ऐसे चित्रों का निर्माण अध्यात्म परिवार की पहल है।
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-gray-50 flex flex-col items-center justify-center">
          <div className="mt-4">
            <img
              alt="A scenic view of a mountain with a temple on top"
              className="border sm:w-2/3 mx-auto"
              height="300"
              width="400"
              src="/adhyatm/chitra-nirmaan/img-3.68.png"
            />
          </div>
          <p className="font-semibold text-gray-900 p-2 bg-gray-50">
            श्री गिरनार तीर्थ : जैसे साक्षात हो !
          </p>
          <div className="mb-4">
            <img
              alt="A person sitting in a room with paintings and art supplies"
              className="border sm:w-2/3 mx-auto"
              height="300"
              width="400"
              src="/adhyatm/chitra-nirmaan/img-3.69.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkPage;
