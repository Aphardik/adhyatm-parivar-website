import BottomRighSvg from '@/app/_components/BottomRighSvg'
import TopLeftSvg from '@/app/_components/TopLeftSvg'
import React from 'react'

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl font-body bg-whitey">
      <header className="bg-lightblue">
        <div className="mx-auto p-4 sm:p-6 lg:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl font-heading font-bold text-darkblue"> जिनालय तथा गृहजिनालय के लिए संगमरमर के पत्थर की घड़ाई</h1>
              <p className="text-sm sm:text-base text-center lg:text-lg text-darkblue font-medium mb-1 sm:mb-2">कार्य प्रारंभ : वि.सं. २०७७</p>
            </div>
          </div>
        </div>
      </header>

<div className="px-2 sm:px-6">
      <section className="py-4 sm:py-6 lg:py-8 lg:px-0">
        <div className="relative rounded-sm p-8 sm:p-12 bg-shadeblue">
           <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <TopLeftSvg />
                </div>
                 <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                  <BottomRighSvg />
                </div>
          <p className="text-xl leading-relaxed text-darkblue">
           अध्यात्म शिल्पशाला में हो रही जिनालय के पत्थरों की घड़ाई की बात आपने पढ़ी और निहारी। इस कार्य के दरमियान ही वहां गृहजिनालय के योग्य पत्थरों को अलग से तराशा जाता है। जिनमें से गृहजिनालय बनाने की भावना रखने वाले सुश्रावकों की भावना अनुसार हृदय आह्लादक कोरणी वाली सुंदर देरियां तैयार करके उपलब्ध करवाई जाती हैं।
          </p>
        </div>
      </section>

                <div className="text-center my-8 lg:mt-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-heading bg-lightblue text-darkblue inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-sm">
            अध्यात्म परिवार द्वारा निर्माण की हुई कुछ गृहजिनालय की मोहक देरियां।
            </h2>
          </div>

      <section className="my-12">
        <div className="grid md:grid-cols-1 gap-8 mb-12 items-center">
          <div className="bg-lighten-bg rounded-lg p-6">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className='p-8 bg-shadeblue rounded-sm'>
              <img 
                src="/jinmandir/patthar-ghadayi/img-2.27.png" 
                alt="Detailed Idol" 
                className="w-full object-contain " 
              />
              </div>
              <div className='p-8 bg-shadeblue rounded-sm'>
              <img 
                src="/jinmandir/patthar-ghadayi/img-2.28.png" 
                alt="Symbol" 
                className="w-full object-contain " 
              />
              </div>
              <div className='p-8 bg-shadeblue rounded-sm'>
              <img 
                src="/jinmandir/patthar-ghadayi/img-2.29.png" 
                alt="Design" 
                className="w-full object-contain " 
              />
              </div>
            </div>

          </div>

        </div>
      </section>

    
    </div>
    </div>
  )
}

export default Page