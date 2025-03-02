import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
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
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image */}
          <div className="lg:w-1/2 relative lg:ml-8">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/assets/team-meeting.jpg"
                  alt="Team collaboration"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Orange circle decoration */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#f28749]/10 -z-10" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-[#f28749]/10 p-2 rounded-full mb-2">
                        <Icon className="h-5 w-5 text-[#f28749]" />
                      </div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white relative inline-block">
              Securing Your Digital Future with Expert Solutions
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Cyberensis Infosec is a global enterprise for IT Security Services & Consulting. 
                We're a trusted standard for companies protecting their products, brand, and 
                confidential information from cyber attacks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our comprehensive security assessments include penetration testing, vulnerability 
                assessments, and risk analysis, providing actionable insights to enhance your 
                security posture.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-6 py-3 bg-[#f28749] hover:bg-[#e07339] text-white font-medium rounded-lg transition-colors">
                Learn More
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;