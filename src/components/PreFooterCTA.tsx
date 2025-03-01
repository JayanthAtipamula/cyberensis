import React from 'react';
import { ArrowDownRight, Phone } from 'lucide-react';

const PreFooterCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background dots decoration */}
      <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-[#f28749] opacity-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Image and Arrow */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="/assets/consultant.jpg" 
                  alt="Professional Consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -right-2 -top-2 w-12 h-12 bg-[#f28749] rounded-full flex items-center justify-center transform rotate-12">
                <Phone className="w-6 h-6 text-white transform -rotate-12" />
              </div>
            </div>

            {/* Text Content */}
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight dark:text-white">
                Essential Cybersecurity Terms
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-8 dark:text-gray-300">
                Contact us for advanced cybersecurity solutions and expert risk management.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#f28749] rounded-lg hover:bg-[#e07642] transition-colors duration-300"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
