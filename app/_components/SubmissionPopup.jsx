import React, { useEffect } from "react";
import { Modal, Spin } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const SubmissionPopup = ({ 
  visible, 
  status, 
  onClose, 
  onSuccess,
  title = "Form Submission",
  loadingText = "Submitting...",
  successText = "Form submitted successfully",
  errorText = "Failed to submit form. Please try again.",
  showAutoClose = false,
  autoCloseDelay = 3000 
}) => {
  
  const pathname = usePathname();
  const isCalendarPage = pathname.includes('calendar')
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
            <p className="mt-4 text-lg font-medium text-gray-600">{loadingText}</p>
          </div>
        );
      
      case "success":
        return (
          <div className="text-center font-anek py-8">
            <CheckCircleOutlined 
              style={{ fontSize: '64px', color: '#52c41a' }} 
            />
            <h2 className="text-2xl font-semibold mt-4">ધન્યવાદ !</h2>
        <p className="text-gray-600 font-semibold mt-2">
          તમારુ ફોર્મ અમને ખુબ જ સારી રીતે મળી ગયું છે. <br /> આભાર !{" "}
        </p>
              {isCalendarPage && (
          <div className="mt-6 font-anek text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p
              className="text-gray-800  font-medium text-center text-base"
              lang="gu"
            >
              આરાધના દિન દર્શિની (કેલેન્ડર પંચાંગ વિ.સ. ૨૦૮૨) <br /> 10-10-2025 પછી આવશે, ત્યાં સુધી રાહ જોવા માટે
              વિનંતી.
            </p>
            <p className="text-gray-700  text-sm mt-2 " lang="gu">
              10-10-2025 પછી જો આપને કેલેન્ડર/પંચાંગ ન મળે તો નીચેના નંબર પર
              જણાવવા વિનંતી. <br /> ત્યાં સુધી ફોન ન કરવા તથા બીજીવાર ફોર્મ ન
              ભરવા વિનંતી.
            </p>
            <p className="text-gray-700 text-sm mt-2  font-medium" lang="gu">
              અધ્યાત્મ પરિવાર પુસ્તક વિભાગ <br />
              7676769600
            </p>
          </div>
        )}
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
      width={500}
      className="submission-popup"
    >
      {renderContent()}
    </Modal>
  );
};

export default SubmissionPopup;