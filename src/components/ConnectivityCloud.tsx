import React from 'react';
import { Shield, HelpCircle, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ConnectivityCloud = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#ff9933] via-[#ff8c33] to-[#f28749] py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-black relative inline-block"
          >
            Get started with the connectivity cloud
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Get started for free */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-[#ff9933] to-[#f28749] p-4 rounded-full mb-4 shadow-md">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Get started for free</h3>
            <p className="text-black/80 mb-6">
              Get easy, instant access to Cloudflare security and performance services.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-black font-medium hover:underline group mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="border-b border-transparent group-hover:border-black transition-all duration-300">Start for free</span> 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>
          
          {/* Need help choosing? */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-[#ff9933] to-[#f28749] p-4 rounded-full mb-4 shadow-md">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Need help choosing?</h3>
            <p className="text-black/80 mb-6">
              Get a personalized product recommendation for your specific needs.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-black font-medium hover:underline group mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="border-b border-transparent group-hover:border-black transition-all duration-300">Find the right plan</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>
          
          {/* Talk to an expert */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-gradient-to-br from-[#ff9933] to-[#f28749] p-4 rounded-full mb-4 shadow-md">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Talk to an expert</h3>
            <p className="text-black/80 mb-6">
              Have questions or want to get a demo? Get in touch with one of our experts.
            </p>
            <motion.a 
              href="#" 
              className="inline-flex items-center text-black font-medium hover:underline group mt-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="border-b border-transparent group-hover:border-black transition-all duration-300">Contact us</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivityCloud; 