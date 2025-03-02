import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

// Define the testimonial type
interface Testimonial {
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

// Define the props for the TestimonialCard component
interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  row: number;
}

const Testimonials = () => {
  // Refs for the scrolling containers
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  
  // Testimonials data
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Cyberensis's penetration testing uncovered critical vulnerabilities that our internal team missed. Their detailed reports and remediation guidance were invaluable in strengthening our security posture.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "FinSecure Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "As a financial services provider, security is paramount. The Cyberensis team demonstrated exceptional expertise in identifying potential attack vectors in our web applications.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "HealthData Systems",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Working with Cyberensis has been a game-changer for our healthcare platform. Their thorough API testing ensured our patient data remains protected against emerging threats.",
      rating: 4
    },
    {
      name: "David Wilson",
      company: "E-Commerce Plus",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The incident response team at Cyberensis was exceptional. When we detected a potential breach, they were on it within minutes, containing the threat and providing clear recovery steps.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "CloudNine Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The cloud security assessment conducted by Cyberensis revealed configuration issues we had overlooked. Their recommendations helped us achieve compliance with industry standards.",
      rating: 5
    },
    {
      name: "James Thompson",
      company: "Retail Chain Group",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Cyberensis's security awareness training transformed how our employees think about cybersecurity. The phishing simulations were eye-opening and dramatically improved our security culture.",
      rating: 4
    }
  ];

  // Duplicate testimonials for continuous scrolling effect
  const row1Testimonials = [...testimonials, ...testimonials, ...testimonials];
  const row2Testimonials = [...testimonials.reverse(), ...testimonials.reverse(), ...testimonials.reverse()];

  // Set up the scrolling animation
  useEffect(() => {
    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;
    
    if (!row1Element || !row2Element) return;
    
    // Calculate the width of a single testimonial card (including margins)
    const cardWidth = 280 + 24; // 280px width + 24px margins (12px on each side)
    
    // Calculate the width of a single set of testimonials
    const singleSetWidth = cardWidth * testimonials.length;
    
    let row1Position = 0;
    let row2Position = 0;
    
    const animate = () => {
      // Row 1 moves right to left
      row1Position -= 0.5;
      // Reset position when one set has scrolled by
      if (row1Position <= -singleSetWidth) {
        row1Position = 0;
      }
      
      // Row 2 moves left to right
      row2Position += 0.5;
      // Reset position when one set has scrolled by
      if (row2Position >= singleSetWidth) {
        row2Position = 0;
      }
      
      if (row1Element) row1Element.style.transform = `translateX(${row1Position}px)`;
      if (row2Element) row2Element.style.transform = `translateX(${row2Position}px)`;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [testimonials.length]);

  // Testimonial card component
  const TestimonialCard = ({ testimonial, index, row }: TestimonialCardProps) => (
    <div 
      className="flex-shrink-0 w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mx-3 border border-gray-100 dark:border-gray-700"
      style={{ 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-start mb-3">
        <div className="relative mr-3 flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#f28749] to-[#e9446a] rounded-full blur-sm opacity-70"></div>
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="relative w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=f28749&color=fff`;
            }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-sm dark:text-white">{testimonial.name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-xs">{testimonial.company}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote className="h-4 w-4 text-[#f28749]/20 absolute top-0 left-0 -translate-x-1 -translate-y-1" />
        <p className="text-gray-700 dark:text-gray-300 text-xs pl-2 pr-1 line-clamp-3">
          {testimonial.quote}
        </p>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 pb-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div data-aos="fade-up" data-aos-duration="1000" className="text-center mb-10 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white relative inline-block">
            What Our Clients Say
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
          <div className="w-24 h-1 bg-[#f28749] mx-auto mb-6 hidden"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Here's what our clients have to say about Cyberensis's cybersecurity services.
          </p>
        </div>
      </div>
      
      <div className="testimonials-container">
        {/* First row - moves right to left */}
        <div className="relative mb-16 h-[220px] overflow-visible">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-100 dark:from-gray-800"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-100 dark:from-gray-800"></div>
          
          <div ref={row1Ref} className="flex absolute" style={{ willChange: 'transform' }}>
            {row1Testimonials.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} index={index} row={1} />
            ))}
          </div>
        </div>
        
        {/* Second row - moves left to right (opposite direction) */}
        <div className="relative h-[220px] overflow-visible">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-100 dark:from-gray-800"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-100 dark:from-gray-800"></div>
          
          <div ref={row2Ref} className="flex absolute" style={{ willChange: 'transform' }}>
            {row2Testimonials.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} index={index} row={2} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="text-center mt-16 mb-8">
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-[#f28749] text-white font-medium rounded-md hover:bg-[#e07339] transition-colors"
        >
          Join Our Satisfied Clients
        </a>
      </div>
    </section>
  );
};

export default Testimonials;