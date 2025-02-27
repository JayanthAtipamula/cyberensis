import React from 'react';
import { Shield, Globe, Server, Smartphone, Code } from 'lucide-react';
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      title: "Vulnerability Assessment Penetration Testing (VAPT)",
      description: "Comprehensive security assessment to identify and exploit vulnerabilities in your systems.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Web Application Penetration Testing (WAPT)",
      description: "In-depth security testing of web applications to uncover vulnerabilities before attackers do.",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "Network/Infrastructure Penetration Testing",
      description: "Thorough assessment of network infrastructure to identify security gaps and weaknesses.",
      icon: <Server className="h-8 w-8" />
    },
    {
      title: "Mobile Application Penetration Testing (MAPT)",
      description: "Security testing for iOS and Android applications to ensure data protection on mobile devices.",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: "API Testing Services",
      description: "Specialized security testing for APIs to protect the backbone of your digital services.",
      icon: <Code className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a comprehensive range of cybersecurity services to protect your business from evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-6 relative z-10 px-10 text-[#f28749]">
        {icon}
      </div>
      <div className="text-xl font-semibold mb-3 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-[#f28749] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
          {title}
        </span>
      </div>
      <p className="text-base text-gray-600 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Services;