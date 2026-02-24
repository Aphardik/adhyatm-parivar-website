"use client";
import React from "react";
import { useLanguage } from "./LanguageContext";
import { getSectionData } from "@/app/utils/sectionData";

const LogoDescription = () => {
  const { language } = useLanguage();
  const content = getSectionData(language, "home");
  const items = content?.logoDescription?.items || [];

  return (
    <>
      <section className="md:hidden  px-5 font-body text-content">
        <div className="w-full max-w-3xl flex items-center justify-center">
          <img src="/large_logo.png" alt="Adhyatm Parivar" className="w-full drop-shadow-2xl h-auto object-contain" />

        </div>
        <h1 className="text-[#01044c] font-heading font-bold text-xl text-center  mb-4">
          {content?.logoDescription?.title}
        </h1>
        <div className="flex  flex-col items-center justify-center gap-4">
          {items.map((item, index) => (
            <div key={index} className=" mb-4 text-center ">
              <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">{item.title}</h2>
              <p className="text-base font-semibold text-content ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Symbolic Logo Section */}
      <section className="md:hidden px-5 mb-16">
        <div className="max-w-md mx-auto bg-[#330000] rounded-2xl p-6 flex flex-col items-center text-center gap-4 border-2 border-[#e1c18d] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            {/* <div className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-2xl">❧</div>
            <div className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-2xl rotate-180">❧</div> */}
          </div>
          <img src="/basic_logo.png" alt="Symbolic Logo" className="h-24 object-contain z-10" />
          <div className={`z-10 ${language === 'hi' ? 'font-heading' : language === 'gu' ? 'font-anek' : 'font-sans'}`}>
            <h3 className="text-white font-bold text-lg mb-2">{content?.logoDescription?.symbolicLogo?.title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{content?.logoDescription?.symbolicLogo?.desc}</p>
          </div>
        </div>
      </section>

      <div className="hidden md:block px-8 py-16 font-body mx-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[#01044c] font-semibold text-3xl text-center font-heading mb-8">
            {content?.logoDescription?.title}
          </h1>

          {/* Item 1 (Zero Index) */}
          <div className=" mb-4 px-64 text-center ">
            <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[0]?.title}</h2>
            <p className="text-base font-semibold text-content ">
              {items[0]?.desc}
            </p>
          </div>

          <div className="flex justify-center">
            {/* Left column - Indices 1, 3, 5, 7 */}
            <div className="w-1/3 flex flex-col justify-between pr-4">
              <div className="text-end mb-4">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[1]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[1]?.desc}
                </p>
              </div>
              <div className="text-end mb-4 mr-8">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[3]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[3]?.desc}
                </p>
              </div>
              <div className="text-end mb-4 mr-12">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[5]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[5]?.desc}
                </p>
              </div>
              <div className="text-end">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[7]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[7]?.desc}
                </p>
              </div>
            </div>

            {/* Central image */}
            <div className="w-1/3 max-w-3xl flex items-center justify-center">
              <img src="/large_logo.png" alt="Adhyatm Parivar" className="w-full drop-shadow-2xl h-auto object-contain" />
            </div>

            {/* Right column - Indices 2, 4, 6, 8 */}
            <div className="w-1/3 flex flex-col justify-between pl-4">
              <div className=" mb-4 ">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[2]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[2]?.desc}
                </p>
              </div>
              <div className=" mb-4 ml-8">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">
                  {items[4]?.title}
                </h2>
                <p className="text-base font-semibold text-content">
                  {items[4]?.desc}
                </p>
              </div>
              <div className="mb-4 ml-12">
                <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">{items[6]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[6]?.desc}
                </p>
              </div>
              <div className="">
                <h2 className="sm:text-xl text-lg text-[#01044c]  font-semibold">{items[8]?.title}</h2>
                <p className="text-base font-semibold text-content">
                  {items[8]?.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Symbolic Logo Section */}
          <div className="mt-20 max-w-7xl mx-auto bg-[#330000] rounded-2xl p-4 flex items-center gap-12 border-2 border-[#e1c18d] shadow-2xl relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>

            {/* Decorative Side Icons */}
            {/* <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#e1c18d] text-4xl opacity-30 group-hover:opacity-100 transition-opacity">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                <path d="M20,0 C20,0 40,20 40,30 C40,40 30,50 20,50 C10,50 0,40 0,30 C0,20 20,0 20,0 Z M20,10 C20,10 10,25 10,30 C10,35 15,38 20,38 C25,38 30,35 30,30 C30,25 20,10 20,10 Z" />
                <path d="M20,52 C25,52 30,55 30,58 L10,58 C10,55 15,52 20,52 Z" />
              </svg>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#e1c18d] text-4xl opacity-30 group-hover:opacity-100 transition-opacity rotate-180">
              <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor">
                <path d="M20,0 C20,0 40,20 40,30 C40,40 30,50 20,50 C10,50 0,40 0,30 C0,20 20,0 20,0 Z M20,10 C20,10 10,25 10,30 C10,35 15,38 20,38 C25,38 30,35 30,30 C30,25 20,10 20,10 Z" />
                <path d="M20,52 C25,52 30,55 30,58 L10,58 C10,55 15,52 20,52 Z" />
              </svg>
            </div> */}

            <div className="w-1/3 flex justify-center z-10 shrink-0">
              <div className="p-4 rounded-full ">
                <img src="/basic_logo.png" alt="Symbolic Logo" className="h-40 object-contain drop-shadow-[0_0_15px_rgba(225,193,141,0.3)]" />
              </div>
            </div>

            <div className={`w-2/3 text-white z-10 `}>
              <h3 className={`text-2xl font-bold mb-4 text-[#e1c18d] ${language === 'hi' ? 'font-heading' : language === 'gu' ? 'font-anek' : 'font-sans'}`}>
                {content?.logoDescription?.symbolicLogo?.title}
              </h3>
              <p className={`text-lg leading-relaxed text-white/90 ${language === 'hi' ? 'font-heading' : language === 'gu' ? 'font-anek' : 'font-sans'}`}>
                {content?.logoDescription?.symbolicLogo?.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoDescription;


// "use client";
// import React from "react";

// const LogoDescription = () => {
//   // const backgroundSVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23330000' width='800' height='400'/%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2307CFF9'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFDC29' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFDC29' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`;

//   return (
//     <>
//       <section  className="md:hidden  px-5 font-body text-content">
//         <h1 className="text-content font-heading font-bold text-xl text-center  mb-4">
//           ...सातक्षेत्र से सुशोभित अध्यात्म परिवार के लोगो का रहस्य...
//         </h1>
//         <div className="flex  flex-col items-center justify-center gap-4">
//           <div className=" mb-4 text-center ">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">1. जिनप्रतिमा</h2>
//             <p className="text-base font-semibold text-content ">
//               सदा के लिए सम्पूर्ण सुखी बनने का मार्ग बताने वाली इस विश्व की
//               सर्वोत्तम हस्ती की प्रतिकृति।
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">2. जिनमंदिर</h2>
//             <p className="text-base font-semibold text-content">
//               यह उन सर्वोत्तम हस्ती का सर्वोत्कृष्ट पवित्र स्थान!
//             </p>
//           </div>
//           <div className="text-center mb-4 ">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">3. जिनागम</h2>
//             <p className="text-base font-semibold text-content">
//               सुखी बनने के मार्ग की तमाम जानकारी तथा उसका नक्शा!!
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">4-5. श्रमण-श्रमणी (ओघा)</h2>
//             <p className="text-base font-semibold text-content">
//               इस जानकारी और इस नक्शे के अनुसार उद्यमपूर्वक स्वयं उस मार्ग पर सदा
//               चलने वाले तथा विश्व को यह सच्चा मार्ग बताने वाले!
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">
//               6-7. श्रावक-श्रविका (चरवला)
//             </h2>
//             <p className="text-base font-semibold text-content">
//               इस मार्ग पर चलने वालों की समर्पित होकर, इस मार्ग पर चलने की चाहत
//               रखने वाले तथा इसके लिए तन-मन-धन अर्पण करने वाले!
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">वृषभ</h2>
//             <p className="text-base font-semibold text-content">
//               इस भरतक्षेत्र के प्रथम शासनस्थापक श्री आदिनाथ परमात्मा का लछ्न!
//             </p>
//           </div>
//           <div className="mb-4 text-center">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">सिंह</h2>
//             <p className="text-base font-semibold text-content">
//               इस भरतक्षेत्र के चरम शासनस्थापक श्री महावीर परमात्मा का लछ्न!
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">धर्मचक्र</h2>
//             <p className="text-base font-semibold text-content">
//               इस अवसर्पिणी के २४ तीर्थंकरो की याद दिलाते धर्मचक्र के २४ आरे !
//             </p>
//           </div>
//           <div className="text-center mb-4">
//             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">कमल</h2>
//             <p className="text-base font-semibold text-content">
//               सातक्षेत्र की भक्ति सुरक्षा द्वारा जो अवस्था प्राप्त करनी है उस
//               निर्लेप अवस्था का सूचक!
//             </p>
//           </div>
//         </div>
//       </section>

//       <div className="hidden md:block px-8 py-16 font-body mx-auto">
//         <div className="max-w-7xl mx-auto">
//         <h1 className="text-heading font-semibold text-3xl text-center font-heading mb-4">
//           ...सातक्षेत्र से सुशोभित अध्यात्म परिवार के लोगो का रहस्य...
//         </h1>

//         <div className=" mb-4 px-64 text-center ">
//           <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">1. जिनप्रतिमा</h2>
//           <p className="text-base font-semibold text-content ">
//             सदा के लिए सम्पूर्ण सुखी बनने का मार्ग बताने वाली इस विश्व की
//             सर्वोत्तम हस्ती की प्रतिकृति।
//           </p>
//         </div>

//         <div className="flex jus">
//           {/* Left column */}
//           <div className="w-1/3 flex flex-col justify-between pr-4">
//             <div className="text-end mb-4">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">2. जिनमंदिर</h2>
//               <p className="text-base font-semibold text-content">
//                 यह उन सर्वोत्तम हस्ती का सर्वोत्कृष्ट पवित्र स्थान!
//               </p>
//             </div>
//             <div className="text-end mb-4 mr-8">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">4-5. श्रमण-श्रमणी (ओघा)</h2>
//               <p className="text-base font-semibold text-content">
//                 इस जानकारी और इस नक्शे के अनुसार उद्यमपूर्वक स्वयं उस मार्ग पर
//                 सदा चलने वाले तथा विश्व को यह सच्चा मार्ग बताने वाले!
//               </p>
//             </div>
//             <div className="text-end mb-4 mr-12">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">वृषभ</h2>
//               <p className="text-base font-semibold text-content">
//                 इस भरतक्षेत्र के प्रथम शासनस्थापक श्री आदिनाथ परमात्मा का लछ्न!
//               </p>
//             </div>
//             <div className="text-end">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">धर्मचक्र</h2>
//               <p className="text-base font-semibold text-content">
//                 इस अवसर्पिणी के २४ तीर्थंकरो की याद दिलाते धर्मचक्र के २४ आरे !
//               </p>
//             </div>
//           </div>

//           {/* Central image */}
//           <div className="w-1/3 max-w-3xl flex items-center justify-center">
//             <img src="/logo.png" alt="Adhyatm Parivar" className="w-full drop-shadow-2xl h-auto object-contain" />

//           </div>

//           {/* Right column */}
//           <div className="w-1/3 flex flex-col justify-between pl-4">
//             <div className=" mb-4 ">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">3. जिनागम</h2>
//               <p className="text-base font-semibold text-content">
//                 सुखी बनने के मार्ग की तमाम जानकारी तथा उसका नक्शा!!
//               </p>
//             </div>
//             <div className=" mb-4 ml-8">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">
//                 6-7. श्रावक-श्रविका (चरवला)
//               </h2>
//               <p className="text-base font-semibold text-content">
//                 इस मार्ग पर चलने वालों की समर्पित होकर, इस मार्ग पर चलने की चाहत
//                 रखने वाले तथा इसके लिए तन-मन-धन अर्पण करने वाले!
//               </p>
//             </div>
//             <div className="mb-4 ml-12">
//               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">सिंह</h2>
//               <p className="text-base font-semibold text-content">
//                 इस भरतक्षेत्र के चरम शासनस्थापक श्री महावीर परमात्मा का लछ्न!
//               </p>
//             </div>
//             <div className="">
//               <h2 className="sm:text-xl text-lg text-[#01044c]  font-semibold">कमल</h2>
//               <p className="text-base font-semibold text-content">
//                 सातक्षेत्र की भक्ति सुरक्षा द्वारा जो अवस्था प्राप्त करनी है उस
//                 निर्लेप अवस्था का सूचक!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default LogoDescription;


// // "use client";
// // import React from "react";

// // const LogoDescription = () => {
// //   return (
// //     <>
// //       <section className="md:hidden bg-background px-5 font-body text-content">
// //         <h1 className="text-content font-heading font-bold text-xl text-center  mb-4">
// //           ...सातक्षेत्र से सुशोभित अध्यात्म परिवार के लोगो का रहस्य...
// //         </h1>
// //         <div className="flex  flex-col items-center justify-center gap-4">
// //           <div className=" mb-4 text-center ">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">1. जिनप्रतिमा</h2>
// //             <p className="text-base font-semibold text-content ">
// //               सदा के लिए सम्पूर्ण सुखी बनने का मार्ग बताने वाली इस विश्व की
// //               सर्वोत्तम हस्ती की प्रतिकृति।
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">2. जिनमंदिर</h2>
// //             <p className="text-base font-semibold text-content">
// //               यह उन सर्वोत्तम हस्ती का सर्वोत्कृष्ट पवित्र स्थान!
// //             </p>
// //           </div>
// //           <div className="text-center mb-4 ">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">3. जिनागम</h2>
// //             <p className="text-base font-semibold text-content">
// //               सुखी बनने के मार्ग की तमाम जानकारी तथा उसका नक्शा!!
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">4-5. श्रमण-श्रमणी (ओघा)</h2>
// //             <p className="text-base font-semibold text-content">
// //               इस जानकारी और इस नक्शे के अनुसार उद्यमपूर्वक स्वयं उस मार्ग पर सदा
// //               चलने वाले तथा विश्व को यह सच्चा मार्ग बताने वाले!
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">
// //               6-7. श्रावक-श्रविका (चरवला)
// //             </h2>
// //             <p className="text-base font-semibold text-content">
// //               इस मार्ग पर चलने वालों की समर्पित होकर, इस मार्ग पर चलने की चाहत
// //               रखने वाले तथा इसके लिए तन-मन-धन अर्पण करने वाले!
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">वृषभ</h2>
// //             <p className="text-base font-semibold text-content">
// //               इस भरतक्षेत्र के प्रथम शासनस्थापक श्री आदिनाथ परमात्मा का लछ्न!
// //             </p>
// //           </div>
// //           <div className="mb-4 text-center">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">सिंह</h2>
// //             <p className="text-base font-semibold text-content">
// //               इस भरतक्षेत्र के चरम शासनस्थापक श्री महावीर परमात्मा का लछ्न!
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">धर्मचक्र</h2>
// //             <p className="text-base font-semibold text-content">
// //               इस अवसर्पिणी के २४ तीर्थंकरो की याद दिलाते धर्मचक्र के २४ आरे !
// //             </p>
// //           </div>
// //           <div className="text-center mb-4">
// //             <h2 className="sm:text-xl text-lg text-[#01044c] font-bold">कमल</h2>
// //             <p className="text-base font-semibold text-content">
// //               सातक्षेत्र की भक्ति सुरक्षा द्वारा जो अवस्था प्राप्त करनी है उस
// //               निर्लेप अवस्था का सूचक!
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       <div className="hidden md:block px-8 pt-16 max-w-5xl font-body mx-auto">
// //         <h1 className="text-heading font-semibold text-3xl text-center font-heading mb-4">
// //           ...सातक्षेत्र से सुशोभित अध्यात्म परिवार के लोगो का रहस्य...
// //         </h1>

// //         {/* First row - centered information */}
// //         <div className=" mb-4 px-64 text-center ">
// //           <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">1. जिनप्रतिमा</h2>
// //           <p className="text-base font-semibold text-content ">
// //             सदा के लिए सम्पूर्ण सुखी बनने का मार्ग बताने वाली इस विश्व की
// //             सर्वोत्तम हस्ती की प्रतिकृति।
// //           </p>
// //         </div>

// //         <div className="flex">
// //           {/* Left column */}
// //           <div className="w-1/3 flex flex-col justify-between pr-4">
// //             <div className="text-end mb-4">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">2. जिनमंदिर</h2>
// //               <p className="text-base font-semibold text-content">
// //                 यह उन सर्वोत्तम हस्ती का सर्वोत्कृष्ट पवित्र स्थान!
// //               </p>
// //             </div>
// //             <div className="text-end mb-4 mr-8">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">4-5. श्रमण-श्रमणी (ओघा)</h2>
// //               <p className="text-base font-semibold text-content">
// //                 इस जानकारी और इस नक्शे के अनुसार उद्यमपूर्वक स्वयं उस मार्ग पर
// //                 सदा चलने वाले तथा विश्व को यह सच्चा मार्ग बताने वाले!
// //               </p>
// //             </div>
// //             <div className="text-end mb-4 mr-12">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">वृषभ</h2>
// //               <p className="text-base font-semibold text-content">
// //                 इस भरतक्षेत्र के प्रथम शासनस्थापक श्री आदिनाथ परमात्मा का लछ्न!
// //               </p>
// //             </div>
// //             <div className="text-end">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">धर्मचक्र</h2>
// //               <p className="text-base font-semibold text-content">
// //                 इस अवसर्पिणी के २४ तीर्थंकरो की याद दिलाते धर्मचक्र के २४ आरे !
// //               </p>
// //             </div>
// //           </div>

// //           {/* Central image */}
// //           <div className="w-1/3 flex items-center justify-center">
// //             <img src="/logo.png" alt="Adhyatm Parivar" className="w-full h-auto  object-contain" />

// //           </div>

// //           {/* Right column */}
// //           <div className="w-1/3 flex flex-col justify-between pl-4">
// //             <div className=" mb-4 ">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">3. जिनागम</h2>
// //               <p className="text-base font-semibold text-content">
// //                 सुखी बनने के मार्ग की तमाम जानकारी तथा उसका नक्शा!!
// //               </p>
// //             </div>
// //             <div className=" mb-4 ml-8">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">
// //                 6-7. श्रावक-श्रविका (चरवला)
// //               </h2>
// //               <p className="text-base font-semibold text-content">
// //                 इस मार्ग पर चलने वालों की समर्पित होकर, इस मार्ग पर चलने की चाहत
// //                 रखने वाले तथा इसके लिए तन-मन-धन अर्पण करने वाले!
// //               </p>
// //             </div>
// //             <div className="mb-4 ml-12">
// //               <h2 className="sm:text-xl text-lg text-[#01044c] font-semibold">सिंह</h2>
// //               <p className="text-base font-semibold text-content">
// //                 इस भरतक्षेत्र के चरम शासनस्थापक श्री महावीर परमात्मा का लछ्न!
// //               </p>
// //             </div>
// //             <div className="">
// //               <h2 className="sm:text-xl text-lg text-[#01044c]  font-semibold">कमल</h2>
// //               <p className="text-base font-semibold text-content">
// //                 सातक्षेत्र की भक्ति सुरक्षा द्वारा जो अवस्था प्राप्त करनी है उस
// //                 निर्लेप अवस्था का सूचक!
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default LogoDescription;
