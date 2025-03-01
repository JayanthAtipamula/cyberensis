import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Server, CheckCircle } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';

const NIPTPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Network/Infrastructure Penetration Testing</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Thorough assessment of network infrastructure to identify security gaps and weaknesses in your network architecture.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Network Infrastructure Penetration Testing" 
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
              <Server className="h-8 w-8 text-[#f28749]" />
            </div>
            <h2 className="text-3xl font-bold dark:text-white">What is Network/Infrastructure Penetration Testing?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Network/Infrastructure Penetration Testing is a comprehensive security assessment that evaluates the security of your network infrastructure by identifying and exploiting vulnerabilities in network devices, servers, and systems. This proactive approach helps organizations identify security weaknesses before malicious actors can exploit them.
            </p>
            
            <p className="mt-4">
              Our Network/Infrastructure Penetration Testing service examines various components of your network infrastructure, including:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Network devices</strong> - Routers, switches, firewalls, and other network equipment.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Servers and workstations</strong> - Operating systems, configurations, and patch management.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Network services</strong> - DNS, DHCP, email, and other critical services.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Wireless networks</strong> - Access points, authentication mechanisms, and encryption.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Virtual environments</strong> - Hypervisors, virtual machines, and containers.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Network segmentation</strong> - Effectiveness of network segregation and access controls.
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
    "Identify vulnerabilities in network infrastructure before attackers can exploit them",
    "Evaluate the effectiveness of existing security controls and defenses",
    "Understand the potential impact of successful attacks on your network",
    "Receive detailed remediation guidance to strengthen your network security",
    "Meet compliance requirements for regular security testing",
    "Reduce the risk of network breaches and associated costs",
    "Gain insights into potential attack paths through your network",
    "Improve your overall security posture and resilience"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Benefits of Our Network Penetration Testing</h2>
          
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
      title: "Experienced Network Security Specialists",
      description: "Our team includes certified network security professionals with extensive experience in identifying and exploiting vulnerabilities across various network environments."
    },
    {
      title: "Comprehensive Testing Methodology",
      description: "We employ a structured approach that combines automated scanning with manual testing to ensure thorough coverage of your network infrastructure."
    },
    {
      title: "Detailed, Actionable Reporting",
      description: "Our reports provide clear explanations of vulnerabilities, their potential impact, and specific remediation guidance tailored to your network environment."
    },
    {
      title: "Minimal Disruption",
      description: "We conduct our testing with minimal impact on your network operations, ensuring business continuity throughout the assessment process."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Why Choose Our Network Penetration Testing</h2>
          
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

export default NIPTPage; 