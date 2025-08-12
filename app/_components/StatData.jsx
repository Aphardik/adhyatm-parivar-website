import React from 'react';

const StatCard = ({ count, label, label1, label2, accentColor,textColor }) => {
  return (
    <div className="relative bg-white font-heading rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-64 flex flex-col justify-center overflow-hidden">
      {/* Hexagonal beehive background pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id={`hexPattern${accentColor.replace(/[^a-zA-Z0-9]/g, '')}`} x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              {/* Central hexagon */}
              <path d="M30 4 L45 13 L45 30 L30 39 L15 30 L15 13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Offset row hexagons */}
              <path d="M0 30 L15 39 L15 56 L0 65 L-15 56 L-15 39 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M60 30 L75 39 L75 56 L60 65 L45 56 L45 39 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Top row partial hexagons */}
              <path d="M-15 -22 L0 -13 L0 4 L-15 13 L-30 4 L-30 -13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M45 -22 L60 -13 L60 4 L45 13 L30 4 L30 -13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Bottom row partial hexagons */}
              <path d="M-15 56 L0 65 L0 82 L-15 91 L-30 82 L-30 65 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M45 56 L60 65 L60 82 L45 91 L30 82 L30 65 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
            </pattern>
          </defs>
          
          {/* Apply the hexagonal pattern to fill the entire background */}
          <rect width="100%" height="100%" fill={`url(#hexPattern${accentColor.replace(/[^a-zA-Z0-9]/g, '')})`} />
        </svg>
      </div>
             
      {/* Main content */}
      <div className={`relative text-${textColor} text-center z-10`}>
        {/* Large percentage/number */}
        <div className="mb-4">
          <span className="text-5xl font-sans font-bold  tracking-tight">
            {count}
          </span>
        </div>
                 
        {/* Label */}
        <div className="mb-3">
          <h3 className="text-xl font-heading font-semibold ">
            {label}
          </h3>
        </div>
                 
        {/* Description */}
        <div>
          <p className=" font-body text-sm leading-relaxed">
            {label1}
          </p>
        </div>
        <div>
          <p className="font-body text-sm leading-relaxed">
            {label2}
          </p>
        </div>
      </div>
    </div>
  );
};

const ModernStatsUI = ({ statsData,textColor }) => {
 
  const data = statsData;
  // console.log(statsData,accentColor,"textColor")

  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Stats flex container */}
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((stat, index) => (
            <div 
              key={index} 
              className="w-full sm:w-80 md:w-72 lg:w-80 xl:w-96 flex-shrink-0"
            >
              <StatCard
                count={stat.count}
                label={stat.label}
                label1={stat.label1}
                label2={stat.label2}
                accentColor={stat.color}
                textColor={textColor}
              />
            </div>
          ))}
        </div>
        {/* Optional: Add a footer or additional content here */}
        <div className="mt-8 text-center">
          <p className="text-sm  font-sans text-gray-500">
            All statistics are based on the latest data available as of June 2025.
          </p>
      </div>
      </div>
    </div>
  );
};

export default ModernStatsUI;