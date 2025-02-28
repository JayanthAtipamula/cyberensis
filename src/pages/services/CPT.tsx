import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Cloud, CheckCircle } from 'lucide-react';

const CPTPage = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cloud Penetration Testing (CPT)</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive security assessment of cloud environments to identify vulnerabilities and security misconfigurations.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cloud Penetration Testing Services" 
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
          <h2 className="text-3xl font-bold mb-8">What is Cloud Penetration Testing?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Cloud is advanced Generation technology to utilize network resources and servers can access over the internet from anywhere. By using cloud environment, users and companies don't have to manage physical servers or run applications on their servers.
            </p>
            
            <p className="mb-6">
              Cloud Penetration Testing (CPT) aims to identify exploitable vulnerabilities in cloud environments. Cloud Penetration Testing (CPT) services can assess configuration, permissions models as well as hybrid and multi-cloud environment to regulate Avenues of attack, that are conceivable within your domain.
            </p>
            
            <p className="mb-6">
              It is a method of actively checking and examining the cloud systems by simulating the attack from the malicious attacks. Due to the impact of infrastructure, penetration testing is not allowed in Software as a Service Environment. Platform as a Service and Infrastructures as a Service are allowed for penetration testing.
            </p>
            
            <p className="mb-6">
              Usual cloud security monitoring should be implemented to the occurrence of threats, risks, and vulnerabilities.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">How Cloud Penetration Testing Will Help Your Organization</h3>
              <p className="mt-4">
                Cloud Technology is can be said in a simple way as digital transformation, which can help organizations to finest use of resources. Cloud environment must be protected with adequate security controls and policies as it contains highly classified and sensitive information.
              </p>
              <p className="mt-4">
                Cloud Penetration Testing (CPT) will manage and achieve compliance with a Security risk. Increase threat detection protects data across its life cycle and allows security in DevOps. Minimize the costs instead of maintaining network resources.
              </p>
            </div>
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
    "Protection of clouds sensitive data against hackers and cybercriminals",
    "Detection of abnormal credential usage, misconfigurations etc.",
    "Recovery and safety of data device is lost",
    "Understanding the current cloud security measures",
    "Safeguard critical cloud assets and data",
    "Profitable effortlessly organized solution for monitoring and fluctuating"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Cloud Penetration Testing</h2>
          
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
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Cyberensis experts will design a secure architecture of testing methodology to support defence across multi-cloud situations",
    "Our experts will test guard rails, security, privacy compliance and requirement along with test automation and fixes",
    "We also focus on monitoring and response using self-build technologies and controls",
    "We frame the cloud security testing approach for cloud assets"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Cloud Penetration Testing</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-start">
                  <div className="bg-[#f28749] bg-opacity-10 p-2 rounded-lg mr-4 mt-1">
                    <Cloud className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for Cloud Penetration Testing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPTPage; 