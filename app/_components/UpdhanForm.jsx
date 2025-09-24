import React, { useState } from 'react';

export const SpiritualForm = () => {
  const [formData, setFormData] = useState({
    SingleLine1: '',
    Radio: '',
    Address_AddressLine1: '',
    Address_AddressLine2: '',
    Address_City: '',
    Address_Region: '',
    Address_ZipCode: '',
    Address_Country: 'India',
    SingleLine: '',
    Date: '',
    PhoneNumber_countrycode: '',
    PhoneNumber1_countrycode: '',
    ImageUpload: null,
    Radio1: '',
    Radio2: '',
    Radio3: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create FormData object for multipart/form-data submission
    const submitData = new FormData();
    
    // Add hidden fields first
    submitData.append('zf_referrer_name', '');
    submitData.append('zf_redirect_url', '');
    submitData.append('zc_gad', '');
    
    // Add all form fields except ImageUpload
    Object.keys(formData).forEach(key => {
      if (key !== 'ImageUpload' && formData[key] !== null && formData[key] !== '') {
        submitData.append(key, formData[key]);
      }
    });

    // Handle image upload separately
    if (formData.ImageUpload) {
      submitData.append('ImageUpload', formData.ImageUpload);
    }

    try {
      const response = await fetch('https://forms.zohopublic.in/adhyatmparivar/form/Untitled21/formperma/__EJy-o1mBOowsUa3dtWneDLpkwHlZVBw4mx3DAseCo/htmlRecords/submit', {
        method: 'POST',
        mode: 'no-cors',
        body: submitData
      });

      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        SingleLine1: '',
        Radio: '',
        Address_AddressLine1: '',
        Address_AddressLine2: '',
        Address_City: '',
        Address_Region: '',
        Address_ZipCode: '',
        Address_Country: 'India',
        SingleLine: '',
        Date: '',
        PhoneNumber_countrycode: '',
        PhoneNumber1_countrycode: '',
        ImageUpload: null,
        Radio1: '',
        Radio2: '',
        Radio3: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setShowSuccessModal(true); // Show success modal anyway since no-cors doesn't allow error checking
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-6 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient2 p-8 text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            સુખનું ફરમાન - આધ્યાત્મિક ઉપધાન
          </h1>
          {/* <p className="text-center text-orange-100">(ભાવનાપત્ર)</p> */}
        </div>

        <div className="sm:p-8 py-4 space-y-8">
          {/* Personal Details Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-300 pb-2">
              વ્યક્તિગત વિગત
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  પૂરું નામ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="SingleLine1"
                  value={formData.SingleLine1}
                  onChange={handleInputChange}
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                  required
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  જાતિ <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="Radio"
                      value="પુરુષ"
                      checked={formData.Radio === 'પુરુષ'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-400 focus:ring-amber-400"
                    />
                    <span className="ml-2 text-gray-700">પુરુષ</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="Radio"
                      value="સ્ત્રી"
                      checked={formData.Radio === 'સ્ત્રી'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-400 focus:ring-amber-400"
                    />
                    <span className="ml-2 text-gray-700">સ્ત્રી</span>
                  </label>
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  જન્મ તારીખ <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="Date"
                  value={formData.Date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Select your birth date</p>
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-3">
                સરનામું <span className="text-red-500">*</span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="Address_AddressLine1"
                  value={formData.Address_AddressLine1}
                  onChange={handleInputChange}
                  placeholder="ફ્લેટ નંબર, બિલ્ડિંગનું નામ, રોડ"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                  required
                />
                
                <input
                  type="text"
                  name="Address_AddressLine2"
                  value={formData.Address_AddressLine2}
                  onChange={handleInputChange}
                  placeholder="એરિયા, લેંડમાર્ક"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <input
                  type="text"
                  name="Address_City"
                  value={formData.Address_City}
                  onChange={handleInputChange}
                  placeholder="શહેર/ગામ"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <input
                  type="text"
                  name="Address_Region"
                  value={formData.Address_Region}
                  onChange={handleInputChange}
                  placeholder="રાજ્ય"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <input
                  type="text"
                  name="Address_ZipCode"
                  value={formData.Address_ZipCode}
                  onChange={handleInputChange}
                  placeholder="પિનકોડ"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <select
                  name="Address_Country"
                  value={formData.Address_Country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                >
                  <option value="-Select-">-Select-</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>

            {/* Native Place */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                મૂળ વતન <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="SingleLine"
                value={formData.SingleLine}
                onChange={handleInputChange}
                maxLength="255"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                required
              />
            </div>

            {/* Contact Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  મોબાઈલ નંબર <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  value={formData.PhoneNumber_countrycode}
                  onChange={handleInputChange}
                  maxLength="20"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  સંબંધીનો સંપર્ક નંબર <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="PhoneNumber1_countrycode"
                  value={formData.PhoneNumber1_countrycode}
                  onChange={handleInputChange}
                  maxLength="20"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                  required
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                ફોટો <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  name="ImageUpload"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  required
                />
                {formData.ImageUpload && (
                  <div className="mt-2 text-sm text-green-600">
                    Selected: {formData.ImageUpload.name} ({Math.round(formData.ImageUpload.size / 1024)} KB)
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Entry Details Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-300 pb-2">
              પ્રવેશની વિગત
            </h2>

            {/* Entry Type Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                જેમાં પ્રવેશ કરવો હોય એ સિલેક્ટ કરવું <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "મોક્ષમાળ (પ્રથમ ઉપધાન)",
                  "પાંત્રીસું",
                  "અટ્ઠાવીસું",
                  "બીજું અઢારિયું, છકિયું, ચોકિયું (માળ)",
                  "છકિયું, ચોકિયું (માળ)",
                  "પહેલું અઢારિયું",
                  "બીજું અઢારિયું"
                ].map((option, index) => (
                  <label key={index} className="flex items-center cursor-pointer bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                    <input
                      type="radio"
                      name="Radio1"
                      value={option}
                      checked={formData.Radio1 === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Original Method */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                મૂળવિધિથી કરવાની ભાવના છે? <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                  <input
                    type="radio"
                    name="Radio2"
                    value="હા"
                    checked={formData.Radio2 === 'હા'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">હા</span>
                </label>
                <label className="flex items-center cursor-pointer bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                  <input
                    type="radio"
                    name="Radio2"
                    value="ના"
                    checked={formData.Radio2 === 'ના'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">ના</span>
                </label>
              </div>
            </div>

            {/* Entry Date Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                પ્રવેશ <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {[
                  "પ્રથમ પ્રવેશ (વિ.સં.૨૦૮૨, માગસર વદ ૬, બુધવાર, તા. 10-12-2025)",
                  "દ્વિતીય પ્રવેશ (વિ.સં.૨૦૮૨, માગસર વદ ૮, શુક્રવાર, તા. 12-12-2025)",
                  "અન્ય"
                ].map((option, index) => (
                  <label key={index} className="flex items-center cursor-pointer bg-white p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                    <input
                      type="radio"
                      name="Radio3"
                      value={option}
                      checked={formData.Radio3 === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-500 flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-12 py-4 rounded-full text-lg font-bold transform transition duration-300 shadow-lg ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-amber-400 to-red-500 text-white hover:from-orange-600 hover:to-red-600 hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>

          {/* Form Data Preview (for testing) */}
          {/* <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <h3 className="font-semibold mb-2">Form Data Preview:</h3>
            <div className="text-sm bg-white p-3 rounded border overflow-x-auto">
              <div><strong>Name:</strong> {formData.SingleLine1}</div>
              <div><strong>Gender:</strong> {formData.Radio}</div>
              <div><strong>Birth Date:</strong> {formData.Date}</div>
              <div><strong>Address:</strong> {formData.Address_AddressLine1}, {formData.Address_City}</div>
              <div><strong>Mobile:</strong> {formData.PhoneNumber_countrycode}</div>
              <div><strong>Photo:</strong> {formData.ImageUpload ? `${formData.ImageUpload.name} (${Math.round(formData.ImageUpload.size / 1024)} KB)` : 'Not selected'}</div>
              <div><strong>Entry Type:</strong> {formData.Radio1}</div>
              <div><strong>Original Method:</strong> {formData.Radio2}</div>
              <div><strong>Entry Date:</strong> {formData.Radio3}</div>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Form Action URL:</strong><br/>
              https://forms.zohopublic.in/adhyatmparivar/form/Untitled21/formperma/__EJy-o1mBOowsUa3dtWneDLpkwHlZVBw4mx3DAseCo/htmlRecords/submit
            </p>
          </div> */}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform ">
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                સફળતાપૂર્વક સબમિટ થયું!
              </h2>
              <p className="text-gray-600 mb-6">
                તમારું ભાવનાપત્ર સફળતાપૂર્વક સબમિટ થઈ ગયું છે.
              </p>
              {/* <p className="text-sm text-gray-500 mb-6">
                Form submitted successfully! We will contact you soon.
              </p> */}
              
              {/* OK Button */}
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition duration-300 shadow-lg"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}