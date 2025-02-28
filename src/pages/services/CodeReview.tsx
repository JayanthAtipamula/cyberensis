import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Terminal, CheckCircle, Code, AlertTriangle, FileSearch, ShieldCheck } from 'lucide-react';

const CodeReviewPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Source Code Review</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thorough review of source code in various programming languages to identify security vulnerabilities.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Source Code Review Services" 
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
          <h2 className="text-3xl font-bold mb-8">What is Source Code Review?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Source Code Review is a systematic examination of your application's source code to identify security vulnerabilities, coding errors, and deviations from best practices. Our expert security analysts manually review your code line by line, complemented by automated tools, to uncover security issues that might be missed during regular testing.
            </p>
            
            <p className="mb-6">
              Unlike dynamic testing methods that evaluate running applications, source code review examines the actual code that makes up your application, allowing us to identify vulnerabilities at their source. This approach is particularly effective at finding logical flaws, hardcoded credentials, insecure cryptographic implementations, and other issues that might not be apparent during runtime testing.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Why Source Code Review Matters</h3>
              <p className="mt-4">
                Security vulnerabilities in source code can lead to serious consequences, including data breaches, unauthorized access, and system compromise. By identifying and addressing these issues early in the development lifecycle, you can:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Prevent security incidents before they occur</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Reduce the cost of fixing vulnerabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Improve the overall quality of your codebase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Meet compliance requirements for secure coding</span>
                </li>
              </ul>
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
          <h2 className="text-3xl font-bold mb-10">Our Source Code Review Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <FileSearch className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Scope Definition & Setup</h3>
              <p className="text-lg text-gray-700">
                We work with you to define the scope of the review, including which code repositories, components, or modules to focus on. We then set up the necessary environment to access and analyze your code.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Code className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Automated Scanning</h3>
              <p className="text-lg text-gray-700">
                We use specialized static application security testing (SAST) tools to perform an initial scan of your codebase, identifying potential security issues and areas that require deeper manual review.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Terminal className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Manual Code Analysis</h3>
              <p className="text-lg text-gray-700">
                Our security experts manually review your code, focusing on critical components, security-sensitive functions, and areas flagged during automated scanning. We analyze the code for security vulnerabilities, logic flaws, and deviations from secure coding practices.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <AlertTriangle className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">4. Vulnerability Verification</h3>
              <p className="text-lg text-gray-700">
                We verify identified vulnerabilities to eliminate false positives and determine their real-world impact. This includes assessing the exploitability and potential business impact of each issue.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <FileText className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">5. Detailed Reporting</h3>
              <p className="text-lg text-gray-700">
                We provide a comprehensive report detailing all identified vulnerabilities, including severity ratings, detailed descriptions, code snippets, and specific recommendations for remediation.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <ShieldCheck className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">6. Remediation Support</h3>
              <p className="text-lg text-gray-700">
                We provide guidance and support during the remediation process, helping your development team understand and fix the identified issues. We can also perform a follow-up review to verify that vulnerabilities have been properly addressed.
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
    "Early detection of security vulnerabilities before they reach production",
    "Identification of issues that might be missed by dynamic testing methods",
    "Detailed remediation guidance specific to your codebase",
    "Knowledge transfer to your development team on secure coding practices",
    "Improved code quality and maintainability",
    "Reduced security risks and potential compliance violations",
    "Cost savings by addressing security issues early in the development lifecycle"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Source Code Review</h2>
          
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
    "Team of experienced security code reviewers with expertise in multiple programming languages",
    "Combination of manual review and advanced automated tools for comprehensive coverage",
    "Focus on actionable findings with clear remediation guidance",
    "Experience across various industries and application types",
    "Collaborative approach that works with your development team"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Source Code Review</h2>
          
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
                    <Terminal className="h-6 w-6 text-[#f28749]" />
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
              Contact Us for Source Code Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeReviewPage; 