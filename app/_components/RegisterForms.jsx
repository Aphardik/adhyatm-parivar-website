"use client";
import React from "react";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RegisterForm = () => {
  return (
    <div className="py-16 px-5 sm:px-10">
      
      {/* <Link
        href="/pages/booklist"
        className="group relative block w-full h-40 sm:h-52 overflow-hidden rounded-sm shadow-lg my-6 transform transition-transform duration-300 hover:scale-[1]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50 group-hover:brightness-75 transition-all duration-500"
          style={{
            backgroundImage: "url(/book-store.jpg)",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 h-full text-white">
          <div className="flex items-center gap-4">
            <img
              src="/book-illustration.png"
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/20 p-2"
              alt="Book icon"
            />
            <span className="font-heading text-base sm:text-3xl font-bold drop-shadow-md">
              ज्ञान भंडार में मौजूद पुस्तकों की सूची देखने के लिए यहां क्लिक
              करें
            </span>
          </div>

          <MdOutlineKeyboardDoubleArrowRight
            size={32}
            className="text-white opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-cyan-800 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </Link> */}

      <div className="">
        <h1 className="font-bold flex items-center gap-2 border-b-2  border-cyan-800 font-heading mb-8 text-xl text-gray-600 text-start">
          रजिस्ट्रेशन फॉर्म
          {/* इवेंट्स के लिए */}
          <MdOutlineKeyboardDoubleArrowRight size={24} className="arrow" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-body justify-items-center">
          {/* Book Card */}
           <div className="flex flex-col items-center justify-center w-full group max-w-[210px]">
            <div className="relative w-full h-[320px]"> {/* Fixed height for portrait aspect ratio */}
              <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
                <img
                  className="h-full w-full object-cover object-center"
                  src="/bookimages/ravanni-bhitarma.jpg"
                  alt="ravanni-bhitarma"
                />
                <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
                  <h3 className="text-2xl text-center font-bold mb-3">
                    રાવણની ભીતરમાં
                  </h3>
                  <div className="space-y-2 text-sm text-center mb-4">
                    <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
                    <p>અધ્યાત્મ ભવન</p>
                    <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
                    <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
                    <p className="">M. 7676769600</p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/pages/form/ravanni-bhitarma"
              className="text-lg font-heading py-2 w-full text-center bg-cyan-800 text-white font-semibold"
            >
              Register here
            </Link>
          </div>
          
         <div className="flex flex-col items-center justify-center w-full group max-w-[210px]">
  <div className="relative w-full h-[320px]"> {/* Fixed height for portrait aspect ratio */}
    <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
      <img
        className="h-full w-full object-cover object-center"
        src="/bookimages/udayanmantri.JPG"
        alt="udayanmantri"
      />
      <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-0 transition-transform duration-300 ease-in-out p-6 text-gray-400">
        <h3 className="text-2xl text-center font-bold mb-3">
          તાસકમાં મસ્તક<br />
          ઉદયનમંત્રી
        </h3>
        <div className="space-y-2 text-sm text-center mb-4">
          <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
          <p>અધ્યાત્મ ભવન</p>
          <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
          <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
          <p className="">M. 7676769600</p>
        </div>
      </div>
    </div>
  </div>
  <div className="text-lg font-heading py-2 w-full text-center bg-cyan-800 text-white font-semibold opacity-50 cursor-not-allowed">
    Out Of Stock
  </div>
  </div>
          {/* You can add more book cards with the same structure */}
          <div className="flex flex-col items-center justify-center w-full group max-w-[210px]">
  <div className="relative w-full h-[320px]">
    <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
      <img
        className="h-full w-full object-cover object-center"
        src="/bookimages/Mahabharat.jpg"
        alt="mahabharat"
      />
      <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
        <h3 className="text-2xl text-center font-bold mb-3">
          મહાભારત - જૈન ગ્રંથોના આલોકમાં <br />
        </h3>
        <div className="space-y-2 text-sm text-center mb-4">
          <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
          <p>અધ્યાત્મ ભવન</p>
          <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
          <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
          <p className="">M. 7676769600</p>
        </div>
      </div>
    </div>
  </div>
  <Link
    href="/pages/form/mahabharat"
    className="text-lg font-heading py-2 w-full text-center  bg-cyan-800 text-white font-semibold"
  >
    Register here
  </Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
