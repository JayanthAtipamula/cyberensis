import React from 'react';
import { NavBar } from '../components/ui/tubelight-navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import BrandTrust from '../components/BrandTrust';
import { commonNavItems } from '../lib/navItems';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Us</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Why Choose Cyberensis InfoSec</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-[#f28749] w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold dark:text-white">{reason.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
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
          <p className="mb-4 dark:text-gray-300">
            Cyberensis Infosec is a rapidly growing Information Security Services
            organization. Cyberensis Infosec is a global enterprise for IT Security
            Services & Consulting, focusing on solving IT Security issues with
            expert offerings in Information Security Services.
          </p>
          <p className="mb-4 dark:text-gray-300">
            It is a trusted standard for companies to protect their products, brand, and
            confidential information from various types of cyber attacks. Cyberensis
            Infosec is committed to providing an innovative set of services that
            address our clients' security needs.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
            <li className="flex items-center dark:text-gray-300">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Vulnerability Assessment Penetration Testing (VAPT)</span>
            </li>
            <li className="flex items-center dark:text-gray-300">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Web Application Penetration Testing (WAPT)</span>
            </li>
            <li className="flex items-center dark:text-gray-300">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Network/Infrastructure Penetration Testing</span>
            </li>
            <li className="flex items-center dark:text-gray-300">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Mobile Application Penetration Testing (MAPT)</span>
            </li>
            <li className="flex items-center dark:text-gray-300">
              <CheckCircle className="text-[#f28749] w-5 h-5 mr-2 flex-shrink-0" />
              <span>Source code review</span>
            </li>
            <li className="flex items-center dark:text-gray-300">
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
        <p className="dark:text-gray-300">
          At Cyberensis, our mission is to deliver state-of-the-art cybersecurity
          solutions and expert consulting services. We are dedicated to protecting
          our clients' digital assets, ensuring business continuity, and fostering
          a secure digital environment. Through continuous innovation and a
          client-centric approach, we strive to be the trusted security partner for
          businesses of all sizes.
        </p>
      )
    },
    {
      id: "vision",
      title: "Our Vision",
      content: (
        <p className="dark:text-gray-300">
          Our vision is to be the global leader in cybersecurity services,
          recognized for our technical excellence, innovative solutions, and
          unwavering commitment to client success. We aim to shape a future where
          organizations can embrace digital transformation with confidence,
          knowing their security is in expert hands.
        </p>
      )
    }
  ];

  const [activeTab, setActiveTab] = React.useState("company");

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === tab.id
                    ? "border-b-2 border-[#f28749] text-[#f28749]"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="prose prose-lg max-w-none">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage; 