import React, { useState } from 'react';
import { Shield, Globe, Server, Smartphone, Code, GraduationCap, ArrowRight, Cloud, Lock, Brain, Monitor, Mail } from 'lucide-react';
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Vulnerability Assessment Penetration Testing (VAPT)",
      description: "Comprehensive security assessment to identify and exploit vulnerabilities in your systems before attackers do.",
      icon: <Shield className="h-10 w-10" />,
      url: "/services/VAPT",
      color: "bg-purple-900"
    },
    {
      title: "Web Application Penetration Testing (WAPT)",
      description: "In-depth security testing of web applications to uncover and remediate vulnerabilities in your web-based systems.",
      icon: <Globe className="h-10 w-10" />,
      url: "/services/WAPT",
      color: "bg-blue-800"
    },
    {
      title: "Network/Infrastructure Penetration Testing",
      description: "Thorough assessment of network infrastructure to identify security gaps and weaknesses in your network architecture.",
      icon: <Server className="h-10 w-10" />,
      url: "/services/NIPT",
      color: "bg-pink-700"
    },
    {
      title: "Mobile Application Penetration Testing (MAPT)",
      description: "Security testing for iOS and Android applications to ensure data protection and identify vulnerabilities in mobile apps.",
      icon: <Smartphone className="h-10 w-10" />,
      url: "/services/MAPT",
      color: "bg-orange-500"
    },
    {
      title: "API Testing Services",
      description: "Specialized security testing for APIs to protect the backbone of your digital services and ensure secure data exchange.",
      icon: <Code className="h-10 w-10" />,
      url: "/services/CPT",
      color: "bg-teal-600"
    },
    {
      title: "Consultancy Services",
      description: "We provide expert CyberSecurity Consulting services to help your organization build a robust security posture.",
      icon: <GraduationCap className="h-10 w-10" />,
      url: "/services/Consulting",
      color: "bg-green-600"
    }
  ];

  // First row of services (3 items)
  const firstRowServices = services.slice(0, 3);
  // Second row of services (3 items)
  const secondRowServices = services.slice(3, 6);

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div data-aos="fade-up" data-aos-duration="800" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white relative inline-block">
            Our Services
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            We offer a comprehensive range of cybersecurity services to protect your business from evolving threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              data-aos="fade-up" 
              data-aos-duration="800"
              data-aos-delay={100 * index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Feature
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
                url={service.url}
                color={service.color}
              />
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-[#f28749] font-medium hover:underline">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4" />
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
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  url: string;
  color: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mainTitle = title.split('(')[0].trim();
  const acronym = title.match(/\(([^)]+)\)/)?.[1] || '';

  return (
    <Link 
      to={url}
      className={cn(
        "group relative flex flex-col h-[200px] p-6 rounded-xl transition-all duration-300",
        color,
        "hover:shadow-lg"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4">
        <div className="text-white">{icon}</div>
      </div>
      
      <div className="relative overflow-hidden h-24">
        {/* Title - visible when not hovered */}
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-300 transform",
            isHovered ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <h3 className="text-xl font-bold text-white leading-tight">
            {mainTitle}
            {acronym && <span className="block mt-1">({acronym})</span>}
          </h3>
        </div>
        
        {/* Description - visible when hovered */}
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-300 transform",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
          )}
        >
          <p className="text-white text-sm leading-tight">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 bg-white bg-opacity-20 rounded-full p-2 group-hover:bg-opacity-30 transition-all">
        <ArrowRight className="h-5 w-5 text-white" />
      </div>
    </Link>
  );
};

export default Services;