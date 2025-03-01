import React from 'react';
import { Shield, Globe, Server, Smartphone, Code, GraduationCap, ArrowRight } from 'lucide-react';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Vulnerability Assessment Penetration Testing (VAPT)",
      description: "Comprehensive security assessment to identify and exploit vulnerabilities in your systems before attackers do.",
      icon: <Shield className="h-8 w-8" />,
      url: "/services/VAPT"
    },
    {
      title: "Web Application Penetration Testing (WAPT)",
      description: "In-depth security testing of web applications to uncover and remediate vulnerabilities in your web-based systems.",
      icon: <Globe className="h-8 w-8" />,
      url: "/services/WAPT"
    },
    {
      title: "Network/Infrastructure Penetration Testing",
      description: "Thorough assessment of network infrastructure to identify security gaps and weaknesses in your network architecture.",
      icon: <Server className="h-8 w-8" />,
      url: "/services/NIPT"
    },
    {
      title: "Mobile Application Penetration Testing (MAPT)",
      description: "Security testing for iOS and Android applications to ensure data protection and identify vulnerabilities in mobile apps.",
      icon: <Smartphone className="h-8 w-8" />,
      url: "/services/MAPT"
    },
    {
      title: "API Testing Services",
      description: "Specialized security testing for APIs to protect the backbone of your digital services and ensure secure data exchange.",
      icon: <Code className="h-8 w-8" />,
      url: "/services/CPT"
    },
    {
      title: "Consultancy Services",
      description: "We provide expert CyberSecurity Consulting services to help your organization build a robust security posture.",
      icon: <GraduationCap className="h-8 w-8" />,
      url: "/services/Consulting"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We provide total Cyber Security industry solutions to protect your business from evolving threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Feature key={service.title} {...service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 border border-[#f28749] text-base font-medium rounded-md text-[#f28749] bg-transparent hover:bg-[#fff8f4] transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
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
  url,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  url: string;
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
      <p className="text-base text-gray-600 max-w-xs relative z-10 px-10 leading-relaxed mb-4">
        {description}
      </p>
      <div className="px-10 mt-auto relative z-20">
        <Link 
          to={url} 
          className="inline-flex items-center text-sm font-medium text-[#f28749] hover:text-[#e07642] transition-colors bg-white bg-opacity-80 py-1 px-2 rounded"
        >
          Read more
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Services;