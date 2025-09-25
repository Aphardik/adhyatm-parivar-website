import React, { useState } from 'react';

// Mock states data - replace with actual import from /data/states.js
const statesData = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep',
  'Puducherry'
];

export default function SpiritualForm() {
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

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.SingleLine1.trim()) {
      newErrors.SingleLine1 = 'પૂરું નામ આવશ્યક છે';
    }

    if (!formData.Radio) {
      newErrors.Radio = 'જાતિ પસંદ કરવી આવશ્યક છે';
    }

    if (!formData.Date) {
      newErrors.Date = 'જન્મ તારીખ આવશ્યક છે';
    }

    if (!formData.Address_AddressLine1.trim()) {
      newErrors.Address_AddressLine1 = 'સરનામું આવશ્યક છે';
    }

    if (!formData.Address_City.trim()) {
      newErrors.Address_City = 'શહેર/ગામ આવશ્યક છે';
    }

    if (!formData.Address_Region.trim()) {
      newErrors.Address_Region = 'રાજ્ય આવશ્યક છે';
    }

    // Pincode validation
    if (!formData.Address_ZipCode.trim()) {
      newErrors.Address_ZipCode = 'પિનકોડ આવશ્યક છે';
    } else if (!/^\d{6}$/.test(formData.Address_ZipCode.trim())) {
      newErrors.Address_ZipCode = 'પિનકોડ 6 અંકનો હોવો જોઈએ';
    }

    if (!formData.SingleLine.trim()) {
      newErrors.SingleLine = 'મૂળ વતન આવશ્યક છે';
    }

    // Mobile number validation
    if (!formData.PhoneNumber_countrycode.trim()) {
      newErrors.PhoneNumber_countrycode = 'મોબાઈલ નંબર આવશ્યક છે';
    } else if (!/^\d{10}$/.test(formData.PhoneNumber_countrycode.trim())) {
      newErrors.PhoneNumber_countrycode = 'મોબાઈલ નંબર 10 અંકનો હોવો જોઈએ';
    }

    // Relative contact number validation
    if (!formData.PhoneNumber1_countrycode.trim()) {
      newErrors.PhoneNumber1_countrycode = 'સંબંધીનો સંપર્ક નંબર આવશ્યક છે';
    } else if (!/^\d{10}$/.test(formData.PhoneNumber1_countrycode.trim())) {
      newErrors.PhoneNumber1_countrycode = 'સંપર્ક નંબર 10 અંકનો હોવો જોઈએ';
    }

    if (!formData.ImageUpload) {
      newErrors.ImageUpload = 'ફોટો આવશ્યક છે';
    }

    if (!formData.Radio1) {
      newErrors.Radio1 = 'પ્રવેશનો પ્રકાર પસંદ કરવો આવશ્યક છે';
    }

    if (!formData.Radio2) {
      newErrors.Radio2 = 'મૂળવિધિ વિકલ્પ પસંદ કરવો આવશ્યક છે';
    }

    if (!formData.Radio3) {
      newErrors.Radio3 = 'પ્રવેશ તારીખ પસંદ કરવી આવશ્યક છે';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDateForSubmission = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                   'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = document.querySelector('.border-red-500');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    // Store submitted data for display
    setSubmittedData({...formData});
    
    // Create FormData object for multipart/form-data submission
    const submitData = new FormData();
    
    // Add hidden fields first
    submitData.append('zf_referrer_name', '');
    submitData.append('zf_redirect_url', '');
    submitData.append('zc_gad', '');
    
    // Add all form fields except ImageUpload and Date
    Object.keys(formData).forEach(key => {
      if (key !== 'ImageUpload' && key !== 'Date' && formData[key] !== null && formData[key] !== '') {
        submitData.append(key, formData[key]);
      }
    });

    // Format and add date field
    if (formData.Date) {
      submitData.append('Date', formatDateForSubmission(formData.Date));
    }

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

      setShowSuccessModal(true);
      
    } catch (error) {
      console.error('Submission error:', error);
      setShowSuccessModal(true); // Show success modal anyway since no-cors doesn't allow error checking
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
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
    setSubmittedData({});
    setErrors({});
  };

  // Data Display Component
  const DataDisplaySection = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-6 sm:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Success Message */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-l-4 border-green-500 p-6 rounded-lg mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-green-800">સફળતાપૂર્વક સબમિટ થયું!</h1>
          </div>
          <p className="text-green-700 text-lg leading-relaxed">
            અમો મુંબઈ ખાતે ઉપધાનમાં વઘુને વધુ પુણ્યાત્માઓને સમાવી થાશક્તિ ભક્તિ કરવાનો ભાવ ઘરાવીએ છીએ. તે માટેનું સંમતિપત્ર આપને મળે ત્યારબાદ જ આપશ્રી ઉપધાન તપ માટે પધારશોજી. આપ ઉપધાન તપ માટે પધારો ત્યારે સંમતિપત્ર સાથે લાવવું આવશ્યક છે.
          </p>
        </div>

        {/* Submitted Data Display */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h2 className="text-2xl font-bold">સબમિટ કરેલ વિગતો</h2>
          </div>

          <div className="p-6 space-y-8">
            {/* Personal Details Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-300 pb-2">
                વ્યક્તિગત વિગત
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">પૂરું નામ</label>
                  <p className="text-gray-800 font-medium">{submittedData.SingleLine1}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">જાતિ</label>
                  <p className="text-gray-800 font-medium">{submittedData.Radio}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">જન્મ તારીખ</label>
                  <p className="text-gray-800 font-medium">{formatDateForDisplay(submittedData.Date)}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">મૂળ વતન</label>
                  <p className="text-gray-800 font-medium">{submittedData.SingleLine}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">મોબાઈલ નંબર</label>
                  <p className="text-gray-800 font-medium">{submittedData.PhoneNumber_countrycode}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">સંબંધીનો સંપર્ક નંબર</label>
                  <p className="text-gray-800 font-medium">{submittedData.PhoneNumber1_countrycode}</p>
                </div>
              </div>

              {/* Address Section */}
              <div className="mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-2">સરનામું</label>
                  <div className="text-gray-800 font-medium">
                    <p>{submittedData.Address_AddressLine1}</p>
                    {submittedData.Address_AddressLine2 && <p>{submittedData.Address_AddressLine2}</p>}
                    <p>{submittedData.Address_City}, {submittedData.Address_Region}</p>
                    <p>{submittedData.Address_ZipCode}, {submittedData.Address_Country}</p>
                  </div>
                </div>
              </div>

              {/* Photo */}
              {submittedData.ImageUpload && (
                <div className="mt-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-gray-600 mb-2">અપલોડ કરેલ ફોટો</label>
                    <p className="text-gray-800 font-medium">
                      {submittedData.ImageUpload.name} ({Math.round(submittedData.ImageUpload.size / 1024)} KB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Entry Details Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-300 pb-2">
                પ્રવેશની વિગત
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">પ્રવેશનો પ્રકાર</label>
                  <p className="text-gray-800 font-medium">{submittedData.Radio1}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">મૂળવિધિથી કરવાની ભાવના</label>
                  <p className="text-gray-800 font-medium">{submittedData.Radio2}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-semibold text-gray-600 mb-1">પ્રવેશ તારીખ</label>
                  <p className="text-gray-800 font-medium">{submittedData.Radio3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Form Button */}
        <div className="text-center">
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            નવું ફોર્મ ભરવું
          </button>
        </div>
      </div>
    </div>
  );

  // Show submitted data view if form is submitted
  if (isSubmitted) {
    return <DataDisplaySection />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-6 sm:p-6">
      <div className="max-w-4xl mx-auto  rounded-sm  overflow-hidden">
        <div className=" py-4 space-y-8">
          {/* Personal Details Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-sm">
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
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                    errors.SingleLine1 ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                  }`}
                  required
                />
                {errors.SingleLine1 && (
                  <p className="text-red-500 text-sm mt-1">{errors.SingleLine1}</p>
                )}
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
                {errors.Radio && (
                  <p className="text-red-500 text-sm mt-1">{errors.Radio}</p>
                )}
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
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                    errors.Date ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                  }`}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Select your birth date</p>
                {errors.Date && (
                  <p className="text-red-500 text-sm mt-1">{errors.Date}</p>
                )}
              </div>
            </div>

            {/* Address Section */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-3">
                સરનામું <span className="text-red-500">*</span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="Address_AddressLine1"
                    value={formData.Address_AddressLine1}
                    onChange={handleInputChange}
                    placeholder="ફ્લેટ નંબર, બિલ્ડિંગનું નામ, રોડ"
                    maxLength="255"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                      errors.Address_AddressLine1 ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                    }`}
                    required
                  />
                  {errors.Address_AddressLine1 && (
                    <p className="text-red-500 text-sm mt-1">{errors.Address_AddressLine1}</p>
                  )}
                </div>
                
                <input
                  type="text"
                  name="Address_AddressLine2"
                  value={formData.Address_AddressLine2}
                  onChange={handleInputChange}
                  placeholder="એરિયા, લેંડમાર્ક"
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <div>
                  <input
                    type="text"
                    name="Address_City"
                    value={formData.Address_City}
                    onChange={handleInputChange}
                    placeholder="શહેર/ગામ"
                    maxLength="255"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                      errors.Address_City ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                    }`}
                  />
                  {errors.Address_City && (
                    <p className="text-red-500 text-sm mt-1">{errors.Address_City}</p>
                  )}
                </div>
                
                <div>
                  <select
                    name="Address_Region"
                    value={formData.Address_Region}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                      errors.Address_Region ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                    }`}
                  >
                    <option value="">રાજ્ય પસંદ કરો</option>
                    {statesData.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.Address_Region && (
                    <p className="text-red-500 text-sm mt-1">{errors.Address_Region}</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="text"
                    name="Address_ZipCode"
                    value={formData.Address_ZipCode}
                    onChange={handleInputChange}
                    placeholder="પિનકોડ"
                    maxLength="6"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                      errors.Address_ZipCode ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                    }`}
                  />
                  {errors.Address_ZipCode && (
                    <p className="text-red-500 text-sm mt-1">{errors.Address_ZipCode}</p>
                  )}
                </div>
                
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                  errors.SingleLine ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                }`}
                required
              />
              {errors.SingleLine && (
                <p className="text-red-500 text-sm mt-1">{errors.SingleLine}</p>
              )}
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
                  maxLength="10"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                    errors.PhoneNumber_countrycode ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                  }`}
                  required
                />
                {errors.PhoneNumber_countrycode && (
                  <p className="text-red-500 text-sm mt-1">{errors.PhoneNumber_countrycode}</p>
                )}
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
                  maxLength="10"
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition duration-300 ${
                    errors.PhoneNumber1_countrycode ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                  }`}
                  required
                />
                {errors.PhoneNumber1_countrycode && (
                  <p className="text-red-500 text-sm mt-1">{errors.PhoneNumber1_countrycode}</p>
                )}
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
                  className={`w-full px-4 py-3 border-2 border-dashed rounded-lg focus:outline-none transition duration-300 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 ${
                    errors.ImageUpload ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-amber-400'
                  }`}
                  required
                />
                {formData.ImageUpload && (
                  <div className="mt-2 text-sm text-green-600">
                    Selected: {formData.ImageUpload.name} ({Math.round(formData.ImageUpload.size / 1024)} KB)
                  </div>
                )}
                {errors.ImageUpload && (
                  <p className="text-red-500 text-sm mt-1">{errors.ImageUpload}</p>
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
              {errors.Radio1 && (
                <p className="text-red-500 text-sm mt-1">{errors.Radio1}</p>
              )}
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
              {errors.Radio2 && (
                <p className="text-red-500 text-sm mt-1">{errors.Radio2}</p>
              )}
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
              {errors.Radio3 && (
                <p className="text-red-500 text-sm mt-1">{errors.Radio3}</p>
              )}
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
              <p className="text-gray-600 mb-6 ">
                સંચમાનુરાગી આરાધકશ્રી, <br />

મુંબઈ મહાનગરે યોજાનાર શ્રી ઉપધાન તપમાં જોડાંઈ જિનાજ્ઞામય આરાધના તથા પૂજ્ય અધ્યાત્મસમ્રાટ ગુરુભગવંતની અતિસાત્ત્વિક, સચોટ જિનવાણીમાં ભીંજાઈ સંયમજીવનનો રસાસ્વાદ માણવાની આપની ભાવનાની અમો અંતરથી અનુમોદના કરીએ છીએ.

              </p>
              
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
  );
}