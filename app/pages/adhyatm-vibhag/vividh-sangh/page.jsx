import React from 'react';

const MergedJainPage = () => {
  return (
    <div className="bg-white font-body">
      {/* First Page Content */}
      <div className="flex flex-col md:flex-row pt-6 text-white">
        {/* Left Column */}
        <div className="w-full md:w-1/2 bg-white text-gray-800">
          {/* Top Section with 4.17 */}
          <div className="flex">
            <div className="bg-gray-800 p-4 inline-block">
              <h1 className="text-gray-100 text-4xl font-bold">4.17</h1>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="sm:pr-6 pt-6">
            <h2 className="text-gray-800 text-2xl font-bold font-heading mb-4">विविध संघों - आराधना भवनों का संचालन...</h2>
            
            <p className="mb-4">
              विविध स्थलों पर आराधकों को पूरे बारह महीने आराधना स्थल का आलंबन मिलता रहे, इसलिए अध्यात्म परिवार अनेक संघों तथा श्राविका आराधना भवनों का निर्माण तथा संचालन कर रहा है।
            </p>
            
            <h3 className="text-gray-700 font-heading font-semibold text-lg mb-4 mt-8 text-center">
              श्री शांति-कनक श्रमणोपासक ट्रस्ट - श्री अध्यात्म परिवार संचालित <br/>
              श्री संघ आदि की रूपरेखा
            </h3>
            
            {/* Paarl-Surat Section */}
            <div className="mt-6 border border-gray-300 p-4">
              <h4 className="text-gray-600 font-heading font-semibold text-base mb-2">
                श्री शांतिवर्धक श्वे.मू.पू. तपागच्छ जैन संघ, पाल-सूरत
              </h4>
              <ul className="ml-6 space-y-1">
                <li>• विशाल संकुल</li>
                <li>• द्वि मंजिलीय तथा त्रिशिखरीय शानदार जिनालय (निर्माणाधीन)</li>
                <li>• आनंद श्रावक आराधना भवन • चंपा श्राविका आराधना भवन</li>
                <li>• अध्यात्म भवन • आयंबिलशाला • पाठशाला • अचित जलगृह</li>
                <li>• भक्तिखंड • आगमतीर्थ • अतिथि भवन • मंगल घर</li>
              </ul>
            </div>
            
            {/* Building Image */}
            <div className="mt-6">
              <img src="/adhyatm/vividh-sangh/img-3.70.png" alt="Building Complex" className="w-full h-auto" />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-full md:w-1/2 p-4 border border-golden bg-gray-100 text-gray-800">
          {/* Nagpur Section */}
          <div className="mb-6">
            <h4 className="font-heading text-gray-600 text-base font-semibold mb-2">
              श्री शांति-कनक श्वे.मू.पू. तपागच्छ जैन संघ, नानपुरा
            </h4>
            <ul className="ml-2 text-sm space-y-1">
              <li>• प्राचीन आदिनाथ प्रभु का बेजोड़ कोरणीयुक्त जिनालय</li>
              <li>• श्रावक आराधना भवन • सौभाग्य उत्तम श्राविका आराधना भवन</li>
              <li>• श्री हरिभद्रसूरि शास्त्रसंग्रह (ज्ञानभंडार) • अनुष्ठान भवन</li>
              <li>• पाठशाला • आयंबिलशाला • अचित जलगृह • अध्यात्म ज्ञानतीर्थ</li>
            </ul>
          </div>
          
          {/* Nagpur Building Image */}
          <div className="mb-6">
            <img src="/adhyatm/vividh-sangh/img-3.71.png" alt="Nagpur Building" className="w-full h-auto" />
          </div>
          
          {/* Ahmedabad Section */}
          <div className="mt-8 flex">
            <div className="w-1/2">
              <img src="/adhyatm/vividh-sangh/img-3.72.png" alt="Ahmedabad Building" className="w-full h-auto" />
            </div>
            <div className="w-1/2 pl-4">
              <h4 className="text-base text-gray-600 font-heading font-semibold mb-2">
                श्री शांति-संयम श्वे.मू.पू.<br/>
                तपागच्छ जैन संघ,<br/>
                उस्मानपुरा - अहमदाबाद
              </h4>
              <ul className="ml-2 text-sm space-y-1 mt-4">
                <li>• जिनालय • आराधना भवन</li>
                <li>• आयंबिलशाला • पाठशाला</li>
                <li>• अतिथि भवन</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar Section */}
        <div className="bg-gray-100 text-gray-800 p-6 lg:w-1/3 flex flex-col items-center">
          <img alt="A large building with multiple floors and arches" className="rounded-lg w-3/4 max-w-xs mb-6" src="/adhyatm/vividh-sangh/img-3.73.png"/>
          
          <div className="text-center">
            <p className="mb-3 text-base font-heading text-gray-800 font-semibold">
              श्री शांति-जिन श्वे.मू.पू. तपागच्छ जैन संघ,<br/>
              मादलपुर - पालड़ी अहमदाबाद (निर्माणाधीन)
            </p>
            <ul className="text-sm mb-3 space-y-1">
              <li>• आलीशान जिनालय • श्रावक आराधना भवन</li>
              <li>• श्राविका आराधना भवन • आयंबिलशाला</li>
              <li>• अतिथि भवन • अनुष्ठान खंड • अध्यात्म भवन</li>
              <li>• पाठशाला • भोजनशाला • यानशाला • रथशाला</li>
            </ul>
            
            <p className="mb-3 mt-6 text-base font-heading text-gray-800 font-semibold">
              श्री शांति-सोहन श्वे.मू.पू. तपागच्छ जैन संघ, अडाजन पाटिया - सुरत
            </p>
            <ul className="text-sm mb-4">
              <li>• जिनालय • आराधना भवन</li>
            </ul>
            
            <p className="mb-3 mt-6 text-base font-heading text-gray-800 font-semibold">
              श्री शांति-सोहन श्वे.मू.पू. तपागच्छ जैन संघ, न्यू वरणा - अहमदाबाद
            </p>
            <ul className="text-sm">
              <li>• जिनालय • श्रावक आराधना भवन</li>
              <li>• श्राविका आराधना भवन</li>
              <li>• आयंबिलशाला • पाठशाला</li>
            </ul>
          </div>
        </div>
        
        {/* Main Content Section */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-6 text-center">
              <h2 className="text-gray-800 text-xl font-heading font-semibold mb-4">गुरुमंदिर...</h2>
              <ul className="text-gray-800 mb-8 space-y-2 text-sm">
                <li>• 'सूरिशांति' अवतरण भूमि-मांडल</li>
                <li>• 'जिनविहार' युगभूमि, वेसु, सूरत</li>
                <li>• 'जिनविहार' भाभरतीर्थ (निर्माणाधीन)</li>
                <li>• 'सूरित्रय' जन्मभूमि, वाकड़िया वडगाम</li>
              </ul>
              <h3 className="text-gray-900 text-lg font-heading font-semibold mb-2">युगभूमि गुरुमंदिर</h3>
              <img alt="A temple with intricate carvings and domes" className="rounded-lg w-3/4 max-w-xs mt-4 mx-auto" src="/adhyatm/vividh-sangh/img-3.74.png"/>
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2 p-6 flex justify-center">
              <img alt="A statue of a seated figure with intricate carvings" className="rounded-lg w-3/4 max-w-xs" src="/adhyatm/vividh-sangh/img-3.75.png"/>
            </div>
          </div>
          
          <img className="w-full" src="/adhyatm/vividh-sangh/img-3.76.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default MergedJainPage;