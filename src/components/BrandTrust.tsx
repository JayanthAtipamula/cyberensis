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
        <h2 className="text-4xl font-bold text-gray-900">
          1K+ <span className="text-orange-500">Brands</span> Trust Us
        </h2>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex logos-slide">
          {brands.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`} 
              className="mx-12 min-w-[160px]"
            >
              <div className="h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
          {brands.map((brand, idx) => (
            <div 
              key={`${brand.name}-second-${idx}`} 
              className="mx-12 min-w-[160px]"
            >
              <div className="h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;