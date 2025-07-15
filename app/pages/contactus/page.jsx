"use client"
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaChevronRight } from 'react-icons/fa';

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
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8616347668!2d72.8342!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sPal%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1627384750436!5m2!1sen!2sin"
    },
    {
      city: "मुंबई",
      cityEn: "Mumbai",
      title: "अध्यात्म परिवार शाखा",
      address: "संभव दर्शन, ग्राउन्ड फ्लोर, हेमुकलानी मेइन रोड, ईरानी वाडी, कांदीवली वेस्ट, मुंबई - 400 067",
      phone: "8448444050",
      phoneDisplay: "844 844 40 50",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8616347668!2d72.8342!3d19.2056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e59411d563%3A0xfe4558290938b042!2sKandivali%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1627384750436!5m2!1sen!2sin"
    },
    {
      city: "अमदावाद",
      cityEn: "Ahmedabad",
      title: "अध्यात्म परिवार शाखा",
      address: "वल्लभ अपार्टमेन्ट, ग्राउन्ड फ्लोर, स्कारलेट कोम्प्लेक्स के पीछे, अंकुर स्कूल के सामने, फतेपुरा, पालडी, अमदावाद - 380 007",
      phone: "7227070704",
      phoneDisplay: "72270 70704",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8616347668!2d72.5714!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e59411d563%3A0xfe4558290938b042!2sPaldi%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1627384750436!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-gray-800 mb-2">
              अध्यात्म परिवार
            </h1>
            <p className="text-lg font-body text-gray-600">संपर्क विवरण</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
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
                className={`bg-gray-100 border border-gray-200 hover:border-gray-300 transition-all duration-300 cursor-pointer ${
                  selectedLocation === index ? 'border-gray-400 shadow-sm' : ''
                }`}
                onClick={() => setSelectedLocation(index)}
              >
                <div className={`h-1 ${selectedLocation === index ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-heading font-bold text-gray-700">{location.city}</h3>
                    <FaChevronRight className={`text-gray-600 transition-transform duration-300 ${
                      selectedLocation === index ? 'rotate-90' : ''
                    }`} size={16} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <FaMapMarkerAlt className="text-gray-600 mt-1 flex-shrink-0" size={16} />
                      <p className="font-body text-gray-700 text-sm leading-relaxed">{location.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <FaPhone className="text-gray-600 flex-shrink-0" size={16} />
                      <a 
                        href={`tel:${location.phone}`}
                        className="font-body text-gray-700 font-semibold hover:text-gray-800 transition-colors"
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
            <div className="bg-white border border-gray-200">
              <div className={`h-1 bg-gray-600`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-heading font-bold text-gray-700">
                    {locations[selectedLocation].city}
                  </h3>

                </div>
                
                <div className="relative h-96 border border-gray-200 overflow-hidden">
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
                
                <div className="mt-6 p-4 bg-gray-100 border border-gray-200">
                  <h4 className="font-heading font-bold text-gray-700 mb-2">{locations[selectedLocation].title}</h4>
                  <p className="font-body text-gray-700 text-sm mb-2">{locations[selectedLocation].address}</p>
                  <div className="flex items-center space-x-2">
                    <FaPhone className="text-gray-600" size={14} />
                    <a 
                      href={`tel:${locations[selectedLocation].phone}`}
                      className="font-body text-gray-700 font-semibold hover:text-gray-700 transition-colors"
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
    </div>
  );
};

export default ContactPage;