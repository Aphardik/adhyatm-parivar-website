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
        id: 11,
        emoji: '🔥',
        link:"/pages/jinmurti-vibhag/jinpratima-suraksha",
        title: 'जिनप्रतिमा सुरक्षा',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        id: 12,
        emoji: '❤️',
        link:"/pages/jinmurti-vibhag/jinpratima-nirmaan-pashaan",
        title: 'जिनप्रतिमा निर्माण - पाषाण',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        id: 13,
        emoji: '🤘',
        link:"/pages/jinmurti-vibhag/jinpratima-nirmaan-dhatu",
        title: 'जिनप्रतिमा निर्माण - धातु',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
      {
        id: 42,
        emoji: '🤘',
        link:"/pages/jinmurti-vibhag/jinpratima-sangrahan",
        title: 'प्राचीन जिनप्रतिमा संग्रहण',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
      {
        id: 14,
        emoji: '🤘',
        link:"/pages/jinmurti-vibhag/jinpratima-aashatara-nivaran",
        title: 'जिनप्रतिमा आशातरा निवारण',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
    ],
    menu2: [
      {
        id: 15,
        emoji: '🔥',
        link:"/pages/jinmandir-vibhag/jinalaya-suraksha",
        title: 'जिनालय सुरक्षा (मरम्मत)',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        id: 16,
        emoji: '❤️',
        link:"/pages/jinmandir-vibhag/jinalaya-suddhi",
        title: 'जिनालय शुद्धि - उपाश्रय शुद्धि',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        id: 17,
        emoji: '🤘',
        link:"/pages/jinmandir-vibhag/jinalaya-navnirmaan",
        title: 'जिनालय नवनिर्माण तथा मार्गदर्शन',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
      {
        id: 18,
        emoji: '📘',
        link:"/pages/jinmandir-vibhag/patthar-ghadayi",
        title: 'जिनालय और गृहजिनालय के लिए संगमरमर के पत्थर की घड़ाई',
        description: 'At vitae consectetur lacus, scelerisque. Faucibus aliquam.'
      },
      {
        id: 19,
        emoji: '😎',
        link:"/pages/jinmandir-vibhag/dev-bagicha",
        title: 'देव बगीचे का निर्माण',
        description: 'Mi donec id in pellentesque ullamcorper ut. Venenatis eu.'
      },
    ],

     menu3: [
      {
        id: 20,
        emoji: '🔥',
        link:"/department/jinmurtidepartment",
        title: 'प्राचीन श्रुत सुरक्षा',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        id: 21,
        emoji: '❤️',
        link:"/department/jinmurtidepartment",
        title: 'अर्वाचीन श्रुत प्रकाशन-प्रचार',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        id: 22,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'हरिभद्रसूरी शास्त्रसंग्रह',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
      {
        id: 23,
        emoji: '🔥',
        link:"/department/jinmurtidepartment",
        title: 'अध्यात्म ज्ञानतीर्थ',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        id: 24,
        emoji: '❤️',
        link:"/department/jinmurtidepartment",
        title: 'गणीपिटक निर्माण प्रसार',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
    ],
     menu4: [
      {
        id: 25,
        emoji: '🔥',
        link:"/department/jinmurtidepartment",
        title: 'परिष्ठापानिका समिति सुरक्षा मात्रु की कुंडी निर्माण स्थंडिल भूमि (डेम) निर्माण',
        description: 'Integer ut sit parienti enim eu. Egestas odio scelerisque.'
      },
      {
        id: 26,
        emoji: '❤️',
        link:"/department/jinmurtidepartment",
        title: 'विहार सुरक्षा',
        description: 'Platea elemend odio at integer nulla tristique magna sed sed.'
      },
      {
        id: 27,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'चारित्र उपकरण भक्ति',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 28,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'उष्ण जल ठंडा करने का स्टैंड',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 29,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'शुद्ध पूजा के द्रव्यों की सम्प्राप्ति',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 30,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'धर्मानुष्ठान सुशोभन सामग्री की उपलब्धि',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 31,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'उद्यापन उपकरण व्यवस्था',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 32,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'अनुष्ठान आयोजन (सामूहिक दीक्षा, उपधान , वाचना श्रेणी आदि)',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 33,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'अध्यात्मशाला (बालसंस्करण पाठशाला)',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 34,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'संस्कृत शिक्षण वर्ग (संशिव)',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 35,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'पाइयशाला (प्राकृत शिक्षणशाला)',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 36,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'जीवंत दृश्यावली (भावोत्पादक नाटक)',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {id: 37,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'प्रभुभक्ति आदि के बेजोड़ उपकरणों का निर्माण',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 38,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'उत्तम भक्तिद्रव्य संशोधन',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 39,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'लीगल सेल : क़ानूनी मार्गदर्शन',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 40,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'चित्र निर्माण',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
       {
        id: 41,
        emoji: '🤘',
        link:"/department/jinmurtidepartment",
        title: 'विविध संघो तथा आराधना भवनों का संचालन',
        description: 'Nisl ut aliquam ac, adipiscing pretium orci urna placerat. Id id.'
      },
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
    <div className="fixed z-50 bg-white right-0 left-0 font-heading">
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
              <a href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About us
              </a>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu1')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center space-x-1  ${activeDropdown === 'menu1' ? 'text-cyan-700' : 'text-gray-700'} font-medium transition-colors`}>
                  <span>जिनमूर्ति विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu1' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu2')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center space-x-1  ${activeDropdown === 'menu2' ? 'text-cyan-700' : 'text-gray-700'} font-medium transition-colors`}>
                  <span>जिनमंदिर विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu2' ? 'rotate-180' : ''}`} />
                </button>
              </div>
                <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu3')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center space-x-1  ${activeDropdown === 'menu3' ? 'text-cyan-700' : 'text-gray-700'} font-medium transition-colors`}>
                  <span>जिनागम विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu3' ? 'rotate-180' : ''}`} />
                </button>
              </div>
                <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('menu4')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center space-x-1 ${activeDropdown === 'menu4' ? 'text-cyan-700' : 'text-gray-700'} font-medium transition-colors`}>
                  <span>अध्यात्म विभाग</span>
                  <BiChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'menu4' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </a> */}
            </nav>

            {/* Desktop */}
            <div className="hidden md:flex items-center">
              <Link href={'/pages/contactus'} className="bg-cyan-800 hover:bg-cyan-900 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Contact us
              </Link>
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
          className={`absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 overflow-y-scroll transition-all duration-300 ease-out ${
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
                <Link href={item.link}
                  key={item.id}
                  className={`p-4 rounded-lg bg-gray-100 hover:bg-cyan-50 transition-all duration-300 cursor-pointer group transform ${
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
                      {/* {item.emoji} */}
                    </span>
                    <div>
                      <h3 className="text-gray-700 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Link>
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
                  <Link href={item.link} 
                    key={item.id} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu1' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu1' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
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
                  <Link href={item.link} 
                    key={item.id} 
                    className={`flex items-start space-x-3 p-3 rounded-lg  hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu2' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu2' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
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
                  <Link href={item.link} 
                    key={item.id} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu3' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu3' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
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
                  <Link href={item.link} 
                    key={item.id} 
                    className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 transform ${
                      expandedMobileSection === 'menu4' 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: expandedMobileSection === 'menu4' ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href={'/pages/contactus'} className="w-full flex items-center justify-center bg-cyan-800 hover:bg-cyan-900 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;