"use client";
import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  message,
  Spin,
  Select,
} from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { states } from "../../../data/states";
import TextArea from "antd/es/input/TextArea";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import SubmissionPopup from "../../../_components/SubmissionPopup"; 

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/bookimages/prathamyatra.jpg",
    "/bookimages/dwitiyayatra.jpg",
    "/bookimages/dhatunaamrupshreni.jpg"
  ];

  useEffect(() => {
    if (!isHovered) {
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

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[15rem] sm:h-[32.6rem] overflow-hidden "
    >
      {/* Slides */}
      <div className="relative bg-gray-200 h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full  h-full transition-opacity duration-500 ease-in-out
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
      >
        <IoIosArrowForward />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 
              ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

// Quantity Selector Component
const QuantitySelector = ({ value = 0, onChange, min = 0, max = 5 }) => {
  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center space-x-0">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white hover:bg-gray-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <FiMinus size={16} />
      </button>
      <span className="w-8 text-center font-semibold text-lg bg-gray-100 py-0.5  border border-gray-100">
        {value}
      </span>
      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
      >
        <FiPlus size={16} />
      </button>
    </div>
  );
};

export default function MahabharatForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupStatus, setPopupStatus] = useState("loading");
  const [bookQuantities, setBookQuantities] = useState({
    pratham_yatra: 0,
    dwitiy_yatra: 0,
    dhatunaamrup_shreni: 0
  });
  const router = useRouter();

  const handleQuantityChange = (bookKey, newValue) => {
    setBookQuantities(prev => ({
      ...prev,
      [bookKey]: newValue
    }));
    
    // Update form field values with specific backend field names
    const fieldMapping = {
      pratham_yatra: 'pratham_yatra',
      dwitiy_yatra: 'dwitiy_yatra', 
      dhatunaamrup_shreni: 'dhatunaamrup_shreni'
    };
    
    form.setFieldsValue({
      [fieldMapping[bookKey]]: newValue
    });
  };

  const onFinish = async (values) => {
    // Create the data structure with nested book_quantities
    const formData = {
      ...values,
      book_quantities: {
        pratham_yatra: bookQuantities.pratham_yatra,
        dwitiy_yatra: bookQuantities.dwitiy_yatra,
        dhatunaamrup_shreni: bookQuantities.dhatunaamrup_shreni
      }
    };
    
    console.log("Form values: ", formData);

    setPopupVisible(true);
    setPopupStatus("loading");

    try {
      setLoading(true);
      const response = await axios.post(
        "https://universalform-fahifz22ha-uc.a.run.app/sanskrutam-saralam",
        formData
      );

      if (response.status === 200) {
        console.log("Response sent successfully:", response.data);
        
        setPopupStatus("success");
        
        // Reset form and quantities
        form.resetFields();
        setBookQuantities({
          pratham_yatra: 0,
          dwitiy_yatra: 0,
          dhatunaamrup_shreni: 0
        });
        
      } else {
        console.log("Unexpected response status:", response.status);
        setPopupStatus("error");
      }
    } catch (error) {
      console.log("Error sending response:", error);
      
      setPopupStatus("error");
      
      // Show detailed error message if available
      if (error.response?.data?.message) {
        message.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    form.resetFields();
    setBookQuantities({
      pratham_yatra: 0,
      dwitiy_yatra: 0,
      dhatunaamrup_shreni: 0
    });
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    setPopupStatus("loading"); 
  };

  const handleSuccessOk = () => {
    setPopupVisible(false);
    setPopupStatus("loading");
    router.push("/"); 
  };

  return (
    <div className=" sm:w-[100vw]  lg:min-h-[100vh] pt-4 sm:p-4 md:border border-gray-300 flex flex-col justify-center">
     <div className="text-center mb-6 sm:mb-10">
        <div className="inline-block">
          <h1 className="font-anek  text-2xl sm:pt-3 sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
             સંસ્કૃતં સરલમ્
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
          {/* <p className="font-anek text-gray-600 text-lg mt-3">(ભાગ ૧ થી ૫) (ગુજરાતી)</p> */}
        </div>
      </div>
      <div className="container mx-auto max-w-[80rem] w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="relative">
          <ImageCarousel />
        </div>

        {/* Form Section */}
        <div className="relative p-4 bg-[#fffa] md:overflow-hidden mx-2 sm:border border-gray-300 sm:p-4">
          <Form
            style={{ width: "" }}
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">મોબાઇલ નંબર/मोबाइल नंबर</b>}
                  name="मोबाइल नंबर"
                 rules={[
                                        {
                                          required: true,
                                          message: (
                                            <span style={{ fontSize: "12px" }}>
                                              Mobile no. is required
                                            </span>
                                          ),
                                        },
                                        {
                                          pattern: /^[0-9]{10}$/,
                                          message: (
                                            <span style={{ fontSize: "12px" }}>
                                              Mobile no. must be exactly 10 digits
                                            </span>
                                          ),
                                        },
                                      ]}
                >
                  <Input
                    style={{ borderRadius: "0px" }}
                    placeholder="મોબાઇલ નંબર/मोबाइल नंबर"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">નામ/नाम</b>}
                  name="नाम"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span style={{ fontSize: "12px" }}>
                          Name is required
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input
                    style={{ borderRadius: "0px" }}
                    className="custom-placeholder"
                    placeholder="નામ/नाम"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">શહેર/शहर</b>}
                  name="शहर"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span style={{ fontSize: "12px" }}>
                          Please enter your city
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input
                    style={{ borderRadius: "0px" }}
                    placeholder="શહેર/शहर"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">એડ્રેસ/एड्रेस</b>}
                  name="એડ્રેસ/एड्रेस"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span style={{ fontSize: "12px" }}>
                          Address is required
                        </span>
                      ),
                    },
                  ]}
                >
                  <TextArea
                    style={{ borderRadius: "0px" }}
                    placeholder="એડ્રેસ/एड्रेस"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">પિનકોડ/पिनकोड</b>}
                  name="पिनकोड"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span style={{ fontSize: "12px" }}>
                          Pincode is required
                        </span>
                      ),
                    },
                  ]}
                >
                  <Input
                    style={{ borderRadius: "0px" }}
                    placeholder="પિનકોડ/पिनकोड"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label={<b className="font-anek">રાજ્ય/राज्य</b>}
                  name="राज्य"
                  rules={[
                    {
                      required: true,
                      message: (
                        <span style={{ fontSize: "12px" }}>
                          State is required
                        </span>
                      ),
                    },
                  ]}
                >
                  <Select
                    placeholder="રાજ્ય/राज्य"
                    style={{ borderRadius: "0px", width: "100%" }}
                  >
                    {states.map((state) => (
                      <Select.Option key={state.value} value={state.value}>
                        <span className="font-anek">
                          {state.label} / {state.value}
                        </span>
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            {/* Book Quantity Selection */}
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
                    <div className="text-center flex flex-col justify-center items-start sm:items-center  p-3 border border-gray-300 bg-gray-50">
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

                  {/* Total Display */}
                  {/* <div className="mt-4 p-2 bg-amber-50 border border-amber-200 rounded">
                    <span className="font-anek font-semibold text-amber-800">
                      કુલ પુસ્તકો: {bookQuantities.pratham_yatra + bookQuantities.dwitiy_yatra + bookQuantities.dhatunaamrup_shreni}
                    </span>
                  </div> */}
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

            <div className="flex mt-6  justify-between items-center">
              <button
                className="uppercase font-sans text-sm !rounded-sm px-4 py-[.4rem] !bg-red-500 !text-gray-100"
                type="button"
                onClick={onReset}
              >
                Reset
              </button>
              
              <button
                type="submit"
                disabled={loading}
                className="!rounded-sm font-sans text-sm uppercase !bg-green-700 px-4 py-[.4rem] !text-gray-100 disabled:bg-gray-400"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>

      {/* Submission Popup */}
      <SubmissionPopup
        visible={popupVisible}
        status={popupStatus}
        onClose={handlePopupClose}
        onSuccess={handleSuccessOk}
        title="Form Submission"
        loadingText="Submitting your form..."
        successText="Form submitted successfully!"
        errorText="Failed to submit form. Please try again."
        showAutoClose={false}
      />
    </div>
  );
}