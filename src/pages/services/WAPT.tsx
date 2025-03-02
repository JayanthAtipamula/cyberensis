import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Globe, CheckCircle } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';
import PromotionalBanner from '../../components/PromotionalBanner';

const WAPTPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ServiceHero />
        <PromotionalBanner 
          title="Secure Your Web Applications"
          description="Contact our experts to schedule a comprehensive web application penetration test to identify and fix vulnerabilities."
          buttonText="Request WAPT"
          buttonLink="/contact"
        />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Web Application Penetration Testing (WAPT)</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-full mr-4">
              <Globe className="h-8 w-8 text-[#f28749]" />
            </div>
            <h2 className="text-3xl font-bold dark:text-white relative inline-block">
              What is Web Application Penetration Testing?
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
            </h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Web Application Penetration Testing (WAPT) is a specialized security assessment focused on identifying and exploiting vulnerabilities in web-based applications. It involves a systematic analysis of how the application processes data, authenticates users, handles sessions, and protects sensitive information.
            </p>
            
            <p className="mt-4">
              Our WAPT service simulates real-world attacks on your web applications to identify security weaknesses before malicious actors can exploit them. We examine all aspects of your web applications, including:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Authentication mechanisms</strong> - Testing for weaknesses in login systems, password policies, and multi-factor authentication.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Session management</strong> - Examining how user sessions are handled and whether they can be hijacked or manipulated.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Input validation</strong> - Checking for vulnerabilities like SQL injection, cross-site scripting (XSS), and command injection.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Access controls</strong> - Verifying that users can only access data and functions they're authorized to use.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Business logic flaws</strong> - Identifying vulnerabilities in the application's business processes that could be exploited.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">API security</strong> - Testing the security of application programming interfaces that your web application uses.
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
    "Identify critical web application vulnerabilities before attackers can exploit them",
    "Protect sensitive customer data and maintain compliance with data protection regulations",
    "Receive detailed remediation guidance specific to your web application's technology stack",
    "Reduce the risk of data breaches, financial losses, and reputational damage",
    "Gain confidence in the security of your customer-facing web applications",
    "Meet compliance requirements for regular security testing",
    "Understand the real-world impact of vulnerabilities through proof-of-concept exploits",
    "Improve your development team's security awareness and practices"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white relative inline-block">
            Benefits of Our WAPT Services
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
          
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
      title: "Specialized Web Application Security Expertise",
      description: "Our team includes specialists in web application security who stay current with the latest vulnerabilities, attack techniques, and security best practices."
    },
    {
      title: "Comprehensive Testing Methodology",
      description: "We combine automated scanning with in-depth manual testing to identify vulnerabilities that automated tools alone might miss, including business logic flaws."
    },
    {
      title: "Detailed, Actionable Reporting",
      description: "Our reports include clear explanations of vulnerabilities, their potential impact, proof-of-concept demonstrations, and specific remediation guidance."
    },
    {
      title: "Developer-Friendly Approach",
      description: "We work closely with your development team to help them understand security issues and implement effective fixes, providing guidance throughout the remediation process."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white relative inline-block">
            Why Choose Our WAPT Services
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f28749] to-[#1e3a8a] rounded-full"></div>
          </h2>
          
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

export default WAPTPage; 