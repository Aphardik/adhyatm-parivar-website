import React from "react";

const Page = () => {
  return (
    <div className="bg-whitey text-maroon font-body">
      {/* Header */}
      <header className="bg-lightpink">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon mb-1 sm:mb-2">
                जिनप्रतिमा आशातरा निवारण
              </h1>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-semibold">
                बिना अंजन वाली प्रतिमाओं की योग्य व्यवस्था
              </p>
              <p className="text-sm text-center sm:text-base lg:text-lg text-content font-medium">
                 कार्य प्रारंभ : वि.सं. २०७६
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What is This Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-whitey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


          <div className="p-4 mx-auto max-w-4xl sm:p-6">
            <p className="text-content text-lg lg:text-xl leading-relaxed text-center">
              श्री षोडशक ग्रंथ षो.८गा.१ में पूज्य हरिभद्रसूरि महाराजा का वचन है
              कि :‘प्रतिमा बनाने के बाद मात्र दस दिनों में उसका अंजन विधान होना
              चाहिए।’सद्गुरु के मुख से ऐसा सुनने के बाद आराधक आत्मा को अत्यंत
              चिंता होती है कि पूर्व में नासमझी में घर में 'गिफ्ट' के रूप में
              स्वीकार की हुई पाषाण, धातु, फाइबर की प्रतिमाजी का क्या करें?
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-8 lg:mb-12">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-light-bg font-heading text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            समाधान
          </h3>
        </div> */}

        <div className="py-8 flex flex-col sm:flex-row gap-6 ">
          <div className=" bg-lightyellow flex items-center justify-center border-l-4  border-darkyellow p-4 mx-auto max-w-4xl sm:p-6  rounded-2xl ">
            <div className="flex items-center justify-center space-x-4">
              <p className="text-maroon text-lg lg:text-xl leading-relaxed font-medium">
                इसके समाधान के लिए उनकी आशातना न हो उस प्रकार उनकी व्यवस्था के
                लिए अध्यात्म परिवार सज्ज है।
              </p>
            </div>
          </div>
          <div>
            <img
              src="/jinmurti/jinpratima-aashatana-nivaran/img-1.27.png"
              alt="adhyatm parivar"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
