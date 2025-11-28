import React, { useEffect } from "react";
import { Modal, Spin } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const StaticSubmissionPopup = ({ 
  visible, 
  status, 
  onClose, 
  onSuccess,
  loadingText = "Submitting...",
  errorText = "Failed to submit form. Please try again.",
  showAutoClose = false,
  autoCloseDelay = 3000 
}) => {

  const pathname = usePathname();

  // Detect which calendar page
  const isCalendarGujarati = pathname.includes("calendarhshsh");
  const isCalendarHindi = pathname.includes("calendar-2082-hindi");

  // Success message selection
  const successMessage = isCalendarHindi
    ? {
        title: "धन्यवाद!",
        text: "आपका फॉर्म सफलतापूर्वक प्राप्त हो गया है।"
      }
    : {
        title: "ધન્યવાદ !",
        text: "તમારું ફોર્મ સફળતાપૂર્વક મળી ગયું છે."
      };

  useEffect(() => {
    if ((status === "success" || status === "error") && visible && showAutoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [status, visible, onClose, autoCloseDelay, showAutoClose]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="text-center py-8">
            <Spin size="large" />
            <p className="mt-4 text-lg font-medium text-gray-600">
              {loadingText}
            </p>
          </div>
        );

      case "success":
        return (
          <div className="text-center font-anek py-8">
            <CheckCircleOutlined style={{ fontSize: 64, color: "#52c41a" }} />
            <h2 className="text-2xl font-semibold mt-4">
              {successMessage.title}
            </h2>
            <p className="text-gray-600 font-semibold mt-2">
              {successMessage.text}
            </p>

            <button
              onClick={onSuccess || onClose}
              className="mt-6 bg-green-600 text-xl hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              OK
            </button>
          </div>
        );

      case "error":
        return (
          <div className="text-center py-8">
            <CloseCircleOutlined style={{ fontSize: 64, color: "#ff4d4f" }} />
            <p className="mt-4 text-lg font-medium text-red-600">
              {errorText}
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      open={visible}
      footer={null}
      closable={status !== "loading"}
      onCancel={status !== "loading" ? onClose : undefined}
      maskClosable={status !== "loading"}
      centered
      width={500}
      className="submission-popup"
    >
      {renderContent()}
    </Modal>
  );
};

export default StaticSubmissionPopup;