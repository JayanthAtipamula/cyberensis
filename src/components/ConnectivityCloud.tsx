import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ConnectivityCloud = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
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
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our connectivity cloud is the best place to{' '}
                <span className="bg-gradient-to-r from-[#f28749] to-[#1e3a8a] text-transparent bg-clip-text">
                  secure your digital assets
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Over 60 advanced security services on one unified platform, uniquely powered by a global threat intelligence network. We call it the cybersecurity cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f28749] hover:bg-[#e07339] text-white font-medium rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border-2 border-[#f28749] text-[#f28749] hover:bg-[#f28749] hover:text-white font-medium rounded-lg transition-colors text-lg"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right side - Lottie Animation */}
          <div className="lg:w-1/2 w-full max-w-[400px] lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full pt-[100%] lg:pt-[75%]"
            >
              <DotLottieReact
                src="https://lottie.host/76b86d94-094b-4287-979a-b320474e59df/uCb0PXF67J.lottie"
                loop
                autoplay
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivityCloud; 