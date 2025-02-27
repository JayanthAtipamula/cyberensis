import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';
import { AnimatedSpan, Terminal, TypingAnimation } from "../registry/magicui/terminal";

const TerminalDemo = () => {
  return (
    <Terminal>
      <TypingAnimation>&gt; cybershield scan --target example.com</TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Initializing security scan</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Checking for open ports</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Scanning for web vulnerabilities</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Testing SSL/TLS configuration</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Checking for outdated software</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Analyzing security headers</span>
      </AnimatedSpan>

      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Testing for common misconfigurations</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Generating comprehensive report</span>
      </AnimatedSpan>

      <AnimatedSpan delay={5500} className="text-blue-500">
        <span>ℹ Scan complete. Found 3 critical, 5 medium, and 8 low vulnerabilities</span>
      </AnimatedSpan>

      <TypingAnimation delay={6000} className="text-[#f28749]">
        CyberShield protection recommendations ready.
      </TypingAnimation>

      <TypingAnimation delay={6500} className="text-muted-foreground">
        Run 'cybershield remediate' to fix issues automatically.
      </TypingAnimation>
    </Terminal>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold mb-6">About CyberShield</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2015, CyberShield has been at the forefront of cybersecurity innovation, 
              helping businesses identify and mitigate security vulnerabilities before they can be exploited.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our team of certified security experts brings decades of combined experience in penetration testing, 
              vulnerability assessment, and security consulting across various industries including finance, 
              healthcare, e-commerce, and government sectors.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <p>Certified security professionals with industry-recognized credentials</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <p>Comprehensive methodology covering OWASP Top 10 and beyond</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                <p>Detailed reporting with actionable remediation steps</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="mb-6">
              <TerminalDemo />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;