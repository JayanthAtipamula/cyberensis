import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';

const VAPTPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Vulnerability Assessment & Penetration Testing (VAPT)</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive security assessment to identify and exploit vulnerabilities in your systems before attackers do.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="VAPT Services" 
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
              <Shield className="h-8 w-8 text-[#f28749]" />
            </div>
            <h2 className="text-3xl font-bold dark:text-white">What is VAPT?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Vulnerability Assessment and Penetration Testing (VAPT) is a comprehensive security testing approach that combines two complementary techniques:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Vulnerability Assessment:</strong> A systematic review of security weaknesses in an information system. It evaluates if the system is susceptible to any known vulnerabilities, assigns severity levels to those vulnerabilities, and recommends remediation or mitigation where needed.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Penetration Testing:</strong> An authorized simulated attack on a computer system, performed to evaluate the security of the system. The test is performed to identify both weaknesses (vulnerabilities) and strengths, to determine whether unauthorized access or other malicious activity is possible.
              </li>
            </ul>
            
            <p className="mt-6">
              Together, these methodologies provide a comprehensive view of your organization's security posture, identifying vulnerabilities and demonstrating the impact of successful exploits on your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Identify security vulnerabilities before attackers do",
    "Understand the real-world impact of vulnerabilities through simulated attacks",
    "Receive detailed remediation guidance from security experts",
    "Prioritize security fixes based on risk severity",
    "Meet compliance requirements for regular security testing",
    "Improve your overall security posture",
    "Protect sensitive data from unauthorized access",
    "Reduce the risk of security breaches and associated costs"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Benefits of Our VAPT Services</h2>
          
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
      title: "Expert Security Team",
      description: "Our team consists of certified security professionals with years of experience in identifying and exploiting vulnerabilities across various platforms and technologies."
    },
    {
      title: "Comprehensive Methodology",
      description: "We follow a structured, thorough approach that combines automated scanning with manual testing to ensure no vulnerability goes undetected."
    },
    {
      title: "Clear, Actionable Reports",
      description: "Our reports provide detailed findings with severity ratings, proof of concepts, and specific remediation guidance that your technical team can implement."
    },
    {
      title: "Continuous Support",
      description: "We don't just identify issues and leave. Our team provides ongoing support to help you understand and address the vulnerabilities we find."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Why Choose Our VAPT Services</h2>
          
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

export default VAPTPage; 