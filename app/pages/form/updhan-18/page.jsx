"use client"

export default function Updhan18() {
  const handleHindiRegister = () => {
    window.open('https://zfrmz.in/iq9Ay2s1cfeD6VP6Xieg?zf_lang=hi', '_blank');
  };

  const handleGujaratiRegister = () => {
    window.open('https://zfrmz.in/iq9Ay2s1cfeD6VP6Xieg', '_blank');
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform  transition-transform duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-anek font-bold text-gray-800 mb-8">
            આધ્યાત્મિક ઉપધાન તપ - ભાવનાપત્ર
          </h1>
          
          <div className="space-y-4">
            <button
              onClick={handleHindiRegister}
              className="w-full bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl"
            >
              Register for Hindi
              <span className="block text-sm font-heading mt-1 opacity-90">हिंदी के लिए पंजीकरण</span>
            </button>
            
            <button
              onClick={handleGujaratiRegister}
              className="w-full bg-gradient-to-r cursor-pointer from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform  shadow-lg hover:shadow-xl"
            >
              Register for Gujarati
              <span className="block font-anek text-sm mt-1 opacity-90">ગુજરાતી માટે નોંધણી</span>
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            Select your preferred language for registration
          </div>
        </div>
      </div>
    </div>
  );
}