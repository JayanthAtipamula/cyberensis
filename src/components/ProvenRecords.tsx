import React, { useState, useEffect, useRef } from 'react';
import { Globe, Server, Smartphone, Code } from 'lucide-react';

const Counter = ({ end, duration = 2000, label, icon }) => {
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
    <div className="text-center" ref={countRef}>
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-[#f28749] mb-2">{count}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
};

const ProvenRecords = () => {
  const records = [
    { count: 124, label: "Web Applications Secured", icon: <Globe className="h-12 w-12 text-[#f28749]" /> },
    { count: 206, label: "Network IP's Secured", icon: <Server className="h-12 w-12 text-[#f28749]" /> },
    { count: 89, label: "Mobile Apps Secured", icon: <Smartphone className="h-12 w-12 text-[#f28749]" /> },
    { count: 172, label: "Secure Web Developments", icon: <Code className="h-12 w-12 text-[#f28749]" /> }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Proven Track Record</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for themselves. We've helped hundreds of businesses strengthen their security posture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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