// import React from 'react';

// const StatCard = ({ count, label, label1,label2, accentColor }) => {
//   return (
//     <div className="relative bg-white font-heading rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
//       {/* Top-left geometric squares */}
//       <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="0" y="0" width="18" height="18" fill="currentColor" className={accentColor} rx="3"/>
//           <rect x="22" y="0" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
//           <rect x="0" y="22" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
//           <rect x="16" y="16" width="9" height="9" fill="currentColor" className={accentColor} rx="1"/>
//         </svg>
//       </div>
      
//       {/* Bottom-right geometric squares */}
//       <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
//         <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="42" y="42" width="18" height="18" fill="currentColor" className={accentColor} rx="3"/>
//           <rect x="26" y="48" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
//           <rect x="48" y="26" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
//           <rect x="35" y="35" width="9" height="9" fill="currentColor" className={accentColor} rx="1"/>
//         </svg>
//       </div>
      
//       {/* Main content */}
//       <div className="relative text-center z-10">
//         {/* Large percentage/number */}
//         <div className="mb-4">
//           <span className="text-5xl font-sans font-bold text-maroon tracking-tight">
//             {count}
//           </span>
//         </div>
        
//         {/* Label */}
//         <div className="mb-3">
//           <h3 className="text-xl font-heading font-semibold text-maroon">
//             {label}
//           </h3>
//         </div>
        
//         {/* Description */}
//         <div>
//           <p className="text-gray-600 font-body text-sm leading-relaxed">
//             {label1}
//           </p>
//         </div>
//         <div>
//           <p className="text-gray-600 font-body text-sm leading-relaxed">
//             {label2}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ModernStatsUI = ({ statsData }) => {
 

//   const data = statsData;

//   return (
//     <div className=" bg-gray-50 py-8 sm:py-12 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Stats grid */}
//         <div className={`grid items-center grid-cols-1 md:grid-cols-2 ${data.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
//           {data.map((stat, index) => (
//             <StatCard
//               key={index}
//               count={stat.count}
//               label={stat.label}
//               label1={stat.label1}
//               label2={stat.label2}
//               accentColor={stat.color}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernStatsUI;

import React from 'react';

const StatCard = ({ count, label, label1, label2, accentColor }) => {
  return (
    <div className="relative bg-white font-heading rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-64 flex flex-col justify-center">
      {/* Top-left geometric squares */}
      <div className="absolute top-0 left-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="18" height="18" fill="currentColor" className={accentColor} rx="3"/>
          <rect x="22" y="0" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
          <rect x="0" y="22" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
          <rect x="16" y="16" width="9" height="9" fill="currentColor" className={accentColor} rx="1"/>
        </svg>
      </div>
             
      {/* Bottom-right geometric squares */}
      <div className="absolute bottom-0 right-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="42" y="42" width="18" height="18" fill="currentColor" className={accentColor} rx="3"/>
          <rect x="26" y="48" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
          <rect x="48" y="26" width="12" height="12" fill="currentColor" className={accentColor} rx="2"/>
          <rect x="35" y="35" width="9" height="9" fill="currentColor" className={accentColor} rx="1"/>
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
  const data = statsData || [
    {
      count: "85%",
      label: "Customer Satisfaction",
      label1: "Based on recent surveys",
      label2: "Continuously improving",
      color: "text-blue-500"
    },
    {
      count: "1.2M+",
      label: "Active Users",
      label1: "Growing community",
      label2: "Worldwide reach",
      color: "text-green-500"
    },
    {
      count: "99.9%",
      label: "Uptime",
      label1: "Reliable service",
      label2: "24/7 monitoring",
      color: "text-purple-500"
    },
    {
      count: "150+",
      label: "Countries",
      label1: "Global presence",
      label2: "Expanding daily",
      color: "text-orange-500"
    },
    {
      count: "24/7",
      label: "Support",
      label1: "Always available",
      label2: "Expert assistance",
      color: "text-red-500"
    },
    {
      count: "4.8★",
      label: "Rating",
      label1: "Highly rated",
      label2: "User reviews",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4">
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