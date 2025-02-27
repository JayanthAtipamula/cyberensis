import React from 'react';
import { Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Securing Your Digital Future with Advanced Cybersecurity
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Comprehensive protection for your business with industry-leading penetration testing and security assessment services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#f28749] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium">
                Get Started
              </button>
              <button className="border border-[#f28749] text-[#f28749] px-6 py-3 rounded-md hover:bg-[#f28749] hover:bg-opacity-10 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Cybersecurity Protection" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;