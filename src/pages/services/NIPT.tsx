import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Server, CheckCircle } from 'lucide-react';

const NIPTPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Network/Infrastructure Penetration Testing</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thorough assessment of network infrastructure to identify security gaps and weaknesses in your network architecture.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Network Penetration Testing Services" 
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
          <h2 className="text-3xl font-bold mb-8">What is Network/Infrastructure Penetration Testing?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Network/Infrastructure Penetration Testing (NIPT) is a comprehensive security assessment that identifies exploitable vulnerabilities in your network infrastructure before malicious attackers can find and exploit them. This proactive approach to security helps organizations strengthen their network defenses and protect critical assets.
            </p>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">The Importance of Network Security</h3>
            <p className="mb-6">
              Your network infrastructure is the backbone of your organization's IT operations. It connects your systems, applications, and users, making it a critical component of your overall security posture. A breach in your network can lead to unauthorized access to sensitive data, disruption of services, and significant financial and reputational damage.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Our NIPT Approach</h3>
              <p className="mt-4">
                The main objective of our network penetration testing is to identify exploitable vulnerabilities in systems, hosts, network devices (like switches and routers), and other infrastructure components. We simulate real-world attacks to discover security weaknesses that could be exploited by malicious actors, providing you with actionable insights to strengthen your defenses.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mt-10 mb-4">What We Test</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Network Devices</h4>
                <p>Routers, switches, firewalls, and other network equipment that could contain vulnerabilities or misconfigurations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Servers & Workstations</h4>
                <p>Operating systems, services, and applications running on servers and workstations that might be vulnerable to attacks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Network Protocols</h4>
                <p>Assessment of protocols like DNS, DHCP, SMTP, and others for security weaknesses that could be exploited.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-3">Wireless Networks</h4>
                <p>Evaluation of wireless network security, including encryption, authentication mechanisms, and access controls.</p>
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
    "Identification of security vulnerabilities in your network infrastructure",
    "Assessment of the effectiveness of existing security controls",
    "Validation of network segmentation and access controls",
    "Evaluation of patch management effectiveness",
    "Detection of rogue devices and unauthorized access points",
    "Verification of firewall rule effectiveness",
    "Prioritized remediation recommendations based on risk"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Network/Infrastructure Penetration Testing</h2>
          
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
            <h3 className="text-2xl font-semibold mb-6">Our NIPT Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                <h4 className="text-xl font-semibold mb-3">Reconnaissance</h4>
                <p>Gathering information about the target network infrastructure</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                <h4 className="text-xl font-semibold mb-3">Scanning & Enumeration</h4>
                <p>Identifying active systems, open ports, and running services</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                <h4 className="text-xl font-semibold mb-3">Vulnerability Assessment</h4>
                <p>Identifying potential security weaknesses in the network</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#f28749] text-white w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold">4</div>
                <h4 className="text-xl font-semibold mb-3">Exploitation & Reporting</h4>
                <p>Verifying vulnerabilities and providing detailed remediation guidance</p>
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
    "Experienced team of certified network security professionals",
    "Comprehensive testing methodology covering all aspects of network infrastructure",
    "Use of both automated tools and manual techniques for thorough assessment",
    "Detailed reports with clear remediation guidance and prioritization",
    "Post-remediation verification to ensure vulnerabilities are properly fixed"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Network Penetration Testing</h2>
          
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
                    <Server className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for Network Penetration Testing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NIPTPage; 