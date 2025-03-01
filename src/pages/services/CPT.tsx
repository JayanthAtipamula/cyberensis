import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Cloud, CheckCircle } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';

const CPTPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ServiceHero />
        <ServiceDetails />
        <ServiceProcess />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Cloud Penetration Testing (CPT)</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Comprehensive security assessment of cloud environments to identify vulnerabilities and security misconfigurations.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cloud Penetration Testing" 
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
              <Cloud className="h-8 w-8 text-[#f28749]" />
            </div>
            <h2 className="text-3xl font-bold dark:text-white">What is Cloud Penetration Testing?</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              Cloud Penetration Testing (CPT) is a specialized security assessment that identifies and exploits vulnerabilities in cloud environments, including infrastructure, platforms, and applications. This proactive approach helps organizations secure their cloud deployments before malicious actors can discover and exploit weaknesses.
            </p>
            
            <p className="mt-4">
              Our Cloud Penetration Testing service examines various aspects of cloud environments, including:
            </p>
            
            <ul className="mt-4 space-y-2">
              <li>
                <strong className="text-gray-900 dark:text-white">Cloud infrastructure security</strong> - Assessing the security of virtual machines, containers, storage, and networking components.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Identity and access management</strong> - Evaluating IAM configurations, roles, permissions, and authentication mechanisms.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Cloud service configurations</strong> - Identifying misconfigurations in cloud services that could lead to security vulnerabilities.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Data protection</strong> - Assessing data encryption, access controls, and backup mechanisms.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">API security</strong> - Testing the security of APIs used to manage and interact with cloud resources.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Compliance validation</strong> - Verifying that cloud deployments meet relevant compliance requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">The Process of Cloud Penetration Testing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl">1</div>
              <h3 className="text-2xl font-semibold mb-4">Scope and Information Gathering</h3>
              <p className="text-lg text-gray-700">
                Gathering required information to begin our penetration testing. Environment details, access to the application with the right permission, Cloud service providers information hosting and services obtained from the cloud service provider.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl">2</div>
              <h3 className="text-2xl font-semibold mb-4">Planning and Assessment</h3>
              <p className="text-lg text-gray-700">
                As per given information, Penetration testers will initiate analysis and multiple attacks on cloud environment to identify Possibilities of vulnerabilities. Custom scripts, open-source exploits and tools were used to assess the occurrence of issues in a cloud-based environment.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl">3</div>
              <h3 className="text-2xl font-semibold mb-4">Reporting and Remediation</h3>
              <p className="text-lg text-gray-700">
                After assessing the vulnerabilities manual and automated testing a brief report will be generated with all vulnerabilities and loopholes. Followed by remediations will also discuss with the cloud service provider as well as the client.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 font-bold text-xl">4</div>
              <h3 className="text-2xl font-semibold mb-4">Retest</h3>
              <p className="text-lg text-gray-700">
                Once remediation process gets done, Pen-tester will test again to confirm whether remediation was appropriately taken place or not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Identify security vulnerabilities in your cloud environments before attackers can exploit them",
    "Evaluate the effectiveness of cloud security controls and configurations",
    "Understand the potential impact of successful attacks on your cloud resources",
    "Receive detailed remediation guidance specific to your cloud provider and services",
    "Meet compliance requirements for cloud security testing",
    "Reduce the risk of data breaches and associated costs",
    "Gain insights into potential attack paths through your cloud environment",
    "Improve your overall cloud security posture and resilience"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Benefits of Our Cloud Penetration Testing</h2>
          
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
      title: "Cloud Security Specialists",
      description: "Our team includes experts in AWS, Azure, and Google Cloud security who understand the unique vulnerabilities and attack vectors specific to cloud environments."
    },
    {
      title: "Multi-Cloud Expertise",
      description: "We have deep knowledge of multiple cloud platforms, allowing us to identify platform-specific vulnerabilities and security best practices."
    },
    {
      title: "Comprehensive Testing Methodology",
      description: "Our approach combines automated scanning with manual testing to ensure thorough coverage of all potential security issues in your cloud deployments."
    },
    {
      title: "Actionable Reporting",
      description: "We provide clear, detailed reports with specific remediation guidance tailored to your cloud environment and services."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">Why Choose Our Cloud Penetration Testing</h2>
          
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

export default CPTPage; 