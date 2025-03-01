import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Smartphone, CheckCircle } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';

const MAPTPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ServiceHero />
        <ServiceDetails />
        <ServiceBenefits />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

const ServiceHero = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Mobile Application Penetration Testing (MAPT)</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Security testing for iOS and Android applications to ensure data protection and identify vulnerabilities in mobile apps.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80" 
              alt="Mobile Application Penetration Testing" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceDetails = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-full mr-4">
              <Smartphone className="h-8 w-8 text-[#f28749]" />
            </div>
            <h2 className="text-3xl font-bold dark:text-white">What is Mobile Application Penetration Testing?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Mobile Application Penetration Testing (MAPT) is a specialized security assessment that identifies and exploits vulnerabilities in mobile applications for iOS and Android platforms. This proactive approach helps organizations secure their mobile apps before malicious actors can discover and exploit weaknesses.
            </p>
            
            <p className="mt-4">
              Our MAPT service examines various aspects of mobile applications, including:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Client-side security</strong> - Examining the mobile app code for vulnerabilities and insecure coding practices.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Data storage security</strong> - Assessing how sensitive data is stored on the device and whether it's properly encrypted.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Authentication and authorization</strong> - Testing the security of login mechanisms and access controls.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Network communication</strong> - Analyzing data transmission between the app and backend servers for security issues.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Platform interaction</strong> - Evaluating how the app interacts with the mobile operating system and other apps.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Backend API security</strong> - Testing the security of the APIs that the mobile app communicates with.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Identify security vulnerabilities in your mobile applications before release",
    "Protect sensitive user data stored on mobile devices",
    "Ensure secure communication between mobile apps and backend servers",
    "Receive detailed remediation guidance specific to mobile platforms",
    "Meet compliance requirements for mobile app security",
    "Reduce the risk of data breaches through mobile applications",
    "Enhance user trust by providing secure mobile experiences",
    "Protect your brand reputation from security incidents"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Benefits of Our Mobile App Testing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#f28749] flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Mobile Security Specialists",
      description: "Our team includes experts in iOS and Android security who understand the unique vulnerabilities and attack vectors specific to mobile platforms."
    },
    {
      title: "Platform-Specific Expertise",
      description: "We have deep knowledge of both iOS and Android security models, allowing us to identify platform-specific vulnerabilities that generalist testers might miss."
    },
    {
      title: "Comprehensive Testing Methodology",
      description: "Our approach combines automated scanning with manual testing to ensure thorough coverage of all potential security issues in your mobile applications."
    },
    {
      title: "Developer-Friendly Reporting",
      description: "We provide clear, actionable reports with specific remediation guidance that your development team can easily understand and implement."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Why Choose Our Mobile App Testing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MAPTPage; 