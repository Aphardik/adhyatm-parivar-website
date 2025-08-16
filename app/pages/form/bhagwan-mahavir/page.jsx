"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, message, Spin, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { states } from "../../../data/states";
import TextArea from "antd/es/input/TextArea";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubmissionPopup from "@/app/_components/SubmissionPopup";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = ["/bookimages/bhagwan-mahavir.jpg","/bookimages/bhagwan-mahavir-2.jpg"];

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
      className="relative flex items-center justify-center w-full h-full"
    >
      {/* Slides */}
      <div className="relative h-full bg-gray-200 w-full flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative h-full  shadow-2xl max-h-[26rem] w-auto max-w-full overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-contain h-full w-auto max-w-full mx-auto"
                style={{ aspectRatio: "2/3" }}
              />
            </div>
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

const CopySelector = ({
  label = "તમે આ પુસ્તકની કેટલી નકલો ઓર્ડર કરવા માંગો છો?",
  value,
  onChange,
}) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    if (inputValue === '') {
      onChange?.(1); 
      return;
    }
    
    const numericValue = parseInt(inputValue, 10);
    
    if (!isNaN(numericValue) && numericValue > 0) {
      onChange?.(numericValue);
    }
  };

  return (
    <div className="w-full space-y-3 my-[1.31rem]">
      <Form.Item 
        label={<b className="font-anek">{label}</b>} 
        name="નકલ"
        initialValue={1} 
        rules={[
          {
            required: true,
            message: (
              <span style={{ fontSize: "12px" }}>
                Number of copies is required
              </span>
            ),
          },
          
        ]}
      >
        <Input
          type="number"
          min="1"
          value={value}
          
          onChange={handleInputChange}
          placeholder="કેટલી નકલ"
          className="rounded-md font-anek"
          style={{ width: '200px' }}
        />
      </Form.Item>
    </div>
  );
};

export default function BhagwanMahavirForm() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [copies, setCopies] = useState(1);
  const router = useRouter();
      const [popupVisible, setPopupVisible] = useState(false);
      const [popupStatus, setPopupStatus] = useState("loading");

  const onFinish = async (values) => {
      setPopupVisible(true);
    setPopupStatus("loading");
    // Add copies to the values object
    values.નકલ = copies;

    console.log("Form values: ", values);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://us-central1-adhyatm-parivar-main.cloudfunctions.net/bhagwanMahavirForm",
        values
      );

      if (response.status === 200) {
         setPopupStatus("success");
        console.log("Response sent successfully:", response.data);
        // message.success("Form submitted successfully!");
        form.resetFields();
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
      // router.push("/pages/success");
    }
  };

  const onReset = () => {
    form.resetFields();
    setCopies(1);
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
     <div className="min-h-screen w-full flex flex-col items-center justify-center py-0 md:py-8 bg-gray-100">
           <div className="text-center mb-6 sm:mb-10">
        <div className="inline-block">
          <h1 className="font-anek  text-2xl mt-4 sm:mt-0 sm:pt-3 sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
             ભગવાન મહાવીર
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1  gap-12 sm:gap-0 lg:grid-cols-2">
            {/* Image Section */}
           <div className="h-96 sm:h-[500px] lg:h-auto flex items-center justify-center">
  <div className="h-full w-full">
    <ImageCarousel />
  </div>
</div>

            {/* Form Section */}
            <div className="relative p-6 bg-white">
              <Form form={form} layout="vertical" onFinish={onFinish}>
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
                        className="rounded-md"
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
                      <Input className="rounded-md" placeholder="નામ/नाम" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">અટક/उपनाम</b>}
                      name="उपनाम"
                      rules={[
                        {
                          required: true,
                          message: (
                            <span style={{ fontSize: "12px" }}>
                              Please enter your surname
                            </span>
                          ),
                        },
                      ]}
                    >
                      <Input className="rounded-md" placeholder="અટક/उपनाम" />
                    </Form.Item>
                  </Col>
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
                        {
                          pattern: /^[0-9]{6}$/,
                          message: (
                            <span style={{ fontSize: "12px" }}>
                              Pincode must be exactly 6 digits
                            </span>
                          ),
                        },
                      ]}
                    >
                      <Input
                        className="rounded-md"
                        placeholder="પિનકોડ/पिनकोड"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
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
                      <Select placeholder="રાજ્ય/राज्य" className="rounded-md">
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
                      <Input className="rounded-md" placeholder="શહેર/शहर" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
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
                        className="rounded-md"
                        placeholder="એડ્રેસ/एड्रेस"
                        rows={3}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <CopySelector
                      label="આપને આ પુસ્તકની કેટલી નકલની આવશ્યકતા છે?"
                      value={copies}
                      onChange={setCopies}
                    />
                  </Col>
                  
                </Row>

                <div className="flex mt-6 justify-between items-center">
                  <button
                    className="rounded-sm font-sans uppercase text-sm font-medium px-5 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
                    onClick={onReset}
                  >
                    Reset
                  </button>

                  <button
                    className="rounded-sm text-sm font-sm uppercase font-medium px-5 py-2 bg-green-700 text-white hover:bg-green-600 transition-colors"
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
              {/* <BorderBeam className="hidden md:block" duration={8} size={300} /> */}
            </div>
          </div>
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
