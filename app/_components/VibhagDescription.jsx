import React from 'react';

const VibhagDescription = () => {
  const vibhags = [
    {
      title: "जिनमूर्ति विभाग",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ab magni commodi itaque voluptatibus blanditiis deserunt cum fugit quisquam earum?",
      icon: "/adhyatm-vibhag.jpg"
    },
    {
      title: "जिनमंदिर विभाग", 
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ab magni commodi itaque voluptatibus blanditiis deserunt cum fugit quisquam earum?",
      icon: "/jinmandir-vibhag.jpg"
    },
    {
      title: "जिनागम विभाग",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ab magni commodi itaque voluptatibus blanditiis deserunt cum fugit quisquam earum?",
      icon: "/jinagam-vibhag.jpg"
    },
    {
      title: "अध्यात्म विभाग",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ab magni commodi itaque voluptatibus blanditiis deserunt cum fugit quisquam earum?",
      icon: "/adhyatm-vibhag.jpg"
    }
  ];

  return (
    <div className="font-body bg-background sm:px-4">
      <div className="max-w-5xl pt-20 mx-auto">
        {/* Desktop and Tablet View */}
        <div className="hidden md:block">
          <div className="space-y-16  p-8 md:p-16">
            {vibhags.map((vibhag, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } gap-8 lg:gap-16`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <div className="inline-block">
                    <h3 className="text-2xl md:text-3xl font-semibold text-heading mb-4 font-heading">
                      {vibhag.title}
                    </h3>
                    <p className="text-content text-base md:text-lg max-w-lg">
                      {vibhag.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-light-bg rounded-full flex items-center justify-center">
                    <img className='w-[5.5rem] md:w-[7.5rem] rounded-full h-[5.5rem] md:h-[7.5rem] object-cover' src={vibhag.icon} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View - Card Layout */}
        <div className="md:hidden">
          <div className="grid gap-6">
            {vibhags.map((vibhag, index) => (
              <div
                key={index}
                className="bg-background  p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-lighten-bg rounded-full flex items-center justify-center">
                      <img className='w-16 h-16 rounded-full object-cover' src={vibhag.icon} alt="" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-heading mb-2 font-heading">
                      {vibhag.title}
                    </h3>
                    <p className="text-content text-sm leading-relaxed">
                      {vibhag.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VibhagDescription;