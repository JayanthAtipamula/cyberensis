import React from 'react';
import { NavBar } from '../../components/ui/tubelight-navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, BookOpen, CheckCircle, Users, ShieldAlert, Laptop, GraduationCap, Globe } from 'lucide-react';
import { commonNavItems } from '../../lib/navItems';
import PromotionalBanner from '../../components/PromotionalBanner';

const TrainingPage = () => {
  return (
    <div className="min-h-screen bg-[#f2f2f2] dark:bg-gray-900">
      <NavBar items={commonNavItems} />
      <main className="pt-20">
        <ServiceHero />
        <PromotionalBanner 
          title="Empower Your Team with Cybersecurity Knowledge"
          description="Contact us to schedule comprehensive cybersecurity training programs tailored to your organization's needs."
          buttonText="Schedule Training"
          buttonLink="/contact"
        />
        <ServiceDetails />
        <ServiceOfferings />
        <ServiceBenefits />
        <WhyChooseUs />
        <TrainingCards />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cybersecurity Trainings</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive training programs to educate your team on cybersecurity best practices and threat awareness.
            </p>
          </div>
          <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Cybersecurity Training Services" 
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
          <h2 className="text-3xl font-bold mb-8">Cybersecurity Training Programs</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              In today's digital landscape, your employees are both your greatest asset and potentially your greatest vulnerability when it comes to cybersecurity. Our comprehensive cybersecurity training programs are designed to transform your workforce into a strong first line of defense against cyber threats.
            </p>
            
            <p className="mb-6">
              We offer a range of training programs tailored to different roles, skill levels, and organizational needs. From basic security awareness for all employees to specialized technical training for IT and security professionals, our programs provide practical knowledge and skills that can be immediately applied in the workplace.
            </p>
            
            <div className="bg-white p-8 rounded-xl shadow-sm my-10">
              <h3 className="text-2xl font-semibold mb-4">Why Cybersecurity Training Matters</h3>
              <p className="mt-4">
                Human error remains one of the leading causes of security breaches. By investing in cybersecurity training, you can:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Reduce the risk of security incidents caused by human error</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Build a security-aware culture throughout your organization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Ensure compliance with regulatory requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Enhance your overall security posture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrainingCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Get Started with Cybersecurity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Cybersecurity Requirements Card */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <ShieldAlert className="h-10 w-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Let us assist you with your Business Cybersecurity Requirements
              </h3>
              <p className="text-gray-600 mb-6">
                Get an Immediate Support!!!
              </p>
              <p className="text-gray-600 mb-8">
                Our Support Team is just a Click of a Button Away.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[#f28749] text-white font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Connect Now!
              </a>
            </div>
            
            {/* Get Trained, Get Certified Card */}
            <div className="bg-white p-10 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-teal-100 p-3 rounded-full mb-4">
                <Globe className="h-10 w-10 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Get Trained, Get Certified
              </h3>
              <p className="text-gray-600 mb-6">
                We provide multiple trainings.
              </p>
              <p className="text-gray-600 mb-8">
                On Ethical Hacking, Bug Hunting, VAPT, SOC, Web Application Security, Compliance, etc.
              </p>
              <a 
                href="/services/training-courses" 
                className="inline-block bg-[#f28749] text-white font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Explore Now!
              </a>
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
          <h2 className="text-3xl font-bold mb-10">Our Training Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Users className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Security Awareness Training</h3>
              <p className="text-lg text-gray-700 mb-4">
                Basic cybersecurity training for all employees, covering essential security concepts and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Phishing awareness and prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Password security and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Social engineering defense</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Safe internet and email practices</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <ShieldAlert className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Advanced Security Training</h3>
              <p className="text-lg text-gray-700 mb-4">
                Specialized training for IT and security professionals to enhance technical security skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Network security fundamentals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Secure system administration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Incident response procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security tools and technologies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <Laptop className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure Development Training</h3>
              <p className="text-lg text-gray-700 mb-4">
                Training for developers on secure coding practices and application security principles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Secure coding principles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Common vulnerabilities (OWASP Top 10)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security testing techniques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Secure SDLC implementation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="bg-[#f28749] bg-opacity-10 p-3 rounded-lg inline-block mb-6">
                <GraduationCap className="h-8 w-8 text-[#f28749]" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Executive Cybersecurity Training</h3>
              <p className="text-lg text-gray-700 mb-4">
                Tailored training for executives and board members on cybersecurity governance and risk management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Cybersecurity risk oversight</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Security investment prioritization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Incident response leadership</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#f28749] mr-3 flex-shrink-0 mt-1" />
                  <span>Regulatory compliance considerations</span>
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
    "Reduced risk of security incidents caused by human error",
    "Increased employee awareness of cybersecurity threats and best practices",
    "Improved ability to detect and respond to security incidents",
    "Enhanced compliance with regulatory requirements",
    "Development of a security-conscious organizational culture",
    "Increased confidence in handling security challenges",
    "Reduced costs associated with security breaches"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Benefits of Our Cybersecurity Training</h2>
          
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
    "Experienced trainers with real-world cybersecurity expertise",
    "Customized training programs tailored to your organization's specific needs",
    "Engaging, interactive training methods that enhance knowledge retention",
    "Practical, actionable content that can be immediately applied",
    "Ongoing support and resources to reinforce learning"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Why Choose Cyberensis for Cybersecurity Training</h2>
          
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
                    <BookOpen className="h-6 w-6 text-[#f28749]" />
                  </div>
                  <p className="text-lg">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default TrainingPage; 