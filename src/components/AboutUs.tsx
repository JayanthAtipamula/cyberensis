import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Sparkles, Target } from 'lucide-react';

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
    <section id="about" className="py-24 bg-white">
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
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-[#f28749]" />
                      <div className="font-bold text-2xl">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 lg:pr-8">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  About Us
                </h2>
                <div className="text-lg text-gray-600 mb-8">
                  Leading Cybersecurity Solutions Provider
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-600">
                  We're not just another cybersecurity company. We're a team of dedicated security 
                  experts, ethical hackers, and risk analysts united by one mission: to protect 
                  your business from evolving digital threats.
                </p>

                <p className="text-gray-600">
                  Our comprehensive approach combines cutting-edge technology with human expertise 
                  to deliver unparalleled security solutions. From penetration testing to incident 
                  response, we ensure your digital assets remain protected 24/7.
                </p>

                <p className="text-gray-600">
                  Since our founding, we've helped hundreds of organizations strengthen their 
                  security posture, prevent data breaches, and maintain compliance with global 
                  security standards. Let us be your trusted partner in building a resilient 
                  cybersecurity framework.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <button className="bg-[#f28749] text-white px-8 py-4 rounded-lg hover:bg-[#e07642] transition-colors">
                  Learn More About Us
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;