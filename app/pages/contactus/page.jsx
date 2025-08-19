"use client"
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaChevronRight } from 'react-icons/fa';
import Praptisthan from '@/app/_components/Praptisthan';
import HeaderSvg from '@/app/_components/HeaderSvg';
import HexagonalSvg from '@/app/_components/HexagonalSvg';

const ContactPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      city: "सुरत",
      cityEn: "Surat",
      title: "अध्यात्म परिवार मुख्य सदन",
      address: "अध्यात्म भवन, तीसरी मंजिल, आनंद श्रावक आराधना भवन, संजीवकुमार ओडिटोरियम के पास, पाल, सुरत - 395 009",
      phone: "7676769600",
      phoneDisplay: "7676 76 96 00",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1669043038683!2d72.78118397388128!3d21.18552768237838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc12c7be50d%3A0xfb3cf9ba453cd32f!2sAdhyatm%20parivar%20(Adhyatm%20bhavan)!5e0!3m2!1sen!2sin!4v1752667088470!5m2!1sen!2sin"
    },
    {
      city: "मुंबई",
      cityEn: "Mumbai",
      title: "अध्यात्म परिवार शाखा",
      address: "संभव दर्शन, ग्राउन्ड फ्लोर, हेमुकलानी मेइन रोड, ईरानी वाडी, कांदीवली वेस्ट, मुंबई - 400 067",
      phone: "8448444050",
      phoneDisplay: "844 844 40 50",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8478104063706!2d72.83873662382022!3d19.201848448012363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6dca2c3da3b%3A0xad72c42dae8ec7b6!2sSambhav%20Darshan%2C%20Hemu%20Colony%2C%20Irani%20Wadi%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1752667361044!5m2!1sen!2sin"
    },
    {
      city: "अहमदाबाद ",
      cityEn: "Ahmedabad",
      title: "अध्यात्म परिवार शाखा",
      address: "अध्यात्म परिवार, तृतीय तल, श्री शांति जिन जैन संघ, श्री शांति जैन संयम मार्ग, पशु अस्पताल के बाजू में, पालडी, अहमदाबाद - 380 007",
      phone: "7227070704",
      phoneDisplay: "72270 70704",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0839557987515!2d72.56588717394371!3d23.020689416401087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e856496edc8ef%3A0x20f13fa246bcb7d2!2sShanti%20Jin%20Jain%20Sangh!5e0!3m2!1sen!2sin!4v1754035971676!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="min-h-screen max-w-7xl bg-whitey px-4 sm:px-6">
      {/* Header */}
      <div className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg/>
        <div className=" mx-auto z-10">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-[#01044c] mb-2">
              अध्यात्म परिवार
            </h1>
            <p className="text- font-body text-[#01044c]">संपर्क विवरण</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
              <FaBuilding className="mr-3 text-gray-700" size={28} />
              हमारे केंद्र
            </h2> */}
            
            {locations.map((location, index) => (
              <div 
                key={index}
                className={`bg-lightpink/30 shadow-md  hover:shadow-lg relative transition-all duration-300 cursor-pointer ${
                  selectedLocation === index ? 'shadow-sm' : ''
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <HexagonalSvg accentColor="red"/>
                <div className={`h-1 ${selectedLocation === index ? 'bg-foreground' : ''}`}></div>
                <div className="p-[1.775rem]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-[#01044c]">{location.city}</h3>
                    {/* <FaChevronRight className={`text-gray-600 transition-transform duration-300 ${
                      selectedLocation === index ? 'rotate-90' : ''
                    }`} size={16} /> */}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-[#01044c] mt-1 flex-shrink-0" size={16} />
                      <p className="font-body text-[#01044c] text-sm leading-relaxed">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-[#01044c] flex-shrink-0" size={16} />
                      <a 
                        href={`tel:${location.phone}`}
                        className="font-body text-[#01044c] font-semibold hover:text-[#01044c] transition-colors"
                      >
                        {location.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-whitey border border-gray-300">
              <div className={`h-1 bg-foreground`}></div>
              <div className="p-[1.84rem]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-heading font-bold text-[#01044c]">
                    {locations[selectedLocation].city}
                  </h3>

                </div>
                
                <div className="relative h-96  overflow-auto">
                  <iframe
                    src={locations[selectedLocation].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                <div className="mt-6 p-4 bg-whitey ">
                  <h4 className="font-heading font-bold text-[#01044c] mb-2">{locations[selectedLocation].title}</h4>
                  <p className="font-body text-[#01044c] text-sm mb-2">{locations[selectedLocation].address}</p>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-[#01044c]" size={14} />
                    <a 
                      href={`tel:${locations[selectedLocation].phone}`}
                      className="font-body text-[#01044c] font-semibold hover:text-[#01044c] transition-colors"
                    >
                      {locations[selectedLocation].phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Praptisthan />
    </div>
  );
};

export default ContactPage;