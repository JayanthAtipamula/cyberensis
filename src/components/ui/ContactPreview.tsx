import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  const [email, setEmail] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@cyberensis.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 9AM-5PM",
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
          {/* Left side - Contact Info */}
          <div className="w-1/2">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white group-hover:text-[#f28749] transition-colors">
              Get In Touch
            </h3>
            
            <div className="space-y-3 mb-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-[#f28749]/10 p-2 rounded-full mt-0.5">
                      <Icon className="h-4 w-4 text-[#f28749]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center text-sm text-[#f28749] hover:text-[#e07339] font-medium transition-colors group"
            >
              <span>View Full Contact Page</span>
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
          
          {/* Right side - Quick Contact Form */}
          <div className="w-1/2">
            <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
              <h4 className="text-sm font-bold mb-3 text-gray-900 dark:text-white">
                Quick Message
              </h4>
              
              <div className="space-y-3">
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28749]/50"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={2}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f28749]/50 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#f28749] hover:bg-[#e07339] text-white text-sm font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  <Send className="h-3.5 w-3.5 mr-2" />
                  Send Message
                </motion.button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
                Or call us directly at <span className="font-medium">+1 (555) 123-4567</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPreview; 