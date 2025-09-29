// import React, { useEffect } from "react";
// import { Modal, Spin } from "antd";
// import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import { usePathname } from "next/navigation";

// const SubmissionPopup = ({ 
//   visible, 
//   status, 
//   onClose, 
//   onSuccess,
//   title = "Form Submission",
//   loadingText = "Submitting...",
//   successText = "Form submitted successfully",
//   errorText = "Failed to submit form. Please try again.",
//   showAutoClose = false,
//   autoCloseDelay = 3000 
// }) => {
  
//   const pathname = usePathname();
//   const isCalendarPage = pathname.includes('calendar')
//   useEffect(() => {
//     if ((status === "success" || status === "error") && visible && showAutoClose) {
//       const timer = setTimeout(() => {
//         onClose();
//       }, autoCloseDelay);
      
//       return () => clearTimeout(timer);
//     }
//   }, [status, visible, onClose, autoCloseDelay, showAutoClose]);

//   const renderContent = () => {
//     switch (status) {
//       case "loading":
//         return (
//           <div className="text-center py-8">
//             <Spin size="large" />
//             <p className="mt-4 text-lg font-medium text-gray-600">{loadingText}</p>
//           </div>
//         );
      
//       case "success":
//         return (
//           <div className="text-center font-anek py-8">
//             <CheckCircleOutlined 
//               style={{ fontSize: '64px', color: '#52c41a' }} 
//             />
//             <h2 className="text-2xl font-semibold mt-4">ધન્યવાદ !</h2>
//         <p className="text-gray-600 font-semibold mt-2">
//           તમારુ ફોર્મ અમને ખુબ જ સારી રીતે મળી ગયું છે. <br /> આભાર !{" "}
//         </p>
//               {isCalendarPage && (
//           <div className="mt-6 font-anek text-center p-4 bg-gray-50 rounded-lg border border-gray-200">
//             <p
//               className="text-gray-800  font-medium text-center text-base"
//               lang="gu"
//             >
//               આરાધના દિન દર્શિની (કેલેન્ડર પંચાંગ વિ.સ. ૨૦૮૨) <br /> 10-10-2025 પછી આવશે, ત્યાં સુધી રાહ જોવા માટે
//               વિનંતી.
//             </p>
//             <p className="text-gray-700  text-sm mt-2 " lang="gu">
//               10-10-2025 પછી જો આપને કેલેન્ડર/પંચાંગ ન મળે તો નીચેના નંબર પર
//               જણાવવા વિનંતી. <br /> ત્યાં સુધી ફોન ન કરવા તથા બીજીવાર ફોર્મ ન
//               ભરવા વિનંતી.
//             </p>
//             <p className="text-gray-700 text-sm mt-2  font-medium" lang="gu">
//               અધ્યાત્મ પરિવાર પુસ્તક વિભાગ <br />
//               7676769600
//             </p>
//           </div>
//         )}
//             <button
//               onClick={onSuccess || onClose}
//               className="mt-6 bg-green-600 cursor-pointer hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
//             >
//               OK
//             </button>
//           </div>
//         );
      
//       case "error":
//         return (
//           <div className="text-center py-8">
//             <CloseCircleOutlined 
//               style={{ fontSize: '64px', color: '#ff4d4f' }} 
//             />
//             <p className="mt-4 text-lg font-medium text-red-600">{errorText}</p>
//             <button
//               onClick={onClose}
//               className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
//             >
//               Try Again
//             </button>
//           </div>
//         );
      
//       default:
//         return null;
//     }
//   };

//   return (
//     <Modal
//       open={visible}
//       footer={null}
//       closable={status !== "loading"}
//       onCancel={status !== "loading" ? onClose : undefined}
//       maskClosable={status !== "loading"}
//       centered
//       width={500}
//       className="submission-popup"
//     >
//       {renderContent()}
//     </Modal>
//   );
// };

// export default SubmissionPopup;



import React, { useEffect, useState } from "react";
import { Modal, Spin, message } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, CopyOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";

const SubmissionPopup = ({ 
  visible, 
  status, 
  onClose, 
  onSuccess,
  title = "Tq",
  desc = "Form Submitted Successfully",
  generatedID = '1',
  loadingText = "Submitting...",
  errorText = "Failed to submit form. Please try again.",
  showAutoClose = false,
  autoCloseDelay = 3000 
}) => {
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();
  const isCalendarPage = pathname.includes('calendar');

  useEffect(() => {
    if ((status === "success" || status === "error") && visible && showAutoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);
      
      return () => clearTimeout(timer);
    }
  }, [status, visible, onClose, autoCloseDelay, showAutoClose]);

  const handleCopyID = async () => {
    try {
      await navigator.clipboard.writeText(generatedID);
      setCopied(true);
      message.success('ID copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      message.error('Failed to copy ID');
    }
  };

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="text-center py-12">
            <Spin size="large" />
            <p className="mt-6 text-lg font-medium text-gray-600">{loadingText}</p>
          </div>
        );
      
      case "success":
        return (
          <div className="text-center font-anek">
            {/* Success Icon with Animation */}
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
              <CheckCircleOutlined 
                style={{ fontSize: '48px', color: '#52c41a' }} 
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">ધન્યવાદ !</h2>
            <p className="text-gray-600 font-semibold text-lg mb-6">{title}</p>

            {/* Registration ID Card */}
            <div className="mb-6 mx-auto max-w-sm">
              {/* <p className="text-sm text-gray-500 mb-2 font-medium"></p> */}
              <div 
                onClick={handleCopyID}
                className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl font-bold text-blue-600 tracking-wider">
                    {generatedID}
                  </span>
                  <div className="flex items-center gap-1 text-blue-500 group-hover:text-blue-700 transition-colors">
                    <CopyOutlined className="text-lg" />
                    <span className="text-xs font-medium">
                      {copied ? 'Copied!' : 'Copy'}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">તમારું રજિસ્ટ્રેશન ID</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 px-4">{desc}</p>

            {/* Calendar Page Specific Info */}
            {isCalendarPage && (
              <div className="mt-6 font-anek text-left p-5 bg-amber-50 rounded-xl border-2 border-amber-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800 font-semibold text-base leading-relaxed" lang="gu">
                    આરાધના દિન દર્શિની (કેલેન્ડર પંચાંગ વિ.સ. ૨૦૮૨) <br /> 
                    <span className="text-amber-700">10-10-2025</span> પછી આવશે, ત્યાં સુધી રાહ જોવા માટે વિનંતી.
                  </p>
                </div>
                
                <div className="pl-5 border-l-2 border-amber-300 ml-1 mt-3 pt-3">
                  <p className="text-gray-700 text-sm leading-relaxed" lang="gu">
                    10-10-2025 પછી જો આપને કેલેન્ડર/પંચાંગ ન મળે તો નીચેના નંબર પર જણાવવા વિનંતી. <br /> 
                    <span className="font-semibold text-red-600">ત્યાં સુધી ફોન ન કરવા તથા બીજીવાર ફોર્મ ન ભરવા વિનંતી.</span>
                  </p>
                  
                  <div className="mt-3 bg-white rounded-lg p-3 border border-amber-200">
                    <p className="text-gray-800 text-sm font-semibold" lang="gu">
                      અધ્યાત્મ પરિવાર પુસ્તક વિભાગ
                    </p>
                    <p className="text-blue-600 text-base font-bold mt-1">
                      📞 7676769600
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={onSuccess || onClose}
              className="mt-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
             Ok
            </button>
          </div>
        );
      
      case "error":
        return (
          <div className="text-center py-8">
            {/* Error Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
              <CloseCircleOutlined 
                style={{ fontSize: '48px', color: '#ff4d4f' }} 
              />
            </div>

            {/* Error Message */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Oops!</h3>
            <p className="text-lg font-medium text-red-600 mb-6 px-4">{errorText}</p>

            {/* Action Button */}
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
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
      width={560}
      className="submission-popup"
      styles={{
        body: { padding: '32px 24px' }
      }}
    >
      {renderContent()}
    </Modal>
  );
};

export default SubmissionPopup;