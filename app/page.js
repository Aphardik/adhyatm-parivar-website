import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import LogoDescription from './_components/LogoDescription';
import Letters from './_components/letters';
import RegisterForm from './_components/RegisterForms';

const LandingPage = () => {
  return (
    <div>
    <div className="font-heading min-h-[70vh] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-8xl leading-relaxed font-bold text-gray-900 mb-8">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600">
           अध्यात्म परिवार
          </span>
          <span className="block text-2xl md:text-3xl text-gray-700 font-medium">
            मेरा शासन मेरा जीवन
          </span>
        </h1>
        
        {/* Main content */}
        <div className="">
          <div className="sm:px-36">
            <p className="text-lg md:text-xl font-body text-gray-700 leading-relaxed">
              अध्यात्म परिवार एक समर्पित संगठन है, जो धार्मिक और अध्यात्मिक उन्नति के मार्ग पर समाज का मार्गदर्शन करता है। इस संगठन द्वारा शासन आराधना, प्रभावना, और धार्मिक परंपराओं की रक्षा जैसे कार्यों का संचालन किया जाता है। इसके साथ ही, विशेष आयोजन, ध्यान शिविर, और प्रवचन कार्यक्रमों के माध्यम से समाज में अध्यात्मिक जागरूकता और समर्पण की भावना को प्रोत्साहित किया जाता है।
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
      <LogoDescription/>
      <Letters/>
      <RegisterForm/>
    </div>
  );
};

export default LandingPage;