import React from 'react';

interface Brand {
  name: string;
  logo: string;
}

const BrandTrust: React.FC = () => {
  const brands: Brand[] = [
    { name: 'Google', logo: '/assets/brandicons/google.png' },
    { name: 'Apple', logo: '/assets/brandicons/apple.jpg' },
    { name: 'Facebook', logo: '/assets/brandicons/facebook.jpg' },
    { name: 'Harvard', logo: '/assets/brandicons/Harvard.jpg' },
    { name: 'Mastercard', logo: '/assets/brandicons/MC.jpg' },
    { name: 'Skyscanner', logo: '/assets/brandicons/Skyscanner-Logo.png' },
    { name: 'Western Union', logo: '/assets/brandicons/wu.png' },
    { name: 'Comcast', logo: '/assets/brandicons/comcast.jpg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          1K+ <span className="text-orange-500">Brands</span> Trust Us
        </h2>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex logos-slide-fast">
          {[...Array(2)].map((_, slideIndex) => (
            <React.Fragment key={`slide-${slideIndex}`}>
              {brands.map((brand, idx) => (
                <div 
                  key={`${brand.name}-${slideIndex}-${idx}`} 
                  className="mx-4 md:mx-12 min-w-[120px] md:min-w-[160px]"
                >
                  <div className="h-12 md:h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                      width="160"
                      height="64"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;