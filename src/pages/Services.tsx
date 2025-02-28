import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Shield, Globe, Server, Smartphone, Code, Cloud, Terminal, BookOpen, LucideIcon } from 'lucide-react';

interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={[
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Contact', url: '/contact', icon: FileText }
      ]} />
      <main className="pt-20">
        <ServicesHero />
        <CoreServices />
      </main>
      <Footer />
    </div>
  );
};

const ServicesHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            We are pleased to offer the following services to our clients, providing comprehensive
            cybersecurity solutions to protect your business from evolving threats.
          </p>
        </div>
      </div>
    </section>
  );
};

const CoreServices = () => {
  const services = [
    {
      id: "vapt",
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      description: "Comprehensive security assessment to identify and exploit vulnerabilities in your systems before attackers do.",
      icon: Shield,
      image: "/assets/services/vapt.jpg"
    },
    {
      id: "wapt",
      title: "Web Application Penetration Testing (WAPT)",
      description: "In-depth security testing of web applications to uncover and remediate vulnerabilities in your web-based systems.",
      icon: Globe,
      image: "/assets/services/wapt.jpg"
    },
    {
      id: "nipt",
      title: "Network/Infrastructure Penetration Testing",
      description: "Thorough assessment of network infrastructure to identify security gaps and weaknesses in your network architecture.",
      icon: Server,
      image: "/assets/services/nipt.jpg"
    },
    {
      id: "mapt",
      title: "Mobile Application Penetration Testing (MAPT)",
      description: "Security testing for iOS and Android applications to ensure data protection and identify vulnerabilities in mobile apps.",
      icon: Smartphone,
      image: "/assets/services/mapt.jpg"
    },
    {
      id: "cpt",
      title: "Cloud Penetration Testing (CPT)",
      description: "Comprehensive security assessment of cloud environments to identify vulnerabilities and security misconfigurations.",
      icon: Cloud,
      image: "/assets/services/cpt.jpeg"
    },
    {
      id: "development",
      title: "Secure Application Development",
      description: "Web and Mobile Apps (Android & iOS) Development with security built-in from the ground up.",
      icon: Code,
      image: "/assets/services/development.jpg"
    },
    {
      id: "csconsult",
      title: "Security Consulting",
      description: "Expert cybersecurity consultancy services to help your organization build a robust security posture.",
      icon: Briefcase,
      image: "/assets/services/csconsult.png"
    },
    {
      id: "scr",
      title: "Source Code Review",
      description: "Thorough review of source code in various programming languages to identify security vulnerabilities.",
      icon: Terminal,
      image: "/assets/services/scr.jpg"
    },
    {
      id: "training",
      title: "Cybersecurity Trainings",
      description: "Comprehensive training programs to educate your team on cybersecurity best practices and threat awareness.",
      icon: BookOpen,
      image: "/assets/services/training.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-[#f28749] bg-opacity-10 p-2 rounded-lg mr-3">
            <Icon className="h-6 w-6 text-[#f28749]" />
          </div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{service.description}</p>
        
        <a 
          href={`#${service.id}`} 
          className="text-[#f28749] font-medium hover:underline inline-flex items-center"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServicesPage; 