import React, { useState } from 'react';
import { FaCamera, FaFolderOpen } from 'react-icons/fa';

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

// Language translations object
const translations = {
  gujarati: {
    personalDetails: 'વ્યક્તિગત વિગત',
    fullName: 'પૂરું નામ',
    gender: 'જાતિ',
    male: 'પુરુષ',
    female: 'સ્ત્રી',
    birthDate: 'જન્મ તારીખ',
    address: 'સરનામું',
    addressLine1: 'ફ્લેટ નંબર, બિલ્ડિંગનું નામ, રોડ',
    addressLine2: 'એરિયા, લેંડમાર્ક',
    city: 'શહેર/ગામ',
    state: 'રાજ્ય',
    pincode: 'પિનકોડ',
    nativePlace: 'મૂળ વતન',
    mobile: 'મોબાઈલ નંબર',
    relativeContact: 'સંબંધીનો સંપર્ક નંબર',
    photo: 'ફોટો',
    entryDetails: 'પ્રવેશની વિગત',
    entrySelection: 'જેમાં પ્રવેશ કરવો હોય એ સિલેક્ટ કરવું',
    originalMethod: 'મૂળવિધિથી કરવાની ભાવના છે?',
    yes: 'હા',
    no: 'ના',
    entryDate: 'પ્રવેશ',
    submit: 'સબમિટ',
    submitting: 'સબમિટ કરવામાં આવે છે...',
    successTitle: 'સફળતાપૂર્વક સબમિટ થયું!',
    successMessage: 'અમો મુંબઈ ખાતે ઉપધાનમાં વઘુને વધુ પુણ્યાત્માઓને સમાવી યથાશક્તિ ભક્તિ કરવાનો ભાવ ઘરાવીએ છીએ. તે માટેનું સંમતિપત્ર આપને મળે ત્યારબાદ જ આપશ્રી ઉપધાન તપ માટે પધારશોજી. આપ ઉપધાન તપ માટે પધારો ત્યારે સંમતિપત્ર સાથે લાવવું આવશ્યક છે.',
    submittedDetails: 'સબમિટ કરેલ વિગતો',
    newForm: 'નવું ભાવનાપત્ર ભરવું',
    uploadedPhoto: 'અપલોડ કરેલ ફોટો',
    // Validation messages
    nameRequired: 'પૂરું નામ આવશ્યક છે',
    genderRequired: 'જાતિ પસંદ કરવી આવશ્યક છે',
    dateRequired: 'જન્મ તારીખ આવશ્યક છે',
    addressRequired: 'સરનામું આવશ્યક છે',
    cityRequired: 'શહેર/ગામ આવશ્યક છે',
    stateRequired: 'રાજ્ય આવશ્યક છે',
    pincodeRequired: 'પિનકોડ આવશ્યક છે',
    pincodeInvalid: 'પિનકોડ 6 અંકનો હોવો જોઈએ',
    nativePlaceRequired: 'મૂળ વતન આવશ્યક છે',
    mobileRequired: 'મોબાઈલ નંબર આવશ્યક છે',
    mobileInvalid: 'મોબાઈલ નંબર 10 અંકનો હોવો જોઈએ',
    relativeContactRequired: 'સંબંધીનો સંપર્ક નંબર આવશ્યક છે',
    relativeContactInvalid: 'સંપર્ક નંબર 10 અંકનો હોવો જોઈએ',
    photoRequired: 'ફોટો આવશ્યક છે',
    entryTypeRequired: 'પ્રવેશનો પ્રકાર પસંદ કરવો આવશ્યક છે',
    methodRequired: 'મૂળવિધિ વિકલ્પ પસંદ કરવો આવશ્યક છે',
    entryDateRequired: 'પ્રવેશ તારીખ પસંદ કરવી આવશ્યક છે',
    // Entry options
    entryOptions: [
      "મોક્ષમાળ (પ્રથમ ઉપધાન)",
      "પાંત્રીસું",
      "અટ્ઠાવીસું",
      "બીજું અઢારિયું, છકિયું, ચોકિયું (માળ)",
      "છકિયું, ચોકિયું (માળ)",
      "પહેલું અઢારિયું",
      "બીજું અઢારિયું"
    ],
    entryDateOptions: [
      "પ્રથમ પ્રવેશ (વિ.સં.૨૦૮૨, માગસર વદ ૬, બુધવાર, તા. 10-12-2025)",
      "દ્વિતીય પ્રવેશ (વિ.સં.૨૦૮૨, માગસર વદ ૮, શુક્રવાર, તા. 12-12-2025)",
      "અન્ય"
    ],
    modalMessage: 'સંયમાનુરાગી આરાધકશ્રી, <br /><br />મુંબઈ મહાનગરે યોજાનાર શ્રી ઉપધાન તપમાં જોડાઈ જિનાજ્ઞામય આરાધના તથા પૂજ્ય અધ્યાત્મસમ્રાટ ગુરુભગવંતની અતિસાત્ત્વિક, સચોટ જિનવાણીમાં ભીંજાઈ સંયમજીવનનો રસાસ્વાદ માણવાની આપની ભાવનાની અમો અંતરથી અનુમોદના કરીએ છીએ.'
  },
  hindi: {
    personalDetails: 'व्यक्तिगत विवरण',
    fullName: 'पूरा नाम',
    gender: 'जाति',
    male: 'पुरुष',
    female: 'स्त्री',
    birthDate: 'जन्म तारीख',
    address: 'पता',
    addressLine1: 'फ्लैट नंबर, बिल्डिंग का नाम, रोड',
    addressLine2: 'एरिया, लैंडमार्क',
    city: 'शहर/गाँव',
    state: 'राज्य',
    pincode: 'पिनकोड',
    nativePlace: 'मूल वतन',
    mobile: 'मोबाइल नंबर',
    relativeContact: 'संबंधी का संपर्क नंबर',
    photo: 'फोटो',
    entryDetails: 'प्रवेश का विवरण',
    entrySelection: 'जिसमें प्रवेश करना हो उसे सिलेक्ट करे',
    originalMethod: 'मूलविधि से करने की भावना है?',
    yes: 'हाँ',
    no: 'नहीं',
    entryDate: 'प्रवेश',
    submit: 'जमा करें',
    submitting: 'जमा किया जा रहा है...',
    successTitle: 'सफलतापूर्वक जमा हुआ!',
    successMessage: 'हम मुंबई में उपधान में अधिक से अधिक पुण्यात्माओं को शामिल करने की शक्ति भक्ति का भाव रखते हैं। उसके लिए सहमति पत्र मिलने के बाद ही आप उपधान तप के लिए पधारें। उपधान तप के लिए आने पर सहमति पत्र साथ लाना आवश्यक है।',
    submittedDetails: 'जमा किए गए विवरण',
    newForm: 'नया भावनापत्र भरें',
    uploadedPhoto: 'अपलोड की गई फोटो',
    // Validation messages
    nameRequired: 'पूरा नाम आवश्यक है',
    genderRequired: 'जाति चुनना आवश्यक है',
    dateRequired: 'जन्म तारीख आवश्यक है',
    addressRequired: 'पता आवश्यक है',
    cityRequired: 'शहर/गाँव आवश्यक है',
    stateRequired: 'राज्य आवश्यक है',
    pincodeRequired: 'पिनकोड आवश्यक है',
    pincodeInvalid: 'पिनकोड 6 अंकों का होना चाहिए',
    nativePlaceRequired: 'मूल वतन आवश्यक है',
    mobileRequired: 'मोबाइल नंबर आवश्यक है',
    mobileInvalid: 'मोबाइल नंबर 10 अंकों का होना चाहिए',
    relativeContactRequired: 'संबंधी का संपर्क नंबर आवश्यक है',
    relativeContactInvalid: 'संपर्क नंबर 10 अंकों का होना चाहिए',
    photoRequired: 'फोटो आवश्यक है',
    entryTypeRequired: 'प्रवेश का प्रकार चुनना आवश्यक है',
    methodRequired: 'मूल विधि विकल्प चुनना आवश्यक है',
    entryDateRequired: 'प्रवेश तारीख चुनना आवश्यक है',
    // Entry options
    entryOptions: [
      "मोक्षमाला (प्रथम उपधान)",
      "पांत्रीसा",
      "अट्ठावीसा",
      "दूसरा अढारिया, छकिया, चोकिया (माला)",
      "छकिया, चोकिया (माला)",
      "पहला अढारिया",
      "दूसरा अढारिया"
    ],
    entryDateOptions: [
      "प्रथम प्रवेश (वि.सं.२०८२, मार्गशीर्ष वद ६, बुधवार, ता. 10-12-2025)",
      "द्वितीय प्रवेश (वि.सं.२०८२, मार्गशीर्ष वद ८, शुक्रवार, ता. 12-12-2025)",
      "अन्य"
    ],
    modalMessage: 'संचमानुरागी आराधकश्री, <br /><br />मुंबई महानगर में आयोजित होने वाले श्री उपधान तप में शामिल होकर जिनाज्ञामय आराधना तथा पूज्य अध्यात्मसम्राट गुरुभगवंत की अतिसात्त्विक, सटीक जिनवाणी में भींगकर संयमजीवन का रसास्वाद लेने की आपकी भावना की हम अंतर से अनुमोदना करते हैं।'
  }
};

export default function SpiritualForm({language = 'gujarati'}) {
  const t = translations[language] || translations.gujarati;
  
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

    // Required field validation with language-specific error messages
    if (!formData.SingleLine1.trim()) {
      newErrors.SingleLine1 = t.nameRequired;
    }

    if (!formData.Radio) {
      newErrors.Radio = t.genderRequired;
    }

    if (!formData.Date) {
      newErrors.Date = t.dateRequired;
    }

    if (!formData.Address_AddressLine1.trim()) {
      newErrors.Address_AddressLine1 = t.addressRequired;
    }

    if (!formData.Address_City.trim()) {
      newErrors.Address_City = t.cityRequired;
    }

    if (!formData.Address_Region.trim()) {
      newErrors.Address_Region = t.stateRequired;
    }

    // Pincode validation
    if (!formData.Address_ZipCode.trim()) {
      newErrors.Address_ZipCode = t.pincodeRequired;
    } else if (!/^\d{6}$/.test(formData.Address_ZipCode.trim())) {
      newErrors.Address_ZipCode = t.pincodeInvalid;
    }

    if (!formData.SingleLine.trim()) {
      newErrors.SingleLine = t.nativePlaceRequired;
    }

    // Mobile number validation
    if (!formData.PhoneNumber_countrycode.trim()) {
      newErrors.PhoneNumber_countrycode = t.mobileRequired;
    } else if (!/^\d{10}$/.test(formData.PhoneNumber_countrycode.trim())) {
      newErrors.PhoneNumber_countrycode = t.mobileInvalid;
    }

    // Relative contact number validation
    if (!formData.PhoneNumber1_countrycode.trim()) {
      newErrors.PhoneNumber1_countrycode = t.relativeContactRequired;
    } else if (!/^\d{10}$/.test(formData.PhoneNumber1_countrycode.trim())) {
      newErrors.PhoneNumber1_countrycode = t.relativeContactInvalid;
    }

    if (!formData.ImageUpload) {
      newErrors.ImageUpload = t.photoRequired;
    }

    if (!formData.Radio1) {
      newErrors.Radio1 = t.entryTypeRequired;
    }

    if (!formData.Radio2) {
      newErrors.Radio2 = t.methodRequired;
    }

    if (!formData.Radio3) {
      newErrors.Radio3 = t.entryDateRequired;
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

    //     const successSection = document.getElementById('success-section');
    //  successSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    
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

      console.log(response,"response")

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
    <div id="success-section" className="bg-gradient-to-br from-green-50 to-blue-50 flex flex-col p-4 overflow-hidden">
      <div className="flex-1 max-w-6xl mx-auto w-full flex flex-col">
        {/* Success Message - Compact */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-sm mb-4 flex-shrink-0">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-green-800">{t.successTitle}</h1>
          </div>
          <p className="text-green-700 text-sm leading-relaxed">
            {t.successMessage}
          </p>
        </div>

        {/* Submitted Data Display - Scrollable */}
        <div className="bg-white rounded-sm overflow-hidden flex-1 flex flex-col min-h-0">
          <div className="bg-gray-200 text-gray-800 p-3 flex-shrink-0">
            <h2 className="text-lg font-bold">{t.submittedDetails}</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {/* Personal Details and Entry Details in Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
              
              {/* Personal Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-orange-300 pb-1">
                  {t.personalDetails}
                </h3>
                
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.fullName}</label>
                    <p className="text-gray-800 font-medium text-sm">{submittedData.SingleLine1}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">{t.gender}</label>
                      <p className="text-gray-800 font-medium text-sm">{submittedData.Radio}</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">{t.birthDate}</label>
                      <p className="text-gray-800 font-medium text-sm">{formatDateForDisplay(submittedData.Date)}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.address}</label>
                    <div className="text-gray-800 font-medium text-sm">
                      <p>{submittedData.Address_AddressLine1}</p>
                      {submittedData.Address_AddressLine2 && <p>{submittedData.Address_AddressLine2}</p>}
                      <p>{submittedData.Address_City}, {submittedData.Address_Region} - {submittedData.Address_ZipCode}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.nativePlace}</label>
                    <p className="text-gray-800 font-medium text-sm">{submittedData.SingleLine}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">{t.mobile}</label>
                      <p className="text-gray-800 font-medium text-sm">{submittedData.PhoneNumber_countrycode}</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">{t.relativeContact}</label>
                      <p className="text-gray-800 font-medium text-sm">{submittedData.PhoneNumber1_countrycode}</p>
                    </div>
                  </div>

                  {/* Photo */}
                  {submittedData.ImageUpload && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">{t.uploadedPhoto}</label>
                      <p className="text-gray-800 font-medium text-sm">
                        {submittedData.ImageUpload.name} ({Math.round(submittedData.ImageUpload.size / 1024)} KB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Entry Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-300 pb-1">
                  {t.entryDetails}
                </h3>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.entrySelection}</label>
                    <p className="text-gray-800 font-medium text-sm">{submittedData.Radio1}</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.originalMethod}</label>
                    <p className="text-gray-800 font-medium text-sm">{submittedData.Radio2}</p>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <label className="block text-xs font-semibold text-gray-600 mb-1">{t.entryDate}</label>
                    <p className="text-gray-800 font-medium text-sm">{submittedData.Radio3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Form Button - Fixed at bottom */}
        <div className="text-center pt-4 flex-shrink-0">
          <button
            onClick={resetForm}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            {t.newForm}
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-6 ">
      <div className="max-w-4xl mx-auto rounded-sm overflow-hidden">
        <div className="py-4 space-y-8">
          {/* Personal Details Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-orange-300 pb-2">
              {t.personalDetails}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">
                  {t.fullName} <span className="text-red-500">*</span>
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
                  {t.gender} <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="Radio"
                      value={language === 'gujarati' ? 'પુરુષ' : 'पुरुष'}
                      checked={formData.Radio === (language === 'gujarati' ? 'પુરુષ' : 'पुरुष')}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-400 focus:ring-amber-400"
                    />
                    <span className="ml-2 text-gray-700">{t.male}</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="Radio"
                      value={language === 'gujarati' ? 'સ્ત્રી' : 'स्त्री'}
                      checked={formData.Radio === (language === 'gujarati' ? 'સ્ત્રી' : 'स्त्री')}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-amber-400 focus:ring-amber-400"
                    />
                    <span className="ml-2 text-gray-700">{t.female}</span>
                  </label>
                </div>
                {errors.Radio && (
                  <p className="text-red-500 text-sm mt-1">{errors.Radio}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t.birthDate} <span className="text-red-500">*</span>
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
                {t.address} <span className="text-red-500">*</span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="Address_AddressLine1"
                    value={formData.Address_AddressLine1}
                    onChange={handleInputChange}
                    placeholder={t.addressLine1}
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
                  placeholder={t.addressLine2}
                  maxLength="255"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-400 transition duration-300"
                />
                
                <div>
                  <input
                    type="text"
                    name="Address_City"
                    value={formData.Address_City}
                    onChange={handleInputChange}
                    placeholder={t.city}
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
                    <option value="">{t.state}</option>
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
                    placeholder={t.pincode}
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
                {t.nativePlace} <span className="text-red-500">*</span>
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
                  {t.mobile} <span className="text-red-500">*</span>
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
                  {t.relativeContact} <span className="text-red-500">*</span>
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
    {t.photo} <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <div className="grid grid-cols-2 gap-3 mb-3">
      <button
        type="button"
        onClick={() => document.getElementById('gallery-input').click()}
        className={`flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed rounded-lg focus:outline-none transition duration-300 ${
          errors.ImageUpload ? 'border-red-500 hover:border-red-400' : 'border-gray-300 hover:border-amber-400'
        }`}
      >
        <FaFolderOpen size={20} />
        Gallery
      </button>
      <button
        type="button"
        onClick={() => document.getElementById('camera-input').click()}
        className={`flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed rounded-lg focus:outline-none transition duration-300 ${
          errors.ImageUpload ? 'border-red-500 hover:border-red-400' : 'border-gray-300 hover:border-amber-400'
        }`}
      >
        <FaCamera size={20} />
        Camera
      </button>
    </div>
    
    {/* Hidden inputs */}
    <input
      id="gallery-input"
      type="file"
      name="ImageUpload"
      accept="image/*"
      onChange={handleInputChange}
      className="hidden"
    />
    <input
      id="camera-input"
      type="file"
      name="ImageUpload"
      accept="image/*"
      capture="environment"
      onChange={handleInputChange}
      className="hidden"
    />
    
    {formData.ImageUpload && (
      <div className="mt-2 text-sm text-green-600 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Selected: {formData.ImageUpload.name} ({Math.round(formData.ImageUpload.size / 1024)} KB)
      </div>
    )}
    {errors.ImageUpload && (
      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        {errors.ImageUpload}
      </p>
    )}
  </div>
</div>
          </div>

          {/* Entry Details Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-300 pb-2">
              {t.entryDetails}
            </h2>

            {/* Entry Type Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                {t.entrySelection} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.entryOptions.map((option, index) => (
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
                {t.originalMethod} <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                  <input
                    type="radio"
                    name="Radio2"
                    value={t.yes}
                    checked={formData.Radio2 === t.yes}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{t.yes}</span>
                </label>
                <label className="flex items-center cursor-pointer bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition duration-300">
                  <input
                    type="radio"
                    name="Radio2"
                    value={t.no}
                    checked={formData.Radio2 === t.no}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">{t.no}</span>
                </label>
              </div>
              {errors.Radio2 && (
                <p className="text-red-500 text-sm mt-1">{errors.Radio2}</p>
              )}
            </div>

            {/* Entry Date Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                {t.entryDate} <span className="text-red-500">*</span>
              </label>
              <div className="space-y-3">
                {t.entryDateOptions.map((option, index) => (
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
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform">
            <div className="p-8 text-center">
              {/* Success Icon */}
              <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              {/* Success Message */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t.successTitle}
              </h2>
              <div 
                className="text-gray-600 mb-6" 
                dangerouslySetInnerHTML={{ __html: t.modalMessage }}
              />
              
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