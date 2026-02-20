"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Row, Col, message, Spin, Select, Radio, InputNumber } from "antd";
import axios from "axios";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { states } from "../data/states";
import TextArea from "antd/es/input/TextArea";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubmissionPopup from "@/app/_components/SubmissionPopup";
import FormSkeleton from "@/app/_components/FormSkeleton";
import HexagonalSvg from "./HexagonalSvg";
import HeaderSvg from "./HeaderSvg";
import { detectLanguage } from "../utils/detectLanguage.utils";
import useUserFetch from "../_hooks/useUserFetch";
import UserFetchModal from "./UserFetchModal";
import { maskData } from "../_utils/userFetchUtils";

// Helper: detect if city value is Surat (any script, with/without spaces)
const isSuratCity = (val) => {
  if (!val) return false;
  const cleaned = val.replace(/\s+/g, "").toLowerCase();
  return [
    "surat",
    "\u0AB8\u0AC1\u0AB0\u0AA4",  // સુરત (Gujarati)
    "\u0938\u0942\u0930\u0924"   // सूरत (Hindi)
  ].includes(cleaned);
};

// Translation object for multi-language support
const translations = {
  english: {
    mobile: { label: "Mobile Number", placeholder: "Mobile Number" },
    name: { label: "Name", placeholder: "Name" },
    sname: { label: "Surname", placeholder: "Surname" },
    pincode: { label: "Pincode", placeholder: "Pincode" },
    state: { label: "State", placeholder: "State" },
    city: { label: "City", placeholder: "City" },
    address: { label: "Address", placeholder: "Address" },
    gender: { label: "Gender", placeholder: "Select Gender" },
    age: { label: "Age", placeholder: "Age" },
    copies: { label: "How many copies of this book do you need?", placeholder: "Number of copies" },
    mahabharat: {
      question: "Do you need the complete set of 5 parts of Mahabharat book or just the first part?",
      set: "Parts 1 to 5 Set",
      part1: "Only Part - 1",
    },
    sanskrutam: {
      question: "How many copies of the book do you need?",
      pratham: "Pratham Yatra",
      dwitiy: "Dwitiya Yatra",
      dhatunaamrup: "Dhatunaamrup Shreni",
    },
    buttons: { reset: "Reset", submit: "Submit", submitting: "Submitting..." },
    validation: {
      mobileRequired: "Mobile no. is required",
      mobileInvalid: "Mobile no. must be exactly 10 digits",
      nameRequired: "Name is required",
      surnameRequired: "Please enter your surname",
      pincodeRequired: "Pincode is required",
      pincodeInvalid: "Pincode must be exactly 6 digits",
      stateRequired: "State is required",
      cityRequired: "Please enter your city",
      addressRequired: "Address is required",
      genderRequired: "Gender is required",
      ageRequired: "Age is required",
      ageInvalid: "Age must be a number",
      copiesRequired: "Number of copies is required",
      copiesInvalid: "Please enter a valid number (minimum 1)",
      selectionRequired: "Please select an option!",
    },
    outOfStock: {
      title: "Out of Stock",
      message: "This book is currently out of stock.",
    },
    surat: {
      title: "\uD83D\uDCCD Surat City — Book Collection Address",
      message: "You are in Surat city, so you need to collect the book from the following address:",
      address: "Adhyatm Bhavan\nThird Floor, Anand Shravak Aradhana Bhavan\nNear Sanjeevkumar Auditorium, Pal, Surat - 395 009\nM. 7676769600",
    },
  },
  hindi: {
    mobile: { label: "मोबाइल नंबर", placeholder: "मोबाइल नंबर" },
    name: { label: "नाम", placeholder: "नाम" },
    sname: { label: "उपनाम", placeholder: "उपनाम" },
    pincode: { label: "पिनकोड", placeholder: "पिनकोड" },
    state: { label: "राज्य", placeholder: "राज्य" },
    city: { label: "शहर", placeholder: "शहर" },
    address: { label: "एड्रेस", placeholder: "एड्रेस" },
    gender: { label: "लिंग", placeholder: "लिंग चुनें" },
    age: { label: "आयु", placeholder: "आयु" },
    copies: { label: "आपको इस पुस्तक की कितनी प्रतियों की आवश्यकता है?", placeholder: "प्रतियों की संख्या" },
    mahabharat: {
      question: "क्या आपको महाभारत पुस्तक के 5 भागों का पूरा सेट चाहिए या केवल पहला भाग?",
      set: "भाग 1 से 5 का सेट",
      part1: "केवल भाग - 1",
    },
    sanskrutam: {
      question: "आपको पुस्तक की कितनी प्रतियों की आवश्यकता है?",
      pratham: "प्रथम यात्रा",
      dwitiy: "द्वितीय यात्रा",
      dhatunaamrup: "धातुनामरूपश्रेणिः",
    },
    buttons: { reset: "Reset", submit: "Submit", submitting: "Submitting..." },
    validation: {
      mobileRequired: "मोबाइल नंबर आवश्यक है",
      mobileInvalid: "मोबाइल नंबर ठीक 10 अंकों का होना चाहिए",
      nameRequired: "नाम आवश्यक है",
      surnameRequired: "कृपया अपना उपनाम दर्ज करें",
      pincodeRequired: "पिनकोड आवश्यक है",
      pincodeInvalid: "पिनकोड ठीक 6 अंकों का होना चाहिए",
      stateRequired: "राज्य आवश्यक है",
      cityRequired: "कृपया अपना शहर दर्ज करें",
      addressRequired: "पता आवश्यक है",
      genderRequired: "लिंग आवश्यक है",
      ageRequired: "आयु आवश्यक है",
      ageInvalid: "आयु एक संख्या होनी चाहिए",
      copiesRequired: "प्रतियों की संख्या आवश्यक है",
      copiesInvalid: "कृपया एक मान्य संख्या दर्ज करें (न्यूनतम 1)",
      selectionRequired: "कृपया एक विकल्प चुनें!",
    },
    outOfStock: {
      title: "स्टॉक खत्म",
      message: "यह पुस्तक वर्तमान में स्टॉक में नहीं है।",
    },
    surat: {
      title: "सूरत शहर — पुस्तक संग्रह स्थान",
      message: "आप सूरत शहर में हैं, इसलिए आपको निम्नलिखित पते से पुस्तक लेनी होगी:",
      address: "अध्यात्म भवन\nतीसरा माला, आनंद श्रावक आराधना भवन\nसंजीवकुमार ऑडिटोरियम के पास, पाल, सूरत - 395 009\nM. 7676769600",
    },
  },
  gujarati: {
    mobile: { label: "મોબાઇલ નંબર", placeholder: "મોબાઇલ નંબર" },
    name: { label: "નામ", placeholder: "નામ" },
    sname: { label: "અટક", placeholder: "અટક" },
    pincode: { label: "પિનકોડ", placeholder: "પિનકોડ" },
    state: { label: "રાજ્ય", placeholder: "રાજ્ય" },
    city: { label: "શહેર", placeholder: "શહેર" },
    address: { label: "એડ્રેસ", placeholder: "એડ્રેસ" },
    gender: { label: "લિંગ", placeholder: "લિંગ પસંદ કરો" },
    age: { label: "ઉંમર", placeholder: "ઉંમર" },
    copies: { label: "આપને આ પુસ્તકની કેટલી નકલની આવશ્યકતા છે?", placeholder: "નકલની સંખ્યા" },
    mahabharat: {
      question: "આપને મહાભારત પુસ્તક ના ૫ ભાગનો આખો સેટ જરૂર છે કે પછી ફક્ત પહેલો ભાગ?",
      set: "ભાગ ૧ થી ૫ નો સેટ",
      part1: "ફક્ત ભાગ - ૧",
    },
    sanskrutam: {
      question: "આપને પુસ્તકની કેટલી નકલની આવશ્યકતા છે ?",
      pratham: "પ્રથમા યાત્રા",
      dwitiy: "દ્વિતીયા યાત્રા",
      dhatunaamrup: "ધાતુનામરૂપશ્રેણિઃ",
    },
    buttons: { reset: "Reset", submit: "Submit", submitting: "Submitting..." },
    validation: {
      mobileRequired: "મોબાઇલ નંબર જરૂરી છે",
      mobileInvalid: "મોબાઇલ નંબર બરાબર 10 અંકોનો હોવો જોઈએ",
      nameRequired: "નામ જરૂરી છે",
      surnameRequired: "કૃપા કરીને તમારી અટક દાખલ કરો",
      pincodeRequired: "પિનકોડ જરૂરી છે",
      pincodeInvalid: "પિનકોડ બરાબર 6 અંકોનો હોવો જોઈએ",
      stateRequired: "રાજ્ય જરૂરી છે",
      cityRequired: "કૃપા કરીને તમારું શહેર દાખલ કરો",
      addressRequired: "સરનામું જરૂરી છે",
      genderRequired: "લિંગ જરૂરી છે",
      ageRequired: "ઉંમર જરૂરી છે",
      ageInvalid: "ઉંમર એક સંખ્યા હોવી જોઈએ",
      copiesRequired: "નકલની સંખ્યા જરૂરી છે",
      copiesInvalid: "કૃપા કરીને માન્ય સંખ્યા દાખલ કરો (ન્યૂનતમ 1)",
      selectionRequired: "કૃપા કરીને એક વિકલ્પ પસંદ કરો!",
    },
    outOfStock: {
      title: "સ્ટોક ખાલી છે",
      message: "આ પુસ્તક હાલમાં સ્ટોકમાં નથી.",
    },
    surat: {
      title: "સુરત શહેર — પુસ્તક સંગ્રહ સ્થળ",
      message: "તમે સુરત શહેરમાં છો, તેથી તમારે નીચેના સરનામેથી પુસ્તક લઈ જવું પડશે:",
      address: "અધ્યાત્મ ભવન\nત્રીજો માળ, આનંદ શ્રાવક આરાધના ભવન\nસંજીવકુમાર ઓડિટોરિયમ પાસે, પાલ, સૂરત - 395 009\nM. 7676769600",
    },
  },
};

const ImageCarousel = ({ images = [], isMahabharatForm, formDescription, formHeading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [multiImages, setMultiImages] = useState(images.length > 1);

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      setMultiImages(true);
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [images.length, isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  if (!images.length) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-200">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center w-full h-full"
    >
      <div className={`relative ${multiImages && 'my-36'}  sm:my-0 h-full  w-full flex flex-col items-center justify-center`}>
        {/* <div className="text-center w-full mb-3 bg-gray-700">
        <div className="px-4">
          <h1 className="font-anek text-base mt-4 sm:mt-0 sm:pt-3 sm:text-lg lg:text-2xl font-bold  bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {formHeading}
          </h1>
        </div>
        {formDescription && (
          <p className="text-gray-600 mb-2 font-anek">{formDescription}</p>
        )}
      </div> */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`${multiImages && 'absolute'}  w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative sm:h-full sm:max-h-[40rem] w-auto max-w-full overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`object-contain h-[40vh] ${isMahabharatForm ? 'sm:min-h-[70vh]' : 'sm:h-full'}   w-full mx-auto`}
              />
            </div>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
          >
            <IoIosArrowForward />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 
                ${currentSlide === index ? "bg-gray-400" : "bg-gray-300 bg-opacity-50"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const QuantitySelector = ({ value, onChange, max = 5 }) => {
  const handleDecrement = () => {
    const newValue = Math.max(0, value - 1);
    onChange?.(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + 1);
    onChange?.(newValue);
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value === 0}
        className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      <span className="text-base font-semibold min-w-[30px] text-center">
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={value === max}
        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

const CopySelector = ({
  label = "તમે આ પુસ્તકની કેટલી નકલો ઓર્ડર કરવા માંગો છો?",
  value,
  onChange,
  maxCopies = 5,
  fontClass = "font-anek",
}) => {
  const handleDecrement = () => {
    const newCopies = Math.max(1, value - 1);
    onChange?.(newCopies);
  };

  const handleIncrement = () => {
    const newCopies = Math.min(maxCopies, value + 1);
    onChange?.(newCopies);
  };

  return (
    <div className="w-full space-y-3 my-[1.31rem]">
      <Form.Item label={<b className={fontClass}>{label}</b>} name="નકલ">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={handleDecrement}
            disabled={value === 1}
            className="
              p-[.4rem] rounded-full bg-gray-100 text-gray-600 
              hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 ease-in-out
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          <span className="text-base font-semibold min-w-[40px] text-center">
            {value}
          </span>

          <button
            type="button"
            onClick={handleIncrement}
            disabled={value === maxCopies}
            className="
              p-[.4rem] rounded-full bg-blue-100 text-blue-600 
              hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 ease-in-out
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </Form.Item>
    </div>
  );
};

const CopyInputField = ({
  label = "તમે આ પુસ્તકની કેટલી નકલો ઓર્ડર કરવા માંગો છો?",
  value,
  onChange,
  validation = {
    required: "Number of copies is required",
    invalid: "Please enter a valid number (minimum 1)"
  },
  placeholder = "Enter number of copies",
  fontClass = "font-anek",
}) => {
  return (
    <div className="w-full space-y-3 my-[1.31rem]">
      <Form.Item
        label={<b className={fontClass}>{label}</b>}
        name="નકલ"
        rules={[
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{validation.required}</span>,
          },
          {
            type: 'number',
            min: 1,
            message: <span style={{ fontSize: "12px" }}>{validation.invalid}</span>,
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          className="w-full rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min={1}
        />
      </Form.Item>
    </div>
  );
};

export default function DynamicForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [copies, setCopies] = useState(1);
  const [formData, setFormData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupStatus, setPopupStatus] = useState("loading");
  const [generatedID, setGeneratedID] = useState(null);
  const [candidateName, setCandidateName] = useState("");
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fetchedUser, setFetchedUser] = useState(null);
  const [realUserValues, setRealUserValues] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [suratCity, setSuratCity] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

  // Get the language from formData, default to 'gujarati' if not specified
  const currentLanguage = formData?.language?.toLowerCase() || 'gujarati';
  // const t = translations[currentLanguage] || translations.gujarati;
  // const fontClass = currentLanguage === 'gujarati' ? 'font-anek' : currentLanguage === 'hindi' ? 'font-heading' : 'font-sans';

  const onFetchSuccess = useCallback((data) => {
    setFetchedUser(data);
    setIsModalVisible(true);
  }, []);

  const { loading: fetchLoading } = useUserFetch(phoneNumber, onFetchSuccess);

  const handleModalConfirm = () => {
    if (fetchedUser) {
      form.setFieldsValue({
        "नाम": maskData(fetchedUser.firstName),
        "उपनाम": maskData(fetchedUser.lastName),
        "एड्रेस": maskData(fetchedUser.address?.street, 'address'),
        "शहर": maskData(fetchedUser.address?.city),
        "राज्य": fetchedUser.address?.state,
        "पिनकोड": maskData(fetchedUser.address?.pincode),
        // Gujarati mappings
        "નામ": maskData(fetchedUser.firstName),
        "અટક": maskData(fetchedUser.lastName),
        "એડ્રેસ": maskData(fetchedUser.address?.street, 'address'),
        "પિનકોડ": maskData(fetchedUser.address?.pincode),
        // English mappings
        "Name": maskData(fetchedUser.firstName),
        "Surname": maskData(fetchedUser.lastName),
        "Address": maskData(fetchedUser.address?.street, 'address'),
        "Pincode": maskData(fetchedUser.address?.pincode),
      });

      setRealUserValues({
        "नाम": fetchedUser.firstName,
        "उपनाम": fetchedUser.lastName,
        "एड्रेस": fetchedUser.address?.street,
        "शहर": fetchedUser.address?.city,
        "राज्य": fetchedUser.address?.state,
        "पिनकोड": fetchedUser.address?.pincode,

        "નામ": fetchedUser.firstName,
        "અટક": fetchedUser.lastName,
        "એડ્રેસ": fetchedUser.address?.street,
        "પિનકોડ": fetchedUser.address?.pincode,

        "Name": fetchedUser.firstName,
        "Surname": fetchedUser.lastName,
        "Address": fetchedUser.address?.street,
        "Pincode": fetchedUser.address?.pincode,

        city: fetchedUser.address?.city,
        state: fetchedUser.address?.state,
        pincode: fetchedUser.address?.pincode
      });

      setIsVerified(true);
      setIsModalVisible(false);
    }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setIsVerified(false);
    setRealUserValues({});
    // Optionally clear fields or leave them as is (user might want to edit)
    // Requirement: "edit button for override the details" -> assumes we just close modal and let them type.
  };

  // Get language from formData
  const language = formData?.language?.toLowerCase() || 'gujarati';
  console.log(language, formData, "formData")
  const t = translations[language] || translations.gujarati;

  const detectedLang = detectLanguage(formData?.title);
  const fontClass = detectedLang === 'Hindi' ? 'font-heading' :
    detectedLang === 'Gujarati' ? 'font-anek' : 'font-sans';

  // State for multiple book quantities (sanskrutam-saralam form)
  const [bookQuantities, setBookQuantities] = useState({
    pratham_yatra: 0,
    dwitiy_yatra: 0,
    dhatunaamrup_shreni: 0,
  });

  const isMahabharatForm = formData?.slug === 'mahabharat' ||
    formData?.title?.toLowerCase().includes('mahabharat') ||
    formData?.title?.toLowerCase().includes('મહાભારત');

  const isSanskrutamSaralamForm = formData?.slug === 'sanskrutam-saralam';

  const thanksMessageTitle = formData?.tqmsg || "Thank You!";
  const thanksMessageDescription = formData?.tqmsg_description || "Form submitted successfully!";

  const router = useRouter();
  const searchParams = useSearchParams();
  const formSlug = searchParams.get('form');

  useEffect(() => {
    const fetchFormData = async () => {
      if (!formSlug) {
        setFormLoading(false);
        return;
      }

      try {
        setFormLoading(true);
        const response = await axios.get(
          `https://book.adhyatmparivar.com/api/forms/${formSlug}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data:", error);
        message.error("Failed to load form configuration");
      } finally {
        setFormLoading(false);
      }
    };

    fetchFormData();
  }, [formSlug]);

  // Check for stock availability
  useEffect(() => {
    const checkStock = async () => {
      if (!formData || !formData.slug || !formData.stock) return;

      try {
        const response = await axios.get(
          `https://us-central1-adhyatm-parivar-main.cloudfunctions.net/getBookCopyCount?slug=${formData.slug}`
        );

        const totalCopies = response.data?.totalCopies || 0;
        console.log("Stock Check:", { totalCopies, stockLimit: formData.stock });

        if (totalCopies >= formData.stock) {
          setIsOutOfStock(true);
        }
      } catch (error) {
        console.error("Error checking stock:", error);
      }
    };

    checkStock();
  }, [formData]);

  // Handle book quantity changes for sanskrutam-saralam form
  const handleQuantityChange = (bookName, value) => {
    setBookQuantities(prev => ({
      ...prev,
      [bookName]: value
    }));
    // Update form field values
    form.setFieldsValue({
      [bookName]: value
    });
  };

  const renderField = (fieldName, fieldConfig) => {
    // Map for form field keys based on language
    const fieldKeys = {
      mobile: "मोबाइल नंबर",
      name: "नाम",
      sname: "उपनाम",
      pincode: "पिनकोड",
      state: "राज्य",
      city: "शहर",
      address: "एड्रेस",
      gender: "लिंग",
      age: "आयु",
    };

    const fieldMapping = {
      mobile: {
        key: fieldKeys.mobile,
        label: t.mobile.label,
        placeholder: t.mobile.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.mobileRequired}</span>,
          },
          {
            pattern: /^(0|)[0-9]{10}$/,
            message: <span style={{ fontSize: "12px" }}>{t.validation.mobileInvalid}</span>,
          },
        ],
        component: <Input
          className="rounded-md"
          placeholder={t.mobile.placeholder}
          maxLength={11}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            if (isVerified) setIsVerified(false);
          }}
          suffix={isVerified && (phoneNumber === form.getFieldValue(fieldKeys.mobile)) && <CheckCircleFilled className="text-green-500" />}
        />,
      },
      name: {
        key: fieldKeys.name,
        label: t.name.label,
        placeholder: t.name.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.nameRequired}</span>,
          },
        ],
        component: <Input
          className="rounded-md"
          placeholder={t.name.placeholder}
          disabled={form.getFieldValue(fieldKeys.name)?.includes('xxxx')}
        />,
      },
      sname: {
        key: fieldKeys.sname,
        label: t.sname.label,
        placeholder: t.sname.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.surnameRequired}</span>,
          },
        ],
        component: <Input
          className="rounded-md"
          placeholder={t.sname.placeholder}
          disabled={form.getFieldValue(fieldKeys.sname)?.includes('xxxx')}
        />,
      },
      pincode: {
        key: fieldKeys.pincode,
        label: t.pincode.label,
        placeholder: t.pincode.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.pincodeRequired}</span>,
          },
          {
            pattern: /^([0-9]{6}|.*xxxx.*)$/,
            message: <span style={{ fontSize: "12px" }}>{t.validation.pincodeInvalid}</span>,
          },
        ],
        component: <Input
          className="rounded-md"
          placeholder={t.pincode.placeholder}
          disabled={form.getFieldValue(fieldKeys.pincode)?.includes('xxxx')}
        />,
      },
      state: {
        key: fieldKeys.state,
        label: t.state.label,
        placeholder: t.state.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.stateRequired}</span>,
          },
        ],
        component: (
          <Select
            placeholder={t.state.placeholder}
            className="rounded-md"
            disabled={form.getFieldValue(fieldKeys.state)?.includes('xxxx')}
          >
            {states.map((state) => (
              <Select.Option key={state.value} value={state.value}>
                <span className={fontClass}>
                  {state.label} / {state.value}
                </span>
              </Select.Option>
            ))}
          </Select>
        ),
      },
      city: {
        key: fieldKeys.city,
        label: t.city.label,
        placeholder: t.city.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.cityRequired}</span>,
          },
        ],
        component: <Input
          className="rounded-md"
          placeholder={t.city.placeholder}
          disabled={form.getFieldValue(fieldKeys.city)?.includes('xxxx')}
          onChange={(e) => setSuratCity(isSuratCity(e.target.value))}
        />,
      },
      address: {
        key: fieldKeys.address,
        label: t.address.label,
        placeholder: t.address.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.addressRequired}</span>,
          },
        ],
        component: (
          <TextArea
            className="rounded-md"
            placeholder={t.address.placeholder}
            rows={2}
            disabled={form.getFieldValue(fieldKeys.address)?.includes('xxxx')}
          />
        ),
      },
      gender: {
        key: fieldKeys.gender,
        label: t.gender.label,
        placeholder: t.gender.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.genderRequired}</span>,
          },
        ],
        component: (
          <Select placeholder={t.gender.placeholder} className="rounded-md">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        ),
      },
      age: {
        key: fieldKeys.age,
        label: t.age.label,
        placeholder: t.age.placeholder,
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>{t.validation.ageRequired}</span>,
          },
          {
            pattern: /^[0-9]+$/,
            message: <span style={{ fontSize: "12px" }}>{t.validation.ageInvalid}</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder={t.age.placeholder} />,
      },
    };

    return fieldMapping[fieldName] || null;
  };

  const hasActiveDateConstraints = () => {
    return formData?.active_from && formData?.active_to;
  };

  const shouldUseInputField = () => {
    return !formData?.no_of_copies || formData?.no_of_copies === 0;
  };

  const onFinish = async (values) => {
    setPopupVisible(true);
    setPopupStatus("loading");

    // Handle copies for non-sanskrutam-saralam forms
    if (formData?.show_copies && !isSanskrutamSaralamForm) {
      values.નકલ = copies;
    }

    // Handle book quantities for sanskrutam-saralam form as nested object
    if (isSanskrutamSaralamForm) {
      values.book_quantities = {
        pratham_yatra: bookQuantities.pratham_yatra,
        dwitiy_yatra: bookQuantities.dwitiy_yatra,
        dhatunaamrup_shreni: bookQuantities.dhatunaamrup_shreni
      };
      // Remove individual fields if they exist
      delete values.pratham_yatra;
      delete values.dwitiy_yatra;
      delete values.dhatunaamrup_shreni;
    }

    // Merge real values if they exist
    // We check if the current form value matches the MASKED value. If so, we replace it with the REAL value.
    // If user edited it (so it doesn't match mask), we keep user's value.
    const finalValues = { ...values };

    // Helper to check and replace
    const replaceIfMasked = (key, realValue) => {
      if (values[key] && realValue && values[key].includes('xxxx')) { // Simple check for mask
        finalValues[key] = realValue;
      }
    };

    // Apply replacements for known fields
    replaceIfMasked("नाम", realUserValues["नाम"]);
    replaceIfMasked("उपनाम", realUserValues["उपनाम"]);
    replaceIfMasked("एड्रेस", realUserValues["एड्रेस"]);
    replaceIfMasked("शहर", realUserValues["शहर"]);
    replaceIfMasked("राज्य", realUserValues["राज्य"]);
    replaceIfMasked("पिनकोड", realUserValues["पिनकोड"]);

    replaceIfMasked("નામ", realUserValues["નામ"]);
    replaceIfMasked("અટક", realUserValues["અટક"]);
    replaceIfMasked("એડ્રેસ", realUserValues["એડ્રેસ"]);

    replaceIfMasked("Name", realUserValues["Name"]);
    replaceIfMasked("Surname", realUserValues["Surname"]);
    replaceIfMasked("Address", realUserValues["Address"]);
    replaceIfMasked("Pincode", realUserValues["Pincode"]);

    // Secondary Language check - some forms might use the Gujarati labels as keys if fieldKeys is mixed
    // Actually our fieldKeys is fixed to Hindi. But let's be safe.
    replaceIfMasked("નામ", realUserValues["નામ"]);
    replaceIfMasked("અટક", realUserValues["અટક"]);
    replaceIfMasked("એડ્રેસ", realUserValues["એડ્રેસ"]);
    replaceIfMasked("પિનકોડ", realUserValues["પિનકોડ"]);

    // Set candidate name for success popup (using merged unmasked values)
    const nameForDisplay = finalValues["नाम"] || finalValues["નામ"] || finalValues["Name"] || "";
    const surnameForDisplay = finalValues["उपनाम"] || finalValues["અટક"] || finalValues["Surname"] || "";
    const fullName = `${nameForDisplay} ${surnameForDisplay}`.trim();
    setCandidateName(fullName);

    console.log("Form values (initial): ", values);
    console.log("Form values (merged): ", finalValues);
    console.log("Real values available: ", realUserValues);

    try {
      setLoading(true);
      const response = await axios.post(formData.link, finalValues, {
        params: { mode: 'TEST' }
      }); console.log(response, "response");
      const generatedID = response.data.registrationId || null;
      setGeneratedID(generatedID);
      if (response.status === 200) {
        setPopupStatus("success");
        console.log("Response sent successfully:", response.data);
        form.resetFields();
        if (isSanskrutamSaralamForm) {
          setBookQuantities({
            pratham_yatra: 0,
            dwitiy_yatra: 0,
            dhatunaamrup_shreni: 0,
          });
        }
      } else {
        console.log("Unexpected response status:", response.status);
        setPopupStatus("error");
        message.error("There was an issue submitting the form.");
      }
    } catch (error) {
      console.log("Error sending response:", error);
      setPopupStatus("error");
      message.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
    setCandidateName("");
    setCopies(1);
    if (isSanskrutamSaralamForm) {
      setBookQuantities({
        pratham_yatra: 0,
        dwitiy_yatra: 0,
        dhatunaamrup_shreni: 0,
      });
    }
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    setCandidateName("");
    setPopupStatus("loading");
  };

  const handleSuccessOk = () => {
    setPopupVisible(false);
    setPopupStatus("loading");
    setCandidateName("");
    router.push("/");
  };

  if (formLoading) {
    return (
      <div className="">
        <FormSkeleton />
      </div>
    );
  }

  if (!formSlug) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Form Parameter Missing</h2>
          <p className="text-gray-500">Please provide a form parameter in the URL like: /pages/form?form=your-form-slug</p>
        </div>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Form Not Found</h2>
          <p className="text-gray-500">The requested form could not be loaded.</p>
        </div>
      </div>
    );
  }

  let isFormActive = formData.active;

  if (hasActiveDateConstraints()) {
    const currentDate = new Date();
    const activeFrom = new Date(formData.active_from);
    const activeTo = new Date(formData.active_to);
    isFormActive = isFormActive && currentDate >= activeFrom && currentDate <= activeTo;
  }

  if (!isFormActive) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Form Not Available</h2>
          <p className="text-gray-500">This form is currently not accepting submissions.</p>
        </div>
      </div>
    );
  }

  const fieldPriority = ['mobile', 'name', 'sname', 'address', 'city', 'state', 'pincode'];

  const fieldsToRender = formData.fields
    .filter(field => field !== 'copies')
    .sort((a, b) => {
      const indexA = fieldPriority.indexOf(a);
      const indexB = fieldPriority.indexOf(b);

      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return 0;
    });
  const fieldRows = [];
  let currentRow = [];
  fieldsToRender.forEach((field) => {
    if (field === 'address') {
      if (currentRow.length > 0) {
        fieldRows.push(currentRow);
        currentRow = [];
      }
      fieldRows.push([field]);
    } else {
      currentRow.push(field);
      if (currentRow.length === 2) {
        fieldRows.push(currentRow);
        currentRow = [];
      }
    }
  });
  if (currentRow.length > 0) {
    fieldRows.push(currentRow);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-4 md:py-8 ">
      {/* <div className="text-center mb-6 sm:mb-10">
        <div className="inline-block px-4">
          <h1 className="font-anek text-2xl mt-4 sm:mt-0 sm:pt-3 sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {formData.title}
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
        </div>
        {formData.description && (
          <p className="text-gray-600 mt-2 font-anek">{formData.description}</p>
        )}
      </div> */}

      <div className="container mx-auto max-w-6xl">
        <div style={{ backgroundImage: "url('/')", backgroundSize: "contain" }} className="overflow-hidden bg-pink-50">
          <div className="text-center bg-lightpink">
            <div className="inline-block px-4">
              <h1 className={`${fontClass} text-2xl mt-4 pt-2 sm:pt-0 sm:mt-0 sm:pt-3 sm:text-2xl lg:text-3xl font-bold  bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent`}>
                {formData.title}
              </h1>
              {/* <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div> */}
            </div>
            {formData.description && (
              <p className={`text-gray-700 mt-2 px-2 font-semibold ${fontClass}`}>{formData.description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 p-4 sm:p-8 gap-8">

            {/* Image Section */}
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="h-full w-full">
                <ImageCarousel formHeading={formData.title} formDescription={formData.description} isMahabharatForm={isMahabharatForm} images={formData.thumbnails} />
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-3 bg-white relative p-6  backdrop-blur-lg rounded-sm shadow-md">

              {isOutOfStock && (
                <div className={`${detectLanguage(t.outOfStock.title) == 'Hindi' ? 'font-heading' : detectLanguage(t.outOfStock.title) == 'Gujarati' ? 'font-anek' : 'font-sans'} absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-sm`}>
                  <div className="text-center bg-white rounded-sm p-6">
                    <h3 className=" text-2xl font-bold text-red-600 mb-2">{t.outOfStock.title}</h3>
                    <p className=" text-lg text-gray-700">{t.outOfStock.message}</p>
                  </div>
                </div>
              )}

              <Form form={form} layout="vertical" onFinish={onFinish} className={isOutOfStock ? "opacity-50 pointer-events-none" : ""}>
                {/* Dynamic Fields */}
                {fieldRows.map((row, rowIndex) => (
                  <Row key={rowIndex} gutter={16}>
                    {row.map((fieldName) => {
                      const fieldInfo = renderField(fieldName);
                      if (!fieldInfo) return null;

                      return (
                        <Col key={fieldName} xs={24} md={row.length === 1 ? 24 : 12}>
                          <Form.Item
                            label={<b className={`${fontClass} text-gray-700`}>{fieldInfo.label}</b>}
                            name={fieldInfo.key}
                            rules={fieldInfo.rules}
                          >
                            {fieldInfo.component}
                          </Form.Item>
                        </Col>
                      );
                    })}
                  </Row>
                ))}

                {/* Mahabharat Parts Selection */}
                {isMahabharatForm && (
                  <Row gutter={[16, 16]}>
                    <Col xs={24}>
                      <Form.Item
                        label={
                          <span className={`${fontClass} font-bold text-gray-700 text-base flex items-center gap-2`}>
                            {t.mahabharat.question}
                          </span>
                        }
                        name="set/part-1"
                        rules={[
                          {
                            required: true,
                            message: <span style={{ fontSize: "12px" }}>{t.validation.selectionRequired}</span>,
                          },
                        ]}
                        className="mb-6"
                      >
                        <div className="mt-3">
                          <Radio.Group className="w-full">
                            <div className="flex gap-4 w-full items-center">
                              <div className="p-4 w-1/2 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200">
                                <Radio value={t.mahabharat.set} className={`${fontClass} text-gray-700`}>
                                  <div className="ml-2">
                                    <span className={`${fontClass} font-medium text-gray-800`}>{t.mahabharat.set}</span>
                                  </div>
                                </Radio>
                              </div>
                              <div className="p-4 w-1/2 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200">
                                <Radio value={t.mahabharat.part1} className={`${fontClass} text-gray-700`}>
                                  <div className="ml-2">
                                    <span className={`${fontClass} font-medium text-gray-800`}>{t.mahabharat.part1}</span>
                                  </div>
                                </Radio>
                              </div>
                            </div>
                          </Radio.Group>
                        </div>
                      </Form.Item>
                    </Col>
                  </Row>
                )}

                {/* Book Quantity Selection - Only for sanskrutam-saralam */}
                {isSanskrutamSaralamForm && (
                  <Row>
                    <Col xs={24}>
                      <div className="mb-6">
                        <b className={`${fontClass} text-sm mb-4 block`}>
                          {t.sanskrutam.question}
                        </b>

                        <div className="grid sm:grid-cols-3 gap-4">
                          {/* Book 1 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className={`${fontClass} font-medium block mb-3`}>{t.sanskrutam.pratham}</span>
                            <QuantitySelector
                              value={bookQuantities.pratham_yatra}
                              onChange={(value) => handleQuantityChange('pratham_yatra', value)}
                            />
                          </div>

                          {/* Book 2 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className={`${fontClass} font-medium block mb-3`}>{t.sanskrutam.dwitiy}</span>
                            <QuantitySelector
                              value={bookQuantities.dwitiy_yatra}
                              onChange={(value) => handleQuantityChange('dwitiy_yatra', value)}
                            />
                          </div>

                          {/* Book 3 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className={`${fontClass} font-medium block mb-3`}>{t.sanskrutam.dhatunaamrup}</span>
                            <QuantitySelector
                              value={bookQuantities.dhatunaamrup_shreni}
                              onChange={(value) => handleQuantityChange('dhatunaamrup_shreni', value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Hidden form fields to store quantities */}
                      <Form.Item name="pratham_yatra" style={{ display: 'none' }}>
                        <Input type="hidden" />
                      </Form.Item>
                      <Form.Item name="dwitiy_yatra" style={{ display: 'none' }}>
                        <Input type="hidden" />
                      </Form.Item>
                      <Form.Item name="dhatunaamrup_shreni" style={{ display: 'none' }}>
                        <Input type="hidden" />
                      </Form.Item>
                    </Col>
                  </Row>
                )}

                {/* Copies Selector - Show for other forms (not sanskrutam-saralam) */}
                {formData.show_copies && !isSanskrutamSaralamForm && (
                  <Row gutter={16}>
                    <Col xs={24} md={24}>
                      {shouldUseInputField() ? (
                        <CopyInputField
                          label={formData.copy_question || t.copies.label}
                          value={copies}
                          onChange={setCopies}
                          validation={{
                            required: t.validation.copiesRequired,
                            invalid: t.validation.copiesInvalid
                          }}
                          placeholder={t.copies.placeholder}
                          fontClass={fontClass}
                        />
                      ) : (
                        <CopySelector
                          label={formData.copy_question || t.copies.label}
                          value={copies}
                          onChange={setCopies}
                          maxCopies={formData.no_of_copies}
                          fontClass={fontClass}
                        />
                      )}
                    </Col>
                  </Row>
                )}

                <div className="flex mt-6 justify-between items-center">
                  <button
                    type="button"
                    className="rounded-sm font-sans text-sm font-medium px-5 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
                    onClick={onReset}
                  >
                    {t.buttons.reset}
                  </button>

                  <button
                    type="submit"
                    className="rounded-sm text-sm cursor-pointer font-sans font-medium px-5 py-2 bg-green-700 text-white hover:bg-green-600 transition-colors disabled:bg-gray-400"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spin size="small" /> {t.buttons.submitting}
                      </>
                    ) : (
                      t.buttons.submit
                    )}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Popup */}
      <SubmissionPopup
        visible={popupVisible}
        status={popupStatus}
        candidateName={candidateName}
        onClose={handlePopupClose}
        onSuccess={handleSuccessOk}
        generatedID={generatedID}
        title={thanksMessageTitle}
        desc={thanksMessageDescription}
        loadingText="Submitting your form..."
        successText={formData?.tqmsg || "Form submitted successfully!"}
        errorText="Failed to submit form. Please try again."
        showAutoClose={false}
        language={currentLanguage}
        showSuratMessage={suratCity}
        suratTexts={t.surat}
        fontClass={fontClass}
      />
      {/* Verification Modal */}
      <UserFetchModal
        visible={isModalVisible}
        data={fetchedUser}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
        language={currentLanguage}
      />
    </div>
  );
}