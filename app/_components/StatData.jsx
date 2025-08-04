import React from 'react';

const CounterCard = ({ count, label,label1,label2, color }) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`relative w-32 h-40 ${color} rounded-t-full flex flex-col items-center justify-center text-white shadow-lg`}
      >
        <div className="text-3xl font-bold mb-1">
          {count}
        </div>
        <div className="text-base font-medium text-center px-2 uppercase">
          {label}
        </div>
        {label1 && <div className="text-base font-medium text-center px-2 uppercase">
          {label1}
        </div>}
        {label2 && <div className="text-base font-medium text-center px-2 uppercase">
          {label2}
        </div>}
      </div>
    </div>
  );
};

const CounterStatsUI = ({statsData}) => {
 

  return (
    <div className="flex flex-col items-center justify-center p-8">

      <div className={`grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-${statsData.length} gap-8 mb-16`}>
        {statsData.map((stat, index) => (
          <CounterCard
            key={index}
            count={stat.count}
            label={stat.label}
            label1={stat.label1}
            label2={stat.label2}
            color={stat.color}
          />
        ))}
      </div>

     
    </div>
  );
};

export default CounterStatsUI;