import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Section {
  id: string;
  name: string;
}

const sections: Section[] = [
  { id: 'intro', name: 'HOME' },
  { id: 'challenge', name: 'ABOUT' },
  { id: 'why', name: 'SERVICES' },
  { id: 'proof', name: 'OUR APPROACH' },
  { id: 'customers', name: 'TESTIMONIALS' },
  { id: 'latest', name: 'BLOG' },
];

export const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isVisible, setIsVisible] = useState(false);
  const [isManuallyHidden, setIsManuallyHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator after scrolling 100px, unless manually hidden
      if (window.scrollY > 100 && !isManuallyHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Find which section is in view
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const viewportHeight = window.innerHeight;
      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManuallyHidden]);

  const handleDotClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClose = () => {
    setIsManuallyHidden(true);
    setIsVisible(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 bottom-1/3 z-50 hidden lg:flex flex-col items-start gap-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-r-lg shadow-lg"
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
        aria-label="Close navigation indicator"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-gray-600 dark:text-gray-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleDotClick(section.id)}
          className="group flex items-center gap-3 text-sm hover:text-[#f28749] transition-colors duration-300"
        >
          <motion.div
            className={`w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${
              activeSection === section.id
                ? 'bg-[#f28749] border-[#f28749]'
                : 'border-gray-400 group-hover:border-[#f28749]'
            }`}
            layoutId="activeDot"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
          <span className={`font-medium transition-colors duration-300 ${
            activeSection === section.id 
              ? 'text-[#f28749]' 
              : 'text-gray-600 dark:text-gray-300'
          }`}>
            {section.name}
          </span>
        </button>
      ))}
    </motion.div>
  );
}; 