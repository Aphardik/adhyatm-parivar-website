import React from "react";
import { Modal, Spin } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const SubmissionPopup = ({ 
  visible, 
  status, 
  onClose, 
  onSuccess,
  title = "Form Submission",
  loadingText = "Submitting...",
  successText = "Form submitted successfully!",
  errorText = "Failed to submit form. Please try again.",
  showAutoClose = false,
  autoCloseDelay = 3000 
}) => {
  
  // Auto close on success or error after specified delay (only if showAutoClose is true)
  React.useEffect(() => {
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
            <p className="mt-4 text-lg font-medium text-gray-600">{loadingText}</p>
          </div>
        );
      
      case "success":
        return (
          <div className="text-center py-8">
            <CheckCircleOutlined 
              style={{ fontSize: '64px', color: '#52c41a' }} 
            />
            <p className="mt-4 font-sans text-lg font-medium text-green-600">{successText}</p>
            <button
              onClick={onSuccess || onClose}
              className="mt-6 bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
            >
              OK
            </button>
          </div>
        );
      
      case "error":
        return (
          <div className="text-center py-8">
            <CloseCircleOutlined 
              style={{ fontSize: '64px', color: '#ff4d4f' }} 
            />
            <p className="mt-4 text-lg font-medium text-red-600">{errorText}</p>
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
      width={400}
      className="submission-popup"
    >
      {renderContent()}
    </Modal>
  );
};

export default SubmissionPopup;