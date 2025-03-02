import React, { useEffect, useState } from 'react';
import { Shield, Lock, ArrowRight } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';
import ParticlesBackground from './ui/ParticlesBackground';
import { Link } from 'react-router-dom';

const FallbackComponent = () => (
  <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-full w-full rounded-full" />
);

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const headlines = [
    "Defend, Detect, and\nRespond",
    "Get insights into the mechanism &\nprospects of Cyber Security"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // First hide the current text
      setIsVisible(false);
      
      // After the text is hidden, change it and show the new text
      setTimeout(() => {
        setTextIndex((prev) => (prev === 0 ? 1 : 0));
        setIsVisible(true);
      }, 600); // Wait for fade-out to complete
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-24 md:pt-40 pb-20 bg-gradient-to-r from-[#002a4e] to-[#004b7d] text-white relative overflow-hidden h-screen mt-16 md:mt-0">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ErrorBoundary FallbackComponent={FallbackComponent}>
          <ParticlesBackground />
        </ErrorBoundary>
        {/* Semi-transparent overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002a4e]/30 to-[#004b7d]/30"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative h-full">
        <div className="flex flex-col md:flex-row items-center justify-center h-full">
          <div className="md:w-3/4 lg:w-2/3 text-center md:text-left z-10">
            <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">
              <div className="h-[220px] sm:h-[200px] md:h-[220px] flex items-start">
                <h1 
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 whitespace-pre-line transition-all duration-600 ease-in-out ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform -translate-y-8'
                  }`}
                >
                  {headlines[textIndex]}
                </h1>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
              <p className="text-lg sm:text-xl mb-8 text-gray-100 max-w-2xl mx-auto md:mx-0">
                Protecting Businesses with Cutting-Edge Security Solutions
              </p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="450" data-aos-duration="800">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
                <div className="flex items-center">
                  <div className="bg-blue-500/20 rounded-full p-2 mr-3">
                    <Shield className="w-5 h-5 text-blue-300" />
                  </div>
                  <span>Advanced Threat Protection</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500/20 rounded-full p-2 mr-3">
                    <Lock className="w-5 h-5 text-blue-300" />
                  </div>
                  <span>24/7 Security Monitoring</span>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="550" data-aos-duration="800">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link to="/contact" className="bg-[#f28749] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium inline-flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/services" className="border border-[#f28749] text-[#f28749] px-6 py-3 rounded-md hover:bg-[#f28749] hover:bg-opacity-10 transition-colors font-medium inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-blue-300 opacity-20 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-blue-300 opacity-20 rounded-br-3xl"></div>
    </section>
  );
};

export default HeroSection;