"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, message, Spin, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { states } from "@/app/data/states";
import TextArea from "antd/es/input/TextArea";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SubmissionPopup from "@/app/_components/SubmissionPopup";
import { TiInfoOutline } from "react-icons/ti";
import StaticSubmissionPopup from "@/app/_components/StaticSubmissionPopup";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = ["/bookimages/calendar-2082-hindi.webp"];

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
            <div className="relative h-full  max-h-[30rem] w-auto max-w-full overflow-hidden">
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
      {/* <button
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
      </button> */}

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      </div> */}
    </div>
  );
};

const CopySelector = ({
  label = "आपको इस कैलेंडर की कितनी प्रतियों की आवश्यकता है?",
  value,
  onChange,
}) => {
  const handleDecrement = () => {
    const newCopies = Math.max(1, value - 1);
    onChange?.(newCopies);
  };

  const handleIncrement = () => {
    const newCopies = value + 1;
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
            disabled={value === 2}
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

export default function Calendar2082Form() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [copies, setCopies] = useState(1);
  const router = useRouter();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupStatus, setPopupStatus] = useState("loading");

  const isOutOfStock = false; // Set to true to indicate out of stock

  const onFinish = async (values) => {
    setPopupVisible(true);
    setPopupStatus("loading");
    values.નકલ = copies;

    console.log("Form values: ", values);

    try {
      setLoading(true);
      const response = await axios.post(
        // "https://us-central1-adhyatm-parivar-main.cloudfunctions.net/calendar2082Form",
        "https://universalform-fahifz22ha-uc.a.run.app?form=calendar2082hindi&slug=calendar-2082-hindi",
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
        <div className="inline-block px-4">
          <h1 className="font-heading  text-2xl mt-4 sm:mt-0 sm:pt-3 sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            आराधना दिन दर्शिनी (कैलेंडर पंचांग वि.सं.२०८२)
          </h1>
          <div className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:gap-0 lg:grid-cols-2">
            {/* Image Section */}
            <div className="flex items-center justify-center h-[31.5rem]">
              <div className="h-full w-full">
                <ImageCarousel />
              </div>
            </div>

            {/* Form Section */}
            <div className="relative p-6 bg-white">
              {isOutOfStock && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30 ">
                  <div className="bg-white flex flex-col items-center justify-center gap-2 text-center p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                    <TiInfoOutline color="orange" size={36} />

                    <p className="text-red-700 font-anek font-medium text-lg leading-relaxed">
                      કૅલેન્ડરનો સ્ટોક પૂર્ણ થયેલ છે,
                      <br />
                      ફિલહાલ નવા બુકિંગ સ્વીકારી શકાશે નહીં.
                    </p>
                  </div>
                </div>
              )}

              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={
                        <b className="font-anek">मोबाइल नंबर/મોબાઇલ નંબર</b>
                      }
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
                        placeholder="मोबाइल नंबर/મોબાઇલ નંબર"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">नाम/નામ</b>}
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
                      <Input className="rounded-md" placeholder="नाम/નામ" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">उपनाम/અટક</b>}
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
                      <Input className="rounded-md" placeholder="उपनाम/અટક" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">पिनकोड/પિનકોડ</b>}
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
                        placeholder="पिनकोड/પિનકોડ"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">राज्य/રાજ્ય</b>}
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
                      <Select placeholder="राज्य/રાજ્ય" className="rounded-md">
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
                      label={<b className="font-anek">शहर/શહેર</b>}
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
                      <Input className="rounded-md" placeholder="शहर/શહેર" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label={<b className="font-anek">एड्रेस/એડ્રેસ</b>}
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
                        placeholder="एड्रेस/એડ્રેસ"
                        rows={3}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <CopySelector
                      label="आपको इस कैलेंडर की कितनी प्रतियों की आवश्यकता है?"
                      value={copies}
                      onChange={setCopies}
                    />
                  </Col>
                </Row>

                <div className="flex mt-6 justify-between items-center">
                  <button
                    className="rounded-sm font-sans text-sm font-medium px-5 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
                    onClick={onReset}
                    disabled={isOutOfStock}
                  >
                    Reset
                  </button>

                  <button
                    className="rounded-sm text-sm cursor-pointer font-sans font-medium px-5 py-2 bg-green-700 text-white hover:bg-green-600 transition-colors"
                    disabled={loading || isOutOfStock}
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
      <StaticSubmissionPopup
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
