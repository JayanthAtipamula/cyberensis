import React, { useState } from 'react';
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our cybersecurity services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#f28749]"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-bold">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-[#f28749] hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-[#f28749]' : 'bg-gray-300'}`}
                ></span>
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:bg-[#f28749] hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;