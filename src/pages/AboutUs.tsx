import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, Home, User, Briefcase, FileText } from 'lucide-react';
import BrandTrust from '../components/BrandTrust';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={[
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'Services', url: '/#services', icon: Briefcase },
        { name: 'Contact', url: '/contact', icon: FileText }
      ]} />
      <main className="pt-20">
        <AboutHero />
        <WhyChooseUs />
        <CompanyMissionVision />
        <BrandTrust />
      </main>
      <Footer />
    </div>
  );
};

const AboutHero = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              At Cyberensis InfoSec we are dedicated to providing the highest quality
              cybersecurity services to protect your business from the ever-growing threat of
              cyberattacks. Trust us to safeguard your digital assets and ensure your peace of mind.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cybersecurity concept" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "We have a history of successfully defending against a wide range of cyber threats across various industries."
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize our clients' needs, providing personalized service and support."
    },
    {
      title: "Commitment to Excellence",
      description: "We are dedicated to providing the highest quality cybersecurity services. Our client-centric approach, combined with our relentless pursuit of excellence, ensures that your business is always in safe hands."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Cyberensis InfoSec</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-[#f28749] w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyMissionVision = () => {
  const tabs = [
    {
      id: "company",
      title: "Our Company",
      content: (
        <>
          <p className="mb-4">
            Cyberensis Infosec is a rapidly growing Information Security Services
            organization. Cyberensis Infosec is a global enterprise for IT Security
            Services & Consulting, focusing on solving IT Security issues with
            expert offerings in Information Security Services.
          </p>
          <p className="mb-4">
            It is a trusted standard for companies to protect their products, brand, and
            confidential information from various types of cyber attacks. Cyberensis
            Infosec is committed to providing an innovative set of services that
            address our clients' security needs.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Vulnerability Assessment Penetration Testing (VAPT)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Web Application Penetration Testing (WAPT)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Network/Infrastructure Penetration Testing</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Mobile Application Penetration Testing (MAPT)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Source code review</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Secure development application</span>
            </li>
          </ul>
        </>
      )
    },
    {
      id: "mission",
      title: "Our Mission",
      content: (
        <p>
          At Cyberensis, our mission is to deliver state-of-the-art cybersecurity
          solutions and expert consulting services. We are dedicated to protecting
          businesses from cyber threats through innovative, reliable, and
          comprehensive security measures, ensuring the safety of their digital
          assets and confidential information.
        </p>
      )
    },
    {
      id: "vision",
      title: "Our Vision",
      content: (
        <p>
          Our vision is to be the global leader in cybersecurity, setting the
          industry standard for excellence and trust. Cyberensis aims to create a
          world where businesses can thrive securely in the digital landscape,
          empowered by our cutting-edge security services and our unwavering
          commitment to their protection and success.
        </p>
      )
    }
  ];

  const [activeTab, setActiveTab] = React.useState("company");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
              alt="Cyberensis team" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-3 px-4 font-medium text-sm md:text-base transition-colors relative ${
                      activeTab === tab.id
                        ? "text-[#f28749] border-b-2 border-[#f28749]"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="prose max-w-none">
              {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage; 