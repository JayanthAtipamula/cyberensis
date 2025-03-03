import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ThreatIntelligence = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-1 bg-[#f28749] mb-8"></div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Cyberensis Labs: Threat Intelligence and Research
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Enhance your security posture with our proprietary intelligence, cutting-edge research, and adversary insights – all curated by Cyberensis Labs and seamlessly integrated across our comprehensive suite of security solutions and services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-[#f28749] text-gray-900 dark:text-white hover:text-white border-2 border-[#f28749] font-medium rounded-lg transition-all duration-300 text-lg"
              >
                GET INSIGHTS
              </Link>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full">
                {/* Shadow behind image */}
                <div className="absolute inset-0 -bottom-6 bg-black/15 blur-xl"></div>
                
                {/* Main image */}
                <div className="relative">
                  <img
                    src="/assets/cybernsisbanner.png"
                    alt="Cyberensis Labs Research"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatIntelligence; 