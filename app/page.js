import React from "react";
import { FaArrowRight } from "react-icons/fa";
import LogoDescription from "./_components/LogoDescription";
import Letters from "./_components/Letters";
import RegisterForm from "./_components/RegisterForms";
import VibhagDescription from "./_components/VibhagDescription";
import SbaHomePage from "./_components/SbaHomePage";

const LandingPage = () => {
  return (
    <div>
      <div className="font-heading w-full  min-h-[70dvh]  flex items-center justify-center px-4 sm:px-6 lg:px-4">
        <div className="mx-auto  text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-8xl leading-relaxed font-bold text-heading mb-8">
            <span className="block text-[#01044c]">अध्यात्म परिवार</span>
            <span className="block text-2xl md:text-3xl text-[#01044c] font-medium">
              मेरा शासन मेरा जीवन
            </span>
          </h1>

          {/* Main content */}
          <div className="">
            <div className="sm:px-36">
              <p className="text-lg md:text-xl font-body text-[#01044c] leading-relaxed">
                अध्यात्म परिवार एक समर्पित संगठन है, जो धार्मिक एवं आध्यात्मिक
                उन्नति के मार्ग पर चलने में सबको सहायक बनता है। इस संगठन द्वारा
                जैनशासन की आराधना, प्रभावना और धार्मिक परंपराओं की रक्षा जैसे
                विभिन्न कार्यों का संचालन किया जाता है। इसके साथ ही, विशेष आयोजन
                और प्रवचन कार्यक्रमों के माध्यम से सर्वत्र आध्यात्मिक जागरूकता
                और समर्पण की भावना को प्रोत्साहित किया जाता है।
              </p>
            </div>
          </div>
          {/* 
         <div className="mt-12">
          <button className=" border font-body text-white border-gray-400 bg-gray-700 hover:bg-gray-800 hover:text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300">
            Know More about us
            <FaArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div> */}
        </div>
      </div>
      <LogoDescription />
      <SbaHomePage />
      <VibhagDescription />
      <Letters />
      <RegisterForm />
    </div>
  );
};

export default LandingPage;





// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import LogoDescription from "./_components/LogoDescription";
// import Letters from "./_components/Letters";
// import RegisterForm from "./_components/RegisterForms";
// import VibhagDescription from "./_components/VibhagDescription";

// const LandingPage = () => {
//   return (
//     <div>
//       <div className="font-heading w-full max-w-7xl min-h-[70dvh]  flex items-center justify-center px-4 sm:px-6 lg:px-4 pb-16 sm:pb-0">
//         <div className="mx-auto  text-center">
//           {/* Main heading */}
//           <h1 className="text-5xl md:text-8xl leading-relaxed font-bold text-heading mb-8">
//             <span className="block text-heading">अध्यात्म परिवार</span>
//             <span className="block text-2xl md:text-3xl text-content font-medium">
//               मेरा शासन मेरा जीवन
//             </span>
//           </h1>

//           {/* Main content */}
//           <div className="">
//             <div className="sm:px-36">
//               <p className="text-lg md:text-xl font-body text-content leading-relaxed">
//                 अध्यात्म परिवार एक समर्पित संगठन है, जो धार्मिक एवं आध्यात्मिक
//                 उन्नति के मार्ग पर चलने में सबको सहायक बनता है। इस संगठन द्वारा
//                 जैनशासन की आराधना, प्रभावना और धार्मिक परंपराओं की रक्षा जैसे
//                 विभिन्न कार्यों का संचालन किया जाता है। इसके साथ ही, विशेष आयोजन
//                 और प्रवचन कार्यक्रमों के माध्यम से सर्वत्र आध्यात्मिक जागरूकता
//                 और समर्पण की भावना को प्रोत्साहित किया जाता है।
//               </p>
//             </div>
//           </div>
//           {/* 
//          <div className="mt-12">
//           <button className=" border font-body text-white border-gray-400 bg-gray-700 hover:bg-gray-800 hover:text-white font-medium py-3 px-8 rounded-full text-lg transition-all duration-300">
//             Know More about us
//             <FaArrowRight className="inline-block ml-2 h-5 w-5" />
//           </button>
//         </div> */}
//         </div>
//       </div>
//       <LogoDescription />
//       <VibhagDescription />
//       <Letters />
//       <RegisterForm />
//     </div>
//   );
// };

// export default LandingPage;
