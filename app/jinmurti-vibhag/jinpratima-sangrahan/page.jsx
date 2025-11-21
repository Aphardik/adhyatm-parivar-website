import CallToActionButton from "@/app/_components/CallToActionButton";
import HeaderSvg from "@/app/_components/HeaderSvg";
import React from "react";

export const metadata = {
  title: "प्राचीन जिनप्रतिमा संग्रहण | जिनप्रतिमा सुरक्षा ",
  description: "",
};

const Page = () => {
  return (
    <div className="max-w-7xl bg-whitey text-maroon font-body">
      {/* Header */}
      <header className="bg-lightpink relative flex items-center justify-center h-40">
        <HeaderSvg />
        <div className="mx-auto p-4 sm:p-6 lg:py-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-maroon">
                प्राचीन जिनप्रतिमा संग्रहण
              </h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-maroon font-medium">
                कार्य आरंभ : वि.सं. २०६८
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="px-2 sm:px-4">
        <section className="py-6 sm:py-8 lg:py-8 bg-whitey">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-4 sm:p-6">
              <p className="text-maroon text-lg lg:text-xl leading-relaxed text-center">
                जमीन से निकलने वाली प्रतिमाजी सरकारी म्यूज़ियम आदि अयोग्य
                स्थानों पर न चली जाएं अपितु योग्य स्थान पर उनकी पूजा हो सके,
                इसलिए उन प्रतिमाजी का शुद्धिकरण, यदि जरूरत हो तो लेप आदि करके
                योग्य स्थान पर विराजमान करना। यह कार्य सुचारू रूप से चल रहा है।
              </p>
            </div>
          </div>

          <section className="py-6 sm:py-8 lg:py-8">
            <div className="bg-lightyellow rounded-sm  p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
                <div className="w-3 h-3 bg-darkpink rounded-full mx-3"></div>
                <div className="w-12 h-1 bg-darkpink rounded-sm"></div>
              </div>
              <p className="text-center font-semibold text-maroon leading-relaxed text-lg sm:text-xl">
                साथ-साथ निर्जन बन गए गांवों आदि में अपूज रह जाने की संभावना वाले
                जिनबिंबों की योग्य स्थान पर पूजा हो सके, इसमें भी अध्यात्म
                परिवार 'सेतु' बन रहा है।
              </p>
            </div>
          </section>
        </section>

        {/* Success Story Section */}
        <section className="py-6 sm:py-8 lg:py-8 bg-whitey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-heading bg-lightpink text-maroon inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
                सफलता की कहानी
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 sm:p-10 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0  rounded-2xl"></div>
                  <div className="relative bg-lightyellow border-l-4 border-darkyellow rounded-2xl shadow-lg p-8 lg:p-16">
                    <div className="flex items-start space-x-4">
                      <p className="text-maroon text-lg lg:text-xl leading-relaxed font-medium">
                        डीसा के नजदीक खेत में से निकले अतिप्राचीन आदिनाथ दादा आज
                        श्री शांतिकनक जैन संघ, नानपुरा-सूरत जिनालय के महाराजा
                        बनकर शोभायमान हैं।
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustrative Image */}
              <div className="order-1 sm:p-10 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-lightyellow rounded-3xl shadow-2xl overflow-hidden border border-darkyellow transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/jinmurti/jinpratima-sangrahan/img-1.25.webp"
                      alt="Ancient Adinath deity now enshrined at Shri Shantikanak Jain Sangh, Nanpura-Surat"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/5 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 sm:py-0 py-12 items-center">
              {/* Illustrative Image First (on large screens) */}
              <div className="order-1 lg:order-1 sm:p-10">
                <div className="relative">
                  <div className="absolute inset-0  rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-lightpink rounded-3xl shadow-2xl overflow-hidden border border-secondary-color/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img
                      src="/jinmurti/jinpratima-sangrahan/img-1.26.webp"
                      alt="Another success story"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-heading/5 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 lg:order-2 sm:p-10">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl"></div>
                  <div className="relative bg-lightyellow border-l-4 border-darkyellow rounded-2xl shadow-lg p-8 lg:p-16">
                    <div className="flex items-start space-x-4">
                      <p className="text-maroon text-lg lg:text-xl leading-relaxed font-medium">
                        यह है उत्तर प्रदेश स्थित धर्मनाथ दादा की चार कल्याणक
                        भूमि रतनपुरी (रानोही) के जिनालय में मूलनायक के पद पर
                        शोभायमान <br />
                        <span className="font-bold text-darkpink">
                          {" "}
                          अतिप्राचीन धर्मनाथ दादा!{" "}
                        </span>
                        यह प्रतिमाजी हिम्मतनगर, गुजरात के समीप के खेत से प्राप्त
                        हुई थी।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CallToActionButton
        heading="आपको ऐसी प्रतिमाओं की जानकारी है?"
        content="हम शुद्धिकरण और योग्य स्थान पर विराजमान करने में सहयोग कर सकते हैं।"
        id="jinpratima-suraksha-cta"
        href={
          "https://wa.me/918448444050"
        }
      />
    </div>
  );
};

export default Page;
