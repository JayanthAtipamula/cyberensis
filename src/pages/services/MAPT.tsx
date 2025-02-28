import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Smartphone, CheckCircle } from 'lucide-react';

const MAPTPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <NavBar items={[
        { name: 'Home', url: '/', icon: Home },
        { name: 'About', url: '/about', icon: User },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'Contact', url: '/contact', icon: FileText }
      ]} />
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Application Penetration Testing (MAPT)</h1>
            <p className="text-lg text-gray-600 mb-8">
              Security testing for iOS and Android applications to ensure data protection and identify vulnerabilities in mobile apps.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80" 
              alt="Mobile Application Penetration Testing Services" 
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What is Mobile Application Penetration Testing?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Mobile Application Penetration Testing (MAPT) is a specialized security assessment that identifies and exploits vulnerabilities in mobile applications for both Android and iOS platforms. As mobile apps increasingly handle sensitive data and provide access to critical services, ensuring their security has become essential for organizations.
            </p>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">The Mobile Security Challenge</h3>
            <p className="mb-6">
              New technologies will always be open for new security flaws in mobile infrastructure. Mobile applications face unique security challenges due to their diverse operating environments, varying platform security models, and the personal nature of mobile devices. Our MAPT service helps you address these challenges by identifying vulnerabilities before they can be exploited.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Our MAPT Methodology</h3>
              <p className="mt-4">
                We use multiple testing methodologies like OWASP Mobile Top 10, OSSTMM, and standard penetration testing methodologies to analyze the weaknesses in Android and iOS mobile applications. Our approach combines automated scanning with manual testing to provide comprehensive coverage of potential security issues.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">What We Test</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Client-Side Security</h4>
                <p>Assessment of the mobile app's client-side code, including data storage, input validation, and authentication mechanisms.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">API Security</h4>
                <p>Testing of the APIs that mobile apps use to communicate with backend servers for vulnerabilities like improper authentication or data leakage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Data Storage</h4>
                <p>Evaluation of how sensitive data is stored on the device, including encryption implementation and secure storage usage.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Network Communication</h4>
                <p>Analysis of network traffic to identify insecure data transmission, certificate validation issues, and other network-related vulnerabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Identification of security vulnerabilities specific to mobile platforms",
    "Protection of sensitive user data stored on mobile devices",
    "Verification of secure communication between mobile apps and backend services",
    "Assessment of compliance with platform-specific security guidelines",
    "Evaluation of authentication and authorization mechanisms",
    "Detection of insecure data storage practices",
    "Identification of code-level vulnerabilities and insecure coding practices"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Mobile Application Penetration Testing</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Our MAPT Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h4 className="text-xl font-semibold mb-3">Application Analysis</h4>
                <p>Understanding the app's architecture, features, and security requirements</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h4 className="text-xl font-semibold mb-3">Static & Dynamic Analysis</h4>
                <p>Examining code and runtime behavior to identify potential vulnerabilities</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h4 className="text-xl font-semibold mb-3">Vulnerability Exploitation</h4>
                <p>Attempting to exploit identified vulnerabilities to confirm their existence</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">4</div>
                <h4 className="text-xl font-semibold mb-3">Reporting & Remediation</h4>
                <p>Detailed reporting with clear remediation steps and post-remediation testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Specialized expertise in both Android and iOS security testing",
    "Comprehensive testing methodology covering OWASP Mobile Top 10 and beyond",
    "Experience with a wide range of mobile app architectures and technologies",
    "Detailed reports with clear remediation guidance specific to mobile platforms",
    "Post-remediation verification to ensure vulnerabilities are properly fixed"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Mobile App Testing</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-start">
                  <div className="bg-[#f28749] bg-opacity-10 p-2 rounded-lg mr-4 mt-1">
                    <Smartphone className="h-6 w-6 text-[#f28749]" />
                  </div>
                  <p className="text-lg">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-[#f28749] text-white font-medium px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Contact Us for Mobile App Testing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MAPTPage; 