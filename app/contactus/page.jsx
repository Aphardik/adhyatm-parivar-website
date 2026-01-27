"use client"
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaBuilding, FaChevronRight } from 'react-icons/fa';
import Praptisthan from '@/app/_components/Praptisthan';
import HeaderSvg from '@/app/_components/HeaderSvg';
import HexagonalSvg from '@/app/_components/HexagonalSvg';
import { useLanguage } from '../_components/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = t('contact.locations') || [];

  return (
    <div className="min-h-screen max-w-7xl bg-whitey px-4 sm:px-6">
      {/* Header */}
      <div className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className=" mx-auto z-10">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-[#01044c] mb-2">
              {t('contact.title')}
            </h1>
            <p className="text- font-body text-[#01044c]">{t('contact.subtitle')}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center">
              <FaBuilding className="mr-3 text-gray-700" size={28} />
              {t('contact.locationsTitle')}
            </h2> */}

            {locations.map((location, index) => (
              <div
                key={index}
                className={`bg-lightpink/30 shadow-md  hover:shadow-lg relative transition-all duration-300 cursor-pointer ${selectedLocation === index ? 'shadow-sm' : ''
                  }`}
                onClick={() => setSelectedLocation(index)}
              >
                <HexagonalSvg accentColor="red" />
                <div className={`h-1 ${selectedLocation === index ? 'bg-foreground' : ''}`}></div>
                <div className="p-[1.775rem]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-heading font-bold text-[#01044c]">{location.city}</h3>
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
          {locations.length > 0 && (
            <div className="lg:col-span-2">
              <div className="bg-whitey border border-gray-300">
                <div className={`h-1 bg-foreground`}></div>
                <div className="p-[1.84rem]">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-heading font-bold text-[#01044c]">
                      {locations[selectedLocation].city}
                    </h3>
                  </div>

                  <div className="relative h-96  overflow-hidden">
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
          )}
        </div>

      </div>
      <Praptisthan />
    </div>
  );
};

export default ContactPage;

