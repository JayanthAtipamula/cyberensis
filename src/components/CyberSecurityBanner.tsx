import React from 'react';
import { Check, Phone } from 'lucide-react';

const CyberSecurityBanner = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <section 
        data-aos="fade-up" 
        data-aos-duration="1000"
        className="rounded-2xl overflow-hidden bg-gradient-to-r from-[#002a4e] to-[#004b7d] text-white relative shadow-xl mx-2 md:mx-6 transform hover:scale-[1.01] transition-transform duration-300"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.frost.com/wp-content/uploads/2023/01/Picture4-scaled.jpg')] bg-cover bg-center mix-blend-overlay rounded-2xl"></div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-300 opacity-50 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-blue-300 opacity-50 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-300 opacity-50 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-300 opacity-50 rounded-br-2xl"></div>
        
        <div className="py-16 md:py-20 px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" data-aos-duration="800" className="mb-2">
              <span className="uppercase tracking-wider text-sm md:text-base font-semibold text-blue-300">CYBER SECURITY</span>
            </div>
            
            <h2 
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="100"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              Redefining Cybersecurity as a Service
            </h2>
            
            <div className="space-y-4 mb-10">
              <div 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="200"
                className="flex items-start"
              >
                <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-lg md:text-xl">Simplified solutions for complete Cybersecurity Transformation</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="300"
                className="flex items-start"
              >
                <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-lg md:text-xl">360-degree Managed Security Services</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="400"
                className="flex items-start"
              >
                <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-lg md:text-xl">SOC L1 and L2 support for maximum efficiency</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="500"
                className="flex items-start"
              >
                <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-lg md:text-xl">Regular vulnerability scan and threat detection</span>
              </div>
              
              <div 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="600"
                className="flex items-start"
              >
                <div className="bg-blue-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-300" />
                </div>
                <span className="text-lg md:text-xl">24/7 Expert Consultation and In-depth Analysis</span>
              </div>
            </div>
            
            <a 
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-delay="700"
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Request a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurityBanner; 