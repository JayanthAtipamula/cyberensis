import React, { useState, useEffect, useRef } from 'react';
import { CheckSquare, Award, Users, UserPlus } from 'lucide-react';

const Counter = ({ end, duration = 2000, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime;
          let animationFrameId;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            const currentCount = Math.floor(percentage * end);
            
            setCount(currentCount);

            if (percentage < 1) {
              animationFrameId = requestAnimationFrame(animate);
            }
          };

          animationFrameId = requestAnimationFrame(animate);

          return () => {
            cancelAnimationFrame(animationFrameId);
          };
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center p-6" ref={countRef}>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center">
          <Icon className="w-12 h-12 text-[#f28749]" />
        </div>
      </div>
      <div className="text-6xl font-bold mb-4 text-gray-800" style={{ 
        WebkitTextStroke: '1px currentColor',
        WebkitTextFillColor: 'white'
      }}>
        {count}+
      </div>
      <div className="text-gray-700 text-lg">{label}</div>
    </div>
  );
};

const ProvenRecords = () => {
  const records = [
    { count: 6000, label: "Projects completed", icon: CheckSquare },
    { count: 10, label: "Years of Journey", icon: Award },
    { count: 5000, label: "Satisfied Clients", icon: Users },
    { count: 20, label: "Professional Team", icon: UserPlus }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">PROven Records</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {records.map((record, index) => (
            <Counter 
              key={index} 
              end={record.count} 
              label={record.label} 
              icon={record.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenRecords;