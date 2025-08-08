import BottomRighSvg from "@/app/_components/BottomRighSvg";
import HeaderSvg from "@/app/_components/HeaderSvg";
import CounterStatsUI from "@/app/_components/StatData";
import TopLeftSvg from "@/app/_components/TopLeftSvg";
import React from "react";
import { FaCheck } from "react-icons/fa";

export const metadata = {
  title: 'विविध संघों - आराधना भवनों का संचालन | अध्यात्म विभाग',
  description: '',
}

const Page = () => {
   const bhavans = [
    "श्री शांति-कनक आराधना भवन - कतारगाम, सुरत",
    "श्री शांति-कनक आराधना भवन - डीसा",
    "श्री आर्या ब्राह्मी-सुंदरी अध्यात्म भवन - बोरीवली मुंबई",
    "श्री सीता सती अध्यात्म भवन - खोताचीवाड़ी, मुंबई",
    "श्री अंजना सती अध्यात्म भवन - नवरंगपुरा, अहमदाबाद",
    "श्री धारिणी अध्यात्म भवन - वालकेश्वर, मुंबई",
    "साध्वी श्री सुलोचना श्रीजी श्राविका आराधना भवन - साबरमती, अहमदाबाद",
  ];

                    const statsData = [
    { count: "7.09Cr +", label: "व्यवस्था का खर्च, अन्य संघो/ट्रस्टों को दान तथा विविध अनुष्ठान खर्च आदि",  color: "bg-gradient-to-b from-yellow-400 to-orange-500" },
    ];
  return (
    <div className="container mx-auto font-body">
      {/* Header Section */}
      <header className="bg-lightpink relative">
        <HeaderSvg/>
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl text-center sm:text-4xl font-heading font-bold text-maroon">
                विविध संघों - आराधना भवनों का संचालन
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <div className="px-2 sm:px-4">
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="grid sm:grid-cols-1 items-center gap-6 sm:gap-10">
          <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
             <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
            <p className="text-xl text-maroon leading-relaxed">
              विविध स्थलों पर आराधकों को पूरे बारह महीने आराधना स्थल का आलंबन
              मिलता रहे, इसलिए अध्यात्म परिवार अनेक संघों तथा श्राविका आराधना
              भवनों का निर्माण तथा संचालन कर रहा है।
            </p>
          </div>
        </div>
      </section>

      {/* Trust Details Section */}
      <section className="py-8 w-full sm:pb-8 lg:pb-8">
        <div className="text-center mb-8 lg:">
          <h3 className="text-xl  sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-कनक श्रमणोपासक ट्रस्ट - श्री अध्यात्म परिवार संचालित श्री
            संघ आदि की रूपरेखा
          </h3>
        </div>
      </section>

      {/* Paal-Surat Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांतिवर्धक श्वे.मू.पू. तपागच्छ जैन संघ, पाल-सूरत
          </h3>
        </div>
           <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.70.jpg"
                  alt="पाल-सूरत संघ भवन"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 ">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <ul className="text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
              विशाल संकुल
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
              द्वि मंजिलीय तथा त्रिशिखरीय शानदार जिनालय (निर्माणाधीन)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आनंद श्रावक आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
              चंपा श्राविका आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
              अध्यात्म भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
              आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             पाठशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अचित जलगृह
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             भक्तिखंड
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आगमतीर्थ
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अतिथि भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            मंगल घर
            </li>
          </ul>
        </div>
     
      </section>

      {/* Nanpura Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-कनक श्वे.मू.पू. तपागच्छ जैन संघ, नानपुरा
          </h3>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.71.jpg"
                  alt="नानपुरा संघ भवन"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow mb-8">
      <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
          <ul className=" text-xl text-maroon grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             प्राचीन आदिनाथ प्रभु का बेजोड़ कोरणीयुक्त जिनालय
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            श्रावक आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            सौभाग्य उत्तम श्राविका आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             श्री हरिभद्रसूरि शास्त्रसंग्रह (ज्ञानभंडार)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अनुष्ठान भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             पाठशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अचित जलगृह
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            अध्यात्म ज्ञानतीर्थ
            </li>
           
          </ul>
        </div>
        
      </section>

      {/* Ahmedabad Usmanpura Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-संयम श्वे.मू.पू. तपागच्छ जैन संघ, उस्मानपुरा - अहमदाबाद
          </h3>
        </div>
         <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.72.png"
                  alt="उस्मानपुरा संघ भवन"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 relative">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
         
           <ul className="text-xl grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             जिनालय
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
           आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             पाठशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अतिथि भवन
            </li>
          </ul>
        </div>
       
      </section>

      {/* Madalpur Paladi Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-जिन श्वे.मू.पू. तपागच्छ जैन संघ, मादलपुर - पालड़ी
            अहमदाबाद (निर्माणाधीन)
          </h3>
        </div>
         <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.73.png"
                  alt="मादलपुर संघ भवन"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-sm p-4 sm:p-12 bg-lightyellow mb-8 relative">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>


             <ul className="text-xl grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आलीशान जिनालय
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
           श्रावक आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            श्राविका आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            अतिथि भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अनुष्ठान खंड
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             अनुष्ठान खंड
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            अध्यात्म भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            पाठशाला 
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            भोजनशाला 
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            यानशाला  
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            रथशाला 
            </li>
           
          </ul>
        </div>
       
      </section>

      {/* Adajan Patiya Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-सोहन श्वे.मू.पू. तपागच्छ जैन संघ, अडाजन पाटिया - सुरत
          </h3>
        </div>
        <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>

          <ul className="text-xl grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             जिनालय
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आराधना भवन
            </li>
          </ul>
        </div>
      </section>

      {/* New Varana Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            श्री शांति-सोहन श्वे.मू.पू. तपागच्छ जैन संघ, न्यू वरणा - अहमदाबाद
          </h3>
        </div>
        <div className="relative rounded-sm p-4 sm:p-12 bg-lightyellow">
   <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <TopLeftSvg />
              </div>
              <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                <BottomRighSvg />
              </div>
           <ul className="text-xl grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             जिनालय
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             श्रावक आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            श्राविका आराधना भवन
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             आयंबिलशाला
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            पाठशाला
            </li>
          </ul>
        </div>
      </section>

      {/* Gurumandirs Section */}
      <section className="py-8 w-full sm:pb-12 lg:pb-16">
        <div className="text-center mb-8 lg:">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            गुरुमंदिर
          </h3>
        </div>
        <div className="relative rounded-sm p-4 sm:p-10 bg-lightyellow mb-8">
 <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
                     <ul className="text-xl grid sm:grid-cols-3 leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             'सूरिशांति' अवतरण भूमि-मांडल
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
            'जिनविहार' युगभूमि, वेसु, सूरत
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
          'जिनविहार' भाभरतीर्थ (निर्माणाधीन)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white bg-maroon rounded-full p-1 mt-1">
                <FaCheck size={14} />
              </span>
             'सूरित्रय' जन्मभूमि, वाकड़िया वडगाम
            </li>
           
          </ul>
        </div>
      </section>

      {/* Yugbhumi Gurumandir Images Section */}
      <section className="py-8 px-4">
        <div className="text-center mb-8 lg:">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            युगभूमि गुरुमंदिर
          </h3>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.74.png"
                  alt="युगभूमि गुरुमंदिर"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col p-6">
              <div className="sm:h-96 w-full flex justify-center items-center mb-6">
                <img
                  src="/adhyatm/vividh-sangh/img-3.75.png"
                  alt="गुरु प्रतिमा"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
           <div className="text-center my-8 lg:my-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink  text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            अन्य श्राविका आराधना भवन
          </h3>
        </div>
       <div className="relative bg-lightyellow py-8 my-10 px-4 md:px-12 font-body">
 <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <TopLeftSvg />
            </div>
            <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
              <BottomRighSvg />
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {bhavans.map((bhavan, index) => (
          <div
            key={index}
            className="bg-lightpink/30 rounded-sm p-4 shadow-sm transition"
          >
            <p className="text-lg text-maroon">{bhavan}</p>
          </div>
        ))}
      </div>
    </div>
     <CounterStatsUI statsData={statsData}/>
    </div>
    </div>
  );
};

export default Page;
