import React from 'react';
import { Check, Phone } from 'lucide-react';

const CyberSecurityBanner = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#002a4e] to-[#004b7d] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/cyber-code-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-2">
            <span className="uppercase tracking-wider text-sm md:text-base font-semibold text-blue-300">CYBER SECURITY</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Redefining Cybersecurity as a Service
          </h2>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl">Simplified solutions for complete Cybersecurity Transformation</span>
            </div>
            
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl">360-degree Managed Security Services</span>
            </div>
            
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl">SOC L1 and L2 support for maximum efficiency</span>
            </div>
            
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl">Regular vulnerability scan and threat detection</span>
            </div>
            
            <div className="flex items-start">
              <Check className="w-6 h-6 text-blue-300 mr-3 mt-1 flex-shrink-0" />
              <span className="text-lg md:text-xl">24/7 Expert Consultation and In-depth Analysis</span>
            </div>
          </div>
          
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Request a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CyberSecurityBanner; 