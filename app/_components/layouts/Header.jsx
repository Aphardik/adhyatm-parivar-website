// "use client"
// import Link from 'next/link';
// import React, { useState, useRef, useEffect } from 'react';
// import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [expandedMobileSection, setExpandedMobileSection] = useState(null);
//   const timeoutRef = useRef(null);


//   const handleMouseEnter = (dropdown) => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setActiveDropdown(dropdown);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveDropdown(null);
//     }, 150);
//   };


//   const dropdownItems = {
//     menu1: [
//       {
//         icon: '🔥',
//         title: 'Use cases',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '❤️',
//         title: 'Testimonials',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '🤘',
//         title: 'Features',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       }
//     ],
//     menu2: [
//       {
//         icon: '🔥',
//         title: 'Use cases',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '❤️',
//         title: 'Testimonials',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '🤘',
//         title: 'Features',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '📘',
//         title: 'Blog',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '😎',
//         title: 'Team',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '💰',
//         title: 'Plans',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       }
//     ],

//      menu3: [
//       {
//         icon: '🔥',
//         title: 'Use cases',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '❤️',
//         title: 'Testimonials',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '🤘',
//         title: 'Features',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       }
//     ],
//      menu4: [
//       {
//         icon: '🔥',
//         title: 'Use cases',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '❤️',
//         title: 'Testimonials',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//       {
//         icon: '🤘',
//         title: 'Features',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//        {
//         icon: '🤘',
//         title: 'test',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       },
//        {
//         icon: '🤘',
//         title: 'test1',
//         description: 'Lorem Ipsum is simply dummy text of the printing and'
//       }
//     ],
    
//   };

//   const toggleMobileSection = (section) => {
//     setExpandedMobileSection(expandedMobileSection === section ? null : section);
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Main Header */}
//       <header className="sticky top-0 z-50 bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="flex items-center space-x-2">
//                <Link href={'/'} className="flex gap-4 items-center">
//                             <img className='h-10' src="/logo.png" alt="" />
//                             <span className="text-sm tracking-widest uppercase text-gray-800"><b>Adhyatm&nbsp;&nbsp;&nbsp;Parivar</b></span>
//                         </Link>
                
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                 About us
//               </a>
              
//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter('menu1')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
//                   <span>जिनमूर्ति विभाग</span>
//                   <BiChevronDown className="w-4 h-4" />
//                 </button>
//               </div>

//               <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter('menu2')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                   <span>जिनमंदिर विभाग</span>
//                   <BiChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//                 <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter('menu3')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                   <span>जिनागम विभाग</span>
//                   <BiChevronDown className="w-4 h-4" />
//                 </button>
//               </div>
//                 <div
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter('menu4')}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                   <span>Adhyatm</span>
//                   <BiChevronDown className="w-4 h-4" />
//                 </button>
//               </div>

//               {/* <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                 Pricing
//               </a> */}
              
//               {/* <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
//                 Contacts
//               </a> */}
//             </nav>

//             {/* Desktop CTA Button */}
//             <div className="hidden md:flex items-center">
//               <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
//                 Contact us
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               {isMobileMenuOpen ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Desktop Dropdown Menu */}
//         {activeDropdown && (
//           <div
//             className="absolute top-full left-0 w-full bg-white shadow-lg border-t transition-all duration-300 ease-out transform opacity-100 translate-y-0 z-40"
//             onMouseEnter={() => handleMouseEnter(activeDropdown)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {dropdownItems[activeDropdown]?.map((item, index) => (
//                   <div
//                     key={index}
//                     className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
//                   >
//                     <div className="flex items-start space-x-3">
//                       <span className="text-2xl group-hover:scale-110 transition-transform">
//                         {item.icon}
//                       </span>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">
//                           {item.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 leading-relaxed">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 z-50 bg-white">
//           <div className="flex items-center justify-between h-16 px-4 border-b">
//             <div className="flex items-center space-x-2">
//               <Link href={'/'} className="flex gap-4 items-center">
//                             <img className='h-10' src="/logo.png" alt="" />
//                             <span className="text-sm tracking-widest uppercase text-gray-800"><b>Adhyatm&nbsp;&nbsp;&nbsp;Parivar</b></span>
//                         </Link>
//             </div>
//             <button
//               className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <BiX className="w-6 h-6" />
//             </button>
//           </div>
          
//           <div className="px-4 py-6 space-y-6">
//             <a href="#" className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
//               About us
//             </a>
            
//             <div>
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
//                 onClick={() => toggleMobileSection('menu1')}
//               >
//                 <span>जिनमूर्ति विभाग</span>
//                 <BiChevronDown className={`w-5 h-5 transition-transform ${expandedMobileSection === 'menu1' ? 'rotate-180' : ''}`} />
//               </button>
//               {expandedMobileSection === 'menu1' && (
//                 <div className="mt-4 space-y-4 pl-4">
//                   {dropdownItems.menu1.map((item, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                       <span className="text-xl">{item.icon}</span>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                         <p className="text-sm text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div>
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
//                 onClick={() => toggleMobileSection('menu2')}
//               >
//                 <span>जिनमंदिर विभाग</span>
//                 <BiChevronDown className={`w-5 h-5 transition-transform ${expandedMobileSection === 'menu2' ? 'rotate-180' : ''}`} />
//               </button>
//               {expandedMobileSection === 'menu2' && (
//                 <div className="mt-4 space-y-4 pl-4">
//                   {dropdownItems.menu2.map((item, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                       <span className="text-xl">{item.icon}</span>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                         <p className="text-sm text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//              <div>
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
//                 onClick={() => toggleMobileSection('menu3')}
//               >
//                 <span>जिनागम विभाग</span>
//                 <BiChevronDown className={`w-5 h-5 transition-transform ${expandedMobileSection === 'menu3' ? 'rotate-180' : ''}`} />
//               </button>
//               {expandedMobileSection === 'menu3' && (
//                 <div className="mt-4 space-y-4 pl-4">
//                   {dropdownItems.menu3.map((item, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                       <span className="text-xl">{item.icon}</span>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                         <p className="text-sm text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//              <div>
//               <button
//                 className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
//                 onClick={() => toggleMobileSection('menu4')}
//               >
//                 <span>Adhyatm</span>
//                 <BiChevronDown className={`w-5 h-5 transition-transform ${expandedMobileSection === 'menu4' ? 'rotate-180' : ''}`} />
//               </button>
//               {expandedMobileSection === 'menu4' && (
//                 <div className="mt-4 space-y-4 pl-4">
//                   {dropdownItems.menu4.map((item, index) => (
//                     <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
//                       <span className="text-xl">{item.icon}</span>
//                       <div>
//                         <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
//                         <p className="text-sm text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* <a href="#" className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
//               Pricing
//             </a> */}
            
//             {/* <a href="#" className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
//               Contacts
//             </a> */}

//             <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
//               Contact us
//             </button>
//           </div>
//         </div>
//       )}

    
//     </div>
//   );
// };

// export default Header;
























"use client"
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { BiChevronDown, BiMenu, BiX } from 'react-icons/bi';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const timeoutRef = useRef(null);
  

  const handleMouseEnter = (dropdown) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };


  const dropdownItems = {
    menu1: [
      {
        emoji: '🔥',
        title: 'Use cases',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        emoji: '❤️',
        title: 'Testimonials',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        emoji: '🤘',
        title: 'Features',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      }
    ],
    menu2: [
      {
        emoji: '🔥',
        title: 'Use cases',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        emoji: '❤️',
        title: 'Testimonials',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        emoji: '🤘',
        title: 'Features',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
      {
        emoji: '📘',
        title: 'Blog',
        description: 'At vitae consectetur lacus, scelerisque. Faucibus aliquam.'
      },
      {
        emoji: '😎',
        title: 'Team',
        description: 'Mi donec id in pellentesque ullamcorper ut. Venenatis eu.'
      },
      {
        emoji: '💰',
        title: 'Plans',
        description: 'Consectetur ut sed at sem ipsum odio mattis orci. Id pellentesque.'
      }
    ],

     menu3: [
      {
        emoji: '🔥',
        title: 'Use cases',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        emoji: '❤️',
        title: 'Testimonials',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        emoji: '🤘',
        title: 'Features',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      }
    ],
     menu4: [
      {
        emoji: '🔥',
        title: 'Use cases',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        emoji: '❤️',
        title: 'Testimonials',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        emoji: '🤘',
        title: 'Features',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        emoji: '🤘',
        title: 'test',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        emoji: '🤘',
        title: 'test1',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      }
    ],
    
  };

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative font-heading">
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
               <Link href={'/'} className="flex gap-4 items-center">
                            <img className='h-10' src="/logo.png" alt="" />
                            <span className="text-sm tracking-widest uppercase text-gray-800"><b>Adhyatm&nbsp;&nbsp;&nbsp;Parivar</b></span>
                        </Link>
                
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About us
              </a>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu1')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
                  <span>जिनमूर्ति विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu1' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu2')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  <span>जिनमंदिर विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu2' ? 'rotate-180' : ''}`} />
                </button>
              </div>
                <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu3')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  <span>जिनागम विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu3' ? 'rotate-180' : ''}`} />
                </button>
              </div>
                <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu4')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  <span>अध्यात्म विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu4' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </a> */}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <BiX className="w-6 h-6" /> : <BiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menu - Animated Height */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 overflow-hidden transition-all duration-300 ease-out ${
            activeDropdown 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-2'
          }`}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeDropdown && dropdownItems[activeDropdown]?.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer group transform ${
                    activeDropdown 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {item.emoji}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Animated Width */}
      <div className={`md:hidden fixed inset-0 z-50 bg-white transform transition-all duration-300 ease-out ${
        isMobileMenuOpen 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center space-x-2">
            <Link href={'/'} className="flex gap-4 items-center">
                            <img className='h-10' src="/logo.png" alt="" />
                            <span className="text-sm tracking-widest uppercase text-gray-800"><b>Adhyatm&nbsp;&nbsp;&nbsp;Parivar</b></span>
                        </Link>
          </div>
          <button
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BiX className="w-6 h-6" />
          </button>
        </div>
        
        <div className="px-4 py-6 space-y-6">
          <a href="#" className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
            About us
          </a>
          
          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
              onClick={() => toggleMobileSection('menu1')}
            >
              <span>जिनमूर्ति विभाग</span>
              <BiChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'menu1' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${
              expandedMobileSection === 'menu1' 
                ? 'max-h-96 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 mt-0'
            }`}>
              <div className="space-y-4 pl-4">
                {dropdownItems.menu1.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu1' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu1' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
              onClick={() => toggleMobileSection('menu2')}
            >
              <span>जिनमंदिर विभाग</span>
              <BiChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'menu2' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${
              expandedMobileSection === 'menu2' 
                ? 'max-h-96 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 mt-0'
            }`}>
              <div className="space-y-4 pl-4">
                {dropdownItems.menu2.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu2' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu2' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
              onClick={() => toggleMobileSection('menu3')}
            >
              <span>जिनागम विभाग</span>
              <BiChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'menu3' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${
              expandedMobileSection === 'menu3' 
                ? 'max-h-96 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 mt-0'
            }`}>
              <div className="space-y-4 pl-4">
                {dropdownItems.menu3.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu3' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu3' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors"
              onClick={() => toggleMobileSection('menu4')}
            >
              <span>अध्यात्म विभाग</span>
              <BiChevronDown className={`w-5 h-5 transition-transform duration-200 ${expandedMobileSection === 'menu4' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${
              expandedMobileSection === 'menu4' 
                ? 'max-h-96 opacity-100 mt-4' 
                : 'max-h-0 opacity-0 mt-0'
            }`}>
              <div className="space-y-4 pl-4">
                {dropdownItems.menu4.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu4' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu4' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#" className="block text-lg font-medium text-gray-900 hover:text-cyan-600 transition-colors">
            Pricing
          </a>

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;