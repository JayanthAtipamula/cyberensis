import React from 'react';

const PreFooterCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-[#ffb800] to-[#ff7a45] relative overflow-hidden rounded-t-[40px]">
      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Text Content */}
            <div data-aos="fade-up" data-aos-duration="1000" className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black relative inline-block">
                We dared to push identity security further.
                Discover what's possible.
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
              </h2>
              <p className="text-xl md:text-2xl font-medium mb-8 text-black">
                Set up a demo to see the Cyberensis in action.
              </p>
            </div>
            <a 
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay="200"
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Get a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
