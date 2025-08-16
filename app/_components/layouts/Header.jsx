"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { usePathname } from "next/navigation";
import HexagonalSvg from "../HexagonalSvg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  const timeoutRef = useRef(null);
  const pathname = usePathname();
  // console.log(pathname,"pathname")

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

  const handleMenuItemClick = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setExpandedMobileSection(null);
  };

  const dropdownItems = {
    menu1: [
      {
        id: 11,
        emoji: "🔥",
        link: "/pages/jinmurti-vibhag/jinpratima-suraksha",
        title: "जिनप्रतिमा सुरक्षा",
        description:
          "प्राचीन प्रतिमाओं की सुरक्षा को ध्यान में रखकर कुदरती द्रव्यों से लेप व ओप का कार्य",
      },
      {
        id: 12,
        emoji: "❤️",
        link: "/pages/jinmurti-vibhag/jinpratima-nirmaan-pashaan",
        title: "जिनप्रतिमा निर्माण - पाषाण",
        description:
          "मकराना आदि की माइन्स में से प्राप्त उत्कृष्ट पाषाण में से प्रतिमाजी का पवित्र वातावरण में निर्माणकार्य",
      },
      {
        id: 13,
        emoji: "🤘",
        link: "/pages/jinmurti-vibhag/jinpratima-nirmaan-dhatu",
        title: "जिनप्रतिमा निर्माण - धातु",
        description:
          "पंच धातु की प्रतिमा आदि का निर्माणकार्य",
      },
      {
        id: 42,
        emoji: "🤘",
        link: "/pages/jinmurti-vibhag/jinpratima-sangrahan",
        title: "प्राचीन जिनप्रतिमा संग्रहण",
        description:
          "प्रतिमाओं की पूजा-अर्चना अच्छी तरह से हो इसके लिए सूरत में प्रतिमातीर्थ में प्रतिमा का स्वीकार कार्य",
      },
      {
        id: 14,
        emoji: "🤘",
        link: "/pages/jinmurti-vibhag/jinpratima-aashatara-nivaran",
        title: "जिनप्रतिमा आशातरा निवारण",
        description:
          "खंडित आदि प्रतिमा एवं अयोग्य द्रव्य से बनी प्रतिमाओं की आशातना के निवारण के लिए स्वीकार कार्य",
      },
    ],
    menu2: [
      {
        id: 15,
        emoji: "🔥",
        link: "/pages/jinmandir-vihabg/jinalaya-suraksha",
        title: "जिनालय सुरक्षा (मरम्मत)",
        description:
          "जिनालय का लीकेज आदि समस्याओं का निर्माणकार्य",
      },
      {
        id: 16,
        emoji: "❤️",
        link: "/pages/jinmandir-vihabg/jinalaya-suddhi",
        title: "जिनालय शुद्धि - उपाश्रय शुद्धि",
        description:
          "जिनालय के तल से लेकर शिखर तक की कोने कोने की शुद्धि एवं उपाश्रय की भी शुद्धि का कार्य",
      },
      {
        id: 17,
        emoji: "🤘",
        link: "/pages/jinmandir-vihabg/jinalaya-navnirmaan",
        title: "जिनालय नवनिर्माण तथा मार्गदर्शन",
        description:
          "कहीं पर भी जिनालय का निर्माणकार्य एवं मार्गदर्शन",
      },
      {
        id: 18,
        emoji: "📘",
        link: "/pages/jinmandir-vihabg/patthar-ghadayi",
        title: "जिनालय और गृहजिनालय के लिए संगमरमर के पत्थर की घड़ाई",
        description:
          "जिनालय एवं गृहजिनालय के लिए आवश्यक पत्थरों  गढ़ने का कार्य",
      },
      {
        id: 19,
        emoji: "😎",
        link: "/pages/jinmandir-vihabg/dev-bagicha",
        title: "देव बगीचे का निर्माण",
        description:
          "प्रभुपूजा के पुष्पों के लिए देवबगीचो का निर्माणकार्य",
      },
    ],
    menu3: [
      {
        id: 20,
        emoji: "🔥",
        link: "/pages/jinagam-vibhag/prachin-shrut-surksha",
        title: "प्राचीन श्रुत सुरक्षा",
        description:
          "जिनशासन के करोडों श्लोकप्रमाण प्राचीन शास्त्रों का संरक्षणकार्य",
      },
      {
        id: 21,
        emoji: "❤️",
        link: "/pages/jinagam-vibhag/arvachin-shrut-prakashan",
        title: "अर्वाचीन श्रुत प्रकाशन-प्रचार",
        description:
          "पथदर्शक सूरीभगवन्त के प्रवचन आदि के पुस्तकों का प्रकाशनकार्य",
      },
      {
        id: 22,
        emoji: "🤘",
        link: "/pages/jinagam-vibhag/haribhadrasuri-shastra-sangrah",
        title: "हरिभद्रसूरी शास्त्रसंग्रह",
        description:
          "सूरत में एक ऐसा ग्रंथालय जहाँ से सैकड़ों ज्ञानपिपासुओं को शास्त्र उपलब्ध कराये जाते है",
      },
      {
        id: 23,
        emoji: "🔥",
        link: "/pages/jinagam-vibhag/adhyatm-gyantirth",
        title: "अध्यात्म ज्ञानतीर्थ",
        description:
          " प्राचीन- अर्वाचीन श्रुतज्ञान का सुरक्षा का विविध कार्यवाही के लिए चार मंजिला भवन",
      },
      {
        id: 24,
        emoji: "❤️",
        link: "/pages/jinagam-vibhag/ganipitak-nirmaan-prasar",
        title: "गणीपिटक निर्माण प्रसार",
        description:
          "श्रुतज्ञान की सही अर्थ में पूजा करने का आलंबन उपाश्रय-पाठशाला आदि में",
      },
    ],
    menu4: [
      {
        id: 25,
        emoji: "🔥",
        link: "/pages/adhyatm-vibhag/parishthapanika-samiti",
        title:
          "पारिष्ठापनिका समिति सुरक्षा",
        description:
          "चतुर्विध संघ की पारिष्ठापनिका समिति की रक्षा के लिए मात्रु कुंडी एवं स्थण्डिल डोम निर्माणकार्य ",
      },
      {
        id: 26,
        emoji: "❤️",
        link: "/pages/adhyatm-vibhag/vihar-suraksha",
        title: "विहार सुरक्षा",
        description:
          "विहार के दौरान श्रमणीवर्याओं की सुरक्षा के लिए भारतभर में कर्मचारी भेजने का कार्य",
      },
      {
        id: 27,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/charitra-upkaran-bhakti",
        title: "चारित्र उपकरण भक्ति",
        description:
          "चारित्रपालन में विराधना से बचाए ऐसे चुनिंदे उपकरणों से पूज्यो की भक्ति",
      },
      {
        id: 28,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/jal-stand",
        title: "उष्ण जल ठंडा करने का स्टैंड",
        description:
          "उष्णजल को शीत करने के स्टेण्ड का वितरण कार्य ",
      },
      {
        id: 29,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/suddh-puja-dravya",
        title: "शुद्ध पूजा के द्रव्यों की सम्प्राप्ति",
        description:
          " पूजा में आवश्यक लेब टेस्ट द्वारा प्रमाणित शुद्धद्रव्यों की उपलब्धि का कार्य",
      },
      {
        id: 30,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/dharmanusthan",
        title: "धर्मानुष्ठान सुशोभन सामग्री की उपलब्धि",
        description:
          "धर्म के अनुष्ठानों को जाजरमान बनाने वाली सामग्री की उपलब्धि का कार्य",
      },
      {
        id: 31,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/uddhyapan-upkaran",
        title: "उद्यापन उपकरण व्यवस्था",
        description:
          "उद्यापनों में रखे गए उपकरणों की आवश्यकता के अनुसार उद्यापन का आयोजन",
      },
      {
        id: 32,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/anusthan-aayojan",
        title: "अनुष्ठान आयोजन (सामूहिक दीक्षा, उपधान , वाचना श्रेणी आदि)",
        description:
          "सामूहिक दीक्षाएँ , उपधान तप , वाचनाश्रेणी जैसे अनुष्ठानों का आयोजन",
      },
      {
        id: 33,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/adhyatmshala",
        title: "अध्यात्मशाला (बालसंस्करण पाठशाला)",
        description:
          "बच्चो में संस्कार सिंचन के लिए रुचिकर दैनिक आयोजन ",
      },
      {
        id: 34,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/sanskrit-shikshan",
        title: "संस्कृत शिक्षण वर्ग (संशिव)",
        description:
          "संस्कृत भाषा का ज्ञान प्राप्त करने के लिए विशिष्ट वर्गो का आयोजन ",
      },
      {
        id: 35,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/paiyashala",
        title: "पाइयशाला (प्राकृत शिक्षणशाला)",
        description:
          "प्राकृत भाषा का ज्ञान प्राप्त कराने के लिए व्यवस्था ",
      },
      {
        id: 36,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/jivant-drishyawali",
        title: "जीवंत दृश्यावली (भावोत्पादक नाटक)",
        description:
          "शौर्य, समर्पण एवं त्याग की भावना को उद्दीप्त करने वाले नाटकों का आयोजन",
      },
      {
        id: 37,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/prabhubhakti-upkaran",
        title: "प्रभुभक्ति आदि के बेजोड़ उपकरणों का निर्माण",
        description:
          "प्रभुभक्ति आदि में भावों की वृद्धि के लिए उपकरण बनवाने ",
      },
      {
        id: 38,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/uttam-bhaktidrivya",
        title: "उत्तम भक्तिद्रव्य संशोधन",
        description:
          "प्रभुभक्ति में आवश्यक द्रव्य, औषधियाँ आदि कार्य का गहन संशोधन",
      },
      {
        id: 39,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/legal-cell",
        title: "लीगल सेल : क़ानूनी मार्गदर्शन",
        description:
          "जैन धर्म से संलग्न होने वाली लीगल बाबतों की जानकारी श्रीसंघ में प्रसारित करना ",
      },
      {
        id: 40,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/chitra-nirmaan",
        title: "चित्र निर्माण",
        description:
          "विविध चित्रों को बनवाकर प्रसारित करना",
      },
      {
        id: 41,
        emoji: "🤘",
        link: "/pages/adhyatm-vibhag/vividh-sangh",
        title: "विविध संघो तथा आराधना भवनों का संचालन",
        description:
          "आराधना के लिए जिनालय-उपाश्रय आदि से युक्त संकुलो का निर्माण व संचालनकार्य",
      },
    ],
  };

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(
      expandedMobileSection === section ? null : section
    );
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed z-50 text-maroon right-0 left-0 font-heading">
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Link href={"/"} className="flex gap-4 items-center">
                  <img className="h-10" src="/logo.png" alt="" />
                  <span className="text-lg uppercase text-maroon">
                    <b>अध्यात्म &nbsp;परिवार</b>
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className={`${pathname=="/" && "text-black"} text-maroon font-sans hover:text-pink-600 font-medium transition-colors`}
              >
                About us
              </a>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("menu1")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 ${pathname.includes("/jinmurti-vibhag") && "text-pink-600"}  ${
                    activeDropdown === "menu1"
                      ? "text-pink-600"
                      : "text-maroon"
                  } font-medium transition-colors`}
                >
                  <span>जिनमूर्ति विभाग</span>
                  <BiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "menu1" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("menu2")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 ${pathname.includes("/jinmandir-vihabg") && "text-pink-600"}   ${
                    activeDropdown === "menu2"
                      ? "text-pink-600"
                      : "text-maroon"
                  } font-medium transition-colors`}
                >
                  <span>जिनमंदिर विभाग</span>
                  <BiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "menu2" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("menu3")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 ${pathname.includes("/jinagam-vibhag") && "text-pink-600"}    ${
                    activeDropdown === "menu3"
                      ? "text-pink-600"
                      : "text-maroon"
                  } font-medium transition-colors`}
                >
                  <span>जिनागम विभाग</span>
                  <BiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "menu3" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("menu4")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 ${pathname.includes("/adhyatm-vibhag") && "text-pink-600"}  ${
                    activeDropdown === "menu4"
                      ? "text-pink-600"
                      : "text-maroon"
                  } font-medium transition-colors`}
                >
                  <span>अध्यात्म विभाग</span>
                  <BiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "menu4" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </nav>

            {/* Desktop */}
            <div className="hidden md:flex items-center">
              <Link
                href={"/pages/contactus"}
                className="bg-maroon font-sans hover:bg-maroon/90 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Contact us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-maroon hover:text-content hover:bg-lightpink transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <BiX className="w-6 h-6" />
              ) : (
                <BiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Menu - Animated Height */}
        <div
          className={`absolute top-full left-0 w-full bg-whitey shadow-lg border-t z-40 overflow-y-auto transition-all duration-300 ease-out ${
            activeDropdown
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
          onMouseEnter={() => handleMouseEnter(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activeDropdown &&
                dropdownItems[activeDropdown]?.map((item, index) => {
                  const isActive = item.link === pathname;
                  return (
                    <Link
                      href={item.link}
                      key={item.id}
                      onClick={handleMenuItemClick}
                      className={`p-4 rounded-lg relative transition-all duration-300 cursor-pointer group transform ${
                        isActive 
                          ? "bg-maroon text-white" 
                          : "bg-lightpink/80 hover:bg-lightyellow hover:text-maroon"
                      } ${
                        activeDropdown
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {!isActive && <HexagonalSvg accentColor="maroon"/>}
                      <div className="flex items-start space-x-3 relative z-10">
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                          {/* {item.emoji} */}
                        </span>
                        <div>
                          <h3 className="mb-1 font-semibold">{item.title}</h3>
                          <p className={`text-sm leading-relaxed ${isActive ? 'text-white/80' : ''}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Fixed with Scrolling */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-whitey transform transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        {/* Fixed Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b bg-whitey">
          <div className="flex items-center space-x-2">
            <Link href={"/"} className="flex gap-4 items-center">
              <img className="h-10" src="/logo.png" alt="" />
              <span className="text-lg uppercase text-maroon">
                <b>अध्यात्म &nbsp;परिवार</b>
              </span>
            </Link>
          </div>
          <button
            className="p-2 rounded-md text-content hover:text-maroon hover:bg-lightpink transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <BiX className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6 space-y-6">
          <a
            href="/"
            className={`${pathname=="/" && "text-pink-600"} block font-sans text-lg font-medium text-maroon hover:text-pink-600 transition-colors`}
          >
            About us
          </a>

          <div>
            <button
              className={`${pathname.includes("/jinmurti-vibhag") && "text-pink-600"} flex items-center justify-between w-full text-lg font-medium text-maroon hover:text-pink-600 transition-colors`}
              onClick={() => toggleMobileSection("menu1")}
            >
              <span>जिनमूर्ति विभाग</span>
              <BiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedMobileSection === "menu1" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expandedMobileSection === "menu1"
                  ? "max-h-[1000px] opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className=" space-y-4 pl-4">
                {dropdownItems.menu1.map((item, index) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    onClick={handleMenuItemClick}
                    className={`relative bg-lightpink flex items-start space-x-3 p-3 ${
                      item.link == pathname && "bg-maroon text-white"
                    } rounded-lg hover:bg-maroon/20 transition-all duration-300 transform ${
                      expandedMobileSection === "menu1"
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        expandedMobileSection === "menu1"
                          ? `${index * 50}ms`
                          : "0ms",
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className="mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-content">{item.description}</p>
                    </div>
                    <HexagonalSvg accentColor="maroon" />
                  </Link>
                ))}
                
              </div>
            </div>
          </div>

          <div>
            <button
              className={`${pathname.includes("/jinmandir-vihabg") && "text-pink-600"} flex items-center justify-between w-full text-lg font-medium text-maroon hover:text-pink-600 transition-colors`}
              onClick={() => toggleMobileSection("menu2")}
            >
              <span>जिनमंदिर विभाग</span>
              <BiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedMobileSection === "menu2" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expandedMobileSection === "menu2"
                  ? "max-h-[1000px] opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-4 pl-4">
                {dropdownItems.menu2.map((item, index) => (
                  <Link
                    href={item.link}
                    onClick={handleMenuItemClick}
                    key={item.id}
                    className={`relative bg-lightpink flex items-start space-x-3 p-3 ${
                      item.link == pathname && "bg-maroon text-white"
                    } rounded-lg hover:bg-maroon/20 transition-all duration-300 transform ${
                      expandedMobileSection === "menu2"
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        expandedMobileSection === "menu2"
                          ? `${index * 50}ms`
                          : "0ms",
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className=" mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-content">{item.description}</p>
                    </div>
                     <HexagonalSvg accentColor="maroon" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              className={`${pathname.includes("/jinagam-vibhag") && "text-pink-600"} flex items-center justify-between w-full text-lg font-medium text-maroon hover:text-pink-600 transition-colors`}
              onClick={() => toggleMobileSection("menu3")}
            >
              <span>जिनागम विभाग</span>
              <BiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedMobileSection === "menu3" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expandedMobileSection === "menu3"
                  ? "max-h-[1000px] opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-4 pl-4">
                {dropdownItems.menu3.map((item, index) => (
                  <Link
                    href={item.link}
                    onClick={handleMenuItemClick}
                    key={item.id}
                    className={`relative bg-lightpink flex items-start space-x-3 p-3 ${
                      item.link == pathname && "bg-maroon text-white"
                    } rounded-lg hover:bg-maroon/20 transition-all duration-300 transform ${
                      expandedMobileSection === "menu3"
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        expandedMobileSection === "menu3"
                          ? `${index * 50}ms`
                          : "0ms",
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className=" mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-content">{item.description}</p>
                    </div>
                     <HexagonalSvg accentColor="maroon" />
                  </Link>
                  
                ))}
              </div>
            </div>
          </div>

          <div>
            <button
              className={`${pathname.includes("/adhyatm-vibhag") && "text-pink-600"} flex items-center justify-between w-full text-lg font-medium text-maroon hover:text-pink-600 transition-colors`}
              onClick={() => toggleMobileSection("menu4")}
            >
              <span>अध्यात्म विभाग</span>
              <BiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  expandedMobileSection === "menu4" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                expandedMobileSection === "menu4"
                  ? " opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-4 pl-4">
                {dropdownItems.menu4.map((item, index) => (
                  <Link
                    href={item.link}
                    onClick={handleMenuItemClick}
                    key={item.id}
                    className={`relative bg-lightpink flex items-start space-x-3 p-3 ${
                      item.link == pathname && "bg-maroon text-white"
                    } rounded-lg hover:bg-maroon/20 transition-all duration-300 transform ${
                      expandedMobileSection === "menu4"
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay:
                        expandedMobileSection === "menu4"
                          ? `${index * 50}ms`
                          : "0ms",
                    }}
                  >
                    {/* <span className="text-xl">{item.emoji}</span> */}
                    <div>
                      <h3 className=" mb-1 font-semibold">{item.title}</h3>
                      <p className="text-sm text-content">{item.description}</p>
                    </div>
                     <HexagonalSvg accentColor="maroon" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={"/pages/contactus"}
            className="w-full font-sans flex items-center justify-center bg-maroon hover:bg-maroon/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
