import React from 'react';

const StatCard = ({ count, label, label1, label2, accentColor }) => {
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
      <div className="relative text-center z-10">
        {/* Large percentage/number */}
        <div className="mb-4">
          <span className="text-5xl font-sans font-bold text-maroon tracking-tight">
            {count}
          </span>
        </div>
                 
        {/* Label */}
        <div className="mb-3">
          <h3 className="text-xl font-heading font-semibold text-maroon">
            {label}
          </h3>
        </div>
                 
        {/* Description */}
        <div>
          <p className="text-maroon font-body text-sm leading-relaxed">
            {label1}
          </p>
        </div>
        <div>
          <p className="text-maroon font-body text-sm leading-relaxed">
            {label2}
          </p>
        </div>
      </div>
    </div>
  );
};

const ModernStatsUI = ({ statsData }) => {
  // Sample data for demonstration
  const defaultData = [
    {
      count: "85%",
      label: "Customer Satisfaction",
      label1: "Based on recent surveys",
      label2: "Across all departments",
      color: "text-blue-500"
    },
    {
      count: "2.4k",
      label: "Active Users",
      label1: "Monthly active users",
      label2: "Growing steadily",
      color: "text-green-500"
    },
    {
      count: "99.9%",
      label: "Uptime",
      label1: "System reliability",
      label2: "Last 12 months",
      color: "text-purple-500"
    }
  ];

  const data = statsData || defaultData;

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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernStatsUI;