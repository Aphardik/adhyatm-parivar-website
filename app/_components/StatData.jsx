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
    <div className="relative bg-white font-heading rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
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
          <p className="text-maroon font-body text-base leading-relaxed">
            {label1}
          </p>
        </div>
        <div>
          <p className="text-maroon font-body text-base leading-relaxed">
            {label2}
          </p>
        </div>
      </div>
    </div>
  );
};

const ModernStatsUI = ({ statsData }) => {
  const data = statsData;
  
  // Special handling for 5 items
  if (data.length === 5) {
    const firstRow = data.slice(0, 3);
    const secondRow = data.slice(3, 5);
    
    return (
      <div className="bg-gray-50 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {firstRow.map((stat, index) => (
              <StatCard
                key={index}
                count={stat.count}
                label={stat.label}
                label1={stat.label1}
                label2={stat.label2}
                accentColor={stat.color}
              />
            ))}
          </div>
          
          {/* Second row - 2 items centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {secondRow.map((stat, index) => (
                <StatCard
                  key={index + 3}
                  count={stat.count}
                  label={stat.label}
                  label1={stat.label1}
                  label2={stat.label2}
                  accentColor={stat.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Default layout for other numbers of items
  return (
    <div className="bg-gray-50 py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Stats grid */}
        <div className={`grid items-center grid-cols-1 md:grid-cols-2 ${data.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
          {data.map((stat, index) => (
            <StatCard
              key={index}
              count={stat.count}
              label={stat.label}
              label1={stat.label1}
              label2={stat.label2}
              accentColor={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernStatsUI;