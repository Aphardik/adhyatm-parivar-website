"use client";
import React, { useState, useEffect } from 'react';

export default function TestimonialSlider() {

    const testimonials = [
        {
          quote: "प्रतिमाजी की सुरक्षा के लिए टीका आदि अत्यंत ही जोखमी है, तथा ओप आदि के कार्यों में चालू कारीगर बिल्कुल विश्वसनीय नहीं हैं। अतः इस संबंध में अध्यात्म परिवार संस्था के सहयोग से काम करवाना हितावह है। ",
          author: "बाबु अमीचंद पन्नालाल",
          organization: "आदेश्वर टेंपल चैरिटेबल ट्रस्ट, मुंबई"
        },
        {
          quote: "आपश्री के परिवार ने वर्तमान काल में विशुद्धचारित्र पालने वाले महात्माओं को शहर में निर्दोष भूमि बहुत दुर्लभ हो गई है। उनके लिए कृत्रिम निर्दोष भूमि बनाकर शासन की हिलना से बचाने के लिए जो बीड़ा उठाया है उसके बदले अध्यात्म परिवार को लाख धन्यवाद...",
          author: "मुनि जगतशेखरविजय का धर्मलाभ",
        },
        {
          quote: "शासन की धरोहर ऐसे जिनालय की सुरक्षा के लिए हमारे श्री संघ की विनंती को आपके परिवार ने स्वीकार किया। उसके लिए श्री अध्यात्म परिवार की खूब अनुमोदना ।",
          author: "श्री श्वेतांबर मूर्तिपूजक तपागच्छ ",
          organization:"जैन संघ, जगडूशानगर, मुंबई"
        },
        {
          quote: "हमारी सोसाइटी में अभी तक कुंडी के लिए जो कंप्लेंट आती थी, इसबार आपके मार्गदर्शन से कार्य करने से उसका समाधान हो गया है। लगभग कंप्लेंट बंद ही हो गई है। मेरी सर्व संघों से विनती है कि आप सभी को भी इसी प्रकार कुंडी बनवाना चाहिए।",
          author: " श्री श्वेतांबर मूर्ति पूजक तपागच्छ ",
          organization:"जैन संघ, मुलुंड पूर्व, मुंबई"
        },
        {
          quote: "जिस प्रकार गंगोत्री में से निकलती गंगा आगे बढ़ती है और विराट फलक पर फैल जाती है, उसी प्रकार आपके परिवार की श्रुतयात्रा भी फलक पर विस्तृत होती जाए ऐसी प्रभु से प्रार्थना है।” एक बार पुनः आपके इस कार्य की खूब - खूब अनुमोदना ",
          author: "श्रमण भगवंत"
        },
        {
          quote: "प्रायः अप्राप्तव्य तथा अप्रगट ऐसे बहुत सारे प्राचीन साहित्य का पूज्यों द्वारा संशोधन-संपादन करके सर्वप्रथम बार प्रकाशित हुआ, इसकी खूब अनुमोदना।",
          author: "सु.बाबूभाई सरेमल, बेड़ावाला",
        },
        {
          quote: "हमारे श्री चिंतामणि पार्श्वनाथ जिनालय में पिछले काफी समय से ऊपर छत से चोमासे की ऋतु में पानी आता था। इस संबंध में हमने आपश्री का संपर्क किया था तथा आपश्री ने हमारे उस काम को बहुत सुंदर रूप से संपन्न किया। अब वहां से जरा भी पानी नहीं आता है और हम जिनालय की आशातना से बच सके हैं। ",
          author: "श्री इंद्रपुरी जैन संघ, वडोदरा",
        },
        {
          quote: "जि. डूंगरपूर (राज.) से श्री आदिनाथजी जैन वे.मू.पू.संघ विशेष आप द्वारा हमारे जिन मंदिर हेतु मंदिर उपकरण पित्तल के भेजे गए उसके लिये हमारा श्री संघ आपकी अनुमोदना करते है।",
          author: " श्री संभवनाथजी जैन श्वेताम्बर मूर्तिपूजक ",
          organization:"संस्थान सागवाडा, डूंगरपुर"
        },
        {
          quote: "हमारे श्रीसंघ में आयंबिलशाला तथा पूज्य साधु-साध्वीजी भगवन्तों को गरम पानी जल्दी से ठंडा होकर मिल सके इसके लिए आपके हस्तक पानी का स्टैंड प्राप्त हुआ है। श्रीसंघ आपके इस उत्तम कार्य की खूब-खूब अनुमोदना करता है।",
          author: "श्री रांदेर रोड जैन संघ, सुरत"
        }
      ];

  const [currentGroup, setCurrentGroup] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);
  const autoplayInterval = 5000;

  // Handle window resize and group calculation
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentGroup(0); // Reset to first group on resize
    };
    
    handleResize(); // Initial set
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate groups based on screen size
  const groupSize = windowWidth <= 768 ? 1 : 3; // Adjust breakpoint as needed
  const testimonialGroups = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    testimonialGroups.push(testimonials.slice(i, i + groupSize));
  }

  // Auto-advance the slider
  useEffect(() => {
    if (!autoplay || testimonialGroups.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % testimonialGroups.length);
    }, autoplayInterval);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonialGroups.length]);

  // Pause autoplay when user interacts
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const goToGroup = (index) => {
    setCurrentGroup(index);
    setAutoplay(false); // Pause when user navigates manually
    setTimeout(() => setAutoplay(true), 5000); // Resume after 5 seconds
  };

  const nextGroup = () => {
    setCurrentGroup((prevGroup) => (prevGroup + 1) % testimonialGroups.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  const prevGroup = () => {
    setCurrentGroup((prevGroup) => 
      prevGroup === 0 ? testimonialGroups.length - 1 : prevGroup - 1
    );
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };


  return (
    <div className='max-w-7xl bg-white pt-20'>
        <img src="/6.jpg" alt="" />
    <div className=" font-body p-8 ">
      <div className=" mx-auto">
        <h1 className=" text-2xl  sm:text-3xl font-heading font-bold text-center text-gray-800 mb-8">
        प्रतिभाव पत्रों में से कुछ चुनिंदा प्रसादी...
        </h1>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevGroup}
              className="bg-cyan-800/50 text-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-cyan-800 focus:outline-none transition-all duration-300"
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextGroup}
              className="bg-cyan-800/50 text-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-cyan-800 focus:outline-none transition-all duration-300"
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentGroup * 100}%)` }}
          >
            {testimonialGroups.map((group, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-2"
              >
                {group.map((testimonial, idx) => (
                  <div 
                    key={idx}
                    className="bg-white  border border-purple-100 overflow-hidden aspect-square flex flex-col transition-all duration-300 hover:shadow-xl hover:border-purple-300"
                  >
                 <div 
                    key={index} 
                    className="bg-white  border border-purple-100 overflow-hidden aspect-square flex flex-col transition-all duration-300 hover:shadow-xl hover:border-purple-300"
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="mb-4 flex-grow overflow-y-auto">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-[0.95rem]">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-auto border-t border-purple-100 pt-4">
                        <p className="text-cyan-800 font-semibold text-right">...{testimonial.author}</p>
                        {testimonial.organization && (
                          <p className="text-cyan-800 text-sm text-right">{testimonial.organization}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8">
            {testimonialGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToGroup(index)}
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-all duration-300 ${
                  currentGroup === index ? 'bg-cyan-800 scale-125' : 'bg-cyan-800/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        
       
        </div>
      </div>
    </div>
    </div>
  );
}