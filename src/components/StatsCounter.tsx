import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  number: number;
  label: string;
  icon: React.ReactNode;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, icon }) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = 30; // Update every 30ms
    let timer: NodeJS.Timeout;

    if (inView) {
      const steps = Math.ceil(duration / increment);
      const step = number / steps;

      timer = setInterval(() => {
        start = Math.min(start + step, number);
        setCount(Math.floor(start));

        if (start >= number) {
          clearInterval(timer);
        }
      }, increment);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [inView, number]);

  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center sm:items-start transition-transform duration-300 ease-in-out ${isHovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mobile layout (vertical) */}
      <div className="flex flex-col items-center sm:hidden">
        <div className="bg-white bg-opacity-20 rounded-full p-3 mb-3">
          <div className="text-white w-10 h-10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h3 className="text-4xl font-extrabold text-white mb-2">{count}+</h3>
        <p className="text-sm text-white font-medium text-center">{label}</p>
      </div>
      
      {/* Tablet and desktop layout (horizontal) */}
      <div className="hidden sm:flex sm:flex-col">
        <div className="flex items-center mb-3">
          <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
            <div className="text-white w-9 h-9 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">{count}+</h3>
        </div>
        <p className="text-base md:text-lg text-white font-medium pl-2">{label}</p>
      </div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#f28749] to-[#e9446a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">
          <StatItem 
            number={37} 
            label="Web Applications Secured" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            } 
          />
          <StatItem 
            number={62} 
            label="Network IP's Secured" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z M8 4v4M16 4v4M4 11h16" />
              </svg>
            } 
          />
          <StatItem 
            number={27} 
            label="Mobile Apps Secured" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            } 
          />
          <StatItem 
            number={52} 
            label="Secure Web Development" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            } 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter; 