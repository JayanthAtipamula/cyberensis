import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Code, CheckCircle, Monitor, Smartphone, Lock, Shield } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';
import PromotionalBanner from '../../components/PromotionalBanner';

const DevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ServiceHero />
        <PromotionalBanner 
          title="Build Secure Applications"
          description="Contact our experts to discuss your secure application development needs for web and mobile platforms."
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Application Development</h1>
            <p className="text-lg text-gray-600 mb-8">
              Web and Mobile Apps (Android & iOS) Development with security built-in from the ground up.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80" 
              alt="Secure Application Development" 
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
          <h2 className="text-3xl font-bold mb-8">Secure Application Development</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              At Cyberensis, we specialize in developing secure applications that not only meet your business requirements but also adhere to the highest security standards. Our secure application development service integrates security at every stage of the development lifecycle, ensuring that your applications are resilient against modern cyber threats.
            </p>
            
            <p className="mb-6">
              With the increasing frequency and sophistication of cyber attacks, traditional application development approaches are no longer sufficient. Our security-first approach ensures that potential vulnerabilities are identified and addressed early in the development process, reducing the risk of security breaches and data loss.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Our Secure Development Approach</h3>
              <p className="mt-4">
                We follow a comprehensive secure development lifecycle that incorporates security at every stage:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security requirements gathering and threat modeling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Secure architecture design and code reviews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Implementation of security controls and best practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Regular security testing throughout development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Comprehensive security validation before deployment</span>
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
          <h2 className="text-3xl font-bold mb-10">Our Development Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Monitor className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Application Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                We develop secure, responsive, and scalable web applications using modern frameworks and technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>E-commerce platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Enterprise web portals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Progressive web apps (PWAs)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Smartphone className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Mobile Application Development</h3>
              <p className="text-lg text-gray-700 mb-4">
                We create secure and user-friendly mobile applications for both Android and iOS platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Native iOS applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Native Android applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Cross-platform applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Enterprise mobile solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Lock className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">API Development & Integration</h3>
              <p className="text-lg text-gray-700 mb-4">
                We develop secure APIs and integrate third-party services into your applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>RESTful API development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>GraphQL API development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Third-party API integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>API security implementation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Shield className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Security Consulting & Code Review</h3>
              <p className="text-lg text-gray-700 mb-4">
                We provide security consulting and code review services for existing applications.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security architecture review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Secure code review</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security remediation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security best practices implementation</span>
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
    "Applications built with security as a core feature, not an afterthought",
    "Reduced risk of security breaches and data loss",
    "Compliance with industry security standards and regulations",
    "Lower long-term maintenance costs due to secure coding practices",
    "Faster time-to-market with security built-in from the start",
    "Enhanced user trust and confidence in your applications"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Secure Application Development</h2>
          
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
    "Team of experienced developers with security expertise",
    "Proven track record of delivering secure applications",
    "Comprehensive security testing throughout the development lifecycle",
    "Focus on both functionality and security",
    "Ongoing support and maintenance with security updates"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Application Development</h2>
          
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
                    <Code className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for Secure Application Development
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentPage; 