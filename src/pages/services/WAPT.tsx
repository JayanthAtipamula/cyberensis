import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Globe, CheckCircle } from 'lucide-react';

const WAPTPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Application Penetration Testing (WAPT)</h1>
            <p className="text-lg text-gray-600 mb-8">
              In-depth security testing of web applications to uncover and remediate vulnerabilities in your web-based systems.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="WAPT Services" 
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
          <h2 className="text-3xl font-bold mb-8">What is Web Application Penetration Testing?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Web Application Penetration Testing (WAPT) is a specialized security assessment focused on identifying and exploiting vulnerabilities in web-based applications. Our expert testers use both manual and automated techniques to thoroughly evaluate your web applications for security weaknesses that could be exploited by malicious actors.
            </p>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">The Importance of WAPT</h3>
            <p className="mb-6">
              Web applications are often the most exposed part of an organization's digital infrastructure, making them prime targets for attackers. These applications frequently handle sensitive data and provide access to critical backend systems. A comprehensive WAPT helps identify vulnerabilities before they can be exploited, protecting your organization's data, reputation, and operations.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Our WAPT Methodology</h3>
              <p className="mt-4">
                We use a wide-ranging basis to conduct the assessment of web-based applications. Our experts can spot critical security flaws in the entire web application or its components like source code, databases, and back-end network. Our methodology follows industry standards including OWASP Top 10 and includes both automated scanning and in-depth manual testing.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">Common Web Application Vulnerabilities</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Injection Flaws</h4>
                <p>SQL, NoSQL, OS, and LDAP injection flaws occur when untrusted data is sent to an interpreter as part of a command or query.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Broken Authentication</h4>
                <p>Authentication and session management functions are often implemented incorrectly, allowing attackers to compromise passwords, keys, or session tokens.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Cross-Site Scripting (XSS)</h4>
                <p>XSS flaws occur when an application includes untrusted data in a new web page without proper validation or escaping.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Security Misconfigurations</h4>
                <p>Security misconfigurations are the most commonly seen issue, often resulting from insecure default configurations or incomplete configurations.</p>
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
    "Identification of critical security vulnerabilities in web applications",
    "Detailed remediation guidance to fix identified issues",
    "Compliance with regulatory requirements and industry standards",
    "Protection of sensitive customer and business data",
    "Reduced risk of data breaches and associated costs",
    "Improved security awareness among development teams",
    "Enhanced trust from customers and partners"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Web Application Penetration Testing</h2>
          
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
            <h3 className="text-2xl font-semibold mb-6">Our WAPT Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h4 className="text-xl font-semibold mb-3">Planning & Reconnaissance</h4>
                <p>Define scope, gather information, and understand the application architecture</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h4 className="text-xl font-semibold mb-3">Scanning & Analysis</h4>
                <p>Automated and manual scanning to identify potential vulnerabilities</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h4 className="text-xl font-semibold mb-3">Exploitation</h4>
                <p>Attempt to exploit identified vulnerabilities to confirm their existence</p>
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
    "Experienced team of certified web application security specialists",
    "Comprehensive testing methodology covering OWASP Top 10 and beyond",
    "Detailed reports with clear remediation guidance and prioritization",
    "Focus on both automated and manual testing for thorough coverage",
    "Post-remediation verification to ensure vulnerabilities are properly fixed"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for WAPT</h2>
          
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
                    <Globe className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for WAPT Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WAPTPage; 