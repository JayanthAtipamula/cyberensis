import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { Globe } from './ui/globe';
import { BlurFade } from './ui/blur-fade';
import { AnimatePresence, motion } from 'framer-motion';

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const headlines = [
    "Defend, Detect, and\nRespond",
    "Get insights into the\nmechanism &\nprospects of Cybersecurity"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 bg-white relative overflow-hidden h-screen">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative h-full">
        <div className="flex flex-col md:flex-row items-center h-full">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <BlurFade delay={0.25} inView>
              <div className="h-[220px] sm:h-[200px] md:h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={textIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 whitespace-pre-line"
                  >
                    {headlines[textIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
            </BlurFade>
            
            <BlurFade delay={0.5} inView>
              <p className="text-base sm:text-lg mb-8 text-gray-700 mt-4 sm:mt-0">
                Comprehensive protection for your business with industry-leading penetration testing and security assessment services.
              </p>
            </BlurFade>
            
            <BlurFade delay={0.75} inView>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-[#f28749] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium">
                  Get Started
                </button>
                <button className="border border-[#f28749] text-[#f28749] px-6 py-3 rounded-md hover:bg-[#f28749] hover:bg-opacity-10 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </BlurFade>
          </div>

          <div className="absolute right-0 md:right-[10%] top-0 md:-top-20 h-full w-[800px] md:w-[1000px] -mr-[400px] md:-mr-[300px]">
            <Globe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;