// "use client";
// import React from "react";
// import Link from "next/link";
// import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// const RegisterForm = () => {
//   return (
//     <div className="py-16 max-w-7xl mx-auto px-5 sm:px-10">
//       {/* <Link
//         href="/pages/booklist"
//         className="group relative block w-full h-40 sm:h-52 overflow-hidden rounded-sm shadow-lg my-6 transform transition-transform duration-300 hover:scale-[1]"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center brightness-50 group-hover:brightness-75 transition-all duration-500"
//           style={{
//             backgroundImage: "url(/book-store.jpg)",
//             backgroundPosition: "center",
//           }}
//         />

//         <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 h-full text-white">
//           <div className="flex items-center gap-4">
//             <img
//               src="/book-illustration.png"
//               className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/20 p-2"
//               alt="Book icon"
//             />
//             <span className="font-heading text-base sm:text-3xl font-bold drop-shadow-md">
//               ज्ञान भंडार में मौजूद पुस्तकों की सूची देखने के लिए यहां क्लिक
//               करें
//             </span>
//           </div>

//           <MdOutlineKeyboardDoubleArrowRight
//             size={32}
//             className="text-white opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
//           />
//         </div>

//         <div className="absolute bottom-0 left-0 w-full h-2 bg-[#01044c] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
//       </Link> */}

//       <div className="">
//         <h1 className="font-bold flex items-center gap-2 border-b-2  border-[#01044c] font-heading mb-8 text-xl text-[#01044c] text-start">
//           रजिस्ट्रेशन फॉर्म
//           {/* इवेंट्स के लिए */}
//           <MdOutlineKeyboardDoubleArrowRight size={24} className="arrow" />
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-body justify-items-center">
//           {/* Book Card */}

//           {/* <div className="flex flex-col items-center justify-center w-full group ">
//             <div className="relative w-full ">
//               {" "}
//               <div className="relative bg-light-bg font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/savjonisatvikkatha1.jpg"
//                   alt="ravanni-bhitarma"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                    સાવજોની સાત્ત્વિક કથા
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/savjoni-sattvik-katha"
//               className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div>


//           <div className="flex flex-col items-center justify-center w-full group ">
//             <div className="relative w-full ">
//               {" "}
//               <div className="relative bg-light-bg font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/ahankarvijay1.jpg"
//                   alt="ravanni-bhitarma"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                     अहंकार विजय
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/ahankar-vijay"
//               className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div> */}




//           <div className="flex flex-col items-center justify-center w-full group ">
//             <div className="relative w-full ">
//               {" "}
//               {/* Fixed height for portrait aspect ratio */}
//               <div className="relative bg-light-bg font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/ravanni-bhitarma.webp"
//                   alt="ravanni-bhitarma"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                     રાવણની ભીતરમાં
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/ravanni-bhitarma"
//               className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div>

        
//    {/* <div className="flex flex-col items-center justify-center w-full group">
//             <div className="relative w-full">
//               {" "}
//               <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/calendar-2082.png"
//                   alt="calendar-2082"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-xl text-center font-bold mb-3">
//                     આરાધના દિન દર્શિની (કેલેન્ડર પંચાંગ વિ.સ. ૨૦૮૨)
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/calendar-2082"
//               className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div>
//  */}


//           <div className="flex flex-col items-center justify-center w-full group">
//             <div className="relative h-full">
//               <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/Mahabharat.webp"
//                   alt="mahabharat"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                     મહાભારત - જૈન ગ્રંથોના આલોકમાં <br />
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/mahabharat"
//               className="text-lg font-sans py-2 w-full text-center  bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div>

//             <div className="flex flex-col items-center justify-center w-full group">
//             <div className="relative w-full">
//               {" "}
//               {/* Fixed height for portrait aspect ratio */}
//               <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/bhagwan-mahavir.webp"
//                   alt="bhagwan-mahavir"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                     ભગવાન મહાવીર
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link
//               href="/pages/form/bhagwan-mahavir"
//               className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold"
//             >
//               Register
//             </Link>
//           </div>

//             <div className="flex flex-col items-center justify-center w-full group">
//             <div className="relative w-full ">
//               {" "}
//               {/* Fixed height for portrait aspect ratio */}
//               <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
//                 <img
//                   className="h-full w-full object-cover object-center"
//                   src="/bookimages/udayanmantri.webp"
//                   alt="udayanmantri"
//                 />
//                 <div className="absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center translate-y-0 transition-transform duration-300 ease-in-out p-6 text-gray-400">
//                   <h3 className="text-2xl text-center font-bold mb-3">
//                     તાસકમાં મસ્તક
//                     <br />
//                     ઉદયનમંત્રી
//                   </h3>
//                   <div className="space-y-2 text-sm text-center mb-4">
//                     <p className="font-semibold text-cyan-800">ઓફિસ ડીટેલ:</p>
//                     <p>અધ્યાત્મ ભવન</p>
//                     <p>ત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન</p>
//                     <p>સંજીવકુમાર ઓડિટોરીયમ પાસે, પાલ, સુરત - 395 009</p>
//                     <p className="">M. 7676769600</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold opacity-50 cursor-not-allowed">
//               Out Of Stock
//             </div>
//           </div>

                   

//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const RegisterForm = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    async function fetchForms() {
      try {
        const res = await fetch("https://book.adhyatmparivar.com/api/forms");
        const data = await res.json();
        
        // Sort forms by order field (ascending), with null/undefined values at the end
        const sortedData = data.sort((a, b) => {
          // If both have order values, sort normally
          if (a.order !== null && a.order !== undefined && b.order !== null && b.order !== undefined) {
            return a.order - b.order;
          }
          // If only a has order, it comes first
          if (a.order !== null && a.order !== undefined) return -1;
          // If only b has order, it comes first
          if (b.order !== null && b.order !== undefined) return 1;
          // If neither has order, sort by created_at (newest first)
          return new Date(b.created_at) - new Date(a.created_at);
        });
        
        setForms(sortedData);
      } catch (err) {
        console.error("Error fetching forms:", err);
      }
    }
    fetchForms();
  }, []);

  const visibleForms = forms.filter((form) => {
    if (!form.show) return false;

    if (form.active_from) {
      const today = new Date();
      const activeFromDate = new Date(form.active_from);

      // only show if active_from is today or earlier
      if (activeFromDate > today) {
        return false;
      }
    }

    return true;
  });

  // Check if form is still active based on active_to date
  const isFormActive = (form) => {
    if (!form.active) return false;
    
    if (form.active_to) {
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to start of day
      const activeToDate = new Date(form.active_to);
      activeToDate.setHours(23, 59, 59, 999); // Set to end of day
      
      // Form is inactive if active_to date has passed
      if (activeToDate < today) {
        return false;
      }
    }
    
    return true;
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-5 sm:px-10">
      <h1 className="font-bold flex items-center gap-2 border-b-2 border-[#01044c] font-heading mb-8 text-xl text-[#01044c] text-start">
        रजिस्ट्रेशन फॉर्म
        <MdOutlineKeyboardDoubleArrowRight size={24} className="arrow" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-body justify-items-center">
        {visibleForms.map((form) => {
          const formIsActive = isFormActive(form);
          
          return (
            <div
              key={form.id}
              className="flex flex-col items-center justify-center w-full group"
            >
              <div className="relative w-full">
                <div className="relative bg-[#F0E9D7] font-anek overflow-hidden w-full h-full">
                  <img
                    className="sm:min-h-[70vh] h-full w-full object-cover object-center"
                    src={form.thumbnails?.[0] || "/placeholder.jpg"}
                    alt={form.slug}
                  />
                  {/* Hover Content */}
                  <div className={`absolute inset-x-0 bottom-0 h-full bg-black/80 flex flex-col items-center justify-center ${formIsActive ? 'translate-y-full' : 'translate-y-0'} group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 text-white`}>
                    <h3 className="text-2xl text-center font-bold mb-3">
                      {form.title}
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

              {/* Register / Out of Stock - only shows if form.show is true */}
              {formIsActive ? (
                <Link
                  href={`/pages/forms?form=${form.slug}`}
                  className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold hover:bg-[#02055a] transition-colors duration-200"
                >
                  Register
                </Link>
              ) : (
                <div className="text-lg font-sans py-2 w-full text-center bg-[#01044c] text-white font-semibold opacity-50 cursor-not-allowed">
                  Out Of Stock
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show message if no forms are visible */}
      {visibleForms.length === 0 && forms.length > 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No forms are currently available for registration.</p>
        </div>
      )}
      
      {/* Show skeleton loaders if no forms fetched */}
      {forms.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-body justify-items-center">
          {[...Array(4)].map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="relative w-full">
                <div className="relative bg-gray-200 animate-pulse overflow-hidden w-full h-full">
                  {/* Skeleton Image */}
                  <div className="sm:min-h-[70vh] h-full w-full bg-gray-300 animate-pulse"></div>
                  
                  {/* Skeleton Hover Content (visible by default in loading) */}
                  <div className="absolute inset-x-0 bottom-0 h-full bg-gray-800/80 flex flex-col items-center justify-center p-6">
                    {/* Skeleton Title */}
                    <div className="h-8 bg-gray-600 rounded w-3/4 mb-3 animate-pulse"></div>
                    
                    {/* Skeleton Text Lines */}
                    <div className="space-y-2 w-full mb-4">
                      <div className="h-4 bg-gray-600 rounded w-1/2 mx-auto animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-4/5 mx-auto animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-full mx-auto animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-3/4 mx-auto animate-pulse"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skeleton Register Button */}
              <div className="h-12 bg-gray-400 animate-pulse w-full"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;