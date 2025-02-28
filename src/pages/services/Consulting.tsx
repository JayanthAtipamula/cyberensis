import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, CheckCircle, ShieldCheck, Users, FileCheck, BookOpen } from 'lucide-react';

const ConsultingPage = () => {
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
        <ServiceOfferings />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Consulting</h1>
            <p className="text-lg text-gray-600 mb-8">
              Expert cybersecurity consultancy services to help your organization build a robust security posture.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Security Consulting Services" 
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
          <h2 className="text-3xl font-bold mb-8">Cybersecurity Consulting Services</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              In today's rapidly evolving threat landscape, organizations need expert guidance to navigate complex cybersecurity challenges. Our security consulting services provide strategic advice and practical solutions to help you build a comprehensive security program that protects your critical assets while enabling business growth.
            </p>
            
            <p className="mb-6">
              Our team of experienced security consultants brings deep expertise across various industries and security domains. We work closely with your team to understand your unique business requirements, assess your current security posture, and develop tailored strategies to address your specific security challenges.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Our Consulting Approach</h3>
              <p className="mt-4">
                We follow a structured approach to security consulting that ensures comprehensive coverage of your security needs:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Assessment of your current security posture and maturity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Identification of security gaps and vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Development of tailored security strategies and roadmaps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Implementation guidance and support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Continuous improvement and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceOfferings = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Our Consulting Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <ShieldCheck className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Security Strategy & Program Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                We help you develop comprehensive security strategies and programs aligned with your business objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security program assessment and design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security governance and operating model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security metrics and KPIs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <FileCheck className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Compliance & Risk Management</h3>
              <p className="text-lg text-gray-700 mb-4">
                We assist you in navigating complex regulatory requirements and managing security risks effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Regulatory compliance assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Risk assessment and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security policy development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Third-party risk management</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Users className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Security Architecture & Design</h3>
              <p className="text-lg text-gray-700 mb-4">
                We design secure architectures that protect your critical assets while enabling business operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security architecture assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Zero Trust architecture design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Cloud security architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security technology selection</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <BookOpen className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Security Awareness & Training</h3>
              <p className="text-lg text-gray-700 mb-4">
                We help you build a security-aware culture through effective training and awareness programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security awareness program development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Phishing simulation and training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Role-based security training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security culture assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceBenefits = () => {
  const benefits = [
    "Expert guidance from experienced security professionals",
    "Tailored security strategies aligned with your business objectives",
    "Reduced security risks and improved security posture",
    "Compliance with regulatory requirements and industry standards",
    "Cost-effective security solutions that maximize ROI",
    "Knowledge transfer to build internal security capabilities"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Our Security Consulting Services</h2>
          
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
    "Team of certified security professionals with diverse industry experience",
    "Practical, business-focused security advice that balances security and usability",
    "Vendor-neutral recommendations based on your specific needs",
    "Proven methodologies and frameworks adapted to your organization",
    "Ongoing support and partnership throughout your security journey"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Security Consulting</h2>
          
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
                    <Briefcase className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for Security Consulting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingPage; 