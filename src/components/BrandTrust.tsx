import React from 'react';

const BrandTrust = () => {
  const brands = [
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1583339793403-3d9b001b6008?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'IBM', logo: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Oracle', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
    { name: 'Cisco', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped secure digital assets for companies across industries, from startups to Fortune 500 enterprises.
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-8">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;