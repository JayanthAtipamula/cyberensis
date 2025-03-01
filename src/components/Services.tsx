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
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of cybersecurity services to protect your business from evolving digital threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Feature
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              url={service.url}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 bg-[#f28749] hover:bg-[#e07339] text-white px-6 py-3 rounded-lg transition-colors"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
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
    <Link 
      to={url}
      className={cn(
        "group flex flex-col h-full p-8 rounded-xl transition-all duration-300",
        "bg-white dark:bg-gray-700 hover:bg-[#f28749]/5 dark:hover:bg-[#f28749]/10",
        "border border-gray-100 dark:border-gray-600 hover:border-[#f28749]/20 dark:hover:border-[#f28749]/30",
        "shadow-sm hover:shadow-md"
      )}
    >
      <div className="mb-5 p-3 rounded-full bg-[#f28749]/10 dark:bg-[#f28749]/20 w-fit">
        <div className="text-[#f28749]">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-[#f28749] transition-colors dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow">
        {description}
      </p>
      <div className="flex items-center text-[#f28749] dark:text-[#ff9a5e] font-medium">
        <span>Learn more</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default Services;