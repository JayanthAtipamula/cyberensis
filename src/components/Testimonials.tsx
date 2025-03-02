import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "CyberShield's penetration testing uncovered critical vulnerabilities that our internal team missed. Their detailed reports and remediation guidance were invaluable in strengthening our security posture.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "FinSecure Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "As a financial services provider, security is paramount. The CyberShield team demonstrated exceptional expertise in identifying potential attack vectors in our web applications.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "HealthData Systems",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Working with CyberShield has been a game-changer for our healthcare platform. Their thorough API testing ensured our patient data remains protected against emerging threats.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  // Auto-scrolling functionality
  useEffect(() => {
    if (isAutoScrolling && !isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change testimonial every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoScrolling, isPaused, nextTestimonial]);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-[#f28749] mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our cybersecurity services.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 transition-all duration-500 transform hover:shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#f28749] to-[#e9446a] rounded-full blur-sm opacity-70"></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="relative w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-800"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="font-semibold text-xl dark:text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{testimonials[currentIndex].company}</p>
                  <div className="flex items-center justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 relative">
                  <span className="text-6xl text-[#f28749]/20 absolute -top-6 -left-4">"</span>
                  {testimonials[currentIndex].quote}
                  <span className="text-6xl text-[#f28749]/20 absolute -bottom-10 right-0">"</span>
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 space-x-4">
              {/* Testimonial indicators */}
              <div className="flex items-center space-x-3 mr-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'bg-[#f28749] w-6' 
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-[#f28749]/50'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#f28749]/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#f28749]/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </button>
              
              {/* Auto-scroll toggle */}
              <button
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className={`p-2 rounded-full transition-colors ${
                  isAutoScrolling 
                    ? 'bg-[#f28749]/20 text-[#f28749]' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
                aria-label={isAutoScrolling ? "Pause auto-scroll" : "Enable auto-scroll"}
              >
                {isAutoScrolling ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;