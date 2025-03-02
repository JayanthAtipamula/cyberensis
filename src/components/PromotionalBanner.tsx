import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PromotionalBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  title,
  description,
  buttonText,
  buttonLink
}) => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#1e40af] dark:bg-blue-900 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="py-12 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
              <p className="text-lg text-white/90">{description}</p>
            </div>
            
            <div>
              <Link 
                to={buttonLink} 
                className="inline-flex items-center px-6 py-3 bg-[#f28749] hover:bg-[#e07339] text-white font-medium rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionalBanner; 