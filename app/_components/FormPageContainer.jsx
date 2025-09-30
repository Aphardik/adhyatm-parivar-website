"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, message, Spin, Select, Radio, InputNumber } from "antd";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { states } from "../data/states";
import TextArea from "antd/es/input/TextArea";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubmissionPopup from "@/app/_components/SubmissionPopup";
import FormSkeleton from "@/app/_components/FormSkeleton";

const ImageCarousel = ({ images = [], isMahabharatForm }) => {
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
      <div className={`relative ${multiImages && 'my-36'}  sm:my-0 h-full  w-full flex items-center justify-center`}>
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
                className={`object-contain h-[60vh] ${isMahabharatForm ? 'sm:min-h-[70vh]' : 'sm:h-full'}   w-full mx-auto`}
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
                ${
                  currentSlide === index ? "bg-gray-400" : "bg-gray-300 bg-opacity-50"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const QuantitySelector = ({ value, onChange }) => {
  const handleDecrement = () => {
    const newValue = Math.max(0, value - 1);
    onChange?.(newValue);
  };

  const handleIncrement = () => {
    const newValue = value + 1;
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
        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all"
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
      <Form.Item label={<b className="font-anek">{label}</b>} name="નકલ">
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
}) => {
  return (
    <div className="w-full space-y-3 my-[1.31rem]">
      <Form.Item 
        label={<b className="font-anek">{label}</b>} 
        name="નકલ"
        rules={[
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Number of copies is required</span>,
          },
          {
            type: 'number',
            min: 1,
            message: <span style={{ fontSize: "12px" }}>Please enter a valid number (minimum 1)</span>,
          },
        ]}
      >
        <InputNumber
          style={{ width: '100%' }}
          className="w-full rounded-md"
          placeholder="Enter number of copies"
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
          `https://apformgenerator.netlify.app/api/forms/${formSlug}`
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
    const fieldMapping = {
      mobile: {
        key: "मोबाइल नंबर",
        label: "મોબાઇલ નંબર/मोबाइल नंबर",
        placeholder: "મોબાઇલ નંબર/मोबाइल नंबर",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Mobile no. is required</span>,
          },
          {
            pattern: /^[0-9]{10}$/,
            message: <span style={{ fontSize: "12px" }}>Mobile no. must be exactly 10 digits</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="મોબાઇલ નંબર/मोबाइल नंबर" />,
      },
      name: {
        key: "नाम",
        label: "નામ/नाम",
        placeholder: "નામ/नाम",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Name is required</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="નામ/नाम" />,
      },
      sname: {
        key: "उपनाम",
        label: "અટક/उपनाम",
        placeholder: "અટક/उपनाम",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Please enter your surname</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="અટક/उपनाम" />,
      },
      pincode: {
        key: "पिनकोड",
        label: "પિનકોડ/पिनकोड",
        placeholder: "પિનકોડ/पिनकोड",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Pincode is required</span>,
          },
          {
            pattern: /^[0-9]{6}$/,
            message: <span style={{ fontSize: "12px" }}>Pincode must be exactly 6 digits</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="પિનકોડ/पिनकोड" />,
      },
      state: {
        key: "राज्य",
        label: "રાજ્ય/राज्य",
        placeholder: "રાજ્ય/राज्य",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>State is required</span>,
          },
        ],
        component: (
          <Select placeholder="રાજ્ય/राज्य" className="rounded-md">
            {states.map((state) => (
              <Select.Option key={state.value} value={state.value}>
                <span className="font-anek">
                  {state.label} / {state.value}
                </span>
              </Select.Option>
            ))}
          </Select>
        ),
      },
      city: {
        key: "शहर",
        label: "શહેર/शहर",
        placeholder: "શહેર/शहर",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Please enter your city</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="શહેર/शहर" />,
      },
      address: {
        key: "એડ્રેસ/एड्रेस",
        label: "એડ્રેસ/एड्रेस",
        placeholder: "એડ્રેસ/एड्रेस",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Address is required</span>,
          },
        ],
        component: (
          <TextArea
            className="rounded-md"
            placeholder="એડ્રેસ/एड्रेस"
            rows={2}
          />
        ),
      },
      gender: {
        key: "gender",
        label: "Gender",
        placeholder: "Select Gender",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Gender is required</span>,
          },
        ],
        component: (
          <Select placeholder="Select Gender" className="rounded-md">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        ),
      },
      age: {
        key: "age",
        label: "Age",
        placeholder: "Age",
        rules: [
          {
            required: true,
            message: <span style={{ fontSize: "12px" }}>Age is required</span>,
          },
          {
            pattern: /^[0-9]+$/,
            message: <span style={{ fontSize: "12px" }}>Age must be a number</span>,
          },
        ],
        component: <Input className="rounded-md" placeholder="Age" />,
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

    // Handle book quantities for sanskrutam-saralam form
    if (isSanskrutamSaralamForm) {
      values.pratham_yatra = bookQuantities.pratham_yatra;
      values.dwitiy_yatra = bookQuantities.dwitiy_yatra;
      values.dhatunaamrup_shreni = bookQuantities.dhatunaamrup_shreni;
    }

    const name = values["नाम"] || "";
    const surname = values["उपनाम"] || "";
    const fullName = `${name} ${surname}`.trim();
    setCandidateName(fullName);

    console.log("Form values: ", values);

    try {
      setLoading(true);
      const response = await axios.post(formData.link, values);
      console.log(response, "response");
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
        <FormSkeleton/>
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

  const fieldsToRender = formData.fields.filter(field => field !== 'copies');
  const fieldRows = [];
  for (let i = 0; i < fieldsToRender.length; i += 2) {
    fieldRows.push(fieldsToRender.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-0 md:py-8 bg-gray">
      <div className="text-center mb-6 sm:mb-10">
        <div className="inline-block px-4">
          <h1 className="font-anek text-2xl mt-4 sm:mt-0 sm:pt-3 sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            {formData.title}
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
        </div>
        {formData.description && (
          <p className="text-gray-600 mt-2 font-anek">{formData.description}</p>
        )}
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="bg-white overflow-hidden">
          <div className="grid grid-cols-1 gap-12 sm:gap-6 lg:grid-cols-2">
            {/* Image Section */}
            <div className=" flex items-center justify-center h-full">
              <div className="h-full w-full">
                <ImageCarousel isMahabharatForm={isMahabharatForm} images={formData.thumbnails} />
              </div>
            </div>

            {/* Form Section */}
            <div className="relative p-6 bg-gray-100">
              <Form form={form} layout="vertical" onFinish={onFinish}>
                {/* Dynamic Fields */}
                {fieldRows.map((row, rowIndex) => (
                  <Row key={rowIndex} gutter={16}>
                    {row.map((fieldName) => {
                      const fieldInfo = renderField(fieldName);
                      if (!fieldInfo) return null;

                      return (
                        <Col key={fieldName} xs={24} md={row.length === 1 ? 24 : 12}>
                          <Form.Item
                            label={<b className="font-anek text-gray-700">{fieldInfo.label}</b>}
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
                          <span className="font-anek font-bold text-gray-700 text-base flex items-center gap-2">
                            આપને મહાભારત પુસ્તક ના ૫ ભાગનો આખો સેટ જરૂર છે કે પછી ફક્ત પહેલો ભાગ?
                          </span>
                        }
                        name="set/part-1"
                        rules={[
                          {
                            required: true,
                            message: <span style={{ fontSize: "12px" }}>Please select an option!</span>,
                          },
                        ]}
                        className="mb-6"
                      >
                        <div className="mt-3">
                          <Radio.Group className="w-full">
                            <div className="flex gap-4 w-full items-center">
                              <div className="p-4 w-1/2 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200">
                                <Radio value="ભાગ ૧ થી ૫ નો સેટ" className="font-anek text-gray-700">
                                  <div className="ml-2">
                                    <span className="font-anek font-medium text-gray-800">ભાગ ૧ થી ૫ નો સેટ</span>
                                  </div>
                                </Radio>
                              </div>
                              <div className="p-4 w-1/2 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200">
                                <Radio value="ફક્ત ભાગ - ૧" className="font-anek text-gray-700">
                                  <div className="ml-2">
                                    <span className="font-anek font-medium text-gray-800">ફક્ત ભાગ - ૧</span>
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
                        <b className="font-anek text-sm mb-4 block">
                          આપને પુસ્તકની કેટલી નકલની આવશ્યકતા છે ?    
                        </b>
                        
                        <div className="grid sm:grid-cols-3 gap-4">
                          {/* Book 1 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className="font-anek font-medium block mb-3">પ્રથમા યાત્રા</span>
                            <QuantitySelector
                              value={bookQuantities.pratham_yatra}
                              onChange={(value) => handleQuantityChange('pratham_yatra', value)}
                            />
                          </div>

                          {/* Book 2 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className="font-anek font-medium block mb-3">દ્વિતીયા યાત્રા</span>
                            <QuantitySelector
                              value={bookQuantities.dwitiy_yatra}
                              onChange={(value) => handleQuantityChange('dwitiy_yatra', value)}
                            />
                          </div>

                          {/* Book 3 */}
                          <div className="text-center flex flex-col justify-center items-start sm:items-center p-3 border border-gray-300 bg-gray-50">
                            <span className="font-anek font-medium block mb-3">ધાતુનામરૂપશ્રેણિઃ</span>
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
                          label="આપને આ કેલેન્ડરની કેટલી નકલની આવશ્યકતા છે?"
                          value={copies}
                          onChange={setCopies}
                        />
                      ) : (
                        <CopySelector
                          label="આપને આ કેલેન્ડરની કેટલી નકલની આવશ્યકતા છે?"
                          value={copies}
                          onChange={setCopies}
                          maxCopies={formData.no_of_copies}
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
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="rounded-sm text-sm cursor-pointer font-sans font-medium px-5 py-2 bg-green-700 text-white hover:bg-green-600 transition-colors disabled:bg-gray-400"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spin size="small" /> Submitting...
                      </>
                    ) : (
                      "Submit"
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
      />
    </div>
  );
}