import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const stats = [
    {
      icon: Award,
      label: "Years Experience",
      value: "9+",
    },
    {
      icon: Users,
      label: "Team Members",
      value: "50+",
    },
    {
      icon: Sparkles,
      label: "Projects Completed",
      value: "500+",
    },
    {
      icon: Target,
      label: "Success Rate",
      value: "98%",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full mt-2 right-0 w-[550px] bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 border border-gray-100 dark:border-gray-700"
      style={{ 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        transformOrigin: 'top right'
      }}
    >
      {/* Colorful top indicator line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#f28749] via-[#f28749]/80 to-[#f28749]"></div>
      
      <div className="p-6">
        <div className="flex gap-6">
          {/* Left side - Image with stats */}
          <div className="w-1/2 relative">
            <motion.div 
              className="rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/team-meeting.jpg"
                alt="Team collaboration"
                className="w-full h-auto"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-2 left-2 right-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 grid grid-cols-2 gap-2 shadow-lg">
              {stats.slice(0, 2).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-[#f28749]/10 p-1.5 rounded-full mb-1">
                      <Icon className="h-3 w-3 text-[#f28749]" />
                    </div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-1/2">
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#f28749] transition-colors">
              Securing Your Digital Future
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
              Cyberensis Infosec is a global enterprise for IT Security Services & Consulting. 
              We're a trusted standard for companies protecting their products, brand, and 
              confidential information from cyber attacks.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-1.5"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-[#f28749]/10 p-1 rounded-full">
                      <Icon className="h-3 w-3 text-[#f28749]" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {stat.value} {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center text-sm text-[#f28749] hover:text-[#e07339] font-medium transition-colors group"
            >
              <span>Learn More</span>
              <motion.div
                className="inline-block ml-1"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPreview; 